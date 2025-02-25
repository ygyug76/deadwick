
import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        toast.success("Check your email to confirm your account!");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        navigate("/");
        toast.success("Successfully logged in!");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-panel w-full max-w-md p-8 rounded-xl"
      >
        <h1 className="text-3xl font-bold mb-6 text-gradient text-center">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h1>
        <form onSubmit={handleAuth} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-black/20 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-black/20 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
              minLength={6}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            <span>{isSignUp ? "Sign Up" : "Sign In"}</span>
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
          >
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
