import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { BarberProfiles } from './components/BarberProfiles';
import { Services } from './components/Services';
import { BookingFlow } from './components/BookingFlow';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { WorkingHours } from './components/WorkingHours';
import { Testimonials } from './components/Testimonials';
import { HygieneSection } from './components/HygieneSection';
import { Footer } from './components/Footer';
import { hasRealSupabaseConfig } from './utils/supabase/info';
import { ConfigStatus } from './components/ConfigStatus';

export default function App() {
  const [showBooking, setShowBooking] = useState(false);
  const [bookingData, setBookingData] = useState({
    barber: '',
    services: [],
    date: '',
    time: '',
    phone: ''
  });

  const handleBookNow = () => {
    setShowBooking(true);
  };

  const handleBookingComplete = () => {
    setShowBooking(false);
    setBookingData({
      barber: '',
      services: [],
      date: '',
      time: '',
      phone: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                Sreeramulu Classic Cuts
              </h1>
              {!hasRealSupabaseConfig && (
                <span className="ml-3 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  Demo
                </span>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBookNow}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full transition-colors"
              >
                {hasRealSupabaseConfig ? 'Book Now' : 'Try Demo'}
              </button>
              <a
                href="tel:9381625471"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {showBooking ? (
          <BookingFlow
            bookingData={bookingData}
            setBookingData={setBookingData}
            onComplete={handleBookingComplete}
            onBack={() => setShowBooking(false)}
          />
        ) : (
          <>
            <Hero onBookNow={handleBookNow} />
            <BarberProfiles />
            <Services />
            <WorkingHours />
            <HygieneSection />
            <Testimonials />
            <Location />
            <Contact />
          </>
        )}
      </div>

      <Footer />
      <ConfigStatus />
    </div>
  );
}