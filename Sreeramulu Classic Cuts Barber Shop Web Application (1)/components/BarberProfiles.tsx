import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Phone, Award, Star, Scissors } from 'lucide-react';

export function BarberProfiles() {
  const barbers = [
    {
      id: 'sreeramulu',
      name: 'Bajanthri Sreeramulu',
      age: 51,
      experience: '45+ years',
      phone: '9573761730',
      specialties: ['Traditional Hair Styles', 'Modern Cuts', 'Classic Shaves', 'Hair Coloring'],
      description: 'Known for mastery in all traditional and modern hair styles. Friendly, humble, and highly respected in the community.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      rating: 5.0,
      totalReviews: 500
    },
    {
      id: 'purushotham',
      name: 'Bajanthri Purushotham',
      age: 22,
      experience: '12+ years',
      phone: '9381625471',
      specialties: ['Youth Styles', 'Fades', 'Beard Shaping', 'Kids Cuts'],
      description: 'Skilled in trending youth styles, fades, beard shaping, and kids cuts. Energetic, updated with modern techniques, and customer-friendly.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      rating: 4.9,
      totalReviews: 350
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Scissors className="w-6 h-6 text-yellow-600 mr-2" />
            <span className="text-yellow-600 font-semibold tracking-wider">
              MEET OUR EXPERTS
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Master Barbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our skilled barbers bring decades of combined experience, blending traditional 
            techniques with modern styles to give you the perfect cut every time.
          </p>
        </div>

        {/* Barber Cards */}
        <div className="grid lg:grid-cols-2 gap-12">
          {barbers.map((barber) => (
            <div
              key={barber.id}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Card Header */}
              <div className="relative bg-gradient-to-br from-yellow-600 to-yellow-700 p-8 text-white">
                <div className="absolute top-4 right-4">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-semibold">{barber.experience}</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white ring-opacity-30">
                      <ImageWithFallback
                        src={barber.image}
                        alt={barber.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-2">
                      <Award className="w-4 h-4 text-yellow-800" />
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{barber.name}</h3>
                    <p className="text-yellow-100 mb-3">Age {barber.age} • {barber.experience} Experience</p>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(barber.rating)
                                ? 'text-yellow-300 fill-current'
                                : 'text-yellow-200'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-yellow-100 text-sm">
                        {barber.rating} ({barber.totalReviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {barber.description}
                </p>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {barber.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Button */}
                <div className="flex items-center justify-between">
                  <a
                    href={`tel:${barber.phone}`}
                    className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{barber.phone}</span>
                  </a>
                  
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Available</p>
                    <p className="text-sm font-semibold text-green-600">9 AM - 8 PM</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Banner */}
        <div className="mt-16 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-2xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Combined 57+ Years of Excellence
            </h3>
            <p className="text-yellow-100 text-lg mb-6">
              From traditional village cuts to modern urban styles, our barbers have mastered 
              every technique to ensure you leave looking and feeling your best.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">850+</div>
                <div className="text-yellow-200">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">57+</div>
                <div className="text-yellow-200">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4.95</div>
                <div className="text-yellow-200">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}