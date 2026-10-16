# Uzair Ur Rehman · Portfolio

A fast static portfolio built with [Astro](https://astro.build). Pages: Home, Work, Posts, About, Contact.

## Edit your details
Name, bio, experience, education, certifications and links are all in `src/data/profile.ts`.
Your CV lives at `public/cv/Uzair-Ur-Rehman-CV.pdf`; replace that file to update it.
To add a photo, put it in `public/uploads/` and set `photo: '/uploads/your-photo.jpg'` in `profile.ts`.

## Add a work sample
1. Put images and PDFs in `public/uploads/` (e.g. `public/uploads/four-seasons-1.jpg`).
2. Create or edit a file in `src/content/work/`, for example:

```md
---
title: Project name
summary: One line about the project.
category: Hospitality
location: Jeddah, Saudi Arabia
period: 2026
role: BIM Coordinator
lod: LOD 400
software: [Revit, Navisworks]
cover: /uploads/project-cover.jpg
images: [/uploads/project-1.jpg, /uploads/project-2.jpg]
pdf: /uploads/project-drawings.pdf
featured: true
order: 1
---

Write about the project here.
```

## Write a post
Add a file to `src/content/posts/`:

```md
---
title: My post title
description: One line summary.
date: 2026-10-20
tags: [BIM, Revit]
---

Post text here. Images: ![caption](/uploads/picture.jpg)
```

## Edit from the browser (no code, optional)
Once the site is on GitHub, sign in at https://app.pagescms.org with GitHub and open this repo.
The `.pages.yml` file gives you forms for **Work samples** and **Posts** with image and PDF upload.
Saving commits to GitHub and the site redeploys automatically.

## Run locally
```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Hosting
`.github/workflows/deploy.yml` publishes to GitHub Pages on every push to `main`.
In the repo go to **Settings → Pages → Source: GitHub Actions**.
Name the repo `<your-username>.github.io` for the cleanest address.
