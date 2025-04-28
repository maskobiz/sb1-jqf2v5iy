import React, { useState } from 'react';
import { Calendar, DollarSign, Plus, Check } from 'lucide-react';

// Seasonal pricing data
const seasonalRates = [
  { id: 1, season: "Low Season", period: "May 1 - Nov 30", rate: 650, minStay: 3 },
  { id: 2, season: "High Season", period: "Dec 1 - Apr 30", rate: 950, minStay: 5 },
  { id: 3, season: "Holiday Season", period: "Dec 20 - Jan 5", rate: 1350, minStay: 7 },
];

// Additional fees
const additionalFees = [
  { id: 1, name: "Cleaning Fee", amount: 250, type: "One-time" },
  { id: 2, name: "Security Deposit", amount: 1000, type: "Refundable" },
  { id: 3, name: "Resort Fee", amount: 30, type: "Per day" },
];

// Optional add-ons
const optionalAddons = [
  { id: 1, name: "Private Chef", amount: 200, type: "Per day" },
  { id: 2, name: "Airport Transfer", amount: 150, type: "One-way" },
  { id: 3, name: "Daily Housekeeping", amount: 50, type: "Per day" },
  { id: 4, name: "Grocery Delivery", amount: 75, type: "Plus groceries" },
  { id: 5, name: "Yacht Charter", amount: 1200, type: "Full day" },
];

const Pricing: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>("rates");
  
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };
  
  return (
    <section id="pricing" className="py-20">
      <div className="animate-slide-up">
        <h2 className="section-title">Pricing & Availability</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            {/* Seasonal Rates */}
            <div className="mb-8">
              <div 
                className="flex justify-between items-center bg-slate-50 p-6 rounded-t-xl cursor-pointer"
                onClick={() => toggleSection("rates")}
              >
                <h3 className="text-xl font-bold">Seasonal Rates</h3>
                <div className={`transform transition-transform ${expandedSection === "rates" ? "rotate-45" : ""}`}>
                  <Plus className="w-5 h-5" />
                </div>
              </div>
              
              {expandedSection === "rates" && (
                <div className="border border-slate-200 border-t-0 rounded-b-xl p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="py-3 px-4 text-left">Season</th>
                          <th className="py-3 px-4 text-left">Period</th>
                          <th className="py-3 px-4 text-left">Nightly Rate</th>
                          <th className="py-3 px-4 text-left">Minimum Stay</th>
                        </tr>
                      </thead>
                      <tbody>
                        {seasonalRates.map(rate => (
                          <tr key={rate.id} className="border-b border-slate-100">
                            <td className="py-3 px-4 font-medium">{rate.season}</td>
                            <td className="py-3 px-4 text-slate-600">{rate.period}</td>
                            <td className="py-3 px-4 text-slate-600">${rate.rate}</td>
                            <td className="py-3 px-4 text-slate-600">{rate.minStay} nights</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-sm text-slate-500">
                    * Rates are in USD and subject to change without prior notice for dates without confirmed bookings.
                  </p>
                </div>
              )}
            </div>
            
            {/* Required Fees */}
            <div className="mb-8">
              <div 
                className="flex justify-between items-center bg-slate-50 p-6 rounded-t-xl cursor-pointer"
                onClick={() => toggleSection("fees")}
              >
                <h3 className="text-xl font-bold">Required Fees</h3>
                <div className={`transform transition-transform ${expandedSection === "fees" ? "rotate-45" : ""}`}>
                  <Plus className="w-5 h-5" />
                </div>
              </div>
              
              {expandedSection === "fees" && (
                <div className="border border-slate-200 border-t-0 rounded-b-xl p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="py-3 px-4 text-left">Fee</th>
                          <th className="py-3 px-4 text-left">Amount</th>
                          <th className="py-3 px-4 text-left">Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {additionalFees.map(fee => (
                          <tr key={fee.id} className="border-b border-slate-100">
                            <td className="py-3 px-4 font-medium">{fee.name}</td>
                            <td className="py-3 px-4 text-slate-600">${fee.amount}</td>
                            <td className="py-3 px-4 text-slate-600">{fee.type}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-sm text-slate-500">
                    * Security deposit is fully refundable within 7 days after checkout, subject to inspection.
                  </p>
                </div>
              )}
            </div>
            
            {/* Optional Add-ons */}
            <div>
              <div 
                className="flex justify-between items-center bg-slate-50 p-6 rounded-t-xl cursor-pointer"
                onClick={() => toggleSection("addons")}
              >
                <h3 className="text-xl font-bold">Optional Add-ons</h3>
                <div className={`transform transition-transform ${expandedSection === "addons" ? "rotate-45" : ""}`}>
                  <Plus className="w-5 h-5" />
                </div>
              </div>
              
              {expandedSection === "addons" && (
                <div className="border border-slate-200 border-t-0 rounded-b-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {optionalAddons.map(addon => (
                      <div key={addon.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50">
                        <div className="p-1.5 bg-blue-50 rounded-full mt-0.5">
                          <Check className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">{addon.name}</h4>
                          <p className="text-slate-600 text-sm">
                            ${addon.amount} {addon.type}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-slate-500">
                    * Optional services must be booked at least 72 hours in advance and are subject to availability.
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* Payment Calculation Card */}
          <div className="bg-slate-50 rounded-xl p-6 h-fit">
            <h3 className="text-xl font-bold mb-4">Payment Details</h3>
            
            <div className="space-y-4 mb-6">
              <PaymentDetail 
                icon={<Calendar className="w-5 h-5 text-blue-600" />}
                label="Payment Schedule"
                value="50% due at booking, 50% due 60 days before arrival"
              />
              
              <PaymentDetail 
                icon={<DollarSign className="w-5 h-5 text-blue-600" />}
                label="Accepted Payment Methods"
                value="Credit Card, Bank Transfer, PayPal"
              />
            </div>
            
            <div className="bg-white rounded-lg p-4 mb-6">
              <h4 className="font-bold mb-3">Sample 7-night stay in High Season</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Nightly rate ($950 × 7)</span>
                  <span className="font-medium">$6,650</span>
                </div>
                <div className="flex justify-between">
                  <span>Cleaning fee</span>
                  <span className="font-medium">$250</span>
                </div>
                <div className="flex justify-between">
                  <span>Resort fee ($30 × 7)</span>
                  <span className="font-medium">$210</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-100 font-bold">
                  <span>Total</span>
                  <span>$7,110</span>
                </div>
                <div className="flex justify-between text-slate-500 border-t border-slate-100 pt-2">
                  <span>Security deposit (refundable)</span>
                  <span>$1,000</span>
                </div>
              </div>
            </div>
            
            <a href="#booking" className="btn btn-primary w-full text-center">
              Check Availability
            </a>
          </div>
        </div>
        
        {/* Cancellation Policy */}
        <div className="bg-slate-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Cancellation Policy</h3>
          <div className="space-y-4">
            <p className="text-slate-700">
              <span className="font-medium">Flexible (60 days)</span>: Full refund if canceled at least 60 days before arrival date. 50% refund if canceled at least 30 days before arrival date.
            </p>
            <p className="text-slate-700">
              <span className="font-medium">Holiday Season</span>: Non-refundable; however, we offer rebooking for future dates subject to availability with a 25% rebooking fee.
            </p>
            <p className="text-slate-700">
              All cancellations must be made in writing via email to our booking department. We recommend purchasing travel insurance to protect against unforeseen circumstances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

interface PaymentDetailProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const PaymentDetail: React.FC<PaymentDetailProps> = ({ icon, label, value }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-medium">{label}</h4>
        <p className="text-slate-600 text-sm">{value}</p>
      </div>
    </div>
  );
};

export default Pricing;