import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Scissors, Star, Clock } from 'lucide-react';

interface HeroProps {
  onBookNow: () => void;
}

export function Hero({ onBookNow }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 text-white py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat bg-center" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Scissors className="w-8 h-8 text-yellow-400 mr-3" />
              <span className="text-yellow-400 font-medium tracking-wider">
                TRADITIONAL & MODERN CUTS
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Book Your Seat
              <span className="block text-yellow-400">Now</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Experience the finest traditional and modern hair styling at Kristipadu village's 
              most trusted barber shop. Expert cuts, premium service, affordable prices.
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-sm">45+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-sm">9 AM - 8 PM</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-2">₹</span>
                <span className="text-sm">Starting from ₹40</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onBookNow}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Book Your Seat Now
              </button>
              <a
                href="tel:9381625471"
                className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right Column - Barber Chairs */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-8">
              {/* Main Chair Display */}
              <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                    Classic Barber Setup
                  </h3>
                  <p className="text-gray-300">
                    Traditional chairs with modern comfort
                  </p>
                </div>
                
                {/* Barber Chair Image Placeholder */}
                <div className="relative mx-auto w-64 h-80 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-xl shadow-2xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Classic barber chair"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
                </div>

                {/* Chair Features */}
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-yellow-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <span className="text-gray-300">Chairs Available</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-yellow-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <Scissors className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">Premium Tools</span>
                  </div>
                </div>
              </div>

              {/* Shop Interior Elements */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Barber mirror and tools"
                    className="w-full h-24 object-cover rounded-lg mb-2"
                  />
                  <p className="text-xs text-gray-300 text-center">Mirror & Tools</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Clean barber shop interior"
                    className="w-full h-24 object-cover rounded-lg mb-2"
                  />
                  <p className="text-xs text-gray-300 text-center">Clean Setup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}