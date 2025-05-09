
import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, MessageSquare, Settings, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
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

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <Hero 
        title="Business Intelligence, Automated"
        subtitle="Transforming business operations with cutting-edge AI automation solutions"
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
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-12 bg-gray-50">
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

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">Why Choose ActuonAI</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/consultation">
              <Button className="bg-electric hover:bg-electric/90 text-white">Book Free Consultation</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
