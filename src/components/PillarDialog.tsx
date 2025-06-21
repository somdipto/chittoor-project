
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pillar } from '@/data/pillarData';

interface PillarDialogProps {
  pillar: Pillar;
  children: React.ReactNode;
}

const PillarDialog = ({ pillar, children }: PillarDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <div className={`p-2 rounded-full ${pillar.bg}`}>
              {pillar.icon}
            </div>
            <span>{pillar.title}</span>
          </DialogTitle>
          <DialogDescription>
            Project Chittoor Initiative
          </DialogDescription>
        </DialogHeader>
        {pillar.detailContent}
      </DialogContent>
    </Dialog>
  );
};

export default PillarDialog;
