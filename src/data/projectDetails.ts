import {
  parseBackground,
  parseHighlights,
  parseChallenges,
  parseProcess,
  parseReflection,
  parseLinks
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
    subtitle: '跨平台公車購票與交通管理系統',
    description: '跳蛙公車2.0幫助民眾在規劃公車行程時更快地完成購票和在地圖上自訂創建募集路線',
    categories: ['maui'],
    techStack: ['.NET MAUI', 'Google登入', '地圖整合', 'Firebase推播', 'UI改版'],
    folder: 'Bus',
    defaultLinks: {
      appstore: 'https://apps.apple.com/tw/app/%E8%B7%B3%E8%9B%99%E5%85%AC%E8%BB%8A2-0/id6667097903',
      googleplay: 'https://play.google.com/store/apps/details?id=tw.wowbus.www&hl=zh_TW'
    }
  },
  tuan: {
    slug: 'tuan',
    title: '今皓TUAN AI助理APP',
    subtitle: 'AI 驅動的虛擬 IP 互動應用',
    description: 'AI 驅動的虛擬 IP 互動應用，整合第三方登入、AI助理聊天控制Google行事曆功能',
    categories: ['maui', 'ai'],
    techStack: ['.NET MAUI', '第三方登入', 'AI助理', 'Google行事曆'],
    folder: 'Tuan'
  },
  pos: {
    slug: 'pos',
    title: '島嶼生吐司 手持POS',
    subtitle: '商業手持 POS 系統',
    description: '商業手持 POS 系統，整合條碼掃描硬體、API串接與特殊機型功能實作',
    categories: ['maui'],
    techStack: ['.NET MAUI', '硬體整合', '條碼掃描', 'API串接'],
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
    subtitle: 'SwiftUI 個人待辦管理 APP',
    description: 'SwiftUI開發的待辦清單APP，具備推播提醒、iCloud資料儲存、UI規劃與App Store上架',
    categories: ['swift'],
    techStack: ['SwiftUI', 'iCloud', '推播提醒', 'App Store', '自主學習'],
    folder: 'Mino'
  },
  mish: {
    slug: 'mish',
    title: 'MIsh 個人書櫃',
    subtitle: 'Flutter 跨平台書籍管理 APP',
    description: 'Flutter開發的個人書櫃APP，具備第三方API串接、Apple登入、Firebase資料儲存與App Store上架',
    categories: ['flutter'],
    techStack: ['Flutter', 'Firebase', 'Apple登入', 'App Store', '自主學習'],
    folder: 'MIsh'
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
    reflection
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
