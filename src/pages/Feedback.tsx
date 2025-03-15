
import { motion } from "framer-motion";
import { TestimonialsList } from "@/components/feedback/TestimonialsList";
import { FeedbackForm } from "@/components/feedback/FeedbackForm";

const Feedback = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Customer Feedback</h1>
          <p className="text-gray-400">What our users say about us</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Testimonials Section */}
          <TestimonialsList />

          {/* Feedback Form */}
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
