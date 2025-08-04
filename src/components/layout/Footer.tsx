// Footer Component
// src/components/Footer.tsx
import { SiGithub, SiLinkedin, SiGitter } from "react-icons/si";

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors duration-200"
  >
    {icon}
  </a>
);

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-center py-8 border-t border-gray-700">
    <div className="max-w-7xl mx-auto px-4">
      <p className="text-gray-400 mb-4">Follow me on social media:</p>
      <div className="flex justify-center space-x-6 mb-4">
        <SocialLink icon={<SiGithub className="w-6 h-6" />} href="https://github.com/yourusername" />
        <SocialLink icon={<SiLinkedin className="w-6 h-6" />} href="https://linkedin.com/in/yourusername" />
        <SocialLink icon={<SiGitter className="w-6 h-6" />} href="https://gitter.im/yourusername" />
      </div>
      <p className="text-gray-500">© 2024 Oludoye Olumide. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
