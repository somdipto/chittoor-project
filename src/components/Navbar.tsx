
import React from "react";
import { Button } from "@/components/ui/button";
import { Flower, Menu, ArrowLeft, X, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Book, Target, Users, BarChart3, Handshake, MessageSquare } from "lucide-react";
import NavbarDropdown from "./NavbarDropdown";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  const navItems = [
    { title: "Home", href: "/" },
    { 
      title: "About Us", 
      type: "dropdown",
      items: [
        { title: "Our Story", href: "/about/story", icon: <Book className="h-4 w-4" /> },
        { title: "Our Mission", href: "/about/mission", icon: <Target className="h-4 w-4" /> },
        { title: "Our Team", href: "/about/team", icon: <Users className="h-4 w-4" /> },
        { title: "Objectives", href: "/about/objectives", icon: <BarChart3 className="h-4 w-4" /> },
        { title: "Our Approach", href: "/about/approach", icon: <Handshake className="h-4 w-4" /> },
        { title: "Contact", href: "/contact", icon: <MessageSquare className="h-4 w-4" /> }
      ]
    },
    { title: "Projects", href: "/#projects" },
    { title: "Pillars", href: "/pillars" },
    { title: "Collaborate", href: "/collaborate" }
  ];
  const [isOpen, setIsOpen] = React.useState(false);

  // Get About Us item for desktop dropdown
  const aboutUsItem = navItems.find(item => item.title === 'About Us');

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-4">
          {/* Back Button for non-home pages */}
          {!isHomePage && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/"
                className="flex items-center text-chittoor-green hover:text-chittoor-green-dark transition-colors p-2 rounded-full hover:bg-chittoor-green/10"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Link
              to="/"
              className="flex items-center gap-2 group"
              onClick={() => setIsOpen(false)}
            >
              <div className="bg-gradient-to-br from-chittoor-green-light to-chittoor-green p-1.5 rounded-full group-hover:shadow-lg transition-shadow">
                <Flower className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg sm:text-xl tracking-tight text-gray-800">
                  Project Chittor
                </span>
                <span className="text-xs text-chittoor-green font-medium hidden sm:block">
                  Evergreen Revolution
                </span>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          {/* Home Button */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0 * 0.1 }}
          >
            <Link
              to="/"
              className={`text-sm font-medium transition-all relative group px-3 py-2 rounded-lg hover:bg-chittoor-green/10 ${
                location.pathname === "/" 
                  ? "text-chittoor-green bg-chittoor-green/10" 
                  : "text-gray-700 hover:text-chittoor-green"
              }`}
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-chittoor-green to-chittoor-blue group-hover:w-full transition-all duration-300"></span>
            </Link>
          </motion.div>
          
          {/* About Us Dropdown */}
          {aboutUsItem && aboutUsItem.type === 'dropdown' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1 * 0.1 }}
              className="relative group"
            >
              <button
                className="flex items-center text-sm font-medium px-3 py-2 rounded-lg hover:bg-chittoor-green/10 text-gray-700 hover:text-chittoor-green transition-colors"
              >
                About Us
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              
              <div className="absolute left-0 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  {aboutUsItem.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {item.icon && <span className="mr-3 text-gray-400">{item.icon}</span>}
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 2 * 0.1 }}
          >
            <Link
              to="/#projects"
              className={`text-sm font-medium transition-all relative group px-3 py-2 rounded-lg hover:bg-chittoor-green/10 ${
                location.pathname === "/#projects" 
                  ? "text-chittoor-green bg-chittoor-green/10" 
                  : "text-gray-700 hover:text-chittoor-green"
              }`}
            >
              Projects
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-chittoor-green to-chittoor-blue group-hover:w-full transition-all duration-300"></span>
            </Link>
          </motion.div>

          {/* Pillars Button */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 3 * 0.1 }}
          >
            <Link
              to="/pillars"
              className={`text-sm font-medium transition-all relative group px-3 py-2 rounded-lg hover:bg-chittoor-green/10 ${
                location.pathname === "/pillars" 
                  ? "text-chittoor-green bg-chittoor-green/10" 
                  : "text-gray-700 hover:text-chittoor-green"
              }`}
            >
              Pillars
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-chittoor-green to-chittoor-blue group-hover:w-full transition-all duration-300"></span>
            </Link>
          </motion.div>

          {/* Collaborate Button */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 4 * 0.1 }}
          >
            <Link
              to="/collaborate"
              className={`text-sm font-medium transition-all relative group px-3 py-2 rounded-lg hover:bg-chittoor-green/10 ${
                location.pathname === "/collaborate" 
                  ? "text-chittoor-green bg-chittoor-green/10" 
                  : "text-gray-700 hover:text-chittoor-green"
              }`}
            >
              Collaborate
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-chittoor-green to-chittoor-blue group-hover:w-full transition-all duration-300"></span>
            </Link>
          </motion.div>
          
          {/* Volunteer Button */}
          <Link to="/collaborate">
            <Button 
              variant="outline"
              className="border-chittoor-green text-chittoor-green hover:bg-chittoor-green hover:text-white transition-all duration-300 rounded-full px-4 sm:px-6 text-sm sm:text-base font-semibold"
            >
              Volunteer
            </Button>
          </Link>
          
          {/* Donate Button */}
          <Link to="/donate">
            <Button className="bg-gradient-to-r from-chittoor-green to-chittoor-green-dark hover:from-chittoor-green-dark hover:to-chittoor-green shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-4 sm:px-6 text-sm sm:text-base font-semibold">
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
                className="text-gray-700 hover:bg-chittoor-green/10 hover:text-chittoor-green focus:outline-none"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm p-0">
              <div className="flex flex-col h-full bg-gradient-to-b from-white to-chittoor-offwhite">
                {/* Header */}
                <div className="p-6 border-b border-chittoor-green/10">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-chittoor-green-light to-chittoor-green p-2 rounded-full">
                      <Flower className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">Project Chittor</h3>
                      <p className="text-sm text-chittoor-green">Evergreen Revolution</p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex-1 pt-6 px-6 flex flex-col gap-2 overflow-y-auto">
                  {navItems.map((item, index) => (
                    <React.Fragment key={item.title}>
                      {item.type === 'dropdown' ? (
                        <NavbarDropdown 
                          title={item.title} 
                          items={item.items} 
                        />
                      ) : (
                        <Link
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            location.pathname === item.href
                              ? 'text-chittoor-green bg-chittoor-green/10'
                              : 'text-gray-700 hover:bg-chittoor-green/5 hover:text-chittoor-green'
                          }`}
                        >
                          {item.title}
                        </Link>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Footer with buttons */}
                <div className="p-6 border-t border-chittoor-green/10 space-y-3">
                  <Link to="/collaborate">
                    <Button
                      variant="outline"
                      className="w-full border-chittoor-green text-chittoor-green hover:bg-chittoor-green hover:text-white transition-all duration-300 rounded-full py-6 text-base font-semibold"
                      onClick={() => setIsOpen(false)}
                    >
                      Volunteer
                    </Button>
                  </Link>
                  <Link to="/donate">
                    <Button
                      className="w-full bg-gradient-to-r from-chittoor-green to-chittoor-green-dark hover:from-chittoor-green-dark hover:to-chittoor-green shadow-lg hover:shadow-xl transition-all duration-300 rounded-full py-6 text-base font-semibold"
                      onClick={() => setIsOpen(false)}
                    >
                      Donate Now
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
