import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      ),
      url: '#'
    },
    {
      name: 'Instagram',
      icon: (
        <>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </>
      ),
      url: '#'
    },
    {
      name: 'Twitter',
      icon: (
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      ),
      url: '#'
    },
    {
      name: 'LinkedIn',
      icon: (
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </>
      ),
      url: '#'
    }
  ];

  const quickLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/#about' },
    { name: 'Our Pillars', to: '/pillars' },
    { name: 'Projects', to: '/#projects' },
    { name: 'Collaborate', to: '/collaborate' },
    { name: 'Contact Us', to: '/contact' },
  ];

  const contactInfo = [
    {
      title: 'Visit Us',
      items: [
        { icon: <MapPin className="w-5 h-5 text-chittoor-green" />, text: 'Chittoor District' },
        { text: 'India - 517001' }
      ]
    },
    {
      title: 'Call Us',
      items: [
        { icon: <Phone className="w-5 h-5 text-chittoor-green" />, text: '+91 91779 12670' },
        { icon: <Phone className="w-5 h-5 text-chittoor-green" />, text: '+91 91410 83323' }
      ]
    },
    {
      title: 'Email Us',
      items: [
        { icon: <Mail className="w-5 h-5 text-chittoor-green" />, text: 'projectchittor@atria.edu' }
      ]
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-white to-chittoor-offwhite/50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About Section */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-800">About Project Chittoor</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A rural revitalization initiative focusing on sustainable development, innovation, and community empowerment through comprehensive development programs.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.name}
                  className="text-gray-500 hover:text-chittoor-green transition-colors duration-300"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index} 
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link 
                    to={link.to} 
                    className="text-gray-600 hover:text-chittoor-green transition-colors duration-300 text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-chittoor-green rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
            <div className="space-y-6">
              {contactInfo.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-700">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        {item.icon && <span className="mt-0.5">{item.icon}</span>}
                        <span className="text-gray-600 text-sm">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Map */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3 }}
            className="bg-gray-100 rounded-lg overflow-hidden h-64 lg:h-auto shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-full h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31069.11341612392!2d79.1034545!3d13.21799345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb4bf0e123ad281%3A0x5f5c2bb95f0720a0!2sChittoor%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1719392000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chittoor District Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-200 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-500 text-center md:text-left mb-4 md:mb-0">
            &copy; {currentYear} Project Chittoor. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-chittoor-green transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-chittoor-green transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-chittoor-green transition-colors duration-300">
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;