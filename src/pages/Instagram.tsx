import React from 'react';
import { Instagram as InstagramIcon, Heart, ExternalLink } from 'lucide-react';
import instagramData from '../data/instagram.json';

const Instagram: React.FC = () => {
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
            Follow Our Journey
          </h1>
          <p className="text-lg text-cream max-w-3xl mx-auto">
            Stay connected with our church family through Instagram. See what's happening in our community!
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {instagramData.posts.map((post) => (
            <div key={post.id} className="bg-cream rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={post.image}
                  alt="Instagram post"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <InstagramIcon className="h-6 w-6 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="p-6">
                <p className="text-charcoal-gray mb-4 leading-relaxed">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between text-sm text-charcoal-gray">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-red-500 fill-current" />
                    <span>{post.likes} likes</span>
                  </div>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-8 md:p-12 text-center">
          <InstagramIcon className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Follow Us on Instagram</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of followers and stay updated with our latest events, messages of hope,
            and behind-the-scenes moments from our church family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com/_w.g.a_"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <InstagramIcon className="h-5 w-5 mr-2" />
              Follow @windsorgospelassembly
            </a>
            <a
              href="https://instagram.com/_w.g.a_"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              View All Posts
            </a>
          </div>
        </div>

        {/* Hashtags Section */}
        <div className="mt-16 text-center bg-beige rounded-lg p-8">
          <h3 className="text-2xl font-bold text-navy mb-6">Share Your Story</h3>
          <p className="text-lg text-charcoal-gray mb-6">
            Use these hashtags when sharing your Windsor Gospel Assembly moments:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['#WindsorGospel', '#GatherGrowGo', '#MakingHistory', '#ChurchFamily', '#Faith', '#Community', '#Windsor'].map((hashtag) => (
              <span key={hashtag} className="bg-navy text-cream px-4 py-2 rounded-full text-sm font-medium">
                {hashtag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Instagram;