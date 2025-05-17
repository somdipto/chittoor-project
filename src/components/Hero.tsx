
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-chittoor-blue-light/5 to-chittoor-green-light/10 py-20 md:py-32">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 kolam-decoration"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-chittoor-green to-chittoor-blue">
              Empowering Communities in Chittoor
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 text-gray-700"
          >
            Promoting sustainable development and cultural preservation in rural Andhra Pradesh through education, agriculture, and healthcare initiatives.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-gradient-to-r from-chittoor-green to-chittoor-green-dark hover:opacity-90 shadow-lg rounded-full px-8 py-6">Our Projects</Button>
            <Button variant="outline" className="border-chittoor-blue text-chittoor-blue hover:bg-chittoor-blue/10 rounded-full px-8 py-6">Learn More</Button>
          </motion.div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute w-full h-full top-0 left-0 opacity-10" style={{ 
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 5 L55 30 L30 55 L5 30 Z' stroke='%232E7D32' fill='none' stroke-width='1'/%3E%3Ccircle cx='30' cy='30' r='20' stroke='%231976D2' fill='none' stroke-width='1'/%3E%3Ccircle cx='30' cy='30' r='10' stroke='%23D84315' fill='none' stroke-width='1'/%3E%3C/svg%3E\")",
        backgroundSize: "60px 60px"
      }}></div>
      
      {/* Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 left-[5%] w-16 h-16 bg-gradient-to-br from-chittoor-green-light/20 to-chittoor-green/20 rounded-full blur-md"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-20 right-[5%] w-24 h-24 bg-gradient-to-br from-chittoor-blue-light/20 to-chittoor-blue/20 rounded-full blur-md"
      ></motion.div>
    </div>
  );
};

export default Hero;
