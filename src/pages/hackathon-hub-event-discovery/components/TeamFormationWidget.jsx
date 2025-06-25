import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const TeamFormationWidget = ({ eventId, onClose }) => {
  const [activeTab, setActiveTab] = useState('find'); // find, create, requests
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [teamDescription, setTeamDescription] = useState('');
  const [teamNameError, setTeamNameError] = useState('');

  // Mock data for available developers
  const availableDevelopers = [
    {
      id: 1,
      name: "Sarah Chen",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      title: "Full-Stack Developer",
      skills: ["React", "Node.js", "Python", "AI/ML"],
      experience: "5 years",
      location: "San Francisco, CA",
      rating: 4.9,
      completedHackathons: 12,
      preferredRole: "Frontend Lead",
      availability: "Available",
      bio: `Passionate full-stack developer with expertise in modern web technologies and machine learning. Love building user-centric applications that solve real-world problems.

Looking for a collaborative team to tackle AI/ML challenges in this hackathon.`,
      portfolio: "github.com/sarahchen",
      isOnline: true
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      title: "Backend Engineer",
      skills: ["Python", "Django", "PostgreSQL", "AWS"],
      experience: "7 years",
      location: "Austin, TX",
      rating: 4.8,
      completedHackathons: 18,
      preferredRole: "Backend Architect",
      availability: "Available",
      bio: `Senior backend engineer specializing in scalable systems and cloud architecture. Experienced in building high-performance APIs and distributed systems.

Excited to work on challenging backend problems and mentor junior developers.`,
      portfolio: "linkedin.com/in/marcusrodriguez",
      isOnline: false
    },
    {
      id: 3,
      name: "Priya Patel",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      title: "UI/UX Designer & Frontend Dev",
      skills: ["Figma", "React", "TypeScript", "Design Systems"],
      experience: "4 years",
      location: "New York, NY",
      rating: 4.9,
      completedHackathons: 8,
      preferredRole: "Design Lead",
      availability: "Available",
      bio: `Creative designer and frontend developer who bridges the gap between design and code. Passionate about creating intuitive user experiences and accessible interfaces.

Looking to join a team that values both aesthetics and functionality.`,
      portfolio: "dribbble.com/priyapatel",
      isOnline: true
    },
    {
      id: 4,
      name: "Alex Kim",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      title: "Mobile Developer",
      skills: ["React Native", "Swift", "Kotlin", "Firebase"],
      experience: "3 years",
      location: "Seattle, WA",
      rating: 4.7,
      completedHackathons: 6,
      preferredRole: "Mobile Lead",
      availability: "Busy until March 20",
      bio: `Mobile-first developer with experience in cross-platform and native app development. Passionate about creating smooth, performant mobile experiences.

Available for hackathons focusing on mobile innovation and user engagement.`,
      portfolio: "github.com/alexkim",
      isOnline: true
    },
    {
      id: 5,
      name: "Jordan Taylor",
      avatar: "https://randomuser.me/api/portraits/women/35.jpg",
      title: "Data Scientist",
      skills: ["Python", "TensorFlow", "R", "Data Visualization"],
      experience: "6 years",
      location: "Boston, MA",
      rating: 4.8,
      completedHackathons: 15,
      preferredRole: "Data Science Lead",
      availability: "Available",
      bio: `Experienced data scientist with a passion for turning data into actionable insights. Specialized in machine learning, predictive modeling, and data visualization.

Excited to work on AI/ML challenges and help teams make data-driven decisions.`,
      portfolio: "kaggle.com/jordantaylor",
      isOnline: false
    }
  ];

  const skillOptions = [
    "React", "Python", "JavaScript", "Node.js", "AI/ML", "Blockchain",
    "Mobile", "UI/UX", "Backend", "Frontend", "Data Science", "DevOps",
    "Cloud", "Cybersecurity", "Game Dev", "AR/VR"
  ];

  const handleSkillToggle = useCallback((skill) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  }, []);

  const handleSendRequest = useCallback((developerId) => {
    // Mock request sending
  }, []);

  const handleCreateTeam = useCallback(() => {
    if (teamName.trim()) {
      setTeamNameError('');
      // Mock team creation
    } else {
      setTeamNameError('Team name is required.');
    }
  }, [teamName]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-surface rounded-2xl shadow-depth max-w-4xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-primary-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-2">Team Formation</h2>
              <p className="text-text-secondary">Find teammates or create your own team for this hackathon</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-text-secondary hover:bg-primary-50 hover:text-primary transition-colors"
            >
              <Icon name="X" size={24} />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mt-6 bg-primary-50 rounded-lg p-1">
            {[
              { id: 'find', label: 'Find Teammates', icon: 'Search' },
              { id: 'create', label: 'Create Team', icon: 'Plus' },
              { id: 'requests', label: 'Requests', icon: 'Mail', badge: 3 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <Icon name={tab.icon} size={16} />
                {tab.label}
                {tab.badge && (
                  <span className="bg-error text-white text-xs px-1.5 py-0.5 rounded-full">
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <AnimatePresence mode="wait">
            {activeTab === 'find' && (
              <motion.div
                key="find"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                {/* Skill Filter */}
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Filter by Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillOptions.map((skill) => (
                      <button
                        key={skill}
                        onClick={() => handleSkillToggle(skill)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                          selectedSkills.includes(skill)
                            ? 'bg-primary text-white' :'bg-primary-50 text-primary hover:bg-primary-100'
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Available Developers */}
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-4">
                    Available Developers ({availableDevelopers.length})
                  </h3>
                  <div className="space-y-4">
                    {availableDevelopers.map((developer) => (
                      <div
                        key={developer.id}
                        className="bg-primary-50/50 rounded-xl p-4 hover:bg-primary-50 transition-colors"
                      >
                        <div className="flex gap-4">
                          <div className="relative">
                            <Image
                              src={developer.avatar}
                              alt={developer.name}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                            {developer.isOnline && (
                              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-white"></div>
                            )}
                          </div>

                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4 className="text-lg font-semibold text-text-primary">{developer.name}</h4>
                                <p className="text-text-secondary">{developer.title}</p>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center gap-1 mb-1">
                                  <Icon name="Star" size={14} className="text-warning fill-current" />
                                  <span className="text-sm font-medium">{developer.rating}</span>
                                </div>
                                <div className="text-xs text-text-secondary">
                                  {developer.completedHackathons} hackathons
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-3">
                              {developer.skills.map((skill, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-primary text-white text-xs font-medium rounded-md"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>

                            <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                              {developer.bio}
                            </p>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-sm text-text-secondary">
                                <div className="flex items-center gap-1">
                                  <Icon name="MapPin" size={14} />
                                  {developer.location}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Icon name="Briefcase" size={14} />
                                  {developer.experience}
                                </div>
                                <div className={`flex items-center gap-1 ${
                                  developer.availability === 'Available' ? 'text-success' : 'text-warning'
                                }`}>
                                  <Icon name="Clock" size={14} />
                                  {developer.availability}
                                </div>
                              </div>

                              <div className="flex gap-2">
                                <button className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-600 transition-colors">
                                  View Profile
                                </button>
                                <button
                                  onClick={() => handleSendRequest(developer.id)}
                                  className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors"
                                  disabled={developer.availability !== 'Available'}
                                >
                                  Send Request
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'create' && (
              <motion.div
                key="create"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="teamName" className="block text-sm font-medium text-text-primary mb-2">Team Name</label>
                  <input
                    type="text"
                    id="teamName"
                    value={teamName}
                    onChange={(e) => {
                      setTeamName(e.target.value);
                      if (teamNameError) setTeamNameError('');
                    }}
                    className="w-full bg-primary-50 border border-primary-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Enter your team's name"
                  />
                  {teamNameError && <p className="text-sm text-error mt-1">{teamNameError}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Team Description
                  </label>
                  <textarea
                    value={teamDescription}
                    onChange={(e) => setTeamDescription(e.target.value)}
                    placeholder="Describe your team's vision, goals, and what you're looking for in teammates..."
                    rows={4}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Skills Needed
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {skillOptions.map((skill) => (
                      <button
                        key={skill}
                        onClick={() => handleSkillToggle(skill)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                          selectedSkills.includes(skill)
                            ? 'bg-primary text-white' :'bg-primary-50 text-primary hover:bg-primary-100'
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-accent-50 rounded-lg p-4">
                  <h4 className="font-semibold text-text-primary mb-2 flex items-center gap-2">
                    <Icon name="Lightbulb" size={16} className="text-accent" />
                    Team Formation Tips
                  </h4>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Be specific about your project idea and goals</li>
                    <li>• Clearly state what skills you're looking for</li>
                    <li>• Mention your preferred team size (2-6 members)</li>
                    <li>• Include your communication preferences</li>
                  </ul>
                </div>

                <button
                  onClick={handleCreateTeam}
                  disabled={!teamName.trim()}
                  className="w-full btn-primary py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Create Team
                </button>
              </motion.div>
            )}

            {activeTab === 'requests' && (
              <motion.div
                key="requests"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-4">Team Requests</h3>
                  
                  <div className="space-y-4">
                    {/* Mock requests */}
                    {[
                      {
                        id: 1,
                        teamName: "AI Innovators",
                        leader: "Sarah Chen",
                        message: "We're building an AI-powered healthcare assistant and would love to have you join our team as a backend developer!",
                        skills: ["Python", "AI/ML", "Backend"],
                        members: 2,
                        maxMembers: 4,
                        timestamp: "2 hours ago"
                      },
                      {
                        id: 2,
                        teamName: "Blockchain Builders",
                        leader: "Marcus Rodriguez",
                        message: "Looking for a frontend developer to help build our DeFi platform. Your React skills would be perfect!",
                        skills: ["React", "Web3", "Frontend"],
                        members: 3,
                        maxMembers: 5,
                        timestamp: "5 hours ago"
                      },
                      {
                        id: 3,
                        teamName: "Mobile Mavericks",
                        leader: "Priya Patel",
                        message: "We're creating a social impact mobile app and need someone with your design and development skills.",
                        skills: ["Mobile", "UI/UX", "React Native"],
                        members: 1,
                        maxMembers: 3,
                        timestamp: "1 day ago"
                      }
                    ].map((request) => (
                      <div key={request.id} className="bg-primary-50/50 rounded-xl p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="text-lg font-semibold text-text-primary">{request.teamName}</h4>
                            <p className="text-text-secondary">Led by {request.leader}</p>
                          </div>
                          <span className="text-xs text-text-secondary">{request.timestamp}</span>
                        </div>

                        <p className="text-text-secondary mb-3">{request.message}</p>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {request.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-primary text-white text-xs font-medium rounded-md"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-sm text-text-secondary">
                            {request.members}/{request.maxMembers} members
                          </div>
                          <div className="flex gap-2">
                            <button className="px-4 py-2 bg-error text-white rounded-lg text-sm font-medium hover:bg-error-600 transition-colors">
                              Decline
                            </button>
                            <button className="px-4 py-2 bg-success text-white rounded-lg text-sm font-medium hover:bg-success-600 transition-colors">
                              Accept
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeamFormationWidget;