import React from 'react';
import { Eye, Target, Star, Users } from 'lucide-react';
import visionMissionData from '../data/vision-mission.json';

const Vision: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
          {visionMissionData.vision.title}
        </h1>
        <p className="text-xl text-charcoal-gray max-w-4xl mx-auto">
          {visionMissionData.vision.statement}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img
            src="https://images.pexels.com/photos/8468541/pexels-photo-8468541.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Vision"
            className="rounded-lg shadow-lg w-full h-96 object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-navy mb-6">Our Vision in Action</h2>
          <div className="space-y-6">
            {visionMissionData.vision.details.map((detail, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-beige p-2 rounded-full">
                  <Star className="h-6 w-6 text-navy" />
                </div>
                <p className="text-lg text-charcoal-gray">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-beige rounded-lg p-8 md:p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Core Values</h2>
          <p className="text-xl text-charcoal-gray">
            These values guide everything we do as a church community
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visionMissionData.values.map((value, index) => {
            const icons = [Eye, Target, Star, Users];
            const IconComponent = icons[index % icons.length];
            
            return (
              <div key={index} className="bg-cream p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-navy p-3 rounded-full">
                    <IconComponent className="h-6 w-6 text-cream" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-3">{value.title}</h3>
                    <p className="text-charcoal-gray">{value.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center bg-navy text-cream rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-4">Join Us in This Vision</h2>
        <p className="text-xl text-beige mb-8">
          We believe God has called each of us to be part of something bigger than ourselves.
        </p>
        <p className="text-lg text-gray-300 mb-8">
          Whether you're just beginning your faith journey or have been walking with Christ for years, 
          there's a place for you in our vision. Together, we can make a lasting impact in Windsor and beyond.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:info@windsorgospel.org"
            className="bg-beige text-navy px-8 py-3 rounded-lg font-semibold hover:bg-cream transition-colors duration-200"
          >
            Get Involved
          </a>
          <a
            href="/mission"
            className="border-2 border-beige text-beige px-8 py-3 rounded-lg font-semibold hover:bg-beige hover:text-navy transition-colors duration-200"
          >
            Learn About Our Mission
          </a>
        </div>
      </div>
    </div>
  );
};

export default Vision;