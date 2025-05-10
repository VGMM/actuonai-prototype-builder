
import React from 'react';
import { motion } from 'framer-motion';

interface TimelineStepProps {
  number: number;
  title: string;
  description: string;
  delay: number;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ number, title, description, delay }) => {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
    >
      <div className="flex flex-col md:flex-row items-center mb-12">
        <motion.div 
          className="mx-auto md:mx-0 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-electric to-purple-600 text-white font-bold text-xl z-10 mb-4 md:mb-0 shadow-lg"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {number}
        </motion.div>
        
        <div className="md:mx-8 w-full">
          <div className="bg-[#1a1f2c]/40 backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </div>
      
      {/* Connector line between steps */}
      <div className="absolute left-1/2 md:left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-electric/80 to-electric/0 z-0 transform -translate-x-1/2 md:translate-x-0"></div>
    </motion.div>
  );
};

const ImplementationTimeline: React.FC = () => {
  const steps = [
    {
      title: "Discovery",
      description: "We start by understanding your business operations, identifying manual processes, and pinpointing opportunities for AI-powered automation.",
    },
    {
      title: "Solution Design",
      description: "We design a custom implementation plan that integrates AI tools like ChatGPT, Claude, or Gemini with your existing systems and workflows.",
    },
    {
      title: "Proof of Concept",
      description: "We build a small-scale version of your solution to demonstrate immediate value and gather feedback before full implementation.",
    },
    {
      title: "Implementation",
      description: "We deploy your custom AI solution with seamless integration into your existing tools and comprehensive training for your team.",
    },
    {
      title: "Ongoing Support",
      description: "We provide continuous optimization, updates, and support to ensure your AI solution evolves with your business needs.",
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(62,146,204,0.08),transparent_80%)]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-electric/90">How We Make AI Accessible</h2>
          <p className="text-xl text-gray-300">
            We translate complex technology into practical business solutions that deliver immediate value
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <TimelineStep
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImplementationTimeline;
