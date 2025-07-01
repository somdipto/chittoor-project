
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Flower,
  Users,
  Building,
  Landmark,
  TreeDeciduous,
  Leaf,
  Sprout,
  Wheat,
  ArrowRight,
  Battery,
  School,
  TestTube,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const values = [
    {
      icon: <Battery className="h-8 w-8 text-white" />,
      title: "Renewable Energy",
      description:
        "Distributed solar infrastructure where farmers become energy producers, creating reliable supply and additional revenue streams.",
    },
    {
      icon: <Leaf className="h-8 w-8 text-white" />,
      title: "Agro-Wellness Tourism",
      description:
        "Farm tours, hands-on experiences, and wellness retreats focusing on Ayurveda and natural healing in rural settings.",
    },
    {
      icon: <School className="h-8 w-8 text-white" />,
      title: "Transformative Education",
      description:
        "Digital learning hub bridging traditional and future-ready education, bringing rural schools on par with metro cities.",
    },
    {
      icon: <TestTube className="h-8 w-8 text-white" />,
      title: "Test Bed for Innovation",
      description:
        "Platform for young entrepreneurs to test concepts aligned with sustainability pillars, fostering practical solutions.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-chittoor-offwhite relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2010%20A10%2010%200%200%201%2010%200%20A10%2010%200%200%201%200%2010%22%20fill%3D%22%232E7D32%22%20fill-opacity%3D%220.03%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')] bg-repeat opacity-30"></div>

      {/* Decorative plant elements */}
      <motion.div
        animate={{
          y: [-5, 5, -5],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: [0.4, 0.0, 0.2, 1],
          },
        }}
        className="absolute top-20 left-5 hidden lg:block"
      >
        <TreeDeciduous className="h-16 w-16 text-chittoor-green-light/30" />
      </motion.div>

      <motion.div
        animate={{
          rotate: [-2, 2, -2],
          transition: {
            duration: 8,
            repeat: Infinity,
            ease: [0.4, 0.0, 0.2, 1],
          },
        }}
        className="absolute bottom-40 left-10 hidden lg:block"
      >
        <Leaf className="h-12 w-12 text-chittoor-green/40" />
      </motion.div>

      <motion.div
        animate={{
          y: [-5, 5, -5],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: [0.4, 0.0, 0.2, 1],
          },
        }}
        className="absolute top-40 right-10 hidden lg:block"
      >
        <Sprout className="h-14 w-14 text-chittoor-green-dark/30" />
      </motion.div>

      <motion.div
        animate={{
          rotate: [-2, 2, -2],
          transition: {
            duration: 8,
            repeat: Infinity,
            ease: [0.4, 0.0, 0.2, 1],
          },
        }}
        className="absolute bottom-20 right-5 hidden lg:block"
      >
        <Wheat className="h-16 w-16 text-chittoor-earth/30" />
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          transition: { duration: 4, repeat: Infinity, ease: [0.4, 0.0, 0.2, 1] },
        }}
        className="absolute top-1/2 right-20 hidden xl:block"
      >
        <Flower className="h-10 w-10 text-chittoor-blue/30" />
      </motion.div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 kolam-decoration">
            About The Chittoor Project
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Project Chittoor is a rural revitalization initiative focusing on
            sustainable development and community living. It aims to reverse
            rural-to-urban migration and empower farmers to thrive on their own
            land.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {values.map((value, index) => (
            <motion.div variants={item} key={index}>
              <Card className="rounded-xl overflow-hidden shadow-lg border-none h-full hover:shadow-xl transition-shadow duration-300">
                <div
                  className={`h-2 ${
                    index === 0
                      ? "bg-gradient-to-r from-chittoor-green to-chittoor-green-light"
                      : index === 1
                        ? "bg-gradient-to-r from-chittoor-earth to-chittoor-earth-light"
                        : index === 2
                          ? "bg-gradient-to-r from-chittoor-blue to-chittoor-blue-light"
                          : "bg-gradient-to-r from-chittoor-green-dark to-chittoor-green"
                  }`}
                ></div>
                <CardContent className="flex flex-col items-center text-center pt-6">
                  <div
                    className={`mb-4 p-3 rounded-full ${
                      index === 0
                        ? "bg-gradient-to-br from-chittoor-green to-chittoor-green-dark"
                        : index === 1
                          ? "bg-gradient-to-br from-chittoor-earth to-chittoor-earth-light"
                          : index === 2
                            ? "bg-gradient-to-br from-chittoor-blue to-chittoor-blue-dark"
                            : "bg-gradient-to-br from-chittoor-green-dark to-chittoor-green"
                    } shadow-md`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Link to="/pillars">
              <Button className="bg-gradient-to-r from-chittoor-green to-chittoor-green-dark hover:opacity-95 group px-6 py-6 rounded-xl">
                <span className="mr-2">Learn more about our pillars</span>
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <motion.div
              animate={{
                rotate: [-2, 2, -2],
                transition: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute -left-10 -bottom-10 hidden lg:block"
            >
              <Sprout className="h-12 w-12 text-chittoor-green-light/40" />
            </motion.div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              Our mission is to reshape broad trends in India by fostering
              sustainable rural development and community living, ultimately
              leading to long-term productivity growth without causing
              environmental and social harm.
            </p>
            <p className="text-gray-700">
              We aim to create a suitable environment for the next generation to
              thrive by boosting revenue per acre, creating supplemental income
              streams, revamping education systems, and establishing appropriate
              organizational structures.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [-5, 5, -5],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute -right-8 -top-8 hidden lg:block"
            >
              <Wheat className="h-12 w-12 text-chittoor-earth-light/40" />
            </motion.div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-chittoor-blue rounded-br-3xl opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-chittoor-earth rounded-tl-3xl opacity-80"></div>
              <h4 className="text-xl font-semibold mb-6 pl-6">
                Key Objectives
              </h4>
              <div className="space-y-4 pl-6">
                <div className="flex items-start">
                  <div className="bg-chittoor-green/10 p-2 rounded-full mr-3 mt-1">
                    <Users className="h-4 w-4 text-chittoor-green" />
                  </div>
                  <p className="text-gray-600">
                    Demonstrate innovative sustainable farming, energy, and
                    education practices
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-chittoor-earth/10 p-2 rounded-full mr-3 mt-1">
                    <Users className="h-4 w-4 text-chittoor-earth" />
                  </div>
                  <p className="text-gray-600">
                    Show path for 44 crore farming families to make a
                    middle-class living
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-chittoor-blue/10 p-2 rounded-full mr-3 mt-1">
                    <Users className="h-4 w-4 text-chittoor-blue" />
                  </div>
                  <p className="text-gray-600">
                    Eliminate dependency on MNREGA and reduce urban migration
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-chittoor-green-dark/10 p-2 rounded-full mr-3 mt-1">
                    <Users className="h-4 w-4 text-chittoor-green-dark" />
                  </div>
                  <p className="text-gray-600">
                    Boost local economy through job creation and skill
                    development
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
