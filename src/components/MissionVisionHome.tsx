
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MissionVisionHome = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Mission</span> & <span className="text-blue-600">Vision</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">From Soil to Soul</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Reclaiming roots and cultivating futures through rural transformation—where marginal farmland becomes thriving eco-tech sanctuaries, harmonizing innovation with nature.
            </p>
            <Link 
              to="/about/mission" 
              className="inline-flex items-center text-green-600 font-medium text-sm hover:text-green-700 transition-colors"
            >
              Learn More
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Cultivating Tomorrow's Villages</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Transforming underutilized rural landscapes into regenerative eco-tech communities that empower local populations through sustainable livelihoods and experiential learning.
            </p>
            <Link 
              to="/about/mission" 
              className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
            >
              Learn More
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionHome;
