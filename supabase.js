import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://avucassjhomdpyhwwgpy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2dWNhc3NqaG9tZHB5aHd3Z3B5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwODk2ODEsImV4cCI6MjA2MzY2NTY4MX0.b_jem_L_Uhbub6KEDTcLP7xFy71AGTvLxy98Tem09Cs'

export const supabase = createClient(supabaseUrl, supabaseKey)
