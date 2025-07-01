
import React from "react";
import { motion } from "framer-motion";

const PressSection = () => {
  const pressFeatures = [
    {
      publication: "The Hindu",
      headline: "Reversing Migration Through Innovation",
      logo: "/placeholder.svg"
    },
    {
      publication: "Times of India",
      headline: "600-Acre Rural Innovation Hub Takes Root in Andhra",
      logo: "/placeholder.svg"
    },
    {
      publication: "Deccan Chronicle",
      headline: "Atria's New Model for Rural Sustainability",
      logo: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 bg-chittoor-offwhite">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Press & Recognition</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Media coverage of our rural transformation initiatives
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pressFeatures.map((feature, index) => (
            <motion.div
              key={feature.publication}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-500">{feature.publication}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  {feature.headline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
