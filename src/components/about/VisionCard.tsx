import React from 'react';
import { motion } from 'framer-motion';

const VisionCard = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 md:p-10 text-center text-white overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mt-16 -mr-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full -mb-20 -ml-20"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Our Vision
            </h2>
            <div className="w-24 h-1 bg-white/50 mx-auto mb-8 rounded-full"></div>
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed italic">
              "Reignite rural pride through integrated farming, renewable energy, and smart education—building thriving, self‑sustaining villages that power India's Evergreen future."
            </blockquote>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">#IntegratedFarming</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">#RenewableEnergy</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">#SmartEducation</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">#SustainableVillages</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionCard;
