import React from 'react';
import BottomNav from './BottomNav';
import AIAssistant from './AIAssistant';
import { Tab } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentTab, onTabChange }) => {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative overflow-hidden">
      {children}
      <AIAssistant />
      <BottomNav currentTab={currentTab} onTabChange={onTabChange} />
    </div>
  );
};

export default Layout;