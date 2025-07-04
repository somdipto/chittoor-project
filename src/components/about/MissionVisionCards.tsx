
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Sunrise } from "lucide-react";

const MissionVisionCards = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-gradient-to-br from-chittoor-green-light/10 to-chittoor-green/10 border-chittoor-green/20">
              <CardContent className="p-8 text-center space-y-4">
                <div className="bg-chittoor-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Leaf className="w-8 h-8 text-chittoor-green" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Address India's agricultural crisis and reverse urban migration through sustainable farming, renewable energy, education, and wellness tourism.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-gradient-to-br from-chittoor-blue-light/10 to-chittoor-blue/10 border-chittoor-blue/20">
              <CardContent className="p-8 text-center space-y-4">
                <div className="bg-chittoor-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Sunrise className="w-8 h-8 text-chittoor-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create a replicable model for 44 crore farming families, positioning India as the "food capital of the world" through sustainable development.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionCards;
