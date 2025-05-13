
import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '@/components/TestimonialCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I've worked with many people, but ActuonAI stands out. Their approach is clear, precise, and always focused on delivering real value.",
      author: "Andrew Parker",
      role: "Product Manager",
      company: "TechGrowth Inc."
    },
    {
      quote: "The process was very hands-off, yet the impact was huge. ActuonAI and their team didn't just automate, we saw growth.",
      author: "Alfa Peterson",
      role: "Operations Lead",
      company: "DataFlow Systems"
    },
    {
      quote: "ActuonAI brought an energy and insight that we needed. The automation implementation was seamless, and the results were immediate. A fantastic experience, highly recommended!",
      author: "Marco Alvarez",
      role: "CTO",
      company: "InnovateTech"
    },
    {
      quote: "The team is exceptional. They really took the time to understand our needs and delivered a system that just works, no hassle.",
      author: "Terell Harris",
      role: "Head of Operations",
      company: "Quantum Solutions"
    },
    {
      quote: "ActuonAI's dedication and expertise are unmatched. They made complex AI solutions easy to understand and implement. A true professional with a hands-on approach.",
      author: "Juho Virtanen",
      role: "CEO",
      company: "Nordic Innovations"
    },
    {
      quote: "ActuonAI and the team worked seamlessly together. They not only automated our operations but also provided constant support and clarity throughout the journey.",
      author: "Kyle Thompson",
      role: "Marketing Director",
      company: "Global Media Partners"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-white">
      <Navbar />
      
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(62,146,204,0.08),transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-electric/90">
              What Our Clients Say
            </h1>
            <p className="text-xl text-gray-300">
              Hear from business leaders who have transformed their operations with our AI solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
