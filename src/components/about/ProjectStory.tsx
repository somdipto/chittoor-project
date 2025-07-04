import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Leaf, Target, Users, Droplets, Sun } from 'lucide-react';

const ProjectStory = () => {
  const storyPoints = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Our Beginning",
      content: "Chittoor's Initiative was born from a vision to transform rural India through sustainable agriculture and community development."
    },
    {
      icon: <Leaf className="h-5 w-5" />,
      title: "The Challenge",
      content: "Addressing the critical issues of soil degradation, water scarcity, and farmer livelihoods in rural communities."
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Our Approach",
      content: "Implementing innovative, sustainable farming practices that benefit both the environment and local communities."
    }
  ];

  const impactStats = [
    { value: '600+', label: 'Acres Transformed', icon: <Leaf className="h-6 w-6" /> },
    { value: '200+', label: 'Farmers Empowered', icon: <Users className="h-6 w-6" /> },
    { value: '15+', label: 'Villages Impacted', icon: <Droplets className="h-6 w-6" /> },
    { value: '5', label: 'Sustainable Practices', icon: <Sun className="h-6 w-6" /> }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Our Story
        </h2>
        <div className="w-16 h-1 bg-green-600 mx-auto mt-4 mb-6"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A journey of transformation and impact in rural India
        </p>
      </div>

      {/* Story Points */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {storyPoints.map((point, index) => (
          <motion.div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-50 text-green-600 mb-4">
              {point.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{point.title}</h3>
            <p className="text-gray-600">{point.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Impact Section */}
      <div className="bg-green-50 rounded-xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Impact in Numbers</h3>
          <p className="text-gray-600 mb-8">
            Since our inception, we've been making a tangible difference in the lives of farmers and rural communities.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-green-600 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStory;
