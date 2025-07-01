
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The scholarship changed my life completely. Now I'm studying engineering and dream of helping my village develop.",
      name: "Ravi Kumar",
      role: "Scholarship Recipient",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Mentoring these bright students gives me more joy than any corporate achievement. They inspire me every day.",
      name: "Priya Mehta",
      role: "Volunteer Mentor",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612e6af?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Project Chittoor brought our community together. My daughter now has hope for a brighter future.",
      name: "Lakshmi Devi",
      role: "Parent & Community Member",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from the people whose lives have been touched by our work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-white to-chittoor-offwhite border-0 shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto border-4 border-white shadow-md"
                  />
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-chittoor-green font-medium">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
