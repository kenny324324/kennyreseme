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
- `Media/` subfolder — videos referenced in highlights (mapping hardcoded in `getVideoFiles()`)
- `figma-design.(png|jpg|svg)`, `tech-architecture.(png|jpg|svg)` — auto-discovered process images

**Markup syntax** in `.txt` files: `**text**` → `<strong>`, `##text##` → `<span class="highlight">`.

**Base path**: All asset URLs must be prefixed with `/kennyreseme` (the GitHub Pages sub-path). The `base` constant in `projects.ts` and hardcoded paths in `contentLoader.ts` handle this.

## Adding a New Project

1. Add an entry to `appProjects` or `systemProjects` in `src/data/projects.ts` — the `slug` must match the folder name in `public/documents/projects/`
2. Create `public/documents/projects/<FolderName>/` with the relevant `.txt` files
3. If the project has highlight videos, add entries to `getVideoFiles()` in `contentLoader.ts`
4. Optionally add structured data to `src/data/projectDetails.ts`

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on every push to `main`. No manual deploy steps needed.
