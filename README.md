# Artiosis — Creative Technology Agency

Turning ambitious ideas into digital experiences.

A responsive agency website that brings **Web Experiences**, **AI & Automation**, and **Creative Solutions** together in one dark, teal-accented identity.

[View the live website](https://artiosis-two.vercel.app/)

## Project showcase

### First impression & expertise

The homepage pairs a bold headline and animated orbital artwork with an interactive showcase of the agency’s three core disciplines.

[![Artiosis homepage hero and interactive services showcase](screenshots/artiosis-01-hero-services.webp)](https://artiosis-two.vercel.app/)

### Client experience & clear answers

Client testimonials and a compact FAQ bring the agency’s communication style and responsive interface into focus.

[![Artiosis client testimonials and frequently asked questions](screenshots/artiosis-02-clients-faq.webp)](https://artiosis-two.vercel.app/#testimonials)

## Features

- Responsive desktop, tablet, and mobile layouts.
- Three interactive service pillars, animated backgrounds, and satin-style button interactions.
- Client testimonials and expandable FAQs.
- Email inquiry preparation, social links, and a floating WhatsApp contact panel.
- Published Privacy Policy and Terms & Conditions.
- Search metadata, social sharing image, sitemap, and favicon assets.

## Development

Built with **Next.js 15, React 19, and TypeScript**; hosted on **Vercel**.

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000). For a production build:

```bash
npm run build
npm start
```

The live homepage is `public/artiosis-final.html`, served at `/` through `middleware.ts`. Legal pages and other static assets are in `public/`. The inquiry form opens the visitor’s email application with a prepared message; it does not submit to a server.
