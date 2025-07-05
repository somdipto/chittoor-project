import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Leaf, Users, Zap, Droplets, TrendingUp, 
  ArrowRight, BarChart2, Clock, HeartPulse, Globe, 
  BookOpen, Home, Cloud, CloudRain, Trash2 
} from 'lucide-react';

const ProjectGoals = () => {
  const goals = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Economic Growth",
      description: "Boosting local economies through sustainable practices",
      color: "from-blue-500 to-blue-600",
      highlights: [
        { value: "3-4x", label: "Income Increase", icon: <BarChart2 className="h-4 w-4" /> },
        { value: "500+", label: "Jobs Created", icon: <Users className="h-4 w-4" /> },
        { value: "50+", label: "Rural Enterprises", icon: <Target className="h-4 w-4" /> }
      ]
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Environmental Impact",
      description: "Protecting and restoring natural ecosystems",
      color: "from-green-500 to-green-600",
      highlights: [
        { value: "600+", label: "Organic Acres", icon: <Leaf className="h-4 w-4" /> },
        { value: "40%", label: "Water Saved", icon: <Droplets className="h-4 w-4" /> },
        { value: "100%", label: "Renewable Energy", icon: <Zap className="h-4 w-4" /> }
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Development",
      description: "Empowering communities through education and training",
      color: "from-purple-500 to-purple-600",
      highlights: [
        { value: "1,000+", label: "Children Educated", icon: <BookOpen className="h-4 w-4" /> },
        { value: "500+", label: "Women Trained", icon: <Users className="h-4 w-4" /> },
        { value: "5,000+", label: "Lives Impacted", icon: <HeartPulse className="h-4 w-4" /> }
      ]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Clean Energy",
      description: "Transitioning to sustainable energy solutions",
      color: "from-amber-500 to-amber-600",
      highlights: [
        { value: "10MW", label: "Renewable Power", icon: <Zap className="h-4 w-4" /> },
        { value: "5,000+", label: "Households", icon: <Home className="h-4 w-4" /> },
        { value: "60%", label: "Less Emissions", icon: <Cloud className="h-4 w-4" /> }
      ]
    },

  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-green-600 bg-green-100 rounded-full mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Building a <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">Sustainable Future</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ambitious yet achievable targets across all aspects of sustainable development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative h-full"
            >
              <div className="absolute inset-0.5 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full bg-gradient-to-br ${goal.color} opacity-10`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 bg-gradient-to-br ${goal.color} text-white`}>
                    {React.cloneElement(goal.icon, { className: 'h-6 w-6' })}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{goal.title}</h3>
                  <p className="text-gray-500 text-sm mb-6">{goal.description}</p>
                  
                  <div className="space-y-4 mt-6 pt-4 border-t border-gray-100">
                    {goal.highlights.map((item, i) => (
                      <div key={i} className="flex items-center">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 mr-3">
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{item.value}</div>
                          <div className="text-xs text-gray-500">{item.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-10 text-center text-white overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Mission for a Better Tomorrow</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Be part of our journey to create lasting, sustainable change in rural communities across India.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg">
                Get Involved
              </button>
              <button className="bg-transparent border-2 border-white/30 hover:border-white/50 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5">
                Learn More
              </button>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-white/5"></div>
          <div className="absolute -left-20 -top-20 w-48 h-48 rounded-full bg-white/5"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGoals;
