
import React from "react";
import { Button } from "@/components/ui/button";
import { Flower, Menu, ArrowLeft, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  const navItems = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Projects", href: "/#projects" },
    { title: "Pillars", href: "/pillars" },
    { title: "Collaborate", href: "/collaborate" },
    { title: "Contact", href: "/contact" }
  ];
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-sm">
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
          {navItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              {item.href.startsWith("/") && !item.href.includes("#") ? (
                <Link
                  to={item.href}
                  className={`text-sm font-medium transition-all relative group px-3 py-2 rounded-lg hover:bg-chittoor-green/10 ${
                    location.pathname === item.href 
                      ? "text-chittoor-green bg-chittoor-green/10" 
                      : "text-gray-700 hover:text-chittoor-green"
                  }`}
                >
                  {item.title}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-chittoor-green to-chittoor-blue group-hover:w-full transition-all duration-300"></span>
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="text-sm font-medium transition-all text-gray-700 hover:text-chittoor-green relative group px-3 py-2 rounded-lg hover:bg-chittoor-green/10"
                >
                  {item.title}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-chittoor-green to-chittoor-blue group-hover:w-full transition-all duration-300"></span>
                </a>
              )}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link to="/donate">
              <Button className="bg-gradient-to-r from-chittoor-green to-chittoor-green-dark hover:from-chittoor-green-dark hover:to-chittoor-green shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-4 sm:px-6 text-sm sm:text-base font-semibold">
                Donate Now
              </Button>
            </Link>
          </motion.div>
        </nav>

        {/* Mobile navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-chittoor-green/20 hover:bg-chittoor-green/10"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
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
                <div className="flex-1 pt-6 px-6 flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {item.href.startsWith("/") && !item.href.includes("#") ? (
                        <Link
                          to={item.href}
                          className={`text-lg font-medium transition-all py-3 px-4 rounded-xl block ${
                            location.pathname === item.href
                              ? "text-chittoor-green bg-chittoor-green/10 border-l-4 border-chittoor-green"
                              : "text-gray-700 hover:text-chittoor-green hover:bg-chittoor-green/5"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="text-lg font-medium transition-all text-gray-700 hover:text-chittoor-green py-3 px-4 rounded-xl block hover:bg-chittoor-green/5"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-chittoor-green/10">
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
    </header>
  );
};

export default Navbar;
