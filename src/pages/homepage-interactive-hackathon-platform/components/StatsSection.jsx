import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    developers: 0,
    hackathons: 0,
    projects: 0,
    prizes: 0
  });

  const finalValues = {
    developers: 50247,
    hackathons: 1289,
    projects: 12847,
    prizes: 2500000
  };

  const stats = [
    {
      key: 'developers',
      icon: 'Users',
      label: 'Active Developers',
      value: counters.developers,
      suffix: '+',
      color: 'text-primary',
      bgColor: 'bg-primary-50'
    },
    {
      key: 'hackathons',
      icon: 'Code',
      label: 'Hackathons Hosted',
      value: counters.hackathons,
      suffix: '+',
      color: 'text-secondary',
      bgColor: 'bg-secondary-50'
    },
    {
      key: 'projects',
      icon: 'FolderOpen',
      label: 'Projects Created',
      value: counters.projects,
      suffix: '+',
      color: 'text-accent',
      bgColor: 'bg-accent-50'
    },
    {
      key: 'prizes',
      icon: 'DollarSign',
      label: 'Total Prizes Awarded',
      value: counters.prizes,
      prefix: '$',
      suffix: '+',
      color: 'text-success',
      bgColor: 'bg-success-50'
    }
  ];

  const [ref, inView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      
      // Animate counters
      Object.keys(finalValues).forEach((key) => {
        let start = 0;
        const end = finalValues[key];
        const duration = 2000; // 2 seconds
        const increment = end / (duration / 16); // 60fps

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(start)
          }));
        }, 16);
      });
    }
  }, [inView, hasAnimated]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toLocaleString();
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent relative">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => setRef(true)}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Powering Innovation <span className="text-accent-200">Worldwide</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join a thriving ecosystem of developers, creators, and innovators who are 
            building the future through collaborative hackathons and breakthrough projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="glassmorphism rounded-2xl p-8 text-center backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${stat.bgColor} flex items-center justify-center`}>
                <Icon name={stat.icon} size={32} className={stat.color} />
              </div>
              
              <div className="mb-4">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.prefix && <span className="text-3xl">{stat.prefix}</span>}
                  {stat.key === 'prizes' ? formatNumber(stat.value) : stat.value.toLocaleString()}
                  {stat.suffix && <span className="text-3xl">{stat.suffix}</span>}
                </div>
                <div className="text-white/80 font-medium text-lg">
                  {stat.label}
                </div>
              </div>

              {/* Progress indicator */}
              <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                <motion.div
                  className="bg-gradient-to-r from-accent-300 to-accent-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: inView ? '100%' : 0 }}
                  transition={{ duration: 2, delay: index * 0.2 }}
                />
              </div>

              {/* Additional context */}
              <div className="text-white/60 text-sm">
                {stat.key === 'developers' && 'From 150+ countries'}
                {stat.key === 'hackathons' && 'Since 2020'}
                {stat.key === 'projects' && 'Open source & proprietary'}
                {stat.key === 'prizes' && 'Distributed globally'}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {[
            { label: 'Success Rate', value: '89%', icon: 'TrendingUp' },
            { label: 'Avg Team Size', value: '4.2', icon: 'Users' },
            { label: 'Countries', value: '150+', icon: 'Globe' },
            { label: 'Partner Companies', value: '200+', icon: 'Building' },
            { label: 'Mentors Available', value: '500+', icon: 'GraduationCap' }
          ].map((metric, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-white/10 rounded-xl flex items-center justify-center">
                <Icon name={metric.icon} size={24} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {metric.value}
              </div>
              <div className="text-white/70 text-sm">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glassmorphism rounded-2xl p-8 backdrop-blur-xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Be Part of These Numbers?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Join thousands of developers who are already building the future. 
              Your next breakthrough project is just one hackathon away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-floating hover:-translate-y-1 transition-all duration-300">
                Start Your Journey
              </button>
              <button className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-xl border border-white/20">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;