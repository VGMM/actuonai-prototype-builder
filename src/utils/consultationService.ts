
import { supabase } from "@/integrations/supabase/client";

export interface ConsultationRequest {
  name: string;
  email: string;
  company: string;
  industry: string;
  challenge: string;
  date: Date;
  status: string;
}

export const saveConsultationRequest = async (data: ConsultationRequest) => {
  try {
    // Create the table if it doesn't exist (this is a temporary solution for demo purposes)
    // In a production environment, we would use migrations to create tables
    const { error: createTableError } = await supabase.rpc('create_consultation_table');
    // It's okay if this errors with "relation already exists"

    const { error } = await supabase
      .from("consultation_requests")
      .insert([
        {
          name: data.name,
          email: data.email,
          company: data.company,
          industry: data.industry,
          challenge: data.challenge,
          preferred_date: data.date.toISOString(),
          status: data.status || 'pending'
        },
      ]);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error("Error saving consultation request:", error);
    return { success: false, error };
  }
};
