
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-chittoor-blue-light/10 to-chittoor-green-light/10 py-16 md:py-24">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 kolam-decoration">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-chittoor-green to-chittoor-blue">
              Empowering Communities in Chittoor
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Promoting sustainable development and cultural preservation in rural Andhra Pradesh through education, agriculture, and healthcare initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-chittoor-green hover:bg-chittoor-green-dark">Our Projects</Button>
            <Button variant="outline" className="border-chittoor-blue text-chittoor-blue hover:bg-chittoor-blue/10">Learn More</Button>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full top-0 left-0 opacity-10" style={{ 
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 5 L55 30 L30 55 L5 30 Z' stroke='%232E7D32' fill='none' stroke-width='1'/%3E%3Ccircle cx='30' cy='30' r='20' stroke='%231976D2' fill='none' stroke-width='1'/%3E%3Ccircle cx='30' cy='30' r='10' stroke='%23D84315' fill='none' stroke-width='1'/%3E%3C/svg%3E\")",
        backgroundSize: "60px 60px"
      }}></div>
    </div>
  );
};

export default Hero;
