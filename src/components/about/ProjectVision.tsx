import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Leaf, Sun, Users, BookOpen, Heart } from 'lucide-react';

const ProjectVision = () => {
  const visionPillars = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Sustainable Agriculture",
      description: "Transforming 600 acres into a model of sustainable farming that demonstrates economic viability and environmental stewardship."
    },
    {
      icon: <Sun className="h-8 w-8 text-amber-500" />,
      title: "Renewable Energy",
      description: "Pioneering agrivoltaics and renewable energy solutions that power communities while preserving agricultural land."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      title: "Education & Innovation",
      description: "Creating a living laboratory for agricultural research and a center for learning that bridges urban and rural knowledge."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Community Prosperity",
      description: "Empowering local communities through skill development, employment, and sustainable livelihood opportunities."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Wellness & Tourism",
      description: "Developing agritourism and wellness retreats that celebrate rural life and sustainable living."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            <Eye className="h-4 w-4 mr-2" />
            Looking Ahead
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Vision</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We envision a future where rural communities thrive through sustainable practices, where agriculture is both economically viable and environmentally responsible, and where the rural-urban divide is bridged through innovation and education.
          </p>
        </div>

        {/* Vision Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {visionPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </motion.div>
          ))}
          
          {/* Call to action card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-xl shadow-lg text-white"
          >
            <h3 className="text-xl font-semibold mb-3">Join Our Vision</h3>
            <p className="mb-6 text-green-100">
              Be part of a movement that's redefining rural development and creating sustainable futures.
            </p>
            <a 
              href="#get-involved" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-white hover:bg-green-50 transition-colors duration-200"
            >
              Get Involved
              <svg className="ml-2 -mr-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Future Impact */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our 5-Year Vision</h3>
            
            <div className="relative">
              {/* Timeline */}
              <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-green-200 transform -translate-x-1/2"></div>
              
              {/* Milestones */}
              <div className="space-y-12 md:space-y-16">
                {[
                  { year: '2025', title: 'Pilot Launch', description: 'Commence operations on initial 600 acres with core farming and energy infrastructure' },
                  { year: '2026', title: 'Community Integration', description: 'Establish education programs and community partnerships' },
                  { year: '2027', title: 'Scale & Replicate', description: 'Expand successful models to additional land and communities' },
                  { year: '2028', title: 'Research Hub', description: 'Develop as a center for agricultural innovation and sustainability research' },
                  { year: '2029', title: 'National Model', description: 'Establish as a replicable blueprint for rural development across India' }
                ].map((milestone, index) => (
                  <div 
                    key={index}
                    className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`w-full md:w-5/12 p-4 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="text-sm font-medium text-green-600">{milestone.year}</div>
                        <h4 className="text-lg font-semibold text-gray-900">{milestone.title}</h4>
                        <p className="text-gray-600 text-sm">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-medium z-10">
                      {index + 1}
                    </div>
                    
                    <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? 'order-1' : ''}`}></div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12">
              <p className="text-gray-600 mb-6">
                By 2030, we aim to impact 60,000+ acres and become a global reference for sustainable rural development.
              </p>
              <a 
                href="#timeline" 
                className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors duration-200"
              >
                View Detailed Timeline
                <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectVision;
