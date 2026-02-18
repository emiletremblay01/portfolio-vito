# Vito Pranio — Portfolio Website

Portfolio website built with **Next.js App Router** to showcase audio/post-production projects by category and detailed project pages.

## Tech stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui (Radix primitives)
- **Animations:** Framer Motion + Embla Carousel autoplay
- **Data layer:** MongoDB via Mongoose + TanStack Query hydration/cache
- **Deployment target:** Vercel

## Getting started

### 1) Install dependencies

```bash
pnpm install
```

### 2) Configure environment variables

Create `.env.local`:

```bash
DATABASE_URL="mongodb+srv://<user>:<password>@<cluster>.mongodb.net/PortfolioVitoDB?retryWrites=true&w=majority"
```

> Mongoose uses `DATABASE_URL` (or `MONGODB_URI`) to connect to MongoDB. The database name should match your existing DB (e.g. `PortfolioVitoDB`).

### 3) Run the development server

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Available scripts

- `pnpm dev` — start development server
- `pnpm build` — build production bundle
- `pnpm start` — run production server
- `pnpm lint` — run Next.js lint rules

## Website architecture

## 1. Routing and layouts (App Router)

The app is split into route groups:

- `app/layout.tsx` — **root layout**
  - Loads global CSS and fonts
  - Wraps app in React Query provider
  - Adds persistent background and frame/chrome visuals
- `app/(main)/layout.tsx` — **main shell layout**
  - Prefetches experiences on the server
  - Dehydrates cache for client hydration
  - Renders left/right navigation buttons around page content
- `app/(main)/(home)/page.tsx` — home page intro
- `app/(main)/(routes)/[experienceCategory]/page.tsx` — category listing page
- `app/(main)/(routes)/[experienceCategory]/[experienceId]/page.tsx` — single experience detail page

### Route map

- `/` → home
- `/:experienceCategory` → category view
- `/:experienceCategory/:experienceId` → experience detail

Supported categories are modeled as:

- `composition`
- `evenementiel`
- `postproduction`

## 2. Data flow

1. `fetchExperiences()` in `actions/actions.ts` calls MongoDB Data API.
2. In `app/(main)/layout.tsx`, TanStack Query prefetches `['experiences']` server-side.
3. `HydrationBoundary` sends this cache to the client.
4. Client components (`useGetExperiences`) read from React Query and render cards/details.

This gives fast navigation with shared cached data between category and detail pages.

## 3. UI composition

- `components/` contains reusable app components:
  - navigation buttons
  - cards (`experienceCard`)
  - avatar/chat bubble
  - animated wrappers
- `components/ui/` contains shadcn-style primitives (`button`, `select`, `carousel`, etc.).
- `public/` stores static assets (avatars, gifs, resume, SVG helpers).

## 4. Configuration layer

- `next.config.mjs` allows remote images from `res.cloudinary.com`.
- `tailwind.config.ts` defines custom colors/shadows/theme tokens.
- `styles/globals.css` centralizes global styling and CSS variables.

## Project structure

```text
.
├── app/
│   ├── layout.tsx                          # Root layout (global shell)
│   └── (main)/
│       ├── layout.tsx                      # Main app shell + query prefetch
│       ├── (home)/page.tsx                 # Homepage
│       └── (routes)/[experienceCategory]/
│           ├── layout.tsx                  # Category page frame/title
│           ├── page.tsx                    # Experiences list by category/type
│           ├── components/                 # Category-specific UI blocks
│           └── [experienceId]/page.tsx     # Experience detail page
├── actions/
│   ├── actions.ts                          # Server actions (Mongo Data API)
│   └── client/useGetExperiences.ts         # React Query client hook
├── components/
│   ├── ui/                                 # Reusable UI primitives
│   └── ...                                 # App-specific reusable components
├── lib/
│   ├── Providers.tsx                       # React Query provider + devtools
│   └── utils.ts                            # Shared utility helpers
├── public/                                 # Static assets
├── styles/globals.css                      # Global styles
├── types.ts                                # Domain types (Experience)
└── README.md
```

## Notes for future evolution

- Add admin dashboard (CRUD for experiences) as planned in roadmap.
- Move Data API calls behind a dedicated backend layer if stricter security/auditing is needed.
- Add tests (component and integration) to protect routing/data contracts.
