
import React from 'react';
import TimelineItem from './TimelineItem';

const timelineData = [
  {
    year: '2022',
    title: 'Founding',
    description: 'The Chittoor Project was founded with the goal of empowering rural students.',
    imageUrl: '/images/about/timeline/founding.jpg',
  },
  {
    year: '2023',
    title: 'First Mentorship Batch',
    description: 'Launched our first mentorship program, connecting 25 students with mentors.',
    imageUrl: '/images/about/timeline/mentorship_batch.jpg',
  },
  {
    year: '2024',
    title: 'Scholarship Launch',
    description: 'Introduced a scholarship fund to support students in higher education.',
    imageUrl: '/images/about/timeline/scholarship_launch.jpg',
  },
  {
    year: '2025',
    title: 'Impact Expansion',
    description: 'Expanded our programs to reach over 100 students in the region.',
    imageUrl: '/images/about/timeline/impact_expansion.jpg',
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="relative">
      <div className="border-l-2 border-blue-500 absolute h-full left-1/2 -translate-x-1/2"></div>
      {timelineData.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Timeline;
