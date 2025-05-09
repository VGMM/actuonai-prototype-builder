
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description, icon }) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="h-12 w-12 rounded-full bg-electric/10 text-electric flex items-center justify-center">
              {icon}
            </div>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <span className="bg-navy text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">
                Step {step}
              </span>
              <h3 className="text-lg font-semibold text-navy">{title}</h3>
            </div>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProcessStep;
