import React, { useState } from 'react';
import { Play, Calendar, User, Youtube } from 'lucide-react';
import youtubeData from '../data/youtube.json';

const Media: React.FC = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(youtubeData.playlists[0]);

  const handleVideoClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
          Media & Messages
        </h1>
        <p className="text-xl text-charcoal-gray max-w-3xl mx-auto">
          Watch our latest sermons, worship sessions, and special events. Join us online anytime!
        </p>
      </div>

      {/* Featured Video */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-navy mb-8 text-center">Featured Message</h2>
        <div className="bg-beige rounded-lg p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div 
              className="relative cursor-pointer group"
              onClick={() => handleVideoClick(youtubeData.featured.videoId)}
            >
              <img
                src={youtubeData.featured.thumbnail}
                alt={youtubeData.featured.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center group-hover:bg-opacity-60 transition-all duration-200">
                <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-transform duration-200">
                  <Play className="h-8 w-8 text-navy" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy mb-4">{youtubeData.featured.title}</h3>
              <p className="text-lg text-charcoal-gray mb-6">{youtubeData.featured.description}</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-charcoal-gray">
                  <User className="h-5 w-5" />
                  <span>{youtubeData.featured.speaker}</span>
                </div>
                <div className="flex items-center space-x-2 text-charcoal-gray">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(youtubeData.featured.date).toLocaleDateString()}</span>
                </div>
              </div>
              <button
                onClick={() => handleVideoClick(youtubeData.featured.videoId)}
                className="mt-6 bg-navy text-cream px-6 py-3 rounded-lg font-semibold hover:bg-charcoal-gray transition-colors duration-200 flex items-center"
              >
                <Youtube className="h-5 w-5 mr-2" />
                Watch on YouTube
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Playlists */}
      <div>
        <h2 className="text-3xl font-bold text-navy mb-8 text-center">Video Collections</h2>
        
        {/* Playlist Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {youtubeData.playlists.map((playlist) => (
            <button
              key={playlist.id}
              onClick={() => setSelectedPlaylist(playlist)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                selectedPlaylist.id === playlist.id
                  ? 'bg-navy text-cream'
                  : 'bg-beige text-navy hover:bg-charcoal-gray hover:text-cream'
              }`}
            >
              {playlist.title}
            </button>
          ))}
        </div>

        {/* Selected Playlist Content */}
        <div className="bg-cream rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-navy mb-2">{selectedPlaylist.title}</h3>
            <p className="text-charcoal-gray">{selectedPlaylist.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedPlaylist.videos.map((video, index) => (
              <div 
                key={index}
                className="bg-beige rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                onClick={() => handleVideoClick(video.videoId)}
              >
                <div className="relative group">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="bg-white bg-opacity-90 rounded-full p-3">
                      <Play className="h-6 w-6 text-navy" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-navy mb-2 line-clamp-2">{video.title}</h4>
                  <div className="space-y-1 text-sm text-charcoal-gray">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{video.speaker}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(video.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* YouTube Channel CTA */}
      <div className="mt-16 text-center bg-navy text-cream rounded-lg p-8 md:p-12">
        <Youtube className="h-16 w-16 text-beige mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Channel</h2>
        <p className="text-xl text-beige mb-8">
          Don't miss any of our latest messages and events. Subscribe to our YouTube channel for weekly updates!
        </p>
        <a
          href="https://youtube.com/@windsorgospelassembly"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-beige text-navy px-8 py-3 rounded-lg font-semibold hover:bg-cream transition-colors duration-200 inline-flex items-center"
        >
          <Youtube className="h-5 w-5 mr-2" />
          Subscribe Now
        </a>
      </div>
    </div>
  );
};

export default Media;