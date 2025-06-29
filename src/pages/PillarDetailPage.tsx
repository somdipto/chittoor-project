
import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Users, Calendar, MapPin, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { pillarData } from "@/data/pillarData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PillarDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const pillar = pillarData.find(p => p.slug === slug);

  if (!pillar) {
    return <div>Pillar not found</div>;
  }

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
            className="mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-4 rounded-full bg-gradient-to-br ${pillar.color} text-white`}>
                {pillar.icon}
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  {pillar.title}
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                  {pillar.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={1}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-chittoor-green" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{pillar.stats.beneficiaries}</p>
                    <p className="text-sm text-gray-600">Beneficiaries</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Target className="w-8 h-8 text-chittoor-blue" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{pillar.stats.projects}</p>
                    <p className="text-sm text-gray-600">Active Projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-amber-500" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{pillar.stats.villages}</p>
                    <p className="text-sm text-gray-600">Villages Covered</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-green-500" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{pillar.stats.impact}</p>
                    <p className="text-sm text-gray-600">Impact Score</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Main Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={2}
            >
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>About This Pillar</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    {pillar.fullDescription}
                  </p>
                  
                  <h3 className="text-lg font-semibold mb-4">Key Objectives</h3>
                  <ul className="space-y-2">
                    {pillar.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-chittoor-green rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Current Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {pillar.currentProjects.map((project, index) => (
                      <div key={index} className="border-l-4 border-chittoor-green pl-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{project.name}</h4>
                          <Badge>{project.status}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={3}
            >
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Success Stories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {pillar.successStories.map((story, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                        <h4 className="font-semibold text-gray-900 mb-2">{story.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{story.description}</p>
                        <p className="text-xs text-gray-500">{story.impact}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Get Involved</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Want to contribute to this pillar? There are many ways you can help make a difference.
                  </p>
                  <div className="space-y-3">
                    <Link to="/collaborate">
                      <Button className="w-full bg-chittoor-green hover:bg-chittoor-green-dark">
                        Collaborate with Us
                      </Button>
                    </Link>
                    <Link to="/donate">
                      <Button variant="outline" className="w-full">
                        Make a Donation
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="ghost" className="w-full">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PillarDetailPage;
