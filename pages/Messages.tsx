import React from 'react';
import { MESSAGES, PRIMARY_COLOR, APP_NAME } from '../constants';
import { Mail, Clock, MessageCircle, Info } from 'lucide-react';

const Messages: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="sticky top-0 bg-white p-4 border-b border-gray-100 shadow-sm z-10">
                <h1 className="text-xl font-bold text-gray-800 text-center">消息中心</h1>
            </div>
            
            <div className="flex justify-around p-3 bg-white border-b border-gray-100">
                <button className={`py-2 px-4 border-b-2 font-semibold text-lg transition border-primary text-primary`}>
                    系统消息 ({MESSAGES.length})
                </button>
                <button className="py-2 px-4 border-b-2 border-transparent text-gray-500 font-semibold text-lg transition">
                    收款消息 (0)
                </button>
            </div>

            <div className="p-4 space-y-4">
                {MESSAGES.map(message => (
                    <div key={message.id} className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center space-x-2">
                                {message.type === 'system' 
                                    ? <Info size={20} className="text-blue-500 flex-shrink-0" />
                                    : <MessageCircle size={20} className="text-green-500 flex-shrink-0" />}
                                <h2 className="text-lg font-bold text-gray-800">{message.title}</h2>
                            </div>
                            {!message.read && <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-1"></span>}
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed">{message.content}</p>
                        
                        <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                            <span className="text-xs text-gray-400 flex items-center">
                                <Clock size={12} className="mr-1" />
                                {message.time.split(' ')[0]}
                            </span>
                            {message.actionLabel && (
                                <button className={`text-sm font-semibold text-white py-1 px-4 rounded-full bg-gradient-to-r from-brand-orange to-[#FF8C4D] shadow-md`}>
                                    {message.actionLabel}
                                </button>
                            )}
                        </div>
                    </div>
                ))}

                <div className="text-center pt-6 text-gray-400 text-base">
                    没有更多消息啦！
                </div>
            </div>
        </div>
    );
};

export default Messages;