# i18n 國際化實作計畫

> 建立日期：2026-01-29
> 專案位置：`/Users/jonathanyu/Desktop/𝙲𝚅/portfolio-astro/`

---

## 目標

為 Portfolio 網站新增中英文語言切換功能，讓使用者可以在繁體中文與英文之間切換。

---

## 實作架構

### 方案：URL 路徑前綴 + JSON 翻譯檔

```
/kennyreseme/          → 繁體中文（預設）
/kennyreseme/en/       → English
```

---

## 實作步驟

### Step 1：建立翻譯檔案

**建立 `src/i18n/zh-TW.json`**
```json
{
  "nav": {
    "home": "首頁",
    "about": "關於我",
    "skills": "專業技能",
    "projects": "專案作品",
    "experience": "工作經歷",
    "downloadResume": "下載履歷"
  },
  "hero": {
    "greeting": "您好，我是",
    "title": "UI/UX 跨平台工程師",
    "description": "具備 SwiftUI、Flutter 跨平台開發經驗，專精 .NET MAUI 商業應用開發",
    "viewProjects": "查看作品",
    "viewExperience": "查看經歷"
  },
  "about": {
    "title": "關於我",
    "stats": {
      "projects": "App專案",
      "years": "工作年資"
    }
  },
  "skills": {
    "title": "專業技能",
    "categories": {
      "mobile": "行動應用開發",
      "backend": "後端與系統整合",
      "collaboration": "專案協作與工具"
    }
  },
  "projects": {
    "title": "專案作品",
    "otherProjects": "其他系統專案",
    "learnMore": "了解更多"
  },
  "experience": {
    "title": "工作經歷"
  },
  "footer": {
    "copyright": "UI/UX 跨平台工程師"
  },
  "projectDetail": {
    "techStack": "技術棧",
    "myRole": "我的角色",
    "highlights": "設計與技術亮點",
    "challenges": "技術挑戰與解決方案",
    "process": "開發流程",
    "designProcess": "設計流程",
    "devProcess": "開發流程",
    "reflection": "學習與反思",
    "backToHome": "返回首頁",
    "situation": "情境",
    "difficulty": "困難點",
    "solution": "解決方案",
    "result": "結果"
  }
}
```

**建立 `src/i18n/en.json`**
```json
{
  "nav": {
    "home": "Home",
    "about": "About",
    "skills": "Skills",
    "projects": "Projects",
    "experience": "Experience",
    "downloadResume": "Download Resume"
  },
  "hero": {
    "greeting": "Hello, I'm",
    "title": "UI/UX Cross-Platform Engineer",
    "description": "Experienced in SwiftUI and Flutter cross-platform development, specializing in .NET MAUI enterprise applications",
    "viewProjects": "View Projects",
    "viewExperience": "View Experience"
  },
  "about": {
    "title": "About Me",
    "stats": {
      "projects": "App Projects",
      "years": "Years of Experience"
    }
  },
  "skills": {
    "title": "Skills",
    "categories": {
      "mobile": "Mobile Development",
      "backend": "Backend & Integration",
      "collaboration": "Collaboration & Tools"
    }
  },
  "projects": {
    "title": "Projects",
    "otherProjects": "Other System Projects",
    "learnMore": "Learn More"
  },
  "experience": {
    "title": "Experience"
  },
  "footer": {
    "copyright": "UI/UX Cross-Platform Engineer"
  },
  "projectDetail": {
    "techStack": "Tech Stack",
    "myRole": "My Role",
    "highlights": "Design & Technical Highlights",
    "challenges": "Technical Challenges & Solutions",
    "process": "Development Process",
    "designProcess": "Design Process",
    "devProcess": "Development Process",
    "reflection": "Reflection & Learnings",
    "backToHome": "Back to Home",
    "situation": "Situation",
    "difficulty": "Difficulty",
    "solution": "Solution",
    "result": "Result"
  }
}
```

---

### Step 2：建立 i18n 工具函數

**建立 `src/i18n/index.ts`**
```typescript
import zhTW from './zh-TW.json';
import en from './en.json';

export type Language = 'zh-TW' | 'en';

export const languages: Record<Language, string> = {
  'zh-TW': '繁中',
  'en': 'EN'
};

export const defaultLang: Language = 'zh-TW';

const translations = {
  'zh-TW': zhTW,
  'en': en
} as const;

export function getLangFromUrl(url: URL): Language {
  const [, base, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'zh-TW';
}

export function useTranslations(lang: Language) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = translations[lang];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };
}

export function getLocalizedPath(path: string, lang: Language): string {
  const base = '/kennyreseme';
  if (lang === 'en') {
    return `${base}/en${path === '/' ? '' : path}`;
  }
  return `${base}${path === '/' ? '' : path}`;
}
```

---

### Step 3：更新專案資料支援多語言

**更新 `src/data/personal.ts`**
```typescript
export const aboutParagraphs = {
  'zh-TW': [
    '畢業於長庚大學資訊管理學系...',
    '我對使用者體驗與細節具有高度敏銳度...'
  ],
  'en': [
    'Graduated from Chang Gung University...',
    'Highly detail-oriented with a strong passion...'
  ]
};
```

**更新 `src/data/skills.ts`** - 為每個技能新增 `description_en` 欄位

**更新 `src/data/projects.ts`** - 為每個專案新增 `description_en` 欄位

**更新 `src/data/experience.ts`** - 為每個經歷新增英文版本

---

### Step 4：建立英文版頁面

**建立 `src/pages/en/index.astro`**
```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Navbar from '../../components/common/Navbar.astro';
import Footer from '../../components/common/Footer.astro';
import HeroSection from '../../components/hero/HeroSection.astro';
import AboutSection from '../../components/about/AboutSection.astro';
import SkillsSection from '../../components/skills/SkillsSection.astro';
import ProjectsSection from '../../components/projects/ProjectsSection.astro';
import ExperienceSection from '../../components/experience/ExperienceSection.astro';

const lang = 'en';
---

<BaseLayout title="Kenny Yu - UI/UX Cross-Platform Engineer">
  <Navbar lang={lang} />
  <main>
    <HeroSection lang={lang} />
    <AboutSection lang={lang} />
    <SkillsSection lang={lang} />
    <ProjectsSection lang={lang} />
    <ExperienceSection lang={lang} />
  </main>
  <Footer lang={lang} />
</BaseLayout>
```

**建立 `src/pages/en/projects/[slug].astro`** - 複製原本的專案詳情頁並加入 `lang='en'`

---

### Step 5：更新組件支援語言切換

**修改所有組件接受 `lang` prop**

範例 - 更新 `Navbar.astro`：
```astro
---
import { personalInfo } from '../../data/personal';
import { useTranslations, getLocalizedPath, type Language } from '../../i18n';

interface Props {
  lang?: Language;
}

const { lang = 'zh-TW' } = Astro.props;
const t = useTranslations(lang);
const base = import.meta.env.BASE_URL;
---

<nav class="navbar ...">
  <!-- 使用 t('nav.home') 取代硬編碼文字 -->
  <li><a href={getLocalizedPath('#home', lang)} class="nav-link">{t('nav.home')}</a></li>
  <!-- ... -->
</nav>
```

---

### Step 6：建立語言切換組件

**建立 `src/components/ui/LanguageToggle.astro`**
```astro
---
import { languages, type Language, getLocalizedPath } from '../../i18n';

interface Props {
  currentLang: Language;
  currentPath: string;
}

const { currentLang, currentPath } = Astro.props;
---

<div class="language-toggle fixed bottom-8 right-8 z-[1000] md:bottom-5 md:right-5">
  <div class="lang-switch bg-white/95 backdrop-blur-[20px] rounded-[32px] p-1 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-[rgba(0,0,0,0.08)] flex gap-0">
    {Object.entries(languages).map(([code, label]) => (
      <a
        href={getLocalizedPath(currentPath, code as Language)}
        class={`lang-option px-4 py-2 rounded-[28px] text-[0.85rem] font-medium cursor-pointer transition-all duration-300 select-none min-w-[44px] text-center no-underline ${
          currentLang === code
            ? 'bg-[#1a1a1a] text-white shadow-[0_2px_8px_rgba(0,0,0,0.15)]'
            : 'text-[#64748b] hover:text-[#1a1a1a] hover:bg-[rgba(0,0,0,0.05)]'
        }`}
      >
        {label}
      </a>
    ))}
  </div>
</div>
```

---

### Step 7：更新 BaseLayout

**修改 `src/layouts/BaseLayout.astro`**
```astro
---
import '../styles/global.css';
import LanguageToggle from '../components/ui/LanguageToggle.astro';
import type { Language } from '../i18n';

interface Props {
  title: string;
  description?: string;
  lang?: Language;
}

const { title, description, lang = 'zh-TW' } = Astro.props;
const currentPath = Astro.url.pathname.replace('/kennyreseme', '').replace('/en', '') || '/';
---

<!DOCTYPE html>
<html lang={lang === 'zh-TW' ? 'zh-TW' : 'en'}>
<head>
  <!-- ... -->
</head>
<body>
  <slot />
  <LanguageToggle currentLang={lang} currentPath={currentPath} />
</body>
</html>
```

---

## 檔案清單

需要建立/修改的檔案：

| 檔案路徑 | 動作 |
|---------|------|
| `src/i18n/zh-TW.json` | 新建 |
| `src/i18n/en.json` | 新建 |
| `src/i18n/index.ts` | 新建 |
| `src/pages/en/index.astro` | 新建 |
| `src/pages/en/projects/[slug].astro` | 新建 |
| `src/components/ui/LanguageToggle.astro` | 新建 |
| `src/layouts/BaseLayout.astro` | 修改 |
| `src/components/common/Navbar.astro` | 修改 |
| `src/components/common/Footer.astro` | 修改 |
| `src/components/hero/HeroSection.astro` | 修改 |
| `src/components/about/AboutSection.astro` | 修改 |
| `src/components/skills/SkillsSection.astro` | 修改 |
| `src/components/projects/ProjectsSection.astro` | 修改 |
| `src/components/projects/ProjectCard.astro` | 修改 |
| `src/components/experience/ExperienceSection.astro` | 修改 |
| `src/data/personal.ts` | 修改 |
| `src/data/skills.ts` | 修改 |
| `src/data/projects.ts` | 修改 |
| `src/data/experience.ts` | 修改 |
| `src/data/projectDetails.ts` | 修改 |

---

## 執行指令

完成所有修改後，執行以下指令驗證：

```bash
cd /Users/jonathanyu/Desktop/𝙲𝚅/portfolio-astro

# 建置測試
npm run build

# 啟動開發伺服器
npm run dev

# 訪問測試
# 中文版：http://localhost:4321/kennyreseme/
# 英文版：http://localhost:4321/kennyreseme/en/
```

---

## 注意事項

1. **保持 URL 結構一致** - 英文版使用 `/en/` 前綴
2. **預設語言為中文** - 無前綴的 URL 顯示繁體中文
3. **SEO 考量** - 確保每個語言版本都有正確的 `<html lang="">` 屬性
4. **專案詳情翻譯** - 專案的詳細內容（背景、挑戰、反思）需要手動翻譯或使用 AI 輔助

---

## 預估工作量

- 翻譯檔案建立：30 分鐘
- i18n 工具函數：15 分鐘
- 英文版頁面建立：20 分鐘
- 組件修改：45 分鐘
- 資料檔案更新（含翻譯）：60 分鐘
- 測試與調整：30 分鐘

**總計：約 3 小時**

---

*此計畫提供完整的 i18n 實作指南，可依此步驟逐一完成多語言功能。*
