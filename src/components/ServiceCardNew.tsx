
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceCardNewProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  link?: string;
  colorAccent?: string;
}

const ServiceCardNew: React.FC<ServiceCardNewProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  benefits,
  link,
  colorAccent = 'from-electric to-purple-600'
}) => {
  const cardContent = (
    <motion.div 
      className="group bg-[#1a1f2c]/40 backdrop-blur-sm rounded-xl p-6 border border-white/5 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col justify-between"
      whileHover={{ 
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(62, 146, 204, 0.25)"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${colorAccent} mb-6`}>
          <Icon size={28} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-electric transition-colors">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <span className="text-electric mr-2">•</span>
              <span className="text-gray-300">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {link && (
        <div className="mt-4">
          <span className="text-electric font-medium inline-flex items-center group-hover:underline">
            Learn more
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      )}
    </motion.div>
  );

  if (link) {
    return <Link to={link} className="block h-full">{cardContent}</Link>;
  }

  return cardContent;
};

export default ServiceCardNew;
