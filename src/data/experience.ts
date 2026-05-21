export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    title: 'UI/UX 與跨平台 App 工程師',
    company: '喬思齊科技',
    duration: '2023年7月 - 至今',
    description: '在公司商業專案中負責 App 介面規劃與 .NET MAUI 功能開發，參與交通購票、AI 助理、手持 POS 等實際產品，處理從畫面設計、API 串接到裝置功能整合的開發工作。',
    achievements: [
      '跳蛙公車 2.0：參與購票、地圖、登入與推播等 App 功能開發，協助產品完成改版並上架 App Store 與 Google Play',
      '今皓 TUAN AI 助理：實作 AI 對話、第三方登入與 Google 行事曆授權等功能，串接語音與影像互動流程',
      '島嶼生吐司手持 POS：開發內部營運用 App，整合條碼掃描、進銷貨與庫存盤點等流程',
      '依照 Figma 設計稿落實 UI 版面、狀態與互動細節，並與後端 API、推播、地圖與硬體功能整合'
    ],
    techStack: ['.NET MAUI', 'C#', 'Figma', 'API 整合', 'Firebase 推播', 'Google 地圖', '硬體整合']
  },
  {
    title: 'PM 與專案協作',
    company: '中小企總 / 島嶼生吐司 / 文策院投後',
    duration: '目前負責項目',
    description: '除 App 開發外，也參與政府與企業系統專案的 PM 協作，負責把客戶需求、測試回饋與工程處理狀態整理成可追蹤的工作資料。',
    achievements: [
      '中小企總媒合平台：整理前後台功能範圍、測試項目、郵件文案與交付確認流程',
      '中小企總商服應用資料庫：整理 PRD、問卷欄位、圖表需求、測試清單與驗收文件',
      '島嶼生吐司與文策院投後：擔任客戶與工程端之間的窗口，接收需求、轉成待辦並追蹤完成狀態',
      '使用 Notion 管理需求、BUG、測試項目、驗收狀態與交付文件，協助客戶回饋與工程進度對齊',
      '支援其他專案文件產出，包含測試報告、操作手冊、期末報告與簡報資料'
    ],
    techStack: ['需求整理', '客戶窗口', '跨方溝通', '進度追蹤', 'Notion', '操作手冊', '驗收文件', '工程協作']
  },
  {
    title: '個人 App 產品開發',
    company: '個人作品 / 自主開發',
    duration: '持續中',
    description: '在個人專案中持續完成 SwiftUI 與 Flutter App，從功能規劃、UI 設計、資料同步、訂閱機制到 App Store 上架都自行處理。',
    achievements: [
      'SwiftUI 作品：Mino、Pickup、FindToilets、spo.stats，涵蓋待辦、包裹追蹤、公廁地圖與 Spotify 統計等不同情境',
      'Flutter 作品：Mish 已上架 App Store，SoulFeed 為 AI 角色留言板 MVP 練習專案',
      '實作 Firebase、CloudKit、SwiftData、WidgetKit、StoreKit 2、Google Books API、Spotify API 等整合',
      '具備從產品想法、UI/UX、功能開發、測試、上架到後續調整的完整個人產品流程'
    ],
    techStack: ['SwiftUI', 'Flutter', 'Firebase', 'CloudKit', 'SwiftData', 'StoreKit 2', 'App Store 上架']
  }
];
