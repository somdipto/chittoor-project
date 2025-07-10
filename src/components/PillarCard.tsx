import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Pillar } from "@/data/pillarData";
import { ArrowRight } from "lucide-react";
import PillarCardContent from "./PillarCardContent";
import PillarCardDialog from "./PillarCardDialog";

interface PillarCardProps {
  pillar: Pillar;
  index: number;
}

const PillarCard = ({ pillar, index }: PillarCardProps) => {
  const navigate = useNavigate();

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.1 } },
  };

  const handleReadMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/pillars/${pillar.slug}`);
  };

  return (
    <motion.div
      variants={item}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group-hover:scale-[1.02]">
        <div className="absolute inset-0">
          <img
            src={pillar.image}
            alt={pillar.imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-black/80 group-hover:via-black/50 group-hover:to-black/20 transition-all duration-500`}></div>

        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border-2 border-white/50">
          <span className="text-gray-800 font-bold text-base sm:text-lg">{index + 1}</span>
        </div>

        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
          <span className={`inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium backdrop-blur-sm shadow-lg ${
            pillar.status === 'active' 
              ? 'bg-green-500/90 text-white border border-green-300/50' 
              : 'bg-blue-500/90 text-white border border-blue-300/50'
          }`}>
            <div className={`w-2 h-2 rounded-full mr-2 ${
              pillar.status === 'active' ? 'bg-white' : 'bg-white'
            }`}></div>
            {pillar.status === 'active' ? 'Active' : 'Planning'}
          </span>
        </div>

        <PillarCardContent pillar={pillar} />

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10 flex gap-2 sm:gap-3">
            <Button
              onClick={handleReadMore}
              className="flex-1 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg sm:rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 group/btn text-sm"
            >
              <span className="mr-1 sm:mr-2 text-xs sm:text-sm">Explore</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
            <PillarCardDialog pillar={pillar} />
        </div>
      </div>
    </motion.div>
  );
};

export default PillarCard;