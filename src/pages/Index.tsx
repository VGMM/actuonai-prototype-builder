
import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, MessageSquare, Settings, BarChart, Calendar, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const benefits = [
    {
      title: "Data-Driven Insights",
      description: "Make informed decisions with real-time analytics and insights tailored to your business needs."
    },
    {
      title: "Cost Efficiency",
      description: "Reduce operational costs while increasing productivity through intelligent automation."
    },
    {
      title: "Scalable Solutions",
      description: "Our solutions grow with your business, ensuring long-term value and adaptability."
    },
    {
      title: "Expert Implementation",
      description: "Benefit from our deep expertise in actuarial science, data analysis, and AI integration."
    }
  ];

  const testimonials = [
    {
      quote: "ActuonAI transformed our reporting process from a monthly headache into a real-time dashboard that our entire team can use. The ROI was evident within weeks.",
      author: "Michael Roberts",
      role: "CFO",
      company: "FinTech Solutions"
    },
    {
      quote: "We tried several automation tools before finding ActuonAI. Their approach is different - they actually understand our business needs and built solutions that work for us.",
      author: "Jennifer Lee",
      role: "Operations Director",
      company: "Healthcare Partners"
    },
    {
      quote: "The predictive analytics system ActuonAI built for us has dramatically improved our inventory management. Their team made complex AI technology accessible and practical.",
      author: "Robert Williams",
      role: "Supply Chain Manager",
      company: "Global Manufacturing Ltd"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <Hero 
        title="Business Intelligence, Automated"
        subtitle="Transforming business operations with cutting-edge AI automation solutions that non-technical teams can easily use and understand"
        ctaText="Book Free Consultation"
        ctaLink="/consultation"
      />

      {/* What We Do Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">
              ActuonAI delivers powerful automation solutions that transform your business intelligence operations,
              helping you make better decisions faster and with greater confidence.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-electric/10 text-electric p-4 mb-4">
                <BarChart size={32} />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Simplify Complex Data</h3>
              <p className="text-gray-600">We turn your complex data into clear, actionable insights that anyone in your organization can understand.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-electric/10 text-electric p-4 mb-4">
                <Settings size={32} />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Automate Workflows</h3>
              <p className="text-gray-600">Free your team from repetitive tasks with intelligent automation systems that learn and improve over time.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-electric/10 text-electric p-4 mb-4">
                <Calendar size={32} />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Drive Better Decisions</h3>
              <p className="text-gray-600">Make confident business decisions based on accurate forecasts and real-time business intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">How We Make AI Accessible</h2>
            <p className="text-xl text-gray-600">
              We translate complex technology into practical business solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-electric/30"></div>
              
              {/* Steps */}
              <div className="space-y-12">
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-navy mb-2">Discovery</h3>
                        <p className="text-gray-600">We start by understanding your business challenges and goals in a no-jargon conversation.</p>
                      </div>
                    </div>
                    <div className="mx-auto md:mx-0 flex items-center justify-center w-8 h-8 rounded-full bg-electric text-white font-bold z-10 mb-4 md:mb-0">1</div>
                    <div className="flex-1 md:pl-8 order-1 md:order-2"></div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 md:text-right order-2 md:order-2"></div>
                    <div className="mx-auto md:mx-0 flex items-center justify-center w-8 h-8 rounded-full bg-electric text-white font-bold z-10 mb-4 md:mb-0">2</div>
                    <div className="flex-1 md:pl-8 order-1 md:order-1">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-navy mb-2">Solution Design</h3>
                        <p className="text-gray-600">We design a customized solution that addresses your specific needs, with clear metrics for success.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-navy mb-2">Implementation</h3>
                        <p className="text-gray-600">We build and implement your solution with a focus on user-friendly interfaces and seamless integration.</p>
                      </div>
                    </div>
                    <div className="mx-auto md:mx-0 flex items-center justify-center w-8 h-8 rounded-full bg-electric text-white font-bold z-10 mb-4 md:mb-0">3</div>
                    <div className="flex-1 md:pl-8 order-1 md:order-2"></div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 md:text-right order-2 md:order-2"></div>
                    <div className="mx-auto md:mx-0 flex items-center justify-center w-8 h-8 rounded-full bg-electric text-white font-bold z-10 mb-4 md:mb-0">4</div>
                    <div className="flex-1 md:pl-8 order-1 md:order-1">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-navy mb-2">Ongoing Support</h3>
                        <p className="text-gray-600">We provide training, support, and continuous improvement to maximize the value of your solution.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="Business Intelligence"
              description="Turn your data into actionable insights with automated analytics and reporting."
              icon={Activity}
              link="/services"
            />
            <ServiceCard
              title="Customer Engagement"
              description="Connect with customers 24/7 using AI-powered communication systems."
              icon={MessageSquare}
              link="/services"
            />
            <ServiceCard
              title="Process Optimization"
              description="Eliminate repetitive tasks and streamline workflows with intelligent automation."
              icon={Settings}
              link="/services"
            />
            <ServiceCard
              title="Predictive Analytics"
              description="Forecast business trends with actuarial precision and data-driven models."
              icon={BarChart}
              link="/services"
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Hear from businesses that have transformed their operations with ActuonAI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">Why Choose ActuonAI</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <Check className="h-6 w-6 text-electric" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-3">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/consultation">
              <Button size="lg" className="bg-electric hover:bg-electric/90 text-white">Book Free Consultation</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
