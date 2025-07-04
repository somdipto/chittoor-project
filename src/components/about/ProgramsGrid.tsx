
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sprout, Sun, BookOpen, Mountain } from "lucide-react";

const ProgramsGrid = () => {
const programs = [
    {
      title: "Sustainable Agriculture",
      description: "Chemical-free vertical farming, livestock integration (210 sheep, 20 cows, 500 chickens), and premium food processing.",
      icon: Sprout,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=80",
      color: "chittoor-green"
    },
    {
      title: "Renewable Energy",
      description: "6 MW solar capacity with agrivoltaics for 'double income' plus cold storage and battery backup systems.",
      icon: Sun,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=400&q=80",
      color: "chittoor-blue"
    },
    {
      title: "Transformative Education",
      description: "Digital infrastructure, VR/AR labs, IoT-enabled remote learning, and AI-powered adaptive education.",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=400&q=80",
      color: "chittoor-earth"
    },
    {
      title: "Agrotourism & Wellness",
      description: "Farm stays, wellness retreats, Ayurveda healing, and corporate facilities for sustainable tourism revenue.",
      icon: Mountain,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
      color: "chittoor-green"
    }
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Four Integrated Pillars</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive approach to sustainable rural development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className={`absolute top-4 right-4 bg-${program.color}/10 p-3 rounded-full`}>
                    <program.icon className={`w-6 h-6 text-${program.color}`} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsGrid;
