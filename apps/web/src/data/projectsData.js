
export const projectsData = [
  {
    id: 'enterprise-ecommerce',
    title: 'Enterprise E-commerce Platform',
    image: 'https://images.unsplash.com/photo-1641833278434-50f92b93d65a?w=1200&q=80',
    problem: 'The client faced a high cart abandonment rate of 73% due to a sluggish, outdated checkout flow and poor mobile responsiveness on their legacy platform.',
    solution: 'Built a headless storefront using Next.js and a Node.js backend, decoupling the frontend from the monolithic backend to drastically improve load times and optimize the checkout experience.',
    features: [
      'Headless commerce architecture for lightning-fast page loads',
      'One-click checkout integration with Stripe',
      'Real-time inventory synchronization',
      'AI-powered product recommendations'
    ],
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS', 'Redis'],
    results: [
      '40% faster checkout process',
      '3x increase in mobile conversion rate',
      'Sub-second page load times across the globe'
    ],
    caseStudy: 'The legacy monolithic architecture was holding the business back. Every update required extensive testing, and the mobile experience was severely lacking, leading to lost revenue. We proposed a complete replatforming to a headless architecture.\n\nBy decoupling the frontend using Next.js, we were able to serve static pages for the catalog while keeping pricing and inventory dynamic via client-side fetching and Redis caching. The checkout flow was completely redesigned to minimize friction, reducing the steps from five to just two.\n\nThe result was an immediate and sustained increase in conversion rates, particularly on mobile devices, proving that performance is a direct driver of revenue in modern e-commerce.',
    industry: 'Retail & E-commerce',
    timeline: '4 Months',
    budget: '$45,000+'
  },
  {
    id: 'saas-auth-core',
    title: 'SaaS Authentication Core',
    image: 'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?w=1200&q=80',
    problem: 'A rapidly growing SaaS company needed a highly secure, scalable user management system with social logins, as their in-house solution was failing under load and lacked enterprise security features.',
    solution: 'Implemented a comprehensive authentication system utilizing Better Auth with JWT, Role-Based Access Control (RBAC), and strict security policies to handle millions of requests.',
    features: [
      'Multi-factor authentication (MFA) support',
      'Granular Role-Based Access Control (RBAC)',
      'Social login integration (Google, GitHub, Microsoft)',
      'Automated anomaly detection and rate limiting'
    ],
    technologies: ['React', 'Better Auth', 'PostgreSQL', 'Express', 'Docker'],
    results: [
      '99.99% authentication uptime',
      'Zero security incidents post-launch',
      'Seamless onboarding for 50,000+ new users'
    ],
    caseStudy: 'Security and scalability were the primary concerns for this B2B SaaS provider. Their existing authentication flow was a bottleneck, causing timeouts during peak usage and lacking the compliance features required by their enterprise clients.\n\nWe architected a standalone authentication microservice. By leveraging Better Auth and PostgreSQL, we created a robust system that handles session management, token rotation, and complex permission hierarchies without degrading performance. We also implemented strict rate limiting and IP anomaly detection to thwart brute-force attacks.\n\nThe new system not only resolved the performance issues but also allowed the sales team to close larger enterprise deals by meeting stringent security compliance requirements.',
    industry: 'B2B SaaS',
    timeline: '2.5 Months',
    budget: '$30,000+'
  },
  {
    id: 'agency-portfolio',
    title: 'Agency Portfolio System',
    image: 'https://images.unsplash.com/photo-1688760871131-29afc15029ec?w=1200&q=80',
    problem: 'A top-tier creative agency required a blazing fast portfolio with dynamic content capabilities that didn\'t compromise on their heavy use of high-resolution imagery and video.',
    solution: 'Developed a statically generated Next.js site with advanced image optimization, lazy loading, and a custom headless CMS integration for effortless content updates.',
    features: [
      'Dynamic media optimization and WebP conversion',
      'Custom WebGL transitions and smooth scrolling',
      'Headless CMS integration for non-technical editors',
      'Automated SEO metadata generation'
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Sanity CMS', 'Vercel'],
    results: [
      '50% faster load time despite heavy media',
      'Perfect 100/100 Core Web Vitals scores',
      'Significant increase in organic search traffic'
    ],
    caseStudy: 'Creative agencies often face a dilemma: showcase their best, high-resolution work, or maintain a fast, SEO-friendly website. This client wanted both. Their previous WordPress site was bloated and took over 6 seconds to load on mobile.\n\nWe migrated them to the Jamstack. Using Next.js, we pre-rendered the site while utilizing Next/Image for on-the-fly media optimization. We integrated Sanity CMS, giving their editorial team a real-time preview environment that felt like magic. Complex animations were handled via Framer Motion, ensuring they ran smoothly at 60fps without blocking the main thread.\n\nThe final product is a visually stunning, immersive experience that loads almost instantly, proving that you don\'t have to sacrifice performance for aesthetics.',
    industry: 'Creative & Design',
    timeline: '6 Weeks',
    budget: '$15,000+'
  },
  {
    id: 'real-estate-portal',
    title: 'Modern Real Estate Portal',
    image: 'https://images.unsplash.com/photo-1690565914436-9a09ea223c38?w=1200&q=80',
    problem: 'A regional real estate firm was losing market share to national aggregators because their property search was slow, inaccurate, and lacked map-based discovery.',
    solution: 'Engineered a high-performance property search portal with geospatial querying, real-time MLS data synchronization, and an intuitive map-first interface.',
    features: [
      'Interactive map-based property search',
      'Real-time MLS data synchronization',
      'Virtual tour integration',
      'Automated lead routing to agents'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'PostGIS', 'Mapbox GL'],
    results: [
      '300% increase in user time-on-site',
      '45% more leads generated per listing',
      'Sub-100ms search query response times'
    ],
    caseStudy: 'The client needed to modernize their digital presence to compete with industry giants. Their existing search relied on basic SQL LIKE queries, which were slow and couldn\'t handle location-based filtering effectively.\n\nWe rebuilt the backend using PostgreSQL with the PostGIS extension, enabling lightning-fast geospatial queries. The frontend was completely reimagined as a single-page application using React and Mapbox GL, allowing users to pan and zoom across neighborhoods while properties populated instantly.\n\nBy providing a frictionless, app-like experience on the web, the client saw a massive increase in user engagement and lead generation, successfully reclaiming their local market dominance.',
    industry: 'Real Estate',
    timeline: '3 Months',
    budget: '$35,000+'
  },
  {
    id: 'mobile-api-gateway',
    title: 'Mobile API Gateway',
    image: 'https://images.unsplash.com/photo-1578401057158-0e58789f5947?w=1200&q=80',
    problem: 'A logistics company\'s mobile app was suffering from severe latency and frequent crashes due to a poorly structured legacy API that required the app to make dozens of requests per screen.',
    solution: 'Architected a GraphQL-based API gateway that aggregated data from multiple legacy microservices into a single, efficient endpoint optimized for mobile consumption.',
    features: [
      'GraphQL aggregation layer',
      'Intelligent response caching',
      'Real-time WebSocket subscriptions for tracking',
      'Comprehensive API analytics and monitoring'
    ],
    technologies: ['Node.js', 'GraphQL', 'Apollo Server', 'Redis', 'AWS'],
    results: [
      '80% reduction in mobile data payload',
      'App crash rate reduced to near zero',
      'API response times cut by 65%'
    ],
    caseStudy: 'Mobile applications operating on cellular networks are highly sensitive to latency and payload size. The client\'s app was making up to 15 REST API calls just to render the home dashboard, resulting in a terrible user experience for drivers in areas with poor connectivity.\n\nInstead of rewriting all their legacy backend services, we introduced a GraphQL API Gateway using Apollo Server. This layer acted as an orchestrator, fetching data from various internal services, stripping out unnecessary fields, and returning exactly what the mobile app needed in a single request. We also implemented Redis caching for frequently accessed, slow-changing data.\n\nThe transformation was night and day. The mobile app became snappy and reliable, drastically improving driver efficiency and reducing support tickets related to app performance.',
    industry: 'Logistics & Transportation',
    timeline: '2 Months',
    budget: '$25,000+'
  },
  {
    id: 'enterprise-cms',
    title: 'Enterprise CMS Migration',
    image: 'https://images.unsplash.com/photo-1560472354-0088b5dc9d8d?w=1200&q=80',
    problem: 'A global publishing company was constrained by a rigid, proprietary CMS that made publishing new content slow and required developer intervention for simple layout changes.',
    solution: 'Migrated over 10,000 articles to a modern, block-based headless CMS, paired with a highly optimized Next.js frontend for global content delivery.',
    features: [
      'Custom block-based visual editor',
      'Automated content migration scripts',
      'Multi-language localization support',
      'Global CDN deployment architecture'
    ],
    technologies: ['Next.js', 'TypeScript', 'Storyblok', 'AWS Lambda', 'Vercel'],
    results: [
      'Publishing time reduced from days to minutes',
      'Zero downtime during the 10k+ article migration',
      'Global page load times under 1.5 seconds'
    ],
    caseStudy: 'Content is the lifeblood of a publishing company, but this client\'s editorial team was fighting their tools rather than focusing on writing. Their legacy CMS was slow, prone to crashing, and completely inflexible regarding page layouts.\n\nWe executed a strategic migration to Storyblok, a headless CMS with a powerful visual editor. We wrote custom Node.js scripts to safely extract, transform, and load over 10,000 existing articles into the new system without losing SEO value. The frontend was rebuilt in Next.js, utilizing Incremental Static Regeneration (ISR) to ensure articles were served instantly from the edge while still allowing for real-time updates.\n\nThe editorial team was thrilled with their new autonomy, and the business saw an immediate uptick in organic traffic due to the vastly improved site performance and Core Web Vitals.',
    industry: 'Media & Publishing',
    timeline: '5 Months',
    budget: '$60,000+'
  }
];
