
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { pillarsData } from '@/data/pillarData';
import PillarCard from './PillarCard';
import MissionSection from './MissionSection';
import ImpactSection from './ImpactSection';

const AboutProjectsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section id="about-projects" className="py-16 md:py-24 bg-gradient-to-b from-white to-chittoor-offwhite relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2010%20A10%2010%200%200%201%2010%200%20A10%2010%200%200%201%200%2010%22%20fill%3D%22%232E7D32%22%20fill-opacity%3D%220.03%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')] bg-repeat opacity-30"></div>
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 kolam-decoration">About The Chittoor Project</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Project Chittoor is a rural revitalization initiative focusing on sustainable development and community living. 
            It aims to reverse rural-to-urban migration and empower farmers to thrive on their own land.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button 
              onClick={() => document.getElementById('renewable-energy')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 py-2 bg-chittoor-green/10 text-chittoor-green rounded-full text-sm hover:bg-chittoor-green/20 transition-all"
            >
              Renewable Energy
            </button>
            <button 
              onClick={() => document.getElementById('agro-wellness-tourism')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 py-2 bg-chittoor-earth/10 text-chittoor-earth rounded-full text-sm hover:bg-chittoor-earth/20 transition-all"
            >
              Agro-Wellness
            </button>
            <button 
              onClick={() => document.getElementById('transformative-education')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 py-2 bg-chittoor-blue/10 text-chittoor-blue rounded-full text-sm hover:bg-chittoor-blue/20 transition-all"
            >
              Education
            </button>
            <button 
              onClick={() => document.getElementById('test-bed-for-innovation')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 py-2 bg-chittoor-green-dark/10 text-chittoor-green-dark rounded-full text-sm hover:bg-chittoor-green-dark/20 transition-all"
            >
              Innovation
            </button>
            <button 
              onClick={() => document.getElementById('sustainable-agriculture')?.scrollIntoView({ behavior: 'smooth' })}
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
