import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const RecommendationEngine = ({ hackathons }) => {
  // Mock user profile data for recommendations
  const userProfile = {
    skills: ["React", "Python", "AI/ML"],
    experience: "Intermediate",
    interests: ["Artificial Intelligence", "Web Development"],
    completedHackathons: 3,
    preferredDuration: "48 hours",
    location: "San Francisco, CA"
  };

  const getMatchPercentage = (hackathon) => {
    let score = 0;
    let maxScore = 0;

    // Skill matching (40% weight)
    const skillMatches = hackathon.technologies.filter(tech => 
      userProfile.skills.some(skill => 
        tech.toLowerCase().includes(skill.toLowerCase()) || 
        skill.toLowerCase().includes(tech.toLowerCase())
      )
    ).length;
    score += (skillMatches / hackathon.technologies.length) * 40;
    maxScore += 40;

    // Experience level matching (20% weight)
    const experienceLevels = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3, 'Expert': 4 };
    const userLevel = experienceLevels[userProfile.experience];
    const hackathonLevel = experienceLevels[hackathon.difficulty];
    const experienceMatch = Math.max(0, 1 - Math.abs(userLevel - hackathonLevel) / 3);
    score += experienceMatch * 20;
    maxScore += 20;

    // Theme/Interest matching (25% weight)
    const themeMatch = userProfile.interests.some(interest => 
      hackathon.theme.toLowerCase().includes(interest.toLowerCase()) ||
      hackathon.title.toLowerCase().includes(interest.toLowerCase())
    ) ? 1 : 0.5;
    score += themeMatch * 25;
    maxScore += 25;

    // Duration preference (15% weight)
    const hackathonHours = parseInt(hackathon.duration);
    const preferredHours = parseInt(userProfile.preferredDuration);
    const durationMatch = Math.max(0, 1 - Math.abs(hackathonHours - preferredHours) / 48);
    score += durationMatch * 15;
    maxScore += 15;

    return Math.round((score / maxScore) * 100);
  };

  const getRecommendationReason = (hackathon) => {
    const skillMatches = hackathon.technologies.filter(tech => 
      userProfile.skills.some(skill => 
        tech.toLowerCase().includes(skill.toLowerCase()) || 
        skill.toLowerCase().includes(tech.toLowerCase())
      )
    );

    if (skillMatches.length > 0) {
      return `Matches your ${skillMatches.slice(0, 2).join(' & ')} skills`;
    }

    if (userProfile.interests.some(interest => 
      hackathon.theme.toLowerCase().includes(interest.toLowerCase())
    )) {
      return `Aligns with your interest in ${hackathon.theme}`;
    }

    return `Perfect for ${userProfile.experience} level developers`;
  };

  const sortedRecommendations = hackathons
    .map(hackathon => ({
      ...hackathon,
      matchPercentage: getMatchPercentage(hackathon),
      reason: getRecommendationReason(hackathon)
    }))
    .sort((a, b) => b.matchPercentage - a.matchPercentage);

  return (
    <div className="bg-surface rounded-2xl shadow-depth overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-primary-100 bg-gradient-to-r from-primary-50 to-accent-50">
        <div className="flex items-center gap-3 mb-2">
          <Icon name="Sparkles" size={20} className="text-primary" />
          <h3 className="text-lg font-bold text-text-primary">Recommended for You</h3>
        </div>
        <p className="text-sm text-text-secondary">
          Based on your skills: {userProfile.skills.join(', ')}
        </p>
      </div>

      {/* User Profile Summary */}
      <div className="p-4 bg-primary-50/50 border-b border-primary-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
            <Icon name="User" size={18} className="text-white" />
          </div>
          <div>
            <div className="font-semibold text-text-primary">Your Profile</div>
            <div className="text-xs text-text-secondary">{userProfile.experience} Developer</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-1">
            <Icon name="Trophy" size={12} className="text-accent" />
            <span className="text-text-secondary">{userProfile.completedHackathons} hackathons</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Clock" size={12} className="text-accent" />
            <span className="text-text-secondary">{userProfile.preferredDuration}</span>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="p-4 space-y-4">
        {sortedRecommendations.map((hackathon, index) => (
          <motion.div
            key={hackathon.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-primary-50/30 border border-primary-100 hover:border-primary-200 transition-all duration-300 hover:shadow-lg">
              {/* Match Percentage Badge */}
              <div className="absolute top-3 right-3 z-10">
                <div className={`px-2 py-1 rounded-full text-xs font-bold ${
                  hackathon.matchPercentage >= 80 ? 'bg-success text-white' :
                  hackathon.matchPercentage >= 60 ? 'bg-warning text-white': 'bg-secondary text-white'
                }`}>
                  {hackathon.matchPercentage}% match
                </div>
              </div>

              <div className="p-4">
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={hackathon.image}
                      alt={hackathon.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-text-primary text-sm mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                      {hackathon.title}
                    </h4>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-primary font-medium bg-primary-100 px-2 py-0.5 rounded-full">
                        {hackathon.difficulty}
                      </span>
                      <span className="text-xs text-text-secondary">{hackathon.duration}</span>
                    </div>

                    <p className="text-xs text-text-secondary mb-2 line-clamp-2">
                      {hackathon.reason}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="text-xs font-semibold text-primary">
                        {hackathon.prizePool}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-text-secondary">
                        <Icon name="Users" size={10} />
                        {hackathon.currentParticipants}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Matching Skills */}
                <div className="mt-3 pt-3 border-t border-primary-100">
                  <div className="flex flex-wrap gap-1">
                    {hackathon.technologies.slice(0, 3).map((tech, techIndex) => {
                      const isMatch = userProfile.skills.some(skill => 
                        tech.toLowerCase().includes(skill.toLowerCase()) || 
                        skill.toLowerCase().includes(tech.toLowerCase())
                      );
                      return (
                        <span
                          key={techIndex}
                          className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                            isMatch 
                              ? 'bg-accent text-white' :'bg-gray-100 text-text-secondary'
                          }`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                    {hackathon.technologies.length > 3 && (
                      <span className="text-xs text-text-secondary">
                        +{hackathon.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover Action */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-primary px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-primary-100 bg-primary-50/30">
        <Link
          to="/developer-profiles-personal-brand-platform"
          className="block text-center text-sm text-primary hover:text-primary-700 font-medium"
        >
          Update your profile for better recommendations →
        </Link>
      </div>
    </div>
  );
};

export default RecommendationEngine;