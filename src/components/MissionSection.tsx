
import React from 'react';
import { motion } from "framer-motion";
import { Users } from 'lucide-react';

const MissionSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <p className="text-gray-700 mb-6">
          Our mission is to reshape broad trends in India by fostering sustainable rural development and community living, ultimately leading to long-term productivity growth without causing environmental and social harm.
        </p>
        <p className="text-gray-700">
          We aim to create a suitable environment for the next generation to thrive by boosting revenue per acre, creating supplemental income streams, revamping education systems, and establishing appropriate organizational structures.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-chittoor-blue rounded-br-3xl opacity-80"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-chittoor-earth rounded-tl-3xl opacity-80"></div>
          <h4 className="text-xl font-semibold mb-6 pl-6">Key Objectives</h4>
          <div className="space-y-4 pl-6">
            <div className="flex items-start">
              <div className="bg-chittoor-green/10 p-2 rounded-full mr-3 mt-1">
                <Users className="h-4 w-4 text-chittoor-green" />
              </div>
              <p className="text-gray-600">Demonstrate innovative sustainable farming, energy, and education practices</p>
            </div>
            <div className="flex items-start">
              <div className="bg-chittoor-earth/10 p-2 rounded-full mr-3 mt-1">
                <Users className="h-4 w-4 text-chittoor-earth" />
              </div>
              <p className="text-gray-600">Show path for 44 crore farming families to make a middle-class living</p>
            </div>
            <div className="flex items-start">
              <div className="bg-chittoor-blue/10 p-2 rounded-full mr-3 mt-1">
                <Users className="h-4 w-4 text-chittoor-blue" />
              </div>
              <p className="text-gray-600">Eliminate dependency on MNREGA and reduce urban migration</p>
            </div>
            <div className="flex items-start">
              <div className="bg-chittoor-green-dark/10 p-2 rounded-full mr-3 mt-1">
                <Users className="h-4 w-4 text-chittoor-green-dark" />
              </div>
              <p className="text-gray-600">Boost local economy through job creation and skill development</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MissionSection;
