import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Target, Eye, Flag, ListChecks, Layers, Clock, Users, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const AboutDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const menuItems = [
    { 
      name: 'Project Story', 
      path: '/about/story',
      icon: <BookOpen className="h-4 w-4 mr-2" />
    },
    { 
      name: 'Project Aim', 
      path: '/about/aim',
      icon: <Target className="h-4 w-4 mr-2" />
    },
    { 
      name: 'Project Vision', 
      path: '/about/vision',
      icon: <Eye className="h-4 w-4 mr-2" />
    },
    { 
      name: 'Project Goals', 
      path: '/about/goals',
      icon: <Flag className="h-4 w-4 mr-2" />
    },
    { 
      name: 'Objectives', 
      path: '/about/objectives',
      icon: <ListChecks className="h-4 w-4 mr-2" />
    },
    { 
      name: 'Pillars', 
      path: '/about/pillars',
      icon: <Layers className="h-4 w-4 mr-2" />
    },
    { 
      name: 'Timeline', 
      path: '/about/timeline',
      icon: <Clock className="h-4 w-4 mr-2" />
    },
    { 
      name: 'Allies', 
      path: '/about/allies',
      icon: <Users className="h-4 w-4 mr-2" />
    },
    { 
      name: 'Atria Legacy', 
      path: '/about/atria-legacy',
      icon: <Users className="h-4 w-4 mr-2" />
    },
    { 
      name: 'Our Team', 
      path: '/about/team',
      icon: <UserCheck className="h-4 w-4 mr-2" />
    },
  ];

  // Handle hover events
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  // Close dropdown when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside (for mobile)
  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Check if current page is an about page
  const isAboutPage = location.pathname.startsWith('/about');

  return (
    <div 
      className="relative group" 
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`flex items-center justify-between w-full md:w-auto px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          isAboutPage || isOpen ? 'bg-green-700' : 'hover:bg-green-700/80'
        }`}
      >
        <span>About Us</span>
        {isOpen ? (
          <ChevronUp className="ml-2 h-4 w-4" />
        ) : (
          <ChevronDown className="ml-2 h-4 w-4" />
        )}
      </button>

      {/* Desktop Dropdown */}
      <div className="hidden md:block">
        <AnimatePresence>
          {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 z-50 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="about-menu-button"
          >
            <div className="py-1" role="none">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center px-4 py-2.5 text-sm ${
                      isActive
                        ? 'bg-green-50 text-green-800 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    role="menuitem"
                  >
                    <span className={`${isActive ? 'text-green-600' : 'text-gray-400'}`}>
                      {item.icon}
                    </span>
                    <span className="ml-2">{item.name}</span>
                  </Link>
                );
              })}
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="absolute right-0 z-50 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="about-menu-button-mobile"
            >
              <div className="py-1" role="none">
                {menuItems.map((item) => (
                  <Link
                    key={`mobile-${item.path}`}
                    to={item.path}
                    className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                    role="menuitem"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-gray-400">{item.icon}</span>
                    <span className="ml-2">{item.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutDropdown;
