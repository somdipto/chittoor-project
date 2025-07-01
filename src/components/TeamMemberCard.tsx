import React, { useState } from 'react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl: string;
  funFact: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, imageUrl, funFact }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-80 text-white p-4 flex items-center justify-center transition-opacity duration-300">
          <div className="text-center">
            <p className="text-sm italic">"{funFact}"</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMemberCard;
