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
  /** Simple Icons slug (e.g. 'flutter', 'dotnet'). When set, renders brand SVG from cdn.simpleicons.org instead of Font Awesome. */
  brand?: string;
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
