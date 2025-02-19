
import { motion } from "framer-motion";
import { ArrowRight, Monitor, Smartphone, Tablet } from "lucide-react";

const Preview = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Experience Our Platform</h1>
        <p className="text-gray-400">See how our solution works across all devices</p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Monitor, title: "Desktop", desc: "Full-featured experience" },
            { icon: Tablet, title: "Tablet", desc: "Touch-optimized interface" },
            { icon: Smartphone, title: "Mobile", desc: "On-the-go access" },
          ].map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-xl text-center hover-scale"
            >
              <Icon className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-panel p-8 rounded-xl text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-6">Try our platform free for 14 days</p>
          <button className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-background hover:bg-gray-200 transition-colors duration-200">
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Preview;
