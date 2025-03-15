
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Testimonial } from "@/types/feedback";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <motion.div
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
  );
};
