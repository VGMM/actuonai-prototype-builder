
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CalendarDays, Clock, Headphones, MessageSquare, CheckCircle } from 'lucide-react';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { toast } from "sonner";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessStep from '@/components/ProcessStep';
import { saveConsultationRequest } from '@/utils/consultationService';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  industry: z.string({
    required_error: "Please select an industry.",
  }),
  challenge: z.string({
    required_error: "Please select your main challenge.",
  }),
  date: z.date({
    required_error: "Please select a date for your consultation.",
  }),
});

const Consultation = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const { toast: hookToast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      const result = await saveConsultationRequest(values);
      
      if (result.success) {
        // Show success message using Sonner toast
        toast.success("Consultation Requested", {
          description: `We'll contact you soon to confirm your appointment on ${format(values.date, "PPP")}.`,
        });
        
        // Also show UI toast for redundancy
        hookToast({
          title: "Consultation Requested",
          description: `We'll contact you soon to confirm your appointment on ${format(values.date, "PPP")}.`,
        });
        
        form.reset();
      } else {
        throw new Error("Failed to save consultation request");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      
      toast.error("Something went wrong", {
        description: "Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const industries = [
    "Finance & Banking",
    "Healthcare",
    "Manufacturing",
    "Retail",
    "Technology",
    "Education",
    "Government",
    "Other"
  ];

  const challenges = [
    "Data Management & Analysis",
    "Customer Service Automation",
    "Process Efficiency",
    "Predictive Analytics & Forecasting",
    "Integration with Existing Systems",
    "Other"
  ];

  const consultationSteps = [
    {
      step: 1,
      title: "Discovery Call",
      description: "We'll discuss your business needs and how our AI solutions can help.",
      icon: <MessageSquare size={24} className="text-electric" />
    },
    {
      step: 2,
      title: "Solution Exploration",
      description: "Our experts will outline potential approaches tailored to your business.",
      icon: <CheckCircle size={24} className="text-electric" />
    },
    {
      step: 3,
      title: "Next Steps Plan",
      description: "We'll create a clear roadmap for implementation if you decide to proceed.",
      icon: <CalendarDays size={24} className="text-electric" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy/90 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Book Your Free Consultation</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Schedule a 30-minute session with our AI automation experts to discuss your business needs
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">How Your Consultation Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your 30-minute consultation is designed to identify how AI automation can address your specific business challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {consultationSteps.map((step, index) => (
                <ProcessStep
                  key={index}
                  step={step.step}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <CalendarDays className="h-8 w-8 text-electric" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">30-Minute Session</h3>
                <p className="text-gray-600">A focused discussion about your business needs and how AI automation can help.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <Headphones className="h-8 w-8 text-electric" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">Expert Consultation</h3>
                <p className="text-gray-600">Speak directly with an AI automation specialist with actuarial expertise.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <Clock className="h-8 w-8 text-electric" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">Quick Response</h3>
                <p className="text-gray-600">We'll confirm your appointment within 24 hours of your request.</p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-navy mb-6">Book Your Consultation</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
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
                            <Input placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company name" {...field} />
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
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your industry" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {industries.map((industry) => (
                                <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="challenge"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Main Challenge</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your main challenge" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {challenges.map((challenge) => (
                                <SelectItem key={challenge} value={challenge}>{challenge}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Preferred Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarDays className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => 
                                  date < new Date() || 
                                  date > new Date(new Date().setMonth(new Date().getMonth() + 1))
                                }
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-electric hover:bg-electric/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Scheduling..." : "Schedule Consultation"}
                  </Button>
                </form>
              </Form>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-md border border-gray-100">
                <h3 className="text-lg font-semibold text-navy mb-4">What to Expect</h3>
                <p className="text-gray-600 mb-4">
                  Your free consultation is a no-pressure conversation designed to explore how AI automation 
                  can benefit your business. Here's what we'll cover:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-electric mr-2 flex-shrink-0 mt-0.5" />
                    <span>Current challenges your business is facing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-electric mr-2 flex-shrink-0 mt-0.5" />
                    <span>How AI automation can address these challenges</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-electric mr-2 flex-shrink-0 mt-0.5" />
                    <span>Potential solutions tailored to your specific needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-electric mr-2 flex-shrink-0 mt-0.5" />
                    <span>Next steps and implementation timeline</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultation;
