
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Award, Handshake, CheckCircle } from "lucide-react";

const ImpactMetrics = () => {
  const [counters, setCounters] = useState({
    students: 0,
    scholarships: 0,
    volunteers: 0,
    projects: 0
  });

  const targets = {
    students: 150,
    scholarships: 50,
    volunteers: 75,
    projects: 12
  };

  const metrics = [
    {
      key: 'students',
      label: 'Students Reached',
      icon: Users,
      color: 'chittoor-green'
    },
    {
      key: 'scholarships',
      label: 'Scholarships Awarded',
      icon: Award,
      color: 'chittoor-blue'
    },
    {
      key: 'volunteers',
      label: 'Volunteers Engaged',
      icon: Handshake,
      color: 'chittoor-earth'
    },
    {
      key: 'projects',
      label: 'Projects Completed',
      icon: CheckCircle,
      color: 'chittoor-green'
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          students: Math.floor(targets.students * progress),
          scholarships: Math.floor(targets.scholarships * progress),
          volunteers: Math.floor(targets.volunteers * progress),
          projects: Math.floor(targets.projects * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('impact-metrics');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact-metrics" className="py-16 bg-gradient-to-br from-chittoor-green/5 to-chittoor-blue/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Measurable change in our community through dedicated efforts
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.key}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className={`bg-${metric.color}/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto`}>
                <metric.icon className={`w-8 h-8 text-${metric.color}`} />
              </div>
              <div>
                <div className={`text-4xl md:text-5xl font-bold text-${metric.color} mb-2`}>
                  {counters[metric.key as keyof typeof counters]}+
                </div>
                <p className="text-gray-600 font-medium">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
