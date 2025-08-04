// ContactInfo
import React from 'react';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  info: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, info }) => {
  return (
    <div className="flex items-center space-x-4">
      <span>{icon}</span>
      <div>
        <div className="text-sm text-gray-400">{title}</div>
        <div className="text-lg text-white">{info}</div>
      </div>
    </div>
  );
};

export default ContactInfo;
