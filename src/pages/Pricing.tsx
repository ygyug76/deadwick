
import { motion } from "framer-motion";
import { Check, Shield, Clock, Zap, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "1 Day Access",
      price: "₹199",
      duration: "24 hours",
      features: ["Full Feature Access", "24/7 Support", "Anti-Ban Protection", "Instant Activation"],
      icon: Clock,
    },
    {
      name: "7 Days Access",
      price: "₹899",
      duration: "1 week",
      features: ["Full Feature Access", "24/7 Support", "Anti-Ban Protection", "Priority Support", "Instant Activation"],
      icon: Shield,
      popular: true,
    },
    {
      name: "30 Days Access",
      price: "₹2499",
      duration: "1 month",
      features: ["Full Feature Access", "24/7 Support", "Anti-Ban Protection", "VIP Support", "Instant Activation", "Premium Features"],
      icon: Zap,
    },
    {
      name: "60 Days Access",
      price: "₹3999",
      duration: "2 months",
      features: ["Full Feature Access", "24/7 Support", "Anti-Ban Protection", "VIP Support", "Instant Activation", "Premium Features", "Extended Support"],
      icon: Star,
    },
    {
      name: "Full Season",
      price: "₹5999",
      duration: "Full Season Access",
      features: ["Full Feature Access", "24/7 Support", "Anti-Ban Protection", "VIP Support", "Instant Activation", "Premium Features", "Season Updates", "Exclusive Content"],
      icon: Star,
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl font-bold mb-4 text-gradient">Choose Your Plan</h1>
        <p className="text-gray-400">Select the duration that best fits your needs</p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`glass-panel p-8 rounded-xl hover-scale relative ${
              plan.popular ? 'border-2 border-purple-500' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              </div>
            )}
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-500/10 flex items-center justify-center">
              <plan.icon className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold mb-2 text-gradient">{plan.price}</div>
            <p className="text-gray-400 mb-6">{plan.duration}</p>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/payment"
              state={{ plan }}
              className="block w-full text-center mt-8 px-6 py-3 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-colors duration-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
            >
              Get Started
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
