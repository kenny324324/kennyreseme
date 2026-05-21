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
  // {
  //   slug: 'justai',
  //   title: 'JustAI 客服系統',
  //   description: 'AI聊天機器人介面開發練習專案，整合RAG技術與OpenAI API，從Figma設計稿實作完整客服對話介面',
  //   categories: ['maui', 'ai'],
  //   techStack: ['RAG技術', 'OpenAI API', 'AI聊天介面'],
  //   coverImage: `${base}/documents/projects/Justai/cover.png`,
  //   links: {}
  // },
  {
    slug: 'pickup',
    title: 'Pickup 取貨吧',
    description: '整合多種主流物流的一站式包裹追蹤工具，支援 AI 截圖辨識與即時推播通知',
    categories: ['swift'],
    techStack: ['SwiftUI', 'Firebase', 'Gemini AI', 'SwiftData', 'WidgetKit', 'StoreKit 2', '自主學習'],
    coverImage: `${base}/documents/projects/Pickup/cover.png`,
    links: {
      appstore: 'https://apps.apple.com/tw/app/pickup-%E5%8F%96%E8%B2%A8%E5%90%A7-%E5%8C%85%E8%A3%B9%E8%BF%BD%E8%B9%A4-%E8%B2%A8%E6%85%8B%E6%9F%A5%E8%A9%A2%E5%B7%A5%E5%85%B7/id6758759908'
    },
    featured: true
  },
  {
    slug: 'mish',
    title: 'Mish 閱讀筆記',
    description: '以「極簡」為核心的 Flutter 閱讀紀錄 APP，整合 Google Books API、Firebase 雲端同步、閱讀統計與多語言支援，已上架 App Store',
    categories: ['flutter'],
    techStack: ['Flutter', 'Firebase', 'Google Books API', 'RevenueCat', '多語言（7種）', '自主學習'],
    coverImage: `${base}/documents/projects/MIsh/cover.png`,
    links: {
      appstore: 'https://apps.apple.com/tw/app/mish-%E9%96%B1%E8%AE%80%E7%AD%86%E8%A8%98-%E6%95%B4%E7%90%86%E6%83%B3%E6%B3%95%E8%88%87%E6%9B%B8%E5%96%AE%E7%AE%A1%E7%90%86/id6749848120'
    },
    featured: true
  },
  {
    slug: 'findtoilets',
    title: 'FindToilets 找廁所',
    description: '專為台灣設計的公廁地圖查詢工具，整合環境部公開資料與社群評分功能',
    categories: ['swift'],
    techStack: ['SwiftUI', 'MapKit', 'CloudKit', '自主學習'],
    coverImage: `${base}/documents/projects/FindToilets/cover.png`,
    links: {
      appstore: 'https://apps.apple.com/tw/app/findtoilets-%E6%89%BE%E5%BB%81%E6%89%80-%E9%99%84%E8%BF%91%E5%BB%81%E6%89%80%E5%9C%B0%E5%9C%96%E5%B7%A5%E5%85%B7/id6752564383'
    },
    featured: true
  },
  {
    slug: 'mino',
    title: 'Mino 待辦清單',
    description: 'SwiftUI開發的待辦清單APP，具備推播提醒、iCloud資料儲存、UI規劃與App Store上架',
    categories: ['swift'],
    techStack: ['SwiftUI', 'iCloud', '推播提醒', 'App Store', '自主學習'],
    coverImage: `${base}/documents/projects/Mino/cover.png`,
    links: {
      appstore: 'https://apps.apple.com/tw/app/mino/id6746743276'
    }
  },
  {
    slug: 'spostats',
    title: 'spo.stats for Spotify',
    description: '以圖表視覺化為核心的 Spotify 個人聆聽統計 APP，支援排名趨勢追蹤、多維度聆聽數據分析與 CloudKit 跨裝置同步',
    categories: ['swift'],
    techStack: ['SwiftUI', 'Spotify API', 'OAuth 2.0 PKCE', 'CloudKit', '自主學習'],
    coverImage: `${base}/documents/projects/SpoStats/cover.png`,
    links: {
      appstore: 'https://apps.apple.com/tw/app/spostats/id6754908333'
    }
  },
  {
    slug: 'soulfeed',
    title: 'SoulFeed',
    description: '以 Flutter 開發的 AI 角色留言板 MVP，整合 Gemini、DeepSeek、登入與歷史紀錄功能',
    categories: ['flutter'],
    techStack: ['Flutter', 'Gemini AI', 'DeepSeek', 'Firebase', '自主學習'],
    coverImage: `${base}/documents/projects/SoulFeed/cover.png`,
    links: {
      github: 'https://github.com/kenny324324/chat.git'
    }
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
