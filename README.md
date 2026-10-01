# Ayub Whsyar Ahmed | Engineering Portfolio

A personal portfolio focused on network engineering, Linux administration, infrastructure, and cybersecurity.

## Features

- Responsive dark design with restrained green accents
- Animated network visualization and reduced-motion support
- Featured campus-network project, home-server architecture, and security lab case studies
- CCNA credential verification through Credly and clearly labeled RHCSA exam preparation
- GitHub, LinkedIn, email, portrait, and CV download

## Stack

React, Vite, Tailwind CSS, Framer Motion, and Lucide icons. Static site with no backend.

## Development

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
```

On Windows PowerShell, use npm.cmd if the execution policy blocks npm.ps1.

```sh
npm run build
npm run preview
```

## Customize

Edit `src/data/portfolio.js` for profile links, project information, skills, and credentials. Public assets are in `public/`. Sections and shared components are organized under `src/sections/` and `src/components/`.

Set `ccnaIssued` to the verified certification issue date when available. RHCSA remains marked as in progress.

## Verification

`check-ui.mjs` uses a locally installed Microsoft Edge browser to check responsive layouts, project dialogs, downloads, navigation, and profile links at http://127.0.0.1:5173. `check-refinement.mjs` measures text contrast and captures layout screenshots.

## Deployment

Build with `npm run build`, then serve the contents of `dist/` using Nginx, Caddy, or another static host. Node.js is required for building; the finished website does not require a Node server.

Personal working notes, original asset copies, dependency directories, generated screenshots, and build output are excluded from this repository.
