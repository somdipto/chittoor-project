import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Handshake,
  Target,
  CheckCircle2,
  Send,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type CollaborationType = "individual" | "organization" | "volunteer";

const CollaboratePage = () => {
  const [activeTab, setActiveTab] = useState<CollaborationType>("individual");
  const [formData, setFormData] = useState({
    // Personal Details
    name: "",
    email: "",
    phone: "",
    address: "",
    
    // Organization Details
    organization: "",
    designation: "",
    organizationType: "",
    companySize: "",
    industry: "",
    csr: "",
    budget: "",
    timeline: "",
    partnershipType: "",
    
    // Professional Details (for individuals)
    qualification: "",
    experience: "",
    currentWork: "",
    skills: "",
    expertise: "",
    
    // Collaboration Details
    interests: [] as string[],
    availability: "",
    contribution: "",
    motivation: "",
    previousExperience: "",
    
    // Additional
    message: "",
    linkedIn: "",
    portfolio: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const collaborationTypes = [
    {
      id: "individual",
      title: "Individual",
      icon: <Users className="w-5 h-5" />,
      description: "Professionals & Experts"
    },
    {
      id: "organization",
      title: "Organization",
      icon: <Handshake className="w-5 h-5" />,
      description: "Companies & NGOs"
    },
    {
      id: "volunteer",
      title: "Volunteer",
      icon: <Target className="w-5 h-5" />,
      description: "Students & Activists"
    }
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
    "Community Development",
    "Research & Development"
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

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare data for email
      const emailData = {
        collaborationType: activeTab,
        submissionDate: new Date().toISOString(),
        ...formData,
        interests: formData.interests.join(", ")
      };

      console.log("Submitting collaboration form:", emailData);
      
      const { data, error } = await supabase.functions.invoke('send-collaboration-email', {
        body: emailData,
      });

      if (error) {
        console.error("Error sending email:", error);
        throw error;
      }

      console.log("Email sent successfully:", data);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: "", email: "", phone: "", address: "", organization: "",
        designation: "", organizationType: "", companySize: "", industry: "",
        csr: "", budget: "", timeline: "", partnershipType: "",
        qualification: "", experience: "", currentWork: "", skills: "", 
        expertise: "", interests: [], availability: "", contribution: "", 
        motivation: "", previousExperience: "", message: "", linkedIn: "", portfolio: ""
      });
    } catch (error) {
      console.error("Failed to send collaboration request:", error);
      alert("Failed to send collaboration request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
    <div className="min-h-screen bg-gradient-to-b from-white to-chittoor-offwhite/30">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container px-4 sm:px-6 mx-auto">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-chittoor-green to-chittoor-blue">
              Join Our Mission
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Be part of transforming Chittoor district. Your skills, expertise, and passion can make a real difference.
            </p>
          </motion.div>

          {/* Collaboration Types */}
          <motion.div className="mb-16" variants={fadeIn}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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
                  <h3 className="font-semibold text-sm">{type.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 text-center">{type.description}</p>
                </button>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-green-50 rounded-xl">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Thank You for Your Interest!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We've received your collaboration request. Our team will review your profile and get back to you within 2-3 business days.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-chittoor-green hover:bg-chittoor-green-dark"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 9876543210"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Current Location
                        </label>
                        <Input
                          id="address"
                          type="text"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="City, State"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Organization Details (for Organization type) */}
                  {activeTab === "organization" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                        Organization Details
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                            Organization Name *
                          </label>
                          <Input
                            id="organization"
                            type="text"
                            value={formData.organization}
                            onChange={handleChange}
                            required
                            placeholder="Your organization name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Designation *
                          </label>
                          <Input
                            id="designation"
                            type="text"
                            value={formData.designation}
                            onChange={handleChange}
                            required
                            placeholder="CEO, Manager, Director, etc."
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Organization Type *
                          </label>
                          <Select onValueChange={(value) => handleSelectChange('organizationType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select organization type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="corporate">Corporate/Private Company</SelectItem>
                              <SelectItem value="ngo">NGO/Non-Profit</SelectItem>
                              <SelectItem value="government">Government Agency</SelectItem>
                              <SelectItem value="educational">Educational Institution</SelectItem>
                              <SelectItem value="healthcare">Healthcare Organization</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Company Size *
                          </label>
                          <Select onValueChange={(value) => handleSelectChange('companySize', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                              <SelectItem value="small">Small (11-50 employees)</SelectItem>
                              <SelectItem value="medium">Medium (51-200 employees)</SelectItem>
                              <SelectItem value="large">Large (201-1000 employees)</SelectItem>
                              <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                          Industry/Sector *
                        </label>
                        <Input
                          id="industry"
                          type="text"
                          value={formData.industry}
                          onChange={handleChange}
                          required
                          placeholder="Technology, Healthcare, Finance, Manufacturing, etc."
                        />
                      </div>

                      <div>
                        <label htmlFor="csr" className="block text-sm font-medium text-gray-700 mb-1">
                          Current CSR Activities *
                        </label>
                        <Textarea
                          id="csr"
                          value={formData.csr}
                          onChange={handleChange}
                          required
                          rows={3}
                          placeholder="Describe your organization's current Corporate Social Responsibility initiatives"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Partnership Budget Range *
                          </label>
                          <Select onValueChange={(value) => handleSelectChange('budget', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-1l">Under ₹1 Lakh</SelectItem>
                              <SelectItem value="1l-5l">₹1-5 Lakhs</SelectItem>
                              <SelectItem value="5l-25l">₹5-25 Lakhs</SelectItem>
                              <SelectItem value="25l-1cr">₹25 Lakhs - 1 Crore</SelectItem>
                              <SelectItem value="above-1cr">Above ₹1 Crore</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Partnership Timeline *
                          </label>
                          <Select onValueChange={(value) => handleSelectChange('timeline', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immediate">Immediate (Within 1 month)</SelectItem>
                              <SelectItem value="short">Short-term (1-6 months)</SelectItem>
                              <SelectItem value="medium">Medium-term (6-12 months)</SelectItem>
                              <SelectItem value="long">Long-term (1+ years)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Type of Partnership Interest *
                        </label>
                        <Select onValueChange={(value) => handleSelectChange('partnershipType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select partnership type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="funding">Financial Funding</SelectItem>
                            <SelectItem value="expertise">Technical Expertise</SelectItem>
                            <SelectItem value="resources">Resource Sharing</SelectItem>
                            <SelectItem value="implementation">Project Implementation</SelectItem>
                            <SelectItem value="mentorship">Mentorship & Guidance</SelectItem>
                            <SelectItem value="comprehensive">Comprehensive Partnership</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {/* Professional Background (for individuals only) */}
                  {activeTab === "individual" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                        Professional Background
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-1">
                            Highest Qualification *
                          </label>
                          <Input
                            id="qualification"
                            type="text"
                            value={formData.qualification}
                            onChange={handleChange}
                            required
                            placeholder="B.Tech, MBA, M.Sc, etc."
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                            Years of Experience *
                          </label>
                          <Select onValueChange={(value) => handleSelectChange('experience', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select experience" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-1">0-1 years</SelectItem>
                              <SelectItem value="2-5">2-5 years</SelectItem>
                              <SelectItem value="6-10">6-10 years</SelectItem>
                              <SelectItem value="11-15">11-15 years</SelectItem>
                              <SelectItem value="15+">15+ years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="currentWork" className="block text-sm font-medium text-gray-700 mb-1">
                          Current Work/Position *
                        </label>
                        <Input
                          id="currentWork"
                          type="text"
                          value={formData.currentWork}
                          onChange={handleChange}
                          required
                          placeholder="Your current job title and company"
                        />
                      </div>

                      <div>
                        <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
                          Key Skills & Competencies *
                        </label>
                        <Textarea
                          id="skills"
                          value={formData.skills}
                          onChange={handleChange}
                          required
                          rows={3}
                          placeholder="List your key skills, technologies, and competencies"
                        />
                      </div>

                      <div>
                        <label htmlFor="expertise" className="block text-sm font-medium text-gray-700 mb-1">
                          Area of Expertise *
                        </label>
                        <Textarea
                          id="expertise"
                          value={formData.expertise}
                          onChange={handleChange}
                          required
                          rows={3}
                          placeholder="Describe your specific area of expertise and domain knowledge"
                        />
                      </div>
                    </div>
                  )}

                  {/* Areas of Interest */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                      Areas of Interest
                    </h3>
                    <p className="text-sm text-gray-600">Select the pillars you're interested in contributing to:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {interestOptions.map((interest) => (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => handleInterestToggle(interest)}
                          className={`px-3 py-2 text-sm rounded-lg transition-colors text-left ${
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

                  {/* Collaboration Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                      Collaboration Details
                    </h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Time Availability *
                      </label>
                      <Select onValueChange={(value) => handleSelectChange('availability', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-time">Full-time commitment</SelectItem>
                          <SelectItem value="part-time">Part-time (10-20 hours/week)</SelectItem>
                          <SelectItem value="weekends">Weekends only</SelectItem>
                          <SelectItem value="occasional">Occasional/Project-based</SelectItem>
                          <SelectItem value="consulting">Consulting/Advisory role</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="contribution" className="block text-sm font-medium text-gray-700 mb-1">
                        How would you like to contribute? *
                      </label>
                      <Textarea
                        id="contribution"
                        value={formData.contribution}
                        onChange={handleChange}
                        required
                        rows={3}
                        placeholder="Describe specifically how you'd like to contribute to our mission"
                      />
                    </div>

                    <div>
                      <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
                        What motivates you to work with us? *
                      </label>
                      <Textarea
                        id="motivation"
                        value={formData.motivation}
                        onChange={handleChange}
                        required
                        rows={3}
                        placeholder="Share your motivation and passion for rural development"
                      />
                    </div>

                    <div>
                      <label htmlFor="previousExperience" className="block text-sm font-medium text-gray-700 mb-1">
                        Previous Experience in Social/Rural Development
                      </label>
                      <Textarea
                        id="previousExperience"
                        value={formData.previousExperience}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Describe any previous experience in social work, NGO, or rural development projects"
                      />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                      Additional Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="linkedIn" className="block text-sm font-medium text-gray-700 mb-1">
                          LinkedIn Profile
                        </label>
                        <Input
                          id="linkedIn"
                          type="url"
                          value={formData.linkedIn}
                          onChange={handleChange}
                          placeholder="https://linkedin.com/in/yourprofile"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                          Portfolio/Website
                        </label>
                        <Input
                          id="portfolio"
                          type="url"
                          value={formData.portfolio}
                          onChange={handleChange}
                          placeholder="https://yourportfolio.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Message
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Any additional information you'd like to share with us"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-chittoor-green to-chittoor-blue hover:opacity-90 text-white text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CollaboratePage;
