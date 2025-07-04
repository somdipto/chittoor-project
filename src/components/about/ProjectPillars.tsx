import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Sun, BookOpen, Users, Zap, ArrowRight, Droplets, Activity, HeartPulse } from 'lucide-react';

const ProjectPillars = () => {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  const pillars = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainable Agriculture",
      description: "Transforming traditional farming into sustainable, organic practices that increase yields while protecting the environment.",
      color: "green",
      highlights: [
        "Organic farming techniques",
        "Water conservation",
        "Soil health management",
        "Crop diversification"
      ],
      stats: [
        { value: "600+", label: "Acres under sustainable farming" },
        { value: "40%", label: "Increase in crop yield" },
        { value: "100%", label: "Organic conversion" }
      ]
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Renewable Energy",
      description: "Harnessing solar power to create sustainable energy solutions that power communities and reduce carbon footprint.",
      color: "amber",
      highlights: [
        "Solar power generation",
        "Energy-efficient infrastructure",
        "Off-grid solutions",
        "Carbon footprint reduction"
      ],
      stats: [
        { value: "10MW", label: "Solar capacity" },
        { value: "5,000+", label: "Households powered" },
        { value: "10K+", label: "Tons CO2 reduced" }
      ]
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Education",
      description: "Empowering communities through education and skill development for sustainable livelihoods.",
      color: "blue",
      highlights: [
        "Digital literacy programs",
        "Vocational training",
        "Sustainable farming education",
        "E-learning platforms"
      ],
      stats: [
        { value: "1,000+", label: "Students impacted" },
        { value: "50+", label: "Training programs" },
        { value: "5", label: "Learning centers" }
      ]
    },
    {
      icon: <HeartPulse className="h-8 w-8" />,
      title: "Agrotourism and Wellness",
      description: "Promoting sustainable tourism that connects visitors with rural life and wellness practices.",
      color: "purple",
      highlights: [
        "Farm stays and experiences",
        "Wellness retreats",
        "Local cuisine and culture",
        "Eco-friendly accommodations"
      ],
      stats: [
        { value: "100+", label: "Tourism jobs created" },
        { value: "10+", label: "Wellness programs" },
        { value: "5+", label: "Partner communities" }
      ]
    }
  ];

  const colorVariants = {
    green: 'from-green-100 to-green-50 border-green-200 text-green-800',
    amber: 'from-amber-100 to-amber-50 border-amber-200 text-amber-800',
    blue: 'from-blue-100 to-blue-50 border-blue-200 text-blue-800',
    purple: 'from-purple-100 to-purple-50 border-purple-200 text-purple-800',
    indigo: 'from-indigo-100 to-indigo-50 border-indigo-200 text-indigo-800'
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            <Zap className="h-4 w-4 mr-2" />
            Our Foundation
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project <span className="text-green-600">Pillars</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            These four interconnected pillars form the foundation of Chittoor's Initiative, each contributing to our vision of sustainable rural transformation.
          </p>
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br ${colorVariants[pillar.color as keyof typeof colorVariants]} rounded-xl p-6 border hover:shadow-md transition-all duration-300 cursor-pointer`}
                onClick={() => setActivePillar(activePillar === index ? null : index)}
              >
                <div className="flex items-start">
                  <div className={`p-2 rounded-lg bg-opacity-20 ${
                    pillar.color === 'green' ? 'bg-green-500' :
                    pillar.color === 'amber' ? 'bg-amber-500' :
                    pillar.color === 'blue' ? 'bg-blue-500' :
                    pillar.color === 'purple' ? 'bg-purple-500' : 'bg-indigo-500'
                  } mr-4`}>
                    {React.cloneElement(pillar.icon, { className: `h-6 w-6 ${pillar.color === 'green' ? 'text-green-600' : pillar.color === 'amber' ? 'text-amber-600' : pillar.color === 'blue' ? 'text-blue-600' : pillar.color === 'purple' ? 'text-purple-600' : 'text-indigo-600'}` })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                    <p className="text-gray-700 mb-4">{pillar.description}</p>
                    
                    <AnimatePresence>
                      {activePillar === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-gray-200 pt-4 mt-4">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">Key Focus Areas:</h4>
                            <ul className="space-y-1 mb-4">
                              {pillar.highlights.map((item, i) => (
                                <li key={i} className="flex items-center">
                                  <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2"></div>
                                  <span className="text-sm text-gray-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="grid grid-cols-3 gap-2 mt-4">
                              {pillar.stats.map((stat, i) => (
                                <div key={i} className="text-center">
                                  <div className="font-bold text-gray-900">{stat.value}</div>
                                  <div className="text-xs text-gray-500">{stat.label}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button 
                      className={`mt-3 text-sm font-medium flex items-center ${
                        pillar.color === 'green' ? 'text-green-700 hover:text-green-800' :
                        pillar.color === 'amber' ? 'text-amber-700 hover:text-amber-800' :
                        pillar.color === 'blue' ? 'text-blue-700 hover:text-blue-800' :
                        pillar.color === 'purple' ? 'text-purple-700 hover:text-purple-800' :
                        'text-indigo-700 hover:text-indigo-800'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePillar(activePillar === index ? null : index);
                      }}
                    >
                      {activePillar === index ? 'Show less' : 'Learn more'}
                      <ArrowRight className={`ml-1 h-4 w-4 transition-transform ${activePillar === index ? 'rotate-90' : ''}`} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              Discover how these pillars work together to create sustainable impact.
            </p>
            <a 
              href="#get-involved" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
            >
              Get Involved
              <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
            </a>
          </div>
      </div>
    </section>
  );
};

export default ProjectPillars;
