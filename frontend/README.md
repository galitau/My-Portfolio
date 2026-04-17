# Portfolio Frontend (React + Vite)

This is the frontend for the portfolio site, built with React and Vite.

## Project Overview

This portfolio showcases projects and experience across both software and mechanical engineering.

Highlights include:

- A responsive experience for desktop and mobile
- Category-based project browsing (software and mechanical)
- Project cards with media (images/videos), descriptions, and tags
- Dedicated sections for education, awards, and coursework

Primary goals of this site:

- Present technical projects clearly for recruiters and interviewers
- Demonstrate end-to-end engineering range (design + code)
- Keep content easy to update as new work is completed

Tech stack:

- React 19
- Vite
- Framer Motion
- React Three Fiber / Drei (for 3D support in the project)
- Jest + React Testing Library

## Temporary Note

This version of the portfolio is temporary and content-first. A more polished, UI/UX-friendly redesign is planned as a future iteration.

## Available Scripts

- Start dev server:

```bash
npm run dev
```

- Build for production:

```bash
npm run build
```

- Preview production build locally:

```bash
npm run preview
```

- Run linter:

```bash
npm run lint
```

## Testing Guide (Jest + React Testing Library)

This project uses:

- Jest as the test runner and assertion framework
- React Testing Library for rendering components and querying the UI like a user
- @testing-library/user-event for realistic interactions (clicks, typing)

### Where the tests are

- `src/__tests__/App.test.jsx`
	- Smoke and navigation tests for the main app
	- Checks desktop and mobile behavior
- `src/__tests__/projects.test.js`
	- Regression tests for `src/data/projects.json`
	- Prevents accidental data-format breakage

### How to run tests

If your terminal is in the `frontend` folder:

```bash
npm test
npm run test:watch
```

If your terminal is at the workspace root (`Portfolio`):

```bash
npm --prefix .\\frontend test
npm --prefix .\\frontend run test:watch
```

### Common ENOENT error and fix

If you see an error like "Could not read package.json" at `Portfolio/package.json`, it means npm is being run from the wrong directory.

Fix it by either:

- changing into `frontend` first, or
- using `npm --prefix .\\frontend ...` from the workspace root.

### What each test type protects

- Smoke tests:
	- Catch major UI crashes after updates
	- Verify key sections still render
- Navigation tests:
	- Confirm core user flows still work (Home, Software, Mechanical)
- Data regression tests:
	- Ensure every project has required fields
	- Ensure IDs stay unique
	- Ensure category values stay valid

### How to add a new test

1. Decide the user behavior or data rule you want to protect.
2. Add a `test('...', () => { ... })` block in the appropriate file.
3. Use Testing Library queries such as `getByRole` or `findByRole`.
4. Run `npm test` and confirm the new test fails before your change and passes after your fix.

Tip: prefer user-visible checks (headings, buttons, text) over class-name checks. This keeps tests stable and meaningful.
