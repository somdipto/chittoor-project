
import React from 'react';
import { Button } from "@/components/ui/button";
import { Flower, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/#about" },
    { title: "Projects", href: "/#projects" },
    { title: "News", href: "/#news" },
    { title: "Contact", href: "/#contact" },
    { title: "Xcelerator", href: "/xcelerator" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-chittoor-green-light to-chittoor-green p-1.5 rounded-full shadow-md">
              <Flower className="w-6 h-6 text-white" />
            </div>
            <span className="font-semibold text-xl">Chittoor Project</span>
          </Link>
        </motion.div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, i) => (
            <motion.div
              key={item.title} 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              {item.href.startsWith('/') && !item.href.includes('#') ? (
                <Link 
                  to={item.href}
                  className="text-sm font-medium transition-all hover:text-chittoor-green relative group"
                >
                  {item.title}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-chittoor-green to-chittoor-blue group-hover:w-full transition-all duration-300"></span>
                </Link>
              ) : (
                <a 
                  href={item.href}
                  className="text-sm font-medium transition-all hover:text-chittoor-green relative group"
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
            <Button className="bg-gradient-to-r from-chittoor-green to-chittoor-green-dark hover:bg-chittoor-green-dark shadow-md rounded-full px-6">
              Donate
            </Button>
          </motion.div>
        </nav>
        
        {/* Mobile navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden rounded-full">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <React.Fragment key={item.title}>
                  {item.href.startsWith('/') && !item.href.includes('#') ? (
                    <Link 
                      to={item.href} 
                      className="text-lg font-medium transition-colors hover:text-chittoor-green"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <a 
                      href={item.href} 
                      className="text-lg font-medium transition-colors hover:text-chittoor-green"
                    >
                      {item.title}
                    </a>
                  )}
                </React.Fragment>
              ))}
              <Button className="bg-gradient-to-r from-chittoor-green to-chittoor-green-dark hover:bg-chittoor-green-dark w-full mt-4 rounded-full">
                Donate
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
