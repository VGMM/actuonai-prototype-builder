
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

export const saveConsultationRequest = async (data: Omit<ConsultationRequest, 'status'>) => {
  try {
    const { error } = await supabase.from("consultation_requests").insert([
      {
        name: data.name,
        email: data.email,
        company: data.company,
        industry: data.industry,
        challenge: data.challenge,
        preferred_date: data.date.toISOString(),
        status: 'pending'
      },
    ]);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error("Error saving consultation request:", error);
    return { success: false, error };
  }
};
