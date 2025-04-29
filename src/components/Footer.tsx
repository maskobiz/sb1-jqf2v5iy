import React from 'react';
import { Home, MapPin, Mail, Phone, Heart, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 rounded-t-3xl">
      <div className="container mx-auto py-4 px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Home className="h-6 w-6 text-blue-400" />
              <span className="font-bold text-xl">LuxuryStay</span>
            </div>
            <p className="text-slate-300 mb-6">
              Luxury vacation rentals in the most beautiful destinations. Experience exceptional service and unforgettable stays.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="p-6 rounded-2xl">
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/pricing" label="Pricing" />
              <FooterLink href="/policies" label="Policies" />
              <FooterLink href="/booking" label="Book Now" />
            </ul>
          </div>
          
          <div className="p-6 rounded-2xl">
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Yogyakarta, Indonesia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a href="https://x.com/maskobiz" className="text-slate-300 hover:text-white transition-colors">
                  x.com/maskobiz
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+12345677" className="text-slate-300 hover:text-white transition-colors">
                  +62 (857) 123-45677
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm mb-4">
            © {new Date().getFullYear()} LuxuryStay. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <a href="/policies" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/policies" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/policies" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => {
  return (
    <li>
      <a 
        href={href}
        className="text-slate-300 hover:text-white transition-colors"
      >
        {label}
      </a>
    </li>
  );
};

export default Footer;