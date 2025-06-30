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

// Helper function to safely extract content from React elements
const extractContent = (element: React.ReactNode): React.ReactNode => {
  if (!React.isValidElement(element)) return null;
  
  const children = element.props.children;
  if (Array.isArray(children)) {
    return children.map((child, i) => 
      React.isValidElement(child) ? child : child
    );
  }
  return children;
};

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
      {/* Pillar Number Badge */}
      <div className="absolute -top-4 -left-4 z-20 w-12 h-12 bg-gradient-to-br from-chittoor-green to-chittoor-green-dark rounded-full flex items-center justify-center shadow-lg border-4 border-white">
        <span className="text-white font-bold text-lg">{index + 1}</span>
      </div>

      <div className={`relative flex flex-col h-full transition-all duration-500 ${
        isMobile
          ? "bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
          : "bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-chittoor-green/30 hover:-translate-y-2 hover:scale-[1.02]"
      }`}>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
            pillar.status === 'active' 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-blue-100 text-blue-800 border border-blue-200'
          }`}>
            <div className={`w-2 h-2 rounded-full mr-2 ${
              pillar.status === 'active' ? 'bg-green-500' : 'bg-blue-500'
            }`}></div>
            {pillar.status === 'active' ? 'Active' : 'Planning'}
          </span>
        </div>

        {/* Enhanced Image Section */}
        <div className="relative w-full pt-[60%] overflow-hidden rounded-t-2xl">
          <img
            src={pillar.image}
            alt={pillar.imageAlt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          
          {/* Icon and Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-4 mb-3">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${pillar.bg} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {pillar.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-white text-xl font-bold drop-shadow-lg group-hover:text-chittoor-green-light transition-colors">
                  {pillar.title}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Content Section */}
        <div className="flex-1 p-6 flex flex-col">
          <p className="text-gray-600 text-base mb-6 leading-relaxed line-clamp-3">
            {pillar.description}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-gray-50 rounded-xl">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Users className="w-4 h-4 text-chittoor-green mr-1" />
              </div>
              <div className="text-lg font-bold text-chittoor-green">{pillar.stats.beneficiaries}</div>
              <div className="text-xs text-gray-500">Beneficiaries</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Target className="w-4 h-4 text-chittoor-blue mr-1" />
              </div>
              <div className="text-lg font-bold text-chittoor-blue">{pillar.stats.villages}</div>
              <div className="text-xs text-gray-500">Villages</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <TrendingUp className="w-4 h-4 text-chittoor-earth mr-1" />
              </div>
              <div className="text-lg font-bold text-chittoor-earth">{pillar.stats.impact}</div>
              <div className="text-xs text-gray-500">Impact</div>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="mt-auto space-y-3">
            <Button
              onClick={handleReadMore}
              className="w-full bg-gradient-to-r from-chittoor-green to-chittoor-green-dark hover:from-chittoor-green-dark hover:to-chittoor-green text-white font-medium py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group/btn"
            >
              <span className="mr-2">Explore Details</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full border-2 border-chittoor-blue/20 text-chittoor-blue hover:bg-chittoor-blue/5 hover:border-chittoor-blue/40 font-medium py-3 rounded-xl transition-all duration-300"
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
                        
                        <div className="space-y-4 text-gray-700">
                          {React.isValidElement(pillar.detailContent) && 
                            extractContent(pillar.detailContent)}
                        </div>
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
                        // Close the dialog
                        const closeButton = document.querySelector(
                          '[data-radix-focus-guard]'
                        );
                        if (closeButton && closeButton instanceof HTMLElement) {
                          closeButton.click();
                        }
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
        </div>
      </div>
    </motion.div>
  );
};

export default PillarCard;
