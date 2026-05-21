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
    title: '跨平台App工程師',
    company: '喬思齊科技',
    duration: '2023年7月 - 至今',
    description: '主導多個企業級跨平台應用開發，專精 .NET MAUI 技術棧',
    achievements: [
      '完成跳蛙APP、今皓AI、智能客服等專案',
      '成功上架跳蛙APP至App Store',
      '解決跨平台相容性與硬體整合問題',
      '整合第三方服務、AI功能、地圖服務'
    ],
    techStack: ['.NET MAUI', 'C#', 'API 整合', 'AI 整合']
  },
  {
    title: 'PM 與專案文件協作',
    company: '中小企總 / 島嶼生吐司 / 文策院投後',
    duration: '目前負責項目',
    description: '目前參與中小企總兩案、島嶼生吐司與文策院投後等專案的 PM 協作，負責需求整理、客戶窗口、工程端溝通、進度追蹤與交付確認，並以 Notion 維護專案工作資料。',
    achievements: [
      '中小企總媒合平台：較完整負責 PM 窗口與需求整理，協助統整客戶需求、功能範圍、回覆內容、報價資料與操作手冊',
      '中小企總商服應用資料庫：較完整負責 PM 窗口與文件整理，協助處理 PRD、問卷資料、欄位盤點、圖表規劃與驗收相關文件',
      '島嶼生吐司 POS 專案：擔任客戶與工程師之間的溝通窗口，接收客戶需求後轉成工程師可執行的事項，並在功能完成後協助回覆與確認',
      '文策院投後系統：協助擔任客戶與工程端之間的需求窗口，彙整客戶調整事項、轉交工程師處理，並在完成後協助回覆與確認',
      '使用 Notion 整理需求、BUG、測試項目、驗收狀態與交付文件，讓客戶回饋、工程處理與專案進度能被持續追蹤',
      '能站在客戶、工程師與 PM 之間溝通，把模糊需求拆成畫面、流程、資料、待辦事項與可交付文件'
    ],
    techStack: ['需求整理', '客戶窗口', '跨方溝通', '進度追蹤', 'Notion', '操作手冊', '驗收文件', '工程協作']
  },
  {
    title: '自主技術學習',
    company: '個人專案',
    duration: '持續中',
    description: '自主學習SwiftUI與Flutter跨平台開發技術',
    achievements: [
      'Mino待辦清單：SwiftUI開發，具備iCloud、推播提醒、App Store上架經驗',
      'MIsh個人書櫃：Flutter開發，整合Firebase、Apple登入、第三方API',
      '持續學習最新行動裝置開發技術與最佳實踐',
      '具備從設計到上架的完整開發流程經驗'
    ],
    techStack: ['SwiftUI', 'Flutter', 'iCloud', 'Firebase']
  }
];
