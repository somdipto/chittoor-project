
import React from "react";
import { motion } from "framer-motion";

interface VisualStoryBlockProps {
  image: string;
  imageAlt: string;
  text: string;
  alignRight?: boolean;
}

const VisualStoryBlock = ({ image, imageAlt, text, alignRight = false }: VisualStoryBlockProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${alignRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 my-16 max-w-6xl mx-auto`}
    >
      <div className="flex-1">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
          loading="lazy"
        />
      </div>
      <div className="flex-1 px-4">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium italic text-center md:text-left">
          "{text}"
        </p>
      </div>
    </motion.div>
  );
};

export default VisualStoryBlock;
