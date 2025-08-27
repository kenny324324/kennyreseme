# 亮廷 - 個人簡歷網站

一個現代化、響應式的個人簡歷網站，展示跨平台App開發工程師的專業技能與項目經驗。

## 🌟 特色功能

### 📱 響應式設計123
- 完美適配桌面、平板、手機各種螢幕尺寸
- 流暢的移動端導航體驗
- Apple風格的滑動動畫

### 🎨 現代化UI設計
- 漸層背景與玻璃質感效果
- 流暢的滾動動畫與視差效果
- 互動式技能進度條
- 項目篩選功能

### ⚡ 高效能體驗
- 防抖滾動優化
- 延遲載入圖片
- 平滑滾動導航
- 快速載入動畫

### 🛠 核心技術
- **HTML5** - 語義化結構
- **CSS3** - 現代樣式與動畫
- **Vanilla JavaScript** - 純原生JS互動
- **Google Fonts** - Noto Sans TC 字體
- **Font Awesome** - 圖示庫

## 📁 檔案結構

```
├── index.html          # 主頁面
├── styles.css          # 樣式檔案
├── script.js           # JavaScript 互動
└── README.md           # 說明文件
```

## 🚀 使用方法

### 本地開發
1. 直接開啟 `index.html` 檔案
2. 或使用本地伺服器：
   ```bash
   # 使用 Python
   python -m http.server 8000
   
   # 使用 Node.js
   npx serve .
   
   # 使用 Live Server (VS Code 擴充)
   右鍵 index.html > Open with Live Server
   ```

### 線上部署
可部署至以下平台：
- **GitHub Pages** - 免費靜態網站託管
- **Netlify** - 拖拉部署
- **Vercel** - 即時部署
- **Firebase Hosting** - Google 託管服務

## 📝 個人化設定

### 聯絡資訊
編輯 `index.html` 中的聯絡資訊：
```html
<!-- 更新信箱、電話、社群媒體連結 -->
<p>your.email@example.com</p>
<p>+886 xxx xxx xxx</p>
```

### 技能等級
調整 `styles.css` 中的技能進度條：
```css
.level-fill {
    width: 95%; /* 調整百分比 */
}
```

### 項目內容
在 `index.html` 中新增或修改專案卡片，更新：
- 專案標題
- 專案描述
- 技術標籤
- 專案連結

## 🎯 SEO 優化

- 語義化 HTML 標籤
- Meta 標籤設定
- Alt 文字描述
- 結構化資料標記
- 快速載入優化

## 🌐 瀏覽器支援

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- iOS Safari 12+
- Android Chrome 60+

## 📋 功能清單

✅ 響應式導航選單  
✅ Hero 區塊動畫  
✅ 滾動觸發動畫  
✅ 技能進度條動畫  
✅ 專案篩選功能  
✅ 聯絡表單驗證  
✅ 平滑滾動導航  
✅ 視差滾動效果  
✅ 載入動畫  
✅ 錯誤處理  

## 🔧 自訂功能

### 主題色彩
修改 CSS 變數來改變網站色彩：
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #64748b;
    --accent-color: #10b981;
}
```

### 動畫速度
調整動畫持續時間：
```css
.fade-in {
    transition: all 0.6s ease; /* 調整速度 */
}
```

## 📈 效能優化建議

1. **圖片優化**
   - 使用 WebP 格式
   - 壓縮圖片檔案
   - 實作延遲載入

2. **CSS 優化**
   - 移除未使用的 CSS
   - 使用 CSS 壓縮

3. **JavaScript 優化**
   - 程式碼分割
   - 非同步載入

## 🤝 貢獻指南

歡迎提出改進建議或回報問題：

1. Fork 專案
2. 創建功能分支
3. 提交更改
4. 推送到分支
5. 開啟 Pull Request

## 📄 授權

此專案採用 MIT 授權條款。

---

**製作者：** 亮廷  
**職位：** 跨平台App開發工程師  
**技術：** .NET MAUI、Swift、Flutter  

> 專精企業級跨平台應用開發，擁抱AI輔助開發的現代化工作模式
