// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tjgyskkfhmcabtscsbvh.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqZ3lza2tmaG1jYWJ0c2NzYnZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyMzMxNTIsImV4cCI6MjA2NDgwOTE1Mn0.aw-Rmpl0VMw2_iU8baNKMW1HmQfIdMbY3H7xzJF8mZU";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});