-- Add unique constraint to prevent duplicate role assignments
ALTER TABLE public.user_roles 
ADD CONSTRAINT user_roles_user_role_unique UNIQUE (user_id, role);