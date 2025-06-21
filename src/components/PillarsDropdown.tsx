
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
import { pillarsData } from '@/data/pillarData';
import PillarDialog from './PillarDialog';

const PillarsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border-chittoor-green/20 hover:bg-chittoor-green/5"
        >
          Explore Our Pillars
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 max-h-96 overflow-y-auto bg-white shadow-lg border-chittoor-green/20">
        {pillarsData.map((pillar, index) => (
          <DropdownMenuItem key={index} className="p-0">
            <PillarDialog pillar={pillar}>
              <div className="w-full p-4 hover:bg-chittoor-green/5 transition-colors cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-full ${pillar.bg} flex-shrink-0`}>
                    {pillar.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm mb-1 flex items-center gap-2">
                      {pillar.title}
                      <span className={`text-xs px-2 py-0.5 rounded ${pillar.status === 'active' ? 'bg-green-100 text-chittoor-green' : 'bg-blue-100 text-chittoor-blue'}`}>
                        {pillar.status === 'active' ? 'Active' : 'Planning'}
                      </span>
                    </h4>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            </PillarDialog>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PillarsDropdown;
