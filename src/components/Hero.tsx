
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-navy via-navy to-navy/90 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 animate-fade-in">
            {subtitle}
          </p>
          <div className="animate-fade-in">
            <Link to={ctaLink}>
              <Button size="lg" className="bg-electric hover:bg-electric/90 text-white font-semibold text-lg">
                {ctaText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,256L48,256C96,256,192,256,288,234.7C384,213,480,171,576,165.3C672,160,768,192,864,197.3C960,203,1056,181,1152,176C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
