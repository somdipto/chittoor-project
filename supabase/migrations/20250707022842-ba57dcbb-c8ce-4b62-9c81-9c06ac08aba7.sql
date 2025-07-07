
-- Create collaborations table for storing collaboration requests
CREATE TABLE public.collaborations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('individual', 'organization')),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  location TEXT NOT NULL,
  linkedin TEXT,
  portfolio TEXT,
  additional_message TEXT,
  time_availability TEXT NOT NULL,
  contribution TEXT NOT NULL,
  motivation TEXT NOT NULL,
  experience TEXT,
  areas_of_interest TEXT[] DEFAULT '{}',
  
  -- Individual specific fields
  highest_qualification TEXT,
  years_of_experience TEXT,
  current_work TEXT,
  key_skills TEXT,
  area_of_expertise TEXT,
  
  -- Organization specific fields
  organization_name TEXT,
  designation TEXT,
  organization_type TEXT,
  company_size TEXT,
  industry_sector TEXT,
  csr_activities TEXT,
  budget_range TEXT,
  partnership_timeline TEXT,
  partnership_type TEXT,
  
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.collaborations ENABLE ROW LEVEL SECURITY;

-- Create policy for public access (anyone can submit collaboration requests)
CREATE POLICY "Anyone can submit collaborations" ON public.collaborations
  FOR INSERT WITH CHECK (true);

-- Create policy for admins to view all collaborations
CREATE POLICY "Admins can view all collaborations" ON public.collaborations
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
