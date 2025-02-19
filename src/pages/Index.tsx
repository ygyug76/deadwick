
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Code, 
  Target, 
  Crosshair,
  Eye,
  Activity,
  Lock
} from "lucide-react";
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

  const features = [
    {
      icon: Target,
      title: "Aimbot",
      description: "Advanced targeting system"
    },
    {
      icon: Eye,
      title: "ESP",
      description: "See through walls"
    },
    {
      icon: Activity,
      title: "No Recoil",
      description: "Perfect stability"
    },
    {
      icon: Lock,
      title: "Anti-Ban",
      description: "Stay undetected"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 z-0"
        />
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, 30, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center max-w-3xl mx-auto z-10"
        >
          <motion.span
            variants={item}
            className="px-3 py-1 text-sm font-medium bg-purple-500/10 text-purple-400 rounded-full mb-4 inline-block"
          >
            Welcome to Deadwick
          </motion.span>
          <motion.h1
            variants={item}
            className="text-4xl md:text-7xl font-bold mb-6 leading-tight text-gradient"
          >
            Dominate Your Game
          </motion.h1>
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-gray-400 mb-8"
          >
            Premium BGMI enhancements for competitive players
          </motion.p>
          
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/preview"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-all duration-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-purple-500/20 hover:bg-purple-500/5 transition-all duration-200"
            >
              View Features
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-purple-400"
          >
            <ArrowRight className="h-6 w-6 rotate-90" />
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-900/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Premium Features</h2>
            <p className="text-gray-400">Advanced tools for competitive advantage</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-panel p-6 rounded-xl text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gradient">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Security Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto glass-panel rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gradient">Undetectable & Secure</h2>
              <div className="space-y-4">
                {[
                  { icon: Shield, title: "Anti-Detection System", desc: "Stay under the radar" },
                  { icon: Zap, title: "Instant Updates", desc: "Always compatible with latest game version" },
                  { icon: Lock, title: "HWID Protection", desc: "Secure license system" }
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="mt-1">
                      <item.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden glass-panel p-4">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse" />
                <div className="relative z-10 h-full flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Crosshair className="h-16 w-16 text-purple-400" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Ready to Level Up Your Game?
          </h2>
          <p className="text-gray-400 mb-8">
            Join thousands of satisfied players using our premium features
          </p>
          <Link
            to="/pricing"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-all duration-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 text-lg"
          >
            Get Started Now
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
