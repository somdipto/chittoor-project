
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sprout, DollarSign, BookOpen, Sun, Users } from "lucide-react";

const ImpactMetrics = () => {
  const [counters, setCounters] = useState({
    acres: 0,
    income: 0,
    farmers: 0,
    solar: 0,
    livestock: 0
  });

  const targets = React.useMemo(() => ({
    acres: 600,
    income: 100000,
    farmers: 44,
    solar: 6,
    livestock: 730
  }), []);

  const metrics = [
    {
      key: 'acres',
      label: 'Project Area',
      icon: Sprout,
      color: 'chittoor-green',
      suffix: ' acres'
    },
    {
      key: 'income',
      label: 'Target Income/Acre',
      icon: DollarSign,
      color: 'chittoor-blue',
      prefix: '₹',
      suffix: '/month'
    },
    {
      key: 'farmers',
      label: 'Crore Families Served',
      icon: Users,
      color: 'chittoor-earth',
      suffix: ' cr'
    },
    {
      key: 'solar',
      label: 'Solar Capacity',
      icon: Sun,
      color: 'chittoor-green',
      suffix: ' MW'
    },
    {
      key: 'livestock',
      label: 'Livestock Count',
      icon: Users,
      color: 'chittoor-blue',
      suffix: '+'
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          acres: Math.floor(targets.acres * progress),
          income: Math.floor(targets.income * progress),
          farmers: Math.floor(targets.farmers * progress),
          solar: Math.floor(targets.solar * progress),
          livestock: Math.floor(targets.livestock * progress)
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
  }, [targets]);

  const formatNumber = (num: number, key: string) => {
    if (key === 'income') {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

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
            Measurable progress towards India's Evergreen Revolution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
                <div className={`text-3xl md:text-4xl font-bold text-${metric.color} mb-2`}>
                  {metric.prefix || ''}{formatNumber(counters[metric.key as keyof typeof counters], metric.key)}{metric.suffix || ''}
                </div>
                <p className="text-gray-600 font-medium text-sm">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
