// ContactForm Component
import React from 'react';

const ContactInfo: React.FC<{ icon: React.ReactNode; title: string; info: string }> = ({
  icon,
  title,
  info
}) => (
  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-300">{info}</p>
    </div>
  </div>
);

export default ContactInfo;
