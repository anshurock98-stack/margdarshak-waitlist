-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can submit to waitlist" ON public.waitlist_submissions;
DROP POLICY IF EXISTS "No public read access" ON public.waitlist_submissions;

-- Create PERMISSIVE INSERT policy (allows public submissions)
CREATE POLICY "Anyone can submit to waitlist"
ON public.waitlist_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create PERMISSIVE SELECT policy that denies all reads (for non-admins)
CREATE POLICY "No public read access"
ON public.waitlist_submissions
FOR SELECT
TO anon, authenticated
USING (false);

-- Add explicit DENY policies for UPDATE and DELETE
CREATE POLICY "No public update access"
ON public.waitlist_submissions
FOR UPDATE
TO anon, authenticated
USING (false);

CREATE POLICY "No public delete access"
ON public.waitlist_submissions
FOR DELETE
TO anon, authenticated
USING (false);