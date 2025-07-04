import React from 'react';
import { motion } from 'framer-motion';
import { Target, Leaf, Users, Zap, Droplets, TrendingUp } from 'lucide-react';

const ProjectGoals = () => {
  const goals = [
    {
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      title: "Economic Growth",
      items: [
        "Increase farmer income by 3-4x through sustainable practices",
        "Create 500+ direct employment opportunities",
        "Establish 50+ rural enterprises by 2030"
      ]
    },
    {
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      title: "Environmental Sustainability",
      items: [
        "Convert 600 acres to organic and sustainable farming",
        "Reduce water usage by 40% through efficient irrigation",
        "Achieve carbon neutrality through renewable energy"
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Social Impact",
      items: [
        "Improve education access for 1,000+ children",
        "Provide vocational training to 500+ women",
        "Enhance healthcare access for 5,000+ villagers"
      ]
    },
    {
      icon: <Zap className="h-6 w-6 text-green-600" />,
      title: "Energy Independence",
      items: [
        "Generate 10MW of renewable energy",
        "Power 5,000+ households with clean energy",
        "Reduce dependency on fossil fuels by 60%"]
    },
    {
      icon: <Droplets className="h-6 w-6 text-green-600" />,
      title: "Water Conservation",
      items: [
        "Recharge 100 million liters of groundwater annually",
        "Implement rainwater harvesting across all villages",
        "Reduce agricultural water wastage by 50%"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            <Target className="h-4 w-4 mr-2" />
            Our Targets
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project <span className="text-green-600">Goals</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive goals encompass economic, environmental, and social dimensions to create lasting, sustainable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-green-100 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-green-50 mr-4">
                  {goal.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{goal.title}</h3>
              </div>
              <ul className="space-y-3">
                {goal.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          {/* Impact Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-xl text-white md:col-span-2 lg:col-span-3"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">5,000+</div>
                <p className="text-green-100">Lives Impacted</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">600+</div>
                <p className="text-green-100">Acres Transformed</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10MW</div>
                <p className="text-green-100">Renewable Energy</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-green-500/30">
              <p className="text-green-100 mb-4">
                Our goals are ambitious but achievable, with clear metrics for success and a phased approach to implementation.
              </p>
              <a 
                href="#impact" 
                className="inline-flex items-center text-white font-medium hover:text-green-50 transition-colors duration-200"
              >
                Learn about our impact
                <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Join us in achieving these ambitious goals and creating lasting change in rural India.
          </p>
          <a 
            href="#get-involved" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
          >
            Support Our Mission
            <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectGoals;
