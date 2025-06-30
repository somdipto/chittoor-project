
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
import VisualStoryBlock from "./VisualStoryBlock";
import ImageGallery from "./ImageGallery";
import AnimatedIconRow from "./AnimatedIconRow";

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
            Transforming rural India through sustainable development
          </p>
        </motion.div>

        {/* Animated Icon Row */}
        <AnimatedIconRow />

        {/* Enhanced Pillars Grid with Visual Focus */}
        <motion.div 
          variants={container} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true }} 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-7xl mx-auto"
        >
          {pillarsData.map((pillar, index) => (
            <div key={pillar.slug} id={pillar.slug}>
              <PillarCard pillar={pillar} index={index} />
            </div>
          ))}
        </motion.div>

        {/* Visual Story Blocks */}
        <VisualStoryBlock
          image="https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          imageAlt="Farmer working in sustainable agriculture field"
          text="From field to distribution — sustainable farming in action."
          alignRight={false}
        />

        <VisualStoryBlock
          image="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          imageAlt="Children learning with digital technology"
          text="Bridging the digital divide — education that transforms futures."
          alignRight={true}
        />

        <VisualStoryBlock
          image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          imageAlt="Peaceful wellness retreat setting"
          text="Return to roots — wellness and agrotourism bringing urban dwellers back to nature."
          alignRight={false}
        />

        {/* Image Gallery */}
        <ImageGallery />

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
