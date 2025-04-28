import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <Home className={`h-6 w-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
          <span className={`font-bold text-xl ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            LuxuryStay
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#property" label="Property" isScrolled={isScrolled} />
          <NavLink href="#gallery" label="Gallery" isScrolled={isScrolled} />
          <NavLink href="#amenities" label="Amenities" isScrolled={isScrolled} />
          <NavLink href="#location" label="Location" isScrolled={isScrolled} />
          <NavLink href="#pricing" label="Pricing" isScrolled={isScrolled} />
          <NavLink href="#booking" label="Book Now" isScrolled={isScrolled} isButton />
        </div>
        
        <button className={`md:hidden ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
          <div className="w-6 h-0.5 bg-current mb-1.5"></div>
          <div className="w-6 h-0.5 bg-current mb-1.5"></div>
          <div className="w-6 h-0.5 bg-current"></div>
        </button>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  isScrolled: boolean;
  isButton?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, isScrolled, isButton }) => {
  if (isButton) {
    return (
      <a 
        href={href}
        className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900 text-white hover:bg-slate-800' 
            : 'bg-white text-slate-900 hover:bg-white/90'
        }`}
      >
        {label}
      </a>
    );
  }
  
  return (
    <a 
      href={href}
      className={`font-medium transition-colors duration-300 ${
        isScrolled ? 'text-slate-700 hover:text-slate-900' : 'text-white hover:text-white/80'
      }`}
    >
      {label}
    </a>
  );
};

export default Navbar;