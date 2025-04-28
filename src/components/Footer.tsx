import React from 'react';
import { Home, MapPin, Mail, Phone, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Home className="h-6 w-6 text-blue-400" />
              <span className="font-bold text-xl">LuxuryStay</span>
            </div>
            <p className="text-slate-300 mb-6">
              Luxury vacation rentals in the most beautiful destinations. Experience exceptional service and unforgettable stays.
            </p>
            <div className="flex gap-4">
              <SocialIcon name="facebook" />
              <SocialIcon name="instagram" />
              <SocialIcon name="twitter" />
              <SocialIcon name="pinterest" />
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="#property" label="Property Overview" />
              <FooterLink href="#gallery" label="Photo Gallery" />
              <FooterLink href="#amenities" label="Amenities" />
              <FooterLink href="#location" label="Location" />
              <FooterLink href="#pricing" label="Pricing" />
              <FooterLink href="#policies" label="Policies" />
              <FooterLink href="#booking" label="Book Now" />
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Playa Coson, Las Terrenas, Samaná 32000, Dominican Republic
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:bookings@oceanfrontvilla.com" className="text-slate-300 hover:text-white transition-colors">
                  bookings@oceanfrontvilla.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+18095551234" className="text-slate-300 hover:text-white transition-colors">
                  +1 (809) 555-1234
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-slate-300 mb-4">
              Subscribe to receive special offers and updates about our properties.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex-grow text-slate-800"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-slate-400 text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm mb-4">
            © {new Date().getFullYear()} LuxuryStay. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
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

interface SocialIconProps {
  name: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ name }) => {
  return (
    <a 
      href="#" 
      aria-label={`Follow us on ${name}`}
      className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
    >
      <span className="capitalize">{name.charAt(0)}</span>
    </a>
  );
};

export default Footer;