import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] mx-4 mt-4 rounded-3xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.pexels.com/photos/3735158/pexels-photo-3735158.jpeg"
          alt="Modern glass chalet at twilight"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
      
      {/* Content */}
      <div className="relative h-full container mx-auto px-4 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
            Book the best trip of your life
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in">
            Award-winning resorts in Swiss alps.
          </p>
          <a 
            href="#booking" 
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/90 animate-fade-in"
          >
            Explore & Book
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;