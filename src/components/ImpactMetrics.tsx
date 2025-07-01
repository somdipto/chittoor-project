
import React from 'react';
import AnimatedCounter from './AnimatedCounter';

const impactData = [
  {
    target: 150,
    label: 'Students Reached',
    icon: '/images/about/icons/students_reached.svg',
  },
  {
    target: 50,
    label: 'Scholarships Awarded',
    icon: '/images/about/icons/scholarships_awarded.svg',
  },
  {
    target: 75,
    label: 'Volunteers Engaged',
    icon: '/images/about/icons/volunteers_engaged.svg',
  },
  {
    target: 20,
    label: 'Projects Completed',
    icon: '/images/about/icons/projects_completed.svg',
  },
];

const ImpactMetrics: React.FC = () => {
  return (
    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {impactData.map((item, index) => (
        <AnimatedCounter key={index} {...item} />
      ))}
    </div>
  );
};

export default ImpactMetrics;
