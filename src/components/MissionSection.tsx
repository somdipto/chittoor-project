import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const MissionSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <div className="text-center lg:text-left">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-chittoor-green to-chittoor-blue bg-clip-text text-transparent">
            Our Mission
          </h3>
          <div className="space-y-4 md:space-y-6 text-gray-700">
            <p className="text-base md:text-lg leading-relaxed">
              Our mission is to reshape broad trends in India by fostering
              sustainable rural development and community living, ultimately
              leading to long-term productivity growth without causing
              environmental and social harm.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              We aim to create a suitable environment for the next generation to
              thrive by boosting revenue per acre, creating supplemental income
              streams, revamping education systems, and establishing appropriate
              organizational structures.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative"
      >
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-chittoor-blue/90 rounded-br-3xl opacity-90"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-chittoor-earth/90 rounded-tl-3xl opacity-90"></div>

          <div className="relative z-10">
            <h4 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800">
              Key Objectives
            </h4>
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start">
                <div className="bg-chittoor-green/10 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                  <Users className="h-5 w-5 text-chittoor-green" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  Demonstrate innovative sustainable farming, energy, and
                  education practices
                </p>
              </div>

              <div className="flex items-start">
                <div className="bg-chittoor-earth/10 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                  <Users className="h-5 w-5 text-chittoor-earth" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  Show path for 44 crore farming families to make a middle-class
                  living
                </p>
              </div>

              <div className="flex items-start">
                <div className="bg-chittoor-blue/10 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                  <Users className="h-5 w-5 text-chittoor-blue" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  Eliminate dependency on MNREGA and reduce urban migration
                </p>
              </div>

              <div className="flex items-start">
                <div className="bg-chittoor-green-dark/10 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                  <Users className="h-5 w-5 text-chittoor-green-dark" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  Boost local economy through job creation and skill development
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MissionSection;
