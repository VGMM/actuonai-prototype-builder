
import React from 'react';
import { Activity, MessageSquare, Settings, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ServiceDetailProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  caseStudy: {
    title: string;
    description: string;
  };
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ title, icon, description, features, caseStudy }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10 animate-fade-in">
      <div className="p-8">
        <div className="flex items-start">
          <div className="inline-flex items-center justify-center rounded-md bg-electric/10 text-electric p-3 mr-4">
            {icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-navy mb-3">{title}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
            
            <h4 className="text-lg font-semibold text-navy mb-3">Key Features:</h4>
            <ul className="space-y-2 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-electric mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <h4 className="text-lg font-semibold text-navy mb-2">Case Study: {caseStudy.title}</h4>
              <p className="text-gray-600">{caseStudy.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Business Intelligence Automation",
      icon: <Activity size={28} />,
      description: "Turn your data into actionable insights with automated analytics and reporting systems that deliver real-time business intelligence.",
      features: [
        "Automated data collection and processing",
        "Real-time dashboards and visualizations",
        "Custom KPI tracking and alerts",
        "Integrated business reporting"
      ],
      caseStudy: {
        title: "Financial Services Firm",
        description: "Reduced reporting time by 85% while increasing data accuracy through automated intelligence gathering and analysis."
      }
    },
    {
      title: "Customer Engagement Systems",
      icon: <MessageSquare size={28} />,
      description: "Connect with customers 24/7 using AI-powered communication systems that understand, respond, and continuously improve.",
      features: [
        "AI chatbots and virtual assistants",
        "Personalized customer interactions",
        "Sentiment analysis and feedback processing",
        "Omnichannel communication integration"
      ],
      caseStudy: {
        title: "E-commerce Platform",
        description: "Increased customer satisfaction by 42% and reduced support costs by implementing AI-powered engagement systems."
      }
    },
    {
      title: "Process Optimization",
      icon: <Settings size={28} />,
      description: "Eliminate repetitive tasks and streamline workflows with intelligent automation that learns and improves over time.",
      features: [
        "Workflow analysis and optimization",
        "Robotic process automation (RPA)",
        "Document processing and management",
        "Integration with existing systems"
      ],
      caseStudy: {
        title: "Healthcare Provider",
        description: "Automated administrative processes saving 1,200+ hours monthly while reducing errors by 95%."
      }
    },
    {
      title: "Predictive Analytics",
      icon: <BarChart size={28} />,
      description: "Forecast business trends with actuarial precision and data-driven models that help you anticipate market changes.",
      features: [
        "Predictive modeling and forecasting",
        "Risk assessment and management",
        "Market trend analysis",
        "Decision support systems"
      ],
      caseStudy: {
        title: "Manufacturing Company",
        description: "Improved inventory management accuracy by 37% through predictive demand forecasting, reducing costs and stockouts."
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive AI automation solutions tailored to transform your business operations
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {services.map((service, index) => (
              <ServiceDetail
                key={index}
                title={service.title}
                icon={service.icon}
                description={service.description}
                features={service.features}
                caseStudy={service.caseStudy}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-600 mb-6">
              Ready to transform your business with intelligent automation?
            </p>
            <Link to="/consultation">
              <Button size="lg" className="bg-electric hover:bg-electric/90">
                Book Your Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
