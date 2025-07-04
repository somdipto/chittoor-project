import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, BarChart2, Clock, Users, Leaf, Zap, BookOpen, Droplets } from 'lucide-react';

const ProjectObjectives = () => {
  const objectives = [
    {
      category: "Agricultural Development",
      items: [
        "Convert 100% of 600 acres to organic farming within 3 years",
        "Increase crop yields by 40% through sustainable practices",
        "Establish 10 demonstration farms for training and education",
        "Reduce post-harvest losses to less than 5%"
      ]
    },
    {
      category: "Energy & Infrastructure",
      items: [
        "Install 10MW solar power capacity within 5 years",
        "Provide 24/7 reliable electricity to all project areas",
        "Develop smart microgrids for energy distribution",
        "Reduce carbon footprint by 10,000 tons annually"
      ]
    },
    {
      category: "Community Development",
      items: [
        "Train 1,000 farmers in sustainable agriculture",
        "Establish 5 community learning centers",
        "Improve access to clean water for 100% of households",
        "Create 500+ direct employment opportunities"
      ]
    },
    {
      category: "Education & Research",
      items: [
        "Develop curriculum for sustainable farming practices",
        "Establish research partnerships with 5 academic institutions",
        "Publish 10+ research papers on sustainable agriculture",
        "Host annual agricultural innovation summit"
      ]
    },
    {
      category: "Economic Sustainability",
      items: [
        "Increase average farmer income by 3x within 5 years",
        "Establish 50+ farmer producer organizations",
        "Develop direct-to-consumer sales channels",
        "Achieve 80% project financial self-sufficiency"
      ]
    },
    {
      category: "Environmental Impact",
      items: [
        "Recharge 100 million liters of groundwater annually",
        "Increase green cover by 25% across project area",
        "Eliminate use of chemical pesticides and fertilizers",
        "Achieve zero waste through circular economy practices"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            <Target className="h-4 w-4 mr-2" />
            Our Roadmap
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project <span className="text-green-600">Objectives</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Our objectives are specific, measurable, and time-bound targets that guide our implementation strategy and measure our progress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-green-50 mr-3">
                  {index % 6 === 0 && <Leaf className="h-5 w-5 text-green-600" />}
                  {index % 6 === 1 && <Zap className="h-5 w-5 text-amber-500" />}
                  {index % 6 === 2 && <Users className="h-5 w-5 text-blue-500" />}
                  {index % 6 === 3 && <BookOpen className="h-5 w-5 text-purple-500" />}
                  {index % 6 === 4 && <BarChart2 className="h-5 w-5 text-green-700" />}
                  {index % 6 === 5 && <Droplets className="h-5 w-5 text-blue-400" />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{objective.category}</h3>
              </div>
              <ul className="space-y-3">
                {objective.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Impact Metrics */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Key Performance Indicators</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We measure our success through these critical metrics that reflect our commitment to sustainable development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: "3-4x", label: "Farmer Income Increase" },
              { value: "100%", label: "Organic Conversion" },
              { value: "10MW", label: "Renewable Energy" },
              { value: "5,000+", label: "Lives Impacted" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-green-50 rounded-xl"
              >
                <div className="text-3xl font-bold text-green-600 mb-2">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-gray-900">Our Timeline</h4>
                <p className="text-gray-600">See how we plan to achieve these objectives over the next 5 years.</p>
              </div>
              <a 
                href="#timeline" 
                className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
              >
                View Project Timeline
                <svg className="ml-2 -mr-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
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

export default ProjectObjectives;
