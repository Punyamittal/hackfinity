import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

import Header from 'components/ui/Header';
import HeroSection from './components/HeroSection';
import ActiveHackathons from './components/ActiveHackathons';
import DeveloperNexus from './components/DeveloperNexus';
import LiveActivityFeed from './components/LiveActivityFeed';
import StatsSection from './components/StatsSection';
import FeaturedSponsors from './components/FeaturedSponsors';

const Homepage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />
      
      {/* Floating Code Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary-200 opacity-20 font-mono text-sm select-none"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: Math.random() * 360
            }}
            animate={{
              x: mousePosition.x * 2 + Math.sin(Date.now() * 0.001 + i) * 50,
              y: mousePosition.y * 2 + Math.cos(Date.now() * 0.001 + i) * 50,
              rotate: mousePosition.x + mousePosition.y + i * 10
            }}
            transition={{ 
              duration: 2,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {['{ }', '< />', '[ ]', '( )', '&&', '||', '=>', '++'][i % 8]}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection mousePosition={mousePosition} isLoaded={isLoaded} />

        {/* Active Hackathons Section */}
        <ActiveHackathons />

        {/* Stats Section */}
        <StatsSection />

        {/* Developer Nexus Section */}
        <DeveloperNexus />

        {/* Live Activity Feed */}
        <LiveActivityFeed />

        {/* Featured Sponsors */}
        <FeaturedSponsors />

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Ready to Push Boundaries?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Join thousands of developers who are transforming ideas into impact. 
                Your next breakthrough is just one hackathon away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/hackathon-hub-event-discovery"
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-floating hover:-translate-y-1 inline-flex items-center space-x-2"
                >
                  <Icon name="Code" size={24} />
                  <span>Explore Hackathons</span>
                </Link>
                <Link 
                  to="/community-network-developer-ecosystem"
                  className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:shadow-floating hover:-translate-y-1 inline-flex items-center space-x-2 backdrop-blur-xl border border-white/20"
                >
                  <Icon name="Users" size={24} />
                  <span>Join Community</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary via-accent to-primary rounded-xl flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient">Hackfinity</h3>
                  <p className="text-sm text-white/60">Infinite Possibilities</p>
                </div>
              </div>
              <p className="text-white/80 mb-4 max-w-md">
                Where infinite possibilities meet infinite potential. Join the premier hackathon platform 
                that transforms ideas into impact.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                  <Icon name="Github" size={24} />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                  <Icon name="Twitter" size={24} />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                  <Icon name="Linkedin" size={24} />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                  <Icon name="Instagram" size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><Link to="/hackathon-hub-event-discovery" className="text-white/60 hover:text-white transition-colors duration-200">Hackathons</Link></li>
                <li><Link to="/developer-profiles-personal-brand-platform" className="text-white/60 hover:text-white transition-colors duration-200">Profiles</Link></li>
                <li><Link to="/community-network-developer-ecosystem" className="text-white/60 hover:text-white transition-colors duration-200">Community</Link></li>
                <li><Link to="/live-event-experience-real-time-participation" className="text-white/60 hover:text-white transition-colors duration-200">Live Events</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Partners</h4>
              <ul className="space-y-2">
                <li><Link to="/sponsor-galaxy-partnership-portal" className="text-white/60 hover:text-white transition-colors duration-200">Sponsors</Link></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors duration-200">Become Partner</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors duration-200">Media Kit</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60">
              © {new Date().getFullYear()} Hackfinity Hub. All rights reserved. Built with ❤️ by developers, for developers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;