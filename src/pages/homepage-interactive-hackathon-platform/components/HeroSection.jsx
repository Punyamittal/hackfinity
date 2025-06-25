import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const HeroSection = ({ mousePosition, isLoaded }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [logoState, setLogoState] = useState('infinity'); // 'infinity' or 'brackets'

  // Mock upcoming hackathon date (7 days from now)
  const hackathonDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = hackathonDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hackathonDate]);

  useEffect(() => {
    const logoTimer = setInterval(() => {
      setLogoState(prev => prev === 'infinity' ? 'brackets' : 'infinity');
    }, 3000);

    return () => clearInterval(logoTimer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 pb-10">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Interactive Logo */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-32 h-32 lg:w-40 lg:h-40"
              animate={{
                rotateY: mousePosition.x * 0.1,
                rotateX: mousePosition.y * 0.1,
              }}
              transition={{ duration: 0.3 }}
              style={{ perspective: 1000 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl flex items-center justify-center shadow-floating">
                <motion.div
                  key={logoState}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5 }}
                  className="text-white text-4xl lg:text-5xl font-bold"
                >
                  {logoState === 'infinity' ? '∞' : '{ }'}
                </motion.div>
              </div>
              
              {/* Floating particles around logo */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-accent rounded-full"
                  animate={{
                    x: Math.cos((Date.now() * 0.001) + (i * Math.PI / 4)) * 60,
                    y: Math.sin((Date.now() * 0.001) + (i * Math.PI / 4)) * 60,
                  }}
                  transition={{ duration: 0.1 }}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
              Where{' '}
              <span className="text-gradient">Infinite Possibilities</span>
              <br />
              Meet{' '}
              <span className="text-gradient">Infinite Potential</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-text-secondary mb-8 max-w-4xl mx-auto">
              Join the premier hackathon platform where passionate developers unite to solve complex challenges, 
              push boundaries, and transform breakthrough ideas into world-changing solutions.
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="glassmorphism rounded-2xl p-6 lg:p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Next Global Hackathon Starts In:
              </h3>
              <div className="grid grid-cols-4 gap-4 lg:gap-8">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="text-center"
                    animate={{ scale: item.label === 'Seconds' ? [1, 1.05, 1] : 1 }}
                    transition={{ duration: 1, repeat: item.label === 'Seconds' ? Infinity : 0 }}
                  >
                    <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-xl p-4 lg:p-6 shadow-depth">
                      <div className="text-3xl lg:text-5xl font-bold mb-2">
                        {String(item.value).padStart(2, '0')}
                      </div>
                      <div className="text-sm lg:text-base font-medium opacity-80">
                        {item.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 text-text-secondary">
                <p className="text-lg">
                  <strong>AI Innovation Challenge 2024</strong> • $100K Prize Pool • 5000+ Participants Expected
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/hackathon-hub-event-discovery"
              className="btn-conversion text-lg px-8 py-4 shadow-floating inline-flex items-center space-x-2"
            >
              <Icon name="Zap" size={24} />
              <span>Join the Revolution</span>
            </Link>
            
            <Link 
              to="/developer-profiles-personal-brand-platform"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-depth hover:-translate-y-1 inline-flex items-center space-x-2 border-2 border-primary-100"
            >
              <Icon name="User" size={24} />
              <span>Create Profile</span>
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '50K+', label: 'Active Developers' },
              { number: '1.2K+', label: 'Hackathons Hosted' },
              { number: '$2.5M+', label: 'Prizes Awarded' },
              { number: '200+', label: 'Partner Companies' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;