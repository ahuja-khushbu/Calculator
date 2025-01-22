import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://gqrevaleyunkyluabqln.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxcmV2YWxleXVua3lsdWFicWxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NTA2NzAsImV4cCI6MjA1MzEyNjY3MH0.TjtnLZoQDHU0SVoo5IEXTvzZn0u5-T92SUrhKVpyWUw';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
