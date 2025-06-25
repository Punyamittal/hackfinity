import React, { useState } from 'react';

import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const EventCard = ({ hackathon, viewMode, onTeamFormation }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-success bg-success-50';
      case 'Intermediate': return 'text-warning bg-warning-50';
      case 'Advanced': return 'text-secondary bg-secondary-50';
      case 'Expert': return 'text-error bg-error-50';
      default: return 'text-text-secondary bg-gray-50';
    }
  };

  const getTimeRemaining = (deadline) => {
    const now = new Date();
    const timeLeft = deadline - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) return `${days}d ${hours}h left`;
    if (hours > 0) return `${hours}h left`;
    return 'Deadline passed';
  };

  const getParticipationPercentage = () => {
    return Math.round((hackathon.currentParticipants / hackathon.maxParticipants) * 100);
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        className="bg-surface rounded-2xl shadow-depth hover:shadow-floating transition-all duration-300 overflow-hidden"
        whileHover={{ y: -2 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-80 h-48 md:h-auto relative overflow-hidden">
            <Image
              src={hackathon.image}
              alt={hackathon.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              {hackathon.isNew && (
                <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                  NEW
                </span>
              )}
              {hackathon.isFeatured && (
                <span className="px-3 py-1 bg-conversion text-white text-xs font-semibold rounded-full">
                  FEATURED
                </span>
              )}
            </div>
            <div className="absolute bottom-4 right-4">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(hackathon.difficulty)}`}>
                {hackathon.difficulty}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-2 hover:text-primary transition-colors">
                  {hackathon.title}
                </h3>
                <p className="text-text-secondary mb-3 line-clamp-2">
                  {hackathon.description.split('\n')[0]}
                </p>
              </div>
              <div className="text-right ml-4">
                <div className="text-2xl font-bold text-primary">{hackathon.prizePool}</div>
                <div className="text-sm text-text-secondary">Prize Pool</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {hackathon.technologies.slice(0, 4).map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary-50 text-primary text-xs font-medium rounded-md"
                >
                  {tech}
                </span>
              ))}
              {hackathon.technologies.length > 4 && (
                <span className="px-2 py-1 bg-gray-100 text-text-secondary text-xs font-medium rounded-md">
                  +{hackathon.technologies.length - 4} more
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="text-center">
                <Icon name="Clock" size={16} className="text-text-secondary mx-auto mb-1" />
                <div className="text-sm font-medium text-text-primary">{hackathon.duration}</div>
                <div className="text-xs text-text-secondary">Duration</div>
              </div>
              <div className="text-center">
                <Icon name="Users" size={16} className="text-text-secondary mx-auto mb-1" />
                <div className="text-sm font-medium text-text-primary">{hackathon.currentParticipants}</div>
                <div className="text-xs text-text-secondary">Participants</div>
              </div>
              <div className="text-center">
                <Icon name="MapPin" size={16} className="text-text-secondary mx-auto mb-1" />
                <div className="text-sm font-medium text-text-primary">{hackathon.location.split(' + ')[0]}</div>
                <div className="text-xs text-text-secondary">Location</div>
              </div>
              <div className="text-center">
                <Icon name="Calendar" size={16} className="text-text-secondary mx-auto mb-1" />
                <div className="text-sm font-medium text-error">{getTimeRemaining(hackathon.registrationDeadline)}</div>
                <div className="text-xs text-text-secondary">Registration</div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <button className="btn-primary px-4 py-2 text-sm">
                  View Details
                </button>
                <button
                  onClick={() => onTeamFormation(hackathon.id)}
                  className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-accent-600 transition-colors"
                >
                  <Icon name="Users" size={16} className="mr-1" />
                  Find Team
                </button>
              </div>
              <div className="text-right">
                <div className="text-xs text-text-secondary mb-1">
                  {getParticipationPercentage()}% Full
                </div>
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                    style={{ width: `${getParticipationPercentage()}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-surface rounded-2xl shadow-depth hover:shadow-floating transition-all duration-300 overflow-hidden group"
      whileHover={{ y: -8, rotateY: 2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={hackathon.image}
          alt={hackathon.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {hackathon.isNew && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full shadow-lg"
            >
              NEW
            </motion.span>
          )}
          {hackathon.isFeatured && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="px-3 py-1 bg-conversion text-white text-xs font-semibold rounded-full shadow-lg"
            >
              FEATURED
            </motion.span>
          )}
        </div>

        {/* Difficulty */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(hackathon.difficulty)}`}>
            {hackathon.difficulty}
          </span>
        </div>

        {/* Prize Pool */}
        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-2xl font-bold">{hackathon.prizePool}</div>
          <div className="text-sm opacity-90">Prize Pool</div>
        </div>

        {/* Registration Deadline */}
        <div className="absolute bottom-4 right-4 text-white text-right">
          <div className="text-sm font-semibold text-accent">{getTimeRemaining(hackathon.registrationDeadline)}</div>
          <div className="text-xs opacity-90">to register</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
          {hackathon.title}
        </h3>
        
        <p className="text-text-secondary text-sm mb-4 line-clamp-3">
          {hackathon.description.split('\n')[0]}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {hackathon.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary-50 text-primary text-xs font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
          {hackathon.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-text-secondary text-xs font-medium rounded-md">
              +{hackathon.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Icon name="Clock" size={16} className="text-text-secondary" />
            <span className="text-sm text-text-primary">{hackathon.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Users" size={16} className="text-text-secondary" />
            <span className="text-sm text-text-primary">{hackathon.currentParticipants}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="MapPin" size={16} className="text-text-secondary" />
            <span className="text-sm text-text-primary">{hackathon.location.split(' + ')[0]}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Trophy" size={16} className="text-text-secondary" />
            <span className="text-sm text-text-primary">{hackathon.prizes.length} Prizes</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-text-secondary">Registration Progress</span>
            <span className="text-xs font-semibold text-text-primary">{getParticipationPercentage()}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent"
              initial={{ width: 0 }}
              animate={{ width: `${getParticipationPercentage()}%` }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button className="flex-1 btn-primary py-2 text-sm">
            View Details
          </button>
          <button
            onClick={() => onTeamFormation(hackathon.id)}
            className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-accent-600 transition-colors"
          >
            <Icon name="Users" size={16} />
          </button>
        </div>

        {/* Hover Effect - 3D Venue Preview */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        >
          <div className="text-center text-white p-6">
            <Icon name="Eye" size={32} className="mx-auto mb-3" />
            <h4 className="text-lg font-bold mb-2">Virtual Venue Tour</h4>
            <p className="text-sm opacity-90 mb-4">Explore the 3D hackathon environment</p>
            <button className="bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Take Tour
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EventCard;