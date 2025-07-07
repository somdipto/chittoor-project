import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Loader2, Send, User, Building2, Briefcase, GraduationCap, Clock, Globe, Linkedin, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

type CollaborationType = "individual" | "organization";

const timeAvailabilityOptions = [
  '1-5 hours per week',
  '5-10 hours per week',
  '10-20 hours per week',
  '20+ hours per week',
  'Full-time',
  'Flexible'
];

const highestQualificationOptions = [
  'High School',
  'Associate Degree',
  "Bachelor's Degree",
  "Master's Degree",
  'PhD',
  'Professional Certification',
  'Other'
];

const yearsOfExperienceOptions = [
  '0-2 years',
  '3-5 years',
  '6-10 years',
  '10+ years'
];

const organizationTypeOptions = [
  'Corporate',
  'NGO/Non-profit',
  'Educational Institution',
  'Government',
  'Startup',
  'Other'
];

const companySizeOptions = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-1000 employees',
  '1000+ employees'
];

const budgetRangeOptions = [
  'Less than $1,000',
  '$1,000 - $5,000',
  '$5,001 - $20,000',
  '$20,001 - $50,000',
  '$50,000+'
];

const partnershipTimelineOptions = [
  'Immediate',
  'Within 1 month',
  '1-3 months',
  '3-6 months',
  '6+ months'
];

const areasOfInterest = [
  'Education',
  'Healthcare',
  'Environment',
  'Women Empowerment',
  'Rural Development',
  'Technology',
  'Skill Development',
  'Other'
];

interface BaseFormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
  additionalMessage: string;
  timeAvailability: string;
  contribution: string;
  motivation: string;
  experience: string;
  areasOfInterest: string[];
}

interface IndividualFormData extends BaseFormData {
  highestQualification: string;
  yearsOfExperience: string;
  currentWork: string;
  keySkills: string;
  areaOfExpertise: string;
}

interface OrganizationFormData extends BaseFormData {
  organizationName: string;
  designation: string;
  organizationType: string;
  companySize: string;
  industrySector: string;
  csrActivities: string;
  budgetRange: string;
  partnershipTimeline: string;
  partnershipType: string;
}

interface FormData extends IndividualFormData, OrganizationFormData {
  type: CollaborationType;
  message: string;
}

const individualRequiredFields = ['fullName', 'email', 'phone', 'location', 'highestQualification', 'yearsOfExperience', 'currentWork', 'keySkills', 'areaOfExpertise', 'timeAvailability', 'contribution', 'motivation'] as const;
const organizationRequiredFields = ['fullName', 'email', 'phone', 'location', 'organizationName', 'designation', 'organizationType', 'companySize', 'industrySector', 'timeAvailability', 'contribution', 'motivation'] as const;

const validateFormData = (data: FormData, type: CollaborationType): Record<string, string> => {
  const errors: Record<string, string> = {};
  const requiredFields = type === 'individual' ? individualRequiredFields : organizationRequiredFields;
  requiredFields.forEach(field => {
    if (!data[field]) {
      errors[field] = `${field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} is required`;
    }
  });
  if (data.areasOfInterest.length === 0) {
    errors.areasOfInterest = 'Please select at least one area of interest';
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  if (data.phone && !/^\+?[0-9]{10,15}$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }
  return errors;
};

interface CollaborationTypeOption {
  id: CollaborationType;
  title: string;
  icon: JSX.Element;
  description: string;
}

const collaborationTypes: CollaborationTypeOption[] = [
  {
    id: "individual",
    title: "Individual",
    icon: <User className="w-6 h-6" />,
    description: "Collaborate as an individual professional"
  },
  {
    id: "organization",
    title: "Organization",
    icon: <Building2 className="w-6 h-6" />,
    description: "Partner with us as an organization"
  }
];

const CollaboratePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<CollaborationType>("individual");
  const [formData, setFormData] = useState<FormData>({
    // Common fields
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    portfolio: "",
    additionalMessage: "",
    timeAvailability: "",
    contribution: "",
    motivation: "",
    experience: "",
    areasOfInterest: [],
    // Individual-only
    highestQualification: "",
    yearsOfExperience: "",
    currentWork: "",
    keySkills: "",
    areaOfExpertise: "",
    // Organization-only
    organizationName: "",
    designation: "",
    organizationType: "",
    companySize: "",
    industrySector: "",
    csrActivities: "",
    budgetRange: "",
    partnershipTimeline: "",
    partnershipType: "",
    // Extra
    message: "",
    type: "individual"
  });
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      // Common fields
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      portfolio: "",
      additionalMessage: "",
      timeAvailability: "",
      contribution: "",
      motivation: "",
      experience: "",
      areasOfInterest: [],
      // Individual-only
      highestQualification: "",
      yearsOfExperience: "",
      currentWork: "",
      keySkills: "",
      areaOfExpertise: "",
      // Organization-only
      organizationName: "",
      designation: "",
      organizationType: "",
      companySize: "",
      industrySector: "",
      csrActivities: "",
      budgetRange: "",
      partnershipTimeline: "",
      partnershipType: "",
      // Extra
      message: "",
      type: "individual"
    });
    setIsSubmitted(false);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      areasOfInterest: checked
        ? [...prev.areasOfInterest, name]
        : prev.areasOfInterest.filter(item => item !== name)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const validationErrors = validateFormData(formData, activeTab);
    if (Object.keys(validationErrors).length > 0) {
      setError("Please fix the following errors:");
      setIsSubmitting(false);
      return;
    }

    try {
      const { error: supabaseError } = await supabase
        .from('collaborations')
        .insert([{
          type: activeTab,
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          linkedin: formData.linkedin,
          portfolio: formData.portfolio,
          additional_message: formData.additionalMessage,
          time_availability: formData.timeAvailability,
          contribution: formData.contribution,
          motivation: formData.motivation,
          experience: formData.experience,
          areas_of_interest: formData.areasOfInterest,
          highest_qualification: formData.highestQualification,
          years_of_experience: formData.yearsOfExperience,
          current_work: formData.currentWork,
          key_skills: formData.keySkills,
          area_of_expertise: formData.areaOfExpertise,
          organization_name: formData.organizationName,
          designation: formData.designation,
          organization_type: formData.organizationType,
          company_size: formData.companySize,
          industry_sector: formData.industrySector,
          csr_activities: formData.csrActivities,
          budget_range: formData.budgetRange,
          partnership_timeline: formData.partnershipTimeline,
          partnership_type: formData.partnershipType,
          message: formData.message,
          created_at: new Date().toISOString()
        }]);

      if (supabaseError) throw supabaseError;

      setIsSubmitted(true);
      setFormData({
        // Common fields
        fullName: "",
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        portfolio: "",
        additionalMessage: "",
        timeAvailability: "",
        contribution: "",
        motivation: "",
        experience: "",
        areasOfInterest: [],
        // Individual-only
        highestQualification: "",
        yearsOfExperience: "",
        currentWork: "",
        keySkills: "",
        areaOfExpertise: "",
        // Organization-only
        organizationName: "",
        designation: "",
        organizationType: "",
        companySize: "",
        industrySector: "",
        csrActivities: "",
        budgetRange: "",
        partnershipTimeline: "",
        partnershipType: "",
        // Extra
        message: "",
        type: "individual"
      });
    } catch (err) {
      setError("Failed to submit the form. Please try again.");
      console.error("Error submitting form:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const visible = (i = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2
      }
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <motion.div 
        className="pt-24 pb-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div id="collaboration-form" className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Collaborate With Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join hands with us to create meaningful impact in rural development. Whether you're an individual or an organization, we welcome your expertise and resources.
            </p>
          </div>

          {/* Collaboration Type Tabs */}
          <motion.div className="mb-12" variants={fadeIn}>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {collaborationTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveTab(type.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === type.id
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {type.icon}
                    <span>{type.title}</span>
                  </div>
                </button>
              ))}
            </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-green-50 rounded-xl">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600 mb-6">
                  We've received your submission and will get back to you soon.
                </p>
                <Button
                  onClick={() => {
                    resetForm();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Submit Another Response
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded relative mb-6">
                    <p className="text-sm">{error}</p>
                  </div>
                )}
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                    {activeTab === "individual" ? "Your Information" : "Primary Contact"}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full ${
                          formData.fullName ? 'border-green-500' : 'border-gray-300'
                        }`}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`w-full ${
                          formData.email ? 'border-green-500' : 'border-gray-300'
                        }`}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        className={`w-full ${
                          formData.phone ? 'border-green-500' : 'border-gray-300'
                        }`}
                      />
                    </div>
                    <div>
                      <Label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Location *
                      </Label>
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City, Country"
                        className={`w-full ${
                          formData.location ? 'border-green-500' : 'border-gray-300'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Organization Details */}
                {activeTab === "organization" && (
                  <div className="w-full mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                      Organization Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <Label htmlFor="organizationName" className="block text-sm font-medium text-gray-700 mb-1">
                          Organization Name *
                        </Label>
                        <Input
                          id="organizationName"
                          name="organizationName"
                          type="text"
                          required
                          value={formData.organizationName}
                          onChange={handleChange}
                          placeholder="Company/Organization Name"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Designation *
                        </Label>
                        <Input
                          id="designation"
                          name="designation"
                          type="text"
                          required
                          value={formData.designation}
                          onChange={handleChange}
                          placeholder="Your Role/Position"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Label htmlFor="organizationType" className="block text-sm font-medium text-gray-700 mb-1">
                          Organization Type *
                        </Label>
                        <select
                          id="organizationType"
                          name="organizationType"
                          required
                          value={formData.organizationType}
                          onChange={handleSelectChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select organization type</option>
                          {organizationTypeOptions.map(option => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
                          Company Size *
                        </Label>
                        <select
                          id="companySize"
                          name="companySize"
                          required
                          value={formData.companySize}
                          onChange={handleSelectChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select company size</option>
                          {companySizeOptions.map(option => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="industrySector" className="block text-sm font-medium text-gray-700 mb-1">
                          Industry/Sector *
                        </Label>
                        <Input
                          id="industrySector"
                          name="industrySector"
                          type="text"
                          required
                          value={formData.industrySector}
                          onChange={handleChange}
                          placeholder="Your organization's primary industry or sector"
                          className="w-full"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="csrActivities" className="block text-sm font-medium text-gray-700 mb-1">
                          Current CSR Activities
                        </Label>
                        <Textarea
                          id="csrActivities"
                          name="csrActivities"
                          value={formData.csrActivities}
                          onChange={handleChange}
                          placeholder="Briefly describe your organization's current CSR activities"
                          rows={2}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Label htmlFor="budgetRange" className="block text-sm font-medium text-gray-700 mb-1">
                          Partnership Budget Range *
                        </Label>
                        <select
                          id="budgetRange"
                          name="budgetRange"
                          required
                          value={formData.budgetRange}
                          onChange={handleSelectChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select budget range</option>
                          {budgetRangeOptions.map(option => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="partnershipTimeline" className="block text-sm font-medium text-gray-700 mb-1">
                          Partnership Timeline *
                        </Label>
                        <select
                          id="partnershipTimeline"
                          name="partnershipTimeline"
                          required
                          value={formData.partnershipTimeline}
                          onChange={handleSelectChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select timeline</option>
                          {partnershipTimelineOptions.map(option => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-1">
                          Type of Partnership Interest *
                        </Label>
                        <Input
                          id="partnershipType"
                          name="partnershipType"
                          type="text"
                          required
                          value={formData.partnershipType}
                          onChange={handleChange}
                          placeholder="Describe the type of partnership you're interested in"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Additional Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                      Additional Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                          LinkedIn Profile
                        </Label>
                        <Input
                          id="linkedin"
                          name="linkedin"
                          type="url"
                          value={formData.linkedin}
                          onChange={handleChange}
                          placeholder="https://linkedin.com/in/your-profile"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                          Portfolio/Website
                        </Label>
                        <Input
                          id="portfolio"
                          name="portfolio"
                          type="url"
                          value={formData.portfolio}
                          onChange={handleChange}
                          placeholder="https://yourwebsite.com"
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="additionalMessage" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Message
                      </Label>
                      <Textarea
                        id="additionalMessage"
                        name="additionalMessage"
                        value={formData.additionalMessage}
                        onChange={handleChange}
                        placeholder="Any additional information you'd like to share..."
                        rows={4}
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      {activeTab === "individual" 
                        ? "How would you like to collaborate?" 
                        : "Tell us about your organization and how you'd like to collaborate"} 
                      *
                    </label>
                    <p className="text-xs text-gray-500 mb-2">
                      Please provide details about your skills, expertise, or how you'd like to contribute.
                    </p>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="I'm interested in collaborating because..."
                      className="min-h-[120px]"
                    />
                  </div>

                  {error && (
                    <div className="p-4 text-sm text-red-700 bg-red-50 rounded-lg">
                      {error}
                    </div>
                  )}

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Submit
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default CollaboratePage;
