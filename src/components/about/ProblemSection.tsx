import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, DollarSign, Users } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      title: "Agricultural Crisis",
      description: "Monocropping, chemical overuse, and degraded soil health destroying farming livelihoods.",
      icon: AlertTriangle,
      color: "red"
    },
    {
      title: "Economic Challenges", 
      description: "Rising input costs, diminishing returns, and mounting farmer debt across rural India.",
      icon: DollarSign,
      color: "orange"
    },
    {
      title: "Rural Exodus",
      description: "Mass migration to cities as farming becomes unsustainable and unprofitable.",
      icon: Users,
      color: "yellow"
    },
    {
      title: "Educational Decline",
      description: "Crumbling rural school infrastructure leaving the next generation behind.",
      icon: TrendingDown,
      color: "red"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-red-50 to-orange-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">The Crisis We're Solving</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            India's agricultural sector faces unprecedented challenges threatening rural livelihoods
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`bg-${problem.color}-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto`}>
                    <problem.icon className={`w-6 h-6 text-${problem.color}-600`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{problem.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;