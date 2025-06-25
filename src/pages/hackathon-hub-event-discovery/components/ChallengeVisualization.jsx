import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';

const ChallengeVisualization = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(0);

  const challenges = [
    {
      id: 1,
      title: "AI Healthcare Assistant",
      category: "Artificial Intelligence",
      difficulty: "Advanced",
      description: `Develop an intelligent healthcare assistant that can analyze patient symptoms, provide preliminary diagnoses, and recommend appropriate medical actions. The system should integrate with existing healthcare databases and provide real-time insights to medical professionals.

Key requirements include natural language processing for patient interaction, machine learning models for symptom analysis, and secure data handling compliant with healthcare regulations.`,
      objectives: [
        "Implement NLP for patient symptom analysis",
        "Create ML models for preliminary diagnosis",
        "Ensure HIPAA compliance and data security",
        "Design intuitive interface for medical professionals",
        "Integrate with existing healthcare systems"
      ],
      technologies: ["Python", "TensorFlow", "NLP", "Healthcare APIs", "React"],
      expectedOutcome: "A functional prototype that can process patient symptoms and provide accurate preliminary assessments with 85%+ accuracy rate.",
      timeline: "16-20 hours",
      resources: [
        "Medical datasets and APIs",
        "Cloud computing credits",
        "Healthcare compliance guidelines",
        "Expert mentorship from medical professionals"
      ],
      judging: [
        "Technical implementation (30%)",
        "Accuracy and reliability (25%)",
        "User experience design (20%)",
        "Innovation and creativity (15%)",
        "Presentation and demo (10%)"
      ]
    },
    {
      id: 2,
      title: "Sustainable Energy Optimizer",
      category: "Climate Technology",
      difficulty: "Expert",
      description: `Build an AI-powered system that optimizes renewable energy distribution in smart cities. The solution should predict energy demand, manage grid load balancing, and maximize the utilization of renewable energy sources while minimizing waste.

The system must handle real-time data from multiple sources including weather patterns, energy consumption trends, and renewable energy generation capacity.`,
      objectives: [
        "Develop predictive models for energy demand",
        "Create algorithms for optimal energy distribution",
        "Implement real-time grid monitoring",
        "Design dashboard for energy managers",
        "Optimize renewable energy utilization"
      ],
      technologies: ["Python", "Machine Learning", "IoT", "Time Series Analysis", "React"],
      expectedOutcome: "A smart grid optimization system that can reduce energy waste by 20% and increase renewable energy usage by 30%.",
      timeline: "18-24 hours",
      resources: [
        "Energy consumption datasets",
        "Weather and climate data APIs",
        "Smart grid simulation tools",
        "Renewable energy databases"
      ],
      judging: [
        "Algorithm efficiency (35%)",
        "Environmental impact potential (25%)",
        "Technical complexity (20%)",
        "Scalability and practicality (15%)",
        "Presentation quality (5%)"
      ]
    },
    {
      id: 3,
      title: "Cross-Chain DeFi Protocol",
      category: "Blockchain & Web3",
      difficulty: "Expert",
      description: `Create a decentralized finance protocol that enables seamless asset trading and liquidity provision across multiple blockchain networks. The solution should address interoperability challenges while maintaining security and decentralization principles.

Focus on creating innovative mechanisms for cross-chain communication, automated market making, and yield optimization strategies.`,
      objectives: [
        "Implement cross-chain bridge functionality",
        "Design automated market maker (AMM) algorithms",
        "Create yield farming and staking mechanisms",
        "Ensure smart contract security",
        "Build user-friendly DeFi interface"
      ],
      technologies: ["Solidity", "Web3.js", "React", "Node.js", "Blockchain APIs"],
      expectedOutcome: "A functional DeFi protocol with cross-chain capabilities, demonstrating secure asset transfers and yield generation.",
      timeline: "20-24 hours",
      resources: [
        "Testnet tokens and faucets",
        "Blockchain development tools",
        "Smart contract templates",
        "DeFi protocol documentation"
      ],
      judging: [
        "Smart contract security (30%)",
        "Innovation in DeFi mechanisms (25%)",
        "Cross-chain functionality (20%)",
        "User experience (15%)",
        "Code quality and documentation (10%)"
      ]
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-success bg-success-50 border-success-200';
      case 'Intermediate': return 'text-warning bg-warning-50 border-warning-200';
      case 'Advanced': return 'text-secondary bg-secondary-50 border-secondary-200';
      case 'Expert': return 'text-error bg-error-50 border-error-200';
      default: return 'text-text-secondary bg-gray-50 border-gray-200';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Artificial Intelligence': return 'Brain';
      case 'Climate Technology': return 'Leaf';
      case 'Blockchain & Web3': return 'Link';
      default: return 'Code';
    }
  };

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Challenge Visualizations</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Explore interactive previews of hackathon challenges. Understand problem statements, 
          expected outcomes, and technical requirements before you commit.
        </p>
      </div>

      <div className="bg-surface rounded-2xl shadow-depth overflow-hidden">
        {/* Challenge Selector */}
        <div className="border-b border-primary-100">
          <div className="flex overflow-x-auto">
            {challenges.map((challenge, index) => (
              <button
                key={challenge.id}
                onClick={() => setSelectedChallenge(index)}
                className={`flex-shrink-0 px-6 py-4 text-left border-b-2 transition-colors ${
                  selectedChallenge === index
                    ? 'border-primary bg-primary-50 text-primary' :'border-transparent text-text-secondary hover:text-text-primary hover:bg-primary-50/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon name={getCategoryIcon(challenge.category)} size={20} />
                  <span className="font-semibold">{challenge.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getDifficultyColor(challenge.difficulty)}`}>
                    {challenge.difficulty}
                  </span>
                  <span className="text-xs text-text-secondary">{challenge.timeline}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Challenge Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedChallenge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon 
                      name={getCategoryIcon(challenges[selectedChallenge].category)} 
                      size={24} 
                      className="text-primary" 
                    />
                    <h3 className="text-2xl font-bold text-text-primary">
                      {challenges[selectedChallenge].title}
                    </h3>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full border ${getDifficultyColor(challenges[selectedChallenge].difficulty)}`}>
                      {challenges[selectedChallenge].difficulty}
                    </span>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {challenges[selectedChallenge].description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <Icon name="Target" size={18} className="text-accent" />
                    Key Objectives
                  </h4>
                  <ul className="space-y-2">
                    {challenges[selectedChallenge].objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <Icon name="Trophy" size={18} className="text-conversion" />
                    Expected Outcome
                  </h4>
                  <div className="bg-accent-50 rounded-lg p-4">
                    <p className="text-text-primary">{challenges[selectedChallenge].expectedOutcome}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <Icon name="Scale" size={18} className="text-secondary" />
                    Judging Criteria
                  </h4>
                  <div className="space-y-2">
                    {challenges[selectedChallenge].judging.map((criteria, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                        <span className="text-text-primary">{criteria.split(' (')[0]}</span>
                        <span className="font-semibold text-primary">{criteria.match(/\(([^)]+)\)/)?.[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-primary-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <Icon name="Code" size={18} className="text-primary" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {challenges[selectedChallenge].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-accent-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <Icon name="Clock" size={18} className="text-accent" />
                    Timeline
                  </h4>
                  <div className="text-2xl font-bold text-accent mb-2">
                    {challenges[selectedChallenge].timeline}
                  </div>
                  <p className="text-text-secondary text-sm">Estimated completion time</p>
                </div>

                <div className="bg-success-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <Icon name="Package" size={18} className="text-success" />
                    Resources Provided
                  </h4>
                  <ul className="space-y-2">
                    {challenges[selectedChallenge].resources.map((resource, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary text-sm">{resource}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <button className="w-full btn-primary py-3 font-semibold">
                    Start This Challenge
                  </button>
                  <button className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors">
                    View 3D Preview
                  </button>
                  <button className="w-full border border-primary-200 text-primary py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                    Save for Later
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ChallengeVisualization;