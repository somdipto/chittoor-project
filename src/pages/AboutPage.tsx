
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroSection from '@/components/about/IntroSection';
import ProblemSection from '@/components/about/ProblemSection';
import AtriaBackgroundSection from '@/components/about/AtriaBackgroundSection';
import MissionVisionCards from '@/components/about/MissionVisionCards';
import ProgramsGrid from '@/components/about/ProgramsGrid';
import ImpactMetrics from '@/components/about/ImpactMetrics';
import LivingLabSection from '@/components/about/LivingLabSection';
import GetInvolvedSection from '@/components/about/GetInvolvedSection';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />
      <main className="flex-1">
        <IntroSection />
        <ProblemSection />
        <AtriaBackgroundSection />
        <MissionVisionCards />
        <ProgramsGrid />
        <ImpactMetrics />
        <LivingLabSection />
        <GetInvolvedSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
