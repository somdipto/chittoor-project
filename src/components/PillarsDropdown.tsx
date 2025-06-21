
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from 'lucide-react';
import { pillarsData } from '@/data/pillarData';
import PillarDialog from './PillarDialog';

const PillarsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="flex items-center gap-2 bg-gradient-to-r from-white/90 to-chittoor-green/5 backdrop-blur-sm border-chittoor-green/30 hover:bg-gradient-to-r hover:from-chittoor-green/10 hover:to-chittoor-green/20 transition-all duration-300 shadow-sm hover:shadow-md group px-6 py-3 rounded-full"
        >
          <Sparkles className="h-4 w-4 text-chittoor-green group-hover:rotate-12 transition-transform duration-300" />
          Explore Our Pillars
          <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-300" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-96 max-h-[32rem] overflow-y-auto bg-white/95 backdrop-blur-lg shadow-2xl border-0 rounded-2xl p-2"
        sideOffset={8}
      >
        <div className="p-3 border-b border-gray-100 mb-2">
          <h3 className="font-semibold text-gray-800 text-center">Our Project Pillars</h3>
          <p className="text-xs text-gray-500 text-center mt-1">Click any pillar to learn more</p>
        </div>
        
        {pillarsData.map((pillar, index) => (
          <DropdownMenuItem key={index} className="p-0 mb-2 last:mb-0">
            <PillarDialog pillar={pillar}>
              <div className="w-full p-4 hover:bg-gradient-to-r hover:from-chittoor-green/5 hover:to-chittoor-green/10 transition-all duration-300 cursor-pointer rounded-xl border border-transparent hover:border-chittoor-green/20 hover:shadow-md group">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${pillar.bg} flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    {pillar.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-sm text-gray-800 group-hover:text-chittoor-green-dark transition-colors">
                        {pillar.title}
                      </h4>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        pillar.status === 'active' 
                          ? 'bg-green-100 text-green-700 shadow-sm' 
                          : 'bg-blue-100 text-blue-700 shadow-sm'
                      }`}>
                        {pillar.status === 'active' ? '🟢 Active' : '🔵 Planning'}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {pillar.description}
                    </p>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs text-chittoor-green font-medium">
                        Click to explore →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </PillarDialog>
          </DropdownMenuItem>
        ))}
        
        <div className="p-3 border-t border-gray-100 mt-2">
          <p className="text-xs text-center text-gray-500">
            ✨ Building a sustainable future together
          </p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PillarsDropdown;
