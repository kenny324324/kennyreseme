import * as fs from 'fs';
import * as path from 'path';

const PROJECTS_DIR = path.join(process.cwd(), 'public/documents/projects');

/**
 * 讀取專案的 txt 檔案內容
 */
function readProjectFile(projectFolder: string, filename: string): string | null {
  const filePath = path.join(PROJECTS_DIR, projectFolder, filename);
  try {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf-8');
    }
  } catch (error) {
    console.warn(`無法讀取檔案: ${filePath}`);
  }
  return null;
}

/**
 * 處理文字中的標記語法
 * **文字** → 粗體
 * ##文字## → highlight
 */
function processMarkup(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/##(.*?)##/g, '<span class="highlight">$1</span>');
}

/**
 * 解析 background.txt
 */
export function parseBackground(projectFolder: string): string {
  const content = readProjectFile(projectFolder, 'background.txt');
  if (!content) return '';
  return processMarkup(content.trim());
}

/**
 * 解析 highlights.txt
 */
export function parseHighlights(projectFolder: string): Array<{
  title: string;
  description: string;
  media?: string;
  mediaType?: 'video' | 'image';
}> {
  const content = readProjectFile(projectFolder, 'highlights.txt');
  if (!content) return [];

  const highlights: Array<{
    title: string;
    description: string;
    media?: string;
    mediaType?: 'video' | 'image';
  }> = [];

  // 分割亮點區塊
  const sections = content.split(/亮點\d+：/).filter(s => s.trim());

  // 取得影片檔案對應
  const videoFiles = getVideoFiles(projectFolder);

  sections.forEach((section, index) => {
    const lines = section.trim().split('\n');
    const title = lines[0]?.trim() || '';
    const description = processMarkup(lines.slice(2).join('\n').trim());

    const highlight: {
      title: string;
      description: string;
      media?: string;
      mediaType?: 'video' | 'image';
    } = { title, description };

    // 檢查是否有對應的影片
    if (videoFiles[index + 1]) {
      highlight.media = `/kennyreseme/documents/projects/${projectFolder}/Media/${videoFiles[index + 1]}`;
      highlight.mediaType = 'video';
    }

    highlights.push(highlight);
  });

  return highlights;
}

/**
 * 取得專案的影片檔案對應
 */
function getVideoFiles(projectFolder: string): Record<number, string> {
  const videoMap: Record<string, Record<number, string>> = {
    'Bus': {
      1: 'carousell.mov',
      2: 'map.mov',
      3: 'list.mov'
    },
    'Tuan': {
      1: 'applelogin.MP4',
      2: 'calauth.mov',
      3: 'setcalendar.mov'
    },
    'POS': {
      1: '庫存總覽.mov',
      2: '操作介面.mov',
      3: '單據追蹤.mov'
    },
    'Mino': {
      1: 'UI.mov',
      2: 'iCloud.mov',
      3: 'Notify.mov'
    },
    'MIsh': {
      1: 'googleapi.MP4',
      2: 'tomato.MP4',
      3: 'languege.MP4'
    },
    'FindToilets': {
      1: '智慧聚合標記.MP4',
      2: '樓層解析.MP4',
      3: '社群.MP4'
    }
  };

  return videoMap[projectFolder] || {};
}

/**
 * 解析 challenges.txt
 */
export function parseChallenges(projectFolder: string): Array<{
  title: string;
  situation: string;
  difficulty: string;
  solution: string;
  result: string;
}> {
  const content = readProjectFile(projectFolder, 'challenges.txt');
  if (!content) return [];

  const challenges: Array<{
    title: string;
    situation: string;
    difficulty: string;
    solution: string;
    result: string;
  }> = [];

  // 分割挑戰區塊
  const sections = content.split(/挑戰與解決 #\d+：/).filter(s => s.trim());

  sections.forEach(section => {
    const lines = section.trim().split('\n');
    const title = lines[0]?.trim() || '';

    // 解析各個欄位
    let situation = '';
    let difficulty = '';
    let solution = '';
    let result = '';

    const fullText = lines.slice(2).join('\n');

    // 使用正則表達式提取各部分
    const situationMatch = fullText.match(/\*\*情境[：:]\*\*(.*?)(?=\*\*困難點|$)/s);
    const difficultyMatch = fullText.match(/\*\*困難點[：:]\*\*(.*?)(?=\*\*解決|$)/s);
    const solutionMatch = fullText.match(/\*\*解決(?:過程)?[：:]\*\*(.*?)(?=\*\*(?:時程與)?成果|$)/s);
    const resultMatch = fullText.match(/\*\*(?:時程與)?成果[：:]\*\*(.*?)$/s);

    if (situationMatch) situation = processMarkup(situationMatch[1].trim());
    if (difficultyMatch) difficulty = processMarkup(difficultyMatch[1].trim());
    if (solutionMatch) solution = processMarkup(solutionMatch[1].trim());
    if (resultMatch) result = processMarkup(resultMatch[1].trim());

    challenges.push({ title, situation, difficulty, solution, result });
  });

  return challenges;
}

/**
 * 尋找專案資料夾中的圖片檔案
 */
function findProjectImage(projectFolder: string, baseName: string): string | undefined {
  const extensions = ['.png', '.jpg', '.jpeg', '.svg'];
  for (const ext of extensions) {
    const filename = `${baseName}${ext}`;
    const filePath = path.join(PROJECTS_DIR, projectFolder, filename);
    if (fs.existsSync(filePath)) {
      return `/kennyreseme/documents/projects/${projectFolder}/${filename}`;
    }
  }
  return undefined;
}

/**
 * 解析 plan.txt
 */
export function parseProcess(projectFolder: string): {
  design: string[];
  development: string[];
  designImage?: string;
  developmentImage?: string;
} {
  const content = readProjectFile(projectFolder, 'plan.txt');
  const design: string[] = [];
  const development: string[] = [];
  
  // 尋找對應的流程圖片
  const designImage = findProjectImage(projectFolder, 'figma-design');
  const developmentImage = findProjectImage(projectFolder, 'tech-architecture');

  if (!content) return { design: [], development: [], designImage, developmentImage };

  // 分割設計和開發部分
  const sections = content.split('開發流程｜技術');

  if (sections.length >= 1) {
    // 設計流程
    const designSection = sections[0].replace('設計流程｜Figma', '').trim();
    const designParagraphs = designSection.split('\n\n').filter(p => p.trim());
    designParagraphs.forEach(p => {
      const processed = processMarkup(p.trim());
      if (processed) design.push(processed);
    });
  }

  if (sections.length >= 2) {
    // 開發流程
    const devSection = sections[1].trim();
    const devParagraphs = devSection.split('\n\n').filter(p => p.trim());
    devParagraphs.forEach(p => {
      const processed = processMarkup(p.trim());
      if (processed) development.push(processed);
    });
  }

  return { design, development, designImage, developmentImage };
}

/**
 * 解析 reflection.txt
 */
export function parseReflection(projectFolder: string): string[] {
  const content = readProjectFile(projectFolder, 'reflection.txt');
  if (!content) return [];

  // 移除標題
  const cleanContent = content.replace('反思與收穫', '').trim();

  // 分割段落
  const paragraphs = cleanContent.split('\n\n').filter(p => p.trim());

  return paragraphs.map(p => processMarkup(p.trim()));
}

/**
 * 解析 description.txt
 */
export function parseDescription(projectFolder: string): string {
  const content = readProjectFile(projectFolder, 'description.txt');
  if (!content) return '';
  return processMarkup(content.trim());
}

/**
 * 解析 links.txt
 */
export function parseLinks(projectFolder: string): {
  appstore?: string;
  googleplay?: string;
  figma?: string;
  github?: string;
} {
  const content = readProjectFile(projectFolder, 'links.txt');
  if (!content) return {};

  const links: Record<string, string> = {};
  const lines = content.split('\n').filter(line => line.trim());

  for (const line of lines) {
    if (line.includes(':') && !line.trim().startsWith('http')) {
      const colonIndex = line.indexOf(':');
      const type = line.substring(0, colonIndex).trim().toLowerCase();
      const url = line.substring(colonIndex + 1).trim();
      if (url) {
        links[type] = url;
      }
    }
  }

  return links;
}

/**
 * 解析 custom-sections.txt
 * 格式：
 * 區塊 #1：標題
 * 圖示：icon-name
 * 順序：5
 *
 * 內容項目（以空行分隔）
 */
export function parseCustomSections(projectFolder: string): Array<{
  title: string;
  icon: string;
  order: number;
  style: 'list' | 'cards';
  items: string[];
}> {
  const content = readProjectFile(projectFolder, 'custom-sections.txt');
  if (!content) return [];

  const sections: Array<{
    title: string;
    icon: string;
    order: number;
    style: 'list' | 'cards';
    items: string[];
  }> = [];

  // 分割區塊
  const blocks = content.split(/區塊 #\d+：/).filter(s => s.trim());

  blocks.forEach(block => {
    const lines = block.trim().split('\n');
    const title = lines[0]?.trim() || '';

    let icon = 'star';
    let order = 99;
    let style: 'list' | 'cards' = 'list';

    // 解析圖示、順序和樣式
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('圖示：')) {
        icon = line.replace('圖示：', '').trim();
      } else if (line.startsWith('順序：')) {
        const parsed = parseInt(line.replace('順序：', '').trim());
        order = isNaN(parsed) ? 99 : parsed;
      } else if (line.startsWith('樣式：')) {
        const val = line.replace('樣式：', '').trim();
        if (val === 'cards') style = 'cards';
      } else if (line === '') {
        // 空行之後是內容項目
        const remaining = lines.slice(i + 1).join('\n').trim();
        const items = remaining.split('\n\n').filter(p => p.trim()).map(p => processMarkup(p.trim()));
        sections.push({ title, icon, order, style, items });
        break;
      }
    }

    // 如果沒有空行分隔（只有 metadata 沒有內容），也要加入
    if (!sections.find(s => s.title === title)) {
      sections.push({ title, icon, order, style, items: [] });
    }
  });

  return sections;
}

/**
 * 載入完整的專案內容
 */
export function loadProjectContent(projectFolder: string) {
  return {
    description: parseDescription(projectFolder),
    background: parseBackground(projectFolder),
    highlights: parseHighlights(projectFolder),
    challenges: parseChallenges(projectFolder),
    process: parseProcess(projectFolder),
    reflection: parseReflection(projectFolder),
    links: parseLinks(projectFolder)
  };
}
