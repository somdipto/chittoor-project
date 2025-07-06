
import React from "react";
import { motion } from "framer-motion";
import { TreeDeciduous, Sun, BookOpen, Leaf } from "lucide-react";

// Animation variants for consistent animations
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

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
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
      className="my-16"
    >
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
        {icons.map((iconItem, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover="hover"
            className="flex flex-col items-center text-center cursor-pointer"
          >
            <motion.div 
              className={`p-5 md:p-6 rounded-full ${iconItem.bgColor} ${iconItem.color} mb-3`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {iconItem.icon}
            </motion.div>
            <motion.span 
              className="text-sm font-medium text-gray-700"
              whileHover={{ color: "#1f2937" }}
              transition={{ duration: 0.2 }}
            >
              {iconItem.label}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AnimatedIconRow;
