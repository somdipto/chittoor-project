import React from 'react';
import { motion } from 'framer-motion';
import { Target, ArrowRight, CheckCircle } from 'lucide-react';

const ProjectAim = () => {
  const aims = [
    "To reverse urban migration by making rural life economically viable and socially rewarding",
    "To demonstrate sustainable farming practices that increase farmers' income by 3-4x",
    "To create a replicable model for integrated rural development across India",
    "To establish a living laboratory for agricultural innovation and research",
    "To empower local communities through education and skill development"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
              <Target className="h-4 w-4 mr-2" />
              Our Purpose
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project <span className="text-green-600">Aim</span>
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600">
              Chittoor's Initiative seeks to transform 600 acres of land into a thriving, self-sustaining ecosystem that serves as a blueprint for rural development, combining sustainable agriculture, clean energy, and transformative education.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Core Objectives</h3>
                <ul className="space-y-4">
                  {aims.map((aim, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{aim}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-green-100 mr-4">
                    <ArrowRight className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Our Approach</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We're not just creating a farm; we're building an ecosystem where agriculture, energy, education, and community development work in harmony to create lasting change.
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                    <span className="text-sm font-medium text-gray-700">Sustainable Agriculture</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-amber-500 mr-3"></div>
                    <span className="text-sm font-medium text-gray-700">Renewable Energy</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                    <span className="text-sm font-medium text-gray-700">Education & Technology</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                    <span className="text-sm font-medium text-gray-700">Community Development</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div 
                className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-3xl font-bold text-green-600 mb-2">600+</div>
                <div className="text-sm text-gray-600">Acres of Land</div>
              </motion.div>
              <motion.div 
                className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-3xl font-bold text-green-600 mb-2">3-4x</div>
                <div className="text-sm text-gray-600">Income Increase</div>
              </motion.div>
              <motion.div 
                className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Sustainable</div>
              </motion.div>
              <motion.div 
                className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-3xl font-bold text-green-600 mb-2">60K+</div>
                <div className="text-sm text-gray-600">Potential Expansion (acres)</div>
              </motion.div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Join us in our mission to transform rural India through sustainable development and innovation.
            </p>
            <a 
              href="#get-involved" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
            >
              Get Involved
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

export default ProjectAim;
