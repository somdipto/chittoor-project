import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { pillarsData } from "@/data/pillarData";
import PillarCard from "./PillarCard";
import MissionSection from "./MissionSection";
import ImpactSection from "./ImpactSection";
import PillarsDropdown from "./PillarsDropdown";

const AboutProjectsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section
      id="about-projects"
      className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-chittoor-offwhite/50 to-white"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-chittoor-blue/5 via-transparent to-transparent animate-[spin_35s_linear_infinite] opacity-50"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-chittoor-green/5 via-transparent to-transparent animate-[spin_30s_linear_infinite_reverse] opacity-50"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2010%20A10%2010%200%200%201%2010%200%20A10%2010%200%200%201%200%2010%22%20fill%3D%22%232E7D32%22%20fill-opacity%3D%220.03%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')] bg-repeat opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-chittoor-green/5 to-chittoor-blue/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-chittoor-blue/5 to-chittoor-green/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/40 backdrop-blur-sm"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-chittoor-green to-chittoor-blue inline-block">
            About The Chittoor Project
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-chittoor-green to-chittoor-blue rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Project Chittoor is a rural revitalization initiative focusing on
            sustainable development and community living. It aims to reverse
            rural-to-urban migration and empower farmers to thrive on their own
            land.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
            <PillarsDropdown />
            <button
              onClick={() =>
                document
                  .getElementById("renewable-energy")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-4 py-2 bg-chittoor-green/10 text-chittoor-green rounded-full text-sm hover:bg-chittoor-green/20 transition-all"
            >
              Renewable Energy
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("agro-wellness-tourism")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-4 py-2 bg-gradient-to-r from-chittoor-earth/5 to-chittoor-earth/10 text-chittoor-earth rounded-full text-sm hover:from-chittoor-earth/10 hover:to-chittoor-earth/20 transition-all shadow-sm hover:shadow-md border border-chittoor-earth/20 hover:border-chittoor-earth/30"
            >
              Agro-Wellness
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("transformative-education")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-4 py-2 bg-gradient-to-r from-chittoor-blue/5 to-chittoor-blue/10 text-chittoor-blue rounded-full text-sm hover:from-chittoor-blue/10 hover:to-chittoor-blue/20 transition-all shadow-sm hover:shadow-md border border-chittoor-blue/20 hover:border-chittoor-blue/30"
            >
              Education
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("test-bed-for-innovation")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-4 py-2 bg-gradient-to-r from-chittoor-green-dark/5 to-chittoor-green-dark/10 text-chittoor-green-dark rounded-full text-sm hover:from-chittoor-green-dark/10 hover:to-chittoor-green-dark/20 transition-all shadow-sm hover:shadow-md border border-chittoor-green-dark/20 hover:border-chittoor-green-dark/30"
            >
              Innovation
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("sustainable-agriculture")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-4 py-2 bg-chittoor-green/10 text-chittoor-green rounded-full text-sm hover:bg-chittoor-green/20 transition-all"
            >
              Sustainable Agriculture
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {pillarsData.map((pillar, index) => (
            <PillarCard key={index} pillar={pillar} index={index} />
          ))}
        </motion.div>

        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Link to="/pillars">
              <Button className="bg-gradient-to-r from-chittoor-green to-chittoor-green-dark hover:opacity-95 group px-6 py-6 rounded-xl">
                <span className="mr-2">Learn more about our pillars</span>
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <MissionSection />
        <ImpactSection />
      </div>
    </section>
  );
};

export default AboutProjectsSection;
