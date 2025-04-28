import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PropertyDetails from './components/PropertyDetails';
import PhotoGallery from './components/PhotoGallery';
import Amenities from './components/Amenities';
import Location from './components/Location';
import Pricing from './components/Pricing';
import Policies from './components/Policies';
import Booking from './components/Booking';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />
      <main>
        <HeroSection />
        <div className="container mx-auto px-4 md:px-8">
          <PropertyDetails />
          <PhotoGallery />
          <Amenities />
          <Location />
          <Pricing />
          <Policies />
          <Booking />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;