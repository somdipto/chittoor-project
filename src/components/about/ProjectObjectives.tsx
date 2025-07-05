import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Leaf, Zap, Users, BookOpen, BarChart2, 
  Droplets, ArrowRight, TrendingUp, Sun, 
  Home, Cloud, Clock, Trash2, Calendar, Briefcase
} from 'lucide-react';

const ProjectObjectives = () => {
  const keyObjectives = [
    {
      title: 'Sustainable Agriculture',
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      color: 'from-green-50 to-emerald-50',
      highlights: [
        { text: '600 Acres', subtext: 'Organic Farming', icon: <Leaf className="h-4 w-4" /> },
        { text: '40%', subtext: 'Yield Increase', icon: <TrendingUp className="h-4 w-4" /> },
        { text: '1,000+', subtext: 'Farmers', icon: <Users className="h-4 w-4" /> }
      ]
    },
    {
      title: 'Clean Energy',
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      color: 'from-amber-50 to-yellow-50',
      highlights: [
        { text: '10MW', subtext: 'Solar Power', icon: <Sun className="h-4 w-4" /> },
        { text: '10,000+', subtext: 'Tons CO₂ Reduced', icon: <Cloud className="h-4 w-4" /> },
        { text: '100%', subtext: 'Renewable', icon: <Zap className="h-4 w-4" /> }
      ]
    },
    {
      title: 'Community',
      icon: <Users className="h-6 w-6 text-blue-500" />,
      color: 'from-blue-50 to-cyan-50',
      highlights: [
        { text: '5', subtext: 'Learning Centers', icon: <BookOpen className="h-4 w-4" /> },
        { text: '500+', subtext: 'Jobs Created', icon: <Users className="h-4 w-4" /> },
        { text: '100%', subtext: 'Water Access', icon: <Droplets className="h-4 w-4" /> }
      ]
    },
    {
      title: 'Economy',
      icon: <BarChart2 className="h-6 w-6 text-green-700" />,
      color: 'from-emerald-50 to-teal-50',
      highlights: [
        { text: '3x', subtext: 'Income Growth', icon: <TrendingUp className="h-4 w-4" /> },
        { text: '50+', subtext: 'Producer Orgs', icon: <Users className="h-4 w-4" /> },
        { text: 'Direct', subtext: 'Market Access', icon: <ArrowRight className="h-4 w-4" /> }
      ]
    },
    {
      title: 'Environment',
      icon: <Droplets className="h-6 w-6 text-blue-400" />,
      color: 'from-cyan-50 to-sky-50',
      highlights: [
        { text: '100M+', subtext: 'Liters Water', icon: <Droplets className="h-4 w-4" /> },
        { text: '25%', subtext: 'Green Cover', icon: <Leaf className="h-4 w-4" /> },
        { text: 'Zero', subtext: 'Waste', icon: <Trash2 className="h-4 w-4" /> }
      ]
    },
    {
      title: 'Education',
      icon: <BookOpen className="h-6 w-6 text-purple-500" />,
      color: 'from-violet-50 to-purple-50',
      highlights: [
        { text: '5+', subtext: 'Institutions', icon: <Home className="h-4 w-4" /> },
        { text: 'Annual', subtext: 'Summit', icon: <Calendar className="h-4 w-4" /> },
        { text: '1,000+', subtext: 'Students', icon: <Users className="h-4 w-4" /> }
      ]
    }
  ];

  const impactStats = [
    { value: '600+', label: 'Acres', icon: <Leaf className="h-5 w-5" /> },
    { value: '1,000+', label: 'Farmers', icon: <Users className="h-5 w-5" /> },
    { value: '10MW', label: 'Solar', icon: <Zap className="h-5 w-5" /> },
    { value: '500+', label: 'Jobs', icon: <Briefcase className="h-5 w-5" /> }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Target className="h-4 w-4 mr-2" />
            Our Objectives
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Strategic <span className="text-green-600">Impact</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 max-w-6xl mx-auto">
          {keyObjectives.map((objective, index) => (
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
              className={`bg-gradient-to-br ${objective.color} rounded-2xl p-6 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 group`}
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white shadow-sm mr-3 sm:mr-4 border border-gray-100 group-hover:scale-110 transition-transform">
                  {React.cloneElement(objective.icon, { className: 'h-5 w-5 sm:h-6 sm:w-6' })}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{objective.title}</h3>
              </div>
              
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4 sm:mt-6">
                {objective.highlights.map((item, i) => (
                  <div key={i} className="flex flex-col items-center justify-center min-h-[70px] p-1.5 sm:p-2 bg-white/50 rounded-md sm:rounded-lg border border-gray-100">
                    <div className="text-sm font-bold text-gray-900 leading-tight line-clamp-1">{item.text}</div>
                    <div className="text-[10px] xs:text-xs text-gray-600 mt-1 line-clamp-2 px-1">{item.subtext}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 sm:mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-white overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,white)]"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Impact by 2025</h3>
              <p className="text-green-100 max-w-2xl mx-auto">
                Creating sustainable change through innovative rural development
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10">
              {impactStats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 hover:bg-white/15 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                >
                  <div className="flex items-center justify-center text-white mb-2 min-h-[24px]">
                    {React.cloneElement(stat.icon, { className: 'h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 flex-shrink-0' })}
                    <span className="text-lg sm:text-xl font-bold leading-none">{stat.value}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-green-100 leading-tight px-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="hidden sm:block absolute -right-20 -bottom-20 w-40 h-40 md:w-64 md:h-64 rounded-full bg-white/5"></div>
          <div className="hidden sm:block absolute -left-20 -top-20 w-32 h-32 md:w-48 md:h-48 rounded-full bg-white/5"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectObjectives;
