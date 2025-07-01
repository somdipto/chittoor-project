
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroSection from '@/components/about/IntroSection';
import MissionVisionCards from '@/components/about/MissionVisionCards';
import ProgramsGrid from '@/components/about/ProgramsGrid';
import OurStory from '@/components/about/OurStory';
import ImpactMetrics from '@/components/about/ImpactMetrics';
import TeamGrid from '@/components/about/TeamGrid';
import PartnersSection from '@/components/about/PartnersSection';
import TestimonialsSection from '@/components/about/TestimonialsSection';
import PressSection from '@/components/about/PressSection';
import GetInvolvedSection from '@/components/about/GetInvolvedSection';
import TransparencySection from '@/components/about/TransparencySection';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />
      <main className="flex-1">
        <IntroSection />
        <MissionVisionCards />
        <ProgramsGrid />
        <OurStory />
        <ImpactMetrics />
        <TeamGrid />
        <PartnersSection />
        <TestimonialsSection />
        <PressSection />
        <GetInvolvedSection />
        <TransparencySection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
