import React from 'react';
import { Home, MessageSquare, User } from 'lucide-react';
import { TAB_ROUTES } from '../constants';

interface TabBarProps {
  currentTab: string;
  onTabChange: (tabName: string) => void;
}

// Icon mapper for dynamic rendering
const IconMap: Record<string, React.ElementType> = {
  Home,
  MessageSquare,
  User
};

const TabBar: React.FC<TabBarProps> = ({ currentTab, onTabChange }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 pb-safe-bottom z-50 shadow-nav">
      <div className="flex justify-around items-center h-[65px] px-2">
        {TAB_ROUTES.map((route) => {
          const isActive = currentTab === route.name;
          const IconComponent = IconMap[route.icon] || Home;
          
          return (
            <button
              key={route.name}
              onClick={() => onTabChange(route.name)}
              className="flex-1 flex flex-col items-center justify-center space-y-1 active:scale-95 transition-transform"
              style={{ touchAction: 'manipulation' }}
            >
              <div className={`p-1 rounded-full transition-colors ${isActive ? '' : ''}`}>
                <IconComponent 
                  size={24} 
                  strokeWidth={isActive ? 2.5 : 2}
                  className={isActive ? 'text-primary' : 'text-gray-400'} 
                />
              </div>
              <span className={`text-[10px] font-bold ${isActive ? 'text-primary' : 'text-gray-500'}`}>
                {route.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabBar;
