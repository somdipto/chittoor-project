import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Battery, 
  Flower, 
  School, 
  Users, 
  ArrowRight, 
  Leaf, 
  TestTube
} from 'lucide-react';

const PillarsPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Chittoor Pillars</h1>
              <p className="text-lg text-gray-700">
                Project Chittoor reverses rural-to-urban migration by providing farmers with the tools they need
                to thrive on their land, serving as a blueprint for rural revitalization across India.
              </p>
              
              {/* Quick navigation links */}
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <button 
                  onClick={() => scrollToSection('renewable-energy')}
                  className="px-4 py-2 bg-chittoor-green/10 text-chittoor-green rounded-full text-sm hover:bg-chittoor-green/20 transition-all"
                >
                  Renewable Energy
                </button>
                <button 
                  onClick={() => scrollToSection('agro-wellness')}
                  className="px-4 py-2 bg-chittoor-earth/10 text-chittoor-earth rounded-full text-sm hover:bg-chittoor-earth/20 transition-all"
                >
                  Agro-Wellness
                </button>
                <button 
                  onClick={() => scrollToSection('education')}
                  className="px-4 py-2 bg-chittoor-blue/10 text-chittoor-blue rounded-full text-sm hover:bg-chittoor-blue/20 transition-all"
                >
                  Education
                </button>
                <button 
                  onClick={() => scrollToSection('innovation')}
                  className="px-4 py-2 bg-chittoor-green-dark/10 text-chittoor-green-dark rounded-full text-sm hover:bg-chittoor-green-dark/20 transition-all"
                >
                  Innovation
                </button>
              </div>
            </motion.div>

            {/* Renewable Energy Section */}
            <motion.div 
              id="renewable-energy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24 items-center"
            >
              <div className="bg-gradient-to-r from-chittoor-green-light/10 to-chittoor-green/10 p-8 lg:p-12 rounded-2xl relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-chittoor-green-light/20 rounded-full blur-2xl"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-chittoor-green to-chittoor-green-dark p-4 rounded-full inline-flex mb-6 shadow-lg">
                    <Battery className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Renewable Energy</h2>
                  <p className="text-gray-700 mb-6">
                    We are establishing a distributed solar infrastructure where farmers become energy producers.
                    By collectivising solar energy, we offer reliable supply and better contracts, reducing costs
                    through third-party financing. Each acre of farmland becomes energy self-sufficient, adding
                    additional revenue streams through power generation.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold mb-2 text-chittoor-green-dark">Agrivoltaics</h3>
                      <p className="text-sm text-gray-600">Solar panels co-located with agriculture for dual income from land</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold mb-2 text-chittoor-green-dark">Rooftop Solar</h3>
                      <p className="text-sm text-gray-600">Installations on schools, community centers, and homes</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold mb-2 text-chittoor-green-dark">Cold Storage</h3>
                      <p className="text-sm text-gray-600">Energy-efficient storage for various produce types</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold mb-2 text-chittoor-green-dark">Battery Storage</h3>
                      <p className="text-sm text-gray-600">Backup power for critical operations during outages</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-r from-chittoor-green-light to-chittoor-green rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
                <div className="p-10">
                  <Battery className="w-32 h-32 text-white/90" />
                </div>
              </div>
            </motion.div>

            {/* Agro-Wellness Tourism Section */}
            <motion.div 
              id="agro-wellness"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24 items-center"
            >
              <div className="order-2 lg:order-1 aspect-video bg-gradient-to-r from-chittoor-earth-light to-chittoor-earth rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
                <div className="p-10">
                  <Leaf className="w-32 h-32 text-white/90" />
                </div>
              </div>
              <div className="order-1 lg:order-2 bg-gradient-to-r from-chittoor-earth/10 to-chittoor-earth-light/10 p-8 lg:p-12 rounded-2xl relative overflow-hidden">
                <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-chittoor-earth-light/20 rounded-full blur-2xl"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-chittoor-earth to-chittoor-earth-light p-4 rounded-full inline-flex mb-6 shadow-lg">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Agro-Wellness Tourism</h2>
                  <p className="text-gray-700 mb-6">
                    A flourishing rural landscape presents the perfect backdrop for agro-tourism and wellness.
                    Farmers open their doors to city dwellers seeking a return to nature, offering farm tours,
                    hands-on farming experiences, and a farm-to-table dining experience. Wellness retreats
                    focusing on Ayurveda, meditation, and natural healing provide additional income while
                    preserving the quiet serenity of rural life.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold mb-2 text-chittoor-earth">Farm Tours</h3>
                      <p className="text-sm text-gray-600">Interactive tours showcasing sustainable farming practices</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold mb-2 text-chittoor-earth">Hands-on Experiences</h3>
                      <p className="text-sm text-gray-600">Visitors participate in farming and food production</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold mb-2 text-chittoor-earth">Farm-to-Table Dining</h3>
                      <p className="text-sm text-gray-600">Fresh, on-site produce served in authentic settings</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold mb-2 text-chittoor-earth">Wellness Retreats</h3>
                      <p className="text-sm text-gray-600">Ayurveda, meditation, and natural healing experiences</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Transformative Education Section */}
            <motion.div 
              id="education"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24 items-center"
            >
              <div className="bg-gradient-to-r from-chittoor-blue-light/10 to-chittoor-blue/10 p-8 lg:p-12 rounded-2xl relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-chittoor-blue-light/20 rounded-full blur-2xl"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-chittoor-blue to-chittoor-blue-dark p-4 rounded-full inline-flex mb-6 shadow-lg">
                    <School className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Transformative Education</h2>
                  <p className="text-gray-700 mb-6">
                    Education is the cornerstone of long-term change. Project Chittoor introduces a state-of-the-art
                    digital learning hub, bridging the gap between traditional and future-ready education. Efforts
                    focus on bringing educational standards and resources on par with institutions in metro cities,
                    empowering local students to transition from outdated methods to lifelong, self-directed learning.
                    The village becomes a benchmark for rural education.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold mb-2 text-chittoor-blue-dark">Digital Learning</h3>
                      <p className="text-sm text-gray-600">High-speed internet and smart classrooms with learning platforms</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold mb-2 text-chittoor-blue-dark">VR/AR Labs</h3>
                      <p className="text-sm text-gray-600">Immersive learning experiences for scientific exploration</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold mb-2 text-chittoor-blue-dark">Adaptive Learning</h3>
                      <p className="text-sm text-gray-600">AI-powered personalized education pathways</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold mb-2 text-chittoor-blue-dark">Remote Mentorship</h3>
                      <p className="text-sm text-gray-600">Digital platform connecting students with industry experts</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-r from-chittoor-blue-light to-chittoor-blue rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
                <div className="p-10">
                  <School className="w-32 h-32 text-white/90" />
                </div>
              </div>
            </motion.div>

            {/* Test Bed for Innovation */}
            <motion.div 
              id="innovation"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24 items-center"
            >
              <div className="order-2 lg:order-1 aspect-video bg-gradient-to-r from-chittoor-green-dark to-chittoor-green rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
                <div className="p-10">
                  <TestTube className="w-32 h-32 text-white/90" />
                </div>
              </div>
              <div className="order-1 lg:order-2 bg-gradient-to-r from-chittoor-green-dark/10 to-chittoor-green/10 p-8 lg:p-12 rounded-2xl relative overflow-hidden">
                <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-chittoor-green-dark/20 rounded-full blur-2xl"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-chittoor-green-dark to-chittoor-green p-4 rounded-full inline-flex mb-6 shadow-lg">
                    <TestTube className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Test Bed for Innovation</h2>
                  <p className="text-gray-700 mb-6">
                    Project Chittoor serves as a test bed for young entrepreneurs to test their concepts, models & 
                    prototypes. By aligning their interests with the four pillars of sustainability, this initiative fosters
                    innovation and practical solutions for real-world challenges. The Living Lab provides an ecosystem
                    for research and development across multiple domains.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold mb-2 text-chittoor-green-dark">Data & IoT</h3>
                      <p className="text-sm text-gray-600">Sensors and real-time data collection systems for agriculture</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold mb-2 text-chittoor-green-dark">Drone Imagery</h3>
                      <p className="text-sm text-gray-600">High-resolution crop imaging and precision agriculture</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold mb-2 text-chittoor-green-dark">Sustainable Practices</h3>
                      <p className="text-sm text-gray-600">Research on soil health and climate-resilient crops</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold mb-2 text-chittoor-green-dark">Water Management</h3>
                      <p className="text-sm text-gray-600">Water-saving irrigation and rainwater harvesting technologies</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Impact Section */}
            <motion.div 
              id="impact"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-4xl mx-auto bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h2 className="text-3xl font-bold mb-4 text-center">The Impact</h2>
              <p className="text-gray-700 mb-6">
                Project Chittoor reverses rural-to-urban migration by providing farmers with the tools they need
                to thrive on their land. It keeps rural communities intact and turns marginal farmers into
                prosperous, empowered entrepreneurs. Project Chittoor serves as a blueprint for rural
                revitalisation for the rest of India.
              </p>
              <p className="text-gray-700">
                The initiative started with 600 acres in Chittoor district, Andhra Pradesh, where landowners
                have contributed to a farmer-operated co-operative. Based on the overwhelming response, we
                are expanding aggressively to 6,000 acres by December and 60,000 acres within 24 months.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PillarsPage;
