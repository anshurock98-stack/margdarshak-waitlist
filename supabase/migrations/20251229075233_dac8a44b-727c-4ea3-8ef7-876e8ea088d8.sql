-- Add explicit policy to deny public/anonymous read access to waitlist submissions
-- This adds defense-in-depth in case RLS is misconfigured
CREATE POLICY "No public read access" 
ON public.waitlist_submissions 
FOR SELECT 
USING (false);