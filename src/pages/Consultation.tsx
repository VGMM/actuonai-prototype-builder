
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CalendarDays, Clock, Headphones } from 'lucide-react';

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
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
  const [date, setDate] = useState<Date | undefined>(undefined);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Consultation Requested",
      description: `We'll contact you soon to confirm your appointment on ${format(values.date, "PPP")}.`,
    });
    
    console.log(values);
    form.reset();
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

  const infoCards = [
    {
      icon: <CalendarDays className="h-8 w-8 text-electric" />,
      title: "30-Minute Session",
      description: "A focused discussion about your business needs and how AI automation can help."
    },
    {
      icon: <Headphones className="h-8 w-8 text-electric" />,
      title: "Expert Consultation",
      description: "Speak directly with an AI automation specialist with actuarial expertise."
    },
    {
      icon: <Clock className="h-8 w-8 text-electric" />,
      title: "Quick Response",
      description: "We'll confirm your appointment within 24 hours of your request."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Book Your Free Consultation</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Schedule a 30-minute session with our AI automation experts to discuss your business needs
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {infoCards.map((card, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="flex justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white shadow-md rounded-lg p-8">
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
                  
                  <Button type="submit" className="w-full bg-electric hover:bg-electric/90">
                    Schedule Consultation
                  </Button>
                </form>
              </Form>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-md border border-gray-100">
                <h3 className="text-lg font-semibold text-navy mb-2">What to Expect</h3>
                <p className="text-gray-600 mb-4">
                  During your free 30-minute consultation, we'll discuss your business needs and how 
                  AI automation can help you achieve your goals. Here's what we'll cover:
                </p>
                <ul className="space-y-2 text-gray-600 list-disc pl-5">
                  <li>Current challenges your business is facing</li>
                  <li>How AI automation can address these challenges</li>
                  <li>Potential solutions tailored to your specific needs</li>
                  <li>Next steps and implementation timeline</li>
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
