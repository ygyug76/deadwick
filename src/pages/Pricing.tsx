
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      features: ["Basic Features", "5 Projects", "Community Support", "1GB Storage"],
    },
    {
      name: "Pro",
      price: "$79",
      features: ["Advanced Features", "Unlimited Projects", "Priority Support", "10GB Storage", "API Access"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Custom Solutions", "Dedicated Support", "Unlimited Storage", "Custom Integrations", "SLA Agreement"],
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
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-gray-400">Choose the plan that best fits your needs</p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel p-8 rounded-xl hover-scale"
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <div className="text-3xl font-bold mb-6">{plan.price}</div>
            <ul className="space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full mt-8 px-6 py-3 rounded-lg bg-white text-background hover:bg-gray-200 transition-colors duration-200">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
