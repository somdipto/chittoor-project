

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Users, Award } from 'lucide-react';

// Placeholder images - replace with actual team member photos
const placeholderImage = (name: string) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4ade80&color=fff&size=200`;

const ExecutiveTeam = () => {
  const visionaryLeader = {
    name: "Sunder Raju",
    role: "Visionary Behind the Project",
    bio: "Chairman & Managing Director of Atria Group, a diversified conglomerate with interests in power, infrastructure, and agribusiness. A respected business leader with a passion for sustainable rural development and community empowerment.",
    expertise: ["Business Leadership", "Rural Development", "Sustainable Growth"],
    linkedin: "#",
    twitter: "#",
    email: "sunder.raju@atriagroup.com",
    image: "/lovable-uploads/20400ab7-3735-4ddb-8d7e-c15c0eeecdae.png"
  };

  const teamMembers = [
    {
      name: "Abhishek",
      role: "Project Lead",
      bio: "Visionary leader with over 15 years of experience in sustainable development and rural transformation initiatives across India.",
      expertise: ["Sustainable Agriculture", "Rural Development", "Project Management"],
      linkedin: "#",
      twitter: "#",
      email: "abhishek@example.com"
    },
    {
      name: "Prasanna",
      role: "Technical Director",
      bio: "Technology innovator specializing in renewable energy solutions and smart agriculture technologies for rural applications.",
      expertise: ["Renewable Energy", "Agri-Tech", "Innovation"],
      linkedin: "#",
      twitter: "#",
      email: "prasanna@example.com"
    },
    {
      name: "Nalin",
      role: "Operations Head",
      bio: "Operations expert with a proven track record in managing large-scale agricultural and community development projects.",
      expertise: ["Operations", "Supply Chain", "Community Engagement"],
      linkedin: "#",
      twitter: "#",
      email: "nalin@example.com"
    },
    {
      name: "Ravi Murthy",
      role: "Chief Sustainability Officer",
      bio: "Environmental scientist with expertise in sustainable farming practices and ecosystem restoration projects.",
      expertise: ["Sustainability", "Environmental Science", "Conservation"],
      linkedin: "#",
      twitter: "#",
      email: "ravi.murthy@example.com"
    }
  ];

  return (
    <section id="team" className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            <Users className="h-4 w-4 mr-2" />
            Leadership
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Team</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated leaders driving Chittoor's Initiative forward with their expertise, vision, and commitment to sustainable development.
          </p>
        </div>

        {/* Visionary Leader Card - Centered at the top */}
        <div className="max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-sm border border-green-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <div className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="h-32 w-32 rounded-full overflow-hidden bg-gradient-to-br from-green-100 to-green-200 p-1">
                    <img 
                      src={visionaryLeader.image} 
                      alt={visionaryLeader.name}
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-amber-100 text-amber-800 p-2 rounded-full">
                    <Award className="h-5 w-5" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900">{visionaryLeader.name}</h3>
              <p className="text-green-600 font-medium mb-4">{visionaryLeader.role}</p>
              
              <p className="text-gray-600 mb-4">{visionaryLeader.bio}</p>
              
              <div className="flex justify-center space-x-4 mt-6">
                {visionaryLeader.linkedin && (
                  <a href={visionaryLeader.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {visionaryLeader.email && (
                  <a href={`mailto:${visionaryLeader.email}`} className="text-gray-500 hover:text-green-600 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Executive Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-20 w-20 rounded-full overflow-hidden bg-gray-100 mr-4">
                    <img 
                      src={placeholderImage(member.name)} 
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-green-600 font-medium">{member.role}</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Areas of Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, i) => (
                        <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 mt-6 pt-4 border-t border-gray-100">
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.twitter && (
                      <a 
                        href={member.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-400 transition-colors"
                      >
                        <span className="sr-only">Twitter</span>
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        <span className="sr-only">Email</span>
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-green-100 mb-6">
              Passionate about sustainable development? We're always looking for talented individuals to join our mission.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#careers" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 transition-colors duration-200"
              >
                View Open Positions
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-white border-opacity-20 text-base font-medium rounded-md text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveTeam;

