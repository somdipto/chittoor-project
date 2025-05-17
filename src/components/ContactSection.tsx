
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-chittoor-offwhite">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 kolam-decoration">Contact Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Have questions or want to get involved? Reach out to us and we'll be happy to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <Card className="p-6 border-none shadow-lg bg-gradient-to-br from-chittoor-green/5 to-chittoor-blue/5">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="subject">Subject</label>
                  <Input id="subject" placeholder="What is this regarding?" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>
                <Button className="w-full bg-chittoor-green hover:bg-chittoor-green-dark">Send Message</Button>
              </form>
            </Card>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Our Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-chittoor-green/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-chittoor-green" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Address</h4>
                    <p className="text-gray-600">
                      123 Rural Development Center<br />
                      Chittoor District<br />
                      Andhra Pradesh, India - 517001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-chittoor-green/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-chittoor-green" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 87654 32109</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-chittoor-green/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-chittoor-green" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <p className="text-gray-600">info@chittoorproject.org</p>
                    <p className="text-gray-600">support@chittoorproject.org</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Working Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM to 6:00 PM</p>
                <p>Saturday: 9:00 AM to 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
