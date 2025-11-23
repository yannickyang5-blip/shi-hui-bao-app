import React, { useEffect } from 'react';
import { CATEGORIES, STORES, VOUCHERS, PRIMARY_COLOR, SLOGAN, BANNERS, MERCHANT_ADS } from '../constants'; // 导入 MERCHANT_ADS
import { Search, MapPin, Bell, Star, ChevronRight, LayoutGrid, Soup, Utensils, Flame, ChefHat, Beef, IceCream, Popcorn, Coffee, Megaphone, Truck, Map, Store as StoreIcon } from 'lucide-react'; // 导入新的图标

// Icon Map for Categories
const CategoryIconMap: Record<string, React.ElementType> = {
    LayoutGrid: LayoutGrid,
    Soup: Soup,
    Utensils: Utensils,
    Flame: Flame,
    ChefHat: ChefHat,
    Beef: Beef,
    IceCream: IceCream,
    Popcorn: Popcorn,
    Coffee: Coffee,
    default: LayoutGrid
};

// Icon Map for Merchant Ads
const MerchantAdIconMap: Record<string, React.ElementType> = {
    Megaphone: Megaphone,
    Truck: Truck,
    Map: Map,
    default: StoreIcon
};

const Home: React.FC = () => {

    useEffect(() => {
        // Initialize Swiper for Banners
        if (typeof window !== 'undefined' && (window as any).Swiper) {
            new (window as any).Swiper('.swiper-container.banner-slider', {
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination.banner-pagination',
                    clickable: true,
                },
            });

            // Initialize Swiper for Merchant Ads (横向滚动)
            new (window as any).Swiper('.swiper-container.ad-slider', {
                slidesPerView: 'auto', // 自动适应每张卡片的宽度
                spaceBetween: 12, // 间距
                freeMode: true, // 自由模式，更像横向列表
                scrollbar: {
                    el: '.swiper-scrollbar.ad-scrollbar',
                    draggable: true,
                },
            });
        }
    }, []); 

    const LocationHeader: React.FC = () => (
        <div className="flex justify-between items-center p-4 bg-white border-b border-gray-100 sticky top-0 z-10">
            <div className="flex items-center space-x-2">
                <MapPin size={24} color={PRIMARY_COLOR} strokeWidth={2.5} />
                <div>
                    <p className="text-xs text-gray-500 font-medium">当前地址</p>
                    <p className="text-base font-bold text-gray-800">荣昌区 <ChevronRight size={16} className="inline ml-1 text-gray-500" /></p>
                </div>
            </div>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                <Bell size={20} className="text-gray-600" />
            </button>
        </div>
    );

    const SearchBar: React.FC = () => (
        <div className="p-4 bg-white border-b border-gray-100">
            <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 shadow-inner shadow-gray-200">
                <Search size={20} className="text-gray-400 mr-2" />
                <input
                    type="text"
                    placeholder="搜索美食、代金券或商家..."
                    className="flex-1 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none text-base"
                />
            </div>
        </div>
    );

    const BannerSlider: React.FC = () => (
        <div className="relative px-4 pb-4 bg-white">
            <div className="swiper-container banner-slider w-full h-[160px] rounded-xl overflow-hidden shadow-lg border border-gray-100 relative">
                <div className="swiper-wrapper">
                    {BANNERS.map((banner) => (
                        <div key={banner.id} className="swiper-slide relative">
                            <img 
                                src={banner.image} 
                                alt={banner.alt} 
                                className="w-full h-full object-cover"
                            />
                            {/* Slogan Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4">
                                <div className="text-center">
                                    <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-tight drop-shadow-lg">{SLOGAN.split('，')[0]}</h1>
                                    <p className="text-sm md:text-base text-white/90 mt-1 drop-shadow-md">{SLOGAN.split('，')[1]}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Add Pagination */}
                <div className="swiper-pagination banner-pagination !bottom-2 !text-white"></div>
            </div>
        </div>
    );

    const MerchantAdSection: React.FC = () => (
        <div className="px-4 py-4 bg-white border-b border-gray-100">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-bold text-gray-800">商家/加盟合作</h2>
                <button 
                    className="text-sm text-gray-500 flex items-center hover:text-brand-orange transition-colors" 
                    onClick={() => { if ((window as any).setCurrentTab) (window as any).setCurrentTab('MerchantCenter'); }}
                >
                    查看全部 <ChevronRight size={16} className="ml-1" />
                </button>
            </div>
            <div className="swiper-container ad-slider overflow-hidden !py-2"> {/* 使用 py-2 确保阴影和滚动条可见 */}
                <div className="swiper-wrapper">
                    {MERCHANT_ADS.map(ad => {
                        const IconComponent = MerchantAdIconMap[ad.icon] || StoreIcon;
                        return (
                            <div key={ad.id} className="swiper-slide !w-2/3 md:!w-1/2 flex-shrink-0">
                                <div 
                                    className={`flex flex-col p-4 rounded-xl shadow-md text-white h-full cursor-pointer ${ad.bgColor} hover:shadow-lg transition`}
                                    onClick={() => { if ((window as any).setCurrentTab) (window as any).setCurrentTab('MerchantCenter'); }}
                                >
                                    <IconComponent size={32} className="mb-2 text-white" />
                                    <p className="text-base font-bold">{ad.title}</p>
                                    <p className="text-xs opacity-90 mt-1">{ad.description}</p>
                                    <div className="mt-auto pt-2">
                                        <ChevronRight size={20} className="ml-auto" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* 滚动条 */}
                <div className="swiper-scrollbar ad-scrollbar mt-4"></div>
            </div>
        </div>
    );


    const CategoriesSection: React.FC = () => (
        <div className="px-4 py-3 overflow-x-auto whitespace-nowrap bg-white shadow-md mb-4 border-b border-gray-100">
            <div className="flex space-x-6">
                {CATEGORIES.map(category => {
                    const IconComponent = CategoryIconMap[category.icon] || LayoutGrid;
                    return (
                        <div key={category.id} className="flex flex-col items-center w-16 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                            <div className="p-3 bg-brand-light rounded-lg shadow-sm">
                                <IconComponent size={24} className="text-brand-orange" />
                            </div>
                            <p className="text-xs mt-1 text-gray-700 font-medium whitespace-normal text-center">{category.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    const VoucherCard: React.FC<{ voucher: typeof VOUCHERS[0] }> = ({ voucher }) => (
        <div className="flex-shrink-0 w-[280px] h-[140px] bg-white rounded-xl shadow-lg overflow-hidden border border-brand-light cursor-pointer">
            <div className="p-4 flex flex-col justify-between h-full bg-gradient-to-br from-brand-orange to-[#FF8C4D]">
                <div className="flex items-end text-white">
                    <p className="text-5xl font-extrabold leading-none">¥{voucher.price}</p>
                    <p className="ml-2 text-xl font-medium line-through opacity-70 mb-1">¥{voucher.originalPrice}</p>
                </div>
                <div>
                    <p className="text-base font-semibold text-white mt-1">{voucher.title}</p>
                    <p className="text-xs text-white opacity-90 mt-1 flex justify-between items-center">
                        <span>已售 {voucher.sold} 份</span>
                        <span className="font-bold border border-white px-2 py-0.5 rounded-full text-xs">立即抢购</span>
                    </p>
                </div>
            </div>
        </div>
    );

    const StoresList: React.FC = () => (
        <div className="p-4 space-y-3">
            <h2 className="text-xl font-bold text-gray-800">附近好店推荐</h2>
            {STORES.map(store => (
                <div key={store.id} className="flex bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 cursor-pointer hover:shadow-lg transition">
                    <img 
                        src={store.image} 
                        alt={store.name} 
                        className="w-24 h-24 object-cover flex-shrink-0"
                    />
                    <div className="p-3 flex flex-col justify-between flex-1">
                        <p className="text-lg font-bold text-gray-800 truncate">{store.name}</p>
                        <div className="flex items-center text-sm text-gray-500 my-1">
                            <Star size={14} className="text-yellow-500 fill-yellow-500 mr-1" />
                            <span className="font-semibold text-gray-700">{store.rating}</span>
                            <span className="ml-3 text-xs">· {store.distance}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                            {store.tags.map((tag, index) => (
                                <span key={index} className="text-xs text-brand-orange bg-brand-light px-2 py-0.5 rounded-full font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="bg-gray-50 min-h-full">
            <LocationHeader />
            <SearchBar />
            <BannerSlider /> 
            
            <MerchantAdSection /> {/* 新增商家/加盟广告区域 */}

            <h2 className="text-xl font-bold text-gray-800 px-4 mb-3">美食分类</h2>
            <CategoriesSection />

            <h2 className="text-xl font-bold text-gray-800 px-4 mb-3">超值优惠 (代金券)</h2>
            <div className="overflow-x-auto whitespace-nowrap pb-4">
                <div className="flex space-x-4 pl-4 pr-1">
                    {VOUCHERS.map((voucher) => (
                        <VoucherCard key={voucher.id} voucher={voucher} />
                    ))}
                </div>
            </div>
            
            <StoresList />
            
            <div className="text-center text-gray-400 text-sm py-8">
                --- 到底啦 ---
            </div>
        </div>
    );
};

export default Home;