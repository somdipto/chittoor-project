import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, Leaf, Sun, BookOpen, Heart, Cpu, Users } from 'lucide-react';

const MissionSection = () => {
  const timelineData = [
    {
      year: 2025,
      title: "600 ac → forest-farm",
      description: "₹30k→₹1L/acre",
      icon: <Leaf className="h-6 w-6 text-chittoor-green" />,
      color: "from-green-100 to-green-50"
    },
    {
      year: 2026,
      title: "3 MW solar + renewables",
      description: "Clean energy rollout",
      icon: <Sun className="h-6 w-6 text-yellow-500" />,
      color: "from-yellow-100 to-yellow-50"
    },
    {
      year: 2027,
      title: "Smart schools live",
      description: "AR/VR labs launch",
      icon: <BookOpen className="h-6 w-6 text-blue-500" />,
      color: "from-blue-100 to-blue-50"
    },
    {
      year: 2028,
      title: "Agro-wellness retreats",
      description: "Tourism expansion",
      icon: <Heart className="h-6 w-6 text-pink-500" />,
      color: "from-pink-100 to-pink-50"
    },
    {
      year: 2029,
      title: "IoT/drones lab",
      description: "Reverse migration begins",
      icon: <Cpu className="h-6 w-6 text-purple-500" />,
      color: "from-purple-100 to-purple-50"
    },
    {
      year: 2030,
      title: "Rural middle class uplift",
      description: "44 cr households",
      icon: <Users className="h-6 w-6 text-amber-500" />,
      color: "from-amber-100 to-amber-50"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision & Aim */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-yellow-100 mr-4">
                <Sparkles className="h-6 w-6 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">🌟 Vision</h2>
            </div>
            <p className="text-gray-700 text-lg pl-12">
              "Spark India's Evergreen Revolution—rural ecosystems powered by sustainable farming, clean energy, smart education & community wellness."
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-red-100 mr-4">
                <Target className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">🎯 Aim</h2>
            </div>
            <p className="text-gray-700 text-lg pl-12">
              "Build a scalable rural revival model—transforming marginal farmland into eco-tech villages for livelihoods, learning, leadership."
            </p>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              📅 Goals Roadmap
            </h2>
            <div className="w-16 h-1 bg-chittoor-green mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our strategic milestones for Chittoor's transformation
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -ml-0.5"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative pl-16 md:pl-0 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Year */}
                  <div className="md:w-1/2 md:px-8 mb-4 md:mb-0">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-4 border-chittoor-green flex items-center justify-center z-10">
                        <span className="text-lg font-bold text-chittoor-green">{item.year}</span>
                      </div>
                      <div className="md:hidden ml-4">
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 md:px-8">
                    <div className={`bg-gradient-to-br ${item.color} rounded-xl p-6 shadow-md h-full`}>
                      <div className="flex items-start">
                        <div className="p-2 rounded-lg bg-white/50 mr-4">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
