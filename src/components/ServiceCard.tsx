
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, link }) => {
  const cardContent = (
    <div className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-between">
      <div>
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-electric/10 text-electric mb-4">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold text-navy mb-3 group-hover:text-electric transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      {link && (
        <div className="mt-2">
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
    </div>
  );

  if (link) {
    return <Link to={link} className="block h-full">{cardContent}</Link>;
  }

  return cardContent;
};

export default ServiceCard;
