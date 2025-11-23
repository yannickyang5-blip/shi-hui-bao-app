import React from 'react';
import { Bot } from 'lucide-react';

const AIAssistant: React.FC = () => {
    return (
        <button
            className="fixed right-6 bottom-[80px] w-14 h-14 rounded-full bg-gradient-to-r from-brand-orange to-[#FF8C4D] flex items-center justify-center shadow-2xl z-50 hover:scale-105 transition-transform"
            style={{ 
                boxShadow: `0 10px 20px rgba(255, 107, 0, 0.4)` 
            }}
            onClick={() => alert("AI 助手已启动!")}
        >
            <Bot size={28} className="text-white" strokeWidth={3} />
        </button>
    );
};

export default AIAssistant;