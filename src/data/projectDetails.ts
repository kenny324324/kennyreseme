import {
  parseBackground,
  parseHighlights,
  parseChallenges,
  parseProcess,
  parseReflection,
  parseLinks,
  parseCustomSections
} from '../utils/contentLoader';

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  categories: string[];
  techStack: string[];
  coverImage: string;
  detailImage: string;
  links: {
    appstore?: string;
    googleplay?: string;
    figma?: string;
    github?: string;
  };
  background: string;
  highlights: {
    title: string;
    description: string;
    media?: string;
    mediaType?: 'video' | 'image';
  }[];
  challenges: {
    title: string;
    situation: string;
    difficulty: string;
    solution: string;
    result: string;
  }[];
  process: {
    design: string[];
    development: string[];
    designImage?: string;
    developmentImage?: string;
  };
  reflection: string[];
  customSections: {
    title: string;
    icon: string;
    order: number;
    style: 'list' | 'cards';
    items: string[];
  }[];
}

const base = '/kennyreseme';

// 專案基本資訊（不從 txt 載入的部分）
interface ProjectMeta {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  categories: string[];
  techStack: string[];
  folder: string; // txt 檔案所在資料夾名稱
  defaultLinks?: {
    appstore?: string;
    googleplay?: string;
    figma?: string;
    github?: string;
  };
}

const projectMeta: Record<string, ProjectMeta> = {
  bus: {
    slug: 'bus',
    title: '跳蛙公車2.0',
    subtitle: '公司商業專案｜跨平台交通購票 App 改版',
    description: '跳蛙公車 2.0 是公司承接的交通購票 App 改版專案。我在專案中負責 Figma 介面規劃與 .NET MAUI App 開發，參與購票流程、募集路線地圖、Google 登入與 Firebase 推播等功能，協助產品完成 App Store 與 Google Play 上架。',
    categories: ['maui'],
    techStack: ['.NET MAUI', 'Figma', 'Google登入', '地圖整合', 'Firebase推播', 'UI改版'],
    folder: 'Bus',
    defaultLinks: {
      appstore: 'https://apps.apple.com/tw/app/%E8%B7%B3%E8%9B%99%E5%85%AC%E8%BB%8A2-0/id6667097903',
      googleplay: 'https://play.google.com/store/apps/details?id=tw.wowbus.www&hl=zh_TW'
    }
  },
  tuan: {
    slug: 'tuan',
    title: '今皓TUAN AI助理APP',
    subtitle: '公司商業專案｜AI 虛擬 IP 互動 App',
    description: '今皓 TUAN AI 助理 App 是公司承接的虛擬 IP 互動應用，目標是讓使用者透過語音或文字和授權藝人角色對話。我參與 .NET MAUI App 開發，負責第三方登入、語音輸入、AI 助理互動與 Google 行事曆流程，並協助串接多項 AI 與影像相關服務。',
    categories: ['maui', 'ai'],
    techStack: ['.NET MAUI', 'AI助理', '語音輸入', '第三方登入', 'Google行事曆'],
    folder: 'Tuan'
  },
  pos: {
    slug: 'pos',
    title: '島嶼生吐司 手持POS',
    subtitle: '公司商業專案｜內部營運手持 POS',
    description: '島嶼生吐司手持 POS 是供內部司機、門市與倉庫使用的營運 App，用來處理進貨、銷貨、庫存核對與單據追蹤。我負責 .NET MAUI App 與前端實作，串接後端 API 並整合條碼掃描流程，讓現場人員能用掃描與數量核對完成日常作業。',
    categories: ['maui'],
    techStack: ['.NET MAUI', 'API串接', '硬體整合', '條碼掃描', '內部系統'],
    folder: 'POS'
  },
  justai: {
    slug: 'justai',
    title: 'JustAI 客服系統',
    subtitle: 'AI 聊天機器人介面',
    description: 'AI聊天機器人介面開發練習專案，整合RAG技術與OpenAI API，從Figma設計稿實作完整客服對話介面',
    categories: ['maui', 'ai'],
    techStack: ['RAG技術', 'OpenAI API', 'AI聊天介面'],
    folder: 'Justai'
  },
  mino: {
    slug: 'mino',
    title: 'Mino 待辦清單',
    subtitle: '個人作品｜第一個 SwiftUI 上架 App',
    description: 'Mino 是我第一次把個人 App 從想法做到 App Store 上架的作品，題目選擇待辦清單，是為了完整練習 iOS App 常見的資料、提醒與同步流程。我負責 UI 設計、SwiftUI 開發、待辦資料管理、iCloud 同步與本地推播提醒，也透過這個專案建立完整的 iOS 開發與上架流程經驗。',
    categories: ['swift'],
    techStack: ['SwiftUI', 'iCloud', '推播提醒', 'App Store', '自主學習'],
    folder: 'Mino'
  },
  mish: {
    slug: 'mish',
    title: 'Mish 閱讀筆記',
    subtitle: '個人作品｜Flutter 閱讀紀錄與書籍管理 App',
    description: 'Mish 從「極簡書櫃」這個概念出發，想讓閱讀紀錄、心得與書籍探索都能維持輕量、不打擾。我使用 Flutter 完成跨平台介面與功能架構，整合 Google Books API、Firebase 雲端同步、閱讀統計、7 種語言與訂閱功能；這也是我第一個 Flutter 專案，累積了 RevenueCat 訂閱與 App Store 審核經驗。',
    categories: ['flutter'],
    techStack: ['Flutter', 'Firebase', 'Google Books API', 'RevenueCat', 'Provider', '多語言（7種）', '自主學習'],
    folder: 'MIsh',
    defaultLinks: {
      appstore: 'https://apps.apple.com/tw/app/mish-%E9%96%B1%E8%AE%80%E7%AD%86%E8%A8%98-%E6%95%B4%E7%90%86%E6%83%B3%E6%B3%95%E8%88%87%E6%9B%B8%E5%96%AE%E7%AE%A1%E7%90%86/id6749848120'
    }
  },
  pickup: {
    slug: 'pickup',
    title: 'Pickup 取貨吧',
    subtitle: '個人作品｜SwiftUI 包裹追蹤與貨態查詢 App',
    description: 'Pickup 取貨吧的出發點，是解決自己網購時需要在不同物流網站之間來回查詢的麻煩。這款 App 以 SwiftUI 搭配 Firebase 建立完整架構，實作 AI 截圖辨識、物流查詢、即時推播、小工具、統計儀表板與 StoreKit 2 訂閱功能，讓待取包裹可以集中管理；目前已上架 App Store。',
    categories: ['swift'],
    techStack: ['SwiftUI', 'Firebase', 'Gemini AI', 'SwiftData', 'WidgetKit', 'StoreKit 2', '自主學習'],
    folder: 'Pickup'
  },
  findtoilets: {
    slug: 'findtoilets',
    title: 'FindToilets 找廁所',
    subtitle: '個人作品｜台灣公廁地圖查詢 App',
    description: 'FindToilets 來自外出時臨時找不到廁所的不便，因此我把它做成專門查詢台灣公廁的地圖 App。專案使用 SwiftUI、MapKit 與 CloudKit，整合環境部公開資料、地點分組、樓層解析、動態標記管理與社群評分功能，讓使用者能更快找到附近可用的廁所；目前已上架 App Store。',
    categories: ['swift'],
    techStack: ['SwiftUI', 'MapKit', 'CloudKit', 'CoreLocation'],
    folder: 'FindToilets'
  },
  spostats: {
    slug: 'spostats',
    title: 'spo.stats for Spotify',
    subtitle: '個人作品｜Spotify 聆聽統計與圖表 App',
    description: 'spo.stats 來自我想更直覺追蹤 Spotify 聆聽變化的需求，因此把歌曲、藝人與專輯排名做成以圖表為核心的 App。我使用 SwiftUI 原生繪圖實作排名趨勢、Spotify API 授權、歷史資料追蹤、CloudKit 跨裝置同步與圖表動畫；專案已上架 App Store，但受 Spotify API 配額政策限制，目前定位為個人使用工具。',
    categories: ['swift'],
    techStack: ['SwiftUI', 'Spotify API', 'OAuth 2.0 PKCE', 'CloudKit', '自主學習'],
    folder: 'SpoStats',
    defaultLinks: {
      appstore: 'https://apps.apple.com/tw/app/spostats/id6754908333'
    }
  },
  soulfeed: {
    slug: 'soulfeed',
    title: 'SoulFeed',
    subtitle: '個人練習｜Flutter AI 角色留言板 MVP',
    description: 'SoulFeed 嘗試把 AI 回覆包裝成像社群留言一樣的互動，而不是一般聊天機器人的單一回答。使用者輸入今天做的一件事後，多個 AI 角色會給出評論、分數與後續對話。我用 Flutter 完成介面、角色提示詞、登入、歷史紀錄、Firebase 同步與 Gemini / DeepSeek 串接；目前為練習專案，尚未上架。',
    categories: ['flutter'],
    techStack: ['Flutter', 'Gemini AI', 'DeepSeek', 'Firebase', '第三方登入', '自主學習'],
    folder: 'SoulFeed',
    defaultLinks: {
      github: 'https://github.com/kenny324324/chat.git'
    }
  }
};

/**
 * 根據專案 slug 載入完整的專案詳情
 * 基本資訊從 projectMeta 取得，詳細內容從 txt 檔案動態載入
 */
function loadProjectDetail(slug: string): ProjectDetail | undefined {
  const meta = projectMeta[slug];
  if (!meta) return undefined;

  const folder = meta.folder;

  // 從 txt 檔案載入動態內容
  const background = parseBackground(folder);
  const highlights = parseHighlights(folder);
  const challenges = parseChallenges(folder);
  const process = parseProcess(folder);
  const reflection = parseReflection(folder);
  const txtLinks = parseLinks(folder);
  const customSections = parseCustomSections(folder);

  // 合併連結（txt 檔案的連結優先）
  const links = {
    ...meta.defaultLinks,
    ...txtLinks
  };

  return {
    slug: meta.slug,
    title: meta.title,
    subtitle: meta.subtitle,
    description: meta.description,
    categories: meta.categories,
    techStack: meta.techStack,
    coverImage: `${base}/documents/projects/${folder}/cover.png`,
    detailImage: `${base}/documents/projects/${folder}/detailcover.png`,
    links,
    background,
    highlights,
    challenges,
    process,
    reflection,
    customSections
  };
}

// 預先載入所有專案詳情（建置時執行）
export const projectDetails: Record<string, ProjectDetail> = {};

for (const slug of Object.keys(projectMeta)) {
  const detail = loadProjectDetail(slug);
  if (detail) {
    projectDetails[slug] = detail;
  }
}

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails[slug];
}

export function getAllProjectSlugs(): string[] {
  return Object.keys(projectDetails);
}
