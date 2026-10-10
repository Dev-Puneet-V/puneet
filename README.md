# Puneet Verma — Full-Stack Mobile Developer Portfolio

Executive portfolio website built with React 19, TypeScript, Tailwind CSS v4, and Vite. Configured for 100% free hosting and deployment on **Cloudflare Pages**.

## Live Store & Production Links
- **Quiz Selection**: [Google Play Store](https://play.google.com/store/apps/details?id=com.ymtsindia.selection&hl=en_IN) · [Apple App Store](https://apps.apple.com/in/app/quiz-selection/id6587553467)
- **SVPIPES**: [Google Play Store](https://play.google.com/store/apps/details?id=com.svpipe) · [Admin Portal](https://svpipes.com/admin/)
- **Restosoft Owner App**: [Google Play Store](https://play.google.com/store/apps/details?id=com.resto.owner) · [Apple App Store](https://apps.apple.com/us/app/restosoft-owner/id6759081082)
- **LPGSoft Delivery App**: [Google Play Store](https://play.google.com/store/apps/details?id=com.lpgsoft.delivery&hl=en_IN)

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Server runs at `http://localhost:3000`.

---

## Free Cloudflare Pages Deployment

### Option 1: Git Integration (Recommended & 100% Free)
1. Push this repository to GitHub or GitLab.
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select your repository and configure:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Click **Save and Deploy**. Cloudflare automatically generates a free `*.pages.dev` domain with automatic SSL, global CDN, and unlimited free bandwidth!

### Option 2: Direct CLI Deployment via Wrangler
Deploy directly from your machine:
```bash
npm run deploy
```
This will build `dist/` and prompt you to log into Cloudflare or specify your Pages project name.

---

## Features
- **Clean Light Mode Theme**: Executive, crisp, and readable typography with `Plus Jakarta Sans` and `JetBrains Mono`.
- **Engineering Notes / Blogs**: Interactive in-depth writeups on MySQL query optimization, offline-first mobile sync, native geofencing, and App Store releases.
- **Projects & Specs Modals**: Direct store and admin console links with detailed architectural breakdown modals.
- **Production Metrics ProofBar**: Shipped apps, query latency reduction, and multi-role RBAC numbers.
- **Cloudflare Pages SPA Routing**: Pre-configured `public/_redirects` (`/* /index.html 200`) and `public/_headers` for high-performance edge caching.
