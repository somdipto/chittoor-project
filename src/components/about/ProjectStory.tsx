import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Leaf, Target, Users, Droplets, Sun } from 'lucide-react';

const ProjectStory = () => {
  const storyPoints = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Sustainable Beginnings",
      keywords: ["Rural Transformation", "Sustainable Agriculture", "Community Development"],
      content: "Pioneering sustainable solutions for rural India"
    },
    {
      icon: <Leaf className="h-5 w-5" />,
      title: "Key Challenges",
      keywords: ["Soil Health", "Water Scarcity", "Farmer Livelihoods"],
      content: "Transforming challenges into opportunities"
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Our Solution",
      keywords: ["Regenerative Farming", "Water Conservation", "Economic Growth"],
      content: "Innovative practices for lasting impact"
    }
  ];

  const impactStats = [
    { value: '600+', label: 'Acres Regenerated', icon: <Leaf className="h-6 w-6" /> },
    { value: '200+', label: 'Farmers Trained', icon: <Users className="h-6 w-6" /> },
    { value: '15+', label: 'Villages Transformed', icon: <Droplets className="h-6 w-6" /> },
    { value: '5', label: 'Key Initiatives', icon: <Sun className="h-6 w-6" /> }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Narrative Quote */}
      <motion.div 
        className="relative bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12 border border-green-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full -mt-16 -mr-16"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-200 rounded-full -mb-20 -ml-20"></div>
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
            "From humble beginnings to community transformation"
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl">
            Project Chittoor started when our founder saw neglected farmland and decided rural India deserved a future shaped by sustainable agriculture, smart energy, and people-centered design.
          </p>
        </div>
      </motion.div>

      {/* Header Section */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-700">
          Our Impact Journey
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-teal-400 mx-auto mt-4 mb-6 rounded-full"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Transforming rural India through sustainable innovation
        </p>
      </motion.div>

      {/* Story Points */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {storyPoints.map((point, index) => (
          <motion.div 
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-4">
              {point.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {point.keywords.map((keyword, i) => (
                <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-50 text-green-700">
                  {keyword}
                </span>
              ))}
            </div>
            <p className="text-gray-600 text-sm font-medium">{point.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Impact Section */}
      <motion.div 
        className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 shadow-inner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact by the Numbers</h3>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Transforming rural communities through measurable, sustainable change
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {impactStats.map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="text-green-600 mb-3 flex justify-center">
                  {React.cloneElement(stat.icon, { className: 'h-8 w-8' })}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectStory;
