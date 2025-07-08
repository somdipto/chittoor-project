
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Sun, 
  Users, 
  BookOpen, 
  Zap, 
  Droplets, 
  TrendingUp, 
  Target 
} from 'lucide-react';

const ProjectVision = () => {
  const visionHighlights = [
    {
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      title: "600+ Acres",
      description: "Sustainable Farming"
    },
    {
      icon: <Sun className="h-6 w-6 text-amber-500" />,
      title: "10MW",
      description: "Renewable Energy"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "500+",
      description: "Jobs Created"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-purple-500" />,
      title: "1000+",
      description: "Children Educated"
    },
    {
      icon: <Droplets className="h-6 w-6 text-cyan-500" />,
      title: "100M Liters",
      description: "Water Recharged"
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: "60%",
      description: "Fossil Fuel Reduction"
    }
  ];

  return (
    <section id="mission" className="py-12 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Soil to Soul: <span className="text-green-600">Reclaiming Roots, Cultivating Futures</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full mb-8"></div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                To architect a replicable and future-ready blueprint for rural transformation—where the forgotten edges of marginal farmland are reborn as thriving eco-tech sanctuaries, harmonizing innovation with nature. These villages shall serve as crucibles for dignified livelihoods, immersive learning ecosystems, and the emergence of grassroots leadership, cultivating stewards of sustainability and agents of change.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div id="vision" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Cultivating Tomorrow's Villages</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-8"></div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                To initiate a transformative movement that reclaims underutilized rural landscapes and reimagines them as regenerative eco-tech communities. These living laboratories will empower local populations through sustainable livelihoods, experiential learning hubs, and inclusive leadership platforms—setting the foundation for a resilient, self-reliant rural renaissance.
              </p>
            </div>
          </div>
        </div>
        
        {/* Impact Highlights */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Our Impact for <span className="text-green-600">Chittoor</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {visionHighlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-3">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm font-medium">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectVision;
