
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Book } from "lucide-react";

const ProgramsGrid = () => {
  const programs = [
    {
      title: "Scholarship Fund",
      description: "Financial support for deserving students to pursue higher education and break barriers to learning.",
      icon: Award,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
      color: "chittoor-green"
    },
    {
      title: "Mentorship Program",
      description: "One-on-one guidance connecting students with professionals and experienced mentors for career guidance.",
      icon: Book,
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&q=80",
      color: "chittoor-blue"
    },
    {
      title: "Community Engagement",
      description: "Village-wide events, workshops, and initiatives that strengthen community bonds and shared learning.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=400&q=80",
      color: "chittoor-earth"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What We Do</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our three core programs work together to create lasting impact in rural communities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
