
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectStory from '@/components/about/ProjectStory';
import ProjectAim from '@/components/about/ProjectAim';
import ProjectVision from '@/components/about/ProjectVision';
import ProjectGoals from '@/components/about/ProjectGoals';
import ProjectObjectives from '@/components/about/ProjectObjectives';
import ProjectPillars from '@/components/about/ProjectPillars';
import ProjectTimeline from '@/components/about/ProjectTimeline';
import ProjectAllies from '@/components/about/ProjectAllies';
import AtriaBackgroundSection from '@/components/about/AtriaBackgroundSection';
import ExecutiveTeam from '@/components/about/ExecutiveTeam';
import GetInvolvedSection from '@/components/about/GetInvolvedSection';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />
      <main className="flex-1">
        <ProjectStory />
        <ProjectAim />
        <ProjectVision />
        <ProjectGoals />
        <ProjectObjectives />
        <ProjectPillars />
        <ProjectTimeline />
        <ProjectAllies />
        <AtriaBackgroundSection />
        <ExecutiveTeam />
        <GetInvolvedSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
