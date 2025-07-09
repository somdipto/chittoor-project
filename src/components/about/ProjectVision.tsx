
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Sun, 
  Users, 
  BookOpen, 
  Zap, 
  Droplets, 
  Target,
  Eye,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

  const missionVisionCards = [
    {
      title: "From Soil to Soul: Reclaiming Roots, Cultivating Futures",
      type: "Mission",
      description: "To architect a replicable and future-ready blueprint for rural transformation—where the forgotten edges of marginal farmland are reborn as thriving eco-tech sanctuaries, harmonizing innovation with nature. These villages shall serve as crucibles for dignified livelihoods, immersive learning ecosystems, and the emergence of grassroots leadership, cultivating stewards of sustainability and agents of change.",
      icon: <Target className="h-8 w-8 text-green-700" />,
      color: "from-green-50 to-green-100",
      border: "border-l-4 border-green-600",
    },
    {
      title: "Cultivating Tomorrow's Villages",
      type: "Vision",
      description: "To initiate a transformative movement that reclaims underutilized rural landscapes and reimagines them as regenerative eco-tech communities. These living laboratories will empower local populations through sustainable livelihoods, experiential learning hubs, and inclusive leadership platforms—setting the foundation for a resilient, self-reliant rural renaissance.",
      icon: <Eye className="h-8 w-8 text-blue-700" />,
      color: "from-blue-50 to-blue-100",
      border: "border-l-4 border-blue-600",
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Mission and Vision Cards */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
              OUR FOUNDATION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Mission</span> & <span className="text-blue-600">Vision</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guiding principles that drive our commitment to rural transformation and sustainable development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {missionVisionCards.map((card, index) => (
              <motion.div
                key={card.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className={`bg-gradient-to-br ${card.color} ${card.border} h-full shadow-sm hover:shadow-md transition-shadow`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm">
                        {card.icon}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                          {card.type}
                        </span>
                        <CardTitle className="text-xl font-bold text-gray-900 mt-1">
                          {card.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {card.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-gray-600">
                      <span>Learn more about our {card.type.toLowerCase()}</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
