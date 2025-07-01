
import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const teamData = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    imageUrl: '/images/about/team/john_doe.jpg',
    funFact: 'Loves to hike in the Chittoor hills.',
  },
  {
    name: 'Jane Smith',
    role: 'Program Director',
    imageUrl: '/images/about/team/jane_smith.jpg',
    funFact: 'A passionate photographer.',
  },
  {
    name: 'Samuel Green',
    role: 'Mentorship Coordinator',
    imageUrl: '/images/about/team/samuel_green.jpg',
    funFact: 'Can speak 5 languages.',
  },
  {
    name: 'Emily White',
    role: 'Volunteer',
    imageUrl: '/images/about/team/emily_white.jpg',
    funFact: 'An avid reader and writer.',
  },
  {
    name: 'Michael Brown',
    role: 'Community Outreach',
    imageUrl: '/images/about/team/michael_brown.jpg',
    funFact: 'Enjoys organizing local sports events.',
  },
  {
    name: 'Sarah Davis',
    role: 'Scholarship Advisor',
    imageUrl: '/images/about/team/sarah_davis.jpg',
    funFact: 'A trained classical dancer.',
  },
];

const TeamGrid: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {teamData.map((member, index) => (
        <TeamMemberCard key={index} {...member} />
      ))}
    </div>
  );
};

export default TeamGrid;
