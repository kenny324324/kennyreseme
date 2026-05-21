export interface PMProject {
  title: string;
  role: string;
  type: '主力 PM' | '窗口協作';
  description: string;
  responsibilities: string[];
  outputs: string[];
  icon: string;
}

export const pmProjects: PMProject[] = [
  {
    title: '中小企總媒合平台',
    role: '主力 PM / 需求整理',
    type: '主力 PM',
    description: '負責彙整平台建置需求與功能範圍，將客戶回饋轉化為工程端可執行項目，並協助維持需求、文件與交付內容一致。',
    responsibilities: [
      '彙整客戶需求、待確認問題與回覆內容',
      '拆分功能範圍與階段項目，協助工程端理解需求',
      '整理報價資料、操作手冊與專案交付文件'
    ],
    outputs: ['需求彙整', '功能範圍', '報價資料', '操作手冊'],
    icon: 'fas fa-diagram-project'
  },
  {
    title: '中小企總商服應用資料庫',
    role: '主力 PM / 文件與驗收整理',
    type: '主力 PM',
    description: '負責整理問卷資料、欄位規格、圖表需求與驗收文件，協助資料庫與後台功能從需求討論進入可開發、可驗收的狀態。',
    responsibilities: [
      '整理 PRD、問卷資料、欄位盤點與資料範例',
      '規劃圖表與報表呈現方式，協助釐清後台需求',
      '準備操作手冊、資安自檢與階段驗收文件'
    ],
    outputs: ['PRD', '欄位盤點', '圖表規劃', '驗收資料'],
    icon: 'fas fa-table-list'
  },
  {
    title: '島嶼生吐司 POS',
    role: '客戶窗口型 PM',
    type: '窗口協作',
    description: '擔任客戶與工程端之間的溝通窗口，負責接收需求與問題回報，轉成工程端可處理事項，並協助完成功能確認。',
    responsibilities: [
      '接收客戶需求、操作問題與調整回饋',
      '轉化為工程師可執行的修改項目',
      '追蹤處理狀態，並協助客戶確認結果'
    ],
    outputs: ['需求轉交', '狀態追蹤', '結果確認'],
    icon: 'fas fa-cash-register'
  },
  {
    title: '文策院投後系統',
    role: '客戶窗口型 PM',
    type: '窗口協作',
    description: '協助彙整客戶調整需求與系統回饋，轉交工程端處理並追蹤完成狀態，讓客戶需求與開發進度保持對齊。',
    responsibilities: [
      '彙整客戶調整需求與待處理事項',
      '轉交工程端並追蹤處理進度',
      '協助完成後的回覆、確認與資訊同步'
    ],
    outputs: ['需求彙整', '處理追蹤', '資訊同步'],
    icon: 'fas fa-building-columns'
  }
];

export const pmSupportProjects = [
  '另於花蓮 AI、花蓮 1999、高球 AI、電子投票等專案中支援主 PM，協助整理測試報告、操作手冊、期末報告與簡報資料。'
];
