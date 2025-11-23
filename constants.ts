import { Category, Message, Store, Voucher, TabRoute, MerchantAd } from './types';

// --- 品牌与设计常量 ---
export const APP_NAME = "食惠宝";
export const SLOGAN = "膳待天下，美食、实惠，每一位";
export const PRIMARY_COLOR = '#FF6600'; // Grab/Bolt 风格的主橘色
export const BACKGROUND_COLOR = '#F5F5F5'; // 浅灰色背景

// --- 首页数据 ---
// Note: Icon names mapped to Lucide-React equivalents
export const CATEGORIES: Category[] = [
  { id: 'all', name: '全部', icon: 'LayoutGrid' },
  { id: 'hotpot', name: '火锅', icon: 'Soup' }, 
  { id: 'chinese', name: '中餐', icon: 'Utensils' }, 
  { id: 'jianghu', name: '江湖菜', icon: 'Flame' }, 
  { id: 'soup', name: '汤锅', icon: 'ChefHat' }, 
  { id: 'bbq', name: '烤肉', icon: 'Beef' }, 
  { id: 'dessert', name: '甜品', icon: 'IceCream' }, 
  { id: 'snack', name: '小吃', icon: 'Popcorn' }, 
  { id: 'drink', name: '饮品', icon: 'Coffee' }, 
];

export const STORES: Store[] = [
  {
    id: 1,
    name: "渝小北鲜火锅 (荣昌店)",
    image: "https://picsum.photos/400/300?random=1",
    rating: 4.8,
    distance: "1.2km",
    category: "火锅",
    tags: ["源于重庆", "陈老五"]
  },
  {
    id: 2,
    name: "三和奇江记餐饮",
    image: "https://picsum.photos/400/300?random=2",
    rating: 4.6,
    distance: "2.5km",
    category: "中餐",
    tags: ["荣昌卤鹅", "早蒸牛肉"]
  },
  {
    id: 3,
    name: "韩盛自助烤肉",
    image: "https://picsum.photos/400/300?random=3",
    rating: 4.9,
    distance: "500m",
    category: "烤肉",
    tags: ["肉食者天堂", "韩式风味"]
  }
];

export const VOUCHERS: Voucher[] = [
  {
    id: 101,
    storeId: 1,
    title: "100元代金券 (全场通用)",
    price: 88,
    originalPrice: 100,
    sold: 1200
  },
  {
    id: 102,
    storeId: 2,
    title: "双人超值套餐",
    price: 128,
    originalPrice: 188,
    sold: 530
  },
  {
    id: 103,
    storeId: 3,
    title: "单人自助午餐",
    price: 69,
    originalPrice: 89,
    sold: 3000
  }
];

export const MESSAGES: Message[] = [
  {
    id: 1,
    type: 'friend',
    title: "好友送券通知",
    content: "好友送您1份在【荣昌区渝小北鲜火锅店】使用的套餐券。",
    time: "2025-11-21 21:07:56",
    read: false,
    actionLabel: "查看"
  },
  {
    id: 2,
    type: 'system',
    title: "系统维护通知",
    content: "为了提供更好的服务，系统将于今晚进行升级。",
    time: "2025-11-20 10:00:00",
    read: true
  }
];

// --- 底部导航栏路由 (修改) ---
export const TAB_ROUTES: TabRoute[] = [
  { name: 'Home', title: '首页', icon: 'Home' },
  // 将 Messages 替换为 MerchantCenter
  { name: 'MerchantCenter', title: '商家中心', icon: 'Store' }, 
  { name: 'Profile', title: '我的', icon: 'User' },
];

// --- 轮播图数据 ---
export const BANNERS = [
  {
    id: 1,
    image: "https://picsum.photos/800/400?random=banner1",
    alt: "食惠宝精选美食"
  },
  {
    id: 2,
    image: "https://picsum.photos/800/400?random=banner2",
    alt: "超值代金券天天抢"
  },
  {
    id: 3,
    image: "https://picsum.photos/800/400?random=banner3",
    alt: "新人注册大礼包"
  }
];

// --- 商家/加盟广告数据 (新增) ---
export const MERCHANT_ADS: MerchantAd[] = [
  {
    id: 1,
    title: "商家加盟：0佣金，大流量",
    description: "立即入驻，开启线上新商机。",
    bgColor: "bg-green-600",
    icon: "Megaphone"
  },
  {
    id: 2,
    title: "供应链合作：高效率，低成本",
    description: "成为我们的供货伙伴。",
    bgColor: "bg-blue-600",
    icon: "Truck"
  },
  {
    id: 3,
    title: "城市代理：区域独家，共赢未来",
    description: "抢占市场空白，实现财富增长。",
    bgColor: "bg-purple-600",
    icon: "Map"
  }
];