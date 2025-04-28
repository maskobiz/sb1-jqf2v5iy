import React from 'react';
import { Clock, Users, Calendar, PawPrint, Cigarette, VolumeX, CircleOff } from 'lucide-react';

const Policies: React.FC = () => {
  return (
    <section id="policies" className="py-20">
      <div className="animate-slide-up">
        <h2 className="section-title">House Rules & Policies</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Check-in/Check-out */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-8">
              <div className="flex items-center gap-3 p-6 bg-slate-50">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold">Check-in & Check-out</h3>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Check-in Details</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                        <p>Check-in time: 3:00 PM - 8:00 PM</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                        <p>Self check-in with keypad</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                        <p>Early check-in available with prior arrangement (fee may apply)</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                        <p>Property manager will greet you upon arrival</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">Check-out Details</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                        <p>Check-out time: 11:00 AM</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                        <p>Late check-out available with prior arrangement (fee may apply)</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                        <p>Keys/access cards must be returned to lockbox</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                        <p>Property inspection will be conducted after departure</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* House Rules */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-8">
              <div className="flex items-center gap-3 p-6 bg-slate-50">
                <CircleOff className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold">House Rules</h3>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  <PolicyItem 
                    icon={<Users />} 
                    title="Guest Limitations" 
                    description="Maximum of 8 guests (6 adults, 2 children). No unauthorized guests allowed." 
                  />
                  <PolicyItem 
                    icon={<PawPrint />} 
                    title="Pet Policy" 
                    description="No pets allowed, except service animals with prior approval." 
                  />
                  <PolicyItem 
                    icon={<Cigarette />} 
                    title="Smoking Policy" 
                    description="No smoking anywhere on the property. $500 cleaning fee for violations." 
                  />
                  <PolicyItem 
                    icon={<VolumeX />} 
                    title="Noise Restrictions" 
                    description="Quiet hours from 10:00 PM to 8:00 AM. Respect neighbors." 
                  />
                  <PolicyItem 
                    icon={<Calendar />} 
                    title="Events & Parties" 
                    description="No events or parties without prior written approval and event fee." 
                  />
                </div>
                
                <div className="mt-6 p-4 bg-slate-50 rounded-lg text-sm text-slate-700">
                  <p className="font-medium mb-2">Additional Rules:</p>
                  <ul className="space-y-1">
                    <li>• All guests must be registered prior to arrival</li>
                    <li>• No moving furniture between rooms</li>
                    <li>• No glass containers in the pool area</li>
                    <li>• Children under 12 must be supervised in the pool area</li>
                    <li>• Trash must be properly sorted according to local regulations</li>
                    <li>• No removal of any items from the property</li>
                    <li>• Report any damage immediately to property manager</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Additional Policies */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="flex items-center gap-3 p-6 bg-slate-50">
                <div className="w-6 h-6 text-blue-600">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Additional Policies</h3>
              </div>
              
              <div className="p-6">
                <h4 className="font-bold mb-3">Tax & Registration Requirements</h4>
                <p className="mb-6 text-slate-700">
                  All guests must provide valid identification for registration purposes as required by local regulations. A tourist tax of 10% is included in the total price. Guests may be required to register with local authorities upon arrival.
                </p>
                
                <h4 className="font-bold mb-3">Insurance Requirements</h4>
                <p className="mb-6 text-slate-700">
                  While not mandatory, we strongly recommend that guests purchase travel insurance to cover unexpected cancellations, medical emergencies, and accidents. Our property has liability insurance, but this does not cover guest belongings or injuries.
                </p>
                
                <h4 className="font-bold mb-3">Local Regulations</h4>
                <p className="text-slate-700">
                  Guests are required to comply with all local regulations, including noise ordinances, beach usage rules, and environmental protection measures. The property is located in an environmentally sensitive area, and guests must follow guidelines for beach and wildlife protection.
                </p>
              </div>
            </div>
          </div>
          
          {/* Important Notice Card */}
          <div>
            <div className="bg-slate-50 rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Important Notices</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-red-600 mb-2">Health & Safety</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                      <p>Carbon monoxide and smoke detectors installed</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                      <p>First aid kit and fire extinguisher available</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                      <p>Pool area not fenced - supervise children at all times</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                      <p>Beach access may have strong currents - check local advisories</p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-amber-600 mb-2">Property Specifics</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-600 mt-2"></div>
                      <p>Property has security cameras at exterior entrances</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-600 mt-2"></div>
                      <p>Stairs required to access some bedrooms - no elevator</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-600 mt-2"></div>
                      <p>Water is desalinated and safe to drink</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-600 mt-2"></div>
                      <p>Occasional power outages possible - backup generator installed</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-slate-600 text-sm">
                  By making a reservation, you acknowledge and agree to all house rules and policies. Violations may result in loss of security deposit and/or immediate termination of stay without refund.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface PolicyItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PolicyItem: React.FC<PolicyItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 bg-blue-50 rounded-full mt-0.5 flex-shrink-0">
        <div className="text-blue-600 w-5 h-5">
          {icon}
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Policies;