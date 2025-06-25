import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage-interactive-hackathon-platform', icon: 'Home' },
    { name: 'Hackathons', path: '/hackathon-hub-event-discovery', icon: 'Code' },
    { name: 'Profiles', path: '/developer-profiles-personal-brand-platform', icon: 'User' },
    { name: 'Live Events', path: '/live-event-experience-real-time-participation', icon: 'Radio' },
    { name: 'Community', path: '/community-network-developer-ecosystem', icon: 'Users' },
    { name: 'Sponsors', path: '/sponsor-galaxy-partnership-portal', icon: 'Building' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glassmorphism shadow-depth' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/homepage-interactive-hackathon-platform" 
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 lg:w-7 lg:h-7 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-gradient">
                Hackfinity
              </h1>
              <p className="text-xs text-text-secondary -mt-1">
                Infinite Possibilities
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActivePath(item.path)
                    ? 'bg-primary text-white shadow-floating'
                    : 'text-text-primary hover:bg-primary-50 hover:text-primary hover:-translate-y-1'
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="btn-conversion text-sm px-6 py-2.5 shadow-floating">
              Join Hackathon
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-text-primary hover:bg-primary-50 hover:text-primary transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' :'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="glassmorphism border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActivePath(item.path)
                    ? 'bg-primary text-white' :'text-text-primary hover:bg-primary-50 hover:text-primary'
                }`}
              >
                <Icon name={item.icon} size={20} />
                <span>{item.name}</span>
              </Link>
            ))}
            
            <div className="pt-4 border-t border-white/20">
              <button 
                className="w-full btn-conversion text-base py-3"
                onClick={closeMenu}
              >
                Join Hackathon
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;