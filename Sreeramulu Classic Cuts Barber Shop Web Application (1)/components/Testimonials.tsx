import React from 'react';
import { Star, Quote, User } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Ravi Kumar',
      location: 'Kristipadu Village',
      rating: 5,
      text: 'Sreeramulu uncle has been cutting my hair for over 20 years. His traditional techniques combined with modern styles make him the best barber in our area. Very humble and skilled.',
      service: 'Hair Cut + Beard Trim',
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Pranav Reddy',
      location: 'Anantapur',
      rating: 5,
      text: 'Purushotham is amazing with modern cuts and fades! As a college student, I need trendy styles and he always delivers perfectly. Great prices too!',
      service: 'Modern Fade Cut',
      date: '1 week ago'
    },
    {
      id: 3,
      name: 'Manjula Devi',
      location: 'Peddavaduguru',
      rating: 5,
      text: 'I bring my 3 children here regularly. Both barbers are so patient with kids and the shop is always clean. My boys love coming here!',
      service: 'Kids Hair Cut',
      date: '3 days ago'
    },
    {
      id: 4,
      name: 'Suresh Babu',
      location: 'Kristipadu',
      rating: 5,
      text: 'Been a customer for 15+ years. The head massage service is fantastic and very relaxing after a long day of work. Highly recommend!',
      service: 'Hair Cut + Head Massage',
      date: '5 days ago'
    },
    {
      id: 5,
      name: 'Kiran Varma',
      location: 'Anantapur District',
      rating: 5,
      text: 'Professional service at village prices! The complete package of hair cut, beard trim and coloring looks amazing. Worth the visit from the city.',
      service: 'Complete Package',
      date: '1 week ago'
    },
    {
      id: 6,
      name: 'Lakshmi Prasad',
      location: 'Nearby Village',
      rating: 4,
      text: 'My husband and teenage son both get their hair cut here. Great experience every time. The barbers remember our preferences and make us feel welcome.',
      service: 'Regular Hair Cut',
      date: '2 weeks ago'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '15+', label: 'Years Serving' },
    { number: '98%', label: 'Return Customers' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-yellow-600 mr-2" />
            <span className="text-yellow-600 font-semibold tracking-wider">
              CUSTOMER REVIEWS
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our loyal customers 
            from Kristipadu and surrounding areas have to say about our services.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-8 h-8 text-yellow-600 opacity-50" />
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Service Info */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-yellow-800">
                  <strong>Service:</strong> {testimonial.service}
                </p>
              </div>

              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Satisfaction Banner */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-2xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Join Our Satisfied Customer Family!
            </h3>
            <p className="text-yellow-100 text-lg mb-8">
              Over 500 happy customers trust us with their grooming needs. 
              Experience the difference of traditional craftsmanship with modern techniques.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 rounded-xl p-6">
                <h4 className="font-bold text-xl mb-2">Traditional Expertise</h4>
                <p className="text-yellow-100 text-sm">
                  45+ years of mastery in classical hair cutting techniques
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6">
                <h4 className="font-bold text-xl mb-2">Modern Styles</h4>
                <p className="text-yellow-100 text-sm">
                  Updated with latest trends and contemporary cutting methods
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6">
                <h4 className="font-bold text-xl mb-2">Personal Touch</h4>
                <p className="text-yellow-100 text-sm">
                  We remember your preferences and provide personalized service
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Review Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Share Your Experience!
            </h3>
            <p className="text-gray-600 mb-6">
              Had a great experience at Sreeramulu Classic Cuts? We'd love to hear from you! 
              Your feedback helps us serve you better and helps other customers discover our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Leave a Review
              </button>
              <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                Share on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}