# Portfolio 網站完整審查與遷移計畫

> 審查日期：2026-01-29
> 專案位置：`/Users/jonathanyu/Desktop/𝙲𝚅/`

---

# Part 1：UI/UX Pro Max 審查報告

## 整體評分：7.5 / 10

---

## 一、優點 (Strengths)

### 1. 視覺設計
- **配色方案** - 黑白灰為主的簡約配色專業且不易出錯
- **玻璃態效果** - Navbar 的 `backdrop-blur` 毛玻璃效果現代感十足
- **動畫品質** - 滾動動畫、hover效果流暢自然，cubic-bezier 曲線選得不錯
- **技能卡片** - 虛線邊框 + 圓角設計有特色，圖標顏色統一且辨識度高

### 2. 架構與資訊層級
- **清晰的 Section 分割** - 虛線分隔標題設計統一且優雅
- **專案詳情頁** - 動態載入內容的設計，資料與展示分離，易於維護

### 3. 技術實現
- **響應式設計** - 有處理多種斷點 (768px, 480px, 360px)
- **效能優化** - 使用 IntersectionObserver、debounce、lazy loading

---

## 二、需要改進的問題 (Critical Issues)

### 問題 1：Hero Section 資訊過載
**位置：** `index.html:120-206`

**問題：**
- 左側文字區塊技術標籤過多（6個 highlight span），視覺雜亂
- 右側名片卡與左側內容重複（名稱、職稱都出現兩次）
- 名片中的 "2+ Years" 和 "6+ Projects" 與下方 About 區塊統計數據重複

**建議：**
```
方案 A：簡化左側，保留名片
- 左側只放姓名、職稱、1-2 句核心描述、CTA 按鈕
- 右側名片保留詳細技能

方案 B：移除名片，強化左側
- 移除右側名片，改為大頭照 + 簡單裝飾
- 統計數據移到 About section 統一呈現
```

---

### 問題 2：文字排版密度過高
**位置：** `index.html:130-133`

**問題：**
- Hero 區塊的 `<p>` 段落有 3 行，每行都塞滿 highlight 標籤
- 行高 1.8 仍顯擁擠，highlight 背景色切斷閱讀節奏

**建議：**
- 減少 highlight 使用（目前有 9 個），最多保留 3-4 個核心技能
- 考慮改用項目符號列表呈現

---

### 問題 3：導航選單缺少視覺反饋
**位置：** `index.html:93-97`

**問題：**
- 當前頁面的 nav-link 沒有明顯的 `active` 樣式
- hover 效果 (`hover:bg-black/5`) 太淡，幾乎看不見

**建議：**
```css
/* 添加 active 狀態樣式 */
.nav-link.active {
  background: #1a1a1a;
  color: white;
}

/* 加強 hover 效果 */
.nav-link:hover {
  background: rgba(0, 0, 0, 0.1);
}
```

---

### 問題 4：專案卡片 Hover 效果不一致
**位置：** `index.html:465-661`

**問題：**
- 前 3 張卡片沒有 `hover:-translate-y-1` 效果
- 部分卡片有 `hover:shadow-[0_12px_40px...]`，部分沒有
- 視覺體驗不連貫

**建議：**
統一所有專案卡片的 hover 效果：
```css
.project-card {
  transition: transform 0.3s, box-shadow 0.3s;
}
.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}
```

---

### 問題 5：「下載履歷」按鈕是死連結
**位置：** `index.html:99-109`

**問題：**
- `href="#"` 沒有實際連結
- 這是 CTA 按鈕，卻無法使用，影響轉換率

**建議：**
- 製作 PDF 履歷並上傳
- 或暫時隱藏按鈕，避免用戶困惑

---

### 問題 6：Footer 聯絡資訊使用假資料
**位置：** `index.html:862-865`

**問題：**
- 電話 `tel:+886123456789` 是假號碼
- Email `kenny@example.com` 是假信箱
- LinkedIn/GitHub 連結也是假的

**建議：**
- 替換為真實聯絡方式
- 或移除不想公開的聯絡方式

---

### 問題 7：語言切換功能未實現
**位置：** `index.html:872-877`

**問題：**
- 語言切換 UI 存在但無實際功能
- 點擊「EN」沒有反應

**建議：**
- 實現 i18n 功能
- 或暫時移除，避免 UX 斷裂

---

### 問題 8：技能區塊缺乏層次感
**位置：** `index.html:244-452`

**問題：**
- 12 張技能卡片太多，資訊量過大
- 所有卡片視覺權重相同，無法突出核心技能
- 「語言能力」（TOEIC 835）與技術技能放在一起，類別不協調

**建議：**
```
方案 A：分層展示
- 核心技能（4張大卡）：SwiftUI, Flutter, .NET MAUI, Figma
- 輔助技能（小標籤列表）：API整合, AI, 地圖, Git 等

方案 B：熟練度指標
- 為每項技能添加熟練度 bar 或年資標示
- 讓用戶快速了解專精程度
```

---

### 問題 9：手機版 UX 問題
**位置：** `styles.css:479-534`

**問題：**
- 專案詳情頁的按鈕在手機版只顯示 icon（`font-size: 0`），但 icon 意義不明確
- 底部語言切換 `bottom-8 right-8` 在手機版可能遮擋內容

**建議：**
- 手機版按鈕考慮保留縮寫文字（如「查看」「GitHub」）
- 語言切換改為收進 hamburger menu

---

### 問題 10：缺少 404 和 Loading 狀態
**問題：**
- 專案詳情頁動態載入內容時顯示「載入中...」純文字
- 沒有 skeleton loader 或 spinner
- 如果圖片載入失敗，只顯示 base64 佔位符

**建議：**
- 添加 skeleton loading 動畫
- 圖片載入失敗時顯示更友善的提示

---

## 三、細節優化建議 (Polish)

### 1. 字體優化
```css
/* 建議：中文內容添加思源黑體作為 fallback */
font-family: -apple-system, ..., 'Noto Sans TC', sans-serif;
```

### 2. 頁面標題 SEO
```html
<!-- 建議添加 meta description -->
<meta name="description" content="UI/UX 跨平台工程師，專精 SwiftUI、Flutter、.NET MAUI 開發，具備 Figma 設計與 AI 整合經驗">
```

### 3. 專案卡片描述長度不一
- 有的 2 行，有的 3 行，導致按鈕高度不對齊
- 建議設定 `min-height` 或使用 `line-clamp`

### 4. 時間軸終點處理
- Timeline 的 `::before` 線條延伸到最後一個 item 下方
- 建議在最後一個 item 添加終點圓形標記

### 5. Accessibility
- 缺少 `aria-label` 標籤
- 顏色對比度部分地方可能不達 WCAG AA 標準（如 `#666` 在白底上）
- 建議 footer 社交連結添加 `aria-label`

---

## 四、優先級建議

| 優先級 | 問題 | 影響 |
|--------|------|------|
| P0 | Footer 假資料 | 信任度 |
| P0 | 下載履歷按鈕無效 | 轉換率 |
| P1 | Hero 資訊過載 | 第一印象 |
| P1 | 卡片 hover 不一致 | 專業度 |
| P2 | 語言切換未實現 | 功能完整性 |
| P2 | 技能區塊過多 | 資訊層級 |
| P3 | 手機版細節 | 移動體驗 |

---

# Part 2：Astro + TypeScript 遷移計畫

## 目標
將現有純靜態 HTML/CSS/JS 個人簡歷網站遷移至 Astro + TypeScript 架構，實現內容與程式碼分離，並解決已知 UI/UX 問題。

## 用戶選擇
- **架構**：Astro + TypeScript
- **履歷 PDF**：需要生成
- **聯絡資訊**：用戶會提供真實資料
- **部署平台**：GitHub Pages

---

## 新專案結構

```
portfolio-astro/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── tailwind.config.mjs
├── public/
│   ├── profile.JPG
│   ├── documents/projects/          # 媒體資源
│   │   ├── bus/
│   │   ├── tuan/
│   │   └── ...
│   └── resume.pdf                   # 履歷 PDF
│
├── src/
│   ├── content/                     # Content Collections
│   │   ├── config.ts               # Zod schema 定義
│   │   ├── projects/               # 專案 Markdown (8 個)
│   │   │   ├── bus.md
│   │   │   ├── tuan.md
│   │   │   ├── pos.md
│   │   │   ├── justai.md
│   │   │   ├── mino.md
│   │   │   ├── mish.md
│   │   │   ├── findtoilets.md
│   │   │   └── spostats.md
│   │   └── experience/             # 經歷 Markdown (3 個)
│   │       ├── josic.md
│   │       ├── personal.md
│   │       └── pm.md
│   │
│   ├── components/
│   │   ├── common/                 # Navbar, Footer, SectionHeader, TechTag, Button
│   │   ├── hero/                   # HeroSection, ProfileCard
│   │   ├── about/                  # AboutSection, StatCard
│   │   ├── skills/                 # SkillsSection, SkillCard
│   │   ├── projects/               # ProjectsSection, ProjectCard, ProjectFilter.tsx
│   │   ├── experience/             # ExperienceSection, TimelineItem
│   │   └── ui/                     # LanguageToggle.tsx (React)
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ProjectLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   └── projects/[slug].astro   # 動態路由
│   │
│   ├── data/
│   │   ├── skills.ts               # 技能資料
│   │   └── personal.ts             # 個人資訊
│   │
│   ├── i18n/
│   │   ├── index.ts
│   │   ├── zh-TW.json
│   │   └── en.json
│   │
│   ├── styles/
│   │   ├── global.css
│   │   └── animations.css
│   │
│   └── types/
│       └── index.ts                # TypeScript 型別定義
│
└── .github/
    └── workflows/
        └── deploy.yml              # GitHub Pages 自動部署
```

---

## TypeScript 型別定義

```typescript
// src/types/index.ts

// ========== 專案相關型別 ==========

export type ProjectCategory =
  | 'maui'
  | 'swift'
  | 'flutter'
  | 'ai'
  | 'system'
  | 'automation'
  | 'ui-design';

export type LinkType =
  | 'figma'
  | 'wireframe'
  | 'appstore'
  | 'googleplay'
  | 'github'
  | 'website'
  | 'demo';

export interface ProjectLink {
  type: LinkType;
  url: string;
  label?: string;
}

export interface ProjectHighlight {
  title: string;
  description: string;
  video?: string;
  image?: string;
}

export interface ProjectChallenge {
  title: string;
  situation: string;
  difficulty: string;
  solution: string;
  result: string;
}

// Frontmatter Schema for Projects
export interface ProjectFrontmatter {
  title: string;
  slug: string;
  description: string;
  categories: ProjectCategory[];
  techStack: string[];
  coverImage: string;
  detailImage: string;
  figmaDesignImage?: string;
  techArchitectureImage?: string;
  links: ProjectLink[];
  highlights?: ProjectHighlight[];
  challenges?: ProjectChallenge[];
  process?: {
    design: string[];
    development: string[];
  };
  reflection?: string[];
  featured?: boolean;
  order: number;
  published: boolean;
}

// ========== 技能相關型別 ==========

export interface Skill {
  name: string;
  icon: string;
  iconColor: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

// ========== 經歷相關型別 ==========

export interface ExperienceFrontmatter {
  title: string;
  company: string;
  duration: string;
  order: number;
  techStack: string[];
}

// ========== 個人資訊型別 ==========

export interface PersonalInfo {
  name: { zh: string; en: string };
  title: { zh: string; en: string };
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  resumeUrl?: string;
}

// ========== i18n 型別 ==========

export type Language = 'zh-TW' | 'en';
```

---

## Content Collection Schema

```typescript
// src/content/config.ts

import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    categories: z.array(z.enum([
      'maui', 'swift', 'flutter', 'ai',
      'system', 'automation', 'ui-design'
    ])),
    techStack: z.array(z.string()),
    coverImage: z.string(),
    detailImage: z.string(),
    figmaDesignImage: z.string().optional(),
    techArchitectureImage: z.string().optional(),
    links: z.array(z.object({
      type: z.enum([
        'figma', 'wireframe', 'appstore',
        'googleplay', 'github', 'website', 'demo'
      ]),
      url: z.string().url(),
      label: z.string().optional()
    })),
    highlights: z.array(z.object({
      title: z.string(),
      description: z.string(),
      video: z.string().optional(),
      image: z.string().optional()
    })).optional(),
    challenges: z.array(z.object({
      title: z.string(),
      situation: z.string(),
      difficulty: z.string(),
      solution: z.string(),
      result: z.string()
    })).optional(),
    process: z.object({
      design: z.array(z.string()),
      development: z.array(z.string())
    }).optional(),
    reflection: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    order: z.number(),
    published: z.boolean().default(true)
  })
});

const experienceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    duration: z.string(),
    order: z.number(),
    techStack: z.array(z.string())
  })
});

export const collections = {
  projects: projectsCollection,
  experience: experienceCollection
};
```

---

## 專案 Markdown 範例

```markdown
---
# src/content/projects/bus.md
title: "跳蛙公車2.0"
slug: "bus"
description: "跳蛙公車2.0幫助民眾在規劃公車行程時更快地完成購票和在地圖上自訂創建募集路線"
categories: ["maui"]
techStack:
  - ".NET MAUI"
  - "Google登入"
  - "地圖整合"
  - "Firebase推播"
  - "UI改版"
coverImage: "/documents/projects/bus/cover.png"
detailImage: "/documents/projects/bus/detailcover.png"
figmaDesignImage: "/documents/projects/bus/figma-design.png"
techArchitectureImage: "/documents/projects/bus/tech-architecture.svg"
links:
  - type: "figma"
    url: "https://www.figma.com/proto/..."
  - type: "appstore"
    url: "https://apps.apple.com/tw/app/..."
  - type: "googleplay"
    url: "https://play.google.com/store/apps/..."
highlights:
  - title: "首頁動態輪播公告"
    description: "設計動態輪播功能展示重要公告資訊，採用暖橘色作為主視覺..."
    video: "carousell.mov"
  - title: "互動式地圖介面"
    description: "地圖點擊互動功能，使用者可以直觀地在地圖上點擊標示附近公車站點..."
    video: "map.mov"
  - title: "訂購路線列表設計"
    description: "設計清晰的路線列表介面，運用橘色主色調突出重點資訊..."
    video: "list.mov"
challenges:
  - title: "Firebase 推播整合"
    situation: "首次導入 Firebase 推播功能..."
    difficulty: "全新技術領域..."
    solution: "採用持續研究與測試的方式..."
    result: "歷時數個月完成整合..."
process:
  design:
    - "**需求收集與競品分析**：公車處提供功能需求..."
    - "**多版本設計提案**：根據需求設計三種不同架構..."
  development:
    - "**技術選定**：依據公司技術規範，採用 .NET MAUI..."
    - "**開發分工協作**：負責 UI/UX 規劃與 APP 端開發..."
reflection:
  - "**技術突破**：首次成功整合 Firebase 推播系統..."
  - "**跨領域協作**：從 UI/UX 設計規劃到 .NET MAUI 開發實作..."
featured: true
order: 1
published: true
---

專案背景內容...
```

---

## 實作步驟

### Phase 1：專案初始化
- [ ] 初始化 Astro 專案
  ```bash
  npm create astro@latest portfolio-astro -- --template minimal --typescript strict
  cd portfolio-astro
  ```
- [ ] 安裝套件
  ```bash
  npx astro add tailwind react
  npm install clsx @fontsource/inter
  ```
- [ ] 設定 `tailwind.config.mjs`
- [ ] 設定 `tsconfig.json`（path aliases）
- [ ] 建立 `BaseLayout.astro`

### Phase 2：Content Collections 設定
- [ ] 定義 `src/content/config.ts`
- [ ] 轉換 8 個專案 txt 檔案 → Markdown + frontmatter
- [ ] 轉換 3 個經歷內容 → Markdown
- [ ] 遷移媒體資源至 `public/documents/projects/`

### Phase 3：首頁組件開發
- [ ] `Navbar.astro` - 浮動導航、響應式選單
- [ ] `HeroSection.astro` + `ProfileCard.astro`
- [ ] `AboutSection.astro` + `StatCard.astro`
- [ ] `SkillsSection.astro` + `SkillCard.astro`（精簡為 8 張）
- [ ] `ProjectsSection.astro` + `ProjectCard.astro`
- [ ] `ProjectFilter.tsx` (React)
- [ ] `ExperienceSection.astro` + `TimelineItem.astro`
- [ ] `Footer.astro`

### Phase 4：專案詳情頁
- [ ] 建立 `src/pages/projects/[slug].astro`
- [ ] `ProjectLayout.astro`
- [ ] 詳情內容區塊組件

### Phase 5：互動功能與 i18n
- [ ] `LanguageToggle.tsx` (React)
- [ ] 建立 `zh-TW.json` 和 `en.json`
- [ ] 滾動動畫（IntersectionObserver）
- [ ] 下載履歷功能

### Phase 6：UI/UX 修正
- [ ] 簡化 Hero 文字內容
- [ ] 統一專案卡片 hover 效果
- [ ] 更新 Footer 為真實聯絡資訊
- [ ] 精簡技能區塊（12→8 張）

### Phase 7：履歷 PDF 生成
- [ ] 根據網站內容生成履歷 PDF
- [ ] 放置於 `public/resume.pdf`

### Phase 8：測試與部署
- [ ] 響應式測試
- [ ] Lighthouse 效能測試
- [ ] 設定 GitHub Pages 部署
- [ ] 建立 GitHub Actions workflow

---

## 用戶需提供的資料

開始實作前，請提供：

1. **真實聯絡資訊**
   - Email 地址
   - LinkedIn 個人檔案網址
   - GitHub 個人檔案網址
   - （可選）電話號碼

2. **GitHub Pages 設定**
   - GitHub repo 名稱

---

## 設定檔案

### astro.config.mjs
```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/repo-name',  // 如果不是 username.github.io
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false })
  ],
  output: 'static'
});
```

### tailwind.config.mjs
```javascript
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#666',
        accent: '#667eea'
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'system-ui',
          'sans-serif'
        ]
      }
    }
  }
};
```

### GitHub Actions Workflow
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

---

## 驗證方式

1. **開發環境測試**
   ```bash
   npm run dev
   # 訪問 http://localhost:4321
   ```

2. **功能驗證**
   - [ ] 首頁所有區塊正常顯示
   - [ ] 專案篩選功能正常
   - [ ] 點擊「了解更多」跳轉專案詳情頁
   - [ ] 專案詳情頁內容正確載入
   - [ ] 語言切換功能正常
   - [ ] 下載履歷功能正常
   - [ ] 響應式佈局正常

3. **建置測試**
   ```bash
   npm run build
   npm run preview
   ```

4. **Lighthouse 目標**
   - Performance > 90
   - Accessibility > 90
   - Best Practices > 90
   - SEO > 90

---

## 關鍵檔案對照表

| 現有檔案 | 遷移後位置 |
|----------|-----------|
| `index.html` | `src/pages/index.astro` + 各組件 |
| `project-details.html` | `src/pages/projects/[slug].astro` |
| `script.js` | 分散至各 React 組件 + `src/utils/` |
| `styles.css` | `src/styles/global.css` + `animations.css` |
| `documents/profolio source/Bus/*.txt` | `src/content/projects/bus.md` |
| `documents/profolio source/Bus/Media/` | `public/documents/projects/bus/media/` |
