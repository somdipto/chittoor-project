
import React from "react";
import { Pillar } from "@/data/pillarData";
import PillarCardStats from "./PillarCardStats";

interface PillarCardContentProps {
  pillar: Pillar;
}

const PillarCardContent: React.FC<PillarCardContentProps> = ({ pillar }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 pb-16 sm:pb-24 z-10">
      <div className="mb-3 sm:mb-4 flex justify-center">
        <div className="p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/30 shadow-lg group-hover:bg-white/30 transition-all duration-300">
          {pillar.icon}
        </div>
      </div>
      <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 text-center group-hover:text-white/90 transition-colors" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        {pillar.title}
      </h4>
      <p className="text-white/90 text-center leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm backdrop-blur-sm" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
        {pillar.description}
      </p>
      <PillarCardStats pillar={pillar} />
    </div>
  );
};

export default PillarCardContent;
