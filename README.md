# Developer Portfolio - Architecture & Reference Guide

A modern, high-performance developer portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **@iconify/react**.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router & Turbopack)
- **Styling**: Tailwind CSS + Shadcn UI (Radix Primitives)
- **Icons**: Centralized `@iconify/react` registry (`simple-icons`, `logos`, `devicon`, `skill-icons`)
- **Export Mode**: Static HTML Export (`output: "export"` in `next.config.mjs` for GitHub Pages deployment)

---

## 🌐 Third-Party APIs Used

### 1. Coding Profiles Statistics
- **LeetCode Stats API**:
  - Endpoint: `https://leetcode-api-faisalshohag.vercel.app/Anish_Kumar_`
  - Data Fetched: `totalSolved`, `ranking`, `totalSubmissions` (calculates acceptance rate).
- **Codeforces User Info API**:
  - Endpoint: `https://codeforces.com/api/user.info?handles=Sarcastic-Soul`
  - Data Fetched: `rating`, `maxRating`, `rank`.
- **GitHub User Profile API**:
  - Endpoint: `https://api.github.com/users/Sarcastic-Soul`
  - Data Fetched: `public_repos`, `followers`.
- **GitHub Contributions API**:
  - Endpoint: `https://github-contributions-api.jogruber.de/v4/Sarcastic-Soul?y=last`
  - Data Fetched: `total.lastYear` (total commits in past 12 months).

### 2. Project Live Screenshots
- **Thum.io Screenshot Generator**:
  - Endpoint: `https://image.thum.io/get/width/800/{targetUrl}`
  - Usage: Generates real-time 16:9 laptop previews of live deployed demo sites and GitHub repositories.
  - **Important**: Rendered with `referrerPolicy="no-referrer"` attribute on `<Image>` / `<img>` to bypass thum.io domain hotlinking restrictions on free tier.

### 3. Verification & Badges
- **Badgr Assertion API**:
  - Endpoint: `https://api.badgr.io/public/assertions/.../image` (Postman API Student Expert badge).
- **Holopin Badges API**:
  - Endpoint: `https://holopin.me/sarcasticsoul` (Open-source contribution badges).

---

## 📁 Project Directory Structure

```text
Portfolio/
├── app/                      # Next.js App Router Pages
│   ├── layout.tsx            # Global layout with ThemeProvider & Navigation
│   ├── page.tsx              # Home & Hero section
│   ├── experience/           # Work experience timeline page
│   ├── projects/             # Projects showcase page (with thum.io live previews & skeletons)
│   ├── skills/               # Technical skills overview page
│   └── not-found.tsx         # Custom 404 page
├── components/               # Modular UI Components
│   ├── icons.tsx             # Central icon & tech logo registry (@iconify/react)
│   ├── project-image.tsx     # Project card live preview image wrapper with Skeleton loader
│   ├── navigation.tsx        # Responsive navbar & command palette modal (Ctrl+K)
│   ├── footer.tsx            # Footer component
│   ├── footer-shortcuts.tsx  # Keyboard shortcuts overview modal
│   ├── last-updated.tsx      # Dynamic metadata last-updated badge
│   ├── scroll-to-top.tsx     # Floating scroll-to-top button
│   ├── theme-toggle.tsx      # Dark / Light theme switcher
│   ├── sections/             # Core page section components
│   │   ├── hero.tsx
│   │   ├── coding-profiles.tsx  # Dynamic coding profile cards with parallel fetches & skeletons
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   └── skills.tsx
│   └── ui/                   # Shadcn UI primitives (button, card, dialog, toast, skeleton)
├── lib/
│   ├── data.ts               # Core portfolio data source (experiences, projects, skills, socials)
│   └── utils.ts              # Helper functions (cn utility for Tailwind class merging)
├── public/                   # Static assets & metadata.json
├── next.config.mjs           # Next.js configuration (basePath: "/Portfolio", output: "export")
└── package.json              # Scripts & dependencies
```

---

## 🚀 Development & Deployment

### Local Development
Start dev server on `http://localhost:3000`:
```bash
npm run dev
```

### Static Build
Generate production static export inside `out/`:
```bash
npm run build
```

### Test Production Export Locally
Build and serve the static export using `serve`:
```bash
npm run serve
```

### GitHub Pages Deployment
1. Next config is pre-configured with static export:
   ```javascript
   const isProd = process.env.NODE_ENV === "production";
   const basePath = isProd ? "/Portfolio" : "";
   ```
2. Running `npm run build` generates static HTML files in the `out/` folder.
3. Deploy the `out/` folder to GitHub Pages (`gh-pages` branch or GitHub Actions workflow).
