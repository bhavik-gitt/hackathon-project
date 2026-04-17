
  # AI Internship Platform Dashboard — Zero2Legacy

  A React + Vite + TypeScript dashboard connecting students, companies, NGOs, government bodies, and CSR stakeholders for internship management.

  Live demo (GitHub Pages): [https://bhavik-gitt.github.io/hackathon-project/](https://bhavik-gitt.github.io/hackathon-project/)

  ## Tech Stack

  | Tool | Purpose |
  |------|---------|
  | React 18 | UI framework |
  | Vite 6 | Build tool & dev server |
  | TypeScript | Type safety |
  | Tailwind CSS v4 | Utility-first styling |
  | Radix UI | Accessible component primitives |
  | Recharts | Data visualisation |
  | Lucide React | Icons |

  ---

  ## Local Development

  ```bash
  # 1. Install dependencies
  npm install

  # 2. Start dev server (opens http://localhost:3000)
  npm run dev

  # 3. Type-check without emitting files
  npm run typecheck

  # 4. Preview the production build locally
  npm run build
  npm run preview
  ```

  ---

  ## Deployment

  ### Option 1 – GitHub Pages (automatic CI/CD)

  1. Push this repository to GitHub (any branch named `main`).
  2. Go to **Settings → Pages** and set the **Source** to *GitHub Actions*.
  3. The `.github/workflows/deploy.yml` workflow will build and deploy the site automatically on every push to `main`.
  4. The live URL will be:
     ```
     https://<your-username>.github.io/<repo-name>/
     ```

  ### Option 2 – Manual static hosting (Netlify, Vercel, Cloudflare Pages, etc.)

  ```bash
  # Build for production
  npm run build

  # The output is in the `build/` directory — upload that to any static host.
  ```

  For Netlify/Vercel you can also connect the repository directly; set the build command to `npm run build` and publish directory to `build`.

  ### Option 3 – Custom base path

  If the site is served from a sub-directory (e.g. `https://example.com/app/`), pass the base path at build time:

  ```bash
  VITE_BASE_PATH=/app/ npm run build
  ```

  ---

  ## Project Structure

  ```
  hackathon-project/
  ├── .github/
  │   └── workflows/
  │       └── deploy.yml       # GitHub Actions CI/CD
  ├── public/                  # Static assets
  ├── src/
  │   ├── components/          # Feature components (dashboards, login, …)
  │   │   └── ui/              # shadcn/ui base components
  │   ├── styles/              # Global CSS variables
  │   ├── App.tsx              # Root component & routing
  │   ├── main.tsx             # React entry point
  │   └── index.css            # Tailwind compiled CSS
  ├── index.html               # HTML entry point
  ├── vite.config.ts           # Vite configuration
  ├── tsconfig.json            # TypeScript configuration
  └── package.json
  ```

  ## User Roles

  | Role | Description |
  |------|-------------|
  | **Student** | Browse & apply for internships, track progress |
  | **Company** | Post opportunities, review applicants |
  | **NGO** | Manage social-impact programmes |
  | **Government** | Oversight & reporting dashboard |
  | **CSR Stakeholder** | Fund & monitor CSR internship initiatives |

  Use the **Quick Demo Access** buttons on the login screen to explore each role without creating an account.

  