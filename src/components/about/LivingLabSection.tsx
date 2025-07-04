import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Microscope, Satellite, Leaf, Droplets, Battery } from "lucide-react";

const LivingLabSection = () => {
  const research = [
    { title: "IoT Agriculture", icon: Microscope, desc: "Soil sensors & crop monitoring" },
    { title: "Satellite Imagery", icon: Satellite, desc: "Drone assessment & yield prediction" },
    { title: "Biodiversity", icon: Leaf, desc: "Ecosystem services & pollinators" },
    { title: "Water Tech", icon: Droplets, desc: "Smart irrigation & harvesting" },
    { title: "Energy Systems", icon: Battery, desc: "Agrivoltaic & microgrid optimization" }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-chittoor-green/5 to-chittoor-blue/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Living Lab & R&D Hub</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced research facility studying sustainable technologies and practices
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {research.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4 space-y-3">
                  <div className="bg-chittoor-green/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                    <item.icon className="w-6 h-6 text-chittoor-green" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Future Vision: 60,000 Acres</h3>
            <p className="text-gray-600">
              With soft commitment for nearly 60,000 acres, Project Chittoor aims to become a nationwide movement 
              for sustainable rural development and position India as the "food capital of the world."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LivingLabSection;