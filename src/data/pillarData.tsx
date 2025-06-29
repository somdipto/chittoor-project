import React from "react";
import { Factory, Leaf, School, TestTube, TreeDeciduous } from "lucide-react";

export interface Pillar {
  slug: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  fullDescription: string;
  bg: string;
  color: string;
  status: "active" | "planning";
  image: string;
  imageAlt: string;
  detailContent: React.ReactNode;
  keyPoints?: string[];
  stats: {
    beneficiaries: string;
    projects: number;
    villages: number;
    impact: string;
  };
  objectives: string[];
  currentProjects: Array<{
    name: string;
    description: string;
    status: string;
    progress: number;
  }>;
  successStories: Array<{
    title: string;
    description: string;
    impact: string;
  }>;
}

export const pillarsData: Pillar[] = [
  {
    slug: 'transformative-education',
    icon: <School className="h-8 w-8 text-white" />,
    title: "Transformative Education",
    description: "Digital learning hub bridging traditional and future-ready education, bringing rural schools on par with metro cities.",
    fullDescription: "The education component of Project Chittoor focuses on creating a state-of-the-art digital learning hub that provides high-quality education both on-site and remotely. This approach leverages advanced technologies to extend the reach of educational resources beyond the physical boundaries of the village.",
    bg: "bg-gradient-to-br from-chittoor-blue to-chittoor-blue-dark",
    color: "from-chittoor-blue to-chittoor-blue-dark",
    status: "active",
    image: "https://images.unsplash.com/photo-1551984427-05d5dd9f0f16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Rural education in India",
    stats: {
      beneficiaries: "1,200+",
      projects: 8,
      villages: 25,
      impact: "95%"
    },
    objectives: [
      "Establish high-speed internet network to village schools",
      "Create smart classrooms with tablets for students",
      "Implement Learning Management System (LMS)",
      "Develop VR/AR labs for immersive learning",
      "Enable remote lab access through IoT devices",
      "Provide adaptive learning with AI-powered systems"
    ],
    currentProjects: [
      {
        name: "Digital Learning Hub Setup",
        description: "Establishing state-of-the-art digital learning infrastructure in 5 villages",
        status: "In Progress",
        progress: 75
      },
      {
        name: "Teacher Training Program",
        description: "Training local teachers on digital tools and modern teaching methods",
        status: "Active",
        progress: 60
      },
      {
        name: "VR Science Lab",
        description: "Setting up virtual reality labs for immersive science education",
        status: "Planning",
        progress: 25
      }
    ],
    successStories: [
      {
        title: "Rural Students Excel in State Exams",
        description: "Students from our digital learning hub scored 40% higher than district average",
        impact: "120 students benefited with improved academic performance"
      },
      {
        title: "Digital Literacy Program Success",
        description: "Successfully trained 200+ adults in basic digital skills",
        impact: "Enhanced employment opportunities for rural youth"
      }
    ],
    detailContent: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="mb-4">
              The education component of Project Chittoor will focus on creating
              a state-of-the-art digital learning hub that provides high-quality
              education both on-site and remotely. This approach will leverage
              advanced technologies to extend the reach of educational resources
              beyond the physical boundaries of the village.
            </p>
            <h4 className="text-lg font-semibold mb-2">
              Digital Learning Infrastructure
            </h4>
            <ul className="list-disc pl-5 mb-4">
              <li>High-speed internet network to village schools</li>
              <li>Offline learning capabilities for limited connectivity</li>
              <li>Smart classrooms with tablets for students</li>
              <li>Learning Management System (LMS)</li>
            </ul>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-2">
              Advanced Learning Technologies
            </h4>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <span className="font-medium">VR/AR Labs</span>: Immersive
                learning experiences in science and technology
              </li>
              <li>
                <span className="font-medium">Remote Lab Access</span>: Webcams
                and IoT devices for remote participation
              </li>
              <li>
                <span className="font-medium">Adaptive Learning</span>:
                AI-powered systems to personalize education
              </li>
              <li>
                <span className="font-medium">Remote Mentorship</span>: Digital
                platform connecting students with experts
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-chittoor-blue-light/10 p-4 rounded-lg">
          <p className="font-semibold">Vision:</p>
          <p>
            To merge technology and a "sage on the side" approach to leapfrog
            education from "chalk and duster" to "lifelong self-directed
            learners."
          </p>
        </div>
        <div className="mt-4">
          <img
            src="https://images.unsplash.com/photo-1551984427-05d5dd9f0f16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Rural education in India"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      </>
    ),
  },
  {
    slug: 'sustainable-agriculture',
    icon: <TreeDeciduous className="h-8 w-8 text-white" />,
    title: "Sustainable Agriculture",
    description: "Food 'forest farms' with seven layers to renew soil, build water reservoirs naturally, and enhance biodiversity.",
    fullDescription: "Farmer collectives will run food 'forest farms' with seven layers to renew the soil, build water reservoirs naturally, and enhance biodiversity. The project is modeled on a successful implementation of a vertical forest farm in Chittoor District, where 70 acres of once-barren land have been converted to a vertical farm providing monthly revenue in excess of ₹1 lakh per acre.",
    bg: "bg-gradient-to-br from-chittoor-green to-chittoor-green-dark",
    color: "from-chittoor-green to-chittoor-green-dark",
    status: "active",
    image: "https://images.unsplash.com/photo-1602600203968-7a1c67c12fb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Sustainable agriculture in India",
    stats: {
      beneficiaries: "800+",
      projects: 12,
      villages: 18,
      impact: "85%"
    },
    objectives: [
      "Implement chemical-free farming practices",
      "Restore soil health and increase biodiversity",
      "Build natural water reservoirs and irrigation systems",
      "Establish vertical farming structures",
      "Create food processing and upcycling units",
      "Support 1000+ species of plants cultivation"
    ],
    currentProjects: [
      {
        name: "Vertical Forest Farm Expansion",
        description: "Expanding successful vertical farming model to 5 new locations",
        status: "Active",
        progress: 65
      },
      {
        name: "Natural Water Management",
        description: "Building check dams and rainwater harvesting systems",
        status: "In Progress",
        progress: 80
      },
      {
        name: "Food Processing Unit",
        description: "Setting up community-owned food processing facilities",
        status: "Planning",
        progress: 30
      }
    ],
    successStories: [
      {
        title: "70-Acre Barren Land Transformation",
        description: "Successfully converted barren land into productive vertical farm",
        impact: "₹1 lakh+ monthly revenue per acre achieved"
      },
      {
        title: "Groundwater Level Improvement",
        description: "Raised groundwater levels from 800 feet to 200 feet in pilot area",
        impact: "Water security improved for 500+ families"
      }
    ],
    detailContent: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="mb-4">
              A 'return to roots' approach targeting city dwellers will be
              adopted. Potential tourists will be attracted by the improved
              microclimate, access to fresh food, and the quietude of rural
              life. Tourism will become a supplemental income for farmers, who
              will manage and work in these tourist initiatives.
            </p>
            <h4 className="text-lg font-semibold mb-2">
              Agritourism Offerings
            </h4>
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
          <p>
            Tourism will create an additional revenue stream for farmers while
            promoting sustainable practices and traditional knowledge.
          </p>
        </div>
        <div className="mt-4">
          <img
            src="https://images.unsplash.com/photo-1552071379-5999089b2c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Rural wellness retreat in India"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      </>
    ),
  },
  {
    slug: 'test-bed-innovation',
    icon: <TestTube className="h-8 w-8 text-white" />,
    title: "Test Bed for Innovation",
    description: "Platform for young entrepreneurs to test concepts aligned with sustainability pillars, fostering practical solutions.",
    fullDescription: "Project Chittoor serves as a test bed for young entrepreneurs to test their concepts, models & prototypes. By aligning their interests with the four pillars of sustainability, this initiative fosters innovation and practical solutions for real-world challenges.",
    bg: "bg-gradient-to-br from-chittoor-green-dark to-chittoor-green",
    color: "from-chittoor-green-dark to-chittoor-green",
    status: "planning",
    image: "https://images.unsplash.com/photo-1559700488-2268e5ba7e2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Agricultural innovation in India",
    stats: {
      beneficiaries: "150+",
      projects: 5,
      villages: 8,
      impact: "70%"
    },
    objectives: [
      "Establish IoT sensors for real-time agricultural data collection",
      "Set up weather stations for microclimate monitoring",
      "Deploy crop sensors for growth monitoring",
      "Implement edge computing for data processing",
      "Develop AI algorithms for crop health monitoring",
      "Create satellite imagery analysis systems"
    ],
    currentProjects: [
      {
        name: "Agricultural IoT Network",
        description: "Deploying sensor networks across farming communities",
        status: "In Progress",
        progress: 45
      },
      {
        name: "Drone Technology Integration",
        description: "High-resolution crop imaging and analysis using drones",
        status: "Planning",
        progress: 20
      },
      {
        name: "AI Crop Health Monitoring",
        description: "Developing AI systems for early disease detection",
        status: "Research",
        progress: 35
      }
    ],
    successStories: [
      {
        title: "Early Disease Detection System",
        description: "AI-powered system successfully detected crop diseases 2 weeks earlier",
        impact: "Prevented 30% crop loss for 50+ farmers"
      },
      {
        title: "Weather Prediction Accuracy",
        description: "Local weather stations improved prediction accuracy by 85%",
        impact: "Better planning for 200+ farmers"
      }
    ],
    detailContent: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="mb-4">
              The education component of Project Chittoor will focus on creating
              a state-of-the-art digital learning hub that provides high-quality
              education both on-site and remotely. This approach will leverage
              advanced technologies to extend the reach of educational resources
              beyond the physical boundaries of the village.
            </p>
            <h4 className="text-lg font-semibold mb-2">
              Digital Learning Infrastructure
            </h4>
            <ul className="list-disc pl-5 mb-4">
              <li>High-speed internet network to village schools</li>
              <li>Offline learning capabilities for limited connectivity</li>
              <li>Smart classrooms with tablets for students</li>
              <li>Learning Management System (LMS)</li>
            </ul>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-2">
              Advanced Learning Technologies
            </h4>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <span className="font-medium">VR/AR Labs</span>: Immersive
                learning experiences in science and technology
              </li>
              <li>
                <span className="font-medium">Remote Lab Access</span>: Webcams
                and IoT devices for remote participation
              </li>
              <li>
                <span className="font-medium">Adaptive Learning</span>:
                AI-powered systems to personalize education
              </li>
              <li>
                <span className="font-medium">Remote Mentorship</span>: Digital
                platform connecting students with experts
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-chittoor-blue-light/10 p-4 rounded-lg">
          <p className="font-semibold">Vision:</p>
          <p>
            To merge technology and a "sage on the side" approach to leapfrog
            education from "chalk and duster" to "lifelong self-directed
            learners."
          </p>
        </div>
        <div className="mt-4">
          <img
            src="https://images.unsplash.com/photo-1551984427-05d5dd9f0f16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Rural education in India"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      </>
    ),
  },
  {
    slug: 'agro-wellness-tourism',
    icon: <Leaf className="h-8 w-8 text-white" />,
    title: "Agro-Wellness Tourism",
    description: "Farm tours, hands-on experiences, and wellness retreats focusing on Ayurveda and natural healing in rural settings.",
    fullDescription: "A 'return to roots' approach targeting city dwellers will be adopted. Potential tourists will be attracted by the improved microclimate, access to fresh food, and the quietude of rural life. Tourism will become a supplemental income for farmers, who will manage and work in these tourist initiatives.",
    bg: "bg-gradient-to-br from-chittoor-earth to-chittoor-earth-light",
    color: "from-chittoor-earth to-chittoor-earth-light",
    status: "planning",
    image: "https://images.unsplash.com/photo-1552071379-5999089b2c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Rural wellness retreat in India",
    stats: {
      beneficiaries: "300+",
      projects: 4,
      villages: 6,
      impact: "60%"
    },
    objectives: [
      "Develop homestays and accommodation facilities",
      "Create farm tour experiences showcasing sustainable practices",
      "Establish hands-on farming and food production experiences",
      "Set up farm-to-table dining experiences",
      "Create local arts and crafts gift shops",
      "Build natural healing and Ayurveda treatment centers"
    ],
    currentProjects: [
      {
        name: "Wellness Center Development",
        description: "Building Ayurvedic wellness centers in rural settings",
        status: "Planning",
        progress: 25
      },
      {
        name: "Homestay Network",
        description: "Establishing network of farmer-managed homestays",
        status: "Planning",
        progress: 15
      },
      {
        name: "Farm-to-Table Experiences",
        description: "Creating immersive food experiences for tourists",
        status: "Research",
        progress: 10
      }
    ],
    successStories: [
      {
        title: "Pilot Homestay Success",
        description: "First homestay achieved 80% occupancy rate in initial 6 months",
        impact: "₹50,000+ additional monthly income for farmer family"
      },
      {
        title: "Ayurvedic Garden Setup",
        description: "Established medicinal plant garden attracting health-conscious visitors",
        impact: "Increased awareness of traditional healing methods"
      }
    ],
    detailContent: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="mb-4">
              Project Chittoor serves as a test bed for young entrepreneurs to
              test their concepts, models & prototypes. By aligning their
              interests with the four pillars of sustainability, this initiative
              fosters innovation and practical solutions for real-world
              challenges.
            </p>
            <h4 className="text-lg font-semibold mb-2">
              Data and IoT in Agriculture
            </h4>
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
              <li>
                <span className="font-medium">Satellite Imagery</span>:
                Multi-spectral imagery for crop health assessment
              </li>
              <li>
                <span className="font-medium">Drone Technology</span>:
                High-resolution crop imaging and analysis
              </li>
              <li>
                <span className="font-medium">Sustainable Farming</span>:
                Studies on soil health and carbon sequestration
              </li>
              <li>
                <span className="font-medium">Water Management</span>:
                Water-saving irrigation technologies
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-chittoor-green-dark/10 p-4 rounded-lg">
          <p className="font-semibold">Future Vision:</p>
          <p>
            To establish a comprehensive Living Lab ecosystem that fosters
            innovation across multiple domains while addressing real-world
            agricultural challenges.
          </p>
        </div>
        <div className="mt-4">
          <img
            src="https://images.unsplash.com/photo-1559700488-2268e5ba7e2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Agricultural innovation in India"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      </>
    ),
  },
  {
    slug: 'renewable-energy',
    icon: <Factory className="h-8 w-8 text-white" />,
    title: "Renewable Energy",
    description: "Distributed solar infrastructure where farmers become energy producers, creating reliable supply and additional revenue streams.",
    fullDescription: "Project Chittoor will establish a distributed solar infrastructure where the energy is collectively sold. This collectivization of energy will ensure reliability of supply and better contracts for the sale of energy. Third-party financing will reduce the upfront cost to farmers.",
    bg: "bg-gradient-to-br from-chittoor-green to-chittoor-green-dark",
    color: "from-chittoor-green to-chittoor-green-dark",
    status: "active",
    image: "https://images.unsplash.com/photo-1623060693724-1e59e90a5d74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Solar panels in agricultural setting",
    stats: {
      beneficiaries: "600+",
      projects: 10,
      villages: 15,
      impact: "90%"
    },
    objectives: [
      "Install rooftop solar on schools, community centers, and homes",
      "Establish energy-efficient cold storage powered by solar",
      "Implement battery storage for backup power",
      "Create optimal solar panel layout for agrivoltaics",
      "Enable farmers to become energy producers",
      "Utilize government subsidies like PM-Surya Ghar Scheme"
    ],
    currentProjects: [
      {
        name: "Distributed Solar Network",
        description: "Installing solar panels across multiple farming communities",
        status: "Active",
        progress: 70
      },
      {
        name: "Solar Cold Storage",
        description: "Building energy-efficient storage facilities",
        status: "In Progress",
        progress: 55
      },
      {
        name: "Agrivoltaics Implementation",
        description: "Co-locating solar panels with agriculture for double income",
        status: "Active",
        progress: 40
      }
    ],
    successStories: [
      {
        title: "First Solar Collective Success",
        description: "10 farmers collectively generating 50kW of solar power",
        impact: "₹15,000+ monthly income per farmer from energy sales"
      },
      {
        title: "Cold Storage Benefits",
        description: "Solar-powered cold storage reduced post-harvest losses by 60%",
        impact: "Saved ₹2 lakh worth of produce for 25 farmers"
      }
    ],
    detailContent: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="mb-4">
              Project Chittoor will establish a distributed solar infrastructure
              where the energy is collectively sold. This collectivization of
              energy will ensure reliability of supply and better contracts for
              the sale of energy. Third-party financing will reduce the upfront
              cost to farmers.
            </p>
            <h4 className="text-lg font-semibold mb-2">Agrivoltaics</h4>
            <p className="mb-3">
              Solar panels will be co-located with agriculture, enabling a
              'double income' from fertile land. An optimal solar panel layout
              will be created for both energy generation and crop growth.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-2">Key Components</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <span className="font-medium">Rooftop Solar</span>:
                Installations on schools, community centers, and homes
              </li>
              <li>
                <span className="font-medium">Cold Storage</span>:
                Energy-efficient storage powered by solar with varying
                temperature zones
              </li>
              <li>
                <span className="font-medium">Battery Storage</span>: Backup
                power for critical operations during outages
              </li>
            </ul>
            <p className="mt-3 text-sm italic">
              Incorporates subsidies such as the PM-Surya Ghar Scheme and Model
              Solar Village Schemes
            </p>
          </div>
        </div>
        <div className="bg-chittoor-blue/5 p-4 rounded-lg">
          <p className="font-semibold">Benefits:</p>
          <p>
            Agrivoltaics has the additional benefit of lowering
            evapotranspiration and reducing temperatures, which is beneficial to
            both crops and solar panels.
          </p>
        </div>
        <div className="mt-4">
          <img
            src="https://images.unsplash.com/photo-1623060693724-1e59e90a5d74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Solar panels in agricultural setting"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      </>
    ),
  },
];
