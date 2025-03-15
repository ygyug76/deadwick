
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { FeedbackData } from "@/types/feedback";

export const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  // Check for logged in user
  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUserId(session.user.id);
      }
    };
    getUser();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !message) {
      toast.error("Please fill in all fields");
      return;
    }
    
    setLoading(true);
    
    try {
      // Construct feedback data object - Don't include user_id if not authenticated
      const feedbackData: FeedbackData = {
        name,
        message,
        rating,
        is_public: false // Admin will review before making public
      };

      // Only include user_id if it exists
      if (userId) {
        feedbackData.user_id = userId;
      }
      
      const { error } = await supabase
        .from('feedback')
        .insert(feedbackData);
      
      if (error) {
        console.error("Error submitting feedback:", error);
        throw error;
      }
      
      toast.success("Thank you for your feedback!");
      setName("");
      setMessage("");
      setRating(5);
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error("Failed to submit feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-panel p-8 rounded-xl"
    >
      <h2 className="text-2xl font-bold mb-6">Share Your Feedback</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Rating</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                className={`p-2 rounded-lg ${
                  rating >= value ? "text-yellow-500" : "text-gray-400"
                }`}
              >
                <Star className={rating >= value ? "fill-yellow-500" : ""} />
              </button>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 rounded-lg bg-white text-background hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center disabled:opacity-70"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Feedback"
          )}
        </button>
      </form>
    </motion.div>
  );
};
