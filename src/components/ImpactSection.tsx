import React from "react";
import { motion } from "framer-motion";

const ImpactSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-16 bg-gradient-to-r from-white to-gray-50 p-6 md:p-10 rounded-xl shadow-sm border border-gray-100"
    >
      <h3 className="text-2xl font-bold mb-4">The Impact</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="mb-4">
            Project Chittoor reverses rural-to-urban migration by providing
            farmers with the tools they need to thrive on their land. It keeps
            rural communities intact and turns marginal farmers into prosperous,
            empowered entrepreneurs. It serves as a blueprint for rural
            revitalisation for the rest of India.
          </p>
          <p>
            The initiative started with 600 acres in Chittoor district, Andhra
            Pradesh, where landowners have contributed to a farmer-operated
            co-operative.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Expansion Plans</h4>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Current</span>
              <span>600 acres</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded overflow-hidden mb-4">
              <div
                className="bg-chittoor-green h-2 rounded"
                style={{ width: "1%" }}
              ></div>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">December 2025</span>
              <span>6,000 acres</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded overflow-hidden mb-4">
              <div
                className="bg-chittoor-green h-2 rounded"
                style={{ width: "10%" }}
              ></div>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Target (24 months)</span>
              <span>60,000 acres</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
              <div
                className="bg-chittoor-green h-2 rounded"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ImpactSection;
