// SocialLink Component
import React from 'react';

const SocialLink: React.FC<{ icon: React.ReactNode; href: string }> = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
  >
    {icon}
  </a>
);

export default SocialLink;
