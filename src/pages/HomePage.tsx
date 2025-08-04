// HomePage
// src/pages/HomePage.tsx
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTypewriter } from "../hooks/useTypewriter";
import AnimatedBackground  from "../components/AnimatedBackground";
import  Button  from "../components/Button"; // adjust path if needed

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const typedText = useTypewriter("Full Stack Web Developer");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      <AnimatedBackground />

      <div
        className={`text-center z-10 transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"></div>
            <div className="absolute inset-1 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">OO</span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            OLUDOYE
          </span>
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">OLUMIDE</h2>

        <div className="h-16 flex items-center justify-center mb-8">
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            {typedText}
            <span className="animate-pulse text-blue-400">|</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="primary" onClick={() => onNavigate("projects")}>
            View My Work
          </Button>
          <Button variant="secondary" onClick={() => onNavigate("contact")}>
            Get In Touch
          </Button>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
