import React from 'react';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';

export function Location() {
  const shopAddress = {
    line1: '3-21A, Raghavendra Colony Road',
    line2: 'Near Elementary School',
    village: 'Kristipadu Village',
    mandal: 'Peddavaduguru Mandal',
    district: 'Anantapur District',
    state: 'Andhra Pradesh',
    country: 'India',
    pincode: '515455'
  };

  const fullAddress = `${shopAddress.line1}, ${shopAddress.line2}, ${shopAddress.village}, ${shopAddress.mandal}, ${shopAddress.district}, ${shopAddress.state}, ${shopAddress.country} - ${shopAddress.pincode}`;

  const handleGetDirections = () => {
    const encodedAddress = encodeURIComponent(fullAddress);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const handleCallShop = () => {
    window.open('tel:9381625471');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-6 h-6 text-yellow-600 mr-2" />
            <span className="text-yellow-600 font-semibold tracking-wider">
              VISIT US
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Location
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Kristipadu village, we're easily accessible 
            and conveniently positioned near the elementary school for your comfort.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Address Information */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Shop Address</h3>
                  <div className="text-gray-600 leading-relaxed">
                    <p className="font-medium">{shopAddress.line1}</p>
                    <p>{shopAddress.line2}</p>
                    <p>{shopAddress.village}</p>
                    <p>{shopAddress.mandal}</p>
                    <p>{shopAddress.district}, {shopAddress.state}</p>
                    <p>{shopAddress.country} - {shopAddress.pincode}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleGetDirections}
                  className="flex items-center justify-center space-x-2 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </button>
                <button
                  onClick={handleCallShop}
                  className="flex items-center justify-center space-x-2 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Shop</span>
                </button>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-yellow-200 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-yellow-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Working Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Monday - Saturday</span>
                      <span className="text-gray-900 font-semibold">9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Sunday</span>
                      <span className="text-gray-900 font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-200 bg-opacity-50 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> We recommend booking in advance to avoid waiting times, 
                  especially during weekends and evenings.
                </p>
              </div>
            </div>

            {/* Landmarks */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nearby Landmarks</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Elementary School (Next to our shop)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Raghavendra Colony Road</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Kristipadu Village Center</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-lg">
              <div className="bg-gray-100 rounded-xl overflow-hidden" style={{ height: '400px' }}>
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(fullAddress)}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sreeramulu Classic Cuts Location"
                ></iframe>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Easy to Find</h4>
                <p className="text-sm text-gray-600">Next to Elementary School</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Navigation className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Well Connected</h4>
                <p className="text-sm text-gray-600">Accessible by all transport</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <div>
                    <p className="text-sm text-gray-300">Primary Contact</p>
                    <p className="font-semibold">9381625471 (Purushotham)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <div>
                    <p className="text-sm text-gray-300">Alternative Contact</p>
                    <p className="font-semibold">9573761730 (Sreeramulu)</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-300">
                  For bookings, cancellations, or any queries, feel free to call us during working hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}