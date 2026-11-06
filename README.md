# Artiosis — Digital Solutions

Responsive Next.js 15 / React 19 / TypeScript agency website. Dark glassmorphism with the existing Artiosis teal `#096162`.

## Run

```bash
npm install
npm run dev
```

Visit http://localhost:3000. For production: `npm run build && npm start`.

## Important launch tasks

- Confirm that `hello@artiosis.com` is the real inbox. The inquiry form currently uses `mailto:` to prepare an email and **does not** submit to a server or store leads.
- Connect an actual scheduling provider and replace the “Coming soon” booking placeholder.
- Add a reviewed privacy policy before collecting personal information with a hosted form.
- Verify ownership/permission for the HustleWise portfolio example; replace the illustrative Future Form concept with real approved work when available.
- Add real testimonials only after receiving permission and verification. No fictional ratings or reviews are included.
- Add confirmed social media profiles and a custom OG image / favicon.
- Test keyboard and screen-reader behavior and run an automated WCAG audit before launch.

## Pages

Single landing page with anchored sections: hero, services, portfolio, approach, credibility statement, FAQ, and contact. More pages can be added using the Next.js App Router.