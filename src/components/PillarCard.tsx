
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Pillar } from "@/data/pillarData";
import { CheckCircle2, ArrowRight, Users, Target, TrendingUp } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PillarCardProps {
  pillar: Pillar;
  index: number;
}

// Separate component for pillar number badge
const PillarNumberBadge = ({ index }: { index: number }) => (
  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border-2 border-white/50">
    <span className="text-gray-800 font-bold text-base sm:text-lg">{index + 1}</span>
  </div>
);

// Separate component for status badge
const StatusBadge = ({ status }: { status: "active" | "planning" }) => (
  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
    <span className={`inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium backdrop-blur-sm shadow-lg ${
      status === 'active' 
        ? 'bg-green-500/90 text-white border border-green-300/50' 
        : 'bg-blue-500/90 text-white border border-blue-300/50'
    }`}>
      <div className={`w-2 h-2 rounded-full mr-2 ${
        status === 'active' ? 'bg-white' : 'bg-white'
      }`}></div>
      {status === 'active' ? 'Active' : 'Planning'}
    </span>
  </div>
);

// Separate component for pillar icon
const PillarIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="mb-3 sm:mb-4 flex justify-center">
    <div className="p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/30 shadow-lg group-hover:bg-white/30 transition-all duration-300">
      {icon}
    </div>
  </div>
);

// Separate component for pillar title
const PillarTitle = ({ title }: { title: string }) => (
  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 text-center group-hover:text-white/90 transition-colors">
    {title}
  </h4>
);

// Separate component for pillar description
const PillarDescription = ({ description }: { description: string }) => (
  <p className="text-white/90 text-center leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm backdrop-blur-sm">
    {description}
  </p>
);

// Separate component for stats display
const StatsDisplay = ({ stats }: { stats: Pillar['stats'] }) => (
  <div className="flex justify-center items-center gap-3 sm:gap-6 mb-4 sm:mb-5">
    <div className="text-center">
      <div className="text-base sm:text-lg font-bold text-white">{stats.beneficiaries}</div>
      <div className="text-xs text-white/70">Trees</div>
    </div>
    <div className="w-px h-8 bg-white/30"></div>
    <div className="text-center">
      <div className="text-base sm:text-lg font-bold text-white">{stats.villages}</div>
      <div className="text-xs text-white/70">Land</div>
    </div>
    <div className="w-px h-8 bg-white/30"></div>
    <div className="text-center">
      <div className="text-base sm:text-lg font-bold text-white">{stats.impact}</div>
      <div className="text-xs text-white/70">Farmers</div>
    </div>
  </div>
);

// Separate component for action buttons
const ActionButtons = ({ pillar, onReadMore }: { pillar: Pillar; onReadMore: (e: React.MouseEvent) => void }) => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-2 sm:gap-3">
      <Button
        onClick={onReadMore}
        className="flex-1 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg sm:rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 group/btn text-sm"
      >
        <span className="mr-1 sm:mr-2 text-xs sm:text-sm">Explore</span>
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </Button>
      
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="flex-1 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 hover:text-gray-900 font-medium py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg sm:rounded-xl border border-white/50 hover:border-white transition-all duration-300 text-xs sm:text-sm"
          >
            Quick View
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-sm sm:max-w-4xl lg:max-w-6xl p-0 overflow-hidden border-0 rounded-xl sm:rounded-3xl mx-4">
          <div className="relative h-48 sm:h-64 md:h-96 w-full">
            <img
              src={pillar.image}
              alt={pillar.imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center ${pillar.bg} shadow-md`}>
                  {pillar.icon}
                </div>
                <div>
                  <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-white/20 text-white mb-1">
                    {pillar.status === 'active' ? 'Active Project' : 'In Planning'}
                  </span>
                  <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    {pillar.title}
                  </DialogTitle>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8 max-h-[50vh] sm:max-h-[60vh] overflow-y-auto">
            <div className="prose max-w-none">
              <div className="mb-8">
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                  {pillar.description}
                </p>
                
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg sm:rounded-xl mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-chittoor-green mr-2" />
                    Key Highlights
                  </h3>
                  
                  {pillar.keyPoints && pillar.keyPoints.length > 0 && (
                    <div className="grid grid-cols-1 gap-3 sm:gap-4 mt-3 sm:mt-4">
                      {pillar.keyPoints.map((point, index) => (
                        <div 
                          key={index}
                          className="flex items-start p-3 bg-white rounded-lg border border-gray-100 hover:border-chittoor-green/30 transition-colors"
                        >
                          <CheckCircle2 className="h-5 w-5 text-chittoor-green mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 border-t bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
              Want to learn more about our {pillar.title.toLowerCase()} initiatives?
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                onClick={() => navigate(`/pillars/${pillar.slug}`)}
                className="flex-1 sm:flex-none"
              >
                View Full Details <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => {
                  navigate('/contact');
                }}
                className="bg-chittoor-green hover:bg-chittoor-green-dark text-white transition-colors flex-1 sm:flex-none"
              >
                Get Involved
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const PillarCard = ({ pillar, index }: PillarCardProps) => {
  const isMobile = useIsMobile();
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
        
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={pillar.image}
            alt={pillar.imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Overlay gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/70 group-hover:via-black/30 group-hover:to-black/10 transition-all duration-500`}></div>

        {/* Pillar number badge */}
        <PillarNumberBadge index={index} />

        {/* Status badge */}
        <StatusBadge status={pillar.status} />

        {/* Main content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10">
          
          {/* Icon */}
          <PillarIcon icon={pillar.icon} />

          {/* Title */}
          <PillarTitle title={pillar.title} />
          
          {/* Description */}
          <PillarDescription description={pillar.description} />

          {/* Stats */}
          <StatsDisplay stats={pillar.stats} />

          {/* Action buttons */}
          <ActionButtons pillar={pillar} onReadMore={handleReadMore} />
        </div>
      </div>
    </motion.div>
  );
};

export default PillarCard;
