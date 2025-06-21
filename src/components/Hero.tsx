
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Flower, TreeDeciduous, Leaf, Sprout, Wheat, ArrowRight, Heart, Users, Target } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-chittoor-blue-light/10 via-chittoor-green-light/5 to-chittoor-earth/5 py-16 md:py-24">
      {/* Multiple Background Patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-full h-full" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath d='M40 5 L70 40 L40 75 L10 40 Z' stroke='%232E7D32' fill='none' stroke-width='0.5'/%3E%3Ccircle cx='40' cy='40' r='25' stroke='%231976D2' fill='none' stroke-width='0.5'/%3E%3Ccircle cx='40' cy='40' r='12' stroke='%23D84315' fill='none' stroke-width='0.5'/%3E%3C/svg%3E\")",
          backgroundSize: "80px 80px"
        }}></div>
        <div className="absolute w-full h-full opacity-60" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M20,0 Q30,10 20,20 Q10,30 20,40 Q30,30 40,20 Q30,10 20,0 Z' stroke='%234CAF50' fill='none' stroke-width='0.3' opacity='0.4'/%3E%3C/svg%3E\")",
          backgroundSize: "40px 40px",
          backgroundPosition: "20px 20px"
        }}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-10 left-[10%] w-32 h-32 bg-gradient-to-br from-chittoor-green to-chittoor-green-dark rounded-full blur-xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="absolute bottom-20 right-[15%] w-40 h-40 bg-gradient-to-br from-chittoor-blue to-chittoor-blue-dark rounded-full blur-xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.06, scale: 1 }}
          transition={{ duration: 2, delay: 1.2 }}
          className="absolute top-1/2 left-[5%] w-24 h-24 bg-gradient-to-br from-chittoor-earth to-chittoor-earth-light rounded-full blur-lg"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left relative"
          >
            {/* Decorative Corner Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 border-l-4 border-t-4 border-chittoor-green/30 rounded-tl-3xl hidden md:block"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 border-r-4 border-b-4 border-chittoor-blue/30 rounded-br-3xl hidden md:block"></div>

            {/* Stats Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex gap-3 mb-6"
            >
              <div className="bg-white/80 backdrop-blur-sm border border-chittoor-green/20 rounded-xl px-3 py-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-chittoor-green" />
                  <span className="text-sm font-semibold text-chittoor-green">500+ Families</span>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-chittoor-blue/20 rounded-xl px-3 py-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-chittoor-blue" />
                  <span className="text-sm font-semibold text-chittoor-blue">12 Villages</span>
                </div>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 kolam-decoration relative"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-chittoor-green via-chittoor-blue to-chittoor-earth leading-tight">
                Empowering Communities in Chittoor
              </span>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="absolute -top-4 -right-4 hidden lg:block"
              >
                <Heart className="h-8 w-8 text-chittoor-earth/60 fill-chittoor-earth/20" />
              </motion.div>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mb-8"
            >
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-chittoor-green via-chittoor-blue to-chittoor-earth rounded-full"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed pl-6">
                Promoting sustainable development and cultural preservation in rural Andhra Pradesh through 
                <span className="font-semibold text-chittoor-green"> education</span>, 
                <span className="font-semibold text-chittoor-blue"> agriculture</span>, and 
                <span className="font-semibold text-chittoor-earth"> healthcare</span> initiatives.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#about-projects">
                <Button className="bg-gradient-to-r from-chittoor-green to-chittoor-green-dark hover:from-chittoor-green-dark hover:to-chittoor-green shadow-lg hover:shadow-xl rounded-full px-8 py-6 w-full sm:w-auto transform hover:scale-105 transition-all duration-300 group">
                  <span>Our Projects</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#about-projects">
                <Button variant="outline" className="border-2 border-chittoor-blue text-chittoor-blue hover:bg-chittoor-blue hover:text-white rounded-full px-8 py-6 w-full sm:w-auto backdrop-blur-sm bg-white/50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Learn More
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-8 lg:mt-0"
          >
            {/* Creative Image Grid with Overlays */}
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -inset-6 bg-gradient-to-r from-chittoor-green/10 via-transparent to-chittoor-blue/10 rounded-3xl blur-2xl"></div>
              
              <div className="relative grid grid-cols-12 grid-rows-12 gap-3 h-[500px] md:h-[600px]">
                {/* Main large image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="col-span-7 row-span-8 rounded-2xl overflow-hidden shadow-2xl relative group"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1602600203968-7a1c67c12fb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Indian farmers in field" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg font-bold mb-1">Sustainable Farming</h3>
                    <p className="text-white/80 text-sm">Empowering local farmers with modern techniques</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Wheat className="h-5 w-5 text-white" />
                  </div>
                </motion.div>

                {/* Top right image */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="col-span-5 row-span-5 rounded-2xl overflow-hidden shadow-xl relative group"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1551984427-05d5dd9f0f16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Rural education in India" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white text-sm font-bold">Rural Education</h3>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-1.5">
                    <TreeDeciduous className="h-4 w-4 text-white" />
                  </div>
                </motion.div>

                {/* Bottom left image */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="col-span-5 row-span-4 rounded-2xl overflow-hidden shadow-xl relative group"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1623060693724-1e59e90a5d74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Solar panels in rural village" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white text-sm font-bold">Clean Energy</h3>
                  </div>
                  <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm rounded-full p-1.5">
                    <Sprout className="h-4 w-4 text-white" />
                  </div>
                </motion.div>

                {/* Bottom right image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="col-span-7 row-span-4 rounded-2xl overflow-hidden shadow-xl relative group"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1594708053019-5336680de090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Indian village landscape" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white text-sm font-bold">Village Development</h3>
                    <p className="text-white/70 text-xs">Building stronger communities</p>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-1.5">
                    <Leaf className="h-4 w-4 text-white" />
                  </div>
                </motion.div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
                className="absolute -top-4 -left-4 bg-gradient-to-br from-chittoor-green to-chittoor-green-dark rounded-full p-3 shadow-lg"
              >
                <Flower className="h-6 w-6 text-white" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-br from-chittoor-blue to-chittoor-blue-dark rounded-full p-3 shadow-lg"
              >
                <Heart className="h-6 w-6 text-white fill-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Impact Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "500+", label: "Families Helped", icon: Users },
            { number: "12", label: "Villages Reached", icon: Target },
            { number: "5", label: "Core Pillars", icon: TreeDeciduous },
            { number: "100%", label: "Community Driven", icon: Heart }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              className="bg-white/70 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <stat.icon className="h-8 w-8 mx-auto mb-2 text-chittoor-green" />
              <div className="text-2xl font-bold text-chittoor-blue mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Animated Plant Elements */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.8 }}
        className="absolute left-[8%] top-[30%] hidden lg:block"
      >
        <motion.div
          animate={{
            y: [-5, 5, -5],
            rotate: [-2, 2, -2],
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <TreeDeciduous className="h-16 w-16 text-chittoor-green-dark/40" />
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 2 }}
        className="absolute right-[15%] bottom-[25%] hidden lg:block"
      >
        <motion.div
          animate={{
            y: [-4, 4, -4],
            scale: [1, 1.1, 1],
            transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Wheat className="h-14 w-14 text-chittoor-earth/40" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
