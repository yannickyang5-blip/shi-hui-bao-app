import React, { useState, useEffect } from 'react'; // <-- 修复: 增加 useEffect 导入
import { Home as HomeIcon, MessageSquare, User, Store, Megaphone } from 'lucide-react';

// 导入常量和页面
import { TAB_ROUTES, PRIMARY_COLOR } from './constants';
import { TabName } from './types';
import Home from './pages/Home';
import MerchantCenter from './pages/MerchantCenter'; // 新增导入
import Profile from './pages/Profile';
import AIAssistant from './components/AIAssistant';

// Icon Map for TabBar (更新，新增 Store 图标)
const IconMap: Record<string, React.ElementType> = {
    Home: HomeIcon,
    // MessageSquare: MessageSquare, // 移除 MessageSquare
    Store: Store, // 新增 Store 图标
    User: User
};

const App: React.FC = () => {
    // State to track current active tab
    const [currentTab, setCurrentTab] = useState<TabName>('Home');

    // Expose setCurrentTab to window for easy navigation from other components (like Home)
    useEffect(() => {
        (window as any).setCurrentTab = setCurrentTab;
        return () => {
            delete (window as any).setCurrentTab;
        };
    }, []);

    // Function to render the correct screen based on state
    const renderScreen = () => {
        switch (currentTab) {
            case 'Home': return <Home />;
            // Messages 替换为 MerchantCenter
            case 'MerchantCenter': return <MerchantCenter />; 
            case 'Profile': return <Profile />;
            default: return <Home />;
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-white max-w-md mx-auto shadow-2xl relative overflow-hidden">
            {/* Main Content Area - Scrollable */}
            <div className="flex-1 pb-[65px] overflow-y-auto no-scrollbar bg-gray-50">
                {renderScreen()}
            </div>

            {/* AI Assistant Floating Button */}
            <AIAssistant />

            {/* Bottom Tab Bar (Custom Implementation to match Grab style) */}
            <div 
                className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-100 flex justify-around items-center z-50 pb-safe-bottom"
                style={{
                    height: '65px',
                    boxShadow: '0 -4px 16px rgba(0,0,0,0.05)'
                }}
            >
                {TAB_ROUTES.map(route => {
                    const isActive = currentTab === route.name;
                    // 使用 IconMap 获取正确的图标组件
                    const IconComponent = IconMap[route.icon] || HomeIcon; 
                    
                    return (
                        <button
                            key={route.name}
                            onClick={() => setCurrentTab(route.name as TabName)}
                            className="flex-1 flex flex-col items-center justify-center space-y-1 h-full active:scale-95 transition-transform"
                            style={{ touchAction: 'manipulation' }}
                        >
                            <div className={`transition-all duration-300 ${isActive ? '-translate-y-1' : ''}`}>
                                <IconComponent 
                                    size={24} 
                                    className={`transition-colors duration-300 ${isActive ? 'text-brand-orange' : 'text-gray-400'}`}
                                    strokeWidth={isActive ? 2.5 : 2}
                                    fill={isActive ? "currentColor" : "none"}
                                />
                            </div>
                            <span 
                                className={`text-[10px] font-semibold transition-colors duration-300 ${isActive ? 'text-brand-orange' : 'text-gray-400'}`}
                            >
                                {route.title}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default App;