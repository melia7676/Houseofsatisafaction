import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aeahvtneezszwtqplknh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlYWh2dG5lZXpzend0cXBsa25oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzMTQ1MDYsImV4cCI6MjA3Nzg5MDUwNn0.p2TA7hAbB744Yh5r-t2ea7mdnXRaoZbXe31V4q88zlE';
export const supabase = createClient(supabaseUrl, supabaseKey);