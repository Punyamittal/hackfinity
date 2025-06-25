import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const ActiveHackathons = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const hackathons = [
    {
      id: 1,
      title: "AI Innovation Challenge 2024",
      theme: "Artificial Intelligence & Machine Learning",
      description: "Build the next generation of AI-powered solutions that solve real-world problems. From healthcare to climate change, your innovation can make a difference.",
      prizePool: "$100,000",
      participants: 5247,
      daysLeft: 7,
      difficulty: "Advanced",
      tags: ["AI", "ML", "Python", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      sponsor: "TechCorp AI",
      registrationDeadline: "Dec 15, 2024"
    },
    {
      id: 2,
      title: "Sustainable Tech Hackathon",
      theme: "Green Technology & Sustainability",
      description: "Create innovative solutions for environmental challenges. Focus on renewable energy, waste reduction, and sustainable living technologies.",
      prizePool: "$75,000",
      participants: 3891,
      daysLeft: 14,
      difficulty: "Intermediate",
      tags: ["IoT", "Sustainability", "React", "Node.js"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      sponsor: "GreenTech Solutions",
      registrationDeadline: "Dec 22, 2024"
    },
    {
      id: 3,
      title: "Blockchain Revolution",
      theme: "Web3 & Decentralized Applications",
      description: "Build the future of decentralized web with blockchain technology. Create DApps, smart contracts, and innovative Web3 solutions.",
      prizePool: "$120,000",
      participants: 4156,
      daysLeft: 21,
      difficulty: "Expert",
      tags: ["Blockchain", "Solidity", "Web3", "DeFi"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      sponsor: "CryptoVentures",
      registrationDeadline: "Dec 29, 2024"
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-success text-white';
      case 'Intermediate': return 'bg-warning text-white';
      case 'Advanced': return 'bg-secondary text-white';
      case 'Expert': return 'bg-error text-white';
      default: return 'bg-primary text-white';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Active <span className="text-gradient">Hackathons</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Join thousands of developers in these live competitions. Choose your challenge, 
            form your team, and start building the future today.
          </p>
        </motion.div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                rotateY: hoveredCard === hackathon.id ? 5 : 0,
                rotateX: hoveredCard === hackathon.id ? 5 : 0
              }}
              onHoverStart={() => setHoveredCard(hackathon.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="glassmorphism rounded-2xl overflow-hidden shadow-depth hover:shadow-floating transition-all duration-300"
              style={{ perspective: 1000 }}
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={hackathon.image}
                  alt={hackathon.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Days Left Badge */}
                <div className="absolute top-4 right-4 bg-conversion text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {hackathon.daysLeft} days left
                </div>
                
                {/* Difficulty Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(hackathon.difficulty)}`}>
                  {hackathon.difficulty}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {hackathon.title}
                  </h3>
                  <p className="text-sm text-accent font-semibold mb-3">
                    {hackathon.theme}
                  </p>
                  <p className="text-text-secondary text-sm line-clamp-3">
                    {hackathon.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {hackathon.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-primary-100 text-primary px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-success-50 rounded-lg">
                    <div className="text-2xl font-bold text-success mb-1">
                      {hackathon.prizePool}
                    </div>
                    <div className="text-xs text-success-700 font-medium">
                      Prize Pool
                    </div>
                  </div>
                  <div className="text-center p-3 bg-secondary-50 rounded-lg">
                    <div className="text-2xl font-bold text-secondary mb-1">
                      {hackathon.participants.toLocaleString()}
                    </div>
                    <div className="text-xs text-secondary-700 font-medium">
                      Participants
                    </div>
                  </div>
                </div>

                {/* Sponsor & Deadline */}
                <div className="mb-6 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Icon name="Building" size={16} />
                    <span>Sponsored by {hackathon.sponsor}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Icon name="Calendar" size={16} />
                    <span>Registration ends {hackathon.registrationDeadline}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Link
                    to="/hackathon-hub-event-discovery"
                    className="flex-1 btn-primary text-center py-2 text-sm"
                  >
                    Join Now
                  </Link>
                  <button className="px-4 py-2 border border-primary-200 text-primary rounded-lg hover:bg-primary-50 transition-colors duration-200">
                    <Icon name="Heart" size={16} />
                  </button>
                  <button className="px-4 py-2 border border-primary-200 text-primary rounded-lg hover:bg-primary-50 transition-colors duration-200">
                    <Icon name="Share" size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/hackathon-hub-event-discovery"
            className="btn-secondary inline-flex items-center space-x-2 px-8 py-4 text-lg"
          >
            <Icon name="Grid" size={24} />
            <span>View All Hackathons</span>
            <Icon name="ArrowRight" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ActiveHackathons;