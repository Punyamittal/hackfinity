import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';

const FilterSidebar = ({ selectedFilters, onFilterChange, onClearAll }) => {
  const [expandedSections, setExpandedSections] = useState({
    technology: true,
    experience: true,
    duration: true,
    prize: true
  });

  const filterOptions = {
    technology: [
      { value: 'react', label: 'React', count: 12 },
      { value: 'python', label: 'Python', count: 18 },
      { value: 'javascript', label: 'JavaScript', count: 15 },
      { value: 'ai', label: 'AI/ML', count: 8 },
      { value: 'blockchain', label: 'Blockchain', count: 6 },
      { value: 'mobile', label: 'Mobile', count: 10 },
      { value: 'web3', label: 'Web3', count: 5 },
      { value: 'cloud', label: 'Cloud', count: 9 },
      { value: 'iot', label: 'IoT', count: 4 },
      { value: 'cybersecurity', label: 'Cybersecurity', count: 3 }
    ],
    experience: [
      { value: 'Beginner', label: 'Beginner', count: 8 },
      { value: 'Intermediate', label: 'Intermediate', count: 12 },
      { value: 'Advanced', label: 'Advanced', count: 6 },
      { value: 'Expert', label: 'Expert', count: 4 }
    ],
    duration: [
      { value: 'short', label: '24 hours or less', count: 5 },
      { value: 'medium', label: '24-48 hours', count: 15 },
      { value: 'long', label: '48+ hours', count: 10 }
    ],
    prize: [
      { value: 'low', label: 'Under $50K', count: 12 },
      { value: 'medium', label: '$50K - $80K', count: 8 },
      { value: 'high', label: '$80K+', count: 10 }
    ]
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const getActiveFilterCount = () => {
    return Object.values(selectedFilters).reduce((total, filters) => total + filters.length, 0);
  };

  const FilterSection = ({ title, type, options, icon }) => (
    <div className="border-b border-primary-100 last:border-b-0">
      <button
        onClick={() => toggleSection(type)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-primary-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon name={icon} size={18} className="text-primary" />
          <span className="font-semibold text-text-primary">{title}</span>
          {selectedFilters[type].length > 0 && (
            <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
              {selectedFilters[type].length}
            </span>
          )}
        </div>
        <Icon 
          name={expandedSections[type] ? "ChevronUp" : "ChevronDown"} 
          size={16} 
          className="text-text-secondary" 
        />
      </button>
      
      <AnimatePresence>
        {expandedSections[type] && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-2">
              {options.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-primary-50 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedFilters[type].includes(option.value)}
                      onChange={() => onFilterChange(type, option.value)}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
                    />
                    <span className="text-sm text-text-primary group-hover:text-primary transition-colors">
                      {option.label}
                    </span>
                  </div>
                  <span className="text-xs text-text-secondary bg-gray-100 px-2 py-1 rounded-full">
                    {option.count}
                  </span>
                </label>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="bg-surface rounded-2xl shadow-depth overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-primary-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
            <Icon name="Filter" size={20} className="text-primary" />
            Filters
          </h3>
          {getActiveFilterCount() > 0 && (
            <button
              onClick={onClearAll}
              className="text-sm text-secondary hover:text-secondary-700 font-medium"
            >
              Clear All
            </button>
          )}
        </div>
        
        {getActiveFilterCount() > 0 && (
          <div className="text-sm text-text-secondary">
            {getActiveFilterCount()} filter{getActiveFilterCount() !== 1 ? 's' : ''} applied
          </div>
        )}
      </div>

      {/* Filter Sections */}
      <div>
        <FilterSection
          title="Technology Stack"
          type="technology"
          options={filterOptions.technology}
          icon="Code"
        />
        <FilterSection
          title="Experience Level"
          type="experience"
          options={filterOptions.experience}
          icon="TrendingUp"
        />
        <FilterSection
          title="Duration"
          type="duration"
          options={filterOptions.duration}
          icon="Clock"
        />
        <FilterSection
          title="Prize Range"
          type="prize"
          options={filterOptions.prize}
          icon="Trophy"
        />
      </div>

      {/* Quick Filters */}
      <div className="p-6 border-t border-primary-100 bg-primary-50/50">
        <h4 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
          <Icon name="Zap" size={16} className="text-accent" />
          Quick Filters
        </h4>
        <div className="space-y-2">
          <button className="w-full text-left p-2 rounded-lg text-sm text-text-primary hover:bg-primary-100 transition-colors">
            🔥 Trending Now
          </button>
          <button className="w-full text-left p-2 rounded-lg text-sm text-text-primary hover:bg-primary-100 transition-colors">
            ⚡ Ending Soon
          </button>
          <button className="w-full text-left p-2 rounded-lg text-sm text-text-primary hover:bg-primary-100 transition-colors">
            💰 High Prize Pool
          </button>
          <button className="w-full text-left p-2 rounded-lg text-sm text-text-primary hover:bg-primary-100 transition-colors">
            👥 Team Friendly
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;