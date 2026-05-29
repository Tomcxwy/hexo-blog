# Hexo Blog — Agent Guide

## Stack
- **Hexo v8.x** blog engine (npm package `hexo`)
- **Theme**: [hexo-theme-fluid](https://github.com/fluid-dev/hexo-theme-fluid) v1.9.8 (active), landscape installed but unused
- **Language**: `zh-CN` — blog content, UI, and git commits are in Chinese
- **Node.js**: dependencies managed via npm, lockfile in `package-lock.json`

## Critical Commands

| Command | What it runs |
|---|---|
| `npm run build` | `hexo generate` — builds static site to `public/` |
| `npm run clean` | `hexo clean` — deletes `public/` and `db.json` cache |
| `npm run server` | `hexo server` — local dev server |
| `npm run deploy` | `hexo deploy` (deploy type is NOT configured — no-op currently) |

Always run `clean` before `build` when changing config or themes to avoid stale cache (`db.json`).

## Project Structure

```
_config.yml          ← Hexo root config (site info, URL, theme selection)
_config.fluid.yml    ← Fluid theme config (1167 lines — heavy customization)
.gitignore           ← ignores db.json, node_modules/, public/, .deploy*/
scaffolds/           ← post/draft/page templates (standard Hexo)
source/
  _posts/            ← all blog posts (markdown, one dir per post with assets)
  about/index.md     ← "about" page (layout: about)
  music/index.md     ← "music" page (layout: page, uses meting tag)
  img/               ← local images (banners, avatar, favicon, etc.)
  js/
    particle-bg.js       ← animated particle background (homepage only)
    music-player-control.js ← music page detection
  css/custom.css     ← board transparency + music player hiding
themes/              ← empty (themes live in node_modules/ via npm)
.github/dependabot.yml  ← npm deps checked daily
```

## Key Config Facts

- **URL**: `http://blog.tomcxwy.top`
- **Permalink**: `:year/:month/:day/:title/`
- **Post asset folder**: `post_asset_folder: true` (each post has a sibling asset directory)
- **Highlighting**: `highlight.js` with `github gist` style (light) / `dark` (dark)
- **Comment**: Giscus (GitHub Discussions) on repo `Tomcxwy/hexo-blog`
- **Theme search**: Fluid built-in, generates `/local-search.xml`, searches post content

## Post Front-matter Pattern

```yaml
---
title: 文章标题
date: 2025-12-23 14:31:03
excerpt: 摘要文字
tags:
  - tag1
categories: ["分类名"]
index_img: https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/xxx.png  # cover
banner_img: /img/云.png              # post page banner (optional, theme default)
sticky: 100                           # pin to top (higher = higher)
hide: false                           # hide from all listings
archive: false                        # hide from archives only
category_bar: true                    # show category sidebar
---
```

## Image Hosting

- **CDN**: `https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/` (jsDelivr + personal GitHub repo `Tomcxwy/blog-images`)
- **Local**: `source/img/` for theme images (banners, avatar, favicon)
- **Post assets**: stored in `source/_posts/<post-name>/` (sibling directory per post)

## Custom JS Pipeline (injected via `_config.fluid.yml`)

Injected through `custom_js` (order matters):
1. `/js/particle-bg.js` — animated gradient + particle canvas on homepage only
2. `APlayer.min.js` (CDN) — music player
3. `Meting.min.js` (CDN) — Netease music API bridge
4. `/js/music-player-control.js` — detects `/music/` page, adds `.music-page` to body

Custom CSS via `custom_css`:
- `APlayer.min.css` (CDN)
- `/css/custom.css` — semi-transparent boards + hides global player on music page

## Music Player

- Netease playlist `488367332`, injected via `custom_html` as `<meting-js>` element
- Fixed mini player at bottom-right, random order, loop all
- Hidden on `/music/` page via `custom.css` (opacity 0 + visibility hidden)
- The `/music/` page itself has its own `<meting-js>` for a different playlist (`2829883282`)

## Deployment

- **No deploy config** — `deploy.type: ''` in `_config.yml`
- Site is served from `master` branch on GitHub (GitHub Pages or similar external service)
- No GitHub Actions workflows exist
- Git remote: `https://github.com/Tomcxwy/hexo-blog.git`
- Workflow: push to `master` → external service picks up changes

## Git Conventions

- Single `master` branch, commits made directly
- Commit messages are date-based Chinese: `2026.3.24更新`
- No rebasing or squashing — linear history

## Testing / Validation

- No tests
- Validate changes: run `npm run clean && npm run build` and check for errors
- Preview with `npm run server`

## Non-obvious

- `db.json` is Hexo's cache — delete it (or run `hexo clean`) if you change config or themes, otherwise stale data persists
- Theme `fluid` is installed as an npm package (`node_modules/hexo-theme-fluid/`) — do NOT edit theme files directly; override via `_config.fluid.yml` or custom JS/CSS in `source/`
- The `custom_html` option in Fluid theme injects raw HTML at page bottom — used here for the music player element
- Particle background only runs on homepage (checks `location.pathname === '/'`)
