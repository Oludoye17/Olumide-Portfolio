// NavLink Component
import React from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; active?: boolean; onClick: () => void }> = ({
  href,
  children,
  active,
  onClick
}) => (
  <button
    onClick={onClick}
    className={`relative px-4 py-2 font-medium transition-all duration-300 ${
      active ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
    } group`}
  >
    {children}
    <span
      className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ${
        active ? 'w-full' : 'group-hover:w-full'
      }`}
    />
  </button>
);

export default NavLink;
