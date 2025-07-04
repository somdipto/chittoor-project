import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, GraduationCap, Cpu, Lightbulb, Zap, Sun, Wifi, Home, Wind, Rocket, Heart, Scale, Users } from 'lucide-react';

const ProjectAllies = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const allies = [
    {
      name: "Atria University",
      description: "A next-generation university fostering innovation and research in sustainable development.",
      category: "education",
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
      role: "Academic partner providing research and talent"
    },
    {
      name: "Atria Institute of Technology (AIT)",
      description: "Premier technical institute driving innovation in engineering and technology.",
      category: "education",
      icon: <Cpu className="h-6 w-6 text-blue-600" />,
      role: "Technical expertise and innovation hub"
    },
    {
      name: "Beyonders Studio",
      description: "Creative agency specializing in digital transformation and brand storytelling.",
      category: "innovation",
      icon: <Lightbulb className="h-6 w-6 text-purple-600" />,
      role: "Digital strategy and communication"
    },
    {
      name: "Atria Innovation Hub",
      description: "Incubator for startups and entrepreneurs in sustainability and technology.",
      category: "innovation",
      icon: <Rocket className="h-6 w-6 text-purple-600" />,
      role: "Innovation and entrepreneurship support"
    },
    {
      name: "Atria Power",
      description: "Leading provider of sustainable energy solutions and power generation.",
      category: "energy",
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      role: "Renewable energy infrastructure"
    },
    {
      name: "ACT (Atria Convergence Technologies)",
      description: "Provider of fiber-powered broadband and digital services.",
      category: "technology",
      icon: <Wifi className="h-6 w-6 text-indigo-600" />,
      role: "Digital connectivity solutions"
    },
    {
      name: "Radisson Blu Atria",
      description: "Luxury hospitality with a commitment to sustainability.",
      category: "hospitality",
      icon: <Building2 className="h-6 w-6 text-red-500" />,
      role: "Sustainable hospitality partner"
    },
    {
      name: "Atria Solar Roof Top",
      description: "Specialists in rooftop solar installations and clean energy solutions.",
      category: "energy",
      icon: <Sun className="h-6 w-6 text-amber-500" />,
      role: "Solar energy implementation"
    },
    {
      name: "Atria Renewables",
      description: "Pioneers in renewable energy projects and sustainable infrastructure.",
      category: "energy",
      icon: <Wind className="h-6 w-6 text-amber-500" />,
      role: "Renewable energy development"
    },
    {
      name: "Xcelerator",
      description: "Startup accelerator focused on sustainable technologies.",
      category: "innovation",
      icon: <Rocket className="h-6 w-6 text-purple-600" />,
      role: "Startup incubation and acceleration"
    },
    {
      name: "Atria Foundation",
      description: "Philanthropic arm driving social impact initiatives.",
      category: "community",
      icon: <Heart className="h-6 w-6 text-pink-500" />,
      role: "Social impact and community development"
    },
    {
      name: "ASKB Trust",
      description: "Trust focused on education and rural development.",
      category: "community",
      icon: <Scale className="h-6 w-6 text-teal-500" />,
      role: "Educational and rural development"
    },
    {
      name: "Chittoor Trust",
      description: "Local trust dedicated to the development of Chittoor district.",
      category: "community",
      icon: <Users className="h-6 w-6 text-teal-500" />,
      role: "Local community engagement"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Partners', count: allies.length },
    { id: 'education', name: 'Education', count: allies.filter(a => a.category === 'education').length },
    { id: 'energy', name: 'Energy', count: allies.filter(a => a.category === 'energy').length },
    { id: 'innovation', name: 'Innovation', count: allies.filter(a => a.category === 'innovation').length },
    { id: 'community', name: 'Community', count: allies.filter(a => a.category === 'community').length },
    { id: 'technology', name: 'Technology', count: allies.filter(a => a.category === 'technology').length },
    { id: 'hospitality', name: 'Hospitality', count: allies.filter(a => a.category === 'hospitality').length },
  ];

  const filteredAllies = activeFilter === 'all' 
    ? allies 
    : allies.filter(ally => ally.category === activeFilter);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'education': return 'bg-blue-100 text-blue-800';
      case 'energy': return 'bg-amber-100 text-amber-800';
      case 'innovation': return 'bg-purple-100 text-purple-800';
      case 'community': return 'bg-teal-100 text-teal-800';
      case 'technology': return 'bg-indigo-100 text-indigo-800';
      case 'hospitality': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="allies" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            <Users className="h-4 w-4 mr-2" />
            Our Network
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project <span className="text-green-600">Allies</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Chittoor's Initiative is proud to collaborate with the Atria Family of companies and organizations, 
            each bringing unique expertise to drive sustainable rural transformation.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === category.id 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {category.name} 
              <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                activeFilter === category.id ? 'bg-white/20' : 'bg-gray-200/70'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Allies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredAllies.map((ally, index) => (
              <motion.div
                key={ally.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className={`p-3 rounded-lg ${getCategoryColor(ally.category).split(' ')[0]} bg-opacity-20 mr-4`}>
                      {ally.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{ally.name}</h3>
                      <span className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(ally.category)}`}>
                        {categories.find(c => c.id === ally.category)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-gray-600">{ally.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm font-medium text-gray-900">Role in Initiative:</p>
                    <p className="text-sm text-gray-600">{ally.role}</p>
                  </div>
                </div>
                
                <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                  <a 
                    href="#" 
                    className="text-sm font-medium text-green-600 hover:text-green-700 flex items-center"
                    onClick={(e) => e.preventDefault()}
                  >
                    Learn more
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Become a Partner</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join the Atria Family in creating sustainable impact. Partner with us to drive meaningful change in rural communities.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
            >
              Partner With Us
              <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectAllies;
