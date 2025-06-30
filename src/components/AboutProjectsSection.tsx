
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
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="about-projects" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-chittoor-offwhite/30 to-white">
      {/* Enhanced background with village imagery */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-3">
          <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Indian village landscape" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/98 via-white/95 to-white/90"></div>
      </div>
      
      {/* Visual elements inspired by Indian village life */}
      <div className="absolute top-1/4 left-0 w-64 h-64 opacity-5">
        <img src="https://images.unsplash.com/photo-1571116026972-e533f8ee7b24?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Indian village element" className="w-full h-full object-cover rounded-full blur-sm" />
      </div>
      <div className="absolute bottom-1/4 right-0 w-48 h-48 opacity-5">
        <img src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Indian agriculture" className="w-full h-full object-cover rounded-full blur-sm" />
      </div>

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }} 
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-chittoor-green to-chittoor-blue inline-block">
            Our Four Pillars of Change
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-chittoor-green to-chittoor-blue rounded-full mx-auto mb-8"></div>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Transforming rural India through sustainable development across four key areas
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            <PillarsDropdown />
            <button onClick={() => document.getElementById("sustainable-agriculture")?.scrollIntoView({ behavior: "smooth" })} className="px-4 py-2 bg-chittoor-green/10 text-chittoor-green rounded-full text-sm hover:bg-chittoor-green/20 transition-all">
              Sustainable Agriculture
            </button>
            <button onClick={() => document.getElementById("renewable-energy")?.scrollIntoView({ behavior: "smooth" })} className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm hover:bg-yellow-200 transition-all">
              Renewable Energy
            </button>
            <button onClick={() => document.getElementById("transformative-education")?.scrollIntoView({ behavior: "smooth" })} className="px-4 py-2 bg-gradient-to-r from-chittoor-blue/5 to-chittoor-blue/10 text-chittoor-blue rounded-full text-sm hover:from-chittoor-blue/10 hover:to-chittoor-blue/20 transition-all shadow-sm hover:shadow-md border border-chittoor-blue/20 hover:border-chittoor-blue/30">
              Education
            </button>
            <button onClick={() => document.getElementById("agrotourism-wellness")?.scrollIntoView({ behavior: "smooth" })} className="px-4 py-2 bg-gradient-to-r from-chittoor-earth/5 to-chittoor-earth/10 text-chittoor-earth rounded-full text-sm hover:from-chittoor-earth/10 hover:to-chittoor-earth/20 transition-all shadow-sm hover:shadow-md border border-chittoor-earth/20 hover:border-chittoor-earth/30">
              Agro-Wellness
            </button>
          </div>
        </motion.div>

        {/* Enhanced Pillars Grid with Consistent Design */}
        <motion.div 
          variants={container} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true }} 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto"
        >
          {pillarsData.map((pillar, index) => (
            <div key={pillar.slug} id={pillar.slug}>
              <PillarCard pillar={pillar} index={index} />
            </div>
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
              <Button className="bg-gradient-to-r from-chittoor-green to-chittoor-green-dark hover:opacity-95 group px-8 py-6 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="mr-3">Explore All Pillars</span>
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
