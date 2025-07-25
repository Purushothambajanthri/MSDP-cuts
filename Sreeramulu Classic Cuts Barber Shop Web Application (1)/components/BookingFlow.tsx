import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Check, Calendar, Clock, User, Phone, Scissors } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projectId, publicAnonKey, hasRealSupabaseConfig, supabaseConfig } from '../utils/supabase/info';
import { InlineConfigStatus } from './ConfigStatus';

interface BookingData {
  barber: string;
  services: string[];
  date: string;
  time: string;
  phone: string;
}

interface BookingFlowProps {
  bookingData: BookingData;
  setBookingData: (data: BookingData) => void;
  onComplete: () => void;
  onBack: () => void;
}

export function BookingFlow({ bookingData, setBookingData, onComplete, onBack }: BookingFlowProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [booking, setBooking] = useState(false);

  const barbers = [
    {
      id: 'sreeramulu',
      name: 'Bajanthri Sreeramulu',
      age: 51,
      experience: '45+ years',
      specialties: ['Traditional Hair Styles', 'Modern Cuts', 'Classic Shaves', 'Hair Coloring'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'purushotham',
      name: 'Bajanthri Purushotham',
      age: 22,
      experience: '12+ years',
      specialties: ['Youth Styles', 'Fades', 'Beard Shaping', 'Kids Cuts'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const services = [
    { id: 'beard-cut', name: 'Beard Cut/Trim', price: 40 },
    { id: 'hair-cut-trimmer', name: 'Hair Cut (with trimmer)', price: 60 },
    { id: 'hair-cut-scissors', name: 'Hair Cut (without trimmer)', price: 70 },
    { id: 'hair-coloring', name: 'Hair Coloring', price: 50 },
    { id: 'complete-package', name: 'Beard + Hair Cut + Color', price: 120 },
    { id: 'kids-cut', name: 'Kids Hair Cut', price: 50 },
    { id: 'baby-cut', name: 'Baby Hair Cut', price: 60 },
    { id: 'head-wash', name: 'Head Wash', price: 40 },
    { id: 'full-massage', name: 'Head & Body Massage', price: 100 },
    { id: 'head-massage', name: 'Head Massage Only', price: 40 },
    { id: 'face-wash', name: 'Face Wash', price: 50 }
  ];

  const steps = [
    { number: 1, title: 'Choose Barber', icon: User },
    { number: 2, title: 'Select Services', icon: Scissors },
    { number: 3, title: 'Pick Date & Time', icon: Calendar },
    { number: 4, title: 'Contact Info', icon: Phone },
    { number: 5, title: 'Confirmation', icon: Check }
  ];

  // Log Supabase configuration on component mount
  useEffect(() => {
    console.log('🔧 BookingFlow - Supabase Config:', supabaseConfig);
  }, []);

  // Fetch available slots when date and barber are selected
  useEffect(() => {
    if (bookingData.date && bookingData.barber) {
      fetchAvailability();
    }
  }, [bookingData.date, bookingData.barber]);

  const fetchAvailability = async () => {
    setLoading(true);
    try {
      // Always try to make the API call first, then fall back to mock data
      if (projectId !== 'demo-project' && publicAnonKey !== 'demo-anon-key') {
        console.log('🔄 Attempting to fetch availability from Supabase...');
        
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-43d63237/availability/${bookingData.date}/${bookingData.barber}`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
              'Content-Type': 'application/json'
            }
          }
        );
        
        if (response.ok) {
          const data = await response.json();
          console.log('✅ Successfully fetched availability from Supabase');
          setAvailableSlots(data.availableSlots || []);
          setBookedSlots(data.bookedSlots || []);
          setLoading(false);
          return;
        } else {
          console.warn('⚠️ Supabase API call failed, falling back to mock data');
        }
      }

      // Provide mock availability as fallback
      console.log('📝 Using mock availability data');
      const mockSlots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];
      const mockBookedSlots = ['12:00', '18:00'];
      
      // Simulate some realistic availability patterns
      const currentHour = new Date().getHours();
      const availableSlots = mockSlots.filter(slot => {
        const slotHour = parseInt(slot.split(':')[0]);
        // Make slots in the past unavailable
        return slotHour > currentHour || Math.random() > 0.15;
      });
      
      setAvailableSlots(availableSlots);
      setBookedSlots(mockBookedSlots);
    } catch (error) {
      console.error('❌ Error in fetchAvailability:', error);
      // Ultimate fallback
      const mockSlots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];
      setAvailableSlots(mockSlots);
      setBookedSlots(['12:00', '18:00']);
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleBarberSelect = (barberId: string) => {
    setBookingData({ ...bookingData, barber: barberId });
  };

  const handleServiceToggle = (serviceId: string) => {
    const updatedServices = bookingData.services.includes(serviceId)
      ? bookingData.services.filter(s => s !== serviceId)
      : [...bookingData.services, serviceId];
    setBookingData({ ...bookingData, services: updatedServices });
  };

  const handleDateChange = (date: string) => {
    setBookingData({ ...bookingData, date, time: '' });
  };

  const handleTimeSelect = (time: string) => {
    setBookingData({ ...bookingData, time });
  };

  const handlePhoneChange = (phone: string) => {
    setBookingData({ ...bookingData, phone });
  };

  const calculateTotal = () => {
    return bookingData.services.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return total + (service?.price || 0);
    }, 0);
  };

  const handleBookingSubmit = async () => {
    setBooking(true);
    try {
      const selectedServices = bookingData.services.map(serviceId => {
        const service = services.find(s => s.id === serviceId);
        return service?.name || serviceId;
      });

      // Always try the real API first, then fall back to mock
      if (projectId !== 'demo-project' && publicAnonKey !== 'demo-anon-key') {
        console.log('🔄 Attempting to submit booking to Supabase...');
        
        try {
          const response = await fetch(
            `https://${projectId}.supabase.co/functions/v1/make-server-43d63237/book`,
            {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${publicAnonKey}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                barber: bookingData.barber,
                services: selectedServices,
                date: bookingData.date,
                time: bookingData.time,
                phone: bookingData.phone
              })
            }
          );

          if (response.ok) {
            const result = await response.json();
            if (result.success) {
              console.log('✅ Real booking submitted successfully!');
              alert('🎉 Booking confirmed! SMS notification sent to shop owner at 9381625471.');
              onComplete();
              return;
            }
          }
          
          console.warn('⚠️ Supabase booking failed, showing mock confirmation');
        } catch (apiError) {
          console.warn('⚠️ Supabase API error, showing mock confirmation:', apiError);
        }
      }

      // Mock booking confirmation
      console.log('📝 Mock booking submitted:', {
        barber: bookingData.barber,
        services: selectedServices,
        date: bookingData.date,
        time: bookingData.time,
        phone: bookingData.phone,
        total: calculateTotal()
      });
      
      // Simulate realistic booking delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const barberName = barbers.find(b => b.id === bookingData.barber)?.name;
      const confirmationMessage = `🎯 Demo Booking Completed!\n\n` +
        `👨‍💼 Barber: ${barberName}\n` +
        `📅 Date: ${bookingData.date}\n` +
        `⏰ Time: ${bookingData.time}\n` +
        `✂️ Services: ${selectedServices.join(', ')}\n` +
        `💰 Total: ₹${calculateTotal()}\n\n` +
        `📞 For real appointments, call:\n` +
        `• 9381625471 (Purushotham)\n` +
        `• 9573761730 (Sreeramulu)`;
      
      alert(confirmationMessage);
      onComplete();
    } catch (error) {
      console.error('❌ Booking submission error:', error);
      alert('❌ Booking failed. Please try again.\n\n📞 For immediate booking, call: 9381625471');
    } finally {
      setBooking(false);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return bookingData.barber !== '';
      case 2: return bookingData.services.length > 0;
      case 3: return bookingData.date !== '' && bookingData.time !== '';
      case 4: return bookingData.phone !== '' && bookingData.phone.length === 10;
      default: return true;
    }
  };

  // Get tomorrow's date as minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Book Your Appointment</h1>
          <p className="text-gray-600 mt-2">Follow the steps to secure your slot</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
                  ${currentStep >= step.number 
                    ? 'bg-yellow-600 border-yellow-600 text-white' 
                    : 'border-gray-300 text-gray-400'}`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <span className={`text-sm mt-2 ${currentStep >= step.number ? 'text-yellow-600' : 'text-gray-400'}`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`hidden sm:block w-full h-0.5 mt-5 ${currentStep > step.number ? 'bg-yellow-600' : 'bg-gray-300'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Configuration Status */}
          <InlineConfigStatus />
          {/* Step 1: Choose Barber */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Barber</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {barbers.map((barber) => (
                  <div
                    key={barber.id}
                    onClick={() => handleBarberSelect(barber.id)}
                    className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                      bookingData.barber === barber.id
                        ? 'border-yellow-600 bg-yellow-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <ImageWithFallback
                          src={barber.image}
                          alt={barber.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{barber.name}</h3>
                        <p className="text-gray-600">Age {barber.age} • {barber.experience}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {barber.specialties.map((specialty, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Services */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Services</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => handleServiceToggle(service.id)}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      bookingData.services.includes(service.id)
                        ? 'border-yellow-600 bg-yellow-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{service.name}</h3>
                        <p className="text-yellow-600 font-bold">₹{service.price}</p>
                      </div>
                      <div className={`w-5 h-5 rounded border-2 ${
                        bookingData.services.includes(service.id)
                          ? 'bg-yellow-600 border-yellow-600'
                          : 'border-gray-300'
                      }`}>
                        {bookingData.services.includes(service.id) && (
                          <Check className="w-3 h-3 text-white m-0.5" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {bookingData.services.length > 0 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">Selected Services:</h3>
                  <p className="text-yellow-700">
                    {bookingData.services.map(serviceId => {
                      const service = services.find(s => s.id === serviceId);
                      return service?.name;
                    }).join(', ')}
                  </p>
                  <p className="font-bold text-yellow-800 mt-2">Total: ₹{calculateTotal()}</p>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Pick Date & Time */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pick Date & Time</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    min={minDate}
                    value={bookingData.date}
                    onChange={(e) => handleDateChange(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Available Time Slots
                  </label>
                  {bookingData.date ? (
                    <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                      {loading ? (
                        <div className="col-span-3 text-center py-4">Loading slots...</div>
                      ) : availableSlots.length > 0 ? (
                        availableSlots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => handleTimeSelect(slot)}
                            className={`p-2 text-sm rounded border-2 transition-all ${
                              bookingData.time === slot
                                ? 'border-yellow-600 bg-yellow-50 text-yellow-700'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {slot}
                          </button>
                        ))
                      ) : (
                        <div className="col-span-3 text-center py-4 text-gray-500">
                          No available slots for this date
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-gray-500">Please select a date first</p>
                  )}
                  {bookedSlots.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm text-red-600">
                        Booked slots: {bookedSlots.join(', ')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Contact Info */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="max-w-md">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  value={bookingData.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                  maxLength={10}
                />
                <p className="text-sm text-gray-500 mt-2">
                  We'll use this number to confirm your booking and send updates
                </p>
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {currentStep === 5 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Confirm Your Booking</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Barber</h3>
                    <p className="text-gray-600">
                      {barbers.find(b => b.id === bookingData.barber)?.name}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Date & Time</h3>
                    <p className="text-gray-600">{bookingData.date} at {bookingData.time}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Services</h3>
                    <p className="text-gray-600">
                      {bookingData.services.map(serviceId => {
                        const service = services.find(s => s.id === serviceId);
                        return service?.name;
                      }).join(', ')}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
                    <p className="text-gray-600">{bookingData.phone}</p>
                  </div>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">Total Amount:</span>
                    <span className="text-2xl font-bold text-yellow-600">₹{calculateTotal()}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={handleBookingSubmit}
                  disabled={booking}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-400 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  {booking ? 'Confirming Booking...' : 'Confirm Booking'}
                </button>
                <p className="text-sm text-gray-500 text-center mt-2">
                  By confirming, you agree to our terms and the shop owner will be notified via SMS
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="flex items-center px-6 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </button>
            
            {currentStep < 5 && (
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex items-center px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}