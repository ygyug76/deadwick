
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the plan from the URL state or use a default
  const selectedPlan = location.state?.plan || {
    name: "7 Days Access",
    price: "₹899",
    duration: "1 week"
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!upiId) {
      toast.error("Please enter your UPI ID");
      return;
    }
    
    setLoading(true);
    
    try {
      // Check if user is authenticated
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast.error("Please sign in to complete your purchase");
        navigate("/auth", { state: { returnTo: "/payment", plan: selectedPlan } });
        return;
      }
      
      // Simulate payment processing
      setTimeout(() => {
        toast.success("Payment initiated! Check your UPI app to complete the transaction.");
        
        // Record the payment in Supabase (optional - will implement later)
        
        // Navigate to success page or dashboard
        setTimeout(() => {
          navigate("/");
        }, 2000);
        
        setLoading(false);
      }, 1500);
      
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Payment processing failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto glass-panel rounded-xl p-8"
      >
        <h1 className="text-3xl font-bold mb-6 text-gradient">Complete Your Purchase</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
          <div className="bg-black/20 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span>Plan:</span>
              <span className="font-medium">{selectedPlan.name}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Duration:</span>
              <span className="font-medium">{selectedPlan.duration}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-purple-400">
              <span>Total:</span>
              <span>{selectedPlan.price}</span>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <div className="grid grid-cols-1 gap-3">
              <label className="flex items-center space-x-3 p-4 rounded-lg bg-black/20 border border-white/10 cursor-pointer">
                <input 
                  type="radio" 
                  value="upi" 
                  checked={paymentMethod === "upi"}
                  onChange={() => setPaymentMethod("upi")}
                  className="form-radio h-5 w-5 text-purple-500"
                />
                <span>UPI Payment</span>
              </label>
            </div>
          </div>
          
          {paymentMethod === "upi" && (
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Your UPI ID
              </label>
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="yourname@upi"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
          )}
          
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-colors duration-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              "Complete Payment"
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Payment;
