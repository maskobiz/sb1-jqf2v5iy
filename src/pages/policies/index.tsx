import React from 'react';
import { Shield, Clock, CreditCard, AlertCircle, HelpCircle } from 'lucide-react';

const Policies: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Luxury Villa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Policies</h1>
            <p className="text-xl md:text-2xl">Our commitment to your comfort and safety</p>
          </div>
        </div>
      </div>

      {/* Cancellation Policy */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Cancellation Policy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-gray-600" />
                <h3 className="text-2xl font-bold">Cancellation Timeline</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>Free cancellation up to 30 days before check-in</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>50% refund for cancellations 14-29 days before check-in</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>No refund for cancellations less than 14 days before check-in</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-gray-600" />
                <h3 className="text-2xl font-bold">Force Majeure</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>Full refund for government-mandated travel restrictions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>Full refund for natural disasters</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>Case-by-case consideration for medical emergencies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Security */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Payment & Security</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <CreditCard className="w-8 h-8 text-gray-600" />
                <h3 className="text-2xl font-bold">Payment Methods</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>Credit/Debit Cards (Visa, MasterCard, Amex)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>Bank Transfer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>PayPal</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-8 h-8 text-gray-600" />
                <h3 className="text-2xl font-bold">Security</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>SSL-encrypted payment processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>PCI DSS compliant</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>Secure data storage</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <HelpCircle className="w-8 h-8 text-gray-600" />
                <h3 className="text-2xl font-bold">Support</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>Dedicated booking assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">•</span>
                  <span>Emergency contact available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policies; 