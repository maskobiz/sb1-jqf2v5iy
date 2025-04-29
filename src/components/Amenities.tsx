import React, { useState } from 'react';
import { 
  Utensils, 
  Tv, 
  Wifi, 
  Wind, 
  Waves, 
  CarFront, 
  ChefHat, 
  Dumbbell,
  Shirt,
  Music,
  Lock,
  ShowerHead
} from 'lucide-react';

const amenitiesData = {
  indoor: [
    { id: 1, name: "Fully Equipped Kitchen", description: "Professional-grade appliances, cookware, and dinnerware for 12", icon: <Utensils /> },
    { id: 2, name: "Entertainment Systems", description: "75-inch smart TVs, surround sound, streaming services", icon: <Tv /> },
    { id: 3, name: "High-Speed WiFi", description: "Fiber optic internet throughout the property", icon: <Wifi /> },
    { id: 4, name: "Climate Control", description: "Zoned AC and heating with smart thermostats", icon: <Wind /> },
    { id: 5, name: "Laundry Facilities", description: "Washer, dryer, and laundry supplies provided", icon: <Shirt /> },
    { id: 6, name: "Sound System", description: "Integrated speakers in all main rooms and outdoor areas", icon: <Music /> },
    { id: 7, name: "Security System", description: "Smart locks, cameras, and 24/7 monitoring", icon: <Lock /> },
    { id: 8, name: "Luxury Bathrooms", description: "Rain showers, soaking tubs, and premium toiletries", icon: <ShowerHead /> }
  ],
  outdoor: [
    { id: 9, name: "Infinity Pool", description: "Heated pool with panoramic ocean views", icon: <Waves /> },
    { id: 10, name: "Private Parking", description: "Covered parking for up to 3 vehicles", icon: <CarFront /> },
    { id: 11, name: "Outdoor Kitchen", description: "BBQ grill, pizza oven, and dining area", icon: <ChefHat /> },
    { id: 12, name: "Fitness Equipment", description: "Outdoor exercise area with basic equipment", icon: <Dumbbell /> }
  ]
};

type AmenityCategory = 'indoor' | 'outdoor';

const Amenities: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<AmenityCategory>('indoor');
  
  return (
    <section id="amenities" className="pt-8 pb-0">
      <div className="max-w-screen-xl mx-auto px-4 animate-slide-up mt-12">
      <div className="animate-slide-up mt-12">
        <h2 className="section-title text-center mb-12">Amenities</h2>
        
        {/* Category Tabs */}
        <div className="flex mb-8 border-b">
          <button
            className={`pb-3 px-6 text-lg font-medium transition-colors ${
              activeCategory === 'indoor' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
            onClick={() => setActiveCategory('indoor')}
          >
            Indoor
          </button>
          <button
            className={`pb-3 px-6 text-lg font-medium transition-colors ${
              activeCategory === 'outdoor' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
            onClick={() => setActiveCategory('outdoor')}
          >
            Outdoor
          </button>
        </div>
        
        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {amenitiesData[activeCategory].map(amenity => (
            <div 
              key={amenity.id}
              className="bg-white rounded-xl p-4 shadow-sm transition-all duration-300 hover:shadow-md border border-slate-100"
            >
              <div className="flex items-start gap-3">
                <div className="p-3 bg-blue-50 rounded-full">
                  <div className="text-blue-600 w-6 h-6">
                    {amenity.icon}
                  </div>
                </div>
              <div>
                  <h3 className="font-bold text-lg mb-1">{amenity.name}</h3>
                  <p className="text-slate-600 text-sm">{amenity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Amenities */}
        <div className="mt-12 bg-slate-50 p-8 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Additional Amenities & Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <p>Daily housekeeping service (included)</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <p>Welcome basket with local specialties</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <p>Beach chairs, umbrellas, and towels</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <p>Private chef service (additional fee)</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <p>Yoga and massage services (additional fee)</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <p>Airport transfer service (additional fee)</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <p>Snorkeling and water sports equipment</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <p>24/7 concierge service via phone/app</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Amenities;