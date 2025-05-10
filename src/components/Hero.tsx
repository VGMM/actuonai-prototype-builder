
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#0a1128] via-[#1c2541] to-[#0a2463]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(62,146,204,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(62,146,204,0.1),transparent_50%)]"></div>
        {/* Animated particles */}
        <div className="particle-container">
          {[...Array(20)].map((_, index) => (
            <div 
              key={index} 
              className="particle absolute rounded-full bg-electric/20"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-electric/90"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to={ctaLink}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-electric hover:opacity-90 text-white font-semibold text-lg px-8 py-6 rounded-md shadow-lg hover:shadow-electric/20"
              >
                {ctaText}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-[#121212]">
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,256L48,256C96,256,192,256,288,234.7C384,213,480,171,576,165.3C672,160,768,192,864,197.3C960,203,1056,181,1152,176C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
