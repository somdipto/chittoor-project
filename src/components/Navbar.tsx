
import React from "react";
import { Button } from "@/components/ui/button";
import { Flower, Menu, ArrowLeft } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/#about",
    },
    {
      title: "Projects",
      href: "/#projects",
    },
    {
      title: "Pillars",
      href: "/pillars",
    },
    {
      title: "Collaborate",
      href: "/collaborate",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
                className="flex items-center text-chittoor-green hover:text-chittoor-green-dark transition-colors p-2 rounded-full hover:bg-gray-100"
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
              className="flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <div className="bg-gradient-to-br from-chittoor-green-light to-chittoor-green p-1.5 rounded-full">
                <Flower className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg sm:text-xl tracking-tight">
                  Chittoor Project
                </span>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
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
                  className="text-sm font-medium transition-all hover:text-chittoor-green relative group px-2 py-1"
                >
                  {item.title}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-chittoor-green to-chittoor-blue group-hover:w-full transition-all duration-300"></span>
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="text-sm font-medium transition-all hover:text-chittoor-green relative group px-2 py-1"
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
              <Button className="bg-gradient-to-r from-chittoor-green to-chittoor-green-dark hover:bg-chittoor-green-dark shadow-md rounded-full px-4 sm:px-6 text-sm sm:text-base">
                Donate
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
                className="rounded-full"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-6">
              <div className="flex flex-col h-full">
                <div className="flex-1 pt-8 flex flex-col gap-6">
                  {navItems.map((item) => (
                    <div key={item.title}>
                      {item.href.startsWith("/") && !item.href.includes("#") ? (
                        <Link
                          to={item.href}
                          className="text-lg font-medium transition-colors hover:text-chittoor-green py-2 block"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="text-lg font-medium transition-colors hover:text-chittoor-green py-2 block"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t mt-auto">
                  <Link to="/donate">
                    <Button
                      className="w-full bg-gradient-to-r from-chittoor-green to-chittoor-green-dark hover:bg-chittoor-green-dark rounded-full py-6 text-base"
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
