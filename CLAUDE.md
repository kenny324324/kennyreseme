# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based portfolio website for Kenny Yu (余亮廷), a UI/UX cross-platform engineer. It deploys to GitHub Pages at `https://kenny324324.github.io/kennyreseme`.

## Commands

```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Build to dist/
npm run preview  # Preview production build locally
```

## Architecture

**Framework**: Astro 5 with React 19 and Tailwind CSS 4.

**Routing**: File-based via `src/pages/`:
- `index.astro` — Single-page portfolio with all sections
- `projects/[slug].astro` — Dynamic project detail pages

**Data layer** (`src/data/`):
- `personal.ts` — Name, contact info, stats
- `projects.ts` — Two arrays: `appProjects` and `systemProjects`, each with slugs matching folder names in `public/documents/projects/`
- `projectDetails.ts` — Supplementary structured data per project
- `experience.ts`, `skills.ts` — Section content

**Content loading** (`src/utils/contentLoader.ts`): Project detail pages pull rich content from `.txt` files at `public/documents/projects/<ProjectFolder>/`. Each project folder can contain:
- `background.txt`, `description.txt`, `reflection.txt` — plain text with markup
- `highlights.txt` — sections split by `亮點N：` prefix
- `challenges.txt` — sections split by `挑戰與解決 #N：` prefix, with `**情境：**`, `**困難點：**`, `**解決過程：**`, `**成果：**` fields
- `plan.txt` — split by `設計流程｜Figma` and `開發流程｜技術` headings
- `links.txt` — `key: url` pairs (appstore, googleplay, figma, github)
- `custom-sections.txt` — per-project custom sections (see below)
- `Media/` subfolder — videos referenced in highlights (mapping hardcoded in `getVideoFiles()`)
- `figma-design.(png|jpg|svg)`, `tech-architecture.(png|jpg|svg)` — auto-discovered process images

**Custom sections** (`custom-sections.txt`): Allows each project to define unique sections not in the fixed template. Format:
```
區塊 #1：Section Title
圖示：font-awesome-icon-name
順序：5
樣式：cards

Content item 1

Content item 2
```
- `順序` controls insertion position among fixed sections (1=開發流程, 2=技術挑戰, 3=亮點, 4=反思; use 0 to place before all, 5+ to place after)
- `樣式` is optional: `list` (default, bullet list) or `cards` (horizontal-scrolling cards, used for user reviews)
- Section numbering (01, 02, ...) auto-adjusts based on sort order

**Markup syntax** in `.txt` files: `**text**` → `<strong>`, `##text##` → `<span class="highlight">`.

**Base path**: All asset URLs must be prefixed with `/kennyreseme` (the GitHub Pages sub-path). The `base` constant in `projects.ts` and hardcoded paths in `contentLoader.ts` handle this.

**Dev server caveat**: Changes to `.txt` content files do not trigger hot-reload. Restart the dev server (`npm run dev`) to see updates.

## Adding a New Project

1. Add an entry to `appProjects` or `systemProjects` in `src/data/projects.ts` — the `slug` must match the folder name in `public/documents/projects/`
2. Add a corresponding entry in `projectMeta` in `src/data/projectDetails.ts` with title, subtitle, description, categories, techStack, folder name, and optional defaultLinks
3. Create `public/documents/projects/<FolderName>/` with the relevant `.txt` files
4. If the project has highlight videos, add entries to `getVideoFiles()` in `contentLoader.ts`
5. Optionally add `custom-sections.txt` for project-specific sections (e.g., user reviews)
6. To hide a project temporarily, comment out its entry in `projects.ts` (keep `projectDetails.ts` entry for direct URL access)

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on every push to `main`. No manual deploy steps needed.
