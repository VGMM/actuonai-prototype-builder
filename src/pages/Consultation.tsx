
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { saveConsultationRequest, ConsultationRequest } from '@/utils/consultationService';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(), // Made company optional
  industry: z.string().min(1, { message: 'Please select your industry.' }),
  ai_integration: z.string().min(10, { message: 'Please briefly describe your AI needs (minimum 10 characters).' }),
  date: z.date({ required_error: 'Please select a preferred date for your consultation.' }),
});

type FormValues = z.infer<typeof formSchema>;

const Consultation = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      industry: '',
      ai_integration: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      // Create the consultation data with all required fields explicitly typed
      const consultationData: ConsultationRequest = {
        name: data.name,
        email: data.email,
        company: data.company,
        industry: data.industry,
        ai_integration: data.ai_integration,
        date: data.date,
        status: 'pending'
      };
      
      const result = await saveConsultationRequest(consultationData);
      
      if (result.success) {
        toast({
          title: "Consultation Request Submitted",
          description: "We'll contact you shortly to confirm your consultation.",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Error Submitting Request",
          description: "Please try again or contact us directly.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again later.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-white">
      <Navbar />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-2xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-electric/90">
              Book a Free Consultation
            </h2>
            <p className="text-gray-300">
              Let's discuss how AI can transform your business. Fill out the form below to schedule your free consultation.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="text-black" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Email" type="email" {...field} className="text-black" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Company Name (Optional)" {...field} className="text-black" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Industry" {...field} className="text-black" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ai_integration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Briefly Describe Your AI Needs</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Briefly describe how you'd like AI to help your business"
                          className="resize-none text-black"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Date</FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          {...field}
                          className="text-black"
                          value={field.value instanceof Date ? field.value.toISOString().split('T')[0] : ''}
                          onChange={(e) => {
                            const selectedDate = new Date(e.target.value);
                            field.onChange(selectedDate);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-electric hover:opacity-90 text-white">
                  Submit Request
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultation;
