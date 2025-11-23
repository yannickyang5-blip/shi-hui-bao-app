import React from 'react';
import { Store, ChevronRight, User } from 'lucide-react';
import { PRIMARY_COLOR, APP_NAME } from '../constants';

const MerchantCenter: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 p-4">
            <header className="py-6 mb-8 text-center">
                <h1 className="text-3xl font-extrabold text-gray-900 flex items-center justify-center">
                    <Store size={32} className={`mr-2 text-brand-orange`} /> 
                    {APP_NAME} 商家中心
                </h1>
                <p className="text-gray-500 mt-2">合作共赢，链接每一份美味与期待。</p>
            </header>

            <div className="flex-grow flex flex-col items-center justify-center space-y-8 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
                <div className="text-center">
                    <User size={64} className="text-gray-300 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800">加入我们，拓展您的业务版图</h2>
                    <p className="text-gray-600 mt-2 max-w-xs">
                        {APP_NAME} 平台拥有强大的用户基础和高效的供应链支持，期待与您共创佳绩。
                    </p>
                </div>

                <button
                    className={`flex items-center justify-center w-full max-w-xs px-8 py-4 text-xl font-bold text-white bg-brand-orange rounded-full shadow-lg hover:bg-orange-700 transition-all active:scale-98`}
                    onClick={() => alert('跳转到商家注册/加盟页面')}
                >
                    点击成为商家/加盟商
                    <ChevronRight size={24} className="ml-2" />
                </button>

                <p className="text-sm text-gray-400 mt-4">联系客服了解更多加盟信息。</p>
            </div>
            
            <footer className="mt-8 text-center text-gray-400 text-sm">
                <p>商家服务热线: 400-XXXX-XXX</p>
            </footer>
        </div>
    );
};

export default MerchantCenter;