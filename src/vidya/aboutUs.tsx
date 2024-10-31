import React from 'react';
import {Users, Globe, Truck, Shield} from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Customer First",
      description: "We prioritize customer satisfaction with personalized service and support available 24/7."
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Global Reach",
      description: "Serving customers worldwide with fast shipping to over 100 countries."
    },
    {
      icon: <Truck className="w-12 h-12 text-blue-600" />,
      title: "Fast Delivery",
      description: "Quick and reliable shipping with real-time tracking capabilities."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Secure Shopping",
      description: "State-of-the-art security measures to protect your data and transactions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Our Story
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Building the future of online shopping, one satisfied customer at a time
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            To provide an exceptional shopping experience by offering quality products, 
            competitive prices, and outstanding customer service. We strive to make 
            online shopping accessible, convenient, and enjoyable for everyone.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-500">
              We'd love to hear from you. Contact us for any inquiries.
            </p>
            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;