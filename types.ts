export interface Store {
  id: number;
  name: string;
  image: string;
  rating: number;
  distance: string;
  category: string;
  tags: string[];
}

export interface Voucher {
  id: number;
  storeId: number;
  title: string;
  price: number;
  originalPrice: number;
  sold: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Message {
  id: number;
  type: 'system' | 'friend';
  title: string;
  content: string;
  time: string;
  read: boolean;
  actionLabel?: string;
}

export interface TabRoute {
  name: string;
  title: string;
  icon: string;
}

// 供商家和供应链加盟使用的广告信息
export interface MerchantAd {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  icon: string;
}

export enum Tab {
  HOME = 'Home',
  MERCHANT = 'MerchantCenter', // 消息 (Messages) 被替换为 商家中心 (MerchantCenter)
  PROFILE = 'Profile'
}

// Ensure this matches the strings used in App.tsx state
export type TabName = 'Home' | 'MerchantCenter' | 'Profile';