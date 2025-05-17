
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Flower, Users, Temple, Landmark } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Flower className="h-8 w-8 text-chittoor-green" />,
      title: "Sustainability",
      description: "We focus on creating long-term solutions that respect the environment and promote sustainable practices."
    },
    {
      icon: <Users className="h-8 w-8 text-chittoor-green" />,
      title: "Community-Led",
      description: "Our projects are designed with and by the communities we serve, ensuring relevance and acceptance."
    },
    {
      icon: <Temple className="h-8 w-8 text-chittoor-earth" />,
      title: "Cultural Preservation",
      description: "We value and respect the rich heritage and traditions of Andhra Pradesh's communities."
    },
    {
      icon: <Landmark className="h-8 w-8 text-chittoor-earth" />,
      title: "Transparency",
      description: "We operate with complete transparency, ensuring funds are used effectively and as intended."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-chittoor-offwhite">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 kolam-decoration">About The Chittoor Project</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Founded in 2010, we are a non-profit organization dedicated to improving the lives of rural communities in Chittoor district, Andhra Pradesh through sustainable development initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {values.map((value, index) => (
            <Card key={index} className="border-t-4 border-t-chittoor-green animate-slow-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="flex flex-col items-center text-center pt-6">
                <div className="mb-4 p-3 rounded-full bg-chittoor-green/10">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              Our mission is to create sustainable development opportunities for rural communities in Chittoor district, improving quality of life while preserving cultural heritage and protecting the environment.
            </p>
            <p className="text-gray-700">
              We believe that empowering communities to address their own challenges is the key to lasting positive change. Through partnerships with local leaders, government agencies, and other non-profits, we work to build capacity and create opportunities for all.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 relative">
            <div className="absolute -top-2 -left-2 w-12 h-12 bg-chittoor-blue rounded-br-3xl"></div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-chittoor-earth rounded-tl-3xl"></div>
            <h4 className="text-xl font-semibold mb-4 pl-6">Our Impact Since 2010</h4>
            <div className="space-y-4 pl-6">
              <div>
                <p className="text-3xl font-bold text-chittoor-green">25+</p>
                <p className="text-gray-600">Villages Supported</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-chittoor-green">10,000+</p>
                <p className="text-gray-600">Lives Improved</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-chittoor-green">50+</p>
                <p className="text-gray-600">Community Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-chittoor-green">100+</p>
                <p className="text-gray-600">Local Partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
