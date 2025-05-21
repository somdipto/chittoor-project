
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Battery, Leaf, School, TestTube, Factory, TreeDeciduous, Sprout, Wheat, ArrowRight, Users } from 'lucide-react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useIsMobile } from '@/hooks/use-mobile';

const AboutProjectsSection = () => {
  const isMobile = useIsMobile();
  
  // Combined pillars/values with detailed content
  const pillars = [
    {
      icon: <Factory className="h-8 w-8 text-white" />,
      title: "Renewable Energy",
      description: "Distributed solar infrastructure where farmers become energy producers, creating reliable supply and additional revenue streams.",
      bg: "bg-gradient-to-br from-chittoor-green to-chittoor-green-dark",
      status: "active",
      image: "https://images.unsplash.com/photo-1623060693724-1e59e90a5d74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Solar panels in agricultural setting",
      detailContent: (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="mb-4">Project Chittoor will establish a distributed solar infrastructure where the energy is collectively sold. This collectivization of energy will ensure reliability of supply and better contracts for the sale of energy. Third-party financing will reduce the upfront cost to farmers.</p>
              <h4 className="text-lg font-semibold mb-2">Agrivoltaics</h4>
              <p className="mb-3">Solar panels will be co-located with agriculture, enabling a 'double income' from fertile land. An optimal solar panel layout will be created for both energy generation and crop growth.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">Key Components</h4>
              <ul className="list-disc pl-5 mb-4">
                <li><span className="font-medium">Rooftop Solar</span>: Installations on schools, community centers, and homes</li>
                <li><span className="font-medium">Cold Storage</span>: Energy-efficient storage powered by solar with varying temperature zones</li>
                <li><span className="font-medium">Battery Storage</span>: Backup power for critical operations during outages</li>
              </ul>
              <p className="mt-3 text-sm italic">Incorporates subsidies such as the PM-Surya Ghar Scheme and Model Solar Village Schemes</p>
            </div>
          </div>
          <div className="bg-chittoor-blue/5 p-4 rounded-lg">
            <p className="font-semibold">Benefits:</p>
            <p>Agrivoltaics has the additional benefit of lowering evapotranspiration and reducing temperatures, which is beneficial to both crops and solar panels.</p>
          </div>
          <div className="mt-4">
            <img 
              src="https://images.unsplash.com/photo-1623060693724-1e59e90a5d74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Solar panels in agricultural setting" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </>
      )
    },
    {
      icon: <Leaf className="h-8 w-8 text-white" />,
      title: "Agro-Wellness Tourism",
      description: "Farm tours, hands-on experiences, and wellness retreats focusing on Ayurveda and natural healing in rural settings.",
      bg: "bg-gradient-to-br from-chittoor-earth to-chittoor-earth-light",
      status: "planning",
      image: "https://images.unsplash.com/photo-1552071379-5999089b2c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Rural wellness retreat in India",
      detailContent: (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="mb-4">A 'return to roots' approach targeting city dwellers will be adopted. Potential tourists will be attracted by the improved microclimate, access to fresh food, and the quietude of rural life. Tourism will become a supplemental income for farmers, who will manage and work in these tourist initiatives.</p>
              <h4 className="text-lg font-semibold mb-2">Agritourism Offerings</h4>
              <ul className="list-disc pl-5 mb-4">
                <li>Homestays and accommodations</li>
                <li>Farm tours showcasing sustainable practices</li>
                <li>Hands-on experiences in farming and food production</li>
                <li>Farm-to-table dining experiences</li>
                <li>Local arts and crafts gift shop</li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">Wellness Center</h4>
              <ul className="list-disc pl-5 mb-4">
                <li>Natural healing and Ayurveda treatments</li>
                <li>Yoga and meditation classes in natural settings</li>
                <li>Accommodations with farm-to-table food</li>
                <li>Corporate retreat facilities</li>
                <li>Spiritual tourism opportunities</li>
              </ul>
            </div>
          </div>
          <div className="bg-chittoor-earth/10 p-4 rounded-lg">
            <p className="font-semibold">Economic Impact:</p>
            <p>Tourism will create an additional revenue stream for farmers while promoting sustainable practices and traditional knowledge.</p>
          </div>
          <div className="mt-4">
            <img 
              src="https://images.unsplash.com/photo-1552071379-5999089b2c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Rural wellness retreat in India" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </>
      )
    },
    {
      icon: <School className="h-8 w-8 text-white" />,
      title: "Transformative Education",
      description: "Digital learning hub bridging traditional and future-ready education, bringing rural schools on par with metro cities.",
      bg: "bg-gradient-to-br from-chittoor-blue to-chittoor-blue-dark",
      status: "active",
      image: "https://images.unsplash.com/photo-1551984427-05d5dd9f0f16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Rural education in India",
      detailContent: (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="mb-4">The education component of Project Chittoor will focus on creating a state-of-the-art digital learning hub that provides high-quality education both on-site and remotely. This approach will leverage advanced technologies to extend the reach of educational resources beyond the physical boundaries of the village.</p>
              <h4 className="text-lg font-semibold mb-2">Digital Learning Infrastructure</h4>
              <ul className="list-disc pl-5 mb-4">
                <li>High-speed internet network to village schools</li>
                <li>Offline learning capabilities for limited connectivity</li>
                <li>Smart classrooms with tablets for students</li>
                <li>Learning Management System (LMS)</li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">Advanced Learning Technologies</h4>
              <ul className="list-disc pl-5 mb-4">
                <li><span className="font-medium">VR/AR Labs</span>: Immersive learning experiences in science and technology</li>
                <li><span className="font-medium">Remote Lab Access</span>: Webcams and IoT devices for remote participation</li>
                <li><span className="font-medium">Adaptive Learning</span>: AI-powered systems to personalize education</li>
                <li><span className="font-medium">Remote Mentorship</span>: Digital platform connecting students with experts</li>
              </ul>
            </div>
          </div>
          <div className="bg-chittoor-blue-light/10 p-4 rounded-lg">
            <p className="font-semibold">Vision:</p>
            <p>To merge technology and a "sage on the side" approach to leapfrog education from "chalk and duster" to "lifelong self-directed learners."</p>
          </div>
          <div className="mt-4">
            <img 
              src="https://images.unsplash.com/photo-1551984427-05d5dd9f0f16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Rural education in India" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </>
      )
    },
    {
      icon: <TestTube className="h-8 w-8 text-white" />,
      title: "Test Bed for Innovation",
      description: "Platform for young entrepreneurs to test concepts aligned with sustainability pillars, fostering practical solutions.",
      bg: "bg-gradient-to-br from-chittoor-green-dark to-chittoor-green",
      status: "planning",
      image: "https://images.unsplash.com/photo-1559700488-2268e5ba7e2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Agricultural innovation in India",
      detailContent: (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="mb-4">Project Chittoor serves as a test bed for young entrepreneurs to test their concepts, models & prototypes. By aligning their interests with the four pillars of sustainability, this initiative fosters innovation and practical solutions for real-world challenges.</p>
              <h4 className="text-lg font-semibold mb-2">Data and IoT in Agriculture</h4>
              <ul className="list-disc pl-5 mb-4">
                <li>IoT sensors for real-time data collection</li>
                <li>Weather stations for local microclimate monitoring</li>
                <li>Crop sensors for growth monitoring</li>
                <li>Edge computing for data processing</li>
                <li>AI algorithms for crop health monitoring</li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">Research Areas</h4>
              <ul className="list-disc pl-5 mb-4">
                <li><span className="font-medium">Satellite Imagery</span>: Multi-spectral imagery for crop health assessment</li>
                <li><span className="font-medium">Drone Technology</span>: High-resolution crop imaging and analysis</li>
                <li><span className="font-medium">Sustainable Farming</span>: Studies on soil health and carbon sequestration</li>
                <li><span className="font-medium">Water Management</span>: Water-saving irrigation technologies</li>
              </ul>
            </div>
          </div>
          <div className="bg-chittoor-green-dark/10 p-4 rounded-lg">
            <p className="font-semibold">Future Vision:</p>
            <p>To establish a comprehensive Living Lab ecosystem that fosters innovation across multiple domains while addressing real-world agricultural challenges.</p>
          </div>
          <div className="mt-4">
            <img 
              src="https://images.unsplash.com/photo-1559700488-2268e5ba7e2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Agricultural innovation in India" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </>
      )
    },
    {
      icon: <TreeDeciduous className="h-8 w-8 text-white" />,
      title: "Sustainable Agriculture",
      description: "Food 'forest farms' with seven layers to renew soil, build water reservoirs naturally, and enhance biodiversity.",
      bg: "bg-gradient-to-br from-chittoor-green to-chittoor-green-dark",
      status: "active",
      image: "https://images.unsplash.com/photo-1602600203968-7a1c67c12fb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Sustainable agriculture in India",
      detailContent: (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="mb-4">Farmer collectives will run food 'forest farms' with seven layers to renew the soil, build water reservoirs naturally, and enhance biodiversity. The project is modeled on a successful implementation of a vertical forest farm in Chittoor District, where 70 acres of once-barren land have been converted to a vertical farm providing monthly revenue in excess of ₹1 lakh per acre.</p>
              <h4 className="text-lg font-semibold mb-2">Natural Farming</h4>
              <p className="mb-3">The farm uses chemical-free farming practices, focusing on restoring soil health and increasing biodiversity.</p>
              <h4 className="text-lg font-semibold mb-2">Vertical Farming</h4>
              <p>Vertical farming structures for high-yield, space-efficient cultivation supporting 1000 species of plants, moving away from destructive monocropping practices.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">Water Management</h4>
              <ul className="list-disc pl-5 mb-4">
                <li>Check dams and channels for rainwater</li>
                <li>Drip irrigation systems</li>
                <li>Groundwater recharge wells</li>
                <li>Fertigation techniques</li>
              </ul>
              <h4 className="text-lg font-semibold mb-2">Food Processing & Upcycling</h4>
              <ul className="list-disc pl-5">
                <li>Cold-pressed oils</li>
                <li>Dairy products (Paneer, Ghee)</li>
                <li>Powders (Turmeric, Moringa)</li>
                <li>Extracts and dried produce</li>
                <li>Biodegradable packaging</li>
              </ul>
            </div>
          </div>
          <div className="bg-chittoor-green/5 p-4 rounded-lg">
            <p className="font-semibold">Impact Target:</p>
            <p>Increasing ground water levels from over 800 feet to less than 200 feet while supporting biodiversity and creating sustainable livelihoods.</p>
          </div>
          <div className="mt-4">
            <img 
              src="https://images.unsplash.com/photo-1602600203968-7a1c67c12fb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Sustainable agriculture in India" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </>
      )
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <section id="about-projects" className="py-16 md:py-24 bg-gradient-to-b from-white to-chittoor-offwhite relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2010%20A10%2010%200%200%201%2010%200%20A10%2010%200%200%201%200%2010%22%20fill%3D%22%232E7D32%22%20fill-opacity%3D%220.03%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')] bg-repeat opacity-30"></div>
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 kolam-decoration">About The Chittoor Project</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Project Chittoor is a rural revitalization initiative focusing on sustainable development and community living. 
            It aims to reverse rural-to-urban migration and empower farmers to thrive on their own land.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button 
              onClick={() => document.getElementById('renewable-energy')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 py-2 bg-chittoor-green/10 text-chittoor-green rounded-full text-sm hover:bg-chittoor-green/20 transition-all"
            >
              Renewable Energy
            </button>
            <button 
              onClick={() => document.getElementById('agro-wellness')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 py-2 bg-chittoor-earth/10 text-chittoor-earth rounded-full text-sm hover:bg-chittoor-earth/20 transition-all"
            >
              Agro-Wellness
            </button>
            <button 
              onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 py-2 bg-chittoor-blue/10 text-chittoor-blue rounded-full text-sm hover:bg-chittoor-blue/20 transition-all"
            >
              Education
            </button>
            <button 
              onClick={() => document.getElementById('innovation')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 py-2 bg-chittoor-green-dark/10 text-chittoor-green-dark rounded-full text-sm hover:bg-chittoor-green-dark/20 transition-all"
            >
              Innovation
            </button>
            <button 
              onClick={() => document.getElementById('sustainable-agriculture')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 py-2 bg-chittoor-green/10 text-chittoor-green rounded-full text-sm hover:bg-chittoor-green/20 transition-all"
            >
              Sustainable Agriculture
            </button>
          </div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {pillars.map((pillar, index) => (
            <motion.div variants={item} key={index} id={pillar.title.toLowerCase().replace(/\s+/g, '-')}>
              <Card className="rounded-xl overflow-hidden shadow-lg border-none h-full hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.imageAlt} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-2 bg-gradient-to-r from-chittoor-green to-chittoor-green-light"></div>
                <CardContent className="flex flex-col p-0">
                  <div className="p-6">
                    <div className={`mb-4 p-3 rounded-full ${pillar.bg} shadow-md w-fit`}>
                      {pillar.icon}
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{pillar.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded ml-2 ${pillar.status === 'active' ? 'bg-green-100 text-chittoor-green' : 'bg-blue-100 text-chittoor-blue'}`}>
                        {pillar.status === 'active' ? 'Active' : 'Planning'}
                      </span>
                    </div>
                    <p className={`text-gray-600 ${isMobile ? 'text-sm line-clamp-3' : ''} mb-4`}>
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-auto p-6 pt-0">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="ghost" 
                          className={`text-chittoor-blue hover:text-chittoor-blue-dark hover:bg-chittoor-blue/10 p-0 ${isMobile ? 'text-sm' : ''}`}
                        >
                          Learn more →
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl flex items-center gap-2">
                            <div className={`p-2 rounded-full ${pillar.bg}`}>
                              {pillar.icon}
                            </div>
                            <span>{pillar.title}</span>
                          </DialogTitle>
                          <DialogDescription>
                            Project Chittoor Initiative
                          </DialogDescription>
                        </DialogHeader>
                        {pillar.detailContent}
                      </DialogContent>
                    </Dialog>
                  </div>
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
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              Our mission is to reshape broad trends in India by fostering sustainable rural development and community living, ultimately leading to long-term productivity growth without causing environmental and social harm.
            </p>
            <p className="text-gray-700">
              We aim to create a suitable environment for the next generation to thrive by boosting revenue per acre, creating supplemental income streams, revamping education systems, and establishing appropriate organizational structures.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-chittoor-blue rounded-br-3xl opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-chittoor-earth rounded-tl-3xl opacity-80"></div>
              <h4 className="text-xl font-semibold mb-6 pl-6">Key Objectives</h4>
              <div className="space-y-4 pl-6">
                <div className="flex items-start">
                  <div className="bg-chittoor-green/10 p-2 rounded-full mr-3 mt-1">
                    <Users className="h-4 w-4 text-chittoor-green" />
                  </div>
                  <p className="text-gray-600">Demonstrate innovative sustainable farming, energy, and education practices</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-chittoor-earth/10 p-2 rounded-full mr-3 mt-1">
                    <Users className="h-4 w-4 text-chittoor-earth" />
                  </div>
                  <p className="text-gray-600">Show path for 44 crore farming families to make a middle-class living</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-chittoor-blue/10 p-2 rounded-full mr-3 mt-1">
                    <Users className="h-4 w-4 text-chittoor-blue" />
                  </div>
                  <p className="text-gray-600">Eliminate dependency on MNREGA and reduce urban migration</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-chittoor-green-dark/10 p-2 rounded-full mr-3 mt-1">
                    <Users className="h-4 w-4 text-chittoor-green-dark" />
                  </div>
                  <p className="text-gray-600">Boost local economy through job creation and skill development</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 bg-gradient-to-r from-white to-gray-50 p-6 md:p-10 rounded-xl shadow-sm border border-gray-100"
        >
          <h3 className="text-2xl font-bold mb-4">The Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">Project Chittoor reverses rural-to-urban migration by providing farmers with the tools they need to thrive on their land. It keeps rural communities intact and turns marginal farmers into prosperous, empowered entrepreneurs. It serves as a blueprint for rural revitalisation for the rest of India.</p>
              <p>The initiative started with 600 acres in Chittoor district, Andhra Pradesh, where landowners have contributed to a farmer-operated co-operative.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Expansion Plans</h4>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Current</span>
                  <span>600 acres</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded overflow-hidden mb-4">
                  <div className="bg-chittoor-green h-2 rounded" style={{ width: '1%' }}></div>
                </div>
                
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">December 2025</span>
                  <span>6,000 acres</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded overflow-hidden mb-4">
                  <div className="bg-chittoor-green h-2 rounded" style={{ width: '10%' }}></div>
                </div>
                
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Target (24 months)</span>
                  <span>60,000 acres</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
                  <div className="bg-chittoor-green h-2 rounded" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutProjectsSection;
