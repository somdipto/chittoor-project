import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, Leaf, Zap, BookOpen, ChevronDown } from 'lucide-react';

const ProjectTimeline = () => {
  const [activePhase, setActivePhase] = useState<number>(0);

  const phases = [
    {
      year: "2024",
      title: "Foundation & Planning",
      icon: <MapPin className="h-5 w-5" />,
      milestones: [
        "Project conceptualization and site selection",
        "Stakeholder engagement and partnerships",
        "Baseline surveys and assessments",
        "Detailed project planning and design"
      ],
      achievements: [
        "Land acquisition completed",
        "Initial team assembled",
        "Community consultations held"
      ]
    },
    {
      year: "2025",
      title: "Pilot Implementation",
      icon: <Leaf className="h-5 w-5" />,
      milestones: [
        "Commence organic farming on initial 100 acres",
        "Install first 2MW solar power capacity",
        "Establish training center and demo farms",
        "Launch community education programs"
      ],
      achievements: [
        "First harvest completed",
        "Initial farmer training conducted",
        "Renewable energy generation begins"
      ]
    },
    {
      year: "2026",
      title: "Expansion & Growth",
      icon: <Zap className="h-5 w-5" />,
      milestones: [
        "Expand to 300 acres under cultivation",
        "Increase solar capacity to 5MW",
        "Launch agri-processing facilities",
        "Establish direct market linkages"
      ],
      achievements: [
        "Farmer income increases by 50%",
        "Community health indicators improve",
        "Women's self-help groups established"
      ]
    },
    {
      year: "2027",
      title: "Consolidation & Innovation",
      icon: <BookOpen className="h-5 w-5" />,
      milestones: [
        "Reach full 600-acre operation",
        "Complete 10MW solar installation",
        "Launch research and development center",
        "Expand educational programs"
      ],
      achievements: [
        "Carbon-neutral operations",
        "Model village established",
        "National recognition received"
      ]
    },
    {
      year: "2028+",
      title: "Scale & Replication",
      icon: <Users className="h-5 w-5" />,
      milestones: [
        "Document best practices and learnings",
        "Develop replication toolkit",
        "Expand to additional regions",
        "Establish national training hub"
      ],
      achievements: [
        "60,000+ acres under management",
        "10,000+ farmers trained",
        "Model replicated in 5+ states"
      ]
    }
  ];

  return (
    <section id="timeline" className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            <Calendar className="h-4 w-4 mr-2" />
            Our Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project <span className="text-green-600">Timeline</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Follow our journey from concept to scale as we work towards transforming rural India through sustainable development.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-green-200 transform -translate-x-1/2"></div>
            
            {/* Phase indicators */}
            <div className="flex justify-between mb-12">
              {phases.map((phase, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className={`relative z-10 flex flex-col items-center w-1/5 group`}
                >
                  <div className={`h-4 w-4 rounded-full ${
                    activePhase === index ? 'bg-green-600 scale-125' : 'bg-green-300'
                  } mb-2 transition-all duration-300`}></div>
                  <div className={`text-sm font-medium ${
                    activePhase === index ? 'text-green-700' : 'text-gray-500'
                  } group-hover:text-green-600 transition-colors`}>
                    {phase.year}
                  </div>
                </button>
              ))}
            </div>
            
            {/* Active phase content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="p-2 rounded-lg bg-green-100 text-green-600 mr-4">
                    {React.cloneElement(phases[activePhase].icon, { className: "h-6 w-6" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{phases[activePhase].title}</h3>
                    <p className="text-green-600 font-medium">{phases[activePhase].year}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Milestones</h4>
                    <ul className="space-y-3">
                      {phases[activePhase].milestones.map((milestone, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-600">{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Achievements</h4>
                    <ul className="space-y-3">
                      {phases[activePhase].achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation arrows */}
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setActivePhase(prev => Math.max(0, prev - 1))}
                disabled={activePhase === 0}
                className={`flex items-center px-4 py-2 rounded-md ${activePhase === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-green-600 hover:bg-green-50'}`}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Previous Phase
              </button>
              
              <button
                onClick={() => setActivePhase(prev => Math.min(phases.length - 1, prev + 1))}
                disabled={activePhase === phases.length - 1}
                className={`flex items-center px-4 py-2 rounded-md ${activePhase === phases.length - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-green-600 hover:bg-green-50'}`}
              >
                Next Phase
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6">
          {phases.map((phase, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => setActivePhase(activePhase === index ? -1 : index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <div className="flex items-center">
                  <div className={`h-3 w-3 rounded-full ${activePhase === index ? 'bg-green-600' : 'bg-green-300'} mr-3`}></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{phase.title}</h3>
                    <p className="text-sm text-gray-500">{phase.year}</p>
                  </div>
                </div>
                <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${activePhase === index ? 'transform rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activePhase === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Key Milestones</h4>
                        <ul className="space-y-2">
                          {phase.milestones.slice(0, 3).map((milestone, i) => (
                            <li key={i} className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 mr-2"></div>
                              <span className="text-sm text-gray-600">{milestone}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Achievements</h4>
                        <ul className="space-y-2">
                          {phase.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                              <span className="text-sm text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Be part of our journey to create sustainable rural transformation.
          </p>
          <a 
            href="#get-involved" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
          >
            Join Our Mission
            <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;
