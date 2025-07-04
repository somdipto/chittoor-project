import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pillar } from "@/data/pillarData";

interface PillarDialogProps {
  pillar: Pillar;
  children: React.ReactNode;
}

const PillarDialog = ({ pillar, children }: PillarDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[900px] max-h-[85vh] overflow-y-auto p-0 border-0 bg-gradient-to-br from-white via-gray-50 to-chittoor-green/5">
        <DialogHeader className="sr-only">
          <DialogTitle>{pillar.title} - Chittoor's Initiative</DialogTitle>
          <DialogDescription>Details about {pillar.title} initiative</DialogDescription>
        </DialogHeader>
        <div className="relative">
          {/* Colorful header with gradient background */}
          <div
            className={`bg-gradient-to-r ${pillar.bg.replace("bg-", "from-")} to-chittoor-green/20 p-8 rounded-t-lg relative overflow-hidden`}
            aria-hidden="true"
          >
            {/* Decorative pattern overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30,0 L60,30 L30,60 L0,30 Z' fill='%23ffffff'/%3E%3C/svg%3E')] bg-repeat"></div>

            <div className="relative z-10">
              <div className="text-3xl flex items-center gap-4 text-white drop-shadow-lg">
                <div
                  className={`p-4 rounded-2xl bg-white/20 backdrop-blur-sm shadow-xl border border-white/30 group-hover:scale-110 transition-all duration-300`}
                >
                  <div className="text-white text-2xl">{pillar.icon}</div>
                </div>
                <div>
                  <h2 className="block text-2xl font-bold">{pillar.title}</h2>
                  <span
                    className={`inline-block text-sm px-3 py-1 rounded-full mt-2 font-medium ${
                      pillar.status === "active"
                        ? "bg-green-500/20 text-green-100 border border-green-300/30"
                        : "bg-blue-500/20 text-blue-100 border border-blue-300/30"
                    }`}
                  >
                    {pillar.status === "active"
                      ? "🟢 Active Project"
                      : "🔵 In Planning"}
                  </span>
                </div>
              </div>
              <DialogDescription className="text-white/90 text-lg mt-4 font-medium">
                Chittoor's Initiative • Sustainable Development
              </DialogDescription>
            </div>
          </div>

          {/* Main content with colorful styling */}
          <div className="p-8 space-y-6">
            {/* Description with colorful accent */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-100 shadow-sm">
              <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${pillar.bg}`}></div>
                About This Pillar
              </h4>
              <p className="text-gray-700 leading-relaxed text-lg">
                {pillar.description}
              </p>
            </div>

            {/* Enhanced content section */}
            <div className="bg-gradient-to-br from-white to-gray-50/50 p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-800 [&>*]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-chittoor-green-dark [&>h4]:text-lg [&>h4]:font-medium [&>h4]:text-chittoor-blue [&>p]:text-gray-700 [&>p]:leading-relaxed [&>ul]:space-y-2 [&>li]:text-gray-700">
                  {pillar.detailContent}
                </div>
              </div>
            </div>

            {/* Colorful call-to-action section */}
            <div
              className={`bg-gradient-to-r ${pillar.bg.replace("bg-", "from-")}/10 to-chittoor-green/5 p-6 rounded-xl border border-gray-200/50`}
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Get Involved
                  </h4>
                  <p className="text-sm text-gray-600">
                    Learn more about how you can contribute to this initiative
                  </p>
                </div>
                <Button
                  className={`bg-gradient-to-r from-chittoor-green to-chittoor-green-dark hover:from-chittoor-green-dark hover:to-chittoor-green text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3 rounded-full`}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative bottom accent */}
          <div
            className={`h-2 bg-gradient-to-r ${pillar.bg.replace("bg-", "from-")} to-chittoor-green rounded-b-lg`}
          ></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PillarDialog;
