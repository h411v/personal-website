# rotiv.dev

Personal site of Vitor dos Santos Silva — blog, quick notes, portfolio and setup, in English and Portuguese.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Static, no JavaScript framework, deployed on Cloudflare Pages.

## Running locally

```sh
npm install
cp .env.example .env   # optional: Last.fm key for the "listening now" card
npm run dev            # http://localhost:4321
```

## Writing

| What | Where |
| --- | --- |
| Blog post | `src/content/blog/<en\|pt>/<slug>.md` — same file name in both folders = translation |
| Quick note | `src/content/notes/<en\|pt>/<anything>.md` — only a `date` in the frontmatter; same file name in both folders = translation |
| About / uses | `src/content/pages/<en\|pt>/` |
| Portfolio / CV | `src/data/cv.ts` |
| Home bio and facts | `src/data/profile.ts` |
