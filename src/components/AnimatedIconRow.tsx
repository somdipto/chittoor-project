
import React from "react";
import { motion } from "framer-motion";
import { TreeDeciduous, Sun, BookOpen, Leaf } from "lucide-react";

const AnimatedIconRow = () => {
  const icons = [
    {
      icon: <TreeDeciduous className="w-12 h-12" />,
      label: "Agriculture",
      color: "text-chittoor-green",
      bgColor: "bg-chittoor-green/10"
    },
    {
      icon: <Sun className="w-12 h-12" />,
      label: "Energy",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      label: "Education",
      color: "text-chittoor-blue",
      bgColor: "bg-chittoor-blue/10"
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      label: "Wellness",
      color: "text-chittoor-earth",
      bgColor: "bg-chittoor-earth/10"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-16"
    >
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
        {icons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 3 + index * 0.5
            }}
            className="flex flex-col items-center text-center group cursor-pointer"
          >
            <div className={`p-6 rounded-full ${item.bgColor} ${item.color} group-hover:scale-110 transition-transform duration-300 mb-3`}>
              {item.icon}
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AnimatedIconRow;
