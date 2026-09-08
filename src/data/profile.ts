// Source of truth: Tang_The_Anh_Senior_Fullstack_NZ_Resume.pdf.
export const profile = {
  name: 'Tang The Anh', role: 'Senior Full-Stack Software Engineer',
  location: 'Ho Chi Minh City, Vietnam', email: 'theanh2906@outlook.com', phone: '+84 915 608 907',
  linkedin: 'https://www.linkedin.com/in/theanh2906',
  resume: '/Tang_The_Anh_Senior_Fullstack_NZ_Resume.pdf',
  summary: 'I am a full-stack software engineer with 5+ years of experience designing, modernizing and delivering enterprise software. My work spans Java and Spring Boot backend systems, Angular and TypeScript frontend architecture, asynchronous messaging, CI/CD and production troubleshooting. I have led a four-engineer team while staying hands-on, and currently own key frontend and device-onboarding capabilities within OPSWAT cybersecurity products.',
};

export const experiences = [
  {
    company: 'OPSWAT Vietnam', shortName: 'OPSWAT', period: 'May 2023 - Present', role: 'Full-Stack Engineer II',
    highlights: ['Modernized Angular 2 to Angular 17.', 'Implemented micro-frontends across 8 applications.', 'Owned device onboarding with Electron, Angular and gRPC.'],
    award: 'Best Employee - Q1 2025',
    details: [
      {
        title: 'MetaDefender Kiosk',
        points: [
          'Modernized the legacy web console to address outdated dependencies, maintainability limitations and CVE exposure. Established shared-component reuse and a foundation for future module and plugin extensibility.',
          'Architected the complete client-side Out-of-Box Experience for hardened images across K1, K2 and K3 devices, owning Electron architecture, Angular implementation from Figma and gRPC integration.',
          'Unified a previously multi-step, customer-specific onboarding process, reducing device setup from up to approximately 1 hour to a maximum of around 30 minutes before normal scanning operations.',
          'Designed for future configuration-driven auto deployment and one-click end-to-end onboarding.',
          'Reviewed code, mentored 3 team members, assigned technical tasks and supported architecture decisions.',
          'Built internal productivity tools and an AI-assisted Jenkins pipeline for Jira development tickets and implementation workflows.',
          'Recognized as Best Employee in Q1 2025 for contributions to a Windows-based device onboarding application.',
        ],
        stack: 'Angular / TypeScript / Electron / gRPC / MongoDB / Azure Entra / TeamCity / Jenkins',
      },
      {
        title: 'MetaAccess - MetaDefender Endpoint',
        points: ['Contributed to Spring Boot backend development for cloud and on-premises deployments.', 'Implemented asynchronous email notifications using RabbitMQ and investigated defects across backend services and web-console components.'],
        stack: 'Java / Spring Boot / MongoDB / RabbitMQ / Amazon SQS / Redis / Elasticsearch',
      },
    ],
  },
  {
    company: 'Bosch', shortName: 'Bosch', period: 'Nov 2021 - May 2023', role: 'Project Lead / Full-Stack Engineer',
    highlights: ['Led 4 engineers, remaining approximately 50% hands-on.', 'Modernized a patent management platform with Spring Boot and Angular.'],
    award: '',
    details: [{
      title: 'Patent Study - Bosch Global Software Technologies Vietnam',
      points: [
        'Held primary technical ownership of technology selection, application architecture, framework choices and engineering conventions.',
        'Redesigned a legacy Spring MVC application into a three-tier Spring Boot and Angular architecture and upgraded Java 7 to Java 11.',
        'Decoupled server-rendered frontend resources into a standalone Angular application backed by REST-oriented services.',
        'Introduced JWT authentication, refactored Oracle/JPA persistence and removed redundant legacy implementation.',
        'Improved data-heavy API responsiveness, page loading, animations and legacy UI/UX; delivered Power BI reporting integration.',
        'Assigned tasks, reviewed code, mentored engineers and resolved blockers. Worked directly in English with the Bosch India stakeholder, including a 3-month onsite collaboration period in Vietnam.',
        'Received a Bosch Spot Award from the India customer for application performance improvements.',
      ],
      stack: 'Java 11 / Spring Boot / Angular / Oracle / JPA / JWT / Jenkins',
    }],
  },
  {
    company: 'FPT Software', shortName: 'FPT', period: 'May 2020 - Oct 2021', role: 'Backend Engineer',
    highlights: ['Built Spring Boot APIs with OAuth 2.0 and Keycloak.'], award: '',
    details: [
      {
        title: 'UnifiedPost',
        points: ['Developed backend services and REST APIs for an enterprise console to monitor and administer platform APIs, including users, quotas and administrative capabilities.', 'Implemented authentication and authorization with OAuth 2.0 and Keycloak, and documented APIs with Swagger/OpenAPI.'],
        stack: 'Java / Spring Boot / PostgreSQL / Keycloak / Redis / Maven',
      },
      {
        title: 'R2Integration',
        points: ['Developed custom AEM components, OSGi services, Sling Models, REST APIs and Java Servlets.', 'Automated content approval, asset processing and publishing using AEM workflows and event listeners.'],
        stack: 'Java / Adobe Experience Manager / Servlets / Docker',
      },
    ],
  },
];

export const projects = [
  {
    name: 'System Monitor',
    description: 'A distributed monitoring platform for system health and Kafka service availability, with live updates through Server-Sent Events.',
    stack: 'Spring Boot / Kafka Streams / NestJS / SSE',
    details: 'Designed and deployed on self-hosted infrastructure with real-time event processing through Kafka Streams. Containerized services using Docker Compose, implemented Jenkins CI/CD pipelines and integrated Azure Key Vault, Firebase Authentication and Azure Functions.',
    image: '/images/system-monitor.webp', imageAlt: 'Conceptual illustration of connected server nodes and system telemetry', illustration: true, url: '',
  },
  {
    name: 'AI Trip Planner', description: 'An AI-powered travel planning application built with React and the Gemini API.',
    stack: 'React / Gemini API / Docker / Nginx',
    details: 'Built and deployed with Docker and Nginx, with deployments automated through Jenkins pipelines and Git webhooks. Published through Cloudflare Tunnel.',
    image: '/images/ai-trip-planner.webp', imageAlt: 'AI Trip Planner live application showing its trip search and interactive map', illustration: false,
    url: 'https://aiplanner.bennasolutions.com',
  },
];

export const skills = [
  { category: 'Backend', items: 'Java, Spring Boot, REST APIs, gRPC, Go, NestJS' },
  { category: 'Frontend', items: 'TypeScript, JavaScript, Angular, React, Electron, HTML, CSS' },
  { category: 'Messaging & systems', items: 'RabbitMQ, Kafka Streams, Amazon SQS, Redis, Server-Sent Events' },
  { category: 'Databases & search', items: 'PostgreSQL, MongoDB, Oracle, MySQL, Elasticsearch' },
  { category: 'Security & identity', items: 'JWT, OAuth 2.0, Keycloak, Azure Entra, Firebase Authentication' },
  { category: 'DevOps & cloud', items: 'Docker, Jenkins, TeamCity, CI/CD, Nginx, Azure Key Vault, Azure Functions, Vercel' },
];
