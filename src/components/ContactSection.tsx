import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Show success message (you can replace this with a toast notification)
      alert("Thank you for your message! We will get back to you soon.");
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-chittoor-offwhite/50 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/4 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-chittoor-green/5 via-transparent to-transparent animate-[spin_30s_linear_infinite] opacity-40"></div>
        <div className="absolute -bottom-1/2 right-1/4 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-chittoor-blue/5 via-transparent to-transparent animate-[spin_35s_linear_infinite_reverse] opacity-40"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-chittoor-green/10 to-chittoor-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-chittoor-blue/10 to-chittoor-green/10 rounded-full blur-3xl"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/40 backdrop-blur-sm"></div>
      <div className="container px-4 sm:px-6">
        <motion.div
          className="mb-10 sm:mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-chittoor-green to-chittoor-blue">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or want to get involved? Reach out to us and we'll be
            happy to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Card className="h-full p-6 sm:p-8 md:p-10 border border-gray-100/50 shadow-sm hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-lg relative overflow-hidden group">
              {/* Decorative gradient corner */}
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-chittoor-blue/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-chittoor-blue/5 to-chittoor-green/10 rounded-tl-full"></div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
                Get in Touch
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="h-11 sm:h-12"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="h-11 sm:h-12"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={handleChange}
                    className="h-11 sm:h-12"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[120px]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-gradient-to-r from-chittoor-green via-chittoor-blue to-chittoor-green bg-200% hover:bg-right transition-all duration-1000 shadow-lg hover:shadow-xl hover:scale-[1.02] transform"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
                Our Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-chittoor-green/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-chittoor-green" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Address</h4>
                    <p className="text-gray-600">
                      123 Rural Development Center
                      <br />
                      Chittoor District
                      <br />
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
