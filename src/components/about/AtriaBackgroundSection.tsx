import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Zap, Heart, Building, Wifi } from "lucide-react";

const AtriaBackgroundSection = () => {
  const expertise = [
    { icon: GraduationCap, area: "Education", detail: "Atria University & Institute" },
    { icon: Zap, area: "Power", detail: "500MW+ renewable energy" },
    { icon: Heart, area: "Foundation", detail: "20M+ meals served" },
    { icon: Building, area: "Hospitality", detail: "Radisson Blu Atria" },
    { icon: Wifi, area: "Internet", detail: "ACT Broadband (2.5M users)" }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">The Atria Group Legacy</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            70+ years of expertise across diverse sectors powering Project Chittoor
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {expertise.map((item, index) => (
            <motion.div
              key={item.area}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4 space-y-3">
                  <div className="bg-chittoor-blue/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                    <item.icon className="w-6 h-6 text-chittoor-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">{item.area}</h3>
                    <p className="text-xs text-gray-600">{item.detail}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-chittoor-blue/10 to-chittoor-green/10 p-6 rounded-xl border"
        >
          <p className="text-center text-gray-700 font-medium">
            This diverse expertise uniquely positions Atria Group to tackle rural development holistically—
            combining education, technology, renewable energy, and sustainable business practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AtriaBackgroundSection;