
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  imageSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  imageSrc,
}) => {
  const initials = author
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-[#1a1f2c]/40 backdrop-blur-sm rounded-xl border border-white/5">
      <CardContent className="p-6 relative">
        <div className="absolute top-4 left-4 text-electric/20">
          <Quote size={48} />
        </div>
        <div className="pt-8">
          <p className="text-gray-300 italic relative z-10 mb-6">{quote}</p>
          <div className="flex items-center">
            <Avatar className="h-12 w-12 mr-4">
              {imageSrc ? (
                <AvatarImage src={imageSrc} alt={author} />
              ) : (
                <AvatarFallback className="bg-electric/80 text-white">{initials}</AvatarFallback>
              )}
            </Avatar>
            <div>
              <p className="font-semibold text-white">{author}</p>
              <p className="text-sm text-gray-400">
                {role}, {company}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
