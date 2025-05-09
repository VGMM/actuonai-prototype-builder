
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      title: "Data-Driven Decision Making",
      description: "We believe in letting data guide business decisions. Our solutions provide clear, actionable insights from complex data sets."
    },
    {
      title: "Client-Focused Solutions",
      description: "Every business is unique. We develop customized solutions that address your specific challenges and opportunities."
    },
    {
      title: "Transparent Results",
      description: "We provide clear metrics and measurable outcomes so you can see the real impact of our solutions on your business."
    },
    {
      title: "Continuous Innovation",
      description: "The world of AI is constantly evolving. We stay at the cutting edge to bring you the latest advancements in automation technology."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About ActuonAI</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Bringing actuarial precision and AI innovation to business automation
          </p>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              These core principles guide everything we do at ActuonAI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Our Expertise</h2>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                ActuonAI was founded on a simple premise: businesses should have access to the same powerful 
                intelligence tools that were once only available to large enterprises with extensive resources.
              </p>
              
              <p className="mb-4">
                With a background in actuarial science, our team brings a unique analytical approach to business 
                intelligence automation. We combine deep statistical knowledge with cutting-edge AI technology 
                to create solutions that deliver measurable results.
              </p>
              
              <p className="mb-4">
                Our expertise spans data analysis, predictive modeling, process optimization, and AI implementation. 
                This multidisciplinary approach allows us to develop comprehensive automation solutions that address 
                complex business challenges.
              </p>
              
              <p className="mb-4">
                We've helped businesses across industries—from finance and healthcare to manufacturing and retail—transform 
                their operations through intelligent automation. Our client-focused approach ensures that every solution 
                we develop is tailored to your specific needs and goals.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link to="/consultation">
                <Button className="bg-electric hover:bg-electric/90">
                  Book a Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
