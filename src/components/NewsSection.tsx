import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NewsSection = () => {
  const news = [
    {
      title: "New Water Conservation Project Launches",
      date: "May 10, 2025",
      excerpt:
        "Our team has begun work on a new rainwater harvesting initiative that will benefit five villages in the region.",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='80'%3E%3Crect width='100' height='80' fill='%2333C3F0' fill-opacity='0.2'/%3E%3Cpath d='M20,60 C20,40 40,30 50,50 C60,30 80,40 80,60' stroke='%2333C3F0' stroke-width='2' fill='none'/%3E%3Cpath d='M20,60 L80,60' stroke='%2333C3F0' stroke-width='2'/%3E%3Ccircle cx='30' cy='40' r='5' fill='%231976D2'/%3E%3Ccircle cx='50' cy='30' r='5' fill='%231976D2'/%3E%3Ccircle cx='70' cy='40' r='5' fill='%231976D2'/%3E%3C/svg%3E",
    },
    {
      title: "Annual Cultural Festival Celebrates Local Traditions",
      date: "April 23, 2025",
      excerpt:
        "Over 2,000 people attended our annual festival showcasing traditional dance, music, and crafts from the Chittoor region.",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='80'%3E%3Crect width='100' height='80' fill='%23D84315' fill-opacity='0.2'/%3E%3Cpath d='M30,60 L30,30 M50,60 L50,20 M70,60 L70,30' stroke='%23D84315' stroke-width='2'/%3E%3Ccircle cx='30' cy='20' r='10' stroke='%23D84315' stroke-width='2' fill='none'/%3E%3Ccircle cx='50' cy='10' r='10' stroke='%23D84315' stroke-width='2' fill='none'/%3E%3Ccircle cx='70' cy='20' r='10' stroke='%23D84315' stroke-width='2' fill='none'/%3E%3C/svg%3E",
    },
    {
      title: "Farmers Training Program Completes Successfully",
      date: "March 15, 2025",
      excerpt:
        "Over 100 farmers completed our training program on sustainable agricultural practices and received certification.",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='80'%3E%3Crect width='100' height='80' fill='%234CAF50' fill-opacity='0.2'/%3E%3Cpath d='M10,60 L50,20 L90,60' stroke='%234CAF50' stroke-width='2' fill='none'/%3E%3Cpath d='M30,60 L30,40 L50,40 L50,20' stroke='%232E7D32' stroke-width='2' fill='none'/%3E%3Cpath d='M50,40 L70,40 L70,60' stroke='%232E7D32' stroke-width='2' fill='none'/%3E%3C/svg%3E",
    },
  ];

  return (
    <section id="news" className="py-16 md:py-24 bg-chittoor-blue-light/5">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 kolam-decoration">
            Latest News
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stay updated with the latest happenings, successes, and upcoming
            initiatives from The Chittoor Project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {news.map((item, index) => (
            <Card key={index} className="news-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <div
                  className="w-full h-full transition-transform duration-500 hover:scale-110"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="text-chittoor-blue hover:text-chittoor-blue-dark hover:bg-chittoor-blue/10 p-0"
                >
                  Read more →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-chittoor-blue text-chittoor-blue hover:bg-chittoor-blue/10"
          >
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
