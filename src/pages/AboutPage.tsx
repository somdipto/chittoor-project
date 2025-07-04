import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutLayout from '@/components/about/AboutLayout';
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

// Wrapper component to include Navbar, Footer, and main content
const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
    <Navbar />
    <main className="flex-grow">
      {children}
      <GetInvolvedSection />
    </main>
    <Footer />
  </div>
);

const AboutPage = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<AboutLayout />}>
          <Route index element={<Navigate to="story" replace />} />
          <Route path="story" element={<ProjectStory />} />
          <Route path="aim" element={<ProjectAim />} />
          <Route path="vision" element={<ProjectVision />} />
          <Route path="goals" element={<ProjectGoals />} />
          <Route path="objectives" element={<ProjectObjectives />} />
          <Route path="pillars" element={<ProjectPillars />} />
          <Route path="timeline" element={<ProjectTimeline />} />
          <Route path="allies" element={<ProjectAllies />} />
          <Route path="atria-legacy" element={<AtriaBackgroundSection />} />
          <Route path="team" element={<ExecutiveTeam />} />
        </Route>
      </Routes>
    </PageLayout>
  );
};

export default AboutPage;
