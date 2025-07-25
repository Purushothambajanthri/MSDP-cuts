import React from 'react';
import { Clock, Calendar, AlertCircle } from 'lucide-react';

export function WorkingHours() {
  const schedule = [
    { day: 'Monday', hours: '9:00 AM - 8:00 PM', status: 'open' },
    { day: 'Tuesday', hours: '9:00 AM - 8:00 PM', status: 'open' },
    { day: 'Wednesday', hours: '9:00 AM - 8:00 PM', status: 'open' },
    { day: 'Thursday', hours: '9:00 AM - 8:00 PM', status: 'open' },
    { day: 'Friday', hours: '9:00 AM - 8:00 PM', status: 'open' },
    { day: 'Saturday', hours: '9:00 AM - 8:00 PM', status: 'open' },
    { day: 'Sunday', hours: '9:00 AM - 6:00 PM', status: 'limited' }
  ];

  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  const isOpen = () => {
    if (currentDay === 'Sunday') {
      return currentHour >= 9 && currentHour < 18;
    }
    return currentHour >= 9 && currentHour < 20;
  };

  const getNextOpenTime = () => {
    if (currentDay === 'Sunday' && currentHour >= 18) {
      return 'Monday at 9:00 AM';
    }
    if (currentHour >= 20) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowDay = tomorrow.toLocaleDateString('en-US', { weekday: 'long' });
      return tomorrowDay === 'Sunday' ? 'Sunday at 9:00 AM' : `${tomorrowDay} at 9:00 AM`;
    }
    return null;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-6 h-6 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold tracking-wider">
              WORKING HOURS
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            When We're Open
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're open 7 days a week to serve you better. Visit us during our 
            working hours or book an appointment to secure your preferred time slot.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Current Status */}
          <div className="lg:col-span-1">
            <div className={`rounded-2xl p-8 shadow-xl ${
              isOpen() 
                ? 'bg-gradient-to-br from-green-500 to-green-600 text-white' 
                : 'bg-gradient-to-br from-red-500 to-red-600 text-white'
            }`}>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {isOpen() ? 'We\'re Open!' : 'Currently Closed'}
                </h3>
                <p className="text-lg opacity-90 mb-4">
                  Today is {currentDay}
                </p>
                {isOpen() ? (
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <p className="text-sm">Visit us now or</p>
                    <p className="font-semibold">Call for quick booking</p>
                  </div>
                ) : (
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <p className="text-sm">Next opening:</p>
                    <p className="font-semibold">{getNextOpenTime()}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Weekly Schedule */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <h3 className="text-2xl font-bold flex items-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Weekly Schedule
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {schedule.map((item) => (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                        currentDay === item.day
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${
                          currentDay === item.day
                            ? 'bg-blue-500'
                            : item.status === 'open'
                            ? 'bg-green-500'
                            : 'bg-yellow-500'
                        }`}></div>
                        <span className={`font-semibold ${
                          currentDay === item.day ? 'text-blue-700' : 'text-gray-900'
                        }`}>
                          {item.day}
                        </span>
                        {currentDay === item.day && (
                          <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            TODAY
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <span className={`font-medium ${
                          currentDay === item.day ? 'text-blue-700' : 'text-gray-700'
                        }`}>
                          {item.hours}
                        </span>
                        {item.status === 'limited' && (
                          <p className="text-xs text-yellow-600">Shorter hours</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Peak Hours */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Peak Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Evening (5 PM - 7 PM):</strong> Busiest time</p>
                  <p><strong>Saturday (All day):</strong> High demand</p>
                  <p><strong>Sunday (12 PM - 4 PM):</strong> Family rush</p>
                </div>
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    💡 <strong>Tip:</strong> Book in advance during peak hours or visit during morning hours for shorter wait times.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Best Times to Visit */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Best Times to Visit</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Morning (9 AM - 11 AM):</strong> Least crowded</p>
                  <p><strong>Afternoon (2 PM - 4 PM):</strong> Moderate wait</p>
                  <p><strong>Weekdays:</strong> Generally quieter</p>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    ⭐ <strong>Recommended:</strong> Morning appointments guarantee no waiting and unhurried service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Holiday Notice */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Holiday Schedule</h3>
            <p className="text-purple-100 mb-4">
              We remain closed on major festivals and national holidays. 
              Follow our WhatsApp updates or call us to confirm availability during festival seasons.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Festival Closures</h4>
                <p className="text-sm text-purple-100">Diwali, Eid, Christmas, New Year</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Emergency Services</h4>
                <p className="text-sm text-purple-100">Available on call for urgent needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}