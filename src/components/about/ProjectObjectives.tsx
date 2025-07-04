import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle, Leaf, Zap, Users, BookOpen, BarChart2, Droplets } from 'lucide-react';

const ProjectObjectives = () => {
  const keyObjectives = [
    {
      title: 'Sustainable Agriculture',
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      items: [
        'Convert 100% of 600 acres to organic farming',
        'Increase crop yields by 40% through sustainable practices',
        'Train 1,000+ farmers in modern techniques'
      ]
    },
    {
      title: 'Renewable Energy',
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      items: [
        'Install 10MW solar power capacity',
        'Develop smart microgrids for energy distribution',
        'Reduce carbon footprint by 10,000+ tons annually'
      ]
    },
    {
      title: 'Community Development',
      icon: <Users className="h-6 w-6 text-blue-500" />,
      items: [
        'Establish 5 community learning centers',
        'Create 500+ direct employment opportunities',
        'Improve access to clean water for all households'
      ]
    },
    {
      title: 'Economic Growth',
      icon: <BarChart2 className="h-6 w-6 text-green-700" />,
      items: [
        'Increase average farmer income by 3x',
        'Establish 50+ farmer producer organizations',
        'Develop direct-to-consumer sales channels'
      ]
    },
    {
      title: 'Environmental Impact',
      icon: <Droplets className="h-6 w-6 text-blue-400" />,
      items: [
        'Recharge 100M+ liters of groundwater annually',
        'Increase green cover by 25%',
        'Achieve zero waste through circular economy'
      ]
    },
    {
      title: 'Education & Research',
      icon: <BookOpen className="h-6 w-6 text-purple-500" />,
      items: [
        'Develop sustainable farming curriculum',
        'Partner with 5+ academic institutions',
        'Host annual agricultural innovation summit'
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            <Target className="h-4 w-4 mr-2" />
            Our Objectives
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Strategic <span className="text-green-600">Goals</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Our objectives are designed to create lasting impact through sustainable development, community empowerment, and environmental stewardship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyObjectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-white shadow-sm mr-4 border border-gray-100">
                  {objective.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{objective.title}</h3>
              </div>
              <ul className="space-y-3">
                {objective.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-50 to-amber-50 rounded-2xl p-8 md:p-10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Impact by 2025</h3>
            <p className="text-gray-700 mb-6">
              Through these objectives, we aim to create a replicable model for sustainable rural development that can be scaled across India.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">600+</div>
                <div className="text-sm text-gray-600">Acres</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">1,000+</div>
                <div className="text-sm text-gray-600">Farmers Trained</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">10MW</div>
                <div className="text-sm text-gray-600">Solar Power</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Jobs Created</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectObjectives;
