
import React from "react";
import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-chittoor-offwhite to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                Empowering rural prosperity through regenerative farming, clean energy, education, and wellness.
              </h1>
              <p className="text-lg text-gray-600">
                Leading India's Evergreen Revolution in Chittoor's villages
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                alt="Villagers working together in collaborative farming"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
