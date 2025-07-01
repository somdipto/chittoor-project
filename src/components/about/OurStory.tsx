
import React from "react";
import { motion } from "framer-motion";

const OurStory = () => {
  const milestones = [
    {
      year: "2022",
      title: "Idea Born",
      description: "Founding vision for India's Evergreen Revolution conceived",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=200&q=80"
    },
    {
      year: "2023",
      title: "600-Acre Pilot",
      description: "Pilot project in Thirumalarajupuram village initiated",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=200&q=80"
    },
    {
      year: "2024",
      title: "Infrastructure Started",
      description: "Solar, farming, and digital education infrastructure development began",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80"
    },
    {
      year: "2025",
      title: "Scaling & R&D Lab",
      description: "Scaling to 6,000+ acres and launching R&D living lab",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A journey towards India's Evergreen Revolution
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-chittoor-green to-chittoor-blue hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}
              >
                <div className="md:w-1/2 space-y-4">
                  <div className="bg-chittoor-green text-white px-4 py-2 rounded-full text-lg font-bold inline-block">
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:block relative">
                  <div className="w-6 h-6 bg-chittoor-green rounded-full border-4 border-white shadow-lg"></div>
                </div>
                
                <div className="md:w-1/2">
                  <div className="relative">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="rounded-2xl shadow-lg w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
