import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wwukzbesdwxcxnpexgpk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3dWt6YmVzZHd4Y3hucGV4Z3BrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTk3ODMsImV4cCI6MjAyNjMzNTc4M30.TDcGV3UZLpChGyrJ7zBj4zkWV7xLMH8zTGKo31DrAww";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
