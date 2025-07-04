import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle, ArrowRight } from 'lucide-react';

const ProjectAim = () => {
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
            <div className="prose prose-green max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-700 mb-6">
                We envision a future where rural communities thrive through sustainable practices, where farmers are empowered with knowledge and resources, and where the balance between human activity and nature is restored.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Our Approach</h3>
              <p className="text-gray-700 mb-8">
                Through a combination of modern technology and traditional wisdom, we're creating a model that can be replicated across India to transform rural economies and ecosystems.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Focus Areas</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-3 mt-0.5">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <span className="text-gray-700">Sustainable Agriculture</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-3 mt-0.5">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <span className="text-gray-700">Renewable Energy</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-3 mt-0.5">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <span className="text-gray-700">Education & Training</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-3 mt-0.5">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <span className="text-gray-700">Rural Livelihoods</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Impact</h3>
                  <p className="text-gray-700 mb-4">
                    Since our inception, we've made significant progress in transforming rural communities through our sustainable initiatives.
                  </p>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-gray-600">• 600+ acres under sustainable management</p>
                    <p className="text-sm text-gray-600">• 200+ farmers trained in modern techniques</p>
                    <p className="text-sm text-gray-600">• 5+ villages positively impacted</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                <motion.div 
                  className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl font-bold text-green-600 mb-2">600+</div>
                  <div className="text-sm text-gray-600">Acres of Land</div>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
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
