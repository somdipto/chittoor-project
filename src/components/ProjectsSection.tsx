
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Sustainable Agriculture",
      description: "Teaching farmers organic farming techniques and water conservation methods to increase crop yields while protecting the environment.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%234CAF50' fill-opacity='0.2'/%3E%3Cpath d='M50,30 C60,30 70,40 70,50 C70,60 60,70 50,70 C40,70 30,60 30,50 C30,40 40,30 50,30 Z' stroke='%232E7D32' fill='none' stroke-width='2'/%3E%3Cpath d='M50,10 L50,30 M30,50 L10,50 M50,70 L50,90 M70,50 L90,50' stroke='%232E7D32' stroke-width='2'/%3E%3C/svg%3E",
      status: "active"
    },
    {
      title: "Women's Empowerment",
      description: "Training women in entrepreneurship and providing microloans to help them start small businesses and achieve financial independence.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23D84315' fill-opacity='0.2'/%3E%3Ccircle cx='35' cy='40' r='15' stroke='%23D84315' fill='none' stroke-width='2'/%3E%3Ccircle cx='65' cy='40' r='15' stroke='%23D84315' fill='none' stroke-width='2'/%3E%3Cpath d='M50,65 C60,55 70,65 70,75 C70,85 60,95 50,95 C40,95 30,85 30,75 C30,65 40,55 50,65 Z' stroke='%23D84315' fill='none' stroke-width='2'/%3E%3C/svg%3E",
      status: "active"
    },
    {
      title: "Rural Education",
      description: "Building and improving schools in rural areas and providing quality educational resources to help children reach their full potential.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%231976D2' fill-opacity='0.2'/%3E%3Cpath d='M20,70 L50,50 L80,70 L50,90 Z' stroke='%231976D2' fill='none' stroke-width='2'/%3E%3Cpath d='M50,30 L80,50 L50,70 L20,50 Z' stroke='%231976D2' fill='none' stroke-width='2'/%3E%3Cpath d='M50,10 L50,30 M80,50 L80,75' stroke='%231976D2' stroke-width='2'/%3E%3C/svg%3E",
      status: "active"
    },
    {
      title: "Healthcare Access",
      description: "Organizing health camps and mobile clinics to provide medical care to remote villages with limited access to healthcare facilities.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%2333C3F0' fill-opacity='0.2'/%3E%3Ccircle cx='50' cy='50' r='30' stroke='%2333C3F0' fill='none' stroke-width='2'/%3E%3Cpath d='M35,50 L65,50 M50,35 L50,65' stroke='%2333C3F0' stroke-width='4'/%3E%3C/svg%3E",
      status: "planning"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 kolam-decoration">Our Projects</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We implement sustainable projects that address the most pressing needs of rural communities in Chittoor district.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {projects.map((project, index) => (
            <Card key={index} className="project-card overflow-hidden border-none shadow-lg">
              <div className="bg-white h-48 flex items-center justify-center">
                <div 
                  className="w-full h-full" 
                  style={{ 
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <span className={`text-xs px-2 py-1 rounded ${project.status === 'active' ? 'bg-green-100 text-chittoor-green' : 'bg-blue-100 text-chittoor-blue'}`}>
                    {project.status === 'active' ? 'Active' : 'Planning'}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" className="text-chittoor-blue hover:text-chittoor-blue-dark hover:bg-chittoor-blue/10 p-0">
                  Learn more →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-chittoor-green hover:bg-chittoor-green-dark">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
