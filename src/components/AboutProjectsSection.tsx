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
        staggerChildren: 0.2
      }
    }
  };
  return <section id="about-projects" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-chittoor-offwhite/50 to-white">
      {/* Enhanced background with village imagery */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Indian village landscape" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/85"></div>
      </div>
      
      {/* Visual elements inspired by Indian village life */}
      <div className="absolute top-1/4 left-0 w-64 h-64 opacity-10">
        <img src="https://images.unsplash.com/photo-1571116026972-e533f8ee7b24?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Indian village element" className="w-full h-full object-cover rounded-full blur-sm" />
      </div>
      <div className="absolute bottom-1/4 right-0 w-48 h-48 opacity-10">
        <img src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Indian agriculture" className="w-full h-full object-cover rounded-full blur-sm" />
      </div>

      <div className="container relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.7
      }} className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-chittoor-green to-chittoor-blue inline-block">
            Transforming Rural India
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-chittoor-green to-chittoor-blue rounded-full mx-auto mb-8"></div>
          
          {/* Hero Image Grid */}
          

          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Reversing rural-to-urban migration through sustainable development
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            <PillarsDropdown />
            <button onClick={() => document.getElementById("renewable-energy")?.scrollIntoView({
            behavior: "smooth"
          })} className="px-4 py-2 bg-chittoor-green/10 text-chittoor-green rounded-full text-sm hover:bg-chittoor-green/20 transition-all">
              Renewable Energy
            </button>
            <button onClick={() => document.getElementById("agro-wellness-tourism")?.scrollIntoView({
            behavior: "smooth"
          })} className="px-4 py-2 bg-gradient-to-r from-chittoor-earth/5 to-chittoor-earth/10 text-chittoor-earth rounded-full text-sm hover:from-chittoor-earth/10 hover:to-chittoor-earth/20 transition-all shadow-sm hover:shadow-md border border-chittoor-earth/20 hover:border-chittoor-earth/30">
              Agro-Wellness
            </button>
            <button onClick={() => document.getElementById("transformative-education")?.scrollIntoView({
            behavior: "smooth"
          })} className="px-4 py-2 bg-gradient-to-r from-chittoor-blue/5 to-chittoor-blue/10 text-chittoor-blue rounded-full text-sm hover:from-chittoor-blue/10 hover:to-chittoor-blue/20 transition-all shadow-sm hover:shadow-md border border-chittoor-blue/20 hover:border-chittoor-blue/30">
              Education
            </button>
            <button onClick={() => document.getElementById("test-bed-for-innovation")?.scrollIntoView({
            behavior: "smooth"
          })} className="px-4 py-2 bg-gradient-to-r from-chittoor-green-dark/5 to-chittoor-green-dark/10 text-chittoor-green-dark rounded-full text-sm hover:from-chittoor-green-dark/10 hover:to-chittoor-green-dark/20 transition-all shadow-sm hover:shadow-md border border-chittoor-green-dark/20 hover:border-chittoor-green-dark/30">
              Innovation
            </button>
            <button onClick={() => document.getElementById("sustainable-agriculture")?.scrollIntoView({
            behavior: "smooth"
          })} className="px-4 py-2 bg-chittoor-green/10 text-chittoor-green rounded-full text-sm hover:bg-chittoor-green/20 transition-all">
              Sustainable Agriculture
            </button>
          </div>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
        once: true
      }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pillarsData.map((pillar, index) => <PillarCard key={index} pillar={pillar} index={index} />)}
        </motion.div>

        <div className="flex justify-center mb-16">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7,
          delay: 0.5
        }}>
            <Link to="/pillars">
              <Button className="bg-gradient-to-r from-chittoor-green to-chittoor-green-dark hover:opacity-95 group px-8 py-6 rounded-xl text-lg">
                <span className="mr-3">Explore Our Pillars</span>
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <MissionSection />
        <ImpactSection />
      </div>
    </section>;
};
export default AboutProjectsSection;