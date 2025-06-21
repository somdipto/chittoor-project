import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Handshake,
  Lightbulb,
  Target,
  CheckCircle2,
  Send,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type CollaborationType = "individual" | "organization" | "volunteer" | "other";

const CollaboratePage = () => {
  const [activeTab, setActiveTab] = useState<CollaborationType>("individual");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    message: "",
    interests: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const collaborationTypes = [
    {
      id: "individual",
      title: "Individual",
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: "organization",
      title: "Organization",
      icon: <Handshake className="w-5 h-5" />,
    },
    {
      id: "volunteer",
      title: "Volunteer",
      icon: <Target className="w-5 h-5" />,
    },
    { id: "other", title: "Other", icon: <Lightbulb className="w-5 h-5" /> },
  ];

  const interestOptions = [
    "Renewable Energy",
    "Sustainable Agriculture",
    "Education & Skill Development",
    "Healthcare Initiatives",
    "Women Empowerment",
    "Technology & Innovation",
    "Infrastructure Development",
    "Environmental Conservation",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => {
      const interests = [...prev.interests];
      const index = interests.indexOf(interest);

      if (index === -1) {
        interests.push(interest);
      } else {
        interests.splice(index, 1);
      }

      return { ...prev, interests };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", { ...formData, type: activeTab });
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        role: "",
        message: "",
        interests: [],
      });
    }, 1500);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-chittoor-offwhite/30 pt-24 pb-16">
      <div className="container px-4 sm:px-6 mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-chittoor-green to-chittoor-blue">
            Let's Collaborate
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join hands with us to create sustainable impact in Chittoor.
            Together, we can build a better future.
          </p>
        </motion.div>

        {/* Collaboration Types */}
        <motion.div className="mb-16" variants={fadeIn}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {collaborationTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id as CollaborationType)}
                className={`flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 ${
                  activeTab === type.id
                    ? "bg-chittoor-green/10 border-2 border-chittoor-green text-chittoor-green shadow-md"
                    : "bg-white border border-gray-200 hover:border-chittoor-green/30 hover:shadow-md"
                }`}
              >
                <div className="p-3 rounded-full bg-chittoor-green/10 text-chittoor-green mb-3">
                  {type.icon}
                </div>
                <h3 className="font-semibold">{type.title}</h3>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  {activeTab === "individual" && "Individual Partnership"}
                  {activeTab === "organization" && "Organizational Partnership"}
                  {activeTab === "volunteer" && "Volunteer With Us"}
                  {activeTab === "other" && "Other Collaboration"}
                </h2>

                {activeTab === "individual" && (
                  <p className="text-gray-600 mb-6">
                    Your skills and expertise can make a real difference. Join
                    us as an individual contributor and be part of our mission
                    to transform Chittoor.
                  </p>
                )}

                {activeTab === "organization" && (
                  <p className="text-gray-600 mb-6">
                    Partner with us to create lasting impact. Let's combine our
                    strengths to drive sustainable development in Chittoor.
                  </p>
                )}

                {activeTab === "volunteer" && (
                  <p className="text-gray-600 mb-6">
                    Join our team of dedicated volunteers and contribute your
                    time and skills to meaningful projects that transform lives.
                  </p>
                )}

                {activeTab === "other" && (
                  <p className="text-gray-600 mb-6">
                    Have a unique idea or proposal? We're open to innovative
                    collaborations that align with our mission.
                  </p>
                )}

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-chittoor-green mt-0.5 flex-shrink-0" />
                    <span>Make a meaningful impact in Chittoor district</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-chittoor-green mt-0.5 flex-shrink-0" />
                    <span>
                      Access to a network of like-minded individuals and
                      organizations
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-chittoor-green mt-0.5 flex-shrink-0" />
                    <span>
                      Opportunities for personal and professional growth
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-green-50 rounded-xl">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      We've received your collaboration request. Our team will
                      get back to you soon.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-chittoor-green hover:bg-chittoor-green-dark"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-11"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Email *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="h-11"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Phone
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="h-11"
                          />
                        </div>
                      </div>

                      {(activeTab === "organization" ||
                        activeTab === "volunteer") && (
                        <div>
                          <label
                            htmlFor="organization"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            {activeTab === "organization"
                              ? "Organization Name"
                              : "Current Organization/Institution"}
                          </label>
                          <Input
                            id="organization"
                            type="text"
                            value={formData.organization}
                            onChange={handleChange}
                            className="h-11"
                          />
                        </div>
                      )}

                      <div>
                        <label
                          htmlFor="role"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          {activeTab === "organization"
                            ? "Your Role"
                            : "How would you like to contribute?"}{" "}
                          *
                        </label>
                        <Input
                          id="role"
                          type="text"
                          value={formData.role}
                          onChange={handleChange}
                          required
                          className="h-11"
                          placeholder={
                            activeTab === "organization"
                              ? "E.g., CEO, Project Manager"
                              : "E.g., Web Development, Teaching, Fundraising"
                          }
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Areas of Interest
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {interestOptions.map((interest) => (
                            <button
                              key={interest}
                              type="button"
                              onClick={() => handleInterestToggle(interest)}
                              className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                                formData.interests.includes(interest)
                                  ? "bg-chittoor-green/10 text-chittoor-green border border-chittoor-green/20"
                                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                              }`}
                            >
                              {interest}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          {activeTab === "organization"
                            ? "Tell us about your organization and how you'd like to collaborate"
                            : "Tell us more about yourself and how you'd like to get involved"}
                          *
                        </label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="min-h-[120px]"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-11 bg-gradient-to-r from-chittoor-green to-chittoor-blue hover:opacity-90 text-white mt-4"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Request
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100"
          variants={fadeIn}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Have Questions?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Reach out to our team for more information about collaboration
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-chittoor-green/10 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-chittoor-green" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Email Us</h3>
              <p className="text-gray-600 text-sm">projectchittor@atria.edu</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-chittoor-blue/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-chittoor-blue" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Call Us</h3>
              <p className="text-gray-600 text-sm">+91 91779 12670</p>
              <p className="text-gray-600 text-sm">+91 91410 83323</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Visit Us</h3>
              <p className="text-gray-600 text-sm">
                A S Chinnaswamy Community Development Trust, Chittoor, AP, India
                - 517001
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CollaboratePage;
