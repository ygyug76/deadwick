
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Testimonial } from "@/types/feedback";
import { TestimonialCard } from "./TestimonialCard";
import { supabase } from "@/integrations/supabase/client";

export const TestimonialsList = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      message: "Incredible platform that has transformed our workflow",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Developer",
      message: "The best developer experience I've had in years",
      rating: 5,
    },
    {
      name: "Emily Brown",
      role: "Designer",
      message: "Intuitive interface and powerful features",
      rating: 4,
    },
  ]);

  // Fetch public testimonials from Supabase
  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase
        .from('feedback')
        .select('name, message, created_at, rating')
        .eq('is_public', true)
        .order('created_at', { ascending: false })
        .limit(5);
      
      if (error) {
        console.error("Error fetching testimonials:", error);
        return;
      }
      
      if (data && data.length > 0) {
        const formattedTestimonials = data.map(item => ({
          name: item.name,
          role: "User",
          message: item.message,
          rating: item.rating || 5,
        }));
        setTestimonials(formattedTestimonials);
      }
    };
    
    fetchTestimonials();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold mb-6">Recent Testimonials</h2>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} index={index} />
      ))}
    </motion.div>
  );
};
