import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="overflow-hidden">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <div className="space-y-16 md:space-y-12">
                <PropertyDetails />
                <PhotoGallery />
                <Amenities />
                <Location />
              </div>
            </>
          } />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;