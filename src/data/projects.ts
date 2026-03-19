export interface Project {
  slug: string;
  title: string;
  description: string;
  categories: string[];
  techStack: string[];
  coverImage: string;
  links: {
    appstore?: string;
    googleplay?: string;
    figma?: string;
  };
  featured?: boolean;
}

const base = '/kennyreseme';

export const appProjects: Project[] = [
  {
    slug: 'bus',
    title: '跳蛙公車2.0',
    description: '完整的跨平台購票與交通管理系統，支援單程票、多日票購買，整合地圖服務、Google登入與Firebase推播通知',
    categories: ['maui'],
    techStack: ['.NET MAUI', 'Google登入', '地圖整合', 'Firebase推播', 'UI改版'],
    coverImage: `${base}/documents/projects/Bus/cover.png`,
    links: {
      appstore: 'https://apps.apple.com/tw/app/%E8%B7%B3%E8%9B%99%E5%85%AC%E8%BB%8A2-0/id6667097903',
      googleplay: 'https://play.google.com/store/apps/details?id=tw.wowbus.www&hl=zh_TW'
    },
    featured: true
  },
  {
    slug: 'tuan',
    title: '今皓TUAN AI助理APP',
    description: 'AI 驅動的虛擬 IP 互動應用，整合第三方登入、AI助理聊天控制Google行事曆功能',
    categories: ['maui', 'ai'],
    techStack: ['.NET MAUI', '第三方登入', 'AI助理', 'Google行事曆'],
    coverImage: `${base}/documents/projects/Tuan/cover.png`,
    links: {}
  },
  {
    slug: 'pos',
    title: '島嶼生吐司 手持POS',
    description: '商業手持 POS 系統，整合條碼掃描硬體、API串接與特殊機型功能實作',
    categories: ['maui'],
    techStack: ['.NET MAUI', '硬體整合', '條碼掃描', 'API串接'],
    coverImage: `${base}/documents/projects/POS/cover.png`,
    links: {}
  },
  {
    slug: 'justai',
    title: 'JustAI 客服系統',
    description: 'AI聊天機器人介面開發練習專案，整合RAG技術與OpenAI API，從Figma設計稿實作完整客服對話介面',
    categories: ['maui', 'ai'],
    techStack: ['RAG技術', 'OpenAI API', 'AI聊天介面'],
    coverImage: `${base}/documents/projects/Justai/cover.png`,
    links: {}
  },
  {
    slug: 'mino',
    title: 'Mino 待辦清單',
    description: 'SwiftUI開發的待辦清單APP，具備推播提醒、iCloud資料儲存、UI規劃與App Store上架',
    categories: ['swift'],
    techStack: ['SwiftUI', 'iCloud', '推播提醒', 'App Store', '自主學習'],
    coverImage: `${base}/documents/projects/Mino/cover.png`,
    links: {}
  },
  {
    slug: 'mish',
    title: 'Mish 閱讀筆記',
    description: '整理想法與書單管理的 Flutter APP，具備第三方API串接、Apple登入、Firebase資料儲存與App Store上架',
    categories: ['flutter'],
    techStack: ['Flutter', 'Firebase', 'Apple登入', 'App Store', '自主學習'],
    coverImage: `${base}/documents/projects/MIsh/cover.png`,
    links: {}
  },
  {
    slug: 'pickup',
    title: 'Pickup 取貨吧',
    description: '包裹追蹤・貨態查詢工具，以 Swift 開發的個人自主學習專案',
    categories: ['swift'],
    techStack: ['SwiftUI', '自主學習'],
    coverImage: `${base}/documents/projects/Pickup/cover.png`,
    links: {}
  },
  {
    slug: 'findtoilets',
    title: 'FindToilets 找廁所',
    description: '附近廁所地圖查詢工具，以 Swift 開發的個人自主學習專案',
    categories: ['swift'],
    techStack: ['SwiftUI', '自主學習'],
    coverImage: `${base}/documents/projects/FindToilets/cover.png`,
    links: {}
  },
  {
    slug: 'spostats',
    title: 'spo.stats for Spotify',
    description: 'Spotify 個人聆聽統計查詢工具，以 Swift 開發的個人自主學習專案',
    categories: ['swift'],
    techStack: ['SwiftUI', 'Spotify API', '自主學習'],
    coverImage: `${base}/documents/projects/SpoStats/cover.png`,
    links: {}
  },
  {
    slug: 'soulfeed',
    title: 'SoulFeed',
    description: '以 Flutter 開發的個人自主學習專案',
    categories: ['flutter'],
    techStack: ['Flutter', '自主學習'],
    coverImage: `${base}/documents/projects/SoulFeed/cover.png`,
    links: {}
  },
];

export const systemProjects: Project[] = [
  {
    slug: 'voting',
    title: '揚昇球場 電子投票系統',
    description: '高爾夫球場電子投票系統開發，採用MVC架構設計，具備用戶認證、投票管理、結果統計等功能',
    categories: ['system'],
    techStack: ['MVC架構', '系統開發', '資料庫設計'],
    coverImage: '',
    links: {}
  },
  {
    slug: 'screenshot',
    title: '那智捷 截圖辨識',
    description: '自動化截圖辨識系統，使用Appium進行UI測試，Python腳本解析資料並回存資料庫，提升測試效率',
    categories: ['automation'],
    techStack: ['Python', 'Appium', '自動化測試', '資料庫整合'],
    coverImage: '',
    links: {}
  },
  {
    slug: 'smartdining',
    title: '大南方智慧餐飲',
    description: '智慧餐飲點餐機UI/UX設計規劃，使用Figma完成介面設計稿，優化用戶點餐體驗與操作流程',
    categories: ['ui-design'],
    techStack: ['Figma設計', 'UI/UX規劃', '用戶體驗'],
    coverImage: '',
    links: {}
  }
];

export const systemProjectIcons: Record<string, string> = {
  voting: 'fas fa-vote-yea',
  screenshot: 'fas fa-robot',
  smartdining: 'fas fa-utensils'
};
