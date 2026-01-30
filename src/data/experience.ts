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
  },
  {
    title: 'PM相關經驗',
    company: '文策院、中小企總',
    duration: '專案協作',
    description: '具備專案管理思維與跨部門溝通協調能力',
    achievements: [
      '文策院：需求溝通、專案管理、與內部工程師及廠商窗口協調',
      '中小企總：專案協調工作、跨部門溝通與需求分析',
      '高球AI專案：文件製作、簡報製作、專案報告',
      '具備與PM、設計師、後端工程師有效溝通協作能力'
    ],
    techStack: ['專案管理', '需求分析', '跨部門溝通', '團隊協作']
  }
];
