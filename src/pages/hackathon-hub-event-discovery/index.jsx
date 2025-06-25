import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';

import Header from 'components/ui/Header';
import EventCard from './components/EventCard';
import FilterSidebar from './components/FilterSidebar';
import TeamFormationWidget from './components/TeamFormationWidget';
import ChallengeVisualization from './components/ChallengeVisualization';
import RecommendationEngine from './components/RecommendationEngine';

const HackathonHub = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    technology: [],
    experience: [],
    duration: [],
    prize: []
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [sortBy, setSortBy] = useState('deadline');
  const [showTeamFormation, setShowTeamFormation] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Mock hackathon data
  const hackathons = [
    {
      id: 1,
      title: "AI Innovation Challenge 2024",
      description: `Join the most prestigious AI hackathon of the year where cutting-edge machine learning meets real-world problem solving. This 48-hour intensive challenge brings together the brightest minds to tackle complex AI applications in healthcare, finance, and sustainability.

Participants will have access to premium datasets, cloud computing resources, and mentorship from industry leaders at Google, OpenAI, and Microsoft.`,
      theme: "Artificial Intelligence",
      difficulty: "Advanced",
      duration: "48 hours",
      startDate: new Date('2024-03-15'),
      endDate: new Date('2024-03-17'),
      registrationDeadline: new Date('2024-03-10'),
      maxTeamSize: 4,
      currentParticipants: 1247,
      maxParticipants: 2000,
      prizePool: "$100,000",
      prizes: [
        { position: "1st Place", amount: "$50,000", description: "Grand Prize Winner" },
        { position: "2nd Place", amount: "$25,000", description: "Runner-up" },
        { position: "3rd Place", amount: "$15,000", description: "Third Place" },
        { position: "Best Innovation", amount: "$10,000", description: "Most Creative Solution" }
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "Deep Learning"],
      sponsors: ["Google", "Microsoft", "NVIDIA", "OpenAI"],
      location: "Virtual + San Francisco Hub",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      challenges: [
        {
          title: "Healthcare AI Assistant",
          description: "Develop an AI system that can assist medical professionals in diagnosis and treatment recommendations",
          difficulty: "Expert",
          estimatedTime: "16-20 hours"
        },
        {
          title: "Sustainable Energy Optimizer",
          description: "Create an AI model that optimizes renewable energy distribution in smart cities",
          difficulty: "Advanced",
          estimatedTime: "12-16 hours"
        }
      ],
      mentors: [
        { name: "Dr. Sarah Chen", role: "AI Research Director at Google", expertise: "Computer Vision" },
        { name: "Marcus Rodriguez", role: "ML Engineer at OpenAI", expertise: "Natural Language Processing" }
      ],
      isNew: true,
      isFeatured: true,
      registrationOpen: true
    },
    {
      id: 2,
      title: "Web3 DeFi Revolution",
      description: `Shape the future of decentralized finance in this groundbreaking blockchain hackathon. Build innovative DeFi protocols, NFT marketplaces, and Web3 applications that will revolutionize how we think about digital assets and financial services.

This event features exclusive access to cutting-edge blockchain infrastructure and direct mentorship from founders of major DeFi protocols.`,
      theme: "Blockchain & DeFi",
      difficulty: "Intermediate",
      duration: "72 hours",
      startDate: new Date('2024-03-22'),
      endDate: new Date('2024-03-25'),
      registrationDeadline: new Date('2024-03-18'),
      maxTeamSize: 5,
      currentParticipants: 892,
      maxParticipants: 1500,
      prizePool: "$75,000",
      prizes: [
        { position: "1st Place", amount: "$35,000", description: "DeFi Innovation Award" },
        { position: "2nd Place", amount: "$20,000", description: "Best Protocol Design" },
        { position: "3rd Place", amount: "$12,000", description: "Most Practical Solution" },
        { position: "Community Choice", amount: "$8,000", description: "People\'s Favorite" }
      ],
      technologies: ["Solidity", "React", "Web3.js", "Ethereum", "IPFS", "Node.js"],
      sponsors: ["Ethereum Foundation", "Chainlink", "Polygon", "Uniswap"],
      location: "Virtual Worldwide",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      challenges: [
        {
          title: "Cross-Chain DEX Protocol",
          description: "Build a decentralized exchange that enables seamless trading across multiple blockchains",
          difficulty: "Advanced",
          estimatedTime: "20-24 hours"
        },
        {
          title: "NFT Lending Platform",
          description: "Create a platform where users can use NFTs as collateral for DeFi loans",
          difficulty: "Intermediate",
          estimatedTime: "14-18 hours"
        }
      ],
      mentors: [
        { name: "Alex Thompson", role: "Co-founder of DeFi Protocol", expertise: "Smart Contracts" },
        { name: "Lisa Wang", role: "Blockchain Architect", expertise: "Protocol Design" }
      ],
      isNew: false,
      isFeatured: true,
      registrationOpen: true
    },
    {
      id: 3,
      title: "Mobile App Innovation Sprint",
      description: `Create the next generation of mobile applications that will transform how people interact with technology. This fast-paced 36-hour sprint focuses on user experience, performance optimization, and innovative mobile-first solutions.

Participants get access to the latest mobile development tools, device testing labs, and UX design resources from leading mobile app companies.`,
      theme: "Mobile Development",
      difficulty: "Beginner",
      duration: "36 hours",
      startDate: new Date('2024-04-05'),
      endDate: new Date('2024-04-07'),
      registrationDeadline: new Date('2024-04-01'),
      maxTeamSize: 3,
      currentParticipants: 654,
      maxParticipants: 1000,
      prizePool: "$40,000",
      prizes: [
        { position: "1st Place", amount: "$20,000", description: "Best Mobile App" },
        { position: "2nd Place", amount: "$12,000", description: "Most Innovative UI/UX" },
        { position: "3rd Place", amount: "$8,000", description: "Best Technical Implementation" }
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      sponsors: ["Apple", "Google", "Meta", "Adobe"],
      location: "Austin, Texas + Virtual",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      challenges: [
        {
          title: "Social Impact App",
          description: "Develop a mobile app that addresses a social or environmental challenge in your community",
          difficulty: "Beginner",
          estimatedTime: "8-12 hours"
        },
        {
          title: "AR Shopping Experience",
          description: "Create an augmented reality shopping app that enhances the retail experience",
          difficulty: "Intermediate",
          estimatedTime: "12-16 hours"
        }
      ],
      mentors: [
        { name: "Jennifer Kim", role: "Senior iOS Developer at Apple", expertise: "Mobile UI/UX" },
        { name: "David Park", role: "Android Lead at Google", expertise: "Performance Optimization" }
      ],
      isNew: true,
      isFeatured: false,
      registrationOpen: true
    },
    {
      id: 4,
      title: "Cybersecurity Defense Challenge",
      description: `Test your skills in the ultimate cybersecurity hackathon where white-hat hackers compete to build the most robust defense systems. This intensive challenge covers everything from penetration testing to AI-powered threat detection.

Participants will work with real-world security scenarios and have access to enterprise-grade security tools and threat intelligence platforms.`,
      theme: "Cybersecurity",
      difficulty: "Expert",
      duration: "60 hours",
      startDate: new Date('2024-04-12'),
      endDate: new Date('2024-04-15'),
      registrationDeadline: new Date('2024-04-08'),
      maxTeamSize: 4,
      currentParticipants: 423,
      maxParticipants: 800,
      prizePool: "$80,000",
      prizes: [
        { position: "1st Place", amount: "$40,000", description: "Ultimate Security Champion" },
        { position: "2nd Place", amount: "$25,000", description: "Defense Excellence Award" },
        { position: "3rd Place", amount: "$15,000", description: "Innovation in Security" }
      ],
      technologies: ["Python", "Kali Linux", "Wireshark", "Metasploit", "Docker", "Kubernetes"],
      sponsors: ["CrowdStrike", "Palo Alto Networks", "Cisco", "IBM Security"],
      location: "Las Vegas, Nevada + Virtual",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
      challenges: [
        {
          title: "AI Threat Detection System",
          description: "Build an AI-powered system that can detect and respond to advanced persistent threats",
          difficulty: "Expert",
          estimatedTime: "24-30 hours"
        },
        {
          title: "Zero-Trust Network Architecture",
          description: "Design and implement a zero-trust security model for enterprise environments",
          difficulty: "Advanced",
          estimatedTime: "18-24 hours"
        }
      ],
      mentors: [
        { name: "Robert Chen", role: "CISO at Fortune 500 Company", expertise: "Enterprise Security" },
        { name: "Maria Santos", role: "Ethical Hacker & Security Researcher", expertise: "Penetration Testing" }
      ],
      isNew: false,
      isFeatured: true,
      registrationOpen: true
    },
    {
      id: 5,
      title: "Climate Tech Solutions Hackathon",
      description: `Join the fight against climate change by developing innovative technology solutions for environmental challenges. This hackathon focuses on creating scalable, impactful solutions for carbon reduction, renewable energy, and sustainable living.

Participants will have access to environmental datasets, climate modeling tools, and mentorship from leading climate tech entrepreneurs and researchers.`,
      theme: "Climate Technology",
      difficulty: "Intermediate",
      duration: "48 hours",
      startDate: new Date('2024-04-20'),
      endDate: new Date('2024-04-22'),
      registrationDeadline: new Date('2024-04-16'),
      maxTeamSize: 5,
      currentParticipants: 789,
      maxParticipants: 1200,
      prizePool: "$60,000",
      prizes: [
        { position: "1st Place", amount: "$30,000", description: "Climate Innovation Award" },
        { position: "2nd Place", amount: "$18,000", description: "Sustainability Excellence" },
        { position: "3rd Place", amount: "$12,000", description: "Most Scalable Solution" }
      ],
      technologies: ["Python", "R", "TensorFlow", "IoT", "React", "Node.js"],
      sponsors: ["Tesla", "Microsoft", "Salesforce", "Climate Tech Alliance"],
      location: "Seattle, Washington + Virtual",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=800&h=600&fit=crop",
      challenges: [
        {
          title: "Carbon Footprint Tracker",
          description: "Develop a comprehensive platform for individuals and businesses to track and reduce their carbon footprint",
          difficulty: "Intermediate",
          estimatedTime: "12-16 hours"
        },
        {
          title: "Smart Grid Optimizer",
          description: "Create an AI system that optimizes renewable energy distribution in smart grids",
          difficulty: "Advanced",
          estimatedTime: "16-20 hours"
        }
      ],
      mentors: [
        { name: "Dr. Emily Green", role: "Climate Tech Researcher", expertise: "Environmental Data Science" },
        { name: "James Wilson", role: "Renewable Energy Engineer", expertise: "Smart Grid Technology" }
      ],
      isNew: true,
      isFeatured: false,
      registrationOpen: true
    },
    {
      id: 6,
      title: "Gaming & VR Experience Jam",
      description: `Push the boundaries of interactive entertainment in this immersive gaming and virtual reality hackathon. Create next-generation gaming experiences, VR applications, and AR interactions that will define the future of digital entertainment.

Access cutting-edge VR/AR hardware, game engines, and development tools from industry leaders, plus mentorship from successful game developers and VR pioneers.`,
      theme: "Gaming & Virtual Reality",
      difficulty: "Intermediate",
      duration: "54 hours",
      startDate: new Date('2024-05-03'),
      endDate: new Date('2024-05-06'),
      registrationDeadline: new Date('2024-04-28'),
      maxTeamSize: 6,
      currentParticipants: 567,
      maxParticipants: 900,
      prizePool: "$50,000",
      prizes: [
        { position: "1st Place", amount: "$25,000", description: "Best Gaming Innovation" },
        { position: "2nd Place", amount: "$15,000", description: "Most Immersive VR Experience" },
        { position: "3rd Place", amount: "$10,000", description: "Best AR Application" }
      ],
      technologies: ["Unity", "Unreal Engine", "C#", "JavaScript", "WebXR", "Oculus SDK"],
      sponsors: ["Unity Technologies", "Epic Games", "Meta", "NVIDIA"],
      location: "Los Angeles, California + Virtual",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=600&fit=crop",
      challenges: [
        {
          title: "Educational VR Experience",
          description: "Create an immersive VR application that makes learning complex subjects engaging and interactive",
          difficulty: "Intermediate",
          estimatedTime: "14-18 hours"
        },
        {
          title: "Multiplayer AR Game",
          description: "Develop an augmented reality game that brings people together in shared virtual spaces",
          difficulty: "Advanced",
          estimatedTime: "18-22 hours"
        }
      ],
      mentors: [
        { name: "Alex Rivera", role: "Senior Game Developer at Epic Games", expertise: "Game Design & Development" },
        { name: "Sophie Chen", role: "VR Experience Designer", expertise: "Immersive Technologies" }
      ],
      isNew: false,
      isFeatured: false,
      registrationOpen: true
    }
  ];

  // Filter hackathons based on selected filters and search query
  const filteredHackathons = hackathons.filter(hackathon => {
    const matchesSearch = hackathon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hackathon.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hackathon.theme.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTechnology = selectedFilters.technology.length === 0 ||
                             selectedFilters.technology.some(tech => 
                               hackathon.technologies.some(hackTech => 
                                 hackTech.toLowerCase().includes(tech.toLowerCase())
                               )
                             );

    const matchesExperience = selectedFilters.experience.length === 0 ||
                             selectedFilters.experience.includes(hackathon.difficulty);

    const matchesDuration = selectedFilters.duration.length === 0 ||
                           selectedFilters.duration.some(duration => {
                             const hours = parseInt(hackathon.duration);
                             switch(duration) {
                               case 'short': return hours <= 24;
                               case 'medium': return hours > 24 && hours <= 48;
                               case 'long': return hours > 48;
                               default: return true;
                             }
                           });

    const matchesPrize = selectedFilters.prize.length === 0 ||
                        selectedFilters.prize.some(prize => {
                          const prizeAmount = parseInt(hackathon.prizePool.replace(/[$,]/g, ''));
                          switch(prize) {
                            case 'low': return prizeAmount < 50000;
                            case 'medium': return prizeAmount >= 50000 && prizeAmount < 80000;
                            case 'high': return prizeAmount >= 80000;
                            default: return true;
                          }
                        });

    return matchesSearch && matchesTechnology && matchesExperience && matchesDuration && matchesPrize;
  });

  // Sort hackathons
  const sortedHackathons = [...filteredHackathons].sort((a, b) => {
    switch(sortBy) {
      case 'deadline':
        return new Date(a.registrationDeadline) - new Date(b.registrationDeadline);
      case 'prize':
        return parseInt(b.prizePool.replace(/[$,]/g, '')) - parseInt(a.prizePool.replace(/[$,]/g, ''));
      case 'participants':
        return b.currentParticipants - a.currentParticipants;
      case 'difficulty':
        const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3, 'Expert': 4 };
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      default:
        return 0;
    }
  });

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      technology: [],
      experience: [],
      duration: [],
      prize: []
    });
    setSearchQuery('');
  };

  const handleTeamFormation = (eventId) => {
    setSelectedEvent(eventId);
    setShowTeamFormation(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Discover Your Next
                <span className="block text-gradient bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                  Coding Adventure
                </span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Explore cutting-edge hackathons, connect with brilliant developers, and build solutions that shape the future. Your breakthrough moment awaits in our curated collection of innovation challenges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="relative w-full sm:w-96">
                <Icon 
                  name="Search" 
                  size={20} 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary" 
                />
                <input
                  type="text"
                  placeholder="Search hackathons, technologies, themes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-0 bg-white/95 backdrop-blur-sm text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent shadow-lg"
                />
              </div>
              <button className="btn-conversion px-8 py-4 text-lg font-semibold shadow-lg">
                <Icon name="Zap" size={20} className="mr-2" />
                Find My Match
              </button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { label: "Active Hackathons", value: "24", icon: "Code" },
                { label: "Total Developers", value: "15.2K", icon: "Users" },
                { label: "Prize Pool", value: "$2.1M", icon: "Trophy" },
                { label: "Success Rate", value: "94%", icon: "TrendingUp" }
              ].map((stat, index) => (
                <div key={index} className="glassmorphism rounded-xl p-4 text-center">
                  <Icon name={stat.icon} size={24} className="text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-80 space-y-6">
              <FilterSidebar
                selectedFilters={selectedFilters}
                onFilterChange={handleFilterChange}
                onClearAll={clearAllFilters}
              />
              <RecommendationEngine hackathons={hackathons.slice(0, 3)} />
            </div>

            {/* Main Content Area */}
            <div className="flex-1">
              {/* Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold text-text-primary">
                    {filteredHackathons.length} Hackathons Found
                  </h2>
                  {(selectedFilters.technology.length > 0 || 
                    selectedFilters.experience.length > 0 || 
                    selectedFilters.duration.length > 0 || 
                    selectedFilters.prize.length > 0 || 
                    searchQuery) && (
                    <button
                      onClick={clearAllFilters}
                      className="text-sm text-secondary hover:text-secondary-700 font-medium"
                    >
                      Clear All Filters
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-primary-200 rounded-lg bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="deadline">Sort by Deadline</option>
                    <option value="prize">Sort by Prize Pool</option>
                    <option value="participants">Sort by Popularity</option>
                    <option value="difficulty">Sort by Difficulty</option>
                  </select>

                  <div className="flex items-center border border-primary-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-surface text-text-secondary hover:text-text-primary'}`}
                    >
                      <Icon name="Grid3X3" size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-surface text-text-secondary hover:text-text-primary'}`}
                    >
                      <Icon name="List" size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Challenge Visualizations */}
              <ChallengeVisualization />

              {/* Hackathon Grid/List */}
              <div className={`${
                viewMode === 'grid' ?'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8' :'space-y-6'
              }`}>
                <AnimatePresence>
                  {sortedHackathons.map((hackathon, index) => (
                    <motion.div
                      key={hackathon.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <EventCard
                        hackathon={hackathon}
                        viewMode={viewMode}
                        onTeamFormation={handleTeamFormation}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {filteredHackathons.length === 0 && (
                <div className="text-center py-16">
                  <Icon name="Search" size={64} className="text-text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-text-primary mb-2">No Hackathons Found</h3>
                  <p className="text-text-secondary mb-6">
                    Try adjusting your filters or search terms to discover more opportunities.
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="btn-primary"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Team Formation Modal */}
      <AnimatePresence>
        {showTeamFormation && (
          <TeamFormationWidget
            eventId={selectedEvent}
            onClose={() => setShowTeamFormation(false)}
          />
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Innovation Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of developers who are pushing the boundaries of technology and creating solutions that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/developer-profiles-personal-brand-platform"
              className="btn-conversion px-8 py-4 text-lg font-semibold"
            >
              Create Your Profile
            </Link>
            <Link
              to="/community-network-developer-ecosystem"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1"
            >
              Join Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HackathonHub;