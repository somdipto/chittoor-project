import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, Sun, BookOpen, Users, Zap, Droplets, Activity, 
  Target, Lightbulb, Handshake, Clock, BarChart2, 
  Sprout, Droplet, CloudRain, TrendingUp, ShieldCheck, Heart, MapPin
} from 'lucide-react';

const approachItems = [
  {
    icon: <Sprout className="h-6 w-6 text-white" />,
    title: "Regenerative Farming",
    description: "Implementing organic practices to restore soil health and increase yields",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: <Droplet className="h-6 w-6 text-white" />,
    title: "Water Conservation",
    description: "Harvesting rainwater and optimizing irrigation for sustainability",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: <Users className="h-6 w-6 text-white" />,
    title: "Community First",
    description: "Empowering local farmers through education and collaboration",
    color: "from-purple-500 to-indigo-600"
  },
  {
    icon: <CloudRain className="h-6 w-6 text-white" />,
    title: "Climate Resilience",
    description: "Developing solutions to adapt to changing climate conditions",
    color: "from-sky-500 to-blue-600"
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    title: "Economic Growth",
    description: "Creating sustainable livelihoods and market opportunities",
    color: "from-amber-500 to-orange-600"
  }
];

const approachStages = [
  {
    title: "Community Assessment",
    description: "Engaging with local farmers to understand needs and resources",
    icon: <MapPin className="h-5 w-5 text-green-600" />,
    color: "bg-green-50 border-l-4 border-green-500"
  },
  {
    title: "Solution Design",
    description: "Developing tailored agricultural and water solutions",
    icon: <Lightbulb className="h-5 w-5 text-blue-600" />,
    color: "bg-blue-50 border-l-4 border-blue-500"
  },
  {
    title: "Implementation",
    description: "Deploying sustainable farming and energy solutions",
    icon: <Zap className="h-5 w-5 text-amber-600" />,
    color: "bg-amber-50 border-l-4 border-amber-500"
  },
  {
    title: "Training & Support",
    description: "Educating farmers on sustainable practices",
    icon: <BookOpen className="h-5 w-5 text-purple-600" />,
    color: "bg-purple-50 border-l-4 border-purple-500"
  },
  {
    title: "Growth & Scale",
    description: "Expanding successful initiatives to more communities",
    icon: <TrendingUp className="h-5 w-5 text-teal-600" />,
    color: "bg-teal-50 border-l-4 border-teal-500"
  }
];

const OurApproach = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-green-800 bg-green-100 rounded-full mb-4">
            Our Methodology
          </span>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-700">
            Sustainable Rural Transformation
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-400 to-teal-400 mx-auto mt-6 mb-8 rounded-full"></div>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Our integrated approach combines traditional wisdom with modern innovation to create lasting change in rural communities.
          </p>
        </motion.div>

        {/* Key Focus Areas */}
        <div className="mb-24">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Pillars of Impact</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We address the most pressing challenges in rural development through these interconnected focus areas.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {approachItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                <p className="text-white/90 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Implementation Process */}
        <div className="mb-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Implementation Journey</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured approach to creating sustainable impact in rural communities
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 h-[90%] w-0.5 bg-gradient-to-b from-green-400/30 via-green-500/50 to-green-400/30 -translate-y-1/2 top-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-8 lg:space-y-16">
              {approachStages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  className="relative group"
                >
                  <div className="flex flex-col lg:flex-row items-center">
                    {/* Left side content */}
                    <div className={`lg:w-1/2 px-4 mb-6 lg:mb-0 ${
                      index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left lg:order-last'
                    }`}>
                      <div className={`relative inline-block p-6 rounded-xl shadow-md ${stage.color} hover:shadow-lg transition-shadow duration-300`}>
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            {stage.icon}
                          </div>
                          <div className={`ml-4 ${index % 2 === 0 ? 'lg:ml-0 lg:mr-4 lg:order-first' : ''}`}>
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">{stage.title}</h4>
                            <p className="text-gray-600 text-sm">{stage.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-1/2 lg:-translate-x-1/2 -mt-6 lg:mt-0 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-white border-4 border-green-500 text-green-600 font-bold z-10 shadow-lg">
                      {index + 1}
                    </div>
                    
                    {/* Right side spacer */}
                    <div className="lg:w-1/2 px-4"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="relative bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-12 text-center overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute bottom-0 right-1/3 w-40 h-40 bg-white rounded-full translate-y-1/2 translate-x-1/2"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Be Part of the Change
            </h3>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
              Join us in our mission to create sustainable, thriving rural communities. 
              Together, we can make a lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="/get-involved"
                className="px-8 py-3.5 border-2 border-white text-base font-semibold rounded-full text-green-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Involved
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
              <motion.a
                href="/donate"
                className="px-8 py-3.5 border-2 border-white/20 text-base font-semibold rounded-full text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Support Our Work
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurApproach;
