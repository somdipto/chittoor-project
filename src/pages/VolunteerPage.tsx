import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface VolunteerFormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
  message: string;
  areasOfInterest: string[];
  timeAvailability: string;
  contribution: string;
  motivation: string;
  experience: string;
}

const requiredFields = ['fullName', 'email', 'phone', 'timeAvailability', 'contribution', 'motivation'] as const;

const validateFormData = (data: VolunteerFormData) => {
  const errors: Record<string, string> = {};
  
  requiredFields.forEach(field => {
    if (!data[field]) {
      errors[field] = `${field.replace(/([A-Z])/g, ' $1').replace(/^./, (str: string) => str.toUpperCase())} is required`;
    }
  });

  if (data.areasOfInterest.length === 0) {
    errors.areasOfInterest = 'Please select at least one area of interest';
  }

  return errors;
};

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

const timeAvailabilityOptions = [
  '1-5 hours per week',
  '5-10 hours per week',
  '10-20 hours per week',
  '20+ hours per week',
  'Full-time',
  'Flexible'
];

const VolunteerPage = () => {
  const [formData, setFormData] = useState<VolunteerFormData>({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    portfolio: "",
    message: "",
    areasOfInterest: [],
    timeAvailability: "",
    contribution: "",
    motivation: "",
    experience: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

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

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFormData(prev => {
      const currentValues = [...prev.areasOfInterest];
      if (checked) {
        return { ...prev, areasOfInterest: [...currentValues, value] };
      } else {
        return { ...prev, areasOfInterest: currentValues.filter(item => item !== value) };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Validate form data
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setError(Object.values(validationErrors).join('\n'));
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const submissionData = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.location || null,
        linkedin: formData.linkedin || null,
        portfolio: formData.portfolio || null,
        message: formData.message || null,
        areas_of_interest: formData.areasOfInterest,
        availability: formData.timeAvailability,
        contribution: formData.contribution,
        motivation: formData.motivation,
        experience: formData.experience || null,
        submitted_at: new Date().toISOString()
      };
      
      const { error } = await supabase
        .from('volunteer_applications')
        .insert([submissionData]);
      
      if (error) throw error;
      
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      portfolio: "",
      message: "",
      areasOfInterest: [],
      timeAvailability: "",
      contribution: "",
      motivation: "",
      experience: ""
    });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-1">

        {/* Volunteer Form Section */}
        <section id="volunteer-form" className="pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Volunteer Application
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Fill out the form below to join our volunteer team. We'll get back to you soon!
                </p>
              </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                  <div className="p-0.5 bg-gradient-to-r from-chittoor-green to-chittoor-blue">
                    <div className="bg-white dark:bg-gray-800 p-0.5">
                      {isSubmitted ? (
                        <motion.div 
                          className="text-center py-12"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                          <Heart className="h-10 w-10 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          Thank you for your interest in volunteering!
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                          We've received your volunteer application. Our team will review your information and get back to you soon.
                        </p>
                        <Button 
                          onClick={resetForm}
                          variant="outline"
                        >
                          Submit another application
                        </Button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6 p-6">
                        {error && (
                          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 px-4 py-3 rounded-md text-sm">
                            {error}
                          </div>
                        )}
                        
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <div className="flex items-center">
                                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</Label>
                                  <span className="text-red-500 ml-1">*</span>
                                </div>
                                <Input
                                  id="fullName"
                                  name="fullName"
                                  value={formData.fullName}
                                  onChange={handleChange}
                                  placeholder="Your full name"
                                  required
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="email">Email Address *</Label>
                                <Input
                                  id="email"
                                  name="email"
                                  type="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  placeholder="your.email@example.com"
                                  required
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number *</Label>
                                <Input
                                  id="phone"
                                  name="phone"
                                  type="tel"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  placeholder="+91 XXXXXXXXXX"
                                  required
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="location">Current Location</Label>
                                <Input
                                  id="location"
                                  name="location"
                                  value={formData.location}
                                  onChange={handleChange}
                                  placeholder="Your current location"
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Areas of Interest</h3>
                            <p className="text-sm text-muted-foreground">Select the pillars you're interested in contributing to:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                              {areasOfInterest.map((interest) => (
                                <div key={interest} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={`interest-${interest}`}
                                    checked={formData.areasOfInterest.includes(interest)}
                                    onCheckedChange={(checked) => handleCheckboxChange(interest, checked as boolean)}
                                  />
                                  <Label htmlFor={`interest-${interest}`} className="font-normal">
                                    {interest}
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Collaboration Details</h3>
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="timeAvailability">Time Availability *</Label>
                                <select
                                  id="timeAvailability"
                                  name="timeAvailability"
                                  value={formData.timeAvailability}
                                  onChange={handleSelectChange}
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  required
                                >
                                  <option value="">Select your availability</option>
                                  {timeAvailabilityOptions.map(option => (
                                    <option key={option} value={option}>{option}</option>
                                  ))}
                                </select>
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="contribution">How would you like to contribute? *</Label>
                                <Textarea
                                  id="contribution"
                                  name="contribution"
                                  value={formData.contribution}
                                  onChange={handleChange}
                                  placeholder="Describe how you can contribute to our organization..."
                                  rows={3}
                                  required
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="motivation">What motivates you to work with us? *</Label>
                                <Textarea
                                  id="motivation"
                                  name="motivation"
                                  value={formData.motivation}
                                  onChange={handleChange}
                                  placeholder="Share what drives you to volunteer with us..."
                                  rows={3}
                                  required
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="experience">Previous Experience in Social/Rural Development</Label>
                                <Textarea
                                  id="experience"
                                  name="experience"
                                  value={formData.experience}
                                  onChange={handleChange}
                                  placeholder="Describe any previous experience in social or rural development..."
                                  rows={3}
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Additional Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="linkedin">LinkedIn Profile</Label>
                                <Input
                                  id="linkedin"
                                  name="linkedin"
                                  type="url"
                                  value={formData.linkedin}
                                  onChange={handleChange}
                                  placeholder="https://linkedin.com/in/username"
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="portfolio">Portfolio/Website</Label>
                                <Input
                                  id="portfolio"
                                  name="portfolio"
                                  type="url"
                                  value={formData.portfolio}
                                  onChange={handleChange}
                                  placeholder="https://yourportfolio.com"
                                />
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="message">Additional Message</Label>
                              <Textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Any additional information you'd like to share..."
                                rows={3}
                              />
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-end pt-4">
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
                                  Submit Application
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default VolunteerPage;
