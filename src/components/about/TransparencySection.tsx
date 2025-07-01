
import React from "react";
import { motion } from "framer-motion";
import { FileText, DollarSign, Award } from "lucide-react";

const TransparencySection = () => {
  const documents = [
    {
      title: "Annual Report 2024",
      description: "Comprehensive overview of our activities and impact",
      icon: FileText,
      downloadUrl: "#"
    },
    {
      title: "Financial Statements",
      description: "Detailed breakdown of funds received and utilized",
      icon: DollarSign,
      downloadUrl: "#"
    },
    {
      title: "Registration Documents",
      description: "Official registration and legal compliance certificates",
      icon: Award,
      downloadUrl: "#"
    }
  ];

  return (
    <section className="py-16 bg-chittoor-offwhite">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Transparency & Reports</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download our official documents to learn more about our operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <a
                href={doc.downloadUrl}
                className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-center space-y-4">
                  <div className="bg-chittoor-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-chittoor-green/20 transition-colors">
                    <doc.icon className="w-8 h-8 text-chittoor-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{doc.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{doc.description}</p>
                    <div className="text-chittoor-green font-medium text-sm group-hover:underline">
                      Download PDF →
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
