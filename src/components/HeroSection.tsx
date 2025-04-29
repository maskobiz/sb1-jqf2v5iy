import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] mt-32 rounded-3xl overflow-hidden flex items-stretch">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://framerusercontent.com/images/aMtrHv2hjKWcQlDdXmapL5wNt9I.webp"
          alt="Image of the resort"
          className="w-full h-full object-cover object-center rounded-3xl"
          style={{ imageRendering: 'auto' }}
        />
      </div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent rounded-3xl"></div>
      {/* Overlay Text */}
      <div className="absolute left-0 bottom-0 w-full flex items-end h-full pointer-events-none">
        <div className="p-8 md:p-14 max-w-xl md:max-w-2xl lg:max-w-3xl flex flex-col gap-6 pointer-events-auto">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-2">
            Book the best<br />trip of your life
          </h1>
          <p className="text-white text-lg md:text-2xl mb-4">
            Award-winning resorts in Swiss alps.
          </p>
          <a 
            href="#booking" 
            className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-slate-100 transition w-fit"
            style={{ borderRadius: '365px' }}
          >
            Explore & Book
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;