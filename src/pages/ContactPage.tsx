import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      id,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      console.log("Submitting contact form:", formData);
      const {
        data,
        error
      } = await supabase.functions.invoke('send-contact-email', {
        body: formData
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
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  if (isSubmitted) {
    return <div className="min-h-screen bg-gradient-to-b from-white to-chittoor-offwhite/30">
        <Navbar />
        <div className="pt-24 pb-16">
          <div className="container px-4 sm:px-6 mx-auto">
            <motion.div className="text-center max-w-2xl mx-auto" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold mb-4 text-gray-900">
                Thank You!
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Your message has been sent successfully. We'll get back to you as soon as possible.
              </p>
              <Button onClick={() => setIsSubmitted(false)} className="bg-gradient-to-r from-chittoor-green to-chittoor-blue hover:opacity-90">
                Send Another Message
              </Button>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>;
  }
  return <div className="min-h-screen bg-gradient-to-b from-white to-chittoor-offwhite/30">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container px-4 sm:px-6 mx-auto">
          <motion.div className="text-center mb-16" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-chittoor-green to-chittoor-blue">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get in touch with us to learn more about our initiatives or to get involved.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-chittoor-green/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-chittoor-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">projectchittor@atria.edu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-chittoor-blue/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-chittoor-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 91779 12670</p>
                    <p className="text-gray-600">+91 91410 83323</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Thirumalarajupuram, Andhra Pradesh 631302, India
                    </p>
                  </div>
                </div>

                
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }}>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <Input id="firstName" type="text" value={formData.firstName} onChange={handleChange} required />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <Input id="lastName" type="text" value={formData.lastName} onChange={handleChange} required />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <Input id="subject" type="text" value={formData.subject} onChange={handleChange} required />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <Textarea id="message" rows={5} value={formData.message} onChange={handleChange} required />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-chittoor-green to-chittoor-blue hover:opacity-90" disabled={isSubmitting}>
                      {isSubmitting ? <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending Message...
                        </> : <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>;
};
export default ContactPage;