import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const LiveActivityFeed = () => {
  const [activities, setActivities] = useState([]);
  const [isLive, setIsLive] = useState(true);

  const activityTypes = [
    {
      type: 'registration',
      icon: 'UserPlus',
      color: 'text-success',
      bgColor: 'bg-success-50',
      templates: [
        '{name} just registered for {event}',
        '{name} joined the {event} hackathon',
        'Welcome {name} to {event}!'
      ]
    },
    {
      type: 'submission',
      icon: 'Upload',
      color: 'text-secondary',
      bgColor: 'bg-secondary-50',
      templates: [
        '{name} submitted their project "{project}" to {event}',
        'New submission: "{project}" by {name}',
        '{name} just uploaded "{project}" for {event}'
      ]
    },
    {
      type: 'winner',
      icon: 'Trophy',
      color: 'text-conversion',
      bgColor: 'bg-warning-50',
      templates: [
        '🎉 {name} won {place} place in {event}!',
        'Congratulations to {name} for winning {event}!',
        '{name} is the champion of {event}!'
      ]
    },
    {
      type: 'team',
      icon: 'Users',
      color: 'text-accent',
      bgColor: 'bg-accent-50',
      templates: [
        '{name} formed team "{team}" for {event}',
        'Team "{team}" is looking for members in {event}',
        '{name} joined team "{team}" for {event}'
      ]
    },
    {
      type: 'milestone',
      icon: 'Target',
      color: 'text-primary',
      bgColor: 'bg-primary-50',
      templates: [
        '{event} reached {milestone} participants!',
        'Milestone: {milestone} projects submitted to {event}',
        '{event} celebrates {milestone} registrations!'
      ]
    }
  ];

  const mockData = {
    names: [
      'Sarah Chen', 'Marcus Rodriguez', 'Priya Patel', 'Alex Kim', 'Emma Thompson',
      'David Wilson', 'Lisa Zhang', 'Michael Brown', 'Anna Garcia', 'James Lee',
      'Sophie Martin', 'Ryan Taylor', 'Maya Singh', 'Chris Johnson', 'Zoe Adams'
    ],
    events: [
      'AI Innovation Challenge 2024',
      'Sustainable Tech Hackathon',
      'Blockchain Revolution',
      'Mobile App Contest',
      'Web3 Builder Summit',
      'Climate Tech Challenge'
    ],
    projects: [
      'EcoTracker Pro', 'AI Health Assistant', 'Smart City Dashboard', 'DeFi Portfolio Manager',
      'Climate Monitor', 'Code Mentor Bot', 'Sustainable Transport', 'Medical AI Scanner',
      'Blockchain Voting', 'Green Energy Optimizer', 'Social Impact Tracker', 'AR Learning Tool'
    ],
    teams: [
      'Code Crusaders', 'Tech Titans', 'Innovation Squad', 'Digital Pioneers',
      'Future Builders', 'Hack Heroes', 'Algorithm Aces', 'Binary Builders'
    ],
    places: ['1st', '2nd', '3rd'],
    milestones: ['1000', '2500', '5000', '10000']
  };

  const generateActivity = () => {
    const activityType = activityTypes[Math.floor(Math.random() * activityTypes.length)];
    const template = activityType.templates[Math.floor(Math.random() * activityType.templates.length)];
    
    let message = template
      .replace('{name}', mockData.names[Math.floor(Math.random() * mockData.names.length)])
      .replace('{event}', mockData.events[Math.floor(Math.random() * mockData.events.length)])
      .replace('{project}', mockData.projects[Math.floor(Math.random() * mockData.projects.length)])
      .replace('{team}', mockData.teams[Math.floor(Math.random() * mockData.teams.length)])
      .replace('{place}', mockData.places[Math.floor(Math.random() * mockData.places.length)])
      .replace('{milestone}', mockData.milestones[Math.floor(Math.random() * mockData.milestones.length)]);

    return {
      id: Date.now() + Math.random(),
      type: activityType.type,
      icon: activityType.icon,
      color: activityType.color,
      bgColor: activityType.bgColor,
      message,
      timestamp: new Date(),
      avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 99)}.jpg`
    };
  };

  useEffect(() => {
    // Initialize with some activities
    const initialActivities = Array.from({ length: 5 }, () => generateActivity());
    setActivities(initialActivities);

    // Add new activities periodically
    const interval = setInterval(() => {
      if (isLive) {
        const newActivity = generateActivity();
        setActivities(prev => [newActivity, ...prev.slice(0, 9)]); // Keep only 10 activities
      }
    }, 3000 + Math.random() * 4000); // Random interval between 3-7 seconds

    return () => clearInterval(interval);
  }, [isLive]);

  const toggleLive = () => {
    setIsLive(!isLive);
  };

  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (seconds < 60) return 'just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return timestamp.toLocaleDateString();
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Activity Feed */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-2">
                    Live <span className="text-gradient">Activity Feed</span>
                  </h2>
                  <p className="text-text-secondary">
                    Real-time updates from the Hackfinity community
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-success animate-pulse' : 'bg-gray-400'}`}></div>
                    <span className="text-sm font-medium text-text-secondary">
                      {isLive ? 'Live' : 'Paused'}
                    </span>
                  </div>
                  <button
                    onClick={toggleLive}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                      isLive 
                        ? 'bg-error-100 text-error hover:bg-error-200' :'bg-success-100 text-success hover:bg-success-200'
                    }`}
                  >
                    {isLive ? 'Pause' : 'Resume'}
                  </button>
                </div>
              </div>

              <div className="glassmorphism rounded-2xl p-6 max-h-96 overflow-y-auto">
                <AnimatePresence>
                  {activities.map((activity) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/50 transition-colors duration-200 mb-2 last:mb-0"
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${activity.bgColor}`}>
                        <Icon name={activity.icon} size={18} className={activity.color} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <p className="text-text-primary text-sm leading-relaxed">
                          {activity.message}
                        </p>
                        <p className="text-text-secondary text-xs mt-1">
                          {getTimeAgo(activity.timestamp)}
                        </p>
                      </div>
                      
                      <Image
                        src={activity.avatar}
                        alt="User avatar"
                        className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Community Pulse */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Community <span className="text-gradient">Pulse</span>
              </h3>

              <div className="space-y-4">
                {/* Active Now */}
                <div className="glassmorphism rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-text-primary">Active Now</h4>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      <span className="text-sm text-success font-medium">Live</span>
                    </div>
                  </div>
                  
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {(2847 + Math.floor(Math.random() * 100)).toLocaleString()}
                  </div>
                  <p className="text-text-secondary text-sm">
                    Developers online and coding
                  </p>
                </div>

                {/* Today's Highlights */}
                <div className="glassmorphism rounded-xl p-6">
                  <h4 className="font-semibold text-text-primary mb-4">Today's Highlights</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">New Registrations</span>
                      <span className="font-semibold text-success">+247</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">Projects Submitted</span>
                      <span className="font-semibold text-secondary">+89</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">Teams Formed</span>
                      <span className="font-semibold text-accent">+34</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">Winners Announced</span>
                      <span className="font-semibold text-conversion">+12</span>
                    </div>
                  </div>
                </div>

                {/* Trending Technologies */}
                <div className="glassmorphism rounded-xl p-6">
                  <h4 className="font-semibold text-text-primary mb-4">Trending Tech</h4>
                  
                  <div className="space-y-2">
                    {[
                      { name: 'AI/ML', percentage: 85 },
                      { name: 'Blockchain', percentage: 72 },
                      { name: 'React', percentage: 68 },
                      { name: 'Python', percentage: 61 },
                      { name: 'Node.js', percentage: 54 }
                    ].map((tech, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-text-secondary">{tech.name}</span>
                          <span className="font-medium text-text-primary">{tech.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.percentage}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="glassmorphism rounded-xl p-6">
                  <h4 className="font-semibold text-text-primary mb-4">Quick Actions</h4>
                  
                  <div className="space-y-3">
                    <button className="w-full btn-primary text-sm py-2">
                      Join Live Event
                    </button>
                    <button className="w-full bg-accent-100 text-accent py-2 px-4 rounded-lg font-semibold text-sm hover:bg-accent-200 transition-colors duration-200">
                      Find Teammates
                    </button>
                    <button className="w-full bg-secondary-100 text-secondary py-2 px-4 rounded-lg font-semibold text-sm hover:bg-secondary-200 transition-colors duration-200">
                      Browse Projects
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveActivityFeed;