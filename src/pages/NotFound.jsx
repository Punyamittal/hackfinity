import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-white/20 select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/20">
              <Icon name="AlertTriangle" size={48} className="text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="glassmorphism rounded-2xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-white/80 mb-6">
            Looks like this page got lost in the infinite possibilities of code.
          </p>
          <p className="text-white/60 mb-8">
            The page you're looking for doesn't exist or has been moved to another dimension.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/homepage-interactive-hackathon-platform"
              className="btn-conversion inline-flex items-center space-x-2"
            >
              <Icon name="Home" size={20} />
              <span>Back to Home</span>
            </Link>
            
            <Link 
              to="/hackathon-hub-event-discovery"
              className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1 inline-flex items-center space-x-2"
            >
              <Icon name="Code" size={20} />
              <span>Explore Hackathons</span>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <p className="text-white/40 text-sm">
          Error Code: 404 | Hackfinity Hub - Where infinite possibilities meet infinite potential
        </p>
      </div>
    </div>
  );
};

export default NotFound;