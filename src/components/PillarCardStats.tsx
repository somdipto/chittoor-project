
import React from "react";
import { Pillar } from "@/data/pillarData";

interface PillarCardStatsProps {
  pillar: Pillar;
}

const PillarCardStats: React.FC<PillarCardStatsProps> = ({ pillar }) => {
  const getStatLabels = () => {
    switch (pillar.slug) {
      case "sustainable-agriculture":
        return {
          stat1: "Trees",
          stat2: "Land in Acres",
          stat3: "Number of Farmers",
        };
      case "renewable-energy":
        return {
          stat1: "KWH",
          stat2: "Land in Acre",
          stat3: "in Revenue",
        };
      case "transformative-education":
        return {
          stat1: "Students",
          stat2: "Subjects",
          stat3: "Activities",
        };
      default:
        return {
          stat1: "People",
          stat2: "Villages",
          stat3: "Impact",
        };
    }
  };

  const { stat1, stat2, stat3 } = getStatLabels();

  return (
    <div className="flex justify-center items-center gap-3 sm:gap-6 mb-4 sm:mb-5">
      <div className="text-center">
        <div className="text-base sm:text-lg font-bold text-white">{pillar.stats.beneficiaries}</div>
        <div className="text-xs text-white/70">{stat1}</div>
      </div>
      <div className="w-px h-8 bg-white/30"></div>
      <div className="text-center">
        <div className="text-base sm:text-lg font-bold text-white">{pillar.stats.villages}</div>
        <div className="text-xs text-white/70">{stat2}</div>
      </div>
      <div className="w-px h-8 bg-white/30"></div>
      <div className="text-center">
        <div className="text-base sm:text-lg font-bold text-white">{pillar.stats.impact}</div>
        <div className="text-xs text-white/70">{stat3}</div>
      </div>
    </div>
  );
};

export default PillarCardStats;
