
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Flower, Users, Building, Landmark, TreeDeciduous, Leaf, Sprout, Farm } from 'lucide-react';
import { motion } from "framer-motion";

const AboutSection = () => {
  const values = [
    {
      icon: <Flower className="h-8 w-8 text-white" />,
      title: "Sustainability",
      description: "We focus on creating long-term solutions that respect the environment and promote sustainable practices."
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Community-Led",
      description: "Our projects are designed with and by the communities we serve, ensuring relevance and acceptance."
    },
    {
      icon: <Building className="h-8 w-8 text-white" />,
      title: "Cultural Preservation",
      description: "We value and respect the rich heritage and traditions of Andhra Pradesh's communities."
    },
    {
      icon: <Landmark className="h-8 w-8 text-white" />,
      title: "Transparency",
      description: "We operate with complete transparency, ensuring funds are used effectively and as intended."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  const floatingAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const swayAnimation = {
    rotate: [-2, 2, -2],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-chittoor-offwhite relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2010%20A10%2010%200%200%201%2010%200%20A10%2010%200%200%201%200%2010%22%20fill%3D%22%232E7D32%22%20fill-opacity%3D%220.03%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')] bg-repeat opacity-30"></div>
      
      {/* Decorative plant elements */}
      <motion.div 
        animate={floatingAnimation}
        className="absolute top-20 left-5 hidden lg:block"
      >
        <TreeDeciduous className="h-16 w-16 text-chittoor-green-light/30" />
      </motion.div>
      
      <motion.div 
        animate={swayAnimation}
        className="absolute bottom-40 left-10 hidden lg:block"
      >
        <Leaf className="h-12 w-12 text-chittoor-green/40" />
      </motion.div>
      
      <motion.div 
        animate={floatingAnimation}
        className="absolute top-40 right-10 hidden lg:block"
      >
        <Sprout className="h-14 w-14 text-chittoor-green-dark/30" />
      </motion.div>
      
      <motion.div 
        animate={swayAnimation}
        className="absolute bottom-20 right-5 hidden lg:block"
      >
        <Farm className="h-16 w-16 text-chittoor-earth/30" />
      </motion.div>
      
      <motion.div 
        animate={{
          scale: [1, 1.05, 1],
          transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-1/2 right-20 hidden xl:block"
      >
        <Flower className="h-10 w-10 text-chittoor-blue/30" />
      </motion.div>
      
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
            Founded in 2010, we are a non-profit organization dedicated to improving the lives of rural communities in Chittoor district, Andhra Pradesh through sustainable development initiatives.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {values.map((value, index) => (
            <motion.div variants={item} key={index}>
              <Card className="rounded-xl overflow-hidden shadow-lg border-none h-full hover:shadow-xl transition-shadow duration-300">
                <div className={`h-2 ${
                  index === 0 ? "bg-gradient-to-r from-chittoor-green to-chittoor-green-light" :
                  index === 1 ? "bg-gradient-to-r from-chittoor-blue to-chittoor-blue-light" :
                  index === 2 ? "bg-gradient-to-r from-chittoor-earth to-chittoor-earth-light" :
                  "bg-gradient-to-r from-chittoor-green-dark to-chittoor-green"
                }`}></div>
                <CardContent className="flex flex-col items-center text-center pt-6">
                  <div className={`mb-4 p-3 rounded-full ${
                    index === 0 ? "bg-gradient-to-br from-chittoor-green to-chittoor-green-dark" :
                    index === 1 ? "bg-gradient-to-br from-chittoor-blue to-chittoor-blue-dark" :
                    index === 2 ? "bg-gradient-to-br from-chittoor-earth to-chittoor-earth-light" :
                    "bg-gradient-to-br from-chittoor-green-dark to-chittoor-green"
                  } shadow-md`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <motion.div 
              animate={swayAnimation}
              className="absolute -left-10 -bottom-10 hidden lg:block">
              <Sprout className="h-12 w-12 text-chittoor-green-light/40" />
            </motion.div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              Our mission is to create sustainable development opportunities for rural communities in Chittoor district, improving quality of life while preserving cultural heritage and protecting the environment.
            </p>
            <p className="text-gray-700">
              We believe that empowering communities to address their own challenges is the key to lasting positive change. Through partnerships with local leaders, government agencies, and other non-profits, we work to build capacity and create opportunities for all.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <motion.div 
              animate={floatingAnimation}
              className="absolute -right-8 -top-8 hidden lg:block">
              <Farm className="h-12 w-12 text-chittoor-earth-light/40" />
            </motion.div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-chittoor-blue rounded-br-3xl opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-chittoor-earth rounded-tl-3xl opacity-80"></div>
              <h4 className="text-xl font-semibold mb-6 pl-6">Our Impact Since 2010</h4>
              <div className="space-y-6 pl-6">
                <div>
                  <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-chittoor-green to-chittoor-green-dark">25+</p>
                  <p className="text-gray-600">Villages Supported</p>
                </div>
                <div>
                  <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-chittoor-green to-chittoor-green-dark">10,000+</p>
                  <p className="text-gray-600">Lives Improved</p>
                </div>
                <div>
                  <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-chittoor-green to-chittoor-green-dark">50+</p>
                  <p className="text-gray-600">Community Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-chittoor-green to-chittoor-green-dark">100+</p>
                  <p className="text-gray-600">Local Partnerships</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
