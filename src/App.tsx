import React, { useState } from 'react';
import HomePage  from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
// Make sure these paths and files exist, or adjust accordingly:
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'skills':
        return <SkillsPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="pt-16">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
