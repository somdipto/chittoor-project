
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pillar } from "@/data/pillarData";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface PillarCardDialogProps {
  pillar: Pillar;
}

const PillarCardDialog: React.FC<PillarCardDialogProps> = ({ pillar }) => {
  const navigate = useNavigate();

  return (
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
  );
};

export default PillarCardDialog;
