
import { motion } from "framer-motion";
import { 
  Crosshair, 
  Eye, 
  Shield, 
  Zap, 
  Target, 
  Activity,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

const Preview = () => {
  const features = [
    {
      icon: Target,
      title: "Advanced Aimbot",
      description: "Precision targeting system with customizable settings",
      benefits: ["Adjustable FOV", "Smooth targeting", "Multiple modes"]
    },
    {
      icon: Eye,
      title: "ESP Features",
      description: "Complete awareness of your surroundings",
      benefits: ["Player ESP", "Item ESP", "Vehicle detection"]
    },
    {
      icon: Activity,
      title: "No Recoil",
      description: "Perfect weapon stability and control",
      benefits: ["All weapons supported", "Customizable patterns", "Instant activation"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="px-3 py-1 text-sm font-medium bg-purple-500/10 text-purple-400 rounded-full mb-4 inline-block">
          Premium BGMI Enhancement Suite
        </span>
        <h1 className="text-4xl font-bold mb-4 text-gradient">
          Elevate Your Gaming Experience
        </h1>
        <p className="text-gray-400">
          Advanced features designed for competitive players
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              variants={item}
              className="glass-panel p-6 rounded-xl hover-scale"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gradient">
                {feature.title}
              </h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center text-gray-300">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-6xl mx-auto"
      >
        <div className="glass-panel p-8 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gradient">
                Why Choose Deadwick?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: Shield,
                    title: "Undetected & Secure",
                    desc: "Advanced protection systems to keep you safe"
                  },
                  {
                    icon: Zap,
                    title: "Instant Delivery",
                    desc: "Get access to your purchase immediately"
                  },
                  {
                    icon: Crosshair,
                    title: "Regular Updates",
                    desc: "Constant improvements and compatibility updates"
                  }
                ].map((item) => (
                  <div key={item.title} className="flex items-start">
                    <div className="mt-1">
                      <item.icon className="h-5 w-5 text-purple-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="glass-panel p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Dominate?</h3>
                <p className="text-gray-400 mb-6">
                  Get instant access to our premium features
                </p>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-all duration-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
                >
                  View Plans
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <Zap className="ml-2 h-4 w-4" />
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-2xl mx-auto text-center mt-16 glass-panel p-8 rounded-xl"
      >
        <h2 className="text-2xl font-bold mb-4 text-gradient">
          24/7 Premium Support
        </h2>
        <p className="text-gray-400 mb-6">
          Our dedicated team is always here to help you with any questions or issues
        </p>
        <Link
          to="/feedback"
          className="inline-flex items-center px-6 py-3 rounded-lg border border-purple-500/20 hover:bg-purple-500/5 transition-all duration-200"
        >
          Contact Support
        </Link>
      </motion.div>
    </div>
  );
};

export default Preview;
