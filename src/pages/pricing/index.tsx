import React from 'react';
import { Star, Users, Wifi, Mountain, MapPin, Coffee, Snowflake } from 'lucide-react';

const PricingAndRules: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
          alt="Luxury Villa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Pricing & House Rules</h1>
            <p className="text-xl md:text-2xl">Everything you need to know about your stay</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Pricing Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Rate */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Standard Rate</h3>
              <p className="text-4xl font-bold mb-4">€199<span className="text-lg">/night</span></p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>Minimum 2 nights stay</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-600" />
                  <span>Up to 8 guests</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wifi className="w-5 h-5 text-gray-600" />
                  <span>High-speed WiFi included</span>
                </li>
              </ul>
            </div>

            {/* Peak Season */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Peak Season</h3>
              <p className="text-4xl font-bold mb-4">€249<span className="text-lg">/night</span></p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>Minimum 3 nights stay</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-600" />
                  <span>Up to 8 guests</span>
                </li>
                <li className="flex items-center gap-2">
                  <Snowflake className="w-5 h-5 text-gray-600" />
                  <span>Private hot tub access</span>
                </li>
              </ul>
            </div>

            {/* Special Offers */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Special Offers</h3>
              <p className="text-4xl font-bold mb-4">€179<span className="text-lg">/night</span></p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>7+ nights stay</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-600" />
                  <span>Up to 8 guests</span>
                </li>
                <li className="flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-gray-600" />
                  <span>Welcome package included</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* House Rules Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">House Rules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">General Rules</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>Check-in: 3:00 PM - 8:00 PM</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>Check-out: 11:00 AM</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>No smoking inside the property</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>No pets allowed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>No parties or events</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Additional Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>Security deposit: €500 (refundable)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>Cleaning fee: €100 per stay</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>Early check-in/late check-out available upon request</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>Free parking available on premises</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>24/7 support available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingAndRules; 