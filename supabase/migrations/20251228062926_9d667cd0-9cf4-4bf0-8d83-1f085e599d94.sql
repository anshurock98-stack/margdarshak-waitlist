-- Create waitlist submissions table
CREATE TABLE public.waitlist_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  whatsapp TEXT,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.waitlist_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public waitlist)
CREATE POLICY "Anyone can submit to waitlist"
ON public.waitlist_submissions
FOR INSERT
WITH CHECK (true);

-- Only admins can view submissions (for security)
CREATE POLICY "No public read access"
ON public.waitlist_submissions
FOR SELECT
USING (false);