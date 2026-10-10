export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'mobile' | 'fullstack';
  platforms: string[];
  description: string;
  architectureHighlight: string;
  techStack: string[];
  links: {
    label: string;
    url: string;
    type: 'playstore' | 'appstore' | 'web';
  }[];
  metrics?: string;
  roleScope: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export const RESUME_DATA = {
  name: "Puneet Verma",
  role: "Full-Stack Mobile Developer",
  location: "Tirupati, India",
  phone: "+91 9517613776",
  email: "puneetverma951761@gmail.com",
  linkedin: "https://linkedin.com/in/puneetverma",
  twitter: "https://x.com/puneetverma",
  github: "https://github.com/puneetverma",
  bio: "Full-stack mobile developer with 2 years of experience building and shipping apps end to end using React Native, Node.js, MySQL, and MongoDB. Comfortable owning a feature from database schema to API to screen to Play Store release.",
  
  metrics: [
    { value: "4", label: "Play Store Apps", detail: "Published & maintained in production" },
    { value: "3", label: "App Store Apps", detail: "Shipped to iOS production" },
    { value: "800ms", label: "Query Latency", detail: "Optimized down from 2.2s with indexing" },
    { value: "5", label: "Operational Roles", detail: "Architected unified RBAC ecosystem" },
  ],

  experiences: [
    {
      id: "ymts",
      role: "Software Engineer",
      company: "YMTS",
      type: "Full Time",
      location: "Tirupati, India",
      period: "April 2025 – Present",
      summary: "Led mobile architecture and core backend services powering 5 internal operational roles. Owned product delivery through schema design, native modules, and dual-store distribution.",
      highlights: [
        "Designed the system architecture, relational database schemas, and codebase for cross-platform mobile app in React Native, backend in Node.js, Redis, MySQL, TypeScript, and admin frontend in React with React Query for 5 distinct business roles.",
        "Optimized database query response latency from 2.2 seconds to 800ms by optimizing complex joins, adding targeted composite indexes, and projecting only necessary payload fields.",
        "Hardened platform security by engineering multi-tier API rate limiting, JWT-based authentication flows, and strict CORS configuration.",
        "Engineered mobile capabilities including push notifications via Firebase Cloud Messaging, Google Maps routing, and custom Android/iOS native geofencing modules.",
        "Built resilient client features: offline-first attendance queueing with background sync, multi-language localization, React error boundaries, and seamless in-app auto-updates.",
        "Standardized engineering workflows by implementing automated pre-commit hooks, ESLint rules, and authoring subagent documentation guides for AI-assisted engineering velocity.",
        "Integrated Sentry crash analytics and Revopush to maintain real-time observability across production deployments.",
        "Shipped and deployed 4 applications on Google Play Store and 3 applications on Apple App Store."
      ],
      technologies: ["React Native", "Node.js", "TypeScript", "MySQL", "Redis", "React Query", "Firebase", "Google Maps API", "Native Modules", "Sentry", "Docker"]
    },
    {
      id: "contract",
      role: "Full Stack Developer",
      company: "Independent Contractor",
      type: "Contract",
      location: "Remote",
      period: "Dec 2022 – July 2023",
      summary: "Delivered full-stack systems and workflow automation tools across e-commerce aggregation and AI-assisted educational tooling.",
      highlights: [
        "Architected and deployed full-stack web solutions utilizing React, TypeScript, Node.js, Prisma ORM, and Puppeteer headless browser automation.",
        "Built automated question generation and assessment pipelines for a high-engagement Quiz platform leveraging OpenAI APIs with structured output parsing.",
        "Engineered a multi-marketplace SaaS automation engine enabling one-click cross-catalog syndication across multiple e-commerce storefronts."
      ],
      technologies: ["React", "TypeScript", "Node.js", "Prisma", "Puppeteer", "OpenAI API", "REST APIs", "Tailwind CSS"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "quiz-selection",
      title: "Quiz Selection",
      tagline: "AI-automated question generation & mobile testing engine",
      category: "mobile",
      platforms: ["Google Play Store", "Apple App Store"],
      description: "A comprehensive mobile examination and knowledge testing engine featuring automated dynamic question generation, real-time scoring, and synchronized leaderboard analytics.",
      architectureHighlight: "Integrated OpenAI API pipelines with structured validation to generate topic-specific question trees, cached on Node.js/MongoDB with instant client hydration.",
      techStack: ["React Native", "Node.js", "OpenAI API", "MongoDB", "TypeScript", "Redux"],
      roleScope: ["Full mobile client implementation", "AI question ingestion pipeline", "App Store & Play Store publishing"],
      links: [
        { label: "Google Play Store", url: "https://play.google.com/store/search?q=Quiz+Selection&c=apps", type: "playstore" },
        { label: "Apple App Store", url: "https://apps.apple.com/search?term=Quiz+Selection", type: "appstore" }
      ],
      metrics: "Cross-platform iOS & Android releases"
    },
    {
      id: "svpipes",
      title: "SVPIPES",
      tagline: "Industrial pipe supply chain & warehouse operations system",
      category: "fullstack",
      platforms: ["Google Play Store", "Web Admin Portal"],
      description: "Enterprise operations suite designed for industrial pipe manufacturing, tracking physical stock transitions, barcode dispatches, customer consignments, and centralized management.",
      architectureHighlight: "Engineered high-throughput MySQL inventory schemas, fast Redis caching for active stock counts, and React Query on the web admin dashboard for real-time order visibility.",
      techStack: ["React Native", "React", "Node.js", "MySQL", "Redis", "React Query", "TypeScript"],
      roleScope: ["Database schema design", "REST API architecture", "Mobile warehouse scanner app", "Web administrative console"],
      links: [
        { label: "Google Play Store", url: "https://play.google.com/store/search?q=SVPIPES&c=apps", type: "playstore" },
        { label: "Admin Console", url: "https://svpipes.ymtsindia.org/admin", type: "web" }
      ],
      metrics: "Sub-second queries across large inventory ledgers"
    },
    {
      id: "restosoft",
      title: "Restosoft Owner App",
      tagline: "Restaurant management, POS telemetry & executive metrics",
      category: "mobile",
      platforms: ["Google Play Store", "Apple App Store"],
      description: "Real-time executive mobile app for restaurant owners and general managers to oversee kitchen prep orders, daily revenue tallies, inventory depletion, and table occupancy.",
      architectureHighlight: "Multi-tenant role-based access control with token rotation, push notification alerts for critical stock warnings, and offline fallback states during network interruptions.",
      techStack: ["React Native", "Node.js", "TypeScript", "MySQL", "Firebase Cloud Messaging", "Sentry"],
      roleScope: ["End-to-end mobile app architecture", "Role-based authentication", "Live metrics synchronization", "Store release management"],
      links: [
        { label: "Google Play Store", url: "https://play.google.com/store/search?q=Restosoft+Owner&c=apps", type: "playstore" },
        { label: "Apple App Store", url: "https://apps.apple.com/search?term=Restosoft+Owner", type: "appstore" }
      ],
      metrics: "Dual-store release with live POS telemetry"
    },
    {
      id: "lpgsoft",
      title: "LPGSoft Delivery App",
      tagline: "Last-mile cylinder delivery, geofencing & offline attendance",
      category: "mobile",
      platforms: ["Google Play Store"],
      description: "Field service mobility app for delivery drivers managing cylinder distribution routes, geofenced customer drops, digital delivery slips, and driver attendance recording.",
      architectureHighlight: "Built custom Android Native Geofencing modules and offline-first SQLite/AsyncStorage sync engine so drivers can complete delivery records in low-connectivity areas.",
      techStack: ["React Native", "Android Native Modules", "Google Maps API", "Geofencing", "Node.js", "MySQL"],
      roleScope: ["Native geofencing module", "Offline-first sync queue", "Google Maps routing integration", "Play Store production deployment"],
      links: [
        { label: "Google Play Store", url: "https://play.google.com/store/search?q=LPGSoft+Delivery&c=apps", type: "playstore" }
      ],
      metrics: "100% reliable offline attendance logging"
    }
  ] as Project[],

  skillsPillars: [
    {
      category: "Mobile Engineering",
      description: "Cross-platform mobile applications, native modules, device capabilities, and app store release workflows.",
      items: [
        "React Native",
        "Native Android Modules (Java/Kotlin)",
        "Native iOS Modules (Swift/Obj-C)",
        "Geofencing & Google Maps APIs",
        "Firebase Cloud Messaging (Push Notifications)",
        "Offline-First Sync & Storage",
        "React Query & State Management",
        "Error Boundaries & In-App Auto Updates"
      ]
    },
    {
      category: "Backend & Systems",
      description: "Robust REST APIs, secure authentication, caching, query optimization, and automation services.",
      items: [
        "Node.js",
        "TypeScript",
        "Express",
        "Prisma ORM",
        "JWT Authentication & Token Lifecycle",
        "API Rate Limiting & Security Hardening",
        "Role-Based Access Control (RBAC)",
        "Puppeteer Browser Automation"
      ]
    },
    {
      category: "Data & Storage",
      description: "Relational and document databases, schema modeling, indexing strategies, and cache acceleration.",
      items: [
        "MySQL",
        "MongoDB",
        "Redis Caching",
        "Composite Database Indexing",
        "Query Latency Optimization (2.2s → 800ms)",
        "Data Migration & Seeding",
        "Relational Schema Design"
      ]
    },
    {
      category: "DevOps & Production Operations",
      description: "Containerization, continuous delivery, store publication, and live application telemetry.",
      items: [
        "Google Play Console (4 releases)",
        "Apple App Store Connect (3 releases)",
        "Docker Containerization",
        "CI/CD Pipelines & Pre-Commit Hooks",
        "Sentry Crash & Error Telemetry",
        "ESLint & Code Standards Enforcement",
        "Revopush Developer Tools"
      ]
    }
  ],

  education: {
    institution: "Indian Institute of Information Technology (IIIT) Guwahati",
    degree: "Bachelor of Technology (B.Tech)",
    discipline: "Computer Science and Engineering",
    period: "2018 – 2022",
    location: "Guwahati, Assam, India",
    focus: "Core CS curriculum encompassing Data Structures, Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Object-Oriented Software Design."
  }
};
