
import React, { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  target: number;
  label: string;
  icon: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, label, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60 fps

    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < target) {
          return Math.min(prevCount + step, target);
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 16);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="text-center">
      <img src={icon} alt={label} className="h-12 w-12 mx-auto mb-4" />
      <h3 className="text-4xl font-bold">{Math.floor(count)}</h3>
      <p className="text-lg">{label}</p>
    </div>
  );
};

export default AnimatedCounter;
