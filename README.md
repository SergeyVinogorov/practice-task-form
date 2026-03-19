# Practice Task Manager (React + TypeScript + FSD + Tailwind)

Mini project for practicing **React application architecture** using **Feature-Sliced Design (FSD)**.

The app renders a small **task manager** with:
- tasks list
- status filtering: **All / Completed / Incomplete**
- task deletion (no reload)
- basic navigation (**Home**, **Tasks**)

---

## Tech stack

- **React 19**
- **TypeScript**
- **Vite 7**
- **React Router 7**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **ESLint** (with `eslint-plugin-boundaries` to enforce FSD layer imports)
- **Prettier** + `prettier-plugin-tailwindcss` (keeps Tailwind class order consistent)

---

## Requirements

- **Node.js 20.19+ or 22.12+** (Vite 7 requirement).  
  See the Vite 7 release notes / migration guide.

---

## Getting started

```bash
npm install
npm run dev
```
