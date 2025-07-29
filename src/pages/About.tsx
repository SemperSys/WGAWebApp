import React from 'react';
import { Church, Heart, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
          About Windsor Gospel Assembly
        </h1>
        <p className="text-xl text-charcoal-gray max-w-3xl mx-auto">
          We are a vibrant community of believers committed to following Jesus Christ and serving our community with love, hope, and purpose.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img
            src="https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Church community"
            className="rounded-lg shadow-lg w-full h-96 object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
          <p className="text-lg text-charcoal-gray mb-6">
            Windsor Gospel Assembly was founded with a simple yet powerful vision: to create a place where people from all walks of life can encounter God's love, grow in their faith, and discover their purpose.
          </p>
          <p className="text-lg text-charcoal-gray mb-6">
            Since our beginning, we have been committed to building authentic relationships, fostering spiritual growth, and making a positive impact in Windsor and beyond. Our church is more than just a building – it's a family united by faith and driven by love.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-navy">200+</div>
              <div className="text-charcoal-gray">Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-navy">15+</div>
              <div className="text-charcoal-gray">Ministries</div>
            </div>
          </div>
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

      <div className="bg-navy text-cream rounded-lg p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">What We Believe</h2>
          <p className="text-beige text-lg">
            Our faith is built on the solid foundation of God's Word
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-beige mb-3">The Bible</h3>
            <p className="text-gray-300 mb-6">
              We believe the Bible is the inspired, infallible Word of God and our ultimate authority for faith and practice.
            </p>
            <h3 className="text-xl font-semibold text-beige mb-3">Jesus Christ</h3>
            <p className="text-gray-300">
              We believe Jesus is the Son of God, our Savior and Lord, who died for our sins and rose again.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-beige mb-3">Salvation</h3>
            <p className="text-gray-300 mb-6">
              We believe salvation is by grace through faith in Jesus Christ, not by works or good deeds.
            </p>
            <h3 className="text-xl font-semibold text-beige mb-3">The Church</h3>
            <p className="text-gray-300">
              We believe the church is the body of Christ, called to worship, fellowship, and serve together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;