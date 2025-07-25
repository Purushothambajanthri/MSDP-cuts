import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, Scissors, Star } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi! I found you through your website. I would like to book an appointment.');
    window.open(`https://wa.me/919381625471?text=${message}`, '_blank');
  };

  const handleCall = (number: string) => {
    window.open(`tel:${number}`);
  };

  const handleDirections = () => {
    const address = '3-21A, Raghavendra Colony Road, Near Elementary School, Kristipadu Village, Peddavaduguru Mandal, Anantapur District, Andhra Pradesh, India - 515455';
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-yellow-600 p-3 rounded-full">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Sreeramulu Classic Cuts</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Kristipadu village's most trusted barber shop, combining 45+ years of 
              traditional expertise with modern styling techniques.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-gray-300 text-sm ml-2">4.9/5 Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services & Pricing
                </a>
              </li>
              <li>
                <a href="#barbers" className="text-gray-300 hover:text-white transition-colors">
                  Our Barbers
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-300 hover:text-white transition-colors">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#location" className="text-gray-300 hover:text-white transition-colors">
                  Location & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-6">Popular Services</h4>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-300">Hair Cut (Trimmer)</span>
                <span className="text-yellow-400 font-semibold">₹60</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Beard Cut/Trim</span>
                <span className="text-yellow-400 font-semibold">₹40</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Complete Package</span>
                <span className="text-yellow-400 font-semibold">₹120</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Head & Body Massage</span>
                <span className="text-yellow-400 font-semibold">₹100</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Kids Hair Cut</span>
                <span className="text-yellow-400 font-semibold">₹50</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              {/* Phone Numbers */}
              <div>
                <button
                  onClick={() => handleCall('9381625471')}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors w-full text-left"
                >
                  <Phone className="w-4 h-4 text-green-400" />
                  <div>
                    <p className="font-semibold">9381625471</p>
                    <p className="text-xs text-gray-400">Purushotham (Primary)</p>
                  </div>
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleCall('9573761730')}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors w-full text-left"
                >
                  <Phone className="w-4 h-4 text-blue-400" />
                  <div>
                    <p className="font-semibold">9573761730</p>
                    <p className="text-xs text-gray-400">Sreeramulu</p>
                  </div>
                </button>
              </div>

              {/* WhatsApp */}
              <button
                onClick={handleWhatsApp}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors w-full text-left"
              >
                <MessageCircle className="w-4 h-4 text-green-500" />
                <span>WhatsApp Booking</span>
              </button>

              {/* Address */}
              <button
                onClick={handleDirections}
                className="flex items-start space-x-3 text-gray-300 hover:text-white transition-colors w-full text-left"
              >
                <MapPin className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm leading-relaxed">
                    3-21A, Raghavendra Colony Road,<br />
                    Near Elementary School,<br />
                    Kristipadu Village, Anantapur - 515455
                  </p>
                </div>
              </button>

              {/* Working Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-yellow-400 mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Mon-Sat:</strong> 9 AM - 8 PM<br />
                    <strong>Sunday:</strong> 9 AM - 6 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleCall('9381625471')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now to Book</span>
            </button>
            <button
              onClick={handleWhatsApp}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </button>
            <button
              onClick={handleDirections}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Sreeramulu Classic Cuts. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-2 md:mt-0">
              <p className="text-gray-400 text-sm">
                Kristipadu Village, Anantapur District
              </p>
              <div className="flex items-center space-x-1">
                <span className="text-gray-400 text-sm">Powered by</span>
                <span className="text-yellow-400 text-sm font-semibold">Figma Make</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Notice */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white text-sm">
            📞 <strong>Emergency Bookings:</strong> Call us anytime during working hours for urgent appointments
          </p>
        </div>
      </div>
    </footer>
  );
}