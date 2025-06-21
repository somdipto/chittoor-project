import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { GraduationCap, Book, School, Users } from "lucide-react";
import { Link } from "react-router-dom";
const XceleratorPage = () => {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const courseCategories = [
    {
      id: "elementary",
      title: "Elementary (K-5)",
      icon: <Book className="h-5 w-5 mr-2" />,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: "middle",
      title: "Middle School (6-8)",
      icon: <School className="h-5 w-5 mr-2" />,
      color: "from-blue-400 to-teal-500",
    },
    {
      id: "high",
      title: "High School (9-12)",
      icon: <GraduationCap className="h-5 w-5 mr-2" />,
      color: "from-amber-400 to-orange-500",
    },
    {
      id: "teachers",
      title: "Teacher Resources",
      icon: <Users className="h-5 w-5 mr-2" />,
      color: "from-green-400 to-emerald-500",
    },
  ];
  const courses = [
    {
      title: "Fun with Numbers",
      subject: "Mathematics",
      level: "Elementary",
      category: "elementary",
      description:
        "Interactive games and activities to build basic number skills and mathematical thinking.",
      image:
        "data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200' fill='%23f0f9ff'/%3E%3Cpath d='M40,100 L70,60 L100,100 L130,60 L160,100' stroke='%234f46e5' stroke-width='4' fill='none'/%3E%3Ccircle cx='100' cy='100' r='30' fill='%23ede9fe'/%3E%3Ctext x='100' y='105' font-family='Arial' font-size='20' text-anchor='middle' fill='%236366f1'%3E123%3C/text%3E%3C/svg%3E",
    },
    {
      title: "Exploring Science",
      subject: "Science",
      level: "Elementary",
      category: "elementary",
      description:
        "Discover the wonders of science through hands-on experiments and engaging stories.",
      image:
        "data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200' fill='%23ecfdf5'/%3E%3Cpath d='M100,40 L100,160' stroke='%2310b981' stroke-width='2' fill='none'/%3E%3Cpath d='M80,60 C80,40 120,40 120,60 L120,140 C120,160 80,160 80,140 Z' fill='%23d1fae5'/%3E%3Ccircle cx='100' cy='60' r='15' fill='%2334d399'/%3E%3Ccircle cx='100' cy='100' r='10' fill='%2334d399'/%3E%3Ccircle cx='100' cy='140' r='15' fill='%2334d399'/%3E%3C/svg%3E",
    },
    {
      title: "Creative Writing",
      subject: "Language Arts",
      level: "Elementary",
      category: "elementary",
      description:
        "Learn to express yourself through stories, poems, and creative writing activities.",
      image:
        "data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200' fill='%23ffedd5'/%3E%3Cpath d='M40,160 L40,60 L160,60 L160,160 Z' stroke='%23ea580c' stroke-width='2' fill='%23fef3c7'/%3E%3Cpath d='M60,80 L140,80 M60,100 L120,100 M60,120 L140,120 M60,140 L100,140' stroke='%23fb923c' stroke-width='2'/%3E%3Cpath d='M150,40 L130,60 L150,40 L170,60 Z' fill='%23fdba74'/%3E%3C/svg%3E",
    },
    {
      title: "Algebra Fundamentals",
      subject: "Mathematics",
      level: "Middle School",
      category: "middle",
      description:
        "Build a strong foundation in algebra through interactive lessons and practice problems.",
      image:
        "data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200' fill='%23e0f2fe'/%3E%3Cpath d='M40,140 L160,60' stroke='%230ea5e9' stroke-width='3'/%3E%3Ctext x='90' y='90' font-family='Arial' font-size='16' fill='%230284c7'%3Ey = mx + b%3C/text%3E%3Ccircle cx='80' cy='120' r='5' fill='%230ea5e9'/%3E%3Ccircle cx='120' cy='80' r='5' fill='%230ea5e9'/%3E%3C/svg%3E",
    },
    {
      title: "Earth Sciences",
      subject: "Science",
      level: "Middle School",
      category: "middle",
      description:
        "Explore geology, meteorology, and environmental science through virtual labs and projects.",
      image:
        "data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200' fill='%23f0fdfa'/%3E%3Ccircle cx='100' cy='100' r='60' fill='%23ccfbf1'/%3E%3Cpath d='M70,80 Q100,60 130,80 Q160,100 130,120 Q100,140 70,120 Q40,100 70,80' fill='%2314b8a6'/%3E%3Ccircle cx='80' cy='90' r='5' fill='%23ecfeff'/%3E%3Ccircle cx='110' cy='75' r='3' fill='%23ecfeff'/%3E%3C/svg%3E",
    },
    {
      title: "World History",
      subject: "Social Studies",
      level: "Middle School",
      category: "middle",
      description:
        "Journey through time with interactive timelines, primary sources, and engaging historical narratives.",
      image:
        "data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200' fill='%23faf5ff'/%3E%3Ccircle cx='100' cy='100' r='60' fill='%23f3e8ff'/%3E%3Cpath d='M80,50 L120,50 L120,150 L80,150 Z' fill='%23d8b4fe' stroke='%23a855f7' stroke-width='1'/%3E%3Cpath d='M60,130 L140,130 M60,110 L140,110 M60,90 L140,90 M60,70 L140,70' stroke='%23a855f7' stroke-width='1'/%3E%3C/svg%3E",
    },
    {
      title: "Advanced Calculus",
      subject: "Mathematics",
      level: "High School",
      category: "high",
      description:
        "Master calculus concepts through problem-solving, visualization tools, and real-world applications.",
      image:
        "data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200' fill='%23eff6ff'/%3E%3Cpath d='M40,140 C60,60 80,140 100,60 C120,140 140,60 160,140' stroke='%233b82f6' stroke-width='3' fill='none'/%3E%3Cpath d='M40,60 L160,60 M40,140 L160,140' stroke='%235b91f5' stroke-width='1' stroke-dasharray='5,5'/%3E%3Ctext x='140' y='50' font-family='Arial' font-size='16' fill='%232563eb'%3E∫f(x)%3C/text%3E%3C/svg%3E",
    },
    {
      title: "Lesson Planning Tools",
      subject: "Education",
      level: "Teacher Resources",
      category: "teachers",
      description:
        "Access customizable templates, assessment tools, and curriculum resources to enhance your teaching.",
      image:
        "data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200' fill='%23f5f3ff'/%3E%3Crect x='50' y='50' width='100' height='120' fill='%23ddd6fe' stroke='%238b5cf6' stroke-width='2'/%3E%3Cpath d='M60,70 L140,70 M60,90 L120,90 M60,110 L140,110 M60,130 L100,130 M60,150 L80,150' stroke='%238b5cf6' stroke-width='2'/%3E%3Ccircle cx='150' cy='40' r='15' fill='%23a78bfa'/%3E%3Crect x='145' y='35' width='10' height='10' fill='%23f5f3ff'/%3E%3C/svg%3E",
    },
  ];

  // Helper function to get gradient colors for a category
  const getCategoryGradient = (categoryId) => {
    switch (categoryId) {
      case "elementary":
        return {
          from: "#c084fc",
          to: "#8b5cf6",
        };
      case "middle":
        return {
          from: "#38bdf8",
          to: "#0ea5e9",
        };
      case "high":
        return {
          from: "#fb923c",
          to: "#f97316",
        };
      case "teachers":
      default:
        return {
          from: "#4ade80",
          to: "#22c55e",
        };
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="relative overflow-hidden">
        {/* Colorful background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 opacity-70"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50,15 A35,35 0 0,1 85,50 A35,35 0 0,1 50,85 A35,35 0 0,1 15,50 A35,35 0 0,1 50,15' stroke='%238b5cf6' stroke-width='0.5' fill='none' opacity='0.2'/%3E%3Cpath d='M30,15 L30,85 M40,15 L40,85 M50,15 L50,85 M60,15 L60,85 M70,15 L70,85 M15,30 L85,30 M15,40 L85,40 M15,50 L85,50 M15,60 L85,60 M15,70 L85,70' stroke='%23c084fc' stroke-width='0.3' stroke-dasharray='2,4' opacity='0.1'/%3E%3C/svg%3E\")",
            backgroundSize: "100px 100px",
          }}
        ></div>

        <main className="container relative z-10 pt-8 pb-16">
          {/* Hero section */}
          <section className="py-12 md:py-20 px-4">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-block mb-4">
                <div className="relative">
                  <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 opacity-30 rounded-full transform -rotate-6"></div>
                  <div className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold transform rotate-2 shadow-lg">
                    A New Way of Learning
                  </div>
                </div>
              </div>

              <motion.h1
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
                  Xcelerator
                </span>
                <span className="text-gray-800"> Learning Portal</span>
              </motion.h1>

              <motion.p
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                }}
                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              >
                An innovative K-12 educational platform designed to make
                learning interactive, engaging, and accessible for all students.
              </motion.p>

              <motion.div
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-full px-8 py-6 shadow-lg shadow-purple-300/30">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50 rounded-full px-8 py-6"
                >
                  Explore Curriculum
                </Button>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 1,
                  duration: 1,
                }}
                className="mt-16 max-w-4xl mx-auto relative"
              >
                <div className="absolute inset-0 blur-md bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-xl transform rotate-1"></div>
                <div className="relative bg-white/70 backdrop-blur-sm p-6 border border-purple-100 rounded-xl shadow-xl">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-4">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                        <GraduationCap className="h-6 w-6 text-indigo-600" />
                      </div>
                      <h3 className="text-gray-800 font-semibold mb-2">
                        Interactive Lessons
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Engaging content designed for different learning styles
                      </p>
                    </div>
                    <div className="p-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                        <Book className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-gray-800 font-semibold mb-2">
                        Personalized Learning
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Adaptive curriculum that adjusts to student progress
                      </p>
                    </div>
                    <div className="p-4">
                      <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                        <Users className="h-6 w-6 text-pink-600" />
                      </div>
                      <h3 className="text-gray-800 font-semibold mb-2">
                        Teacher Resources
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Comprehensive tools to enhance classroom instruction
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Course catalog section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Explore Our Courses
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse through our collection of interactive courses designed
                for students at every grade level.
              </p>
            </div>

            <Tabs
              defaultValue="elementary"
              className="w-full max-w-5xl mx-auto"
            >
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {courseCategories.map((category) => {
                    const gradientColors = getCategoryGradient(category.id);
                    return (
                      <TabsTrigger
                        key={category.id}
                        value={category.id}
                        className={`flex items-center data-[state=active]:bg-gradient-to-r data-[state=active]:border-0 data-[state=active]:shadow-lg rounded-full`}
                        style={
                          {
                            "--tw-gradient-from": gradientColors.from,
                            "--tw-gradient-to": gradientColors.to,
                          } as React.CSSProperties
                        }
                      >
                        {category.icon}
                        <span className="hidden sm:inline">
                          {category.title}
                        </span>
                        <span className="sm:hidden">
                          {category.title.split(" ")[0]}
                        </span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
              </div>

              {courseCategories.map((category) => (
                <TabsContent
                  key={category.id}
                  value={category.id}
                  className="px-4"
                >
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {courses
                      .filter((course) => course.category === category.id)
                      .map((course, index) => (
                        <motion.div key={index} variants={item}>
                          <Card className="overflow-hidden border-0 shadow-lg bg-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-xl h-full flex flex-col">
                            <div className="h-48 overflow-hidden">
                              <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                              />
                            </div>
                            <CardHeader>
                              <div className="flex justify-between items-start">
                                <CardTitle className="text-xl">
                                  {course.title}
                                </CardTitle>
                                <span
                                  className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${category.color} text-white`}
                                >
                                  {course.subject}
                                </span>
                              </div>
                              <CardDescription>
                                {course.description}
                              </CardDescription>
                            </CardHeader>
                            <CardFooter className="mt-auto border-t pt-4">
                              <Button
                                variant="ghost"
                                className={`text-sm w-full rounded-full hover:bg-gradient-to-r hover:text-white ${category.color}`}
                              >
                                Learn More
                              </Button>
                            </CardFooter>
                          </Card>
                        </motion.div>
                      ))}
                  </motion.div>
                  {courses.filter((course) => course.category === category.id)
                    .length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-gray-500">
                        No courses available in this category yet.
                      </p>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>

            <div className="flex justify-center mt-12">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full py-6 px-8 shadow-lg shadow-purple-200/50">
                View All Courses
              </Button>
            </div>
          </section>

          {/* Features section */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Choose Xcelerator?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our learning portal combines innovative teaching methods with
                  technology to provide a superior educational experience.
                </p>
              </div>

              <div className="relative">
                <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-3xl transform rotate-3"></div>
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl">
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    className="flex flex-col gap-8"
                  >
                    {[
                      {
                        title: "Personalized Learning Paths",
                        description:
                          "Our adaptive platform adjusts to each student's progress, providing tailored content that meets individual needs.",
                        color: "from-purple-400 to-indigo-500",
                      },
                      {
                        title: "Interactive Assessments",
                        description:
                          "Engaging quizzes, games, and challenges that make assessment fun while providing valuable feedback.",
                        color: "from-blue-400 to-sky-500",
                      },
                      {
                        title: "Comprehensive Curriculum",
                        description:
                          "Aligned with educational standards and covering all major subjects across K-12 grade levels.",
                        color: "from-emerald-400 to-green-500",
                      },
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-6 shadow-md border border-gray-50 hover:shadow-lg transition-shadow relative overflow-hidden"
                      >
                        <div
                          className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-10 rounded-bl-full`}
                        ></div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    className="flex flex-col gap-8"
                  >
                    {[
                      {
                        title: "Real-Time Progress Tracking",
                        description:
                          "Monitor achievement with detailed analytics that help identify strengths and areas for improvement.",
                        color: "from-amber-400 to-orange-500",
                      },
                      {
                        title: "Collaborative Tools",
                        description:
                          "Enable students to work together on projects with secure, monitored collaboration features.",
                        color: "from-pink-400 to-rose-500",
                      },
                      {
                        title: "Accessible Anywhere",
                        description:
                          "Access educational content on any device, anytime, with mobile-friendly design and offline capabilities.",
                        color: "from-teal-400 to-cyan-500",
                      },
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-6 shadow-md border border-gray-50 hover:shadow-lg transition-shadow relative overflow-hidden"
                      >
                        <div
                          className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-10 rounded-bl-full`}
                        ></div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA section */}
        </main>
      </div>

      <Footer />
    </div>
  );
};
export default XceleratorPage;
