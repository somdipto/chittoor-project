import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, DollarSign, Users, ArrowRight } from "lucide-react";

const ProblemSection = () => {
  const challenges = [
    {
      title: "Agricultural Crisis",
      description: "Addressing soil degradation and unsustainable farming practices",
      icon: <AlertTriangle className="h-8 w-8" />,
      color: "bg-red-50",
      border: "border-l-4 border-red-600"
    },
    {
      title: "Economic Stability", 
      description: "Reducing farmer debt and increasing profitability",
      icon: <DollarSign className="h-8 w-8" />,
      color: "bg-amber-50",
      border: "border-l-4 border-amber-600"
    },
    {
      title: "Rural Development",
      description: "Reversing urban migration through sustainable opportunities",
      icon: <Users className="h-8 w-8" />,
      color: "bg-blue-50",
      border: "border-l-4 border-blue-600"
    },
    {
      title: "Education & Training",
      description: "Enhancing skills for the next generation of farmers",
      icon: <TrendingDown className="h-8 w-8" />,
      color: "bg-green-50",
      border: "border-l-4 border-green-600"
    }
  ];

  const stats = [
    { value: "52%", label: "Of farmers in debt" },
    { value: "76%", label: "Households affected by crop failure" },
    { value: "200K+", label: "Farmers migrated in 5 years" },
    { value: "42%", label: "Drop in agricultural income" }
  ];

  return (
    <section className="relative py-16 bg-white">
      <div className="absolute inset-0 bg-gray-50"></div>
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            GOVERNMENT INITIATIVE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Addressing Key Challenges in <span className="text-blue-800">Chittoor District</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach tackles the most pressing issues facing our agricultural communities
          </p>
        </div>

        {/* Challenge Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${challenge.color} ${challenge.border} p-6 rounded-r-lg shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-2 rounded-lg bg-white shadow-sm">
                  {challenge.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                  <p className="text-gray-600 mb-4">{challenge.description}</p>
                  <a href="#" className="inline-flex items-center text-blue-700 font-medium group">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-blue-900 rounded-xl p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">The Current Landscape</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4"
                >
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">{stat.value}</div>
                  <p className="text-blue-100">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Government Notice */}
        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Government Notice:</strong> The Chittoor District Administration is committed to addressing these challenges through sustainable development initiatives and community engagement programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;