
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionVisionHome from "@/components/MissionVisionHome";
import AboutProjectsSection from "@/components/AboutProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 sm:pt-20">
        <Hero />
        <MissionVisionHome />
        <AboutProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
