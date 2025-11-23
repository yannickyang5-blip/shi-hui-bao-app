import React from 'react';
import { Home, User, ShoppingBag, Store } from 'lucide-react';
import { Tab } from '../types';

interface BottomNavProps {
  currentTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onTabChange }) => {
  const navItems = [
    { id: Tab.HOME, label: '首页', icon: Home },
    // Placeholder for functionality implied but not fully built
    { id: 'orders', label: '订单', icon: ShoppingBag, disabled: true }, 
    { id: Tab.MERCHANT, label: '商家中心', icon: Store },
    { id: Tab.PROFILE, label: '我的', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 pb-safe pt-2 px-6 shadow-[0_-4px_10px_rgba(0,0,0,0.03)] z-50">
      <div className="flex justify-between items-center pb-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => !item.disabled && onTabChange(item.id as Tab)}
              className={`flex flex-col items-center space-y-1 transition-all duration-200 ${
                isActive ? 'text-primary transform scale-105' : 'text-gray-400'
              } ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <Icon 
                size={24} 
                strokeWidth={isActive ? 2.5 : 2} 
                fill={isActive ? "currentColor" : "none"}
                className={isActive ? "text-primary" : "text-gray-400"}
              />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;