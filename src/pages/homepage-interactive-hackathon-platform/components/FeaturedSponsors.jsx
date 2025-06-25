import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const FeaturedSponsors = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const sponsors = [
    {
      id: 1,
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      category: "tech",
      tier: "platinum",
      description: "Leading AI and cloud computing innovations",
      hackathonsSponsored: 45,
      totalPrizes: "$2.5M",
      specialization: ["AI/ML", "Cloud", "Mobile"],
      isActive: true
    },
    {
      id: 2,
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      category: "tech",
      tier: "platinum",
      description: "Empowering developers with cutting-edge tools",
      hackathonsSponsored: 38,
      totalPrizes: "$1.8M",
      specialization: ["Azure", "AI", "Productivity"],
      isActive: true
    },
    {
      id: 3,
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      category: "tech",
      tier: "platinum",
      description: "Cloud infrastructure and e-commerce solutions",
      hackathonsSponsored: 42,
      totalPrizes: "$2.1M",
      specialization: ["AWS", "E-commerce", "Logistics"],
      isActive: true
    },
    {
      id: 4,
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      category: "tech",
      tier: "gold",
      description: "Building the future of social connection",
      hackathonsSponsored: 28,
      totalPrizes: "$1.2M",
      specialization: ["VR/AR", "Social", "Mobile"],
      isActive: true
    },
    {
      id: 5,
      name: "Tesla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
      category: "automotive",
      tier: "gold",
      description: "Accelerating sustainable transport and energy",
      hackathonsSponsored: 15,
      totalPrizes: "$800K",
      specialization: ["Automotive", "Energy", "AI"],
      isActive: true
    },
    {
      id: 6,
      name: "Stripe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
      category: "fintech",
      tier: "gold",
      description: "Internet infrastructure for online businesses",
      hackathonsSponsored: 22,
      totalPrizes: "$950K",
      specialization: ["Fintech", "Payments", "API"],
      isActive: true
    },
    {
      id: 7,
      name: "Coinbase",
      logo: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=200&h=100&fit=crop",
      category: "blockchain",
      tier: "silver",
      description: "Leading cryptocurrency exchange platform",
      hackathonsSponsored: 18,
      totalPrizes: "$600K",
      specialization: ["Blockchain", "Crypto", "DeFi"],
      isActive: true
    },
    {
      id: 8,
      name: "Shopify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
      category: "ecommerce",
      tier: "silver",
      description: "Commerce platform for entrepreneurs",
      hackathonsSponsored: 25,
      totalPrizes: "$750K",
      specialization: ["E-commerce", "Retail", "SaaS"],
      isActive: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Sponsors', count: sponsors.length },
    { id: 'tech', name: 'Technology', count: sponsors.filter(s => s.category === 'tech').length },
    { id: 'fintech', name: 'FinTech', count: sponsors.filter(s => s.category === 'fintech').length },
    { id: 'blockchain', name: 'Blockchain', count: sponsors.filter(s => s.category === 'blockchain').length },
    { id: 'automotive', name: 'Automotive', count: sponsors.filter(s => s.category === 'automotive').length },
    { id: 'ecommerce', name: 'E-commerce', count: sponsors.filter(s => s.category === 'ecommerce').length }
  ];

  const getTierColor = (tier) => {
    switch (tier) {
      case 'platinum': return 'border-purple-300 bg-purple-50';
      case 'gold': return 'border-yellow-300 bg-yellow-50';
      case 'silver': return 'border-gray-300 bg-gray-50';
      default: return 'border-primary-200 bg-primary-50';
    }
  };

  const getTierBadge = (tier) => {
    switch (tier) {
      case 'platinum': return 'bg-purple-500 text-white';
      case 'gold': return 'bg-yellow-500 text-white';
      case 'silver': return 'bg-gray-500 text-white';
      default: return 'bg-primary text-white';
    }
  };

  const filteredSponsors = activeCategory === 'all' 
    ? sponsors 
    : sponsors.filter(sponsor => sponsor.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-accent-50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            World-class companies partner with Hackfinity to discover breakthrough innovations, 
            connect with top talent, and drive technological advancement.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-floating'
                    : 'bg-white text-text-secondary hover:bg-primary-50 hover:text-primary'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredSponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`glassmorphism rounded-2xl p-6 shadow-depth hover:shadow-floating transition-all duration-300 border-2 ${getTierColor(sponsor.tier)}`}
            >
              {/* Tier Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${getTierBadge(sponsor.tier)}`}>
                  {sponsor.tier}
                </span>
                {sponsor.isActive && (
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-xs text-success font-medium">Active</span>
                  </div>
                )}
              </div>

              {/* Logo */}
              <div className="h-16 flex items-center justify-center mb-4 bg-white rounded-lg p-3">
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Company Info */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {sponsor.name}
                </h3>
                <p className="text-sm text-text-secondary mb-3">
                  {sponsor.description}
                </p>
              </div>

              {/* Specializations */}
              <div className="flex flex-wrap gap-1 mb-4 justify-center">
                {sponsor.specialization.map((spec, specIndex) => (
                  <span
                    key={specIndex}
                    className="bg-accent-100 text-accent px-2 py-1 rounded text-xs font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center p-2 bg-secondary-50 rounded-lg">
                  <div className="text-lg font-bold text-secondary">
                    {sponsor.hackathonsSponsored}
                  </div>
                  <div className="text-xs text-secondary-700">Hackathons</div>
                </div>
                <div className="text-center p-2 bg-success-50 rounded-lg">
                  <div className="text-lg font-bold text-success">
                    {sponsor.totalPrizes}
                  </div>
                  <div className="text-xs text-success-700">Total Prizes</div>
                </div>
              </div>

              {/* Action Button */}
              <Link
                to="/sponsor-galaxy-partnership-portal"
                className="w-full btn-primary text-center py-2 text-sm"
              >
                View Partnership
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glassmorphism rounded-2xl p-8 mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Why Partner with Hackfinity?
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Join industry leaders in discovering the next generation of breakthrough technologies and top-tier talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-2xl flex items-center justify-center">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">
                Access Top Talent
              </h4>
              <p className="text-text-secondary text-sm">
                Connect with 50,000+ skilled developers from around the world and identify potential hires.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary-100 rounded-2xl flex items-center justify-center">
                <Icon name="Lightbulb" size={32} className="text-secondary" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">
                Drive Innovation
              </h4>
              <p className="text-text-secondary text-sm">
                Discover breakthrough solutions to your business challenges through collaborative hackathons.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent-100 rounded-2xl flex items-center justify-center">
                <Icon name="TrendingUp" size={32} className="text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">
                Brand Visibility
              </h4>
              <p className="text-text-secondary text-sm">
                Showcase your brand to a highly engaged developer community and build lasting relationships.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Partner with Us?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Join the world's leading companies in fostering innovation and discovering the next generation of breakthrough technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/sponsor-galaxy-partnership-portal"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-floating hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Icon name="Building" size={20} />
                <span>Become a Partner</span>
              </Link>
              <button className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-xl border border-white/20 inline-flex items-center space-x-2">
                <Icon name="Download" size={20} />
                <span>Download Partnership Kit</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSponsors;