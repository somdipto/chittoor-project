
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
  const partners = [
    { name: "Atria University", logo: "/placeholder.svg" },
    { name: "Atria Power", logo: "/placeholder.svg" },
    { name: "Radisson Blu Atria", logo: "/placeholder.svg" },
    { name: "ACT (Internet)", logo: "/placeholder.svg" },
    { name: "Atria Foundation", logo: "/placeholder.svg" },
    { name: "Farmlore", logo: "/placeholder.svg" }
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Partners & Supporters</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Collaborating with organizations that share our vision for rural transformation
          </p>
        </motion.div>

        {/* Partner logos */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-lg mb-2 mx-auto flex items-center justify-center">
                  <span className="text-xs text-gray-500">LOGO</span>
                </div>
                <p className="text-xs font-medium text-gray-700">{partner.name}</p>
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
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
                    alt="Atria Group Leadership"
                    className="w-20 h-20 rounded-full object-cover mx-auto"
                  />
                </div>
                <div className="md:col-span-3 text-center md:text-left">
                  <blockquote className="text-lg text-gray-700 mb-4 italic">
                    "Chittoor Project is setting a new benchmark for rural India — we're proud to partner in this transformative journey."
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-800">Atria Group Leadership</p>
                    <p className="text-sm text-gray-600">Strategic Partner</p>
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
