
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Code } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 pt-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-3xl mx-auto"
      >
        <motion.span
          variants={item}
          className="px-3 py-1 text-sm font-medium bg-purple-500/10 text-purple-400 rounded-full mb-4 inline-block"
        >
          Welcome to Deadwick
        </motion.span>
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gradient"
        >
          Revolutionizing Digital Experience
        </motion.h1>
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-gray-400 mb-8"
        >
          Transform your workflow with our cutting-edge solution designed for modern teams
        </motion.p>
        
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/preview"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-all duration-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
          >
            Try It Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            to="/pricing"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-purple-500/20 hover:bg-purple-500/5 transition-all duration-200"
          >
            View Pricing
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-16 glass-panel rounded-xl p-8 max-w-5xl w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed" },
            { icon: Shield, title: "Secure", desc: "Enterprise-grade security" },
            { icon: Code, title: "Developer First", desc: "Built for engineers" },
          ].map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl hover:bg-purple-500/5 transition-colors duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gradient">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
