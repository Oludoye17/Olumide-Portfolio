// AnimatedBackground Component
import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
  );
};

export default AnimatedBackground;
