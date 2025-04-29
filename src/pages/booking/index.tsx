import React from 'react';
import { Calendar, Users, CreditCard, MapPin, Clock } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
          alt="Luxury Villa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Book Your Stay</h1>
            <p className="text-xl md:text-2xl">Experience luxury in the heart of the mountains</p>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-8">Reservation Details</h2>
              
              <form className="space-y-8">
                {/* Property Selection */}
                <div>
                  <label className="block text-lg font-medium mb-4">Select Property</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-xl p-4 cursor-pointer hover:border-black transition">
                      <h3 className="text-xl font-bold mb-2">Alpine Luxury Chalet</h3>
                      <p className="text-gray-600">From €199/night</p>
                    </div>
                    <div className="border rounded-xl p-4 cursor-pointer hover:border-black transition">
                      <h3 className="text-xl font-bold mb-2">Modern Mountain Villa</h3>
                      <p className="text-gray-600">From €249/night</p>
                    </div>
                  </div>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-lg font-medium mb-4">Dates</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:border-black"
                        placeholder="Check-in"
                      />
                    </div>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:border-black"
                        placeholder="Check-out"
                      />
                    </div>
                  </div>
                </div>

                {/* Guest Information */}
                <div>
                  <label className="block text-lg font-medium mb-4">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:border-black">
                      <option>1 guest</option>
                      <option>2 guests</option>
                      <option>3 guests</option>
                      <option>4 guests</option>
                      <option>5 guests</option>
                      <option>6 guests</option>
                      <option>7 guests</option>
                      <option>8 guests</option>
                    </select>
                  </div>
                </div>

                {/* Payment Information */}
                <div>
                  <label className="block text-lg font-medium mb-4">Payment Method</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:border-black"
                        placeholder="Card Number"
                      />
                    </div>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:border-black"
                        placeholder="Expiry Date"
                      />
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-lg font-medium mb-4">Special Requests</label>
                  <textarea
                    className="w-full p-4 border rounded-lg focus:outline-none focus:border-black"
                    rows={4}
                    placeholder="Any special requests or requirements?"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-black text-white text-lg font-semibold py-4 rounded-lg hover:bg-gray-800 transition"
                >
                  Complete Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking; 