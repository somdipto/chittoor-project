
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
      <div className="w-full p-6 hover:bg-gradient-to-r hover:from-chittoor-green/5 hover:to-chittoor-green/10 transition-all duration-300 cursor-pointer rounded-xl border border-transparent hover:border-chittoor-green/20 hover:shadow-md bg-white/95 backdrop-blur-sm">
        
        {/* Pillar Number Badge */}
        <div className="absolute -top-3 -left-3 z-20 w-10 h-10 bg-gradient-to-br from-chittoor-green to-chittoor-green-dark rounded-full flex items-center justify-center shadow-lg border-4 border-white">
          <span className="text-white font-bold text-sm">{index + 1}</span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium shadow-sm ${
            pillar.status === 'active' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-blue-100 text-blue-700'
          }`}>
            <div className={`w-2 h-2 rounded-full mr-2 ${
              pillar.status === 'active' ? 'bg-green-500' : 'bg-blue-500'
            }`}></div>
            {pillar.status === 'active' ? '🟢 Active' : '🔵 Planning'}
          </span>
        </div>

        <div className="flex items-start gap-4">
          {/* Icon Section */}
          <div className={`p-3 rounded-full ${pillar.bg} flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
            {pillar.icon}
          </div>

          {/* Content Section */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-semibold text-lg text-gray-800 group-hover:text-chittoor-green-dark transition-colors">
                {pillar.title}
              </h4>
            </div>
            
            <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4">
              {pillar.description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-gray-50/80 rounded-lg">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Users className="w-3 h-3 text-chittoor-green mr-1" />
                </div>
                <div className="text-sm font-bold text-chittoor-green">{pillar.stats.beneficiaries}</div>
                <div className="text-xs text-gray-500">People</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Target className="w-3 h-3 text-chittoor-blue mr-1" />
                </div>
                <div className="text-sm font-bold text-chittoor-blue">{pillar.stats.villages}</div>
                <div className="text-xs text-gray-500">Villages</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <TrendingUp className="w-3 h-3 text-chittoor-earth mr-1" />
                </div>
                <div className="text-sm font-bold text-chittoor-earth">{pillar.stats.impact}</div>
                <div className="text-xs text-gray-500">Impact</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <Button
                onClick={handleReadMore}
                size="sm"
                className="flex-1 bg-gradient-to-r from-chittoor-green to-chittoor-green-dark hover:from-chittoor-green-dark hover:to-chittoor-green text-white font-medium py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group/btn"
              >
                <span className="mr-2 text-xs">Explore Details</span>
                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border border-chittoor-blue/30 text-chittoor-blue hover:bg-chittoor-blue/5 hover:border-chittoor-blue/50 font-medium py-2 rounded-lg transition-all duration-300 text-xs"
                  >
                    Quick Preview
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl sm:max-w-6xl p-0 overflow-hidden border-0 rounded-3xl">
                  <div className="relative h-64 md:h-96 w-full">
                    <img
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${pillar.bg} shadow-md`}>
                          {pillar.icon}
                        </div>
                        <div>
                          <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-white/20 text-white mb-1">
                            {pillar.status === 'active' ? 'Active Project' : 'In Planning'}
                          </span>
                          <DialogTitle className="text-3xl md:text-4xl font-bold text-white">
                            {pillar.title}
                          </DialogTitle>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
                    <div className="prose max-w-none">
                      <div className="mb-8">
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                          {pillar.description}
                        </p>
                        
                        <div className="bg-gray-50 p-6 rounded-xl mb-8">
                          <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                            <CheckCircle2 className="w-5 h-5 text-chittoor-green mr-2" />
                            Key Highlights
                          </h3>
                          
                          {pillar.keyPoints && pillar.keyPoints.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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

                  <DialogFooter className="px-6 md:px-8 py-4 border-t bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-gray-500">
                      Want to learn more about our {pillar.title.toLowerCase()} initiatives?
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
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

            {/* Hover indicator */}
            <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs text-chittoor-green font-medium">
                Click to explore →
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PillarCard;
