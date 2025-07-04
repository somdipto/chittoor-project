import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface NavbarDropdownProps {
  title: string;
  items: Array<{
    title: string;
    href: string;
    icon?: React.ReactNode;
  }>;
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isActive = items.some(item => location.pathname.startsWith(item.href));

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle hover for desktop
  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) { // md breakpoint
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) { // md breakpoint
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    if (window.innerWidth < 768) { // md breakpoint
      setIsOpen(!isOpen);
    }
  };

  const showDropdown = isOpen || isHovered;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`group relative flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
          isActive
            ? 'text-chittoor-green bg-chittoor-green/10'
            : 'text-gray-700 hover:text-chittoor-green hover:bg-chittoor-green/10'
        }`}
        aria-expanded={showDropdown}
        aria-haspopup="true"
      >
        <span>{title}</span>
        {isOpen ? (
          <ChevronUp className="ml-1 h-4 w-4" />
        ) : (
          <ChevronDown className="ml-1 h-4 w-4" />
        )}
      </button>

      <AnimatePresence>
        {(showDropdown) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-1" role="none">
              {items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon && <span className="mr-3 text-gray-400">{item.icon}</span>}
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarDropdown;
