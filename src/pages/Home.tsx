import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, TrendingUp, Church } from 'lucide-react';
import churchData from '../data/church.json';
import makingHistoryData from '../data/making-history.json';

const Home: React.FC = () => {
  //const progressPercentage = (makingHistoryData.campaign.raised / makingHistoryData.campaign.goal) * 100;

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.pixabay.com/video/2022/09/11/130992-749689265_medium.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10 text-center text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Welcome to {churchData.name}
              </h1>
              <p className="text-xl md:text-2xl text-beige mb-8">
                {churchData.tagline}
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Join us as we <b><i>gather</i></b> to worship, <b><i>grow</i></b> in faith, and <b><i>go</i></b> forth to make a difference in our community and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/about"
                  className="bg-beige text-navy px-8 py-3 rounded-lg font-semibold hover:bg-cream transition-colors duration-200 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/making-history"
                  className="border-2 border-beige text-beige px-8 py-3 rounded-lg font-semibold hover:bg-beige hover:text-navy transition-colors duration-200"
                >
                  Making History Campaign
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/50" />
      </section>

      {/* Making History Campaign Highlight */}
      <section className="bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              {makingHistoryData.campaign.title}
            </h2>
            <p className="text-xl text-charcoal-gray mb-8">
              {makingHistoryData.campaign.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-charcoal-gray mb-8">
                {makingHistoryData.campaign.description}
              </p>

              {/*<div className="mb-8">*/}
              {/*  <div className="flex justify-between items-center mb-2">*/}
              {/*    <span className="text-navy font-semibold">Progress</span>*/}
              {/*    <span className="text-navy font-semibold">*/}
              {/*      ${makingHistoryData.campaign.raised.toLocaleString()} / ${makingHistoryData.campaign.goal.toLocaleString()}*/}
              {/*    </span>*/}
              {/*  </div>*/}
              {/*  <div className="w-full bg-gray-200 rounded-full h-4">*/}
              {/*    <div*/}
              {/*      className="bg-navy h-4 rounded-full transition-all duration-1000"*/}
              {/*      style={{ width: `${progressPercentage}%` }}*/}
              {/*    ></div>*/}
              {/*  </div>*/}
              {/*  <p className="text-sm text-charcoal-gray mt-2">*/}
              {/*    {progressPercentage.toFixed(1)}% of goal reached*/}
              {/*  </p>*/}
              {/*</div>*/}

              <Link
                to="/making-history"
                className="bg-navy text-cream px-8 py-3 rounded-lg font-semibold hover:bg-charcoal-gray transition-colors duration-200 inline-flex items-center"
              >
                Learn More About Our Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {makingHistoryData.campaign.highlights.map((highlight, index) => {
                const IconComponent = highlight.icon === 'Church' ? Church :
                  highlight.icon === 'Users' ? Users :
                    highlight.icon === 'TrendingUp' ? TrendingUp : Heart;

                return (
                  <div key={index} className="bg-cream p-6 rounded-lg shadow-md">
                    <IconComponent className="h-8 w-8 text-navy mb-4" />
                    <h3 className="font-semibold text-navy mb-2">{highlight.title}</h3>
                    <p className="text-sm text-charcoal-gray">{highlight.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="bg-cream">
        <div
          className="relative parallax-bg flex items-center justify-center rounded-lg"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/5711241/pexels-photo-5711241.jpeg')" }}>
          <div className="absolute inset-0 bg-white/50" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Join Us for Worship
              </h2>
              <p className="text-xl text-charcoal-gray">
                Everyone is welcome at Windsor Gospel Assembly
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-beige p-8 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-bold text-navy mb-4">Sunday Service</h3>
                <p className="text-3xl font-bold text-charcoal-gray mb-4">{churchData.services.sunday}</p>
                <p className="text-charcoal-gray">
                  Join us for spirit-filled worship, authentic fellowship, and inspiring messages from God's Word.
                </p>
              </div>

              <div className="bg-beige p-8 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-bold text-navy mb-4">Saturday Bible Study</h3>
                <p className="text-3xl font-bold text-charcoal-gray mb-4">{churchData.services.saturday}</p>
                <p className="text-charcoal-gray">
                  Come together for a deep dive into biblical concepts through teaching, workshops and discussions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-navy text-cream"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take Your Next Step?
          </h2>
          <p className="text-xl text-beige mb-8">
            Whether you're new to faith or looking to grow deeper, we're here to walk with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="bg-beige text-navy px-8 py-3 rounded-lg font-semibold hover:bg-cream transition-colors duration-200"
            >
              Learn About Us
            </Link>
            <Link
              to="/giving"
              className="border-2 border-beige text-beige px-8 py-3 rounded-lg font-semibold hover:bg-beige hover:text-navy transition-colors duration-200"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Home;