import React from 'react';
import { DollarSign, Gift, Map, Lock, Smartphone, FileText, Users, LogOut, XCircle, ChevronRight, Info } from 'lucide-react';
import { PRIMARY_COLOR } from '../constants';

const Profile: React.FC = () => {
    
    const UserInfoCard: React.FC = () => (
        <div className="relative bg-gradient-to-br from-[#FF9933] to-brand-orange p-6 rounded-b-3xl shadow-lg">
            <div className="flex justify-end mb-4">
                <button className="flex items-center text-white/90 text-sm font-medium">
                    联系客服 <ChevronRight size={16} />
                </button>
            </div>
            
            <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-md">
                    <img src="https://picsum.photos/60/60?random=10" alt="Avatar" className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                    <p className="text-xl font-bold text-white">手机用户 8389</p>
                    <p className="text-sm text-white/80">UID: 74292454</p>
                </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl flex justify-between items-center">
                <span className="text-sm font-medium text-white">亲爱的会员，食惠宝为您累计节省</span>
                <span className="text-2xl font-extrabold text-white">0 元</span>
            </div>
        </div>
    );

    const FeatureItem: React.FC<{ Icon: React.ElementType, title: string, subtitle: string, color: string }> = ({ Icon, title, subtitle, color }) => (
        <div className="flex flex-col items-center p-3 bg-white rounded-xl shadow-sm border border-gray-100 flex-1 hover:shadow-md transition cursor-pointer">
            <Icon size={24} className={`mb-1 ${color}`} />
            <p className="text-sm font-semibold text-gray-800">{title}</p>
            <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
    );

    const MenuItem: React.FC<{ Icon: React.ElementType, title: string, color?: string }> = ({ Icon, title, color = 'text-gray-700' }) => (
        <button className="flex justify-between items-center w-full p-4 bg-white hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition">
            <div className="flex items-center space-x-4">
                <Icon size={20} className={color} />
                <span className={`text-base font-medium ${color}`}>{title}</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
        </button>
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            <UserInfoCard />

            <div className="p-4 flex space-x-3 -mt-10 mb-4 z-10 relative">
                <FeatureItem Icon={DollarSign} title="我的代金券 (2)" subtitle="待使用" color="text-yellow-600" />
                <FeatureItem Icon={Gift} title="推荐有礼" subtitle="赚佣金" color="text-red-500" />
                <FeatureItem Icon={Map} title="配送地址" subtitle="管理" color="text-blue-500" />
            </div>

            <div className="bg-white rounded-xl shadow-md mx-4 mb-4 overflow-hidden border border-gray-100">
                <MenuItem Icon={Lock} title="修改密码" />
                <MenuItem Icon={Smartphone} title="修改手机号" />
            </div>

            <div className="bg-white rounded-xl shadow-md mx-4 mb-4 overflow-hidden border border-gray-100">
                <MenuItem Icon={FileText} title="隐私政策" />
                <MenuItem Icon={Users} title="用户协议" />
                <MenuItem Icon={Info} title="关于我们" />
            </div>

            <div className="bg-white rounded-xl shadow-md mx-4 mb-6 overflow-hidden border border-gray-100">
                <MenuItem Icon={XCircle} title="注销账户" color="text-red-500" />
                <MenuItem Icon={LogOut} title="退出登录" color="text-red-500" />
            </div>
            
            <div className="text-center text-gray-400 text-sm py-4">
                食惠宝 v1.0.0
            </div>
        </div>
    );
};

export default Profile;