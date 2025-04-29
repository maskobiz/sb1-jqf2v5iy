import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Star, Users, Wifi, Mountain, MapPin, Coffee, Snowflake } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

const images = [
  'https://framerusercontent.com/images/aMtrHv2hjKWcQlDdXmapL5wNt9I.webp',
  'https://images.unsplash.com/photo-1575517111478-7f6afd0973db',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
];

const images2 = [
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
];

const PropertyDetails: React.FC = () => {
  return (
    <section id="property-details-section" className="py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="section-title text-center mb-12">
            Property
          </h2>
          {/* <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Explore our luxurious apartments & rooms that are filled with all you need for the perfect swiss vacation.
          </p> */}
        </div>

        {/* Properties */}
        <div className="flex flex-col gap-16">
          {/* First Property */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Left: Swiper */}
            <div className="relative w-full h-[400px] md:h-[650px]">
              <div className="absolute top-6 left-6 z-10 bg-black/80 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                From €199/night
              </div>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop
                navigation
                modules={[Navigation]}
                className="h-full"
              >
                {images.map((url, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={url}
                      alt={`Luxury Chalet view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Right: Info */}
            <div className="p-8 flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">4.9 (128 reviews)</span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Alpine Luxury Chalet
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-600">
                  Experience the perfect blend of traditional alpine charm and modern luxury in our
                  spacious chalet. Nestled in the heart of the Swiss Alps, this property offers
                  breathtaking mountain views and world-class amenities.
                </p>

                {/* Amenities */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600">Up to 8 guests</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mountain className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600">Ski-in/Ski-out</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wifi className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600">High-speed WiFi</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600">Prime Location</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-2 mt-4">
                  <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">Swiss Alps, Switzerland</p>
                    <p className="text-gray-600">10 minutes from ski lifts</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a
                  href="/booking"
                  className="bg-black text-white text-lg font-semibold px-8 py-4 rounded-full hover:bg-gray-800 transition text-center"
                >
                  Book Now
                </a>
                <a
                  href="/pricing"
                  className="border-2 border-black text-black text-lg font-semibold px-8 py-4 rounded-full hover:bg-black hover:text-white transition text-center"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          {/* Second Property */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Right: Swiper */}
            <div className="relative w-full h-[400px] md:h-[650px] order-1 md:order-2">
              <div className="absolute top-6 left-6 z-10 bg-black/80 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                From €249/night
              </div>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop
                navigation
                modules={[Navigation]}
                className="h-full"
              >
                {images2.map((url, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={url}
                      alt={`Modern Villa view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Left: Info */}
            <div className="p-8 flex flex-col justify-between order-2 md:order-1">
              <div className="flex flex-col gap-6">
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">4.8 (96 reviews)</span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Modern Mountain Villa
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-600">
                  A contemporary masterpiece with floor-to-ceiling windows offering panoramic mountain 
                  views. This villa combines sleek modern design with the warmth of alpine living, 
                  featuring a private hot tub and state-of-the-art entertainment system.
                </p>

                {/* Amenities */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600">Up to 6 guests</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Snowflake className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600">Private Hot Tub</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Coffee className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600">Espresso Machine</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wifi className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600">Smart Home System</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-2 mt-4">
                  <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">Austrian Alps, Austria</p>
                    <p className="text-gray-600">5 minutes from village center</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a
                  href="/booking"
                  className="bg-black text-white text-lg font-semibold px-8 py-4 rounded-full hover:bg-gray-800 transition text-center"
                >
                  Book Now
                </a>
                <a
                  href="/pricing"
                  className="border-2 border-black text-black text-lg font-semibold px-8 py-4 rounded-full hover:bg-black hover:text-white transition text-center"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PropertyDetails;
