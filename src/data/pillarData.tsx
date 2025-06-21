
import React from 'react';
import { Factory, Leaf, School, TestTube, TreeDeciduous } from 'lucide-react';

export interface Pillar {
  icon: React.ReactNode;
  title: string;
  description: string;
  bg: string;
  status: 'active' | 'planning';
  image: string;
  imageAlt: string;
  detailContent: React.ReactNode;
}

export const pillarsData: Pillar[] = [
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
