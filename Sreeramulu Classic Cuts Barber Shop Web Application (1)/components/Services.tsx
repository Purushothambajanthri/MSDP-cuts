import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Scissors, Clock, Star } from 'lucide-react';

export function Services() {
  const services = [
    {
      id: 'beard-cut',
      name: 'Beard Cut/Trim',
      price: 40,
      duration: '15-20 min',
      description: 'Professional beard shaping and trimming for a clean, styled look',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: false
    },
    {
      id: 'hair-cut-trimmer',
      name: 'Hair Cut (with trimmer)',
      price: 60,
      duration: '25-30 min',
      description: 'Modern hair cut using electric trimmers for precision and style',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true
    },
    {
      id: 'hair-cut-scissors',
      name: 'Hair Cut (without trimmer)',
      price: 70,
      duration: '30-35 min',
      description: 'Traditional scissor cut for detailed styling and personalized finish',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: false
    },
    {
      id: 'hair-coloring',
      name: 'Hair Coloring',
      price: 50,
      duration: '45-60 min',
      description: 'Natural hair coloring service to cover grays or change your look',
      image: 'https://images.unsplash.com/photo-1562004760-acb5a1bb4d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: false
    },
    {
      id: 'complete-package',
      name: 'Beard + Hair Cut + Color',
      price: 120,
      duration: '75-90 min',
      description: 'Complete grooming package with hair cut, beard trim, and coloring',
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true
    },
    {
      id: 'kids-cut',
      name: 'Kids Hair Cut',
      price: 50,
      duration: '20-25 min',
      description: 'Gentle and patient hair cutting service for children',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: false
    },
    {
      id: 'baby-cut',
      name: 'Baby Hair Cut',
      price: 60,
      duration: '15-20 min',
      description: 'Special care hair cutting for babies and toddlers',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: false
    },
    {
      id: 'head-wash',
      name: 'Head Wash',
      price: 40,
      duration: '15 min',
      description: 'Refreshing head wash with premium shampoo and conditioner',
      image: 'https://images.unsplash.com/photo-1571049421753-993e9a8e9286?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: false
    },
    {
      id: 'full-massage',
      name: 'Head & Body Massage',
      price: 100,
      duration: '45-60 min',
      description: 'Relaxing full massage for head, neck, and shoulders',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true
    },
    {
      id: 'head-massage',
      name: 'Head Massage Only',
      price: 40,
      duration: '20-25 min',
      description: 'Soothing head massage to relieve stress and tension',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: false
    },
    {
      id: 'face-wash',
      name: 'Face Wash',
      price: 50,
      duration: '20 min',
      description: 'Deep cleansing face wash for fresh and clean skin',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Scissors className="w-6 h-6 text-yellow-600 mr-2" />
            <span className="text-yellow-600 font-semibold tracking-wider">
              OUR SERVICES
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Premium Services & Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From traditional cuts to modern styling, we offer comprehensive grooming 
            services at affordable prices with no compromise on quality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
                
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                
                {/* Price Badge */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="text-gray-900 font-bold text-lg">₹{service.price}</span>
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.name}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Duration */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{service.duration}</span>
                </div>

                {/* Book Button */}
                <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white py-3 rounded-xl font-semibold transition-all transform hover:scale-105">
                  Book This Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Note */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scissors className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Premium Tools</h4>
                <p className="text-gray-600 text-sm">
                  We use only the finest quality tools and products for the best results
                </p>
              </div>
              <div>
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Expert Service</h4>
                <p className="text-gray-600 text-sm">
                  57+ years of combined experience in traditional and modern techniques
                </p>
              </div>
              <div>
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Quick Service</h4>
                <p className="text-gray-600 text-sm">
                  Efficient service without compromising quality - book your slot now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}