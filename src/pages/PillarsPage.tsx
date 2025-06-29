
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Lightbulb, Heart, Target, TreePine, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PillarsPage = () => {
  const pillars = [
    {
      id: 1,
      title: "Renewable Energy",
      slug: "renewable-energy",
      description: "Sustainable power solutions for rural communities",
      fullDescription: "Implementing solar, wind, and biogas systems to provide clean, reliable energy access to remote villages while reducing carbon footprint.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-700",
      status: "Active",
      impact: "500+ households powered",
      projects: 12
    },
    {
      id: 2,
      title: "Sustainable Agriculture",
      slug: "sustainable-agriculture",
      description: "Modern farming techniques for better yields",
      fullDescription: "Promoting organic farming, crop rotation, and innovative irrigation methods to improve agricultural productivity while preserving soil health.",
      icon: <TreePine className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-700",
      status: "Active",
      impact: "300+ farmers trained",
      projects: 8
    },
    {
      id: 3,
      title: "Education & Skill Development",
      slug: "education-skill-development",
      description: "Empowering communities through knowledge",
      fullDescription: "Establishing learning centers, vocational training programs, and digital literacy initiatives to enhance educational opportunities.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      status: "Active",
      impact: "1000+ students reached",
      projects: 15
    },
    {
      id: 4,
      title: "Healthcare Initiatives",
      slug: "healthcare-initiatives",
      description: "Accessible healthcare for all",
      fullDescription: "Mobile health units, telemedicine services, and health awareness programs to ensure quality healthcare reaches every corner of the district.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-700",
      status: "Active",
      impact: "50+ medical camps",
      projects: 6
    },
    {
      id: 5,
      title: "Women Empowerment",
      slug: "women-empowerment",
      description: "Supporting women entrepreneurs and leaders",
      fullDescription: "Self-help groups, microfinance programs, and skill development workshops to enhance women's economic participation and leadership.",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-700",
      status: "Active",
      impact: "200+ women empowered",
      projects: 10
    },
    {
      id: 6,
      title: "Innovation Hub",
      slug: "innovation-hub",
      description: "Technology-driven solutions for rural challenges",
      fullDescription: "Research and development center focusing on appropriate technology solutions for rural development challenges.",
      icon: <Target className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      textColor: "text-teal-700",
      status: "Planning",
      impact: "5+ innovations developed",
      projects: 3
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-chittoor-offwhite/30">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container px-4 sm:px-6 mx-auto">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-chittoor-green to-chittoor-blue">
              Our Six Pillars
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the core areas of our work that drive sustainable development and community transformation in Chittoor district.
            </p>
          </motion.div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                custom={index}
              >
                <Card className={`h-full transition-all duration-300 hover:shadow-xl hover:scale-105 ${pillar.bgColor} ${pillar.borderColor} border-2`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-br ${pillar.color} text-white`}>
                        {pillar.icon}
                      </div>
                      <Badge 
                        variant={pillar.status === 'Active' ? 'default' : 'secondary'}
                        className={pillar.status === 'Active' ? 'bg-green-100 text-green-800' : ''}
                      >
                        {pillar.status}
                      </Badge>
                    </div>
                    <CardTitle className={`text-xl font-bold ${pillar.textColor}`}>
                      {pillar.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {pillar.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600 mb-4">
                      {pillar.fullDescription}
                    </p>
                    
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span>{pillar.impact}</span>
                      <span>{pillar.projects} projects</span>
                    </div>

                    <Link to={`/pillars/${pillar.slug}`}>
                      <Button 
                        className={`w-full bg-gradient-to-r ${pillar.color} hover:opacity-90 text-white`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PillarsPage;
