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
  background: {
    goals: string[];
    userScenarios: string[];
    myRole: string[];
  };
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
  };
  reflection: string[];
}

const base = '/kennyreseme';

export const projectDetails: Record<string, ProjectDetail> = {
  bus: {
    slug: 'bus',
    title: '跳蛙公車2.0',
    subtitle: '跨平台公車購票與交通管理系統',
    description: '跳蛙公車2.0幫助民眾在規劃公車行程時更快地完成購票和在地圖上自訂創建募集路線',
    categories: ['maui'],
    techStack: ['.NET MAUI', 'Google登入', '地圖整合', 'Firebase推播', 'UI改版'],
    coverImage: `${base}/documents/projects/Bus/cover.png`,
    detailImage: `${base}/documents/projects/Bus/detailcover.png`,
    links: {
      appstore: 'https://apps.apple.com/tw/app/%E8%B7%B3%E8%9B%99%E5%85%AC%E8%BB%8A2-0/id6667097903',
      googleplay: 'https://play.google.com/store/apps/details?id=tw.wowbus.www&hl=zh_TW'
    },
    background: {
      goals: [
        '簡化公車購票流程，提升使用者體驗',
        '創新的募集路線功能，讓民眾能參與公車路線規劃',
        '整合地圖服務，提供直觀的路線視覺化'
      ],
      userScenarios: [
        '通勤族：需要快速購買公車票的上班族',
        '觀光客：需要了解公車路線和購票的遊客',
        '社區居民：希望建議新公車路線的在地民眾'
      ],
      myRole: [
        'UI/UX 設計：使用 Figma 進行完整的介面設計規劃',
        '跨平台開發：採用 .NET MAUI 進行 iOS/Android 雙平台開發',
        '系統整合：整合 Google 登入、Firebase 推播、地圖服務等第三方 API'
      ]
    },
    highlights: [
      {
        title: '首頁動態輪播公告',
        description: '設計動態輪播功能展示重要公告資訊，採用暖橘色作為主視覺，營造友善親切的使用體驗',
        media: `${base}/documents/projects/Bus/Media/carousell.mov`,
        mediaType: 'video'
      },
      {
        title: '互動式地圖介面',
        description: '地圖點擊互動功能，使用者可以直觀地在地圖上點擊標示附近公車站點，支援路線規劃與導航',
        media: `${base}/documents/projects/Bus/Media/map.mov`,
        mediaType: 'video'
      },
      {
        title: '訂購路線列表設計',
        description: '設計清晰的路線列表介面，運用橘色主色調突出重點資訊，提供流暢的瀏覽體驗',
        media: `${base}/documents/projects/Bus/Media/list.mov`,
        mediaType: 'video'
      }
    ],
    challenges: [
      {
        title: '地圖整合與自訂路線功能',
        situation: '需要讓使用者在地圖上自訂創建募集路線，並且要支援路線編輯功能',
        difficulty: '地圖 API 的複雜整合、自訂路線的資料結構設計、觸控操作的使用者體驗優化',
        solution: '採用 Google Maps API，自訂地圖控制項；設計彈性的路線資料模型，支援動態編輯；實作直觀的觸控手勢',
        result: '成功實現了直觀的路線創建功能，使用者可以輕鬆在地圖上規劃理想的公車路線'
      },
      {
        title: 'Firebase 推播整合',
        situation: '首次導入 Firebase 推播功能，需要處理跨平台推播通知的複雜配置',
        difficulty: '全新技術領域，iOS 與 Android 推播機制差異大，需要處理各種邊緣情況',
        solution: '採用持續研究與測試的方式，建立統一的推播服務層，封裝平台差異',
        result: '歷時數個月完成整合，成功建立穩定的跨平台推播系統'
      }
    ],
    process: {
      design: [
        '需求收集與競品分析：公車處提供功能需求，分析市場上類似應用',
        '多版本設計提案：根據需求設計三種不同架構方案供客戶選擇',
        'Wireframe 設計：建立完整的使用者流程與頁面架構',
        '視覺設計：採用暖橘色調，建立一致的設計系統'
      ],
      development: [
        '技術選定：依據公司技術規範，採用 .NET MAUI 進行跨平台開發',
        '開發分工協作：負責 UI/UX 規劃與 APP 端開發',
        '第三方服務整合：Google 登入、Firebase 推播、地圖 SDK',
        '測試與上架：完成雙平台測試並成功上架 App Store'
      ]
    },
    reflection: [
      '技術突破：首次成功整合 Firebase 推播系統，建立了完整的跨平台推播解決方案',
      '跨領域協作：從 UI/UX 設計規劃到 .NET MAUI 開發實作，展現全端開發能力',
      '產品上架：成功完成 App Store 上架流程，累積了寶貴的發布經驗'
    ]
  },
  tuan: {
    slug: 'tuan',
    title: '今皓TUAN AI助理APP',
    subtitle: 'AI 驅動的虛擬 IP 互動應用',
    description: 'AI 驅動的虛擬 IP 互動應用，整合第三方登入、AI助理聊天控制Google行事曆功能',
    categories: ['maui', 'ai'],
    techStack: ['.NET MAUI', '第三方登入', 'AI助理', 'Google行事曆'],
    coverImage: `${base}/documents/projects/Tuan/cover.png`,
    detailImage: `${base}/documents/projects/Tuan/detailcover.png`,
    links: {},
    background: {
      goals: [
        '建立 AI 虛擬助理應用，提供個人化服務',
        '整合 Google 行事曆 API，實現智能日程管理',
        '打造流暢的聊天互動介面'
      ],
      userScenarios: [
        '忙碌的上班族：需要 AI 助理幫助管理行事曆',
        '需要個人助理服務的使用者'
      ],
      myRole: [
        'AI 聊天介面開發：設計與實作流暢的對話 UI',
        '行事曆整合：串接 Google Calendar API',
        '第三方登入：實作 Google/Apple 登入功能'
      ]
    },
    highlights: [
      {
        title: 'AI 聊天互動介面',
        description: '設計流暢的聊天介面，支援即時對話與語音輸入',
        media: `${base}/documents/projects/Tuan/Media/calauth.mov`,
        mediaType: 'video'
      }
    ],
    challenges: [
      {
        title: 'Google 行事曆 API 整合',
        situation: '需要透過 AI 對話來操作使用者的 Google 行事曆',
        difficulty: 'OAuth 認證流程複雜，需要處理 token 刷新與權限管理',
        solution: '建立完整的認證流程，實作 token 自動刷新機制',
        result: '成功實現透過 AI 對話新增、修改、刪除行事曆事件'
      }
    ],
    process: {
      design: [
        '使用者需求分析：了解 AI 助理的使用情境',
        '對話流程設計：規劃自然的對話互動模式'
      ],
      development: [
        'AI 服務串接：整合 AI API 處理自然語言',
        '行事曆功能開發：實作完整的 CRUD 操作',
        '第三方登入：整合 Google/Apple Sign In'
      ]
    },
    reflection: [
      '首次完整整合 AI 對話系統與第三方 API',
      '深化了 OAuth 認證流程的理解與實作能力'
    ]
  },
  pos: {
    slug: 'pos',
    title: '島嶼生吐司 手持POS',
    subtitle: '商業手持 POS 系統',
    description: '商業手持 POS 系統，整合條碼掃描硬體、API串接與特殊機型功能實作',
    categories: ['maui'],
    techStack: ['.NET MAUI', '硬體整合', '條碼掃描', 'API串接'],
    coverImage: `${base}/documents/projects/POS/cover.png`,
    detailImage: `${base}/documents/projects/POS/detailcover.png`,
    links: {},
    background: {
      goals: [
        '開發適用於餐飲業的手持 POS 系統',
        '整合條碼掃描硬體功能',
        '提供穩定可靠的商業收銀功能'
      ],
      userScenarios: [
        '餐飲店員：需要快速完成點餐與結帳',
        '店長：需要查看銷售報表與庫存管理'
      ],
      myRole: [
        'UI 介面開發：設計直觀的 POS 操作介面',
        '硬體整合：串接條碼掃描器與出單機',
        'API 串接：整合後端服務與支付系統'
      ]
    },
    highlights: [
      {
        title: '操作介面設計',
        description: '簡潔直觀的 POS 操作介面，支援快速點餐與結帳',
        media: `${base}/documents/projects/POS/Media/操作介面.mov`,
        mediaType: 'video'
      }
    ],
    challenges: [
      {
        title: '特殊機型硬體整合',
        situation: '需要在特定廠牌的手持 POS 機上運行，並整合其專屬硬體功能',
        difficulty: '設備 SDK 文件不完整，需要大量測試與除錯',
        solution: '與硬體廠商密切溝通，建立硬體抽象層來處理不同設備',
        result: '成功整合條碼掃描、出單列印等硬體功能'
      }
    ],
    process: {
      design: ['需求分析：了解餐飲業 POS 使用流程', 'UI 設計：強調操作效率與易用性'],
      development: ['硬體 SDK 整合', 'API 串接與資料同步', '離線功能支援']
    },
    reflection: ['累積了商業軟體開發經驗', '深化了硬體整合與 SDK 串接能力']
  },
  justai: {
    slug: 'justai',
    title: 'JustAI 客服系統',
    subtitle: 'AI 聊天機器人介面',
    description: 'AI聊天機器人介面開發練習專案，整合RAG技術與OpenAI API，從Figma設計稿實作完整客服對話介面',
    categories: ['maui', 'ai'],
    techStack: ['RAG技術', 'OpenAI API', 'AI聊天介面'],
    coverImage: `${base}/documents/projects/Justai/cover.png`,
    detailImage: `${base}/documents/projects/Justai/detailcover.png`,
    links: {},
    background: {
      goals: [
        '學習 RAG 技術與 AI 整合開發',
        '實作完整的客服聊天介面',
        '探索 AI 在客服領域的應用'
      ],
      userScenarios: ['企業客戶：需要 24/7 AI 客服支援'],
      myRole: [
        'AI 整合開發：串接 OpenAI API 與 RAG 系統',
        '聊天介面設計：從 Figma 設計稿實作完整 UI'
      ]
    },
    highlights: [],
    challenges: [
      {
        title: 'RAG 技術整合',
        situation: '需要讓 AI 能夠基於知識庫回答問題',
        difficulty: '首次接觸 RAG 技術，需要理解 embedding 與向量搜尋',
        solution: '研究相關技術文件，逐步建立知識庫與檢索系統',
        result: '成功實現基於知識庫的智能問答功能'
      }
    ],
    process: {
      design: ['研究 AI 客服產品', '設計對話流程與 UI'],
      development: ['OpenAI API 串接', 'RAG 系統建置', '聊天介面實作']
    },
    reflection: ['首次完整學習 RAG 技術', '深化了 AI 應用開發能力']
  },
  mino: {
    slug: 'mino',
    title: 'Mino 待辦清單',
    subtitle: 'SwiftUI 個人待辦管理 APP',
    description: 'SwiftUI開發的待辦清單APP，具備推播提醒、iCloud資料儲存、UI規劃與App Store上架',
    categories: ['swift'],
    techStack: ['SwiftUI', 'iCloud', '推播提醒', 'App Store', '自主學習'],
    coverImage: `${base}/documents/projects/Mino/cover.png`,
    detailImage: `${base}/documents/projects/Mino/detailcover.png`,
    links: {},
    background: {
      goals: [
        '自主學習 SwiftUI 開發技術',
        '完成從設計到上架的完整流程',
        '實作雲端同步與推播功能'
      ],
      userScenarios: ['需要管理日常待辦事項的使用者'],
      myRole: ['獨立完成全部開發工作', 'UI/UX 設計', 'App Store 上架']
    },
    highlights: [],
    challenges: [
      {
        title: 'iCloud 同步機制',
        situation: '需要實現跨設備的資料同步',
        difficulty: 'iCloud 同步有延遲與衝突處理問題',
        solution: '研究 CloudKit 最佳實踐，實作衝突解決策略',
        result: '成功實現穩定的跨設備同步功能'
      }
    ],
    process: {
      design: ['功能規劃', 'UI 介面設計'],
      development: ['SwiftUI 介面開發', 'iCloud 整合', '推播功能', 'App Store 上架']
    },
    reflection: ['完整經歷了獨立開發到上架的流程', '累積了 SwiftUI 與 Apple 生態系開發經驗']
  },
  mish: {
    slug: 'mish',
    title: 'MIsh 個人書櫃',
    subtitle: 'Flutter 跨平台書籍管理 APP',
    description: 'Flutter開發的個人書櫃APP，具備第三方API串接、Apple登入、Firebase資料儲存與App Store上架',
    categories: ['flutter'],
    techStack: ['Flutter', 'Firebase', 'Apple登入', 'App Store', '自主學習'],
    coverImage: `${base}/documents/projects/MIsh/cover.png`,
    detailImage: `${base}/documents/projects/MIsh/detailcover.png`,
    links: {},
    background: {
      goals: [
        '自主學習 Flutter 跨平台開發',
        '整合第三方書籍 API',
        '實作 Firebase 雲端功能'
      ],
      userScenarios: ['愛書人：需要管理個人藏書與閱讀紀錄'],
      myRole: ['獨立完成全部開發工作', 'API 串接', 'Firebase 整合']
    },
    highlights: [],
    challenges: [
      {
        title: 'Apple Sign In 整合',
        situation: '需要在 Flutter 專案中整合 Apple 登入',
        difficulty: 'Flutter 與原生 iOS 的橋接設定複雜',
        solution: '研究官方文件與社群方案，逐步完成設定',
        result: '成功整合 Apple Sign In 功能'
      }
    ],
    process: {
      design: ['功能規劃', '介面設計'],
      development: ['Flutter UI 開發', 'API 串接', 'Firebase 整合', 'App Store 上架']
    },
    reflection: ['累積了 Flutter 開發經驗', '學習了跨平台與原生功能整合']
  }
};

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails[slug];
}

export function getAllProjectSlugs(): string[] {
  return Object.keys(projectDetails);
}
