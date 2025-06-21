import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Pillar } from "@/data/pillarData";
import { CheckCircle2, ArrowRight } from "lucide-react";
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

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const navigate = useNavigate();

  const handleReadMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/pillars/${pillar.slug}`);
  };

  return (
    <motion.div
      variants={item}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={`relative flex flex-col h-full transition-all duration-300 ${
        isMobile
          ? "bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
          : "bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-chittoor-green/30 hover:-translate-y-1"
      }`}
    >
      {/* Image with aspect ratio and overlay */}
      <div className="relative w-full pt-[65%] sm:pt-[56.25%] overflow-hidden">
        <img
          src={pillar.image}
          alt={pillar.imageAlt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <h3 className="text-white text-xl sm:text-2xl font-bold drop-shadow-md">
            {pillar.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 sm:p-5 md:p-6 flex flex-col">
        <div className="flex-1">
          <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
            {pillar.description}
          </p>
        </div>

        <div className="mt-auto pt-2 sm:pt-3 space-y-2">
          <Button
            onClick={handleReadMore}
            variant="outline"
            className="w-full border-chittoor-green text-chittoor-green hover:bg-chittoor-green/5 text-xs sm:text-sm h-9 sm:h-10 flex items-center justify-center gap-2"
          >
            Read More <ArrowRight className="w-4 h-4" />
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full border-chittoor-blue text-chittoor-blue hover:bg-chittoor-blue/5 text-xs sm:text-sm h-9 sm:h-10 flex items-center justify-center gap-2"
              >
                Quick View
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl sm:max-w-6xl p-0 overflow-hidden border-0">
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
                    
                    {/* Content Summary Section */}
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

                    {/* Preview of Detailed Content */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-gray-800">
                        Overview
                      </h3>
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
    </motion.div>
  );
};

export default PillarCard;
