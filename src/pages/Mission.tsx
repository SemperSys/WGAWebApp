import React from 'react';
import { Users, TrendingUp, Send, BookOpen, UserPlus, MapPin, Heart } from 'lucide-react';
import visionMissionData from '../data/vision-mission.json';

const Mission: React.FC = () => {
  const sectionIcons = {
    'GATHER': Users,
    'GROW': TrendingUp,
    'GO': Send
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
          {visionMissionData.mission.title}
        </h1>
        <p className="text-2xl text-charcoal-gray font-semibold mb-4">
          {visionMissionData.mission.statement}
        </p>
        <p className="text-lg text-charcoal-gray max-w-3xl mx-auto">
          Our mission is simple yet profound: to create a community where people gather in worship, 
          grow in faith, and go forth to serve others.
        </p>
      </div>

      <div className="space-y-16">
        {visionMissionData.mission.sections.map((section, index) => {
          const IconComponent = sectionIcons[section.title as keyof typeof sectionIcons];
          const isReversed = index % 2 === 1;
          
          return (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={isReversed ? 'lg:col-start-2' : ''}>
                <img
                  src={`https://images.pexels.com/photos/${8468470 + index * 30}/pexels-photo-${8468470 + index * 30}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                  alt={section.title}
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
              </div>
              <div className={isReversed ? 'lg:col-start-1' : ''}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-beige p-3 rounded-full">
                    <IconComponent className="h-8 w-8 text-navy" />
                  </div>
                  <h2 className="text-3xl font-bold text-navy">{section.title}</h2>
                </div>
                <p className="text-lg text-charcoal-gray mb-8">
                  {section.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-navy rounded-full"></div>
                      <span className="text-charcoal-gray">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-20 bg-beige rounded-lg p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">How We Live Out Our Mission</h2>
          <p className="text-xl text-charcoal-gray">
            Every ministry and activity flows from our commitment to Gather, Grow, and Go
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-cream p-6 rounded-lg shadow-md">
            <BookOpen className="h-10 w-10 text-navy mb-4" />
            <h3 className="text-xl font-semibold text-navy mb-3">Bible Study</h3>
            <p className="text-charcoal-gray">
              Weekly Bible studies help us grow deeper in God's Word and apply it to our daily lives.
            </p>
          </div>
          
          <div className="bg-cream p-6 rounded-lg shadow-md">
            <UserPlus className="h-10 w-10 text-navy mb-4" />
            <h3 className="text-xl font-semibold text-navy mb-3">Discipleship</h3>
            <p className="text-charcoal-gray">
              One-on-one mentoring relationships that help new believers grow in their faith journey.
            </p>
          </div>
          
          <div className="bg-cream p-6 rounded-lg shadow-md">
            <MapPin className="h-10 w-10 text-navy mb-4" />
            <h3 className="text-xl font-semibold text-navy mb-3">Outreach</h3>
            <p className="text-charcoal-gray">
              Regular community service projects that demonstrate God's love through practical action.
            </p>
          </div>
          
          <div className="bg-cream p-6 rounded-lg shadow-md">
            <Heart className="h-10 w-10 text-navy mb-4" />
            <h3 className="text-xl font-semibold text-navy mb-3">Care Ministry</h3>
            <p className="text-charcoal-gray">
              Supporting members through life's challenges with prayer, practical help, and encouragement.
            </p>
          </div>
          
          <div className="bg-cream p-6 rounded-lg shadow-md">
            <Users className="h-10 w-10 text-navy mb-4" />
            <h3 className="text-xl font-semibold text-navy mb-3">Small Groups</h3>
            <p className="text-charcoal-gray">
              Intimate gatherings where authentic relationships are built and spiritual growth happens.
            </p>
          </div>
          
          <div className="bg-cream p-6 rounded-lg shadow-md">
            <Send className="h-10 w-10 text-navy mb-4" />
            <h3 className="text-xl font-semibold text-navy mb-3">Missions</h3>
            <p className="text-charcoal-gray">
              Supporting local and global missions to spread the Gospel and serve those in need.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center bg-navy text-cream rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-4">Be Part of the Mission</h2>
        <p className="text-xl text-beige mb-8">
          God has uniquely gifted each person to contribute to His kingdom work.
        </p>
        <p className="text-lg text-gray-300 mb-8">
          Whether through worship, teaching, serving, or giving, there are countless ways to be part 
          of what God is doing through Windsor Gospel Assembly. Discover your place in the mission!
        </p>
        <a
          href="mailto:info@windsorgospel.org"
          className="bg-beige text-navy px-8 py-3 rounded-lg font-semibold hover:bg-cream transition-colors duration-200 inline-block"
        >
          Find Your Place to Serve
        </a>
      </div>
    </div>
  );
};

export default Mission;