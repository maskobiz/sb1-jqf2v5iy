import React, { useState, useEffect } from 'react';
import { Home, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 flex items-center transition-all duration-300 ${
        isScrolled ? 'bg-[#e6e6ed]/70 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex justify-between items-center h-full">
        <a href="/" className="flex items-center gap-3 group">
          <Home className="h-7 w-7 text-slate-900" />
          <span className="font-bold text-2xl tracking-tight text-slate-900">
            LuxuryStay
          </span>
        </a>
        <div className="hidden md:flex items-center gap-12">
          <NavLink href="/" label="Home" />
          <NavLink href="/pricing" label="Pricing" />
          <NavLink href="/policies" label="Policies" />
          <NavLink href="/booking" label="Book Now" isButton />
        </div>
        <button 
          className="md:hidden p-2 rounded-full text-slate-900 hover:bg-slate-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20">
          <div className="container">
            <div className="flex flex-col gap-6 py-6">
              <MobileNavLink href="/" label="Home" />
              <MobileNavLink href="/pricing" label="Pricing" />
              <MobileNavLink href="/policies" label="Policies" />
              <MobileNavLink href="/booking" label="Book Now" isButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  isButton?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, isButton }) => {
  if (isButton) {
    return (
      <a 
        href={href}
        className="px-8 py-3 rounded-full font-medium transition-all duration-300 bg-slate-900 text-white hover:bg-slate-800"
      >
        {label}
      </a>
    );
  }
  return (
    <a 
      href={href}
      className="font-medium text-slate-600 hover:text-slate-900 transition-colors duration-300"
    >
      {label}
    </a>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ href, label, isButton }) => {
  if (isButton) {
    return (
      <a 
        href={href}
        className="px-8 py-3 rounded-full font-medium transition-all duration-300 bg-slate-900 text-white hover:bg-slate-800 text-center"
      >
        {label}
      </a>
    );
  }
  return (
    <a 
      href={href}
      className="font-medium text-slate-600 hover:text-slate-900 transition-colors duration-300 text-center text-lg"
    >
      {label}
    </a>
  );
};

export default Navbar;