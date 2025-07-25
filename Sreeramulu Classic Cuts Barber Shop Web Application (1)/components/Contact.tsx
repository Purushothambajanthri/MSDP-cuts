import React from 'react';
import { Phone, MessageCircle, Mail, Clock } from 'lucide-react';

export function Contact() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi! I would like to book an appointment at Sreeramulu Classic Cuts.');
    window.open(`https://wa.me/919381625471?text=${message}`, '_blank');
  };

  const handleCall = (number: string) => {
    window.open(`tel:${number}`);
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Phone className="w-6 h-6 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold tracking-wider">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to book your appointment or have questions? We're here to help you 
            look and feel your best. Reach out to us through any of these convenient methods.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Primary Contact - Purushotham */}
          <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Primary Contact</h3>
              <p className="text-yellow-100 mb-4">Bajanthri Purushotham</p>
              <div className="space-y-3">
                <button
                  onClick={() => handleCall('9381625471')}
                  className="w-full bg-white text-yellow-700 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>9381625471</span>
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="w-full border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-yellow-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Contact - Sreeramulu */}
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Senior Barber</h3>
              <p className="text-gray-300 mb-4">Bajanthri Sreeramulu</p>
              <div className="space-y-3">
                <button
                  onClick={() => handleCall('9573761730')}
                  className="w-full bg-white text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>9573761730</span>
                </button>
                <div className="text-center">
                  <p className="text-sm text-gray-400">Available for consultations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Quick Response</h3>
              <p className="text-blue-100 mb-4">We respond immediately</p>
              <div className="space-y-3 text-sm">
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <p className="font-semibold">Mon-Sat: 9 AM - 8 PM</p>
                  <p className="text-blue-100">Sunday: 9 AM - 6 PM</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <p className="font-semibold text-green-300">✓ Same-day bookings</p>
                  <p className="text-blue-100">✓ Walk-ins welcome</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Multiple Ways to Reach Us</h3>
              <p className="text-gray-300">
                Choose the most convenient method for you to get in touch with our team.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {/* Call Directly */}
              <div className="text-center">
                <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Call Directly</h4>
                <p className="text-sm text-gray-300">
                  Instant booking and immediate responses
                </p>
              </div>

              {/* WhatsApp */}
              <div className="text-center">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">WhatsApp</h4>
                <p className="text-sm text-gray-300">
                  Send images and chat conveniently
                </p>
              </div>

              {/* Walk-in */}
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Walk-in</h4>
                <p className="text-sm text-gray-300">
                  Visit us directly during working hours
                </p>
              </div>

              {/* Book Online */}
              <div className="text-center">
                <div className="bg-yellow-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Book Online</h4>
                <p className="text-sm text-gray-300">
                  Use our website booking system
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact Info */}
        <div className="mt-12 text-center">
          <div className="bg-red-900 bg-opacity-50 border border-red-700 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-red-300 mb-2">Need to Cancel or Reschedule?</h3>
            <p className="text-red-200 text-sm">
              Please call us at least 1 hour before your appointment time. 
              We understand that plans change and we're flexible with our scheduling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}