import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  imageUrl: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, imageUrl }) => {
  return (
    <div className="relative mb-12">
      <div className="flex items-center mb-2">
        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center z-10">
          {year}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </div>
      <div className="ml-12">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover rounded-lg mb-2"
        />
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
