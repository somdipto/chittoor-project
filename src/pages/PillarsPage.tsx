
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Lightbulb, Leaf, Target, TreePine, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PillarsPage = () => {
  const pillars = [{
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
    impact: "500+ households powered"
  }, {
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
    impact: "300+ farmers trained"
  }, {
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
    impact: "1000+ students reached"
  }, {
    id: 4,
    title: "Agrotourism",
    slug: "agrotourism-wellness",
    description: "Farm tours and wellness retreats connecting urban visitors with rural life",
    fullDescription: "Creating sustainable tourism experiences that showcase farming practices, offer wellness retreats, and provide additional income streams for rural communities through authentic cultural exchanges.",
    icon: <Leaf className="w-8 h-8" />,
    color: "from-green-600 to-teal-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-700",
    status: "Active",
    impact: "50+ tourism experiences"
  }];

  const fadeIn = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6
      }
    })
  };

  return <div className="min-h-screen bg-gradient-to-b from-white to-chittoor-offwhite/30">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container px-4 sm:px-6 mx-auto">
          {/* Hero Section */}
          <motion.div className="text-center mb-16" initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-chittoor-green to-chittoor-blue">Our Four Pillars</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the core areas of our work that drive sustainable development and community transformation in Chittoor district.
            </p>
          </motion.div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pillars.map((pillar, index) => <motion.div key={pillar.id} initial="hidden" animate="visible" variants={fadeIn} custom={index}>
                <Card className={`h-full transition-all duration-300 hover:shadow-xl hover:scale-105 ${pillar.bgColor} ${pillar.borderColor} border-2`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-br ${pillar.color} text-white`}>
                        {pillar.icon}
                      </div>
                      <Badge variant={pillar.status === 'Active' ? 'default' : 'secondary'} className={pillar.status === 'Active' ? 'bg-green-100 text-green-800' : ''}>
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
                    
                    <div className="flex justify-center items-center text-sm text-gray-500 mb-4">
                      <span>{pillar.impact}</span>
                    </div>

                    <Link to={`/pillars/${pillar.slug}`}>
                      <Button className={`w-full bg-gradient-to-r ${pillar.color} hover:opacity-90 text-white`}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </div>
      <Footer />
    </div>;
};

export default PillarsPage;
