import React from 'react';
import { Home, Users, Bath, BedDouble, Maximize, Building, MapPin, Award } from 'lucide-react';

const PropertyDetails: React.FC = () => {
  return (
    <section id="property" className="py-20">
      <div className="animate-slide-up">
        <h2 className="section-title">Property Overview</h2>
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Oceanfront Villa Paradise</h1>
          <p className="text-xl text-slate-600 mb-8">
            Luxury living meets tropical paradise in this exclusive beachfront property
          </p>
          <p className="text-lg text-slate-700 max-w-4xl mb-10">
            Nestled on a pristine private beach, this stunning oceanfront villa offers an unparalleled luxury experience. With breathtaking panoramic views, modern architectural design, and world-class amenities, it's the perfect escape for those seeking the ultimate in privacy, comfort, and natural beauty.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <FeatureCard icon={<BedDouble />} title="4 Bedrooms" description="Spacious master suites" />
            <FeatureCard icon={<Bath />} title="3.5 Bathrooms" description="Modern fixtures" />
            <FeatureCard icon={<Users />} title="8 Guests" description="6 adults, 2 children" />
            <FeatureCard icon={<Maximize />} title="3,200 sq ft" description="Plus outdoor living" />
          </div>
          
          {/* Standout Features */}
          <div className="bg-slate-50 p-6 md:p-8 rounded-xl mb-12">
            <h3 className="text-xl font-bold mb-4">Standout Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <p>Private infinity pool overlooking the ocean</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <p>Direct beach access with private cabana</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <p>Gourmet kitchen with high-end appliances</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <p>Outdoor entertainment area with BBQ</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <p>Smart home technology throughout</p>
              </div>
            </div>
          </div>
          
          {/* Property Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Property Details</h3>
              <div className="space-y-3">
                <Detail icon={<Building />} label="Property Type" value="Detached Villa" />
                <Detail icon={<Home />} label="Year Built" value="2021" />
                <Detail icon={<Maximize />} label="Indoor Space" value="3,200 sq ft" />
                <Detail icon={<Maximize />} label="Outdoor Space" value="2,100 sq ft" />
                <Detail icon={<MapPin />} label="Beach Front" value="180 ft private shoreline" />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Location Highlights</h3>
              <div className="space-y-3">
                <Detail icon={<MapPin />} label="Nearest Airport" value="Punta Cana International (25 min)" />
                <Detail icon={<MapPin />} label="Nearest Town" value="Las Terrenas (15 min)" />
                <Detail icon={<MapPin />} label="Nearest Restaurant" value="Beachside Grill (5 min walk)" />
                <Detail icon={<MapPin />} label="Nearest Supermarket" value="Market Fresh (10 min drive)" />
                <Detail icon={<MapPin />} label="Beach Access" value="Direct private access" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-blue-50 rounded-full mb-4">
          <div className="text-blue-600 w-6 h-6">
            {icon}
          </div>
        </div>
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

interface DetailProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const Detail: React.FC<DetailProps> = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="text-blue-600 w-5 h-5 flex-shrink-0">{icon}</div>
      <div className="flex flex-col">
        <span className="text-sm text-slate-500">{label}</span>
        <span className="font-medium">{value}</span>
      </div>
    </div>
  );
};

export default PropertyDetails;