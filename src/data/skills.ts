import type { SkillCategory } from '../types';
import type { Language } from '../i18n';

export const skillCategories: SkillCategory[] = [
  {
    title: '行動應用開發',
    skills: [
      {
        name: 'SwiftUI',
        icon: 'fab fa-swift',
        iconColor: '#F05138',
        description: '用於多個個人 iOS App，處理原生介面、狀態管理、資料儲存、推播、小工具與 App Store 上架流程。',
        proof: ['Pickup', 'FindToilets', 'Mino', 'spo.stats']
      },
      {
        name: 'Flutter',
        icon: 'fas fa-layer-group',
        brand: 'flutter',
        iconColor: '#02569B',
        description: '用於跨平台個人作品，完成閱讀紀錄、AI 角色互動、Firebase 同步、第三方登入與多語言功能。',
        proof: ['Mish', 'SoulFeed']
      },
      {
        name: '.NET MAUI',
        icon: 'fab fa-microsoft',
        brand: 'dotnet',
        iconColor: '#512BD4',
        description: '用於公司商業 App，參與畫面開發、API 串接、登入流程、推播、條碼掃描與平台功能整合。',
        proof: ['跳蛙公車 2.0', 'TUAN AI 助理', '島嶼 POS']
      },
      {
        name: '介面規劃與原型',
        icon: 'fab fa-figma',
        iconColor: '#A259FF',
        description: '依專案狀況使用 Figma 或 AI 輔助的 HTML 靜態頁，規劃 App 流程、資訊層級與互動狀態，並把原型落實到實際 App 介面。',
        proof: ['Figma', 'HTML 靜態原型', 'App 流程', '介面改版']
      }
    ]
  },
  {
    title: '功能整合與資料服務',
    skills: [
      {
        name: 'API 整合',
        icon: 'fas fa-plug',
        iconColor: '#10B981',
        description: '串接公司後端與第三方服務，將物流、書籍、音樂、POS 單據等資料整理成 App 可操作流程。',
        proof: ['Pickup', 'Mish', 'spo.stats', 'POS']
      },
      {
        name: 'AI 整合開發',
        icon: 'fas fa-brain',
        iconColor: '#8B5CF6',
        description: '把 AI 功能放進具體情境，包含截圖辨識建立包裹、角色留言回覆與公司 AI 助理互動流程。',
        proof: ['Pickup', 'SoulFeed', 'TUAN AI 助理']
      },
      {
        name: '地圖服務',
        icon: 'fas fa-map-marked-alt',
        iconColor: '#3B82F6',
        description: '實作地圖查詢、附近地點、標記管理與路線相關畫面，處理交通與生活場景中的地圖需求。',
        proof: ['FindToilets', '跳蛙公車 2.0']
      },
      {
        name: '登入與雲端同步',
        icon: 'fas fa-shield-alt',
        iconColor: '#14B8A6',
        description: '處理第三方登入、Firebase、CloudKit、iCloud 與使用者資料同步，讓 App 能跨裝置保存資料。',
        proof: ['Mish', 'SoulFeed', 'spo.stats', 'Mino']
      }
    ]
  },
  {
    title: '上架與產品功能',
    skills: [
      {
        name: 'App 上架流程',
        icon: 'fas fa-store',
        iconColor: '#C96442',
        description: '處理個人 App 的商店資料、版本送審、審核回覆與上架，也參與商業專案的 App Store / Google Play 上架支援。',
        proof: ['App Store', 'Google Play', '版本送審']
      },
      {
        name: '訂閱與內購機制',
        icon: 'fas fa-credit-card',
        iconColor: '#B45309',
        description: '實作訂閱方案、購買狀態判斷與權限開通，讓個人 App 不只完成功能，也能具備基本商業模式。',
        proof: ['StoreKit 2', 'RevenueCat', 'Pickup', 'Mish']
      },
      {
        name: '系統功能整合',
        icon: 'fas fa-mobile-alt',
        iconColor: '#0F766E',
        description: '整合推播、桌面小工具、本地提醒、條碼掃描與裝置相關功能，讓 App 能接近實際使用情境。',
        proof: ['WidgetKit', '推播提醒', '條碼掃描']
      },
      {
        name: '資料視覺化',
        icon: 'fas fa-chart-line',
        iconColor: '#2563EB',
        description: '將排名、統計與狀態資料整理成圖表或儀表板，讓使用者能更快理解音樂聆聽、包裹狀態與使用紀錄。',
        proof: ['spo.stats', 'Pickup', '統計儀表板']
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
        description: '使用 Git 管理公司與個人專案版本，並透過 GitHub 保存作品紀錄、整理開發脈絡與專案資料。',
        proof: ['Git', 'GitHub', '個人作品']
      },
      {
        name: '專案管理',
        icon: 'fas fa-tasks',
        iconColor: '#10B981',
        description: '以 Notion 整理需求、BUG、測試項目、驗收狀態與交付文件，協助客戶回饋與工程進度對齊。',
        proof: ['中小企總', '島嶼生吐司', '文策院投後']
      },
      {
        name: '團隊協作',
        icon: 'fas fa-users',
        iconColor: '#6366F1',
        description: '能在客戶、PM、設計與工程端之間轉換資訊，將需求說明成可討論、可執行、可確認的項目。',
        proof: ['客戶窗口', '工程協作', '交付確認']
      },
      {
        name: '語言能力',
        icon: 'fas fa-language',
        iconColor: '#EC4899',
        description: '中文母語，英文多益 835 分，能閱讀英文技術文件、API 文件與 App Store / 第三方服務相關說明。',
        proof: ['TOEIC 835', '技術文件', 'API 文件']
      }
    ]
  }
];

const skillCategoriesEn: SkillCategory[] = [
  {
    title: 'Mobile App Development',
    skills: [
      {
        name: 'SwiftUI',
        icon: 'fab fa-swift',
        iconColor: '#F05138',
        description: 'Used across multiple personal iOS apps for native UI, state management, persistence, push notifications, widgets, and App Store release workflows.',
        proof: ['Pickup', 'FindToilets', 'Mino', 'spo.stats']
      },
      {
        name: 'Flutter',
        icon: 'fas fa-layer-group',
        brand: 'flutter',
        iconColor: '#02569B',
        description: 'Used for cross-platform personal apps covering reading records, AI character interactions, Firebase sync, third-party login, and multilingual features.',
        proof: ['Mish', 'SoulFeed']
      },
      {
        name: '.NET MAUI',
        icon: 'fab fa-microsoft',
        brand: 'dotnet',
        iconColor: '#512BD4',
        description: 'Used in commercial company apps for screen implementation, API integration, login flows, push notifications, barcode scanning, and platform feature integration.',
        proof: ['WowBus 2.0', 'TUAN AI Assistant', 'Island POS']
      },
      {
        name: 'Interface Planning & Prototyping',
        icon: 'fab fa-figma',
        iconColor: '#A259FF',
        description: 'Plans app flows, information hierarchy, and interaction states using Figma or AI-assisted HTML prototypes, then turns prototypes into real app interfaces.',
        proof: ['Figma', 'HTML Prototypes', 'App Flows', 'UI Redesign']
      }
    ]
  },
  {
    title: 'Feature Integration & Data Services',
    skills: [
      {
        name: 'API Integration',
        icon: 'fas fa-plug',
        iconColor: '#10B981',
        description: 'Connects company backends and third-party services, shaping logistics, books, music, POS documents, and other data into usable app flows.',
        proof: ['Pickup', 'Mish', 'spo.stats', 'POS']
      },
      {
        name: 'AI Feature Integration',
        icon: 'fas fa-brain',
        iconColor: '#8B5CF6',
        description: 'Builds AI features into concrete user scenarios, including package creation from screenshots, character comments, and commercial AI assistant interactions.',
        proof: ['Pickup', 'SoulFeed', 'TUAN AI Assistant']
      },
      {
        name: 'Map Services',
        icon: 'fas fa-map-marked-alt',
        iconColor: '#3B82F6',
        description: 'Implements map search, nearby places, annotation management, and route-related screens for transportation and daily-life use cases.',
        proof: ['FindToilets', 'WowBus 2.0']
      },
      {
        name: 'Login & Cloud Sync',
        icon: 'fas fa-shield-alt',
        iconColor: '#14B8A6',
        description: 'Handles third-party login, Firebase, CloudKit, iCloud, and user data synchronization so apps can preserve data across devices.',
        proof: ['Mish', 'SoulFeed', 'spo.stats', 'Mino']
      }
    ]
  },
  {
    title: 'Launch & Product Features',
    skills: [
      {
        name: 'App Store Release Workflow',
        icon: 'fas fa-store',
        iconColor: '#C96442',
        description: 'Prepares store metadata, version submissions, review responses, and releases for personal apps, while also supporting App Store and Google Play launches for commercial projects.',
        proof: ['App Store', 'Google Play', 'Review Submission']
      },
      {
        name: 'Subscriptions & In-App Purchase',
        icon: 'fas fa-credit-card',
        iconColor: '#B45309',
        description: 'Implements subscription plans, purchase state checks, and entitlement unlocking so personal apps can support a basic business model.',
        proof: ['StoreKit 2', 'RevenueCat', 'Pickup', 'Mish']
      },
      {
        name: 'System Feature Integration',
        icon: 'fas fa-mobile-alt',
        iconColor: '#0F766E',
        description: 'Integrates push notifications, widgets, local reminders, barcode scanning, and device-specific features to support real usage scenarios.',
        proof: ['WidgetKit', 'Push Notifications', 'Barcode Scanning']
      },
      {
        name: 'Data Visualization',
        icon: 'fas fa-chart-line',
        iconColor: '#2563EB',
        description: 'Turns rankings, statistics, and status data into charts or dashboards so users can understand listening habits, package status, and usage records faster.',
        proof: ['spo.stats', 'Pickup', 'Analytics Dashboard']
      }
    ]
  },
  {
    title: 'Project Collaboration & Tools',
    skills: [
      {
        name: 'Version Control',
        icon: 'fab fa-github',
        iconColor: '#1a1a1a',
        description: 'Uses Git for company and personal projects, with GitHub as a place to preserve project history, development context, and portfolio records.',
        proof: ['Git', 'GitHub', 'Personal Projects']
      },
      {
        name: 'Project Management',
        icon: 'fas fa-tasks',
        iconColor: '#10B981',
        description: 'Organizes requirements, bugs, testing items, acceptance status, and delivery documents in Notion to align client feedback and engineering progress.',
        proof: ['NASME', 'Island Toast', 'TAICCA']
      },
      {
        name: 'Team Collaboration',
        icon: 'fas fa-users',
        iconColor: '#6366F1',
        description: 'Translates information between clients, PMs, designers, and engineers into items that are discussable, executable, and verifiable.',
        proof: ['Client Communication', 'Engineering Handoff', 'Delivery Confirmation']
      },
      {
        name: 'Language Ability',
        icon: 'fas fa-language',
        iconColor: '#EC4899',
        description: 'Native Chinese speaker with TOEIC 835, able to read English technical documentation, API docs, and App Store or third-party service materials.',
        proof: ['TOEIC 835', 'Technical Docs', 'API Docs']
      }
    ]
  }
];

export function getSkillCategories(lang: Language): SkillCategory[] {
  return lang === 'en' ? skillCategoriesEn : skillCategories;
}
