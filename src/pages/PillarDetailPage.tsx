import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pillarsData } from "@/data/pillarData";

const PillarDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Find the pillar with the matching slug
  const pillar = pillarsData.find((p) => p.slug === slug);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // If no pillar is found, show a 404 message
  if (!pillar) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-xl mb-6">Pillar not found</p>
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-2 bg-chittoor-green text-white rounded-lg hover:bg-chittoor-green-dark transition-colors"
            >
              Go Back
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <button
                onClick={() => navigate(-1)}
                className="flex items-center text-chittoor-green hover:text-chittoor-green-dark mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Pillars
              </button>
              
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${pillar.bg} shadow-md`}>
                    {pillar.icon}
                  </div>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-chittoor-green/10 text-chittoor-green mb-3">
                    {pillar.status === 'active' ? 'Active Project' : 'In Planning'}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {pillar.title}
                  </h1>
                  <p className="text-lg text-gray-700">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-5xl mx-auto"
            >
              <div className="prose max-w-none">
                {pillar.detailContent}
              </div>
              
              {pillar.keyPoints && pillar.keyPoints.length > 0 && (
                <div className="mt-12 bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Key Points</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {pillar.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-chittoor-green mr-2 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Get Involved</h3>
                <p className="mb-6">
                  Interested in learning more about our {pillar.title.toLowerCase()} initiatives? 
                  Contact us to get involved or support our work.
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3 bg-chittoor-green text-white rounded-lg hover:bg-chittoor-green-dark transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PillarDetailPage;
