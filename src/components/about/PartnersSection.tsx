
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
  const partners = [
    { name: "Atria University", logo: "/placeholder.svg" },
    { name: "Local Education Board", logo: "/placeholder.svg" },
    { name: "Rural Development Corp", logo: "/placeholder.svg" },
    { name: "Tech for Good", logo: "/placeholder.svg" }
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Partners</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Working together with organizations that share our vision
          </p>
        </motion.div>

        {/* Partner logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-lg mb-3 mx-auto flex items-center justify-center">
                  <span className="text-xs text-gray-500">LOGO</span>
                </div>
                <p className="text-sm font-medium text-gray-700">{partner.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-6 items-center">
                <div className="md:col-span-1">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                    alt="Partner testimonial"
                    className="w-20 h-20 rounded-full object-cover mx-auto"
                  />
                </div>
                <div className="md:col-span-3 text-center md:text-left">
                  <blockquote className="text-lg text-gray-700 mb-4 italic">
                    "Project Chittoor's approach to community-driven education is exactly what rural development needs. Their impact is measurable and sustainable."
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-800">Dr. Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Director, Rural Education Alliance</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
