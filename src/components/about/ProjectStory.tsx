import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Leaf, Users, Target, Clock } from 'lucide-react';

const ProjectStory = () => {
  const storyPoints = [
    {
      icon: <BookOpen className="h-6 w-6 text-green-600" />,
      title: "The Genesis",
      content: "Born from coffee table discussions about India's farming crisis, Project Chittoor emerged as a visionary response to the challenges facing rural agriculture."
    },
    {
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      title: "The Crisis",
      content: "Witnessing the devastating cycle of monocropping, soil degradation, and farmer distress, we recognized the urgent need for sustainable alternatives."
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "The Vision",
      content: "Inspired by M.S. Swaminathan's concept of an 'Evergreen Revolution,' we envisioned a model that combines traditional wisdom with modern technology."
    },
    {
      icon: <Target className="h-6 w-6 text-green-600" />,
      title: "The Mission",
      content: "To create a replicable template for integrated rural development that transforms 600 acres in Chittoor into a thriving, self-sustaining ecosystem."
    },
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: "The Future",
      content: "What began as a 600-acre pilot has the potential to scale across 60,000+ acres, positioning India as a global leader in sustainable agriculture."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Story</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to a movement transforming rural India, discover the journey of Chittoor's Initiative.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-green-200 transform -translate-x-1/2"></div>
          
          {/* Story points */}
          <div className="space-y-12 md:space-y-16">
            {storyPoints.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 p-6 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-green-50 mr-4">
                        {point.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{point.title}</h3>
                    </div>
                    <p className="text-gray-600">{point.content}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:block w-6 h-6 rounded-full bg-green-600 border-4 border-white shadow-md z-10"></div>
                
                {/* Spacer for even items */}
                <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? 'md:order-1' : ''}`}></div>
              </motion.div>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-100 rounded-full opacity-30 -z-10"></div>
          <div className="absolute bottom-0 -left-10 w-60 h-60 bg-amber-100 rounded-full opacity-20 -z-10"></div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <a 
            href="#timeline" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
          >
            Explore Our Timeline
            <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectStory;
