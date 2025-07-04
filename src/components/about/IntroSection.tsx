
import React from "react";
import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-chittoor-offwhite to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Project Chittoor
              </h1>
              <p className="text-xl text-chittoor-green font-semibold">
                India's Evergreen Revolution
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                A 600-acre sustainable development initiative addressing India's agricultural crisis through regenerative farming, renewable energy, education, and wellness tourism.
              </p>
              <div className="bg-chittoor-green/10 p-4 rounded-lg border-l-4 border-chittoor-green">
                <p className="text-gray-700 font-medium">
                  Transforming ₹30K/month to ₹1L/month per acre within 5 years
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544737151-6e4b9d672269?auto=format&fit=crop&w=800&q=80"
                alt="Sustainable farming practices in rural India"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Andhra Pradesh, India</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
