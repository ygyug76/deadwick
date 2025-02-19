
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <span className="px-3 py-1 text-sm font-medium bg-white/10 rounded-full mb-4 inline-block">
          Welcome to the future
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Experience the Next Generation Platform
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Transform your workflow with our cutting-edge solution designed for modern teams
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/preview"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-background hover:bg-gray-200 transition-colors duration-200"
          >
            Try It Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            to="/pricing"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition-colors duration-200"
          >
            View Pricing
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-16 glass-panel rounded-xl p-8 max-w-5xl w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: "Fast", desc: "Lightning-quick performance" },
            { title: "Secure", desc: "Enterprise-grade security" },
            { title: "Scalable", desc: "Grows with your needs" },
          ].map((feature) => (
            <div key={feature.title} className="hover-scale">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
