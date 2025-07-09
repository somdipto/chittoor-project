
import React from "react";
import { Factory, Leaf, School, TreeDeciduous } from "lucide-react";

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
    villages: string;
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
    slug: 'sustainable-agriculture',
    icon: <TreeDeciduous className="h-12 w-12 text-white" />,
    title: "Sustainable Agriculture",
    description: "Food 'forest farms' with seven layers to renew soil and enhance biodiversity.",
    fullDescription: "Farmer collectives will run food 'forest farms' with seven layers to renew the soil, build water reservoirs naturally, and enhance biodiversity. The project is modeled on a successful implementation of a vertical forest farm in Chittoor District, where 70 acres of once-barren land have been converted to a vertical farm providing monthly revenue in excess of ₹1 lakh per acre.",
    bg: "bg-gradient-to-br from-chittoor-green to-chittoor-green-dark",
    color: "from-chittoor-green to-chittoor-green-dark",
    status: "active",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Indian farmers working in sustainable agriculture fields",
    stats: {
      beneficiaries: "800+",
      projects: 12,
      villages: "18 acres",
      impact: "85"
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
              Farmer collectives will run food 'forest farms' with seven layers
              to renew the soil, build water reservoirs naturally, and enhance
              biodiversity. The project is modeled on a successful implementation
              of a vertical forest farm in Chittoor District.
            </p>
            <h4 className="text-lg font-semibold mb-2">
              Natural Farming Practices
            </h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Chemical-free farming methods</li>
              <li>Soil health restoration techniques</li>
              <li>Natural water reservoir creation</li>
              <li>Biodiversity enhancement programs</li>
            </ul>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-2">
              Vertical Forest Farming
            </h4>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <span className="font-medium">Seven Layer System</span>: 
                Maximizing land productivity through vertical integration
              </li>
              <li>
                <span className="font-medium">Water Management</span>: 
                Natural reservoir systems for irrigation
              </li>
              <li>
                <span className="font-medium">Revenue Generation</span>: 
                ₹1 lakh+ monthly income per acre
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-chittoor-green/10 p-4 rounded-lg">
          <p className="font-semibold">Success Story:</p>
          <p>
            70 acres of once-barren land have been converted to a vertical farm
            providing monthly revenue in excess of ₹1 lakh per acre.
          </p>
        </div>
      </>
    ),
  },
  {
    slug: 'renewable-energy',
    icon: <Factory className="h-12 w-12 text-white" />,
    title: "Renewable Energy",
    description: "Distributed solar infrastructure where farmers become energy producers.",
    fullDescription: "Project Chittoor will establish a distributed solar infrastructure where the energy is collectively sold. This collectivization of energy will ensure reliability of supply and better contracts for the sale of energy. Third-party financing will reduce the upfront cost to farmers.",
    bg: "bg-gradient-to-br from-yellow-500 to-orange-600",
    color: "from-yellow-500 to-orange-600",
    status: "active",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Solar panels installed in rural Indian villages",
    stats: {
      beneficiaries: "600 KWH",
      projects: 10,
      villages: "15 acres",
      impact: "90% revenue"
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
              the sale of energy.
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
                Energy-efficient storage powered by solar
              </li>
              <li>
                <span className="font-medium">Battery Storage</span>: Backup
                power for critical operations during outages
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="font-semibold">Benefits:</p>
          <p>
            Agrivoltaics has the additional benefit of lowering
            evapotranspiration and reducing temperatures, which is beneficial to
            both crops and solar panels.
          </p>
        </div>
      </>
    ),
  },
  {
    slug: 'transformative-education',
    icon: <School className="h-12 w-12 text-white" />,
    title: "Transformative Education",
    description: "Digital learning hub bridging traditional and future-ready education.",
    fullDescription: "The education component of Project Chittoor focuses on creating a state-of-the-art digital learning hub that provides high-quality education both on-site and remotely. This approach leverages advanced technologies to extend the reach of educational resources beyond the physical boundaries of the village.",
    bg: "bg-gradient-to-br from-chittoor-blue to-chittoor-blue-dark",
    color: "from-chittoor-blue to-chittoor-blue-dark",
    status: "active",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Rural Indian children learning with digital technology",
    stats: {
      beneficiaries: "1,200 students",
      projects: 8,
      villages: "25 subjects",
      impact: "95 activities"
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
              education both on-site and remotely.
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
      </>
    ),
  },
  {
    slug: 'agrotourism-wellness',
    icon: <Leaf className="h-12 w-12 text-white" />,
    title: "Agrotourism and Wellness",
    description: "Farm tours and wellness retreats focusing on Ayurveda and natural healing.",
    fullDescription: "A 'return to roots' approach targeting city dwellers will be adopted. Potential tourists will be attracted by the improved microclimate, access to fresh food, and the quietude of rural life. Tourism will become a supplemental income for farmers, who will manage and work in these tourist initiatives.",
    bg: "bg-gradient-to-br from-chittoor-earth to-chittoor-earth-light",
    color: "from-chittoor-earth to-chittoor-earth-light",
    status: "planning",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Peaceful rural wellness retreat with yoga and natural healing",
    stats: {
      beneficiaries: "300+",
      projects: 4,
      villages: "6",
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
              A 'return to roots' approach targeting city dwellers will be
              adopted. Potential tourists will be attracted by the improved
              microclimate, access to fresh food, and the quietude of rural
              life.
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
      </>
    ),
  },
];
