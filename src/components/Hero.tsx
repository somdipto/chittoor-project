import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Flower, TreeDeciduous, Leaf, Sprout, Wheat } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-chittoor-blue-light/20 via-white to-chittoor-green-light/20 py-16 md:py-24 lg:py-32">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-chittoor-blue/5 via-transparent to-transparent animate-[spin_30s_linear_infinite] opacity-70"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-chittoor-green/5 via-transparent to-transparent animate-[spin_25s_linear_infinite_reverse] opacity-70"></div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/40 backdrop-blur-sm"></div>
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-chittoor-green via-chittoor-blue to-chittoor-green animate-gradient bg-300% bg-right">
                where farmers are the future
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Promoting sustainable development and cultural preservation in
              rural Andhra Pradesh through education, agriculture, and
              healthcare initiatives.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a href="#about-projects" className="w-full sm:w-auto">
                <Button className="w-full bg-gradient-to-r from-chittoor-green via-chittoor-blue to-chittoor-green bg-200% hover:bg-right transition-all duration-1000 shadow-lg rounded-full px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg font-medium hover:shadow-xl hover:scale-[1.02] transform transition-all">
                  Our Projects
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full border-chittoor-blue text-chittoor-blue hover:bg-chittoor-blue/5 rounded-full px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg font-medium"
                >
                  Contact Us
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 md:mt-12 lg:mt-0"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 bg-gray-100 relative group">
                <img
                  src="/images/farmer-field.jpg"
                  alt="Farmer working in a field with a bright future ahead"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <p className="absolute bottom-2 sm:bottom-3 left-2 sm:left-4 text-white text-xs sm:text-sm md:text-base font-medium">
                  Farmers Leading the Future
                </p>
              </div>
              <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg h-24 sm:h-32 md:h-36 lg:h-40 bg-gray-100 relative group">
                <img
                  src="https://images.unsplash.com/photo-1623060693724-1e59e90a5d74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Solar panels in rural village"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <p className="absolute bottom-2 sm:bottom-3 left-2 sm:left-4 text-white text-xs sm:text-sm md:text-base font-medium">
                  Renewable Energy
                </p>
              </div>
            </div>
            <div className="space-y-2 sm:space-y-3 md:space-y-4 mt-6 sm:mt-8 md:mt-12">
              <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg h-24 sm:h-32 md:h-36 lg:h-40 bg-gray-100 relative group">
                <img
                  src="https://images.unsplash.com/photo-1551984427-05d5dd9f0f16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Rural education in India"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <p className="absolute bottom-2 sm:bottom-3 left-2 sm:left-4 text-white text-xs sm:text-sm md:text-base font-medium">
                  Rural Education
                </p>
              </div>
              <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 bg-gray-100 relative group">
                <img
                  src="https://images.unsplash.com/photo-1594708053019-5336680de090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Indian village landscape"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <p className="absolute bottom-2 sm:bottom-3 left-2 sm:left-4 text-white text-xs sm:text-sm md:text-base font-medium">
                  Village Development
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      <div
        className="absolute w-full h-full top-0 left-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 5 L55 30 L30 55 L5 30 Z' stroke='%232E7D32' fill='none' stroke-width='1'/%3E%3Ccircle cx='30' cy='30' r='20' stroke='%231976D2' fill='none' stroke-width='1'/%3E%3Ccircle cx='30' cy='30' r='10' stroke='%23D84315' fill='none' stroke-width='1'/%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Decorative Plant Elements */}
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

      {/* Plant SVGs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="absolute left-[8%] top-[30%] hidden lg:block"
      >
        <motion.div
          animate={{
            y: [-5, 5, -5],
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <TreeDeciduous className="h-16 w-16 text-chittoor-green-dark/30" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.4 }}
        className="absolute left-[15%] bottom-[15%] hidden lg:block"
      >
        <motion.div
          animate={{
            rotate: [-2, 2, -2],
            transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Leaf className="h-12 w-12 text-chittoor-blue/30" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.6 }}
        className="absolute right-[15%] bottom-[25%] hidden lg:block"
      >
        <motion.div
          animate={{
            y: [-4, 4, -4],
            transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Wheat className="h-14 w-14 text-chittoor-earth/30" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
