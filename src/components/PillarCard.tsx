
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useIsMobile } from '@/hooks/use-mobile';
import { Pillar } from '@/data/pillarData';
import PillarDialog from './PillarDialog';

interface PillarCardProps {
  pillar: Pillar;
  index: number;
}

const PillarCard = ({ pillar, index }: PillarCardProps) => {
  const isMobile = useIsMobile();

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <motion.div variants={item} id={pillar.title.toLowerCase().replace(/\s+/g, '-')}>
      <Card className="rounded-xl overflow-hidden shadow-lg border-none h-full hover:shadow-xl transition-shadow duration-300">
        <div className="aspect-video overflow-hidden">
          <img 
            src={pillar.image} 
            alt={pillar.imageAlt} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-2 bg-gradient-to-r from-chittoor-green to-chittoor-green-light"></div>
        <CardContent className="flex flex-col p-0">
          <div className="p-6">
            <div className={`mb-4 p-3 rounded-full ${pillar.bg} shadow-md w-fit`}>
              {pillar.icon}
            </div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{pillar.title}</h3>
              <span className={`text-xs px-2 py-1 rounded ml-2 ${pillar.status === 'active' ? 'bg-green-100 text-chittoor-green' : 'bg-blue-100 text-chittoor-blue'}`}>
                {pillar.status === 'active' ? 'Active' : 'Planning'}
              </span>
            </div>
            <p className={`text-gray-600 ${isMobile ? 'text-sm line-clamp-3' : ''} mb-4`}>
              {pillar.description}
            </p>
          </div>
          <div className="mt-auto p-6 pt-0">
            <PillarDialog pillar={pillar}>
              <Button 
                variant="ghost" 
                className={`text-chittoor-blue hover:text-chittoor-blue-dark hover:bg-chittoor-blue/10 p-0 ${isMobile ? 'text-sm' : ''}`}
              >
                Learn more →
              </Button>
            </PillarDialog>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PillarCard;
