import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Battery, Leaf, School, TestTube, Factory } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";

const ProjectsSection = () => {
  const isMobile = useIsMobile();

  const projects = [
    {
      title: "Sustainable Agriculture",
      description:
        "Farmer collectives running food 'forest farms' with seven layers to renew soil, build water reservoirs naturally, and enhance biodiversity.",
      icon: <Leaf className="w-10 h-10 text-chittoor-green" />,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%234CAF50' fill-opacity='0.2'/%3E%3Cpath d='M50,30 C60,30 70,40 70,50 C70,60 60,70 50,70 C40,70 30,60 30,50 C30,40 40,30 50,30 Z' stroke='%232E7D32' fill='none' stroke-width='2'/%3E%3Cpath d='M50,10 L50,30 M30,50 L10,50 M50,70 L50,90 M70,50 L90,50' stroke='%232E7D32' stroke-width='2'/%3E%3C/svg%3E",
      status: "active",
      detailContent: (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="mb-4">
                Farmer collectives will run food 'forest farms' with seven
                layers to renew the soil, build water reservoirs naturally, and
                enhance biodiversity. The project is modeled on a successful
                implementation of a vertical forest farm in Chittoor District,
                where 70 acres of once-barren land have been converted to a
                vertical farm providing monthly revenue in excess of ₹1 lakh per
                acre.
              </p>
              <h4 className="text-lg font-semibold mb-2">Natural Farming</h4>
              <p className="mb-3">
                The farm uses chemical-free farming practices, focusing on
                restoring soil health and increasing biodiversity.
              </p>
              <h4 className="text-lg font-semibold mb-2">Vertical Farming</h4>
              <p>
                Vertical farming structures for high-yield, space-efficient
                cultivation supporting 1000 species of plants, moving away from
                destructive monocropping practices.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">Water Management</h4>
              <ul className="list-disc pl-5 mb-4">
                <li>Check dams and channels for rainwater</li>
                <li>Drip irrigation systems</li>
                <li>Groundwater recharge wells</li>
                <li>Fertigation techniques</li>
              </ul>
              <h4 className="text-lg font-semibold mb-2">
                Food Processing & Upcycling
              </h4>
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
            <p>
              Increasing ground water levels from over 800 feet to less than 200
              feet while supporting biodiversity and creating sustainable
              livelihoods.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Renewable Energy",
      description:
        "Establishing a distributed solar infrastructure where farmers become energy producers with collective energy sales and third-party financing.",
      icon: <Factory className="w-10 h-10 text-chittoor-blue-dark" />,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%2333C3F0' fill-opacity='0.2'/%3E%3Cpath d='M50,10 L90,40 L70,40 L70,90 L30,90 L30,40 L10,40 L50,10 Z' stroke='%2333C3F0' fill='none' stroke-width='2'/%3E%3Cpath d='M45,50 L55,50 M45,70 L55,70' stroke='%2333C3F0' stroke-width='2'/%3E%3C/svg%3E",
      status: "active",
      detailContent: (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="mb-4">
                Project Chittoor will establish a distributed solar
                infrastructure where the energy is collectively sold. This
                collectivization of energy will ensure reliability of supply and
                better contracts for the sale of energy. Third-party financing
                will reduce the upfront cost to farmers.
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
                Incorporates subsidies such as the PM-Surya Ghar Scheme and
                Model Solar Village Schemes
              </p>
            </div>
          </div>
          <div className="bg-chittoor-blue/5 p-4 rounded-lg">
            <p className="font-semibold">Benefits:</p>
            <p>
              Agrivoltaics has the additional benefit of lowering
              evapotranspiration and reducing temperatures, which is beneficial
              to both crops and solar panels.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Transformative Education",
      description:
        "Creating a state-of-the-art digital learning hub to bridge the gap between traditional and future-ready education in rural areas.",
      icon: <School className="w-10 h-10 text-chittoor-blue" />,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%231976D2' fill-opacity='0.2'/%3E%3Cpath d='M20,70 L50,50 L80,70 L50,90 Z' stroke='%231976D2' fill='none' stroke-width='2'/%3E%3Cpath d='M50,30 L80,50 L50,70 L20,50 Z' stroke='%231976D2' fill='none' stroke-width='2'/%3E%3Cpath d='M50,10 L50,30 M80,50 L80,75' stroke='%231976D2' stroke-width='2'/%3E%3C/svg%3E",
      status: "active",
      detailContent: (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="mb-4">
                The education component of Project Chittoor will focus on
                creating a state-of-the-art digital learning hub that provides
                high-quality education both on-site and remotely. This approach
                will leverage advanced technologies to extend the reach of
                educational resources beyond the physical boundaries of the
                village.
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
                  <span className="font-medium">Remote Lab Access</span>:
                  Webcams and IoT devices for remote participation
                </li>
                <li>
                  <span className="font-medium">Adaptive Learning</span>:
                  AI-powered systems to personalize education
                </li>
                <li>
                  <span className="font-medium">Remote Mentorship</span>:
                  Digital platform connecting students with experts
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
      title: "Agro-Wellness Tourism",
      description:
        "Creating opportunities for city dwellers to experience rural life, farm tours, wellness retreats and farm-to-table dining experiences.",
      icon: <Leaf className="w-10 h-10 text-chittoor-earth" />,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23D84315' fill-opacity='0.2'/%3E%3Ccircle cx='35' cy='40' r='15' stroke='%23D84315' fill='none' stroke-width='2'/%3E%3Ccircle cx='65' cy='40' r='15' stroke='%23D84315' fill='none' stroke-width='2'/%3E%3Cpath d='M50,65 C60,55 70,65 70,75 C70,85 60,95 50,95 C40,95 30,85 30,75 C30,65 40,55 50,65 Z' stroke='%23D84315' fill='none' stroke-width='2'/%3E%3C/svg%3E",
      status: "planning",
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
        </>
      ),
    },
    {
      title: "Innovation Test Bed",
      description:
        "Serving as a test bed for young entrepreneurs to test concepts and prototypes aligned with sustainability pillars.",
      icon: <TestTube className="w-10 h-10 text-chittoor-green-dark" />,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%2333C3F0' fill-opacity='0.2'/%3E%3Ccircle cx='50' cy='50' r='30' stroke='%2333C3F0' fill='none' stroke-width='2'/%3E%3Cpath d='M35,50 L65,50 M50,35 L50,65' stroke='%2333C3F0' stroke-width='4'/%3E%3C/svg%3E",
      status: "planning",
      detailContent: (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="mb-4">
                Project Chittoor serves as a test bed for young entrepreneurs to
                test their concepts, models & prototypes. By aligning their
                interests with the four pillars of sustainability, this
                initiative fosters innovation and practical solutions for
                real-world challenges.
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
                  <span className="font-medium">Food Processing</span>:
                  Low-energy preservation techniques
                </li>
                <li>
                  <span className="font-medium">Water Management</span>:
                  Water-saving irrigation technologies
                </li>
                <li>
                  <span className="font-medium">Biodiversity</span>: Ecological
                  pest management strategies
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
        </>
      ),
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 kolam-decoration">
            Our Projects
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We implement sustainable projects that address the most pressing
            needs of rural communities in Chittoor district, with a focus on
            long-term impact and community ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card overflow-hidden border-none shadow-lg"
            >
              <div
                className={`bg-white ${isMobile ? "h-32" : "h-48"} flex items-center justify-center`}
              >
                <div className="w-full h-full flex items-center justify-center bg-gray-50">
                  {project.icon}
                </div>
              </div>
              <CardHeader className={`${isMobile ? "py-3" : "pb-2"}`}>
                <div className="flex justify-between items-start">
                  <CardTitle className={`${isMobile ? "text-lg" : "text-xl"}`}>
                    {project.title}
                  </CardTitle>
                  <span
                    className={`text-xs px-2 py-1 rounded ml-2 ${project.status === "active" ? "bg-green-100 text-chittoor-green" : "bg-blue-100 text-chittoor-blue"}`}
                  >
                    {project.status === "active" ? "Active" : "Planning"}
                  </span>
                </div>
              </CardHeader>
              <CardContent className={isMobile ? "py-2" : ""}>
                <p
                  className={`text-gray-600 ${isMobile ? "text-xs line-clamp-3" : "text-sm"}`}
                >
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className={`pt-0 ${isMobile ? "pb-4" : ""}`}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`text-chittoor-blue hover:text-chittoor-blue-dark hover:bg-chittoor-blue/10 p-0 ${isMobile ? "text-sm" : ""}`}
                    >
                      Learn more →
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl flex items-center gap-2">
                        {project.icon}
                        <span>{project.title}</span>
                      </DialogTitle>
                      <DialogDescription>
                        Project Chittoor Initiative
                      </DialogDescription>
                    </DialogHeader>
                    {project.detailContent}
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-white to-gray-50 p-6 md:p-10 rounded-xl shadow-sm border border-gray-100 mb-10">
          <h3 className="text-2xl font-bold mb-4">The Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                Project Chittoor reverses rural-to-urban migration by providing
                farmers with the tools they need to thrive on their land. It
                keeps rural communities intact and turns marginal farmers into
                prosperous, empowered entrepreneurs. It serves as a blueprint
                for rural revitalisation for the rest of India.
              </p>
              <p>
                The initiative started with 600 acres in Chittoor district,
                Andhra Pradesh, where landowners have contributed to a
                farmer-operated co-operative.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Expansion Plans</h4>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Current</span>
                  <span>600 acres</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded overflow-hidden mb-4">
                  <div
                    className="bg-chittoor-green h-2 rounded"
                    style={{ width: "1%" }}
                  ></div>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">December 2025</span>
                  <span>6,000 acres</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded overflow-hidden mb-4">
                  <div
                    className="bg-chittoor-green h-2 rounded"
                    style={{ width: "10%" }}
                  ></div>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Target (24 months)</span>
                  <span>60,000 acres</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
                  <div
                    className="bg-chittoor-green h-2 rounded"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            className="bg-chittoor-green hover:bg-chittoor-green-dark"
            onClick={() =>
              document
                .getElementById("pillars")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Our Pillars
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
