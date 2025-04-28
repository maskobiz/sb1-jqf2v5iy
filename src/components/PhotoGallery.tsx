import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Image data with high-resolution property photos
const galleryImages = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Villa exterior with ocean view",
    category: "Exterior"
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Luxury living room with ocean view",
    category: "Living Areas"
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Modern kitchen with island",
    category: "Kitchen"
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Master bedroom with balcony",
    category: "Bedrooms"
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/6587907/pexels-photo-6587907.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Infinity pool with ocean view",
    category: "Outdoor"
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Luxury bathroom with bathtub",
    category: "Bathrooms"
  },
  {
    id: 7,
    url: "https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Dining area with sea view",
    category: "Dining"
  },
  {
    id: 8,
    url: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Beachfront view from villa",
    category: "Views"
  },
  {
    id: 9,
    url: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Guest bedroom with twin beds",
    category: "Bedrooms"
  },
  {
    id: 10,
    url: "https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Terrace with lounging area",
    category: "Outdoor"
  },
  {
    id: 11,
    url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Villa garden with tropical plants",
    category: "Exterior"
  },
  {
    id: 12,
    url: "https://images.pexels.com/photos/1101140/pexels-photo-1101140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Home office space",
    category: "Living Areas"
  }
];

const categories = ["All", ...Array.from(new Set(galleryImages.map(image => image.category)))];

const PhotoGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<{open: boolean, imageIndex: number}>({
    open: false,
    imageIndex: 0
  });
  
  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);
  
  const openLightbox = (index: number) => {
    setLightbox({ open: true, imageIndex: index });
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightbox({ ...lightbox, open: false });
    document.body.style.overflow = 'auto';
  };
  
  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setLightbox({
        ...lightbox,
        imageIndex: (lightbox.imageIndex - 1 + filteredImages.length) % filteredImages.length
      });
    } else {
      setLightbox({
        ...lightbox,
        imageIndex: (lightbox.imageIndex + 1) % filteredImages.length
      });
    }
  };
  
  return (
    <section id="gallery" className="py-20">
      <div className="animate-slide-up">
        <h2 className="section-title">Photo Gallery</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">{image.alt}</p>
                  <p className="text-xs opacity-80">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 3D Floor Plan Banner */}
        <div className="mt-12 bg-slate-100 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Interactive 3D Floor Plan</h3>
          <p className="text-slate-600 mb-6">
            Explore every corner of the villa with our interactive 3D floor plan
          </p>
          <button className="btn btn-primary">
            View 3D Floor Plan
          </button>
        </div>
        
        {/* Lightbox */}
        {lightbox.open && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>
            
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
              onClick={() => navigateLightbox('prev')}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <img
              src={filteredImages[lightbox.imageIndex].url}
              alt={filteredImages[lightbox.imageIndex].alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
              onClick={() => navigateLightbox('next')}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
              <p className="text-sm">{filteredImages[lightbox.imageIndex].alt}</p>
              <p className="text-xs opacity-70">
                Image {lightbox.imageIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;