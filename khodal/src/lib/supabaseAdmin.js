import { createClient } from '@supabase/supabase-js';

// Server-side Supabase client using the service role key.
// This bypasses RLS and must only be used on the server.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error('Missing env: NEXT_PUBLIC_SUPABASE_URL');
}

// If the service role key is missing, fall back to anon (RLS will apply).
// Prefer setting SUPABASE_SERVICE_ROLE_KEY in server environment.
const key = supabaseServiceKey || supabaseAnonKey;

export const supabaseAdmin = createClient(supabaseUrl, key, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

