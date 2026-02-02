# 專案詳細頁面 UI/UX 重新設計計劃

> 基於 **frontend-design skill** 指南制定

---

## 目標

將專案詳細頁面從「AI 感」改為「現代簡約感」，移除漸層效果，打造乾淨、專業的視覺體驗。

---

## 修改檔案

- [src/pages/projects/[slug].astro](src/pages/projects/[slug].astro) — 專案詳細頁面主體

---

## Design Thinking（根據 frontend-design skill）

### Purpose
專案作品集詳細頁，展示 UI/UX 工程師的技術實力與設計思維，目標受眾為招募方、潛在雇主。

### Tone 選擇：**Editorial Minimalism（編輯式極簡）**
- 如同高端設計雜誌的排版
- 精確控制的字體層級
- 大量留白創造呼吸感
- 細節處見功力

### Differentiation
讓人記住的一點：**克制中的精準** — 用最少的視覺元素傳達最大的專業感。

---

## 現狀問題（AI 感來源）

根據 skill 指南「NEVER use generic AI-generated aesthetics」：

| 問題 | 違反原則 |
|------|----------|
| `from-[#667eea] to-[#764ba2]` 紫色漸層 | "particularly purple gradients on white backgrounds" |
| 系統字體 `-apple-system, system-ui` | "overused font families (Inter, Roboto, Arial, system fonts)" |
| `rounded-[30px]` 過度圓角 | "predictable layouts and component patterns" |
| 彩色標籤系統（藍紅綠藍） | "cookie-cutter design that lacks context-specific character" |

---

## 設計方案

### 1. Typography（字體選擇）

**不使用**：系統字體、Inter、Roboto

**建議方案**：
```css
/* Display font - 標題 */
font-family: 'Sora', sans-serif;  /* 幾何感但有溫度 */
/* 或 */
font-family: 'DM Sans', sans-serif;  /* 現代幾何 */

/* Body font - 內文 */
font-family: 'Source Sans 3', sans-serif;
```

需在 `BaseLayout.astro` 引入 Google Fonts：
```html
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Source+Sans+3:wght@400;500&display=swap" rel="stylesheet">
```

---

### 2. Color & Theme

**主色調**：純黑白灰，單一強調色

```css
:root {
  --text-primary: #0f0f0f;      /* 比 #1a1a1a 更深 */
  --text-secondary: #525252;
  --text-tertiary: #a3a3a3;
  --bg-primary: #ffffff;
  --bg-secondary: #fafafa;
  --border: #e5e5e5;
  --accent: #0f0f0f;            /* 強調色也是黑色 */
}
```

---

### 3. 改造清單

#### Header 區域
```diff
- bg-gradient-to-r from-[#1a1a1a] to-[#4a4a4a] bg-clip-text text-transparent
+ text-[#0f0f0f]

- bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-[30px] shadow-[...]
+ bg-[#f5f5f5] text-[#525252] border border-[#e5e5e5] rounded-md
```

#### Main Content 區塊
```diff
- rounded-[30px] shadow-[0_4px_20px_rgba(0,0,0,0.06),0_8px_40px_rgba(0,0,0,0.04)]
+ rounded-lg border border-[#e5e5e5]
```

#### 技術棧 Tags
```diff
- rounded-[15px] bg-[#f8f9fa]
+ rounded border border-[#d4d4d4] bg-transparent
```

#### Section Headers
```diff
- pl-2 border-l-4 border-[#1a1a1a]
+ pb-3 border-b border-[#e5e5e5]
```

#### Highlight Cards
```diff
- rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)]
+ rounded-lg border border-[#e5e5e5]
```

#### Challenge Cards 標籤
```diff
- text-[#667eea] / text-[#e53e3e] / text-[#38a169] / text-[#3182ce]
+ text-[#525252] (全部統一)
```

#### Reflection Section
```diff
- bg-gradient-to-r from-[#667eea]/5 to-[#764ba2]/5 border-[#667eea]/20
+ bg-[#fafafa] border border-[#e5e5e5]

- text-[#667eea] (checkmark icon)
+ text-[#0f0f0f]
```

#### Bottom Buttons
```diff
- bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-[30px] shadow-[...]
+ bg-[#0f0f0f] text-white rounded-lg

- bg-[#f5f5f5] rounded-[30px]
+ bg-transparent border border-[#0f0f0f] rounded-lg
```

#### Highlight 文字樣式
```diff
- background: linear-gradient(120deg, #667eea20 0%, #764ba220 100%);
+ font-weight: 600; border-bottom: 2px solid #0f0f0f;
```

---

## 實作順序

1. **引入字體** — 在 BaseLayout 加入 Google Fonts
2. **移除漸層** — 標題、按鈕、badge、背景區塊
3. **調整圓角** — 30px/20px → 8px (rounded-lg)
4. **移除陰影** — 改用細邊框
5. **統一色彩** — 四色標籤改為單色
6. **更新 highlight 樣式** — 漸層背景改為底線

---

## 驗證方式

1. 執行 `npm run dev` 啟動開發伺服器
2. 訪問任一專案詳細頁面（如 `/projects/dottore`）
3. 檢查項目：
   - [ ] 無紫色漸層出現
   - [ ] 按鈕為純黑色
   - [ ] 卡片圓角統一為 8px
   - [ ] 無厚重陰影
   - [ ] 字體為 Sora + Source Sans 3
   - [ ] 整體視覺乾淨簡約，符合 Editorial Minimalism 風格
