
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, MessageSquare, Brain, TrendingUp, Funnel } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import ServiceCardNew from '@/components/ServiceCardNew';
import ImplementationTimeline from '@/components/ImplementationTimeline';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Index = () => {
  const benefits = [
    {
      title: "Accelerated Decision Making",
      description: "Reduce analysis time by up to 85% with automated data processing and real-time dashboards that highlight critical insights instantly.",
      icon: "⚡️"
    },
    {
      title: "Enhanced Accuracy",
      description: "Achieve 99.8% data accuracy with AI-powered validation and anomaly detection that identifies and corrects inconsistencies automatically.",
      icon: "🛡️"
    },
    {
      title: "Cost Reduction",
      description: "Lower operational costs by 30-50% by eliminating manual data processing and reducing the need for specialized data analysis personnel.",
      icon: "💰"
    },
    {
      title: "Scalable Operations",
      description: "Handle 10x the workload without adding staff by automating routine processes that previously required manual intervention.",
      icon: "📈"
    }
  ];
  
  const services = [
    {
      title: "Automate Your Repetitive Work",
      description: "We identify and automate the time-consuming tasks eating up your team's day, from data entry to report generation and client updates.",
      icon: Zap,
      benefits: [
        "Free up 15+ hours of team time per week",
        "Eliminate errors in routine processes",
        "Scale operations without adding headcount"
      ],
      link: "/services",
      accent: "from-cyan-400 to-blue-600"
    },
    {
      title: "24/7 Client Communication",
      description: "AI chatbots and voice systems that handle routine client questions, meeting scheduling, and updates, ensuring clients always get immediate responses.",
      icon: MessageSquare,
      benefits: [
        "Never miss a client message",
        "Immediate responses at any hour",
        "Seamless handoff to humans when needed"
      ],
      link: "/services",
      accent: "from-violet-400 to-violet-700"
    },
    {
      title: "Talk to Your Data, Get Instant Insights",
      description: "We train powerful AI models like ChatGPT, Claude, and Gemini on your business data, creating custom assistants that deliver insights through simple conversations.",
      icon: Brain,
      benefits: [
        "Ask questions in plain English and get immediate answers",
        "Connect AI to your business documents, databases, and tools",
        "Make informed decisions without waiting for reports"
      ],
      link: "/services",
      accent: "from-green-400 to-emerald-600"
    },
    {
      title: "See Business Outcomes Before They Happen",
      description: "Custom machine learning models built on your specific business data that predict trends, identify opportunities, and forecast results with actuarial precision.",
      icon: TrendingUp,
      benefits: [
        "Forecast campaign performance before launch",
        "Predict resource needs and budget requirements",
        "Identify high-value opportunities using historical patterns"
      ],
      link: "/services",
      accent: "from-amber-400 to-orange-600"
    },
    {
      title: "More Qualified Leads, Less Work",
      description: "Our AI systems find and qualify potential clients for your business, delivering a steady stream of prospects without the manual prospecting work.",
      icon: Funnel,
      benefits: [
        "Automated outreach that sounds human",
        "Smart qualification to focus on high-value prospects",
        "Consistent lead pipeline with minimal oversight"
      ],
      link: "/services",
      accent: "from-pink-400 to-rose-600"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-white">
      <Navbar />

      {/* Hero Section */}
      <Hero 
        title="Automate Your Business with AI"
        subtitle="Supercharge your business with AI, integrating powerful LLMs like ChatGPT, Claude, and Gemini directly in your business workflows"
        ctaText="Book Free Consultation"
        ctaLink="/consultation"
      />

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(62,146,204,0.08),transparent_60%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-electric/90">Key Benefits</h2>
            <p className="text-xl text-gray-300">
              Our business intelligence solutions deliver measurable improvements across your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1f2c]/40 backdrop-blur-sm rounded-xl p-6 border border-white/5 shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(62, 146, 204, 0.15)"
                }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(62,146,204,0.05),transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-electric/90">Our Services</h2>
            <p className="text-xl text-gray-300">
              Practical AI solutions that solve real business problems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCardNew
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                benefits={service.benefits}
                link={service.link}
                colorAccent={service.accent}
              />
            ))}
          </div>

          <div className="text-center mt-14">
            <Link to="/services">
              <Button variant="outline" className="border-electric text-electric hover:bg-electric hover:text-white">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <ImplementationTimeline />

      {/* Why Choose Us Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(62,146,204,0.08),transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-electric/90">Why Choose ActuonAI</h2>
            <p className="text-xl text-gray-300">
              We bring technical precision to practical business solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-gradient-to-br from-[#1a1f2c]/80 to-[#1a1f2c]/40 backdrop-blur-sm rounded-xl p-8 border border-white/5 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Actuarial Expertise + AI Innovation</h3>
              <p className="text-gray-300 mb-4">
                Founded by actuaries and data scientists, we bring mathematical precision to AI implementation, ensuring solutions that deliver measurable business results.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-electric mr-2">•</span>
                  <span className="text-gray-300">Deep expertise in statistical modeling and risk analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-electric mr-2">•</span>
                  <span className="text-gray-300">Practical business focus rather than theoretical AI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-electric mr-2">•</span>
                  <span className="text-gray-300">Solutions designed with ROI as the primary metric</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-[#1a1f2c]/80 to-[#1a1f2c]/40 backdrop-blur-sm rounded-xl p-8 border border-white/5 shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">No-Code Implementation</h3>
              <p className="text-gray-300 mb-4">
                We handle all the technical complexity, delivering solutions your team can use immediately without becoming AI experts themselves.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-electric mr-2">•</span>
                  <span className="text-gray-300">User-friendly interfaces that require minimal training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-electric mr-2">•</span>
                  <span className="text-gray-300">Integration with tools your team already uses daily</span>
                </li>
                <li className="flex items-start">
                  <span className="text-electric mr-2">•</span>
                  <span className="text-gray-300">Comprehensive support to ensure adoption and success</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div 
            className="mt-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/consultation">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-electric hover:opacity-90 text-white">
                Book Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
