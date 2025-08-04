// SkillsPage
import React, { useState, useEffect } from "react";
import { skillsData } from "../data/skill";
import SectionHeader from "../components/SectionHeader";
import SkillCard from "../components/skills/SkillCard";

const SkillsPage: React.FC = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skillsData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="My Skills"
          subtitle="Passionate about creating exceptional web experiences with modern technologies"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              isHighlighted={index === currentSkillIndex}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
