# Mahdi Alsalami Portfolio

A clean, dark, responsive personal portfolio built with Next.js, TypeScript, and Tailwind CSS.

Production domain: [mahdialsalami.dev](https://mahdialsalami.dev)

## Install dependencies

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Edit portfolio content

Most of the site content lives in:

```bash
data/portfolio.ts
```

Update that file to change:

- navigation links
- about text
- experience entries
- project links
- blog links
- social/contact links
- site metadata

## Project structure

```text
app/
components/
data/
public/
```

- `app/` contains the App Router pages, metadata, global styles, and SEO files.
- `components/` contains reusable UI and section components.
- `data/portfolio.ts` centralizes editable portfolio content.
- `public/` stores static assets such as the Open Graph image and resume file.

## Deploy to Vercel

1. Push this project to a Git repository.
2. Import the repository into [Vercel](https://vercel.com/).
3. Vercel will detect Next.js automatically.
4. Add `mahdialsalami.dev` and `www.mahdialsalami.dev` to the Vercel project domains.
5. Point Porkbun DNS to Vercel:
   - Apex `mahdialsalami.dev`: `A` record to `76.76.21.21`
   - `www.mahdialsalami.dev`: `CNAME` record to `cname.vercel-dns.com`

For a production build locally:

```bash
npm run build
npm run start
```

## Replace the resume file

The navbar resume button currently points to:

```bash
public/Mahdi-Alsalami-Resume.pdf
```

Replace that file with your latest resume while keeping the same filename, or update the path in `data/portfolio.ts`.
