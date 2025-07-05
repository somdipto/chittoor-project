
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Leaf, Lightbulb, Heart, Globe } from 'lucide-react';

const ProjectApproach = () => {
  const approaches = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Sustainable Agriculture",
      description: "We implement regenerative farming practices that restore soil health, increase biodiversity, and improve crop yields while reducing environmental impact.",
      features: [
        "Organic farming techniques",
        "Water conservation methods", 
        "Soil restoration practices",
        "Biodiversity enhancement"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Community-Centered Development",
      description: "Our approach puts local communities at the heart of all initiatives, ensuring that development is driven by community needs and participation.",
      features: [
        "Community participation",
        "Local leadership development",
        "Skill building programs",
        "Economic empowerment"
      ]
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-amber-500" />,
      title: "Innovation & Technology",
      description: "We leverage cutting-edge technology and innovative solutions to address rural challenges and create scalable impact.",
      features: [
        "Smart farming solutions",
        "Digital education platforms",
        "Renewable energy systems",
        "Data-driven decision making"
      ]
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Holistic Well-being",
      description: "We focus on improving overall quality of life by addressing health, education, and social needs alongside economic development.",
      features: [
        "Healthcare access",
        "Educational opportunities",
        "Social infrastructure",
        "Mental health support"
      ]
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: "Results-Oriented Impact",
      description: "Every initiative is designed with clear objectives and measurable outcomes to ensure maximum impact and accountability.",
      features: [
        "Clear impact metrics",
        "Regular monitoring",
        "Adaptive management",
        "Transparent reporting"
      ]
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: "Scalable Solutions",
      description: "We develop replicable models that can be adapted and scaled across different regions and communities.",
      features: [
        "Replicable frameworks",
        "Knowledge sharing",
        "Best practice documentation",
        "Cross-regional collaboration"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            <Target className="h-4 w-4 mr-2" />
            Our Approach
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Create <span className="text-green-600">Lasting Impact</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach combines sustainable practices, community engagement, and innovative technology to create transformative change in rural communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-xl bg-white shadow-sm mr-4 border border-gray-100">
                  {approach.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{approach.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {approach.description}
              </p>
              
              <ul className="space-y-2">
                {approach.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Collaborative Partnership Model
            </h3>
            <p className="text-gray-700 mb-6">
              We believe in the power of collaboration. Our approach brings together local communities, 
              government agencies, academic institutions, and private sector partners to create 
              comprehensive solutions that address complex rural challenges.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">5+</div>
                <div className="text-sm text-gray-600">Partner Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">Village Communities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">3</div>
                <div className="text-sm text-gray-600">Academic Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Community-Led</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectApproach;
