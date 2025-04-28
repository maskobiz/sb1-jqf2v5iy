import React, { useState } from 'react';
import { Calendar, Users, Clock, Phone, Mail, MessageSquare } from 'lucide-react';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
    name: '',
    email: '',
    phone: '',
    message: '',
    agreeToTerms: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' 
        ? (e.target as HTMLInputElement).checked 
        : value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically handle the booking request
    alert('Thank you for your booking request! We will contact you shortly.');
  };
  
  return (
    <section id="booking" className="py-20">
      <div className="animate-slide-up">
        <h2 className="section-title">Book Your Stay</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-6">Reservation Request</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Check-in/Check-out Dates */}
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">
                      Check-in Date*
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <Calendar className="absolute right-3 top-3 w-5 h-5 text-slate-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">
                      Check-out Date*
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <Calendar className="absolute right-3 top-3 w-5 h-5 text-slate-400" />
                    </div>
                  </div>
                  
                  {/* Guests */}
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">
                      Adults*
                    </label>
                    <div className="relative">
                      <select
                        name="adults"
                        value={formData.adults}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                      >
                        {[1, 2, 3, 4, 5, 6].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                      <Users className="absolute right-3 top-3 w-5 h-5 text-slate-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">
                      Children
                    </label>
                    <div className="relative">
                      <select
                        name="children"
                        value={formData.children}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                      >
                        {[0, 1, 2].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                      <Users className="absolute right-3 top-3 w-5 h-5 text-slate-400" />
                    </div>
                  </div>
                  
                  {/* Contact Information */}
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">
                      Email Address*
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <Mail className="absolute right-3 top-3 w-5 h-5 text-slate-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">
                      Phone Number*
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <Phone className="absolute right-3 top-3 w-5 h-5 text-slate-400" />
                    </div>
                  </div>
                </div>
                
                {/* Special Requests */}
                <div className="mb-6">
                  <label className="block text-slate-700 font-medium mb-2">
                    Special Requests or Questions
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Let us know if you have any special requirements or questions..."
                    ></textarea>
                    <MessageSquare className="absolute right-3 top-3 w-5 h-5 text-slate-400" />
                  </div>
                </div>
                
                {/* Terms & Conditions */}
                <div className="mb-6">
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                    <label htmlFor="agreeToTerms" className="text-slate-600 text-sm">
                      I agree to the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>, including the cancellation policy and house rules. I understand a 50% deposit is required to confirm the booking.
                    </label>
                  </div>
                </div>
                
                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-full">
                  Request Reservation
                </button>
                
                <p className="text-center text-slate-500 text-sm mt-4">
                  This is a reservation request. Your booking is not confirmed until you receive confirmation and make the deposit payment.
                </p>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              
              <div className="space-y-4 mb-8">
                <ContactItem 
                  icon={<Mail className="w-5 h-5 text-blue-600" />}
                  label="Email"
                  value="bookings@oceanfrontvilla.com"
                  link="mailto:bookings@oceanfrontvilla.com"
                />
                
                <ContactItem 
                  icon={<Phone className="w-5 h-5 text-blue-600" />}
                  label="Phone"
                  value="+1 (809) 555-1234"
                  link="tel:+18095551234"
                />
                
                <ContactItem 
                  icon={<Clock className="w-5 h-5 text-blue-600" />}
                  label="Response Time"
                  value="Within 24 hours"
                />
              </div>
              
              <div className="mb-8">
                <h4 className="font-bold mb-3">Property Manager</h4>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-slate-200 rounded-full overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=300"
                      alt="Property Manager"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Maria Rodriguez</p>
                    <p className="text-sm text-slate-600">Local Property Manager</p>
                    <p className="text-sm text-blue-600">Languages: English, Spanish</p>
                  </div>
                </div>
              </div>
              
              {/* Emergency Contact */}
              <div className="bg-amber-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold text-amber-800 mb-2">Emergency Contact</h4>
                <p className="text-amber-800 mb-2">
                  For urgent issues during your stay:
                </p>
                <p className="font-medium text-amber-800">
                  +1 (809) 555-9876
                </p>
                <p className="text-sm text-amber-700 mt-1">
                  Available 24/7 for property emergencies
                </p>
              </div>
              
              {/* Support Services */}
              <div>
                <h4 className="font-bold mb-3">Local Support Services</h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                    <p>Concierge Services: +1 (809) 555-2345</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                    <p>Taxi Service: +1 (809) 555-3456</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                    <p>Medical Clinic: +1 (809) 555-4567</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                    <p>Police Station: +1 (809) 555-5678</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, value, link }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-medium">{label}</h4>
        {link ? (
          <a href={link} className="text-blue-600 hover:underline">
            {value}
          </a>
        ) : (
          <p className="text-slate-600">{value}</p>
        )}
      </div>
    </div>
  );
};

export default Booking;