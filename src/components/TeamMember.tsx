
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageSrc?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, imageSrc }) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center mb-4">
          <Avatar className="h-24 w-24 mb-4">
            {imageSrc ? (
              <AvatarImage src={imageSrc} alt={name} />
            ) : (
              <AvatarFallback className="text-xl bg-electric text-white">{initials}</AvatarFallback>
            )}
          </Avatar>
          <h3 className="text-xl font-bold text-navy">{name}</h3>
          <p className="text-electric font-medium">{role}</p>
        </div>
        <p className="text-gray-600">{bio}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
