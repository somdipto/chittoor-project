-- Create volunteer_applications table for storing volunteer applications
CREATE TABLE public.volunteer_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT,
  linkedin TEXT,
  portfolio TEXT,
  message TEXT,
  areas_of_interest TEXT[] DEFAULT '{}',
  availability TEXT NOT NULL,
  contribution TEXT NOT NULL,
  motivation TEXT NOT NULL,
  experience TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.volunteer_applications ENABLE ROW LEVEL SECURITY;

-- Create policy for public access (anyone can submit volunteer applications)
CREATE POLICY "Anyone can submit volunteer applications" ON public.volunteer_applications
  FOR INSERT WITH CHECK (true);

-- Create policy for admins to view all volunteer applications
CREATE POLICY "Admins can view all volunteer applications" ON public.volunteer_applications
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );