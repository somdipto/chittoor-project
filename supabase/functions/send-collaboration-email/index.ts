
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface CollaborationFormData {
  collaborationType: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  organization?: string;
  designation?: string;
  organizationType?: string;
  companySize?: string;
  industry?: string;
  csr?: string;
  budget?: string;
  timeline?: string;
  partnershipType?: string;
  qualification?: string;
  experience?: string;
  currentWork?: string;
  skills?: string;
  expertise?: string;
  interests: string;
  availability?: string;
  contribution: string;
  motivation: string;
  previousExperience?: string;
  message?: string;
  linkedIn?: string;
  portfolio?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Collaboration email function called");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { 
      status: 405, 
      headers: corsHeaders 
    });
  }

  try {
    const formData: CollaborationFormData = await req.json();
    console.log("Received collaboration form data:", formData);

    // Generate HTML content based on collaboration type
    let htmlContent = `
      <h2>New Collaboration Application</h2>
      <p><strong>Collaboration Type:</strong> ${formData.collaborationType}</p>
      
      <h3>Personal Information</h3>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      ${formData.address ? `<p><strong>Location:</strong> ${formData.address}</p>` : ''}
    `;

    // Add organization details if applicable
    if (formData.collaborationType === 'organization' && formData.organization) {
      htmlContent += `
        <h3>Organization Details</h3>
        <p><strong>Organization:</strong> ${formData.organization}</p>
        <p><strong>Designation:</strong> ${formData.designation}</p>
        <p><strong>Organization Type:</strong> ${formData.organizationType}</p>
        <p><strong>Company Size:</strong> ${formData.companySize}</p>
        <p><strong>Industry:</strong> ${formData.industry}</p>
        ${formData.csr ? `<p><strong>Current CSR Activities:</strong> ${formData.csr}</p>` : ''}
        ${formData.budget ? `<p><strong>Budget Range:</strong> ${formData.budget}</p>` : ''}
        ${formData.timeline ? `<p><strong>Timeline:</strong> ${formData.timeline}</p>` : ''}
        ${formData.partnershipType ? `<p><strong>Partnership Type:</strong> ${formData.partnershipType}</p>` : ''}
      `;
    }

    // Add professional details for individuals
    if (formData.collaborationType === 'individual' && formData.qualification) {
      htmlContent += `
        <h3>Professional Background</h3>
        <p><strong>Qualification:</strong> ${formData.qualification}</p>
        <p><strong>Experience:</strong> ${formData.experience}</p>
        <p><strong>Current Work:</strong> ${formData.currentWork}</p>
        <p><strong>Skills:</strong> ${formData.skills}</p>
        <p><strong>Expertise:</strong> ${formData.expertise}</p>
      `;
    }

    // Add collaboration details
    htmlContent += `
      <h3>Collaboration Details</h3>
      <p><strong>Areas of Interest:</strong> ${formData.interests}</p>
      ${formData.availability ? `<p><strong>Availability:</strong> ${formData.availability}</p>` : ''}
      <p><strong>How they'd like to contribute:</strong></p>
      <p>${formData.contribution.replace(/\n/g, '<br>')}</p>
      <p><strong>Motivation:</strong></p>
      <p>${formData.motivation.replace(/\n/g, '<br>')}</p>
      ${formData.previousExperience ? `<p><strong>Previous Experience:</strong></p><p>${formData.previousExperience.replace(/\n/g, '<br>')}</p>` : ''}
    `;

    // Add additional information
    if (formData.linkedIn || formData.portfolio || formData.message) {
      htmlContent += `<h3>Additional Information</h3>`;
      if (formData.linkedIn) htmlContent += `<p><strong>LinkedIn:</strong> <a href="${formData.linkedIn}">${formData.linkedIn}</a></p>`;
      if (formData.portfolio) htmlContent += `<p><strong>Portfolio:</strong> <a href="${formData.portfolio}">${formData.portfolio}</a></p>`;
      if (formData.message) htmlContent += `<p><strong>Additional Message:</strong></p><p>${formData.message.replace(/\n/g, '<br>')}</p>`;
    }

    htmlContent += `
      <hr>
      <p><em>This application was submitted through the Project Chittoor collaboration form.</em></p>
    `;

    // Send email to project email
    const emailResponse = await resend.emails.send({
      from: "Collaboration Form <onboarding@resend.dev>",
      to: ["projectchittor@atria.edu"],
      subject: `New Collaboration Application: ${formData.collaborationType} - ${formData.name}`,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, id: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: unknown) {
    console.error("Error in send-collaboration-email function:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
