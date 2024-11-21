import { createClient } from '@supabase/supabase-js';
import { sendDemoRequestEmails } from './emailService';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface DemoRequest {
  id?: number;
  name: string;
  email: string;
  company: string;
  date: Date;
  time: string;
  message?: string;
  created_at?: Date;
}

export interface ContactMessage {
  id?: number;
  name: string;
  email: string;
  company: string;
  message: string;
  created_at?: Date;
}

export const submitDemoRequest = async (data: DemoRequest) => {
  try {
    // First submit to database
    const { error } = await supabase
      .from('demo_requests')
      .insert({
        name: data.name,
        email: data.email,
        company: data.company,
        date: data.date?.toISOString(),
        time: data.time,
        message: data.message || '',
        created_at: new Date().toISOString()
      });
    
    if (error) throw error;

    // If database submission successful, send emails
    await sendDemoRequestEmails(data);
    
    return true;
  } catch (error) {
    console.error('Failed to process demo request:', error);
    throw error;
  }
};

export const submitContactMessage = async (data: ContactMessage) => {
  const { error } = await supabase
    .from('contact_messages')
    .insert([data]);
  
  if (error) throw error;
};