import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Timeline from '../components/Timeline';
import ImpactMetrics from '../components/ImpactMetrics';
import TeamGrid from '../components/TeamGrid';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />
      <main className="flex-1">
        {/* Introduction */}
        <section className="text-center py-12 px-4">
          <h1 className="text-4xl font-bold mb-6">About The Chittoor Project</h1>
          <p className="text-xl max-w-3xl mx-auto">The Chittoor Project is a community-driven initiative dedicated to empowering rural students through education, mentorship, and technology, fostering a brighter future for the region.</p>
          <img src="/images/about/community_engagement.jpg" alt="Community Engagement" className="mt-6 w-full max-w-4xl mx-auto rounded-lg shadow-md" />
        </section>

      {/* Mission & Vision Cards */}
      <section className="py-12 px-4 bg-white">
        <div className="flex justify-center gap-8 max-w-4xl mx-auto">
          <div className="w-1/2 p-6 border rounded-lg shadow-sm text-center">
            <img src="/images/about/icons/mission_icon.svg" alt="Mission Icon" className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p>To provide accessible educational resources, mentorship, and community support to empower students in Chittoor to achieve their full academic and personal potential.</p>
          </div>
          <div className="w-1/2 p-6 border rounded-lg shadow-sm text-center">
            <img src="/images/about/icons/vision_icon.svg" alt="Vision Icon" className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p>A future where every student from Chittoor has the opportunity to access quality education, thrive in their chosen careers, and contribute positively to their communities.</p>
          </div>
        </div>
      </section>

      {/* Key Programs Grid */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <img src="/images/about/programs/scholarship_fund.jpg" alt="Scholarship Fund" className="w-full h-48 object-cover rounded-lg shadow-md mb-4" />
            <h3 className="text-xl font-semibold">Scholarship Fund</h3>
            <p className="mt-2">Provides financial assistance to deserving students from underprivileged backgrounds, enabling them to pursue higher education and vocational training.</p>
          </div>
          <div className="text-center">
            <img src="/images/about/programs/mentorship_program.jpg" alt="Mentorship Program" className="w-full h-48 object-cover rounded-lg shadow-md mb-4" />
            <h3 className="text-xl font-semibold">Mentorship Program</h3>
            <p className="mt-2">Connects students with experienced professionals and academics who provide guidance, career counseling, and personal development support.</p>
          </div>
          <div className="text-center">
            <img src="/images/about/programs/community_engagement_events.jpg" alt="Community Engagement" className="w-full h-48 object-cover rounded-lg shadow-md mb-4" />
            <h3 className="text-xl font-semibold">Community Engagement Events</h3>
            <p className="mt-2">Organizes workshops, seminars, and cultural events to foster a vibrant learning environment and promote community participation in education.</p>
          </div>
        </div>
      </section>

      {/* Our Story (Visual Timeline) */}
      <section className="py-12 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <Timeline />
      </section>

      {/* Impact Metrics (Animated Counters) */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
        <ImpactMetrics />
      </section>

      {/* Meet the Team (Photo Grid) */}
      <section className="py-12 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
        <TeamGrid />
      </section>

      {/* Partners & Supporters */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Partners & Supporters</h2>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center gap-8 mb-8">
            <img src="/images/about/partners/partner1.png" alt="Partner Logo 1" className="h-12" />
            <img src="/images/about/partners/partner2.png" alt="Partner Logo 2" className="h-12" />
            <img src="/images/about/partners/partner3.png" alt="Partner Logo 3" className="h-12" />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <img src="/images/about/testimonials/partner_testimonial.jpg" alt="Partner Testimonial" className="h-24 w-24 rounded-full mx-auto mb-4 object-cover" />
            <p className="text-lg italic">"The Chittoor Project is making a real difference in the lives of students. We are proud to be a partner in their mission, witnessing firsthand the positive change they bring to the community."</p>
            <p className="mt-4 font-semibold">- Dr. Anjali Sharma, Director, Rural Education Foundation</p>
          </div>
        </div>
      </section>

      {/* Success Stories / Testimonials */}
      <section className="py-12 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <img src="/images/about/testimonials/student1.jpg" alt="Beneficiary 1" className="h-20 w-20 rounded-full mx-auto mb-4 object-cover" />
            <p className="italic">"The mentorship program gave me the confidence to pursue my dreams. I am now studying engineering at a top university, something I never thought possible."</p>
            <p className="mt-4 font-semibold text-right">- Priya, Mentee</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <img src="/images/about/testimonials/student2.jpg" alt="Beneficiary 2" className="h-20 w-20 rounded-full mx-auto mb-4 object-cover" />
            <p className="italic">"Thanks to the scholarship, I can focus on my studies without financial worries. I am grateful for the support that has opened up so many opportunities."</p>
            <p className="mt-4 font-semibold text-right">- Rajesh, Scholarship Recipient</p>
          </div>
        </div>
      </section>

      {/* Press & Recognition */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Press & Recognition</h2>
        <div className="flex justify-center items-center gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <img src="/images/about/press/press1.png" alt="Publication 1" className="h-12 mb-2" />
            <p>"A grassroots initiative changing lives in rural India." - The Indian Express</p>
          </div>
          <div className="text-center">
            <img src="/images/about/press/press2.png" alt="Publication 2" className="h-12 mb-2" />
            <p>"Empowering the next generation of leaders in Chittoor." - Rural Development Journal</p>
          </div>
        </div>
      </section>

      {/* Get Involved (Call-to-Actions) */}
      <section className="py-12 px-4 bg-gray-200 relative overflow-hidden">
        <img src="/images/about/get_involved_bg.jpg" alt="Get Involved Background" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center mb-8">Get Involved</h2>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center"><img src="/images/about/icons/donate_icon.svg" alt="Donate Icon" className="h-5 w-5 mr-2" /> Donate</button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center"><img src="/images/about/icons/volunteer_icon.svg" alt="Volunteer Icon" className="h-5 w-5 mr-2" /> Volunteer</button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center"><img src="/images/about/icons/partner_icon.svg" alt="Partner Icon" className="h-5 w-5 mr-2" /> Partner With Us</button>
          </div>
        </div>
      </section>

      {/* Transparency & Reports */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Transparency & Reports</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <a href="/reports/annual_report.pdf" target="_blank" className="text-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <img src="/images/about/icons/pdf_icon.svg" alt="Annual Report Icon" className="h-24 w-24 mx-auto mb-2" />
            <p className="font-semibold">Annual Report 2024</p>
          </a>
          <a href="/reports/financials.pdf" target="_blank" className="text-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <img src="/images/about/icons/pdf_icon.svg" alt="Financials Icon" className="h-24 w-24 mx-auto mb-2" />
            <p className="font-semibold">Financial Statements</p>
          </a>
          <a href="/reports/registration_documents.pdf" target="_blank" className="text-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <img src="/images/about/icons/pdf_icon.svg" alt="Registration Icon" className="h-24 w-24 mx-auto mb-2" />
            <p className="font-semibold">Registration Documents</p>
          </a>
        </div>
      </section>

      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
