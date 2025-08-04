// SectionHeader Component
import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-400 max-w-xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
