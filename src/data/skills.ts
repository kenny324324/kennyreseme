import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: '行動應用開發',
    skills: [
      {
        name: 'SwiftUI',
        icon: 'fab fa-swift',
        iconColor: '#F05138',
        description: '具備 iCloud 資料儲存、推播通知、本地資料庫管理與 App Store 完整上架流程經驗。'
      },
      {
        name: 'Flutter',
        icon: 'fas fa-layer-group',
        brand: 'flutter',
        iconColor: '#02569B',
        description: '熟悉跨平台 UI 開發、第三方 API 串接、Firebase 整合與多平台發布流程。'
      },
      {
        name: '.NET MAUI',
        icon: 'fab fa-microsoft',
        brand: 'dotnet',
        iconColor: '#512BD4',
        description: '精通商業邏輯開發、硬體整合、平台特定功能實作與跨平台架構設計。'
      },
      {
        name: 'UI/UX 設計',
        icon: 'fab fa-figma',
        iconColor: '#A259FF',
        description: '熟練 Figma 工具，能獨立完成 Wireframe、Prototype 設計與響應式介面實作。'
      }
    ]
  },
  {
    title: '後端與系統整合',
    skills: [
      {
        name: 'API 整合',
        icon: 'fas fa-plug',
        iconColor: '#10B981',
        description: '具備 RESTful API 設計與串接能力，熟悉第三方服務整合與 JSON 資料處理。'
      },
      {
        name: 'AI 整合開發',
        icon: 'fas fa-brain',
        iconColor: '#8B5CF6',
        description: '熟悉 OpenAI API、RAG 技術與 Embedding 應用，具備 AI 聊天介面與智能功能實作經驗。'
      },
      {
        name: '地圖服務',
        icon: 'fas fa-map-marked-alt',
        iconColor: '#3B82F6',
        description: '具備地圖 SDK 整合、路線規劃、即時定位與地理圍欄功能實作能力。'
      },
      {
        name: '安全認證',
        icon: 'fas fa-shield-alt',
        iconColor: '#14B8A6',
        description: '熟悉 OAuth 2.0 流程，具備 Google / Apple / Facebook 第三方登入整合經驗。'
      }
    ]
  },
  {
    title: '專案協作與工具',
    skills: [
      {
        name: '版本控制',
        icon: 'fab fa-github',
        iconColor: '#1a1a1a',
        description: '熟練 Git 版本控制流程，具備多分支開發、衝突解決與程式碼審查經驗。'
      },
      {
        name: '專案管理',
        icon: 'fas fa-tasks',
        iconColor: '#10B981',
        description: '具備需求分析、時程規劃、技術文件撰寫與跨部門溝通協調能力。'
      },
      {
        name: '團隊協作',
        icon: 'fas fa-users',
        iconColor: '#6366F1',
        description: '善於與 PM、設計師、後端工程師溝通，能有效整合跨職能團隊資源。'
      },
      {
        name: '語言能力',
        icon: 'fas fa-language',
        iconColor: '#EC4899',
        description: '中文母語，英文高級水準（多益 835 分），能熟練閱讀英文技術文檔。'
      }
    ]
  }
];
