# Kenny Yu 作品集 · Design System

> **Inspired by:** Anthropic / Claude（暖米紙 × 陶土色）
> **Font pairing:** Lora (serif display, literary wide proportions) + SF Pro/Inter (sans body)
> **Source of truth:** [src/styles/global.css](src/styles/global.css) 的 `@theme` tokens
> 本文件記錄本作品集 **實際使用的** 設計 tokens 與慣例。修改視覺前請先對照本文件。

---

## 1. 設計哲學

**文學沙龍感**，不是冷冰冰的科技產品。三個支柱：

| 支柱 | 體現 |
|---|---|
| **暖色 everywhere** | 所有灰色都帶黃棕底色，絕不使用冷藍灰 |
| **襯線標題 + 無襯線內文** | 標題如書名般有份量，UI 文字安靜效率 |
| **Ring-based 陰影** | 深度靠 `0 0 0 1px` 光暈，而非 drop shadow |

---

## 2. 色彩系統

### 2.1 背景（Surfaces）
| Token | Hex | 角色 |
|---|---|---|
| `--color-bg` | `#f5f4ed` | **Parchment 米白** — 頁面主底，紙質感 |
| `--color-panel` | `#faf9f5` | **Ivory 象牙白** — 卡片、elevate 區塊 |
| `--color-surface` | `#e8e6dc` | **Warm Sand** — 按鈕／input 底 |
| `--color-surface-alt` | `#f0eee6` | **Border Cream** — 淺分隔 |
| `--color-card` | `#faf9f5` | 標準卡片（= Ivory） |
| `--color-dark-surface` | `#30302e` | 深色區塊 |
| `--color-dark-bg` | `#141413` | Near Black 深色頁底 |

### 2.2 文字（暖色調灰階）
| Token | Hex | 用途 |
|---|---|---|
| `--color-primary` | `#141413` | 主文字（Anthropic Near Black，暖黑） |
| `--color-secondary` | `#3d3d3a` | 次強調文字 |
| `--color-tertiary` | `#5e5d59` | Olive Gray — body 段落 |
| `--color-quaternary` | `#87867f` | Stone Gray — meta、描述 |
| `--color-on-dark` | `#b0aea5` | Warm Silver — 深色底的文字 |

### 2.3 品牌（Terracotta 陶土）
| Token | Hex | 用途 |
|---|---|---|
| `--color-accent` | `#c96442` | **主陶土色** — CTA、eyebrow、高光 |
| `--color-accent-hover` | `#d97757` | Coral — hover 狀態 |
| `--color-accent-pressed` | `#b5532f` | 按下狀態 |
| `--color-accent-tint` | `#faebe0` | **Tint 底** — 高亮關鍵字（SwiftUI、Figma 等） |
| `--color-accent-tint-strong` | `#f4d9c5` | 強 tint |

### 2.4 邊框
| Token | Hex | 用途 |
|---|---|---|
| `--color-border` | `#f0eee6` | 標準邊框（幾乎看不見） |
| `--color-border-strong` | `#e8e6dc` | 區段分隔 |
| `--color-border-dark` | `#30302e` | 深色底邊框 |

**邊框統一使用暖色 hex**（已淘汰冷半透明黑）：
- 輕邊框：`border-[#f0eee6]` — 卡片內圖片容器、淡分隔
- 標準邊框：`border-[#e8e6dc]` — **預設卡片/按鈕邊**
- 強邊框 / hover：`border-[#d1cfc5]` — 互動強調
- `bg-black/[0.04]` 仍可用於極淡的 tag 底色

### 2.5 語意色
| Token | Hex | 用途 |
|---|---|---|
| `--color-success` | `#10b981` | 成功（emerald，不完全暖） |
| `--color-error` | `#b53333` | **Error Crimson** — 暖紅，認真但不刺眼 |
| `--color-focus` | `#3898ec` | Focus Blue — 唯一冷色，只給 `:focus-visible` ring |

---

## 3. 字體系統

### 3.1 字體家族
```css
--font-family-display: 'Lora', 'Noto Serif TC', Georgia, serif;
--font-family-body:    -apple-system, 'SF Pro Text', 'Inter', 'PingFang TC', sans-serif;
--font-family-mono:    'Berkeley Mono', ui-monospace, 'SF Mono', Menlo, monospace;
```

**說明**：
- Mac/iPhone 內文使用 SF Pro；Windows 退到 Inter；中文一律 PingFang TC
- 標題使用 **Lora**（Google Fonts）— variable weight 400–700，**寬比例、圓潤、書卷氣**；避開過窄或過銳利的 serif（如 Fraunces、Instrument Serif）
- **預設 heading weight 600**（Noto Serif TC 中文在 500 偏瘦，600 才跟 Lora 搭得起來）— 所有 `h1`–`h6` 與 serif 標題元素統一 `font-[600]`
- 中文標題 fallback 為 Noto Serif TC（思源宋體），variable weight 400-700

### 3.2 字體階級（Lora serif 統一 600 weight）

| 角色 | Size | Weight | Font | Line-height |
|---|---|---|---|---|
| Hero H1 | `64px` / `lg:80px` | **600** | Serif | 1.0 |
| Section H2 | `48px` / `md:56px` | **600** | Serif | 1.0 |
| Detail Page H1 | `56px` / `md:64px` | **600** | Serif | 1.0 |
| Experience Title / Detail Section H2 | `32px` / `36px` | **600** | Serif | 1.2 |
| Project Card Title | `25px` | **600** | Serif | 1.25 |
| Process / Highlight Card H4 | `25px` | **600** | Serif | tight |
| Skill Card Name | `21px` | **600** | Serif | normal |
| Hero Subtitle | `22px` / `lg:24px` | **600** | Serif | normal |
| Intro Paragraph | `18–19px` | 400 | Body | 1.6 |
| Body Paragraph | `17px` | 400 | Body | 1.65 |
| List / Tech Tag | `14–16px` | 510 | Body | 1.65 |
| Button | `15–16px` | 590 | Body | normal |
| Meta / Caption | `13–14px` | 510–590 | Body | normal |
| Eyebrow / Badge | `13px` uppercase | 590 | Body | `tracking-[0.15em]` |
| Hero Tiny Label | `10px` uppercase | 510 | Body | `tracking-[0.12em]` |

### 3.3 字重規則
- **所有 Serif 標題** → `font-[600]`（Lora + Noto Serif TC 在此字重下最平衡）
- **階層靠字級**：大 `56-80px` → 中 `32-36px` → 小 `21-25px`
- **Sans body** → `font-[400]`（段落） / `font-[510]`（list） / `font-[590]`（按鈕、eyebrow）
- **避免** 700+（過於沉重，破壞 Anthropic 書卷感）
- **Eyebrow / accent 小標** → `font-[590]`
- **List / meta** → `font-[510]`
- **Body** → `font-[400]`

### 3.4 字距（letter-spacing）
- Display 類 → `tracking-display` / `-display-lg` / `-display-xl`（global.css 定義）
- 中標題 → `tracking-[-0.02em]`
- 內文 → `tracking-[-0.01em]` 或 normal
- Eyebrow 全大寫 → `tracking-[0.12em]` ~ `tracking-[0.15em]`

---

## 4. 間距系統

### 4.1 基本單位
Tailwind 預設（4px 基底）。

### 4.2 常用模式（Anthropic editorial pacing）
| 場景 | Class | px |
|---|---|---|
| **Section 垂直留白** | `py-24` | **96px 上下**（Anthropic 雜誌節奏） |
| **Hero 垂直留白** | `py-28 lg:py-0` | **112px** |
| Section 標題下方 | `mb-10` / `mb-12` | 40 / 48px |
| Card 內部 padding | `p-8` / `p-10` | 32 / 40px |
| Card 元素 gap | `gap-6` / `gap-8` | 24 / 32px |
| Hero 欄位 gap | `gap-12` | 48px |
| Timeline 項目 gap | `space-y-14` | 56px |

### 4.3 容器
- 全站最大寬度：`max-w-[1400px]` + `mx-auto` + `px-5`（手機 20px 側邊）
- Navbar 同步使用 `max-w-[1400px]`

---

## 5. 邊角（Border Radius — Anthropic scale）

| Token / Class | px | 用途 |
|---|---|---|
| `rounded` | 4px | 極小 inline 元素（highlight 關鍵字底） |
| `rounded-lg` | **8px** | **次小按鈕、Tech tag、meta 小標、name card action buttons** |
| `rounded-[10px]` | **10px** | **Primary/Secondary CTA、Navbar 按鈕**（Anthropic 精確值） |
| `rounded-xl` | 12px | Input、nav 內元素（保留） |
| `rounded-2xl` | **16px** | **主要卡片**（project、process、challenge、highlight、stat item） |
| `rounded-[24px]` | 24px | tag-like 高圓角元素 |
| `rounded-[32px]` | **32px** | **Hero 大圖、feature media**（"maximum rounded"） |
| `rounded-full` | ∞ | 圓點、indicator、icon badge |

**使用優先級**：寧可圓一點也不要尖（Anthropic 核心識別之一）。

---

## 6. 陰影系統（Ring + Whisper）

**核心原則**：Anthropic 風格是 **ring shadow**（用陰影模擬邊框）而非傳統 drop shadow。

### 6.1 分級
| 等級 | 寫法 | 使用情境 |
|---|---|---|
| **Level 0** | 無 | 純 parchment 底 |
| **Level 1（contained）** | `border border-[#e8e6dc]` | 標準卡片、按鈕邊 |
| **Level 2（ring hover）** | `hover:shadow-[0_0_0_1px_#d1cfc5,0_4px_24px_rgba(20,20,19,0.05)]` | 卡片／圖片／按鈕 hover |
| **Level 3（whisper）** | `shadow-[0_1px_2px_rgba(20,20,19,0.04)]` | Card idle 輕微浮起 |
| **Level 4（floating）** | `shadow-[0_8px_24px_rgba(20,20,19,0.08)]` | Navbar scrolled、dropdown |

### 6.2 Hover 模式（標準互動卡片）
```html
<div class="border border-[#e8e6dc]
            shadow-[0_1px_2px_rgba(20,20,19,0.04)]
            transition-all duration-200
            hover:shadow-[0_0_0_1px_#d1cfc5,0_4px_24px_rgba(20,20,19,0.05)]">
```
**重點**：hover 時用 ring shadow（`0 0 0 1px`）取代原本的 border 變色，視覺更柔順。

---

## 7. 元件規範

### 7.1 Button

> **重要原則**：Terracotta `#c96442` **不用於 CTA 按鈕**，它只做強調色（eyebrow、icon、分隔線、hover border、highlight tint）。按鈕用近黑 `#141413` 做 primary、用 Ivory 做 secondary。三色分工：
> - **`#141413` 近黑**：primary button、深色強調
> - **`#FAF9F5` 象牙白**：卡片底、secondary button、dark button 上的文字
> - **`#c96442` 陶土**：純強調（eyebrow、icon、點綴線條、hover tint），**絕不**當按鈕底

**Primary（Near Black）** — 主要 CTA（`rounded-[10px]`，比 12px 鋭利一點、更 Anthropic）
```html
<a class="px-6 py-2.5 rounded-[10px] bg-[#141413] text-[#faf9f5]
          font-[590] text-[14px] tracking-[-0.01em]
          hover:bg-[#30302e]
          shadow-[0_1px_2px_rgba(20,20,19,0.15),0_0_0_1px_#141413]">
  查看作品
</a>
```

**Secondary（Ivory with ring shadow）** — 次要 CTA（`rounded-[10px]`）
```html
<a class="px-6 py-2.5 rounded-[10px] bg-[#faf9f5] text-[#141413]
          font-[590] text-[14px]
          shadow-[0_0_0_1px_#e8e6dc]
          hover:shadow-[0_0_0_1px_#d1cfc5] hover:bg-black/[0.02]">
  查看經歷
</a>
```

**Navbar Download**（`h-[36px]`）
```html
<a class="flex items-center gap-2 px-5 h-[36px] rounded-[10px]
          bg-[#141413] text-[#faf9f5] text-[14px] font-[510]
          hover:bg-[#30302e]
          shadow-[0_1px_2px_rgba(20,20,19,0.15)]">
  下載履歷
</a>
```

**Tag / Ghost 按鈕**（`rounded-lg` / 8px）
```html
<a class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg
          border border-[#e8e6dc] bg-[#faf9f5] text-[#141413]
          text-[14px] font-[590]
          hover:border-[#c96442]/40 hover:bg-[#faebe0] hover:text-[#b5623d]">
  App Store
</a>
```

### 7.2 Card（Project / Process / Challenge / Highlight）
```html
<div class="bg-[#faf9f5] p-8 rounded-2xl border border-[#e8e6dc]
            shadow-[0_1px_2px_rgba(20,20,19,0.04)]
            transition-all duration-200
            hover:shadow-[0_0_0_1px_#d1cfc5,0_4px_24px_rgba(20,20,19,0.05)]">
  ...
</div>
```

### 7.2b Hero Media / Featured Image（`rounded-[32px]`）
```html
<div class="relative aspect-[4/5] rounded-[32px] overflow-hidden
            border border-[#e8e6dc]
            shadow-[0_1px_2px_rgba(20,20,19,0.04),
                   0_8px_24px_rgba(20,20,19,0.06)]">
  <img src="..." />
</div>
```

### 7.2c Hero Name Card（橫式名片，`rounded-2xl`）

單張卡內三區塊垂直堆疊：**Header row → 數據列 → 動作列**。Header row 是「左 avatar + 右名字/職稱/地點」的水平佈局。

```html
<div class="rounded-2xl bg-[#faf9f5] border border-[#e8e6dc]
            shadow-[0_1px_2px_rgba(20,20,19,0.04),
                   0_8px_24px_rgba(20,20,19,0.06)]
            p-6 space-y-5">

  <!-- A. Header row（水平：avatar + 資訊） -->
  <div class="flex items-start gap-4">
    <img src={photo} class="w-20 h-20 rounded-2xl object-cover object-top
                            border border-[#e8e6dc] flex-shrink-0" />
    <div class="flex-1 min-w-0">
      <!-- 狀態 uppercase eyebrow + 綠點 -->
      <!-- 姓名 H3（24px）+ 職稱 13px + 地點 12px -->
    </div>
  </div>

  <!-- B. 數據列 3 欄，上下 border -->
  <div class="grid grid-cols-3 py-3 border-y border-[#f0eee6]">
    <!-- Years / Projects / Platforms -->
  </div>

  <!-- C. 動作列：Email + GitHub + 主 CTA -->
  <div class="flex items-center gap-2">
    <!-- 三顆按鈕橫排，最後一顆 flex-1 吃剩餘寬度 -->
  </div>
</div>
```

**結構規範**：
- **Avatar 尺寸**：`w-20 h-20`（80×80px），`rounded-2xl`（16px 圓角），方形不是圓形
- **卡片整體 radius**：`rounded-2xl`（16px）— 不要 32px，那是大圖片的尺度
- **分隔系統**：用 `border-y border-[#f0eee6]` 包圍數據列，不再用獨立 `h-px` 線
- 動作列 CTA（下載履歷）用 `flex-1` 吃滿剩餘寬度，Email / GitHub 為固定寬

### 7.2d Navbar（固定全寬橫條）

**不是** 懸浮膠囊。改為貼齊頂端的全寬水平條：

```html
<nav class="fixed top-0 left-0 right-0 w-full
            bg-[#faf9f5]/85 backdrop-blur-md
            border-b border-[#f0eee6] z-[1000]">
  <div class="max-w-[1400px] mx-auto px-6 h-14 grid
              grid-cols-[1fr_auto_1fr] items-center">
    <!-- Logo · Nav Menu · CTA -->
  </div>
</nav>
```

**規範**：
- `fixed top-0` 貼齊螢幕頂端，不留 gap
- 高度 `h-14` (56px)
- 背景：`bg-[#faf9f5]/85 backdrop-blur-md`（**不要** `backdrop-blur-xl`，毛玻璃感過重）
- 分隔：`border-b border-[#f0eee6]`（單線下邊）
- 無 rounded 角（整條貼齊）、無 scroll 狀態切換（視覺一致）

### 7.3 Section Header（`src/components/common/SectionHeader.astro`）
- **Eyebrow**: `text-[13px] font-[590] text-[#c96442] uppercase tracking-[0.15em]`
- **Title**: `text-[48px] md:text-[56px] font-[510] text-[#141413] tracking-display`
- **Description** (optional): `text-[17-18px] text-[#5e5d59] leading-[1.6]`

### 7.4 Eyebrow Label（在區塊開頭、卡片頂部）
```html
<p class="text-[13px] font-[590] text-[#c96442]
          uppercase tracking-[0.15em] mb-3">
  Experience
</p>
```

### 7.5 Highlight Keyword（內文中的關鍵字）
```html
<span class="bg-[#faebe0] px-1.5 py-0.5 rounded
             text-[#b5623d] font-[590]">SwiftUI</span>
```

### 7.5b Skill Icon（扁平無底，保留品牌原色）

Skills 區每個 icon 採「**扁平無背景 + 放大至 28px + 保留品牌色**」模式：

```html
<div class="w-11 h-11 flex items-center justify-start text-[28px] flex-shrink-0"
     style="color: #F05138">
  <i class="fab fa-swift"></i>
</div>
```

**規範**：
- **不放** `rounded-lg bg-[#...]` 之類的灰色方塊底
- icon size **28px**（沒有底框後，單靠字級撐體積）
- 保留 `w-11 h-11` 外框確保對齊一致
- 顏色：品牌原色 `iconColor`（Swift 橘 / React 藍等）— 這是 Anthropic 純度和技術辨識度之間的取捨

### 7.6 Tech Tag
```html
<span class="text-[#5e5d59] px-2.5 py-1 rounded-md text-[14px]
             font-[510] border border-black/[0.08] bg-[#faf9f5]
             tracking-[-0.01em]">
  Flutter
</span>
```

### 7.7 Timeline Dot（ExperienceSection）
```html
<div class="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full
            bg-[#c96442]
            shadow-[0_0_0_4px_#ffffff,0_0_0_5px_rgba(201,100,66,0.2)]"></div>
```

---

## 8. Animation / Transition

| 用途 | 值 |
|---|---|
| Hover transitions | `transition-all duration-200` |
| Card hover scale | `group-hover:scale-[1.02]` + `duration-500` |
| Scroll reveal | `.scroll-fade-in-up` 類（global.css 已定義） |
| Page fade | `.page-fade-overlay` |

---

## 9. 響應式斷點

沿用 Tailwind 預設：
- `md:` 768px（tablet）
- `lg:` 1024px（desktop）

**關鍵調整點**：
- Hero grid：`grid-cols-1` → `lg:grid-cols-12`（7:5 欄位）
- Hero H1 size：`text-[64px]` → `lg:text-[80px]`
- Section H2 size：`text-[48px]` → `md:text-[56px]`
- Navbar 在 `max-md:` 會收合為側邊選單

---

## 10. 不能做的事（Don'ts）

- ❌ **Terracotta 當按鈕底** — 陶土色只做強調（eyebrow、icon、線、hover tint），primary CTA 一律用 `#141413`
- ❌ **Serif 標題 font-weight ≥ 700** — 過於沉重。本站統一 `font-[600]`（為了配合中文 Noto Serif TC 的視覺重量）
- ❌ **純白背景**（`#ffffff`）— 用 Parchment 或 Ivory
- ❌ **冷灰** — 不要用 `#6f7681`、`#9ca3af` 之類的藍灰，改用 `#87867f`、`#5e5d59`
- ❌ **冷色半透明黑邊框** `border-black/[0.0X]` — 改用 `border-[#e8e6dc]` / `#f0eee6`
- ❌ **標題用無襯線** — 所有 `h1`-`h6` 預設都是 Lora；需要無襯線的「標題」請改用 `<p>` / `<span>` 搭配合適 class
- ❌ **尖角**（< 8px）在按鈕／卡片上 — `rounded-lg` 為下限；媒體圖片至少 `rounded-2xl`
- ❌ **過重的 drop shadow** — 互動優先用 ring shadow（`0 0 0 1px`），不要 `shadow-lg`／`shadow-xl`
- ❌ **寫死舊色碼**（`#d97757`、`#08090a`、`#3c4149`、`#6f7681`、`#c4873a`）— 已汰除

---

## 11. 檔案索引

| 檔案 | 內容 |
|---|---|
| [src/styles/global.css](src/styles/global.css) | CSS tokens、base 樣式、動畫 |
| [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro) | HTML shell、字體載入、全站 script |
| [src/components/common/](src/components/common/) | Navbar、Footer、SectionHeader |
| [src/components/hero/HeroSection.astro](src/components/hero/HeroSection.astro) | 首頁大標 |
| [src/components/projects/ProjectCard.astro](src/components/projects/ProjectCard.astro) | **卡片樣式標準** |
| [src/pages/projects/%5Bslug%5D.astro](src/pages/projects/[slug].astro) | 專案詳情頁（含所有 section 樣式） |

---

## 12. 擴充原則

要新增一個元件時：
1. **先查** 是否已有類似模式（Button？Card？Eyebrow？）
2. **沿用 token** — 新寫的 hex 值應該是上表 token 的一員
3. **留白與本文件一致** — 不要隨意 `py-32`
4. **字重遵守 3.3 規則** — 大標 510、卡片標題 700、eyebrow 590、body 400/510
5. **陰影優先用 ring 或 whisper**，不要用 `shadow-lg`、`shadow-xl` 這類 Tailwind preset

---

*Generated: 2026-04-21 · 基於 Anthropic Claude design system、參考 [claude/DESIGN.md](claude/DESIGN.md)*
