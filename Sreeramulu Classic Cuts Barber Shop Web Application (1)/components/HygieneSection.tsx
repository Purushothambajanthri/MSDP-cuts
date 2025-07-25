import React from 'react';
import { Shield, Droplets, Scissors, Sparkles, CheckCircle, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HygieneSection() {
  const hygieneFeatures = [
    {
      icon: Droplets,
      title: 'Sanitized Tools',
      description: 'All cutting tools are thoroughly cleaned and disinfected after each use',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Clean Environment',
      description: 'Shop floor and surfaces cleaned multiple times daily',
      color: 'green'
    },
    {
      icon: Sparkles,
      title: 'Fresh Towels',
      description: 'Clean, freshly washed towels for every customer',
      color: 'purple'
    },
    {
      icon: Heart,
      title: 'Health First',
      description: 'Your health and safety is our top priority',
      color: 'red'
    }
  ];

  const tools = [
    {
      name: 'Professional Clippers',
      description: 'High-grade electric clippers for precision cuts',
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Sharp Scissors',
      description: 'Premium Japanese steel scissors for detailed work',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Razors & Trimmers',
      description: 'Professional grade razors for clean shaves',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Styling Products',
      description: 'Quality hair oils, shampoos and styling products',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const certifications = [
    'Daily Equipment Sterilization',
    'Fresh Towel Policy',
    'Surface Disinfection',
    'Hand Sanitization Protocol',
    'Clean Water Usage',
    'Quality Product Standards'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-green-600 mr-2" />
            <span className="text-green-600 font-semibold tracking-wider">
              HYGIENE & SAFETY
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Tools & Hygiene Standards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We maintain the highest standards of cleanliness and use only 
            professional-grade tools to ensure your safety and comfort during every visit.
          </p>
        </div>

        {/* Hygiene Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {hygieneFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = {
              blue: 'bg-blue-100 text-blue-600 border-blue-200',
              green: 'bg-green-100 text-green-600 border-green-200',
              purple: 'bg-purple-100 text-purple-600 border-purple-200',
              red: 'bg-red-100 text-red-600 border-red-200'
            };
            
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center border-2 ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tools Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Tools & Equipment
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We invest in the best tools and equipment to provide you with 
              superior cuts and styling results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {tool.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hygiene Certifications */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Hygiene Commitments
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow strict hygiene protocols to ensure your safety and comfort 
              during every visit to our shop.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm"
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Promise */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Our Safety Promise
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Your health and safety are our highest priority. We maintain strict hygiene standards, 
              use only sanitized tools, and ensure a clean environment for every customer. 
              Trust us to take care of you with the utmost professionalism and care.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <Droplets className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Sanitized Always</h4>
                <p className="text-gray-300 text-sm">
                  Every tool sanitized before and after each use
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Fresh & Clean</h4>
                <p className="text-gray-300 text-sm">
                  Clean towels, cape, and workspace for every customer
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <Heart className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Health First</h4>
                <p className="text-gray-300 text-sm">
                  Your wellbeing is our primary concern always
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                <strong>Note:</strong> If you have any specific health concerns or allergies, 
                please let us know before your service begins. We're here to accommodate your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}