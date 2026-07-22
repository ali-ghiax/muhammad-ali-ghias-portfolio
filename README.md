# Portfolio

> Where code meets craft — the personal portfolio of Muhammad Ali Ghias.

Junior Software Engineer & Graphic Designer. A refined showcase of web engineering, creative design, professional experience, and selected work from [github.com/ali-ghiax](https://github.com/ali-ghiax).

**Live:** [muhammadalighias.me](https://www.muhammadalighias.me) · **GitHub:** [ali-ghiax](https://github.com/ali-ghiax) · **LinkedIn:** [muhammad-ali-ghias](https://www.linkedin.com/in/muhammad-ali-ghias/)

Also searchable as **Ali Ghias**, **MAG**, **Ghias**, and **muhammad-ali-ghias**.

---

## Sections

- Home — brand-first hero and featured work  
- About — bio, strengths, education & certifications  
- Experience — professional journey timeline  
- Projects — all public GitHub repositories  
- Skills — web, development, design, Microsoft & tools  
- Blog & Contact  

---

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **React 19** + **Tailwind CSS**
- **Framer Motion** / GSAP
- **React Hook Form** + Zod
- **FormSubmit** — contact form email delivery (no API key)

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

---

## Blog feed

`/blog` shows original posts plus a **daily curated feed** from the [DEV.to API](https://developers.forem.com/api) (React, Next.js, TypeScript, webdev, design, Microsoft, and more), sorted by community reactions.

- Feed API: `/api/blog/feed`
- Daily refresh: Vercel Cron → `/api/blog/revalidate` at 06:00 UTC (`vercel.json`)
- ISR revalidate: 24 hours

Optional: set `CRON_SECRET` and Vercel will authorize the cron with `Authorization: Bearer …`.

---

## Contact form email

Messages from `/contact` are emailed to **muhammadalighias@gmail.com** via [FormSubmit](https://formsubmit.co).

**First time only:** after you submit the form, check Gmail for a FormSubmit confirmation email and click **Activate Form**. Later messages arrive in your inbox automatically.

---

## SEO & indexing

- Canonical domain: `https://www.muhammadalighias.me`
- `robots.txt` — allows Googlebot and major crawlers
- `sitemap.xml` — XML sitemap (all pages, projects, blog)
- `sitemap.txt` — text sitemap (one URL per line)
- `index.txt` — plain URL index for crawlers / bulk submission
- JSON-LD Person / WebSite / ProfilePage schema with name aliases
- Per-page metadata for About, Experience, Projects, Skills, Blog, Contact
- Optional Google verification via `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (see `.env.example`)

### After deploy — Google Search Console / Bing Webmaster Tools

1. Add property `https://www.muhammadalighias.me`
2. Verify ownership
3. Submit sitemaps:
   - `https://www.muhammadalighias.me/sitemap.xml`
   - `https://www.muhammadalighias.me/sitemap-images.xml`
4. Request indexing for the homepage (www URL only — non-www redirects to www)

---

## Content

Portfolio content lives in `src/data/portfolio.ts`.  
CV download: `public/Muhammad_Ali_Ghias_Resume.pdf`.

---

## Author

**Muhammad Ali Ghias** · Ali Ghias · Ghias  
Peshawar, KPK · [muhammadalighias.me](https://www.muhammadalighias.me) · [ali-ghiax](https://github.com/ali-ghiax)
