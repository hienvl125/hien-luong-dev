# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server with hot reload
npm run build     # Type-check (tsc) then build for production → dist/
npm run preview   # Serve the production build locally
```

No test runner or linter is currently configured.

## Architecture

This is a minimal TypeScript + Vite client-side web app:

- `index.html` — entry point; loads `src/main.ts` as an ES module script
- `src/main.ts` — application entry; imports styles and mounts any app logic
- `src/style.css` — global stylesheet
- `public/` — static assets copied verbatim to `dist/` at build time

TypeScript is configured for strict mode (no unused locals/params, no fallthrough cases, erasable syntax only) targeting ES2023 with bundler module resolution.
