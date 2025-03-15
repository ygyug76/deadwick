
import { motion } from "framer-motion";
import { MessageSquare, Star, ThumbsUp, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Feedback = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);
  const [testimonials, setTestimonials] = useState([
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      message: "Incredible platform that has transformed our workflow",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Developer",
      message: "The best developer experience I've had in years",
      rating: 5,
    },
    {
      name: "Emily Brown",
      role: "Designer",
      message: "Intuitive interface and powerful features",
      rating: 4,
    },
  ]);
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

  // Fetch public testimonials from Supabase
  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase
        .from('feedback')
        .select('name, message, created_at')
        .eq('is_public', true)
        .order('created_at', { ascending: false })
        .limit(5);
      
      if (error) {
        console.error("Error fetching testimonials:", error);
        return;
      }
      
      if (data && data.length > 0) {
        const formattedTestimonials = data.map(item => ({
          name: item.name,
          role: "User",
          message: item.message,
          rating: 5,
        }));
        setTestimonials(formattedTestimonials);
      }
    };
    
    fetchTestimonials();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !message) {
      toast.error("Please fill in all fields");
      return;
    }
    
    setLoading(true);
    
    try {
      const { error } = await supabase
        .from('feedback')
        .insert({
          name,
          message,
          user_id: userId,
          is_public: false // Admin will review before making public
        });
      
      if (error) throw error;
      
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
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Customer Feedback</h1>
          <p className="text-gray-400">What our users say about us</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold mb-6">Recent Testimonials</h2>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-6 rounded-xl hover-scale"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.message}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Feedback Form */}
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
        </div>
      </div>
    </div>
  );
};

export default Feedback;
