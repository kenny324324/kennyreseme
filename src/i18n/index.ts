import type { Language } from '../types';

export type { Language };

export const defaultLang: Language = 'zh-TW';

export const languages: Record<Language, string> = {
  'zh-TW': '繁中',
  en: 'EN'
};

export const ui = {
  'zh-TW': {
    siteDescription: 'UI/UX 與 App 開發工程師，專精 SwiftUI、Flutter、.NET MAUI 開發，具備 Figma 設計與 AI 整合經驗',
    nav: {
      home: '首頁',
      about: '關於我',
      skills: '專業技能',
      projects: '專案作品',
      pmProjects: 'PM 協作',
      experience: '工作經歷',
      resume: '下載履歷',
      backHome: '返回首頁',
      menu: '切換選單'
    },
    hero: {
      eyebrow: '您好，我是',
      location: '台北，台灣 · Taipei, Taiwan',
      availability: 'Available for work',
      description:
        '我主要做 <mark>App 介面規劃</mark> 與 <mark>跨平台開發</mark>，能從需求整理、<mark>畫面原型</mark>、功能實作一路做到上架與後續調整。公司專案以 <mark>.NET MAUI</mark> 為主，個人作品則持續使用 <mark>SwiftUI</mark> 與 <mark>Flutter</mark> 完成 App，並嘗試整合 <mark>AI</mark>、推播、雲端同步與訂閱功能。',
      work: '我的作品',
      experience: '我的經歷',
      stats: {
        years: 'Years',
        projects: 'Projects',
        platforms: 'Platforms'
      }
    },
    about: {
      title: '關於我',
      eyebrow: 'About',
      appProjects: 'App 專案',
      years: '工作年資'
    },
    skills: {
      eyebrow: 'Skills',
      title: '專業技能',
      description: '具備 App 介面規劃、跨平台開發、功能整合與產品上架經驗，也能在專案中協助需求整理、測試回饋與交付溝通。',
      proof: '應用經驗'
    },
    projects: {
      eyebrow: 'Projects',
      title: '專案作品',
      commercial: '商業專案',
      personal: '自主學習',
      system: '其他系統專案'
    },
    pm: {
      eyebrow: 'PM Work',
      title: 'PM 與專案協作',
      description: '參與政府與企業系統專案的 PM 協作，負責需求整理、客戶窗口、工程端溝通、進度追蹤與交付確認，並以 Notion 建立可追蹤的專案工作資料。',
      currentScope: 'Current Scope',
      currentScopeDescription:
        '以中小企總兩案作為主要 PM 經驗，負責需求與文件整理；島嶼生吐司與文策院投後則以客戶窗口、需求轉交與完成確認為主。透過 Notion 統整需求、BUG、測試項目、驗收狀態與交付文件，讓客戶回饋、工程處理與專案進度保持一致。',
      outputs: '產出',
      supportTitle: 'PM 協作與文件支援'
    },
    experience: {
      eyebrow: 'Experience',
      title: '工作經歷',
      description: '目前的經歷集中在 App 開發、UI/UX 規劃與專案協作，從公司商業專案到個人上架作品，都以實際產品經驗為核心。'
    },
    projectDetail: {
      background: '專案背景',
      techStack: 'Tech Stack',
      noImage: 'No Image',
      process: '開發流程',
      designProcess: '設計流程',
      developmentProcess: '開發流程',
      challenges: '技術挑戰與解決方案',
      situation: '情境',
      difficulty: '困難點',
      solution: '解決方案',
      result: '結果',
      highlights: '設計與技術亮點',
      reflection: '學習與反思',
      interest: '對這個專案有興趣？',
      videoUnsupported: '您的瀏覽器不支援影片播放'
    },
    language: {
      label: '切換語言'
    }
  },
  en: {
    siteDescription: 'UI/UX and app developer focused on SwiftUI, Flutter, .NET MAUI, Figma, and AI-integrated product experiences.',
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      pmProjects: 'PM Work',
      experience: 'Experience',
      resume: 'Resume',
      backHome: 'Back Home',
      menu: 'Toggle menu'
    },
    hero: {
      eyebrow: 'Hello, I am',
      location: 'Taipei, Taiwan',
      availability: 'Available for work',
      description:
        'I work across <mark>app interface planning</mark> and <mark>cross-platform development</mark>, turning requirements, <mark>screen prototypes</mark>, and implementation into shipped products. My company work focuses on <mark>.NET MAUI</mark>, while my personal apps are built with <mark>SwiftUI</mark> and <mark>Flutter</mark>, often integrating <mark>AI</mark>, push notifications, cloud sync, and subscriptions.',
      work: 'View Work',
      experience: 'Experience',
      stats: {
        years: 'Years',
        projects: 'Projects',
        platforms: 'Platforms'
      }
    },
    about: {
      title: 'About',
      eyebrow: 'About',
      appProjects: 'App Projects',
      years: 'Years Experience'
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Skills',
      description: 'I combine app interface planning, cross-platform development, feature integration, store launch experience, and project coordination across real product work.',
      proof: 'Used in'
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Projects',
      commercial: 'Commercial Projects',
      personal: 'Self-Initiated',
      system: 'Other System Projects'
    },
    pm: {
      eyebrow: 'PM Work',
      title: 'PM & Project Collaboration',
      description: 'I support government and business system projects by organizing requirements, client communication, engineering handoff, progress tracking, and delivery confirmation in Notion.',
      currentScope: 'Current Scope',
      currentScopeDescription:
        'My main PM experience is centered on two NASME projects, where I organize requirements and documentation. For Island Toast and TAICCA post-investment systems, I serve as the client-facing coordinator, translating requests into trackable engineering tasks and keeping feedback, fixes, testing, acceptance, and delivery materials aligned in Notion.',
      outputs: 'Outputs',
      supportTitle: 'PM Collaboration & Documentation Support'
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Experience',
      description: 'My experience spans app development, UI/UX planning, and project collaboration, with practical product work across commercial apps and self-published personal apps.'
    },
    projectDetail: {
      background: 'Project Background',
      techStack: 'Tech Stack',
      noImage: 'No Image',
      process: 'Development Process',
      designProcess: 'Design Process',
      developmentProcess: 'Engineering Process',
      challenges: 'Technical Challenges & Solutions',
      situation: 'Situation',
      difficulty: 'Challenge',
      solution: 'Solution',
      result: 'Result',
      highlights: 'Design & Technical Highlights',
      reflection: 'Learning & Reflection',
      interest: 'Interested in this project?',
      videoUnsupported: 'Your browser does not support video playback.'
    },
    language: {
      label: 'Switch language'
    }
  }
} as const;

export function getLangFromUrl(url: URL, baseUrl = ''): Language {
  const path = stripBase(url.pathname, baseUrl);
  return path === '/en' || path.startsWith('/en/') ? 'en' : defaultLang;
}

export function getHomePath(lang: Language, baseUrl = ''): string {
  return getLocalizedPath('/', lang, baseUrl);
}

export function getSectionPath(sectionId: string, lang: Language, baseUrl = ''): string {
  return `${getHomePath(lang, baseUrl)}#${sectionId}`;
}

export function getProjectPath(slug: string, lang: Language, baseUrl = ''): string {
  return getLocalizedPath(`/projects/${slug}`, lang, baseUrl);
}

export function getLocalizedPath(path: string, lang: Language, baseUrl = ''): string {
  if (/^https?:\/\//.test(path) || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path;
  }

  const hashIndex = path.indexOf('#');
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : '';
  let pathname = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  pathname = pathname || '/';

  const base = normalizeBase(baseUrl);
  pathname = stripLocale(stripBase(pathname, base));

  if (!pathname.startsWith('/')) {
    pathname = `/${pathname}`;
  }

  const localizedPath =
    lang === 'en'
      ? `${base}/en${pathname === '/' ? '' : pathname}`
      : `${base}${pathname}`;

  return `${localizedPath || '/'}${hash}`;
}

function normalizeBase(baseUrl: string): string {
  if (!baseUrl || baseUrl === '/') return '';
  return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
}

function stripBase(pathname: string, baseUrl: string): string {
  const base = normalizeBase(baseUrl);
  let clean = pathname || '/';
  if (base && clean.startsWith(base)) {
    clean = clean.slice(base.length) || '/';
  }
  return clean.startsWith('/') ? clean : `/${clean}`;
}

function stripLocale(pathname: string): string {
  if (pathname === '/en') return '/';
  if (pathname.startsWith('/en/')) return pathname.slice(3) || '/';
  return pathname;
}
