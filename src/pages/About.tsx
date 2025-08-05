import React from 'react';
import { Church, Heart, Users, Globe, HandHeart } from 'lucide-react';
import churchData from '../data/church.json';

const About: React.FC = () => {
  return (
    <>
      <div
        className="parallax-bg h-[40vh] flex items-center justify-center mb-16"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=1200')"
        }}
      >
        <div className="bg-navy/70 p-8 rounded-lg text-center w-full max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cream mb-6">
            About Us
          </h1>
          <p className="text-lg text-cream max-w-3xl mx-auto">
            We are a vibrant community of believers committed to following Jesus Christ and serving our community with love, hope, and purpose.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Church community"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy mb-6">Who We Are</h2>
            <p className="text-lg text-charcoal-gray mb-6">
              Windsor Gospel Assembly is a Christ-centered, Bible-believing, Holy Spirit-filled community passionate about reaching our local community and beyond for Christ.
            </p>
            <p className="text-lg text-charcoal-gray mb-6">
              WGA desires to walk with you as you discover and live out God's plan for your life. We want you to feel accepted and loved.</p>
            <p className="text-lg text-charcoal-gray mb-6">
              We welcome you, value you, and encourage you to join us where real people with real issues meet a real God who provides real comfort, hope, and healing.
              When the world rejects you and tells you that you are unworthy, remember: Jesus made the ultimate sacrifice on the cross to redeem you because you are so worth it!
            </p>
            <p className="text-lg text-charcoal-gray mb-6">
              You belong at <i>Windsor Gospel Assembly</i>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-beige p-6 rounded-lg shadow-md text-center">
            <Church className="h-12 w-12 text-navy mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-navy mb-2">Worship</h3>
            <p className="text-charcoal-gray">
              Experience meaningful worship that connects your heart with God's presence.
            </p>
          </div>
          <div className="bg-beige p-6 rounded-lg shadow-md text-center">
            <Heart className="h-12 w-12 text-navy mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-navy mb-2">Community</h3>
            <p className="text-charcoal-gray">
              Build lasting friendships and find belonging in our welcoming church family.
            </p>
          </div>
          <div className="bg-beige p-6 rounded-lg shadow-md text-center">
            <Users className="h-12 w-12 text-navy mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-navy mb-2">Growth</h3>
            <p className="text-charcoal-gray">
              Grow in your faith through teaching, discipleship, and spiritual development.
            </p>
          </div>
          <div className="bg-beige p-6 rounded-lg shadow-md text-center">
            <Globe className="h-12 w-12 text-navy mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-navy mb-2">Service</h3>
            <p className="text-charcoal-gray">
              Make a difference in our community and the world through acts of service.
            </p>
          </div>
        </div>

        <div className="bg-beige text-charcoal-gray rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">What We Believe</h2>
            <p className="text-charcoal-gray text text-lg">
              Our faith is built on the solid foundation of God's Word
            </p>
          </div>
          <div className="grid grid-cols-1  gap-12">
            <div>
              {churchData.faithStatement.map((statement, activityIndex) => (
                <div key={activityIndex} className="flex items-top space-x-3 mx-12 my-4">
                  <span><HandHeart size={20} className="text-charcoal-gray text mb-4" /></span><span className="text-xl text-charcoal-gray mb-4" >{statement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;