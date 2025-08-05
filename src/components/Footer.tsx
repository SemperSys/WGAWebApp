import React from 'react';
import { Church, Phone, Mail, MapPin, Youtube, Instagram, Facebook } from 'lucide-react';
import churchData from '../data/church.json';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={"/public/logo-white.png"} alt="Church Logo" className="h-10 w-10 mr-4" /> 
              <div>
                <div className="text-xl font-bold">{churchData.name}</div>
                <div className="text-beige">{churchData.tagline}</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Building a community of faith, hope, and love in Windsor and beyond.
            </p>
            <div className="flex space-x-4">
              <a
                href={churchData.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-beige hover:text-cream transition-colors duration-200"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href={churchData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-beige hover:text-cream transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href={churchData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-beige hover:text-cream transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-beige mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-beige" />
                <span className="text-gray-300">{churchData.contact.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-beige" />
                <span className="text-gray-300">{churchData.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-beige" />
                <span className="text-gray-300">{churchData.contact.email}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-beige mb-4">Service Times</h3>
            <div className="space-y-2">
              <div>
                <span className="font-medium text-beige">Sunday Worship Service:</span>
                <span className="text-gray-300 ml-2">{churchData.services.sunday}</span>
              </div>
              <div>
                <span className="font-medium text-beige">Saturday Bible Study:</span>
                <span className="text-gray-300 ml-2">{churchData.services.saturday}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-charcoal-gray">
          <p className="text-center text-gray-300">
            © 2024 {churchData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;