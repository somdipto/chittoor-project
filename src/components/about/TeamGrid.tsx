
import React, { useState } from "react";
import { motion } from "framer-motion";

const TeamGrid = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Priya Sharma",
      role: "Founder & Director",
      funFact: "Loves traditional dance and speaks 4 languages",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612e6af?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Raj Kumar",
      role: "Education Coordinator",
      funFact: "Former village teacher who climbed Mount Everest",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Anita Reddy",
      role: "Community Outreach",
      funFact: "Champion chess player and pottery enthusiast",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Vikram Singh",
      role: "Program Manager",
      funFact: "Marathon runner who grows organic vegetables",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Meera Patel",
      role: "Volunteer Coordinator",
      funFact: "Street photographer and traditional cook",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Arjun Nair",
      role: "Technology Lead",
      funFact: "Builds robots in spare time and loves astronomy",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate individuals working together to create lasting change
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
              onTouchStart={() => setHoveredMember(index)}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Default info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-sm opacity-90">{member.role}</p>
                </div>

                {/* Fun fact overlay */}
                <div className={`absolute inset-0 bg-chittoor-green/95 p-4 flex items-center justify-center text-center transition-opacity duration-300 ${
                  hoveredMember === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-white">
                    <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                    <p className="text-sm mb-2 opacity-90">{member.role}</p>
                    <p className="text-sm italic">"{member.funFact}"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
