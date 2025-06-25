// A test comment
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { 
      name: 'Home', 
      path: '/homepage-interactive-hackathon-platform', 
      icon: 'Home',
      description: 'Interactive Platform'
    },
    { 
      name: 'Hackathons', 
      path: '/hackathon-hub-event-discovery', 
      icon: 'Code',
      description: 'Event Discovery'
    },
    { 
      name: 'Profiles', 
      path: '/developer-profiles-personal-brand-platform', 
      icon: 'User',
      description: 'Personal Brand'
    },
    { 
      name: 'Live Events', 
      path: '/live-event-experience-real-time-participation', 
      icon: 'Radio',
      description: 'Real-time Participation'
    },
    { 
      name: 'Community', 
      path: '/community-network-developer-ecosystem', 
      icon: 'Users',
      description: 'Developer Ecosystem'
    },
    { 
      name: 'Sponsors', 
      path: '/sponsor-galaxy-partnership-portal', 
      icon: 'Building',
      description: 'Partnership Portal'
    },
  ];

  const quickActions = [
    { name: 'Create Project', icon: 'Plus', action: 'create' },
    { name: 'Join Team', icon: 'UserPlus', action: 'join' },
    { name: 'View Rankings', icon: 'Trophy', action: 'rankings' },
    { name: 'Settings', icon: 'Settings', action: 'settings' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const closeMobile = () => {
    setIsMobileOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const handleQuickAction = (action) => {
    closeMobile();
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleMobile}
        className="lg:hidden fixed top-20 left-4 z-40 p-2 bg-primary text-white rounded-lg shadow-floating"
        aria-label="Toggle sidebar"
      >
        <Icon name="Menu" size={20} />
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={closeMobile}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 h-full bg-surface border-r border-primary-100 z-40
          transition-all duration-300 ease-in-out shadow-depth
          ${isCollapsed ? 'w-16' : 'w-64'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-primary-100">
            {!isCollapsed && (
              <Link 
                to="/homepage-interactive-hackathon-platform"
                className="flex items-center space-x-3 group"
                onClick={closeMobile}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-primary via-secondary to-accent rounded-lg flex items-center justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gradient">Hackfinity</h2>
                  <p className="text-xs text-text-secondary -mt-1">Dashboard</p>
                </div>
              </Link>
            )}
            
            <button
              onClick={toggleCollapse}
              className="hidden lg:flex p-1.5 rounded-lg text-text-secondary hover:bg-primary-50 hover:text-primary transition-colors duration-200"
              aria-label="Toggle sidebar"
            >
              <Icon name={isCollapsed ? 'ChevronRight' : 'ChevronLeft'} size={18} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            <div className="space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobile}
                  className={`
                    flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium
                    transition-all duration-200 group relative
                    ${isActivePath(item.path)
                      ? 'bg-primary text-white shadow-floating'
                      : 'text-text-primary hover:bg-primary-50 hover:text-primary hover:-translate-y-0.5'
                    }
                  `}
                  title={isCollapsed ? item.name : ''}
                >
                  <Icon 
                    name={item.icon} 
                    size={20} 
                    className={`flex-shrink-0 ${isActivePath(item.path) ? 'text-white' : ''}`}
                  />
                  {!isCollapsed && (
                    <div className="flex-1 min-w-0">
                      <div className="font-medium">{item.name}</div>
                      <div className={`text-xs ${
                        isActivePath(item.path) ? 'text-white/80' : 'text-text-secondary'
                      }`}>
                        {item.description}
                      </div>
                    </div>
                  )}
                  
                  {isCollapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                      {item.name}
                    </div>
                  )}
                </Link>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="pt-6 border-t border-primary-100">
              {!isCollapsed && (
                <h3 className="px-3 mb-3 text-xs font-semibold text-text-secondary uppercase tracking-wider">
                  Quick Actions
                </h3>
              )}
              <div className="space-y-1">
                {quickActions.map((action) => (
                  <button
                    key={action.action}
                    onClick={() => handleQuickAction(action.action)}
                    className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-text-primary hover:bg-accent-50 hover:text-accent transition-all duration-200 group"
                    title={isCollapsed ? action.name : ''}
                  >
                    <Icon name={action.icon} size={18} className="flex-shrink-0" />
                    {!isCollapsed && <span>{action.name}</span>}
                    
                    {isCollapsed && (
                      <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                        {action.name}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-primary-100">
            <div className={`flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-primary-50 to-accent-50 ${isCollapsed ? 'justify-center' : ''}`}>
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={16} className="text-white" />
              </div>
              {!isCollapsed && (
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-text-primary">Developer</div>
                  <div className="text-xs text-text-secondary">Level 5 Coder</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;