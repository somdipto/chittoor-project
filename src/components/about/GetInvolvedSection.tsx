
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Users, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const GetInvolvedSection = () => {
  const ctaButtons = [
    {
      title: "Donate",
      description: "Fuel village innovation and rural transformation",
      icon: Heart,
      link: "/donate",
      color: "bg-gradient-to-r from-chittoor-green to-chittoor-green-dark"
    },
    {
      title: "Volunteer",
      description: "Mentor students or assist in farms and development",
      icon: Users,
      link: "/collaborate",
      color: "bg-gradient-to-r from-chittoor-blue to-chittoor-blue-dark"
    },
    {
      title: "Partner With Us",
      description: "Collaborate in scaling rural development initiatives",
      icon: Handshake,
      link: "/collaborate",
      color: "bg-gradient-to-r from-chittoor-earth to-chittoor-earth-light"
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=1200&q=80"
          alt="Rural development background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get Involved</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us in creating India's Evergreen Revolution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {ctaButtons.map((cta, index) => (
            <motion.div
              key={cta.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="mb-6">
                  <div className={`${cta.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <cta.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{cta.title}</h3>
                  <p className="text-gray-600 mb-6">{cta.description}</p>
                </div>
                <Link to={cta.link}>
                  <Button className={`${cta.color} hover:shadow-lg transition-all duration-300 w-full`}>
                    {cta.title}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
