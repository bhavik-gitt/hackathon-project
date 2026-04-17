
<div align="center">

# 🚀 Zero2Legacy
### AI Internship Platform Dashboard

**Bridging the gap between talent and opportunity across India**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://bhavik-gitt.github.io/hackathon-project/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

[View Live Demo](https://bhavik-gitt.github.io/hackathon-project/) · [Report Bug](https://github.com/bhavik-gitt/hackathon-project/issues) · [Request Feature](https://github.com/bhavik-gitt/hackathon-project/issues)

</div>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [User Roles](#-user-roles)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Attributions](#-attributions)

---

## 🎯 About the Project

**Zero2Legacy** is a multi-stakeholder AI internship platform built to connect students, companies, NGOs, government bodies, and CSR stakeholders — all under a single, unified dashboard. Designed for the Indian ecosystem, it tackles the real-world challenge of matching skilled students with meaningful internship opportunities across sectors and geographies.

The platform supports multi-language access (English, हिन्दी, తెలుగు, தமிழ்), role-based views, AI-powered match scoring, and impact analytics — making it a comprehensive tool for both individual career growth and national-level skill development oversight.

> **Try it instantly** — use the **Quick Demo Access** buttons on the login screen to explore any role without creating an account.

---

## ✨ Key Features

### 🎓 For Students
- **AI-Powered Matching** — Internship recommendations ranked by a match score (e.g. 94% fit) based on skills and profile
- **Skill Pathway Tracker** — Visual progress bars for skills like Frontend Development, UI/UX Design, and Data Analytics
- **Internship Listings** — Browse opportunities with location, stipend, duration, and skill tags
- **Voice Mode** — Accessibility-first voice navigation support
- **Profile Setup** — Rich onboarding with education, skills, and career goal capture

### 🏢 For Companies
- **Internship Posting & Management** — Create, draft, and close postings with department, type (Remote / On-site / Hybrid), and deadline controls
- **Applicant Pipeline** — Review, shortlist, and manage candidates with full profile cards
- **Candidate Search & Filter** — Search applicants by skill, location, or institution
- **Analytics Dashboard** — Track applicant volume, shortlist ratios, and offer trends

### 🤝 For NGOs
- **Social-Impact Programme Management** — Run and monitor community internship initiatives
- **Beneficiary Tracking** — Track student enrolments and completion rates across programmes

### 🏛️ For Government
- **National-Level Oversight** — Aggregate view of students, placements, and skill demand vs. supply
- **Regional Analytics** — Placement breakdowns across North, South, West, East, and Northeast India
- **Diversity Reporting** — Representation data across General, OBC, SC, ST categories
- **Sector Skill Gap Charts** — Bar and line charts for IT, Healthcare, Agriculture, Manufacturing, Education, Finance

### 💼 For CSR Stakeholders
- **Impact Dashboard** — Month-on-month charts for students supported, courses sponsored, and placement rates
- **Funding Allocation Tracker** — Pie chart breakdown across Skill Training, Digital Literacy, Rural Programs, Women Empowerment, and Healthcare Training
- **Partnership Management** — Monitor co-investments with Skill India, Local NGOs, and Technical Institutes

### 🌐 Platform-Wide
- **Multi-Language Support** — English, Hindi, Telugu, Tamil
- **Notification Centre** — Role-aware notification feeds
- **Persistent Sessions** — Login state stored via `localStorage`
- **Responsive Design** — Mobile-first, works on all screen sizes
- **Dark/Light Mode Ready** — `next-themes` integration

---

## 👥 User Roles

| Role | Icon | Description |
|------|------|-------------|
| **Student** | 🎓 | Browse & apply for internships, track skill progress, get AI match scores |
| **Company** | 🏢 | Post opportunities, manage applicant pipeline, view hiring analytics |
| **NGO** | ❤️ | Run social-impact internship programmes, track beneficiary outcomes |
| **Government** | 🏛️ | National oversight dashboard — regional data, diversity metrics, skill gap analysis |
| **CSR Stakeholder** | 💼 | Fund & monitor CSR internship initiatives, track impact ROI |

> No sign-up needed — use **Quick Demo Access** on the login page to jump straight into any role.

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18 | Component-based UI framework |
| **TypeScript** | 5.4 | End-to-end type safety |
| **Vite** | 6 | Lightning-fast build tool & dev server |
| **Tailwind CSS** | v4 | Utility-first styling system |
| **Radix UI** | Latest | Accessible, unstyled component primitives |
| **shadcn/ui** | Latest | Pre-built component library (on top of Radix UI) |
| **Recharts** | 2.x | Composable charts — bar, line, pie |
| **Lucide React** | 0.487 | Consistent icon set |
| **React Hook Form** | 7.x | Performant, flexible form management |
| **next-themes** | 0.4 | Theme switching (light / dark) |
| **Sonner** | 2.x | Toast notification system |
| **cmdk** | 1.x | Command palette component |
| **Embla Carousel** | 8.x | Touch-friendly carousel |

---

## 📁 Project Structure

```
hackathon-project/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions CI/CD (auto-deploy to GitHub Pages)
├── public/                         # Static assets served as-is
├── src/
│   ├── components/
│   │   ├── LoginScreen.tsx         # Multi-role login + quick demo access
│   │   ├── NavigationHeader.tsx    # Top nav bar with notifications & logout
│   │   ├── StudentDashboard.tsx    # Student role view
│   │   ├── CompanyDashboard.tsx    # Company role view
│   │   ├── NgoDashboard.tsx        # NGO role view
│   │   ├── GovernmentDashboard.tsx # Government oversight view
│   │   ├── CsrDashboard.tsx        # CSR stakeholder view
│   │   ├── NotificationCenter.tsx  # Role-aware notification panel
│   │   ├── SkillPathwayCard.tsx    # Reusable skill progress component
│   │   ├── LanguageToggle.tsx      # Multi-language switcher
│   │   ├── StudentProfileSetup.tsx # Student onboarding flow
│   │   └── ui/                     # shadcn/ui base components
│   ├── styles/                     # Global CSS variables & tokens
│   ├── guidelines/                 # AI design & coding guidelines
│   ├── App.tsx                     # Root component, routing & session management
│   ├── main.tsx                    # React entry point
│   ├── Attributions.md             # Third-party asset credits
│   └── index.css                   # Tailwind compiled CSS
├── index.html                      # HTML shell
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript project config
├── tsconfig.node.json              # TypeScript config for Vite/Node tools
└── package.json                    # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation & Local Development

```bash
# 1. Clone the repository
git clone https://github.com/bhavik-gitt/hackathon-project.git
cd hackathon-project

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
# → Opens http://localhost:3000
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with HMR at `http://localhost:3000` |
| `npm run build` | Build for production (output → `build/`) |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | Run TypeScript type checker without emitting files |

---

## 🌐 Deployment

### Option 1 — GitHub Pages (Recommended · Automatic CI/CD)

1. Push to any branch named `main`.
2. Go to **Settings → Pages** → set **Source** to *GitHub Actions*.
3. The `.github/workflows/deploy.yml` workflow builds and deploys automatically on every push.
4. Your live URL:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

### Option 2 — Netlify / Vercel / Cloudflare Pages

Connect your repository and configure:
- **Build command:** `npm run build`
- **Publish directory:** `build`

Or deploy manually:

```bash
npm run build
# Upload the `build/` directory to your static host
```

### Option 3 — Custom Sub-directory Base Path

If the app is served from a sub-path (e.g. `https://example.com/app/`):

```bash
VITE_BASE_PATH=/app/ npm run build
```

---

## 🙏 Attributions

- UI components from [shadcn/ui](https://ui.shadcn.com/) — [MIT License](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md)
- Photos from [Unsplash](https://unsplash.com/) — [Unsplash License](https://unsplash.com/license)

---

<div align="center">

Built with ❤️ for the hackathon · **Zero2Legacy**

</div>

  