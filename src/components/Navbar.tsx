import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Flower, Menu, ArrowLeft, X, ChevronDown, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Book, Target, Users, BarChart3, Handshake, MessageSquare } from "lucide-react";
import NavbarDropdown from "./NavbarDropdown";

interface NavItemBase {
  title: string;
  href?: string;
  desktopOnly?: boolean;
  mobileOnly?: boolean;
  icon?: React.ReactNode;
}

interface NavItem extends NavItemBase {
  href: string;
  type?: never;
  items?: never;
}

interface NavItemDropdown extends Omit<NavItemBase, 'href'> {
  type: 'dropdown';
  items: NavItemBase[];
  href?: never;
}

type NavigationItem = NavItem | NavItemDropdown;

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

const navItems: NavigationItem[] = [{
  title: "Home",
  href: "/"
}, {
  title: "About Us",
  type: "dropdown",
  items: [{
    title: "Story",
    href: "/about/story",
    icon: <Book className="h-4 w-4" />
  }, {
    title: "Mission & Vision",
    href: "/about/mission",
    icon: <Target className="h-4 w-4" />
  }, {
    title: "Objectives",
    href: "/about/objectives",
    icon: <BarChart3 className="h-4 w-4" />
  }, {
    title: "Approach",
    href: "/about/approach",
    icon: <Handshake className="h-4 w-4" />
  }, {
    title: "Team",
    href: "/about/team",
    icon: <Users className="h-4 w-4" />
  }, {
    title: "Contact Us",
    href: "/contact",
    icon: <MessageSquare className="h-4 w-4" />,
    mobileOnly: true
  }]
}, {
  title: "Projects",
  href: "/#projects"
}, {
  title: "Pillars",
  href: "/pillars"
}, {
  title: "Collaborate",
  href: "/collaborate"
}, {
  title: "Volunteer",
  href: "/volunteer"
}, {
  title: "Donate",
  href: "/donate"
}, {
  title: "Contact",
  href: "/contact",
  desktopOnly: true
}];
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  }, [location.pathname]);

  // Get About Us item for desktop dropdown
  const aboutUsItem = navItems.find(item => item.title === 'About Us');

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 shadow-sm transition-all duration-300 ${
        isScrolled ? 'py-1' : 'py-2'
      }`} 
      style={{ height: isScrolled ? '70px' : '76px' }}
    >
      <div className="container flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center">
          <motion.div 
            initial={{
              opacity: 0,
              x: -20
            }} 
            animate={{
              opacity: 1,
              x: 0
            }} 
            transition={{
              duration: 0.5
            }} 
            className="flex items-center gap-2"
          >
            <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
              <div className="bg-gradient-to-br from-chittoor-green-light to-chittoor-green p-1 sm:p-1.5 rounded-full group-hover:shadow-lg transition-shadow">
                <Flower className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex flex-col ml-1 sm:ml-2">
                <span className="font-bold text-base sm:text-lg md:text-xl tracking-tight text-gray-800 whitespace-nowrap">
                  Project Chittor
                </span>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-3 xl:gap-4">
          {/* Home Button */}
          <motion.div initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3,
          delay: 0 * 0.1
        }}>
            <Link to="/" className={`text-sm font-medium transition-all relative group px-3 py-2.5 rounded-lg hover:bg-chittoor-green/10 ${
              location.pathname === "/" 
                ? "text-chittoor-green bg-chittoor-green/10" 
                : "text-gray-700 hover:text-chittoor-green"
            }`}>
              Home
              <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-chittoor-green to-chittoor-blue group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300"></span>
            </Link>
          </motion.div>
          
          {/* About Us Dropdown */}
          {aboutUsItem && aboutUsItem.type === 'dropdown' && <motion.div initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3,
          delay: 1 * 0.1
        }} className="relative group">
              <button className="flex items-center text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-chittoor-green/10 text-gray-700 hover:text-chittoor-green transition-colors">
                About Us
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              
              <div className="absolute left-0 mt-1 w-56 origin-top-right bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                <div className="py-1">
                  {aboutUsItem.items.map(item => <Link key={item.href} to={item.href} className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                      {item.icon && <span className="mr-3 text-gray-400">{item.icon}</span>}
                      {item.title}
                    </Link>)}
                </div>
              </div>
            </motion.div>}

          {/* Projects Button */}
          <motion.div initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3,
          delay: 2 * 0.1
        }}>
            <Link to="/#projects" className={`text-sm font-medium transition-all relative group px-3 py-2.5 rounded-lg hover:bg-chittoor-green/10 ${
              location.pathname === "/#projects" 
                ? "text-chittoor-green bg-chittoor-green/10" 
                : "text-gray-700 hover:text-chittoor-green"
            }`}>
              Projects
              <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-chittoor-green to-chittoor-blue group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300"></span>
            </Link>
          </motion.div>

          {/* Pillars Button */}
          <motion.div initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3,
          delay: 3 * 0.1
        }}>
            <Link to="/pillars" className={`text-sm font-medium transition-all relative group px-3 py-2.5 rounded-lg hover:bg-chittoor-green/10 ${
              location.pathname === "/pillars" 
                ? "text-chittoor-green bg-chittoor-green/10" 
                : "text-gray-700 hover:text-chittoor-green"
            }`}>
              Pillars
              <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-chittoor-green to-chittoor-blue group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300"></span>
            </Link>
          </motion.div>

          {/* Collaborate Button */}
          <motion.div initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3,
          delay: 4 * 0.1
        }}>
            <Link to="/collaborate" className={`text-sm font-medium transition-all relative group px-3 py-2.5 rounded-lg hover:bg-chittoor-green/10 ${
              location.pathname === "/collaborate" 
                ? "text-chittoor-green bg-chittoor-green/10" 
                : "text-gray-700 hover:text-chittoor-green"
            }`}>
              Collaborate
              <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-chittoor-green to-chittoor-blue group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300"></span>
            </Link>
          </motion.div>
          
          {/* Volunteer Button */}
          <Link to="/volunteer" className="ml-1">
              <Button 
                variant="outline" 
                className="border-chittoor-green text-chittoor-green hover:bg-chittoor-green hover:text-white transition-all duration-300 rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium whitespace-nowrap h-9 md:h-10"
              >
                Volunteer
              </Button>
          </Link>
          
          {/* Donate Button */}
          <Link to="/donate">
            <Button className="bg-chittoor-green hover:bg-chittoor-green-dark text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-full px-6 md:px-8 py-2 text-sm font-medium whitespace-nowrap h-10 md:h-11">
              Donate Now
            </Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:bg-gray-100/50"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-[280px] sm:max-w-xs p-0">
              <div className="p-3 border-b">
                <div className="flex items-center justify-between">
                  <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <div className="bg-gradient-to-br from-chittoor-green-light to-chittoor-green p-1 sm:p-1.5 rounded-full">
                      <Flower className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="font-bold text-base sm:text-lg">Project Chittor</span>
                  </Link>
                  <SheetClose className="rounded-full p-1 hover:bg-gray-100 transition-colors">
                    <X className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="sr-only">Close</span>
                  </SheetClose>
                </div>
              </div>
              <div className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-80px)]">
                {navItems.map((item) => (
                  <div key={item.title}>
                    {item.type === 'dropdown' ? (
                      <div className="w-full">
                        <button
                          onClick={() => setMobileDropdown(mobileDropdown === item.title ? null : item.title)}
                          className="flex w-full items-center justify-between px-3 py-2.5 text-sm sm:text-base font-medium rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <span>{item.title}</span>
                          <ChevronRight className={`h-4 w-4 transition-transform ${
                            mobileDropdown === item.title ? 'rotate-90' : ''
                          }`} />
                        </button>
                        <AnimatePresence>
                          {mobileDropdown === item.title && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4"
                            >
                              {item.items
                          .filter((subItem): subItem is NavItemBase & { href: string } => {
                            return !!subItem.href && !subItem.desktopOnly;
                          })
                          .map((subItem) => (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              className={`flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg ${
                                subItem.mobileOnly ? 'md:hidden' : ''
                              }`}
                              onClick={() => {
                                setIsOpen(false);
                                setMobileDropdown(null);
                              }}
                            >
                              {subItem.icon && <span className="mr-3 text-gray-400">{subItem.icon}</span>}
                              {subItem.title}
                            </Link>
                          ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : !item.desktopOnly ? (
                      <Link
                        to={item.href}
                        className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                          location.pathname === item.href 
                            ? 'text-chittoor-green bg-chittoor-green/10' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ) : null}
                  </div>
                ))}
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
