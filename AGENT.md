# AGENT.md — Puneet Verma Portfolio Project Guidelines

## Overview
This repository contains the personal portfolio website for **Puneet Verma**, Full-Stack Mobile Developer with 2+ years of production experience across React Native, Node.js, MySQL, and MongoDB.

## Design & Theme Rules
1. **Light Theme Only**: The website is styled exclusively in a modern, executive **light mode** (crisp whites, refined slate/zinc neutrals, subtle borders, high-contrast readable typography, subtle micro-interactions). No dark-mode backgrounds.
2. **Typography**: Clean, professional typography with Google Fonts `Plus Jakarta Sans` for body/headings and `JetBrains Mono` for metadata, tags, and technical metrics.
3. **Sections**:
   - **Hero**: Clear statement of experience, direct contact actions (Copy Email, Send Email, Phone, LinkedIn, Twitter/X).
   - **ProofBar**: Concrete production metrics (4 Play Store apps, 3 App Store apps, 800ms query latency, 5 operational roles).
   - **Experience**: Detailed production history at YMTS and full-stack contract roles.
   - **Selected Projects**: Live store links (Play Store & App Store) and admin console links, with interactive specs modals.
   - **Blogs / Technical Engineering Notes**: Dedicated section highlighting deep technical articles on query optimization, offline-first mobile sync, native geofencing, and dual-store releases.
   - **Technical Toolkit / Skills**: Organized by Mobile Engineering, Backend & Systems, Data & Storage, and DevOps.
   - **Education**: BTech CSE from IIIT Guwahati (2018–2022).
   - **Contact / Footer**: Direct communication methods with live IST clock and social links.

## Resume & Content Accuracy
- **Name**: Puneet Verma
- **Phone**: +91 9517613776
- **Email**: puneetverma951761@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/puneet-verma-3475962a7/
- **Education**: BTech, CSE, IIIT Guwahati (2018 - 2022)
- **Live Project Links**:
  - Quiz Selection: Play Store (`https://play.google.com/store/apps/details?id=com.ymtsindia.selection&hl=en_IN`), App Store (`https://apps.apple.com/in/app/quiz-selection/id6587553467`)
  - SVPIPES: Play Store (`https://play.google.com/store/apps/details?id=com.svpipe`), Admin (`https://svpipes.com/admin/`)
  - Restosoft Owner: Play Store (`https://play.google.com/store/apps/details?id=com.resto.owner`), App Store (`https://apps.apple.com/us/app/restosoft-owner/id6759081082`)
  - LPGSoft Delivery: Play Store (`https://play.google.com/store/apps/details?id=com.lpgsoft.delivery&hl=en_IN`)

## Cloudflare Pages Deployment
- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: `Vite`
- SPA routing support: `public/_redirects` contains `/* /index.html 200`
- Zero-cost deployment supported via Cloudflare Pages free tier.
