
import React from 'react';
import { Button } from "@/components/ui/button";
import { Flower, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const navItems = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "News", href: "#news" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Flower className="w-8 h-8 text-chittoor-green" />
          <span className="font-semibold text-xl">Chittoor Project</span>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item.title} 
              href={item.href} 
              className="text-sm font-medium transition-colors hover:text-chittoor-green"
            >
              {item.title}
            </a>
          ))}
          <Button className="bg-chittoor-green hover:bg-chittoor-green-dark">Donate</Button>
        </nav>
        
        {/* Mobile navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <a 
                  key={item.title} 
                  href={item.href} 
                  className="text-lg font-medium transition-colors hover:text-chittoor-green"
                >
                  {item.title}
                </a>
              ))}
              <Button className="bg-chittoor-green hover:bg-chittoor-green-dark w-full mt-4">Donate</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
