# 🌊 Azure Beach Club

A modern, luxury, fully responsive website for a high-end beach bar & restaurant, built as a **reusable, config-driven template**: rebrand the entire site for any venue by editing a single file.

![React](https://img.shields.io/badge/React%2019-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![TanStack Start](https://img.shields.io/badge/TanStack%20Start-FF4154?style=flat&logo=reactquery&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%204-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)

---

## ✨ Features

- **Single-file configuration**: brand name, colors, fonts, contact info, opening hours, menu, gallery, events, testimonials, SEO and footer all live in [`src/config/site.ts`](src/config/site.ts). No component edits needed to rebrand.
- **Full-screen hero** with a live **"next sunset" countdown**
- **Menu** with categories and featured dishes
- **About, Gallery, Events & Testimonials** sections
- **Reservation form** (name, phone, email, guests, date, time, notes) with required-field validation and a confirmation message
- **Contact section** with address, hours and social links
- **Scroll-reveal animations** powered by Motion
- **SEO-ready**: meta tags plus a generated `sitemap.xml` route
- **Mobile-first, responsive layout** with a sticky navigation bar

## 🛠️ Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + [TanStack Start](https://tanstack.com/start) (file-based routing, SSR) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 + shadcn/ui components |
| Animation | Motion |
| Icons | Lucide |
| Tooling | Vite, ESLint, Prettier, Bun |

## 🚀 Getting started

```bash
# install dependencies
bun install        # or: npm install

# start the dev server
bun run dev        # or: npm run dev

# production build
bun run build
bun run preview
```

## 🎨 Rebranding the template

1. Open [`src/config/site.ts`](src/config/site.ts).
2. Change the brand, contact details, menu items, events and SEO values.
3. Replace the images in [`src/assets/`](src/assets/) (keep the same file names, or update the imports in `site.ts`).

That's it. Every section reads from the config, so the whole site updates automatically.

## 📁 Project structure

```
src/
├── config/site.ts        # all site content & branding
├── routes/
│   ├── __root.tsx        # HTML shell, fonts, meta
│   ├── index.tsx         # home page (all sections)
│   └── sitemap[.]xml.ts  # generated sitemap
├── components/
│   ├── site/             # Nav, Reveal animation, brand styles
│   └── ui/               # shadcn/ui primitives
└── assets/               # images
```

## 📝 Notes

- Contact details in the config are placeholders.
- The reservation form is front-end only; connect it to an API or email service for production use.
- Bootstrapped with [Lovable](https://lovable.dev), then customized and turned into a reusable template.

---

Built by [Manel Bouraoui](https://github.com/Manel-Bouraoui)
