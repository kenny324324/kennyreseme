import type { PersonalInfo } from '../types';
import type { Language } from '../i18n';

export const personalInfo: PersonalInfo = {
  name: {
    zh: '余亮廷',
    en: 'Kenny Yu'
  },
  title: {
    zh: 'Mobile App 工程師｜Flutter & iOS/SwiftUI',
    en: 'Mobile App Engineer | Flutter & iOS/SwiftUI'
  },
  email: 'kenny4work324@gmail.com',
  github: 'https://github.com/kenny324324',
  resumeUrl: '/kennyreseme/resume.pdf'
};

export const stats = {
  projects: 6,
  years: 3
};

export const aboutParagraphs = {
  zh: [
    '我的工作介於設計、工程與專案協作之間。早期較常使用 Figma 規劃 App 畫面與流程，現在則會搭配 AI 協助產出 HTML 靜態原型，先快速確認畫面、資訊層級與操作流程，再把原型落實成實際功能。參與過 .NET MAUI 商業 App、內部 POS、AI 助理與交通購票等專案。比起只完成單一畫面，我更在意使用者從進入 App、完成任務到收到回饋的整段體驗。',
    '除了公司專案，我也持續用 SwiftUI 與 Flutter 完成自己的 App，練習從產品想法、UI/UX、功能開發、資料同步、訂閱機制到 App Store 上架的完整流程。近年也參與 PM 協作，協助整理客戶需求、測試回饋、驗收狀態與交付文件，讓設計、工程與客戶溝通能更順利接起來。'
  ],
  en: [
    'My work sits between design, engineering, and project collaboration. I started by planning app screens and flows in Figma, and now also use AI-assisted HTML prototypes to quickly validate layout, information hierarchy, and user flows before turning them into production features. I have worked on .NET MAUI commercial apps, internal POS tools, AI assistants, and transportation ticketing products. Rather than stopping at isolated screens, I care about the full journey from entering an app to completing a task and receiving feedback.',
    'Alongside company projects, I continue to build my own SwiftUI and Flutter apps, practicing the full product cycle from idea, UI/UX, development, data sync, subscriptions, and App Store release. I also support PM work by organizing client requirements, testing feedback, acceptance status, and delivery documents so design, engineering, and client communication stay connected.'
  ]
};

export function getAboutParagraphs(lang: Language): string[] {
  return aboutParagraphs[lang === 'en' ? 'en' : 'zh'];
}
