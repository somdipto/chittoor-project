import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import AboutDropdown from './AboutDropdown';

// Helper function to format the breadcrumb text
const formatBreadcrumb = (path: string) => {
  return path
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const AboutLayout = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  // Remove 'about' from the segments if it exists
  const aboutIndex = pathSegments.indexOf('about');
  const segments = aboutIndex !== -1 ? pathSegments.slice(aboutIndex + 1) : pathSegments;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AboutLayout;
