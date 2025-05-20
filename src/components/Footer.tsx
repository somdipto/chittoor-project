
import React from 'react';
import { Flower } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4"
          >
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-chittoor-green to-chittoor-green-dark rounded-full shadow-md">
                <Flower className="w-6 h-6 text-white" />
              </div>
              <span className="font-semibold text-xl">Chittoor Project</span>
            </Link>
            <p className="text-gray-600 mb-6">
              Reshaping rural development in Andhra Pradesh through sustainable practices, empowering farmers, and fostering community-driven initiatives.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: "facebook", href: "#" },
                { icon: "twitter", href: "#" },
                { icon: "instagram", href: "#" },
                { icon: "linkedin", href: "#" }
              ].map((social, index) => (
                <motion.a 
                  key={social.icon}
                  href={social.href} 
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-chittoor-green-light/20 to-chittoor-green/20 flex items-center justify-center hover:from-chittoor-green-light/30 hover:to-chittoor-green/30 transition-all shadow-sm"
                >
                  <svg className="w-5 h-5 text-chittoor-green" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {social.icon === "facebook" && <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />}
                    {social.icon === "twitter" && <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />}
                    {social.icon === "instagram" && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />}
                    {social.icon === "linkedin" && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />}
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="md:col-span-2">
            <h4 className="font-semibold text-lg mb-4 text-gray-800">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { title: "Home", link: "/", isRoute: true },
                { title: "About Us", link: "/#about", isRoute: false },
                { title: "Projects", link: "/#projects", isRoute: false },
                { title: "News", link: "/#news", isRoute: false },
                { title: "Contact", link: "/#contact", isRoute: false }
              ].map((item, i) => (
                <motion.li 
                  key={item.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  {item.isRoute ? (
                    <Link 
                      to={item.link} 
                      className="text-gray-600 hover:text-chittoor-green transition-colors relative group inline-block"
                    >
                      {item.title}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-chittoor-green/50 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  ) : (
                    <a 
                      href={item.link} 
                      className="text-gray-600 hover:text-chittoor-green transition-colors relative group inline-block"
                    >
                      {item.title}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-chittoor-green/50 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold text-lg mb-4 text-gray-800">Project Pillars</h4>
            <ul className="space-y-3">
              {[
                { title: "Renewable Energy", link: "/pillars", isRoute: true },
                { title: "Agro-Wellness Tourism", link: "/pillars", isRoute: true },
                { title: "Transformative Education", link: "/pillars", isRoute: true },
                { title: "Test Bed for Innovation", link: "/pillars", isRoute: true }
              ].map((item, i) => (
                <motion.li 
                  key={item.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                >
                  {item.isRoute ? (
                    <Link 
                      to={item.link}
                      className="text-gray-600 hover:text-chittoor-green transition-colors relative group inline-block"
                    >
                      {item.title}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-chittoor-green/50 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  ) : (
                    <a 
                      href={item.link} 
                      className="text-gray-600 hover:text-chittoor-green transition-colors relative group inline-block"
                    >
                      {item.title}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-chittoor-green/50 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:col-span-3"
          >
            <h4 className="font-semibold text-lg mb-4 text-gray-800">Initiative Impact</h4>
            <ul className="space-y-3">
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.7 }}
                className="mb-4"
              >
                <p className="text-gray-600 text-sm">
                  Starting with 600 acres in Chittoor district, we are expanding to 6,000 acres by December and 60,000 acres within 24 months, creating a template for integrated rural development nationwide.
                </p>
              </motion.li>
            </ul>
            
            <form className="mt-6">
              <p className="text-gray-600 mb-4">Subscribe to our newsletter for updates on our projects and events.</p>
              <div className="flex gap-2">
                <Input placeholder="Your email" className="flex-1 rounded-l-full rounded-r-none border-r-0" />
                <Button className="bg-gradient-to-r from-chittoor-green to-chittoor-green-dark hover:opacity-90 rounded-l-none rounded-r-full">
                  Subscribe
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-600">
          <p>&copy; {currentYear} Chittoor Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
