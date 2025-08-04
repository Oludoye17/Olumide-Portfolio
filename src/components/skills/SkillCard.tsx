// src/components/SkillCard.tsx

// SkillCard.tsx
import React from "react";

interface SkillCardProps {
  skill: {
    name: string;
    level: string;
  };
  isHighlighted: boolean;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-xl shadow-md hover:scale-105 transition-transform">
      <h3 className="text-xl font-semibold">{skill.name}</h3>
      <p className="text-gray-400">{skill.level}</p>
    </div>
  );
};

export default SkillCard;

