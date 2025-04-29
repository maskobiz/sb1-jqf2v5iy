import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="pt-20 pb-20">
      <div className="animate-slide-up mt-12">
        <h2 className="section-title text-center mb-12">Location</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Ideal Beachfront Location</h3>
            <p className="text-slate-700 mb-6">
              Nestled on the pristine shores of Las Terrenas, Dominican Republic, our villa offers the perfect blend of privacy and accessibility. Enjoy direct access to a secluded beach while being just minutes away from local attractions, dining, and activities.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Full Address</h4>
                  <p className="text-slate-600">Playa Coson, Las Terrenas, Samaná 32000, Dominican Republic</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Check-in/Check-out</h4>
                  <p className="text-slate-600">Check-in: 3:00 PM | Check-out: 11:00 AM<br />Self check-in with keypad</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl">
              <h4 className="font-bold mb-3">Distances to Key Locations</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <DistanceItem label="Punta Cana Int'l Airport" value="40 km (25 min drive)" />
                <DistanceItem label="Las Terrenas Town Center" value="4 km (10 min drive)" />
                <DistanceItem label="Beach Access" value="Direct access" />
                <DistanceItem label="Local Restaurants" value="1-3 km (3-8 min drive)" />
                <DistanceItem label="Supermarket" value="3.5 km (8 min drive)" />
                <DistanceItem label="Waterfalls of El Limón" value="12 km (25 min drive)" />
              </div>
            </div>
          </div>
          
          <div>
            <div className="h-[610px] bg-slate-200 rounded-xl overflow-hidden">
              {/* Interactive Map - Using iframe to Google Maps */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60553.05580465783!2d-69.59086566035072!3d19.32155272744654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eae1f5920aac3a5%3A0x4fc7a73b64948781!2sLas%20Terrenas%2C%20Dominican%20Republic!5e0!3m2!1sen!2sus!4v1720229129635!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Property location map"
              ></iframe>
            </div>
            
            {/* <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">About the Neighborhood</h3>
              <p className="text-slate-700 mb-4">
                Las Terrenas is a charming beach town known for its beautiful white sand beaches, turquoise waters, and international community. Once a small fishing village, it has transformed into a vibrant destination while maintaining its authentic Dominican character.
              </p>
              <p className="text-slate-700">
                The area offers a perfect mix of relaxation and adventure - from lounging on pristine beaches to exploring lush mountains, taking boat tours, or enjoying the local culinary scene with its blend of Caribbean, French, and Italian influences.
              </p>
            </div> */}
          </div>
        </div>
        
        {/* Nearby Attractions */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Nearby Attractions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AttractionCard 
              title="El Limón Waterfall" 
              description="Spectacular 40-meter waterfall accessible by horseback or hiking trail" 
              distance="25 min drive"
              image="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <AttractionCard 
              title="Playa Bonita" 
              description="One of the area's most beautiful beaches, perfect for swimming and water sports" 
              distance="15 min drive"
              image="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <AttractionCard 
              title="Los Haitises National Park" 
              description="Coastal reserve with mangrove forests, caves with Taíno art, and diverse wildlife" 
              distance="Day trip"
              image="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface DistanceItemProps {
  label: string;
  value: string;
}

const DistanceItem: React.FC<DistanceItemProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-slate-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
};

interface AttractionCardProps {
  title: string;
  description: string;
  distance: string;
  image: string;
}

const AttractionCard: React.FC<AttractionCardProps> = ({ title, description, distance, image }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md group">
      <div className="aspect-[3/2] overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h4 className="font-bold text-lg mb-2">{title}</h4>
        <p className="text-slate-600 text-sm mb-3">{description}</p>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <MapPin className="w-4 h-4" />
          <span>{distance}</span>
        </div>
      </div>
    </div>
  );
};

export default Location;