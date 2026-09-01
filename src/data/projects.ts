import type { Language } from '../i18n';

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
    github?: string;
  };
  featured?: boolean;
  metrics?: ProjectMetric[];
}

export interface ProjectMetric {
  value: string;
  label: string;
}

const base = '/kennyreseme';

export const appProjects: Project[] = [
  {
    slug: 'bus',
    title: '跳蛙公車2.0',
    description: '公司商業專案中的跨平台交通 App，參與 UI/UX 規劃與 .NET MAUI 開發，負責購票、地圖、登入與推播等功能',
    categories: ['maui'],
    techStack: ['.NET MAUI', 'Figma', 'Google登入', '地圖整合', 'Firebase推播', 'UI改版'],
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
    description: '公司商業專案中的 AI 虛擬 IP 互動 App，參與 .NET MAUI 開發，負責登入、語音互動與 Google 行事曆流程',
    categories: ['maui', 'ai'],
    techStack: ['.NET MAUI', 'AI助理', '語音輸入', '第三方登入', 'Google行事曆'],
    coverImage: `${base}/documents/projects/Tuan/cover.png`,
    links: {}
  },
  {
    slug: 'pos',
    title: '島嶼生吐司 手持POS',
    description: '島嶼生吐司內部營運用手持 POS，負責 .NET MAUI App 實作、API 串接與條碼掃描流程',
    categories: ['maui'],
    techStack: ['.NET MAUI', 'API串接', '硬體整合', '條碼掃描', '內部系統'],
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
    description: '為台灣網購族設計的包裹追蹤 App，用 SwiftUI 串起物流查詢、AI 截圖辨識、推播、小工具與訂閱功能',
    categories: ['swift'],
    techStack: ['SwiftUI', 'Firebase', 'Gemini AI', 'SwiftData', 'WidgetKit', 'StoreKit 2', '自主學習'],
    coverImage: `${base}/documents/projects/Pickup/cover.png`,
    links: {
      appstore: 'https://apps.apple.com/tw/app/pickup-%E5%8F%96%E8%B2%A8%E5%90%A7-%E5%8C%85%E8%A3%B9%E8%BF%BD%E8%B9%A4-%E8%B2%A8%E6%85%8B%E6%9F%A5%E8%A9%A2%E5%B7%A5%E5%85%B7/id6758759908'
    },
    metrics: [
      { value: '2,000+', label: '首次下載' },
      { value: '3,000+', label: '使用者' },
      { value: '4,000+', label: '追蹤包裹' }
    ],
    featured: true
  },
  {
    slug: 'mish',
    title: 'Mish 閱讀筆記',
    description: '以極簡書櫃為概念的 Flutter 閱讀紀錄 App，整合書籍搜尋、閱讀統計、Firebase 同步、多語言與訂閱功能',
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
    description: '專為外出找廁所情境設計的台灣公廁地圖 App，使用 SwiftUI 整合公開資料、MapKit 與社群評分',
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
    description: '第一個獨立完成並上架的 SwiftUI App，從 UI 設計、待辦資料、iCloud 同步到推播提醒全程實作',
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
    description: '把 Spotify 聆聽習慣轉成視覺化圖表的 SwiftUI App，自製排名趨勢圖並整合 CloudKit 同步',
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
    description: 'Flutter AI 角色留言板 MVP，練習把 AI 回覆設計成像社群留言的互動體驗，整合登入與歷史紀錄',
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
    description: '智慧餐飲點餐機 UI/UX 設計規劃，使用 Figma 完成介面設計稿，改善用戶點餐體驗與操作流程',
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

const appProjectTranslations: Record<string, Partial<Pick<Project, 'title' | 'description' | 'techStack' | 'metrics'>>> = {
  bus: {
    title: 'WowBus 2.0',
    description: 'A commercial cross-platform transit app where I supported UI/UX planning and .NET MAUI development for ticketing, maps, login, and push notifications.',
    techStack: ['.NET MAUI', 'Figma', 'Google Login', 'Maps', 'Firebase Push', 'UI Redesign']
  },
  tuan: {
    title: 'TUAN AI Assistant App',
    description: 'A commercial AI virtual-IP interaction app where I worked on .NET MAUI development, login, voice interaction, and Google Calendar flows.',
    techStack: ['.NET MAUI', 'AI Assistant', 'Voice Input', 'Third-party Login', 'Google Calendar']
  },
  pos: {
    title: 'Island Toast Handheld POS',
    description: 'An internal handheld POS app for Island Toast, covering .NET MAUI implementation, API integration, and barcode-based operation flows.',
    techStack: ['.NET MAUI', 'API Integration', 'Hardware Integration', 'Barcode Scanning', 'Internal System']
  },
  pickup: {
    title: 'Pickup',
    description: 'A SwiftUI package tracking app for online shoppers in Taiwan, combining shipment lookup, AI screenshot recognition, push notifications, widgets, and subscriptions.',
    techStack: ['SwiftUI', 'Firebase', 'Gemini AI', 'SwiftData', 'WidgetKit', 'StoreKit 2', 'Self-initiated'],
    metrics: [
      { value: '2,000+', label: 'First Downloads' },
      { value: '3,000+', label: 'Users' },
      { value: '4,000+', label: 'Packages' }
    ]
  },
  mish: {
    title: 'Mish Reading Notes',
    description: 'A minimalist Flutter reading tracker that integrates book search, reading stats, Firebase sync, multilingual support, and subscriptions.',
    techStack: ['Flutter', 'Firebase', 'Google Books API', 'RevenueCat', '7 Languages', 'Self-initiated']
  },
  findtoilets: {
    title: 'FindToilets',
    description: 'A Taiwan public restroom map app built with SwiftUI, public data, MapKit, dynamic annotations, and community ratings.',
    techStack: ['SwiftUI', 'MapKit', 'CloudKit', 'Self-initiated']
  },
  mino: {
    title: 'Mino To-Do List',
    description: 'My first independently shipped SwiftUI app, covering UI design, task data, iCloud sync, local reminders, and App Store release.',
    techStack: ['SwiftUI', 'iCloud', 'Local Notifications', 'App Store', 'Self-initiated']
  },
  spostats: {
    title: 'spo.stats for Spotify',
    description: 'A SwiftUI app that turns Spotify listening habits into visual charts, with custom ranking trend charts and CloudKit sync.',
    techStack: ['SwiftUI', 'Spotify API', 'OAuth 2.0 PKCE', 'CloudKit', 'Self-initiated']
  },
  soulfeed: {
    title: 'SoulFeed',
    description: 'A Flutter AI character feed MVP that explores AI replies as social-style comments, with login, history, and Firebase sync.',
    techStack: ['Flutter', 'Gemini AI', 'DeepSeek', 'Firebase', 'Self-initiated']
  }
};

const systemProjectTranslations: Record<string, Partial<Pick<Project, 'title' | 'description' | 'techStack'>>> = {
  voting: {
    title: 'Yang Sheng Golf Course E-Voting System',
    description: 'An MVC-based e-voting system for a golf course, including user authentication, vote management, and result statistics.',
    techStack: ['MVC Architecture', 'System Development', 'Database Design']
  },
  screenshot: {
    title: 'Luxgen Screenshot Recognition',
    description: 'An automated screenshot recognition workflow using Appium UI testing and Python scripts to parse data and write results back to a database.',
    techStack: ['Python', 'Appium', 'Automated Testing', 'Database Integration']
  },
  smartdining: {
    title: 'Southern Taiwan Smart Dining',
    description: 'UI/UX planning for a smart dining kiosk, using Figma to improve ordering flows and user experience.',
    techStack: ['Figma Design', 'UI/UX Planning', 'User Experience']
  }
};

export function getAppProjects(lang: Language): Project[] {
  return localizeProjects(appProjects, appProjectTranslations, lang);
}

export function getSystemProjects(lang: Language): Project[] {
  return localizeProjects(systemProjects, systemProjectTranslations, lang);
}

function localizeProjects(
  projects: Project[],
  translations: Record<string, Partial<Pick<Project, 'title' | 'description' | 'techStack' | 'metrics'>>>,
  lang: Language
): Project[] {
  if (lang !== 'en') return projects;
  return projects.map((project) => ({
    ...project,
    ...translations[project.slug]
  }));
}
