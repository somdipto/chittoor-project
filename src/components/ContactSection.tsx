
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
      [id === "name" ? "firstName" : id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Submitting contact form:", formData);
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          firstName: formData.firstName,
          lastName: formData.lastName || "",
          email: formData.email,
          phone: "",
          subject: formData.subject,
          message: formData.message,
        },
      });

      if (error) {
        console.error("Error sending email:", error);
        throw error;
      }

      console.log("Email sent successfully:", data);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 bg-gradient-to-b from-white to-chittoor-offwhite/30 overflow-hidden"
    >
      {/* Enhanced background with Indian village imagery */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Indian village background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/85"></div>
      </div>
      
      <div className="container px-4 sm:px-6 relative z-10">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-chittoor-green to-chittoor-blue">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us in transforming rural India
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-chittoor-green to-chittoor-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-600 text-sm">
                    Thirumalarajupuram,<br />
                    Andhra Pradesh 631302, India
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-chittoor-blue to-chittoor-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-600 text-sm">
                    +91 91779 12670<br />
                    +91 91410 83323
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-chittoor-green to-chittoor-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-600 text-sm">
                    projectchittor@atria.edu
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Card className="h-full p-8 bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">
                      Thank You!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                      Send us a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Input
                            id="firstName"
                            placeholder="Your Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="h-14 text-lg bg-white/50 border-gray-200 focus:border-chittoor-green focus:ring-chittoor-green"
                            required
                          />
                        </div>
                        <div>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="h-14 text-lg bg-white/50 border-gray-200 focus:border-chittoor-green focus:ring-chittoor-green"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Input
                          id="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="h-14 text-lg bg-white/50 border-gray-200 focus:border-chittoor-green focus:ring-chittoor-green"
                          required
                        />
                      </div>
                      <div>
                        <Textarea
                          id="message"
                          placeholder="Your Message"
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="text-lg bg-white/50 border-gray-200 focus:border-chittoor-green focus:ring-chittoor-green resize-none"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full h-14 text-lg bg-gradient-to-r from-chittoor-green to-chittoor-blue hover:from-chittoor-green-dark hover:to-chittoor-blue-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] transform"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="mr-3 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </Card>
            </motion.div>
          </div>

          {/* Embedded Map */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Find Us Here
              </h3>
              <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
                <div className="w-full h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.2345!2d79.3451549!3d13.147424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad53d91ba72611%3A0x21e9a92e32b9bead!2sZilla%20Parishad%20High%20School!5e0!3m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Zilla Parishad High School, 48WX+X39, Thirumalarajupuram, Andhra Pradesh 631302, India"
                  ></iframe>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
