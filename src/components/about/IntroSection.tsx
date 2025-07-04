
import React from "react";
import { motion } from "framer-motion";
import { Leaf, Users, BarChart2, MapPin } from "lucide-react";

const IntroSection = () => {
  const stats = [
    { value: "600+", label: "Acres of Land", icon: <Leaf className="h-6 w-6 text-green-600" /> },
    { value: "500+", label: "Farmers Empowered", icon: <Users className="h-6 w-6 text-blue-600" /> },
    { value: "10+", label: "Sustainable Villages", icon: <BarChart2 className="h-6 w-6 text-amber-600" /> },
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Initiative Header Stripe */}
      <div className="bg-gradient-to-r from-green-700 to-green-800 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>చిత్తూరు ప్రాజెక్ట్ | Chittoor's Initiative</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>Last Updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {/* Main Hero Section */}
      <div className="relative bg-gradient-to-r from-green-50 to-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="h-12 w-1 bg-green-600 rounded-full"></div>
                <span className="text-green-700 font-semibold text-lg">SUSTAINABLE DEVELOPMENT INITIATIVE</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Chittoor's Initiative
                <span className="block text-green-800 text-2xl md:text-3xl mt-2 font-normal">
                  Empowering Communities Through Sustainable Development
                </span>
              </h1>
              
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
                <p className="text-gray-700 font-medium">
                  A comprehensive initiative focused on sustainable agriculture, education, and community development in the Chittoor region
                </p>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                    className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="p-2 bg-green-50 rounded-lg">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="pt-6">
                <a 
                  href="#initiatives" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                >
                  Explore Our Initiatives
                  <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="/images/chittoor-sustainable-farming.jpg"
                  alt="Sustainable Farming in Chittoor"
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-xl"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-5 w-5 text-green-300" />
                    <span className="text-green-100">Chittoor District, Andhra Pradesh</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Sustainable Agriculture</h3>
                  <p className="text-green-100 opacity-90">Transforming traditional farming with eco-friendly practices</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-100 rounded-full opacity-20 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-amber-100 rounded-full opacity-20 -z-10"></div>
              
              {/* Achievement badges */}
              <div className="absolute -bottom-4 right-8 bg-white px-3 py-1 rounded-full shadow-md text-xs font-medium text-green-800 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Active Since 2023
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-green-400 to-amber-400"></div>
      </div>
    </section>
  );
};

export default IntroSection;
