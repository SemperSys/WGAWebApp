import React from 'react';
import { TrendingUp, Users, Church, Heart, ArrowRight, Target } from 'lucide-react';
import makingHistoryData from '../data/making-history.json';

const MakingHistory: React.FC = () => {
  const progressPercentage = (makingHistoryData.campaign.raised / makingHistoryData.campaign.goal) * 100;
  const remaining = makingHistoryData.campaign.goal - makingHistoryData.campaign.raised;

  return (<>
    <div
      className="parallax-bg h-[40vh] flex items-center justify-center mb-16"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=1200')"
      }}
    >
      <div className="bg-navy/70 p-8 rounded-lg text-center w-full max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cream mb-6">
          {makingHistoryData.campaign.title}
        </h1>
        <p className="text-2xl text-beige font-semibold mb-4">
          {makingHistoryData.campaign.subtitle}
        </p>
        <p className="text-lg text-cream max-w-3xl mx-auto">
          {makingHistoryData.campaign.description}
        </p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Progress Section */}
      <div className="bg-beige rounded-lg p-8 md:p-12 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-navy mb-4">Campaign Progress</h2>
          <p className="text-lg text-charcoal-gray">Together, we're making incredible progress toward our goal!</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-navy">
                ${makingHistoryData.campaign.raised.toLocaleString()}
              </span>
              <span className="text-2xl font-bold text-navy">
                ${makingHistoryData.campaign.goal.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
              <div
                className="bg-navy h-6 rounded-full transition-all duration-1000 flex items-center justify-end pr-4"
                style={{ width: `${Math.max(progressPercentage, 10)}%` }}
              >
                <span className="text-white text-sm font-semibold">
                  {progressPercentage.toFixed(1)}%
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-navy">{progressPercentage.toFixed(1)}%</div>
                <div className="text-charcoal-gray">Complete</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy">${remaining.toLocaleString()}</div>
                <div className="text-charcoal-gray">Remaining</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy">{makingHistoryData.campaign.targetDate}</div>
                <div className="text-charcoal-gray">Target Date</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/giving"
              className="bg-navy text-cream px-8 py-4 rounded-lg text-lg font-semibold hover:bg-charcoal-gray transition-colors duration-200 inline-flex items-center"
            >
              Support the Campaign
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Campaign Highlights */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">What Your Support Builds</h2>
          <p className="text-xl text-charcoal-gray">
            Every donation brings us closer to a permanent home for our growing church family
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {makingHistoryData.campaign.highlights.map((highlight, index) => {
            const IconComponent = highlight.icon === 'Church' ? Church :
              highlight.icon === 'Users' ? Users :
                highlight.icon === 'TrendingUp' ? TrendingUp : Heart;

            return (
              <div key={index} className="bg-cream p-8 rounded-lg shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-beige p-4 rounded-full">
                    <IconComponent className="h-8 w-8 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-3">{highlight.title}</h3>
                    <p className="text-charcoal-gray leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-navy text-cream rounded-lg p-8 md:p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Leaders Say</h2>
          <p className="text-xl text-beige">
            Hear from those who are leading this historic campaign
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {makingHistoryData.campaign.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-charcoal-gray p-6 rounded-lg">
              <blockquote className="text-lg text-gray-300 mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-beige">{testimonial.name}</div>
                <div className="text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vision Image Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img
            src="https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Church building vision"
            className="rounded-lg shadow-lg w-full h-96 object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-navy mb-6">A Vision Becoming Reality</h2>
          <p className="text-lg text-charcoal-gray mb-6">
            For years, we've dreamed of having a permanent home where our church family can gather,
            grow, and serve our community. That dream is now within reach, and we need your help to make it a reality.
          </p>
          <p className="text-lg text-charcoal-gray mb-8">
            This building will serve not just our current congregation, but future generations who will
            continue the mission of spreading God's love throughout Windsor and beyond.
          </p>
          <div className="bg-beige p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <Target className="h-6 w-6 text-navy" />
              <h3 className="text-xl font-semibold text-navy">Our Goal</h3>
            </div>
            <p className="text-charcoal-gray">
              To raise ${makingHistoryData.campaign.goal.toLocaleString()} by {makingHistoryData.campaign.targetDate}
              to secure and prepare our new church home.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-beige rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-navy mb-4">Join Us in Making History</h2>
        <p className="text-xl text-charcoal-gray mb-8 max-w-3xl mx-auto">
          Every gift, no matter the size, brings us closer to our goal. Together, we can secure a lasting
          legacy for our church family and the Windsor community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/giving"
            className="bg-navy text-cream px-8 py-4 rounded-lg text-lg font-semibold hover:bg-charcoal-gray transition-colors duration-200 inline-flex items-center justify-center"
          >
            Make a Donation
            <Heart className="ml-2 h-5 w-5" />
          </a>
          <a
            href="mailto:info@windsorgospel.org"
            className="border-2 border-navy text-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-navy hover:text-cream transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    </div >
  </>
  );
};

export default MakingHistory;