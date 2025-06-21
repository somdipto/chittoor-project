import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Users, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ContactPage = () => {
  const contacts = [
    {
      name: "Lt. Col. Abhishek G C (retd.)",
      role: "Project Lead",
      phone: "+91 91779 12670",
      email: "Abhishek.gc.atria@edu",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    },
    {
      name: "Pratham",
      role: "Project Coordinator",
      phone: "+91 91410 83323",
      email: "projectchittor@atria.edu",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-chittoor-offwhite/30 pt-24 pb-16">
      <div className="container px-4 sm:px-6 mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-chittoor-green to-chittoor-blue">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to our team members or visit
            our office.
          </p>
        </motion.div>

        {/* Trust Info */}
        <motion.div className="mb-12 text-center" variants={fadeIn}>
          <div className="inline-flex items-center gap-2 bg-chittoor-green/10 text-chittoor-green px-6 py-3 rounded-full mb-4">
            <Users className="w-5 h-5" />
            <span className="font-medium">
              A S Chinnaswamy Community Development Trust
            </span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Driving sustainable development and community empowerment in
            Chittoor district through innovative initiatives and collaborative
            efforts.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {contacts.map((contact, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-chittoor-green/20">
                    <img
                      src={contact.image}
                      alt={contact.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      {contact.name}
                    </h3>
                    <p className="text-chittoor-green font-medium mb-3">
                      {contact.role}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4 text-chittoor-green" />
                        <a
                          href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                          className="hover:text-chittoor-green transition-colors"
                        >
                          {contact.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4 text-chittoor-green" />
                        <a
                          href={`mailto:${contact.email}`}
                          className="hover:text-chittoor-green transition-colors break-all"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Office Info */}
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100"
          variants={fadeIn}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Office</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-chittoor-green/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-chittoor-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-gray-600">
                    A S Chinnaswamy Community Development Trust
                    <br />
                    Chittoor District
                    <br />
                    Andhra Pradesh, India - 517001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-chittoor-blue/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-chittoor-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden h-64 md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.009353711451!2d78.9622!3d13.0825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU3LjAiTiA3OMKwNTcnNDQuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div className="mt-16 text-center" variants={fadeIn}>
          <h3 className="text-2xl font-bold mb-4">
            Have a question or want to collaborate?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals and organizations to
            partner with. Let's work together to make a difference in Chittoor.
          </p>
          <Button className="bg-gradient-to-r from-chittoor-green to-chittoor-blue hover:opacity-90 text-white">
            <Send className="mr-2 h-4 w-4" />
            Send us a Message
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
