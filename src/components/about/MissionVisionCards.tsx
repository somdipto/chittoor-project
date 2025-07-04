
import React from "react";
import { motion } from "framer-motion";
import { Landmark, Globe, ArrowRight } from "lucide-react";

const MissionVisionCards = () => {
  const cards = [
    {
      title: "Our Mission",
      description: "To transform Chittoor into a model of sustainable development through innovative agricultural practices and community empowerment.",
      icon: <Landmark className="h-8 w-8 text-blue-700" />,
      color: "from-blue-50 to-blue-100",
      border: "border-l-4 border-blue-600",
      link: {
        text: "Read our full mission statement",
        url: "#"
      },
      stats: [
        { value: "10,000+", label: "Farmers to benefit" },
        { value: "100+", label: "Villages covered" }
      ]
    },
    {
      title: "Our Vision",
      description: "To establish Chittoor as a beacon of sustainable agriculture and rural prosperity, creating a replicable model for the nation.",
      icon: <Globe className="h-8 w-8 text-green-700" />,
      color: "from-green-50 to-green-100",
      border: "border-l-4 border-green-600",
      link: {
        text: "View our strategic plan",
        url: "#"
      },
      stats: [
        { value: "44 Cr+", label: "Farming families in India" },
        { value: "2025", label: "Target year for initial goals" }
      ]
    }
  ];

  return (
    <section className="relative py-16 bg-gray-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTVjLTguMjg0IDAtMTUgNi43MTYtMTUgMTVzNi43MTYgMTUgMTUgMTUgMTUtNi43MTYgMTUtMTUtNi43MTYtMTUtMTUtMTVtMC0xNWMxNi41NDkgMCAzMCAxMy40NTEgMzAgMzBzLTEzLjQ1MSAzMC0zMCAzMFMwIDE2LjU0OSAwIDMwczEzLjQ1MSAzMCAzMCAzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWVlZWVlIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            GOVERNMENT INITIATIVE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-800">Mission & Vision</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Guiding principles that drive our commitment to Chittoor's sustainable future
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className={`bg-gradient-to-br ${card.color} ${card.border} rounded-r-lg h-full p-8 shadow-sm hover:shadow-md transition-shadow`}>
                <div className="flex flex-col h-full">
                  <div className="flex-shrink-0">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-6">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                    <p className="text-gray-700 mb-6">{card.description}</p>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {card.stats.map((stat, i) => (
                        <div key={i} className="text-center p-3 bg-white/50 rounded-lg">
                          <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <a 
                      href={card.link.url}
                      className="inline-flex items-center text-blue-700 font-medium group mt-auto"
                    >
                      {card.link.text}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Government Stamp */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-center">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Approved by</div>
              <div className="text-lg font-bold text-blue-900">Government of Andhra Pradesh</div>
              <div className="text-sm text-gray-600 mt-1">Department of Agriculture & Farmers' Welfare</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionCards;
