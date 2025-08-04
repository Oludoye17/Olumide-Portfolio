// src/components/Navigation.tsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

// NavLink Component
interface NavLinkProps {
  href: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      active ? "text-blue-400" : "text-gray-300 hover:text-white"
    }`}
  >
    {children}
  </button>
);

// Navigation Component
interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => handleNavigation("home")}
              className="text-xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
            >
              OLUDOYE <span className="text-blue-400">OLUMIDE</span>
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                href="home"
                active={currentPage === "home"}
                onClick={() => handleNavigation("home")}
              >
                Home
              </NavLink>
              <NavLink
                href="skills"
                active={currentPage === "skills"}
                onClick={() => handleNavigation("skills")}
              >
                Skills
              </NavLink>
              <NavLink
                href="projects"
                active={currentPage === "projects"}
                onClick={() => handleNavigation("projects")}
              >
                Projects
              </NavLink>
              <NavLink
                href="contact"
                active={currentPage === "contact"}
                onClick={() => handleNavigation("contact")}
              >
                Contact
              </NavLink>
              <NavLink
                href="about"
                active={currentPage === "about"}
                onClick={() => handleNavigation("about")}
                >
                About
                </NavLink>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              href="home"
              active={currentPage === "home"}
              onClick={() => handleNavigation("home")}
            >
              Home
            </NavLink>
            <NavLink
              href="skills"
              active={currentPage === "skills"}
              onClick={() => handleNavigation("skills")}
            >
              Skills
            </NavLink>
            <NavLink
              href="projects"
              active={currentPage === "projects"}
              onClick={() => handleNavigation("projects")}
            >
              Projects
            </NavLink>
            <NavLink
              href="contact"
              active={currentPage === "contact"}
              onClick={() => handleNavigation("contact")}
            >
              Contact
            </NavLink>
            <NavLink
              href="about"
              active={currentPage === "about"}
              onClick={() => handleNavigation("about")} 
              >
              About
              </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
