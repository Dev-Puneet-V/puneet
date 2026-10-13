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

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string[];
  keyTakeaways: string[];
}

export const RESUME_DATA = {
  name: "Puneet Verma",
  role: "Full-Stack Mobile Developer",
  location: "Tirupati, India",
  phone: "+91 9517613776",
  email: "puneetverma951761@gmail.com",
  linkedin: "https://www.linkedin.com/in/puneet-verma-3475962a7/",
  twitter: "https://x.com/puneetverma",
  bio: "Full-stack mobile developer with 2 years of experience building and shipping apps end to end using React Native, Nodejs, Mysql, Mongodb. Comfortable owning a feature from database schema to API to screen to Play Store release.",
  
  metrics: [
    { value: "4", label: "Play Store Apps", detail: "Shipped & maintained in live production" },
    { value: "3", label: "App Store Apps", detail: "Published to iOS production" },
    { value: "800ms", label: "Query Latency", detail: "Optimized down from 2.2s with indexing" },
    { value: "5", label: "Operational Roles", detail: "Architected multi-role RBAC systems" },
  ],

  experiences: [
    {
      id: "ymts",
      role: "Software Engineer",
      company: "YMTS",
      type: "Full Time",
      location: "Tirupati, India",
      period: "April 2025 – Present",
      summary: "Architected system design, relational database schemas, and dual-platform mobile apps powering 5 distinct operational roles. Owned end-to-end features from database to API to native code and store releases.",
      highlights: [
        "Designed the architecture, DB Design and set up the codebase for Mobile app in React Native, Backend in Nodejs, Redis, MYSql, Typescript, Frontend in React and React-Query for 5 roles.",
        "Optimized response query time from 2.2s to 800ms and slashed heavy reporting endpoint latency from 59s to 1.2s via a Paginate-First subquery decoupling architecture.",
        "Improved security of overall application using the API Ratelimiter, JWT auth and cors.",
        "Integrated code reviews checks for best practices using pre commit hooks, es-lint.",
        "Created subagents documents for AI Agents to utilize for fast and smooth development.",
        "Implemented push notification using firebase, maps using Google Maps api, Geofencing using Android Native and IOS Native.",
        "Implemented error boundaries, multi language feature, push notifications, auto updates for app updates and offline support for attendance record improving the overall user experience.",
        "Moved 4 applications on playstore and 3 on app stores.",
        "Integrated Sentry, Revopush for smooth developer experience."
      ],
      technologies: ["React Native", "Node.js", "TypeScript", "MySQL", "Redis", "React Query", "Firebase", "Google Maps API", "Android/iOS Native Modules", "Sentry", "Revopush", "Docker"]
    },
    {
      id: "contract",
      role: "Full Stack Developer",
      company: "Independent Contractor",
      type: "Contract",
      location: "Remote",
      period: "Dec 2022 – July 2023",
      summary: "Delivered full-stack solutions, headless browser automation, and AI-powered pipelines for automated content generation and e-commerce platforms.",
      highlights: [
        "Worked on React, Typescript, Nodejs, prisma, puppeteer.",
        "Worked on the Quiz app automation of Question generation utilizing Open-AI apis.",
        "Worked on the SAAS platform used to automate the product addition on multiple ecommerce applications by just one click."
      ],
      technologies: ["React", "TypeScript", "Node.js", "Prisma", "Puppeteer", "OpenAI API", "REST APIs", "Tailwind CSS"]
    },
    {
      id: "zemoso",
      role: "Software Engineer",
      company: "Zemoso Technologies",
      type: "Full Time / Internship",
      location: "Hyderabad / Remote, India",
      period: "April 2022 – Nov 2022",
      summary: "Worked on iOS SDK engineering, diagnosing defects, profiling runtime stability, and fixing critical bugs across native mobile modules.",
      highlights: [
        "Worked on iOS SDK codebase, diagnosing runtime defects, memory leaks, and edge-case exceptions.",
        "Resolved critical bugs across client-facing iOS SDK components to improve stability and integration experience.",
        "Collaborated with cross-functional mobile engineering teams to maintain backward compatibility across multiple iOS releases."
      ],
      technologies: ["iOS", "Swift", "Objective-C", "iOS SDK", "Xcode", "Native Modules"]
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
        { label: "Google Play Store", url: "https://play.google.com/store/apps/details?id=com.ymtsindia.selection&hl=en_IN", type: "playstore" },
        { label: "Apple App Store", url: "https://apps.apple.com/in/app/quiz-selection/id6587553467", type: "appstore" }
      ],
      metrics: "Live on both Android & iOS app stores"
    },
    {
      id: "svpipes",
      title: "SVPIPES",
      tagline: "Industrial pipe supply chain, inventory & warehouse operations system",
      category: "fullstack",
      platforms: ["Google Play Store", "Web Admin Panel"],
      description: "Enterprise operations suite designed for industrial pipe manufacturing, tracking physical stock transitions, barcode dispatches, customer consignments, and centralized management.",
      architectureHighlight: "Engineered high-throughput MySQL inventory schemas, fast Redis caching for active stock counts, and React Query on the web admin dashboard for real-time order visibility.",
      techStack: ["React Native", "React", "Node.js", "MySQL", "Redis", "React Query", "TypeScript"],
      roleScope: ["Database schema design", "REST API architecture", "Mobile warehouse scanner app", "Web administrative console"],
      links: [
        { label: "Google Play Store", url: "https://play.google.com/store/apps/details?id=com.svpipe", type: "playstore" },
        { label: "Admin Panel", url: "https://svpipes.com/admin/", type: "web" }
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
        { label: "Google Play Store", url: "https://play.google.com/store/apps/details?id=com.resto.owner", type: "playstore" },
        { label: "Apple App Store", url: "https://apps.apple.com/us/app/restosoft-owner/id6759081082", type: "appstore" }
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
      architectureHighlight: "Built custom Android Native Geofencing modules and offline-first sync engine so drivers can complete delivery records and attendance in low-connectivity areas.",
      techStack: ["React Native", "Android Native Modules", "Google Maps API", "Geofencing", "Node.js", "MySQL"],
      roleScope: ["Native geofencing module", "Offline-first sync queue", "Google Maps routing integration", "Play Store production deployment"],
      links: [
        { label: "Google Play Store", url: "https://play.google.com/store/apps/details?id=com.lpgsoft.delivery&hl=en_IN", type: "playstore" }
      ],
      metrics: "100% reliable offline attendance logging"
    }
  ] as Project[],

  skillsPillars: [
    {
      category: "Mobile Engineering",
      description: "Cross-platform mobile applications, native bridge modules, device hardware APIs, and production store deployments.",
      items: [
        "React Native",
        "Native Android Modules (Java/Kotlin)",
        "Native iOS Modules (Swift/Obj-C)",
        "Geofencing & Google Maps API",
        "Firebase Cloud Messaging (Push)",
        "Offline-First Attendance & Sync",
        "In-App Auto Updates & Error Boundaries",
        "Multi-Language Localization"
      ]
    },
    {
      category: "Backend & Systems",
      description: "Scalable REST APIs, robust auth systems, rate limiting, and automation infrastructure.",
      items: [
        "Node.js",
        "TypeScript",
        "Express",
        "Prisma ORM",
        "JWT Authentication & CORS Hardening",
        "API Rate Limiter",
        "Role-Based Access Control (5 Roles)",
        "Puppeteer Headless Automation"
      ]
    },
    {
      category: "Database & Caching",
      description: "Relational data modeling, query latency tuning, indexing strategies, and caching layers.",
      items: [
        "MySQL",
        "MongoDB",
        "Redis Caching",
        "Composite DB Indexing",
        "Query Optimization (59s → 1.2s & 2.2s → 800ms)",
        "Relational Schema Architecture",
        "Projection & Payload Optimization"
      ]
    },
    {
      category: "DevOps & Store Operations",
      description: "Automated pipelines, crash monitoring, code quality enforcement, and mobile store releases.",
      items: [
        "Google Play Store (4 Apps)",
        "Apple App Store (3 Apps)",
        "Docker",
        "CI/CD Pipelines",
        "Pre-Commit Hooks & ESLint",
        "Sentry Crash Telemetry",
        "Revopush Developer Tools",
        "AI Agent Subagents Docs"
      ]
    }
  ],

  blogs: [
    {
      id: "customer-payment-summary-optimization",
      title: "Optimizing Customer Payment Summary Query from 59s to 1.2s: The Paginate-First Pattern",
      slug: "customer-payment-summary-query-optimization",
      summary: "How diagnosing 1,400 correlated subquery evaluations on a 700-row customer payment summary endpoint slashed API latency from ~58 seconds to 1.2 seconds using a two-step Paginate-First architecture.",
      date: "October 2026",
      readTime: "5 min read",
      tags: ["MySQL", "Node.js", "Performance", "Query Optimization", "Database Architecture"],
      keyTakeaways: [
        "Correlated subqueries inside SELECT execute before ORDER BY + LIMIT are applied, evaluating computations across every row in the table.",
        "With ~700 customers and 2 subqueries, MySQL was performing 1,400 heavy multi-table subquery scans per page request.",
        "The Paginate-First pattern decouples row selection from heavy aggregation by querying only the 10 customer IDs first using a fast index scan.",
        "Subquery executions plunged from 1,400 down to 20, cutting latency from ~58s to 1.2s with a 100% identical data contract and zero regressions."
      ],
      content: [
        "### The Problem: A 59-Second Bottleneck on 700 Records",
        "In production enterprise systems, severe latency bottlenecks frequently hide inside seemingly standard paginated endpoints. During a performance investigation of our customer management APIs, the `GET /api/v1/customers/payment-summary` endpoint exhibited an execution time of ~58 to 59 seconds.",
        "What made this especially striking was the dataset size: there were only ~700 customer records in the database. Yet requesting page 1 with `LIMIT 10 OFFSET 0` was stalling client applications, tying up Node.js event-loop workers, and holding open active MySQL connections.",
        "### Root Cause: The Correlated Subquery Trap",
        "Upon analyzing the SQL execution plan and profiling with MySQL `EXPLAIN`, the root cause became clear. The original query calculated lifetime customer order metrics using two correlated scalar subqueries (`SUM(o2.total_paid)` and `SUM(o2.total_amount)`) directly inside the `SELECT` clause, while sorting the final dataset by customer name (`ORDER BY u.name ASC`).",
        "Because sorting occurred after row projection, MySQL was forced to evaluate both multi-table subqueries for **all 700 customers across the entire database** before it could sort the rows and apply `LIMIT 10 OFFSET 0`.",
        "• 700 customers × 2 scalar subqueries = **1,400 multi-table subquery scans** per single API request.",
        "As historical orders and ledger entries had accumulated, each of those 1,400 subqueries scanned thousands of transactional rows, multiplying database I/O and creating an exponential compute bottleneck.",
        "### The Fix: The Two-Step \"Paginate-First\" Architecture",
        "Instead of calculating order totals for every customer in the database prior to pagination, we decoupled the query into two simple, highly efficient steps:",
        "• **Step 1 — Paginate Customer IDs First:** Fetch exclusively the 10 customer IDs for the current page using a fast index scan (`SELECT u.id FROM users u ORDER BY u.name ASC LIMIT ? OFFSET ?`). Because this query touches only indexed fields without any subqueries or table joins, it executes in single-digit milliseconds.",
        "• **Step 2 — Calculate Only for Those 10 Customers:** Execute the exact calculation query containing the financial totals and business rules, but scoped strictly to those 10 retrieved IDs (`WHERE u.id IN (?)`).",
        "### Results & Verification",
        "By restricting heavy aggregations exclusively to the visible viewport, the query performance changed dramatically:",
        "• **Subquery Executions:** Dropped from **1,400 down to exactly 20** (for 10 customers on the page).",
        "• **Latency:** Reduced from **~58 seconds down to 1.2 seconds** (>97% speedup).",
        "• **Data Contract:** 100% identical return payload, sort order, filters, and business logic, requiring zero changes in frontend clients.",
        "### Key Engineering Takeaway",
        "Never calculate expensive aggregations before you bound the result set. When paginating datasets with computed columns, decouple ID pagination from computation: bound your keys first, then compute only what the user actually sees."
      ]
    },
    {
      id: "query-optimization",
      title: "Optimizing Database Query Latency from 2.2s to 800ms in Production",
      slug: "optimizing-database-query-latency",
      summary: "How I systematically diagnosed slow MySQL endpoints, restructured queries with composite indexes, and eliminated heavy joins to achieve a 63% latency reduction.",
      date: "March 2026",
      readTime: "5 min read",
      tags: ["MySQL", "Node.js", "Performance", "Indexing"],
      keyTakeaways: [
        "Avoid SELECT * and project only the columns strictly needed by the client.",
        "Profile with EXPLAIN ANALYZE to identify filesorts and unindexed table scans.",
        "Build composite indexes aligned with WHERE and ORDER BY clauses.",
        "Add Redis cache layers for static lookup tables."
      ],
      content: [
        "In high-traffic enterprise applications with role-based access control, complex endpoints often suffer from gradual latency degradation as table sizes increase. In our system powering 5 distinct roles, response times for key operational dashboards hovered around 2.2 seconds under standard load.",
        "Step 1 was profiling using MySQL EXPLAIN and slow-query logs. We discovered unindexed foreign key lookups and a heavy reliance on wildcard projections that forced MySQL to allocate memory buffers for unneeded BLOB/TEXT columns.",
        "By replacing multi-table subqueries with targeted inner joins, establishing compound indexes on (tenant_id, status, created_at), and pruning response payloads to strictly what the mobile UI required, we brought the p95 latency down from 2,200ms to under 800ms—a 63% reduction without adding additional server hardware."
      ]
    },
    {
      id: "offline-attendance-geofencing",
      title: "Building Offline-First Attendance with Native Geofencing in React Native",
      slug: "offline-first-attendance-native-geofencing",
      summary: "Engineering background synchronization and custom Android/iOS native geofencing bridge modules to ensure zero data loss in remote areas.",
      date: "January 2026",
      readTime: "6 min read",
      tags: ["React Native", "Android Native", "iOS Native", "Geofencing"],
      keyTakeaways: [
        "Native geofencing requires background location permissions and low-power battery optimization.",
        "Store attendance punches locally in an immutable queue before attempting network dispatch.",
        "Use exponential backoff retry mechanisms with idempotent server endpoints.",
        "Handle edge-case boundaries with hysteresis radius buffers."
      ],
      content: [
        "Delivery drivers and field agents frequently operate in basements, warehouses, and rural zones with zero cellular signal. Allowing attendance logs or delivery confirmations to fail simply because of bad connectivity was not an option.",
        "We built custom Android (Java/Kotlin) and iOS native modules wrapping the platform location services. This enabled battery-efficient geofencing transitions (ENTER/EXIT) that trigger even when the app is in the background.",
        "Punch events are immediately written to local persistent storage with cryptographic timestamps. When connectivity is restored, an asynchronous sync worker flushes pending events with idempotency tokens, completely preventing duplicate entries and achieving 100% attendance reliability."
      ]
    },
    {
      id: "shipping-seven-apps",
      title: "Lessons from Moving 4 Apps to Play Store & 3 to Apple App Store",
      slug: "lessons-shipping-seven-apps-playstore-appstore",
      summary: "Practical insights on code signing, App Store Review guidelines, OTA updates with Revopush, and crash observability with Sentry.",
      date: "November 2025",
      readTime: "7 min read",
      tags: ["Mobile DevOps", "Play Store", "App Store", "Sentry"],
      keyTakeaways: [
        "Maintain automated keystores and provisioning profiles via CI/CD.",
        "Configure Sentry source maps during the build phase for readable stack traces.",
        "Use in-app auto-updates for critical security releases.",
        "Ensure clear permission descriptions in Info.plist to prevent Apple review rejections."
      ],
      content: [
        "Publishing one app is a milestone; continuously shipping and updating 7 apps across Google Play Store and Apple App Store requires a disciplined deployment pipeline.",
        "Apple's review guidelines are rigorous regarding location tracking and data privacy disclosures. Ensuring clear, contextual in-app dialogs before triggering native permission prompts was crucial for 100% first-pass review approval.",
        "For post-launch observability, we integrated Sentry and Revopush. Sentry provides instant stack traces tagged with device models and OS versions, while in-app update checks prompt users whenever critical database migrations require a client update."
      ]
    },
    {
      id: "ai-quiz-automation",
      title: "Automating Dynamic Quiz Ingestion with OpenAI Structured Outputs & Puppeteer",
      slug: "automating-dynamic-quiz-ingestion-openai-puppeteer",
      summary: "Designing automated question generation pipelines with validation layers and multi-marketplace product syndication.",
      date: "July 2023",
      readTime: "5 min read",
      tags: ["TypeScript", "Node.js", "OpenAI", "Puppeteer"],
      keyTakeaways: [
        "Strict JSON schema enforcement prevents LLM hallucination in question options.",
        "Headless browser automation with Puppeteer requires robust rate limiting and retry fallbacks.",
        "Cached intermediate ingestion states avoid re-running expensive third-party APIs.",
        "Decouple question ingestion from client-facing serving layers."
      ],
      content: [
        "Manual curation of thousands of competitive exam questions is slow and prone to errors. We designed an automated ingestion pipeline using Node.js and OpenAI API.",
        "By enforcing strict JSON schema parsing and multi-turn validation, the pipeline verifies that every question has exactly four distinct choices, one unambiguous correct answer, and an explanatory citation.",
        "In parallel, we utilized Puppeteer headless automation to syndicate product additions across e-commerce marketplaces with a single click, eliminating manual data entry across multiple backoffices."
      ]
    }
  ] as BlogPost[],

  education: {
    institution: "IIIT Guwahati (Indian Institute of Information Technology)",
    degree: "BTech",
    discipline: "Computer Science and Engineering (CSE)",
    period: "2018 – 2022",
    location: "Guwahati, Assam, India",
    focus: "Core CS foundation covering Data Structures & Algorithms, Database Management Systems, Computer Networks, Operating Systems, and Distributed Software Architecture."
  }
};
