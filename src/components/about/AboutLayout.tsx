import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Home, ArrowRight } from 'lucide-react';
import AboutDropdown from './AboutDropdown';

// Helper function to format the breadcrumb text
const formatBreadcrumb = (path: string) => {
  return path
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const AboutLayout = () => {
  const location = useLocation();
  const [isMounted, setIsMounted] = useState(false);
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  // Remove 'about' from the segments if it exists
  const aboutIndex = pathSegments.indexOf('about');
  const segments = aboutIndex !== -1 ? pathSegments.slice(aboutIndex + 1) : pathSegments;
  
  useEffect(() => {
    setIsMounted(true);
    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb Navigation */}
      <motion.div 
        className="bg-white border-b border-gray-100 shadow-sm"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex py-3 overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link 
                  to="/" 
                  className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-green-600 transition-colors"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Link>
              </li>
              <li className="inline-flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                <Link 
                  to="/about" 
                  className="ml-1 text-sm font-medium text-green-600 md:ml-2"
                >
                  About Us
                </Link>
              </li>
              {segments.length > 0 && segments.map((segment, index) => {
                const isLast = index === segments.length - 1;
                const path = `/${segments.slice(0, index + 1).join('/')}`;
                const displayName = formatBreadcrumb(segment);
                
                return (
                  <li key={index} className="inline-flex items-center">
                    <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                    {isLast ? (
                      <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                        {displayName}
                      </span>
                    ) : (
                      <Link 
                        to={`/about/${path}`}
                        className="ml-1 text-sm font-medium text-gray-500 hover:text-green-600 transition-colors md:ml-2"
                      >
                        {displayName}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </motion.div>

      <motion.main 
        className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12"
        variants={containerVariants}
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
      >
        <motion.div 
          className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden"
          variants={itemVariants}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-4 sm:p-6 md:p-8"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
          
          {/* Back to top button */}
          <motion.div 
            className="flex justify-center py-6 border-t border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
            >
              Back to top
              <ArrowRight className="w-4 h-4 ml-1 transform rotate-90" />
            </button>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default AboutLayout;
