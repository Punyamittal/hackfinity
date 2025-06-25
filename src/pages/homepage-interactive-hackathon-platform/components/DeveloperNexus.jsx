import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const DeveloperNexus = () => {
  const [activeTab, setActiveTab] = useState('featured');

  const featuredDevelopers = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "AI/ML Engineer",
      company: "Google",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      level: "Expert",
      points: 15420,
      hackathonsWon: 12,
      skills: ["Python", "TensorFlow", "React", "Node.js"],
      recentAchievement: "Winner - AI Innovation Challenge 2024",
      projects: 28,
      followers: 2341,
      isOnline: true,
      location: "San Francisco, CA"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Full Stack Developer",
      company: "Microsoft",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      level: "Advanced",
      points: 12890,
      hackathonsWon: 8,
      skills: ["JavaScript", "React", "Azure", "C#"],
      recentAchievement: "2nd Place - Blockchain Revolution",
      projects: 34,
      followers: 1876,
      isOnline: false,
      location: "Seattle, WA"
    },
    {
      id: 3,
      name: "Priya Patel",
      title: "Blockchain Developer",
      company: "Coinbase",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      level: "Expert",
      points: 18750,
      hackathonsWon: 15,
      skills: ["Solidity", "Web3", "React", "Node.js"],
      recentAchievement: "Winner - DeFi Innovation Summit",
      projects: 22,
      followers: 3102,
      isOnline: true,
      location: "New York, NY"
    },
    {
      id: 4,
      name: "Alex Kim",
      title: "DevOps Engineer",
      company: "Amazon",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      level: "Advanced",
      points: 11230,
      hackathonsWon: 6,
      skills: ["AWS", "Docker", "Kubernetes", "Python"],
      recentAchievement: "Best Infrastructure - Cloud Challenge",
      projects: 19,
      followers: 1543,
      isOnline: true,
      location: "Austin, TX"
    }
  ];

  const risingStars = [
    {
      id: 5,
      name: "Emma Thompson",
      title: "Frontend Developer",
      company: "Startup",
      avatar: "https://randomuser.me/api/portraits/women/25.jpg",
      level: "Intermediate",
      points: 4560,
      hackathonsWon: 2,
      skills: ["React", "Vue.js", "TypeScript", "CSS"],
      recentAchievement: "Best UI/UX - Design Challenge",
      projects: 12,
      followers: 432,
      isOnline: true,
      location: "Portland, OR"
    },
    {
      id: 6,
      name: "David Wilson",
      title: "Mobile Developer",
      company: "Freelancer",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
      level: "Intermediate",
      points: 3890,
      hackathonsWon: 1,
      skills: ["React Native", "Flutter", "Swift", "Kotlin"],
      recentAchievement: "People\'s Choice - Mobile App Contest",
      projects: 8,
      followers: 298,
      isOnline: false,
      location: "Denver, CO"
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-success text-white';
      case 'Intermediate': return 'bg-warning text-white';
      case 'Advanced': return 'bg-secondary text-white';
      case 'Expert': return 'bg-error text-white';
      default: return 'bg-primary text-white';
    }
  };

  const currentDevelopers = activeTab === 'featured' ? featuredDevelopers : risingStars;

  return (
    <section className="py-20 bg-gradient-to-b from-primary-50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Developer <span className="text-gradient">Nexus</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Meet the brilliant minds shaping the future of technology. Connect with top performers, 
            learn from their expertise, and build lasting professional relationships.
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="glassmorphism rounded-lg p-1 inline-flex">
              <button
                onClick={() => setActiveTab('featured')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                  activeTab === 'featured' ?'bg-primary text-white shadow-floating' :'text-text-secondary hover:text-primary'
                }`}
              >
                Featured Developers
              </button>
              <button
                onClick={() => setActiveTab('rising')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                  activeTab === 'rising' ?'bg-primary text-white shadow-floating' :'text-text-secondary hover:text-primary'
                }`}
              >
                Rising Stars
              </button>
            </div>
          </div>
        </motion.div>

        {/* Developer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentDevelopers.map((developer, index) => (
            <motion.div
              key={developer.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glassmorphism rounded-2xl p-6 shadow-depth hover:shadow-floating transition-all duration-300"
            >
              {/* Profile Header */}
              <div className="text-center mb-4">
                <div className="relative inline-block mb-3">
                  <Image
                    src={developer.avatar}
                    alt={developer.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  {developer.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-white"></div>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-text-primary mb-1">
                  {developer.name}
                </h3>
                <p className="text-sm text-text-secondary mb-2">
                  {developer.title}
                </p>
                <p className="text-xs text-accent font-semibold">
                  {developer.company}
                </p>
              </div>

              {/* Level Badge */}
              <div className="flex justify-center mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(developer.level)}`}>
                  Level {developer.level}
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center p-2 bg-primary-50 rounded-lg">
                  <div className="text-lg font-bold text-primary">
                    {developer.points.toLocaleString()}
                  </div>
                  <div className="text-xs text-primary-700">Points</div>
                </div>
                <div className="text-center p-2 bg-success-50 rounded-lg">
                  <div className="text-lg font-bold text-success">
                    {developer.hackathonsWon}
                  </div>
                  <div className="text-xs text-success-700">Wins</div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {developer.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-secondary-100 text-secondary px-2 py-1 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {developer.skills.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                      +{developer.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Recent Achievement */}
              <div className="mb-4 p-3 bg-accent-50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Icon name="Trophy" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-accent-700 font-semibold">Latest Achievement</p>
                    <p className="text-xs text-accent-600 mt-1">
                      {developer.recentAchievement}
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Stats */}
              <div className="flex justify-between text-xs text-text-secondary mb-4">
                <span className="flex items-center space-x-1">
                  <Icon name="FolderOpen" size={12} />
                  <span>{developer.projects} projects</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Users" size={12} />
                  <span>{developer.followers} followers</span>
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center space-x-1 text-xs text-text-secondary mb-4">
                <Icon name="MapPin" size={12} />
                <span>{developer.location}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Link
                  to="/developer-profiles-personal-brand-platform"
                  className="flex-1 bg-primary text-white py-2 px-3 rounded-lg text-xs font-semibold text-center hover:bg-primary-700 transition-colors duration-200"
                >
                  View Profile
                </Link>
                <button className="px-3 py-2 border border-primary-200 text-primary rounded-lg hover:bg-primary-50 transition-colors duration-200">
                  <Icon name="MessageCircle" size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glassmorphism rounded-2xl p-8 mb-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">50,247</div>
              <div className="text-text-secondary font-medium">Active Developers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">12,891</div>
              <div className="text-text-secondary font-medium">Projects Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">3,456</div>
              <div className="text-text-secondary font-medium">Teams Formed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">89%</div>
              <div className="text-text-secondary font-medium">Success Rate</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/community-network-developer-ecosystem"
            className="btn-secondary inline-flex items-center space-x-2 px-8 py-4 text-lg"
          >
            <Icon name="Users" size={24} />
            <span>Join Developer Community</span>
            <Icon name="ArrowRight" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DeveloperNexus;