export const profile = {
  name: 'Hritik Bhandari',
  title: 'Senior Software Engineer',
  location: 'Hyderabad, India',
  email: 'bhandari.hritik@gmail.com',
  linkedin: 'https://linkedin.com/in/hritikbhandari',
  github: 'https://github.com/hritikbhandari',
  tagline: 'Building secure, enterprise-scale identity infrastructure.',
  summary:
    'Software Engineer with 4+ years of experience building secure, enterprise-scale software across the cybersecurity domain. Proven track record designing, developing, and deploying robust solutions, leading engineering teams, modernizing legacy infrastructure, and delivering CI/CD pipelines that reduce operational overhead. Experienced in applying agentic AI tooling across the software development lifecycle, with deep IAM expertise managing 260K+ identities and 3.56M+ entitlements.',
};

export const stats = [
  { value: '260K+', label: 'Identities managed' },
  { value: '3.56M+', label: 'Entitlements governed' },
  { value: '430+', label: 'Manual hours saved / year' },
  { value: '4+', label: 'Years in cybersecurity' },
];

export const terminalLines = [
  { command: 'whoami', output: 'hritik_bhandari — senior_software_engineer @ wells_fargo' },
  { command: 'cat focus.txt', output: 'Identity & Access Management · Cybersecurity · Enterprise Java' },
  { command: 'scale --identities', output: '260,000+ identities · 3,560,000+ entitlements governed' },
  { command: 'ls ./impact', output: 'ci-cd-modernization/  oim-14c-upgrade/  emergency-termination/' },
];

export const skillGroups = [
  {
    label: 'Languages',
    slug: 'languages',
    items: ['Java', 'SQL', 'Python', 'Shell', 'JavaScript'],
  },
  {
    label: 'Frameworks & Architecture',
    slug: 'frameworks',
    items: [
      'Spring Boot',
      'REST',
      'Microservices',
      'System Design',
      'Distributed Systems',
      'OOP',
      'SOA',
    ],
  },
  {
    label: 'Identity & Access Management',
    slug: 'iam',
    items: [
      'IGA',
      'Oracle Identity Manager (OIM)',
      'SailPoint IIQ',
      'Active Directory',
      'Certification',
      'RBAC',
      'Privileged Access Management',
      'SSO',
      'SAML',
      'OAuth',
      'OIDC',
      'MFA',
    ],
  },
  {
    label: 'Cloud & DevOps',
    slug: 'cloud',
    items: ['Azure', 'Linux', 'CI/CD', 'GitHub Actions', 'Harness'],
  },
  {
    label: 'Testing & Tools',
    slug: 'tools',
    items: [
      'JUnit',
      'Git',
      'JIRA',
      'ServiceNow',
      'GitHub Copilot',
      'Devin',
      'Agentic AI Workflows',
      'MCP Integrations',
      'LLM Prompting',
      'Machine Learning',
    ],
  },
  {
    label: 'Practices',
    slug: 'practices',
    items: ['Agile (Jira)', 'SDLC', 'Vulnerability Management', 'Test Automation'],
  },
];

export type Role = {
  title: string;
  period: string;
  bullets: string[];
};

export type Company = {
  company: string;
  period: string;
  note?: string;
  roles: Role[];
};

export const experience: Company[] = [
  {
    company: 'Wells Fargo',
    period: '01/2022 – Present',
    note: 'Progressed from Software Engineering Intern to Senior Software Engineer through 3 promotions in 4 years.',
    roles: [
      {
        title: 'Senior Software Engineer | Senior AVP',
        period: '01/2026 – Present',
        bullets: [
          'Leading the enterprise Oracle Identity Manager 12c to 14c upgrade with a cross-functional team, spanning infrastructure, the COTS product, custom code, connectors, and end-to-end testing as part of the Technology Modernization program.',
          'Drove the Java 8 to Java 21 upgrade across 76 application repositories, connectors, and workflow components.',
          'Led a team of 5 engineers to design and implement enterprise CI/CD pipelines using GitHub Actions and Harness, transitioning from scheduled manual releases to secure on-demand deployments, eliminating 430+ hours of manual deployment effort annually while accelerating developer productivity.',
          'Remediated 100+ high-priority AI-scanned security vulnerabilities across multiple IAM repositories and piloted Playbooks for Devin-assisted remediation to accelerate code fixes, PR creation, and deployment.',
          'Developed a resilient Emergency Termination solution that removes access for terminated users within minutes by disabling accounts and revoking access across multiple platforms, integrated through Kafka and REST APIs with audit tracking, asynchronous status polling, and automated escalation for end-to-end control.',
        ],
      },
      {
        title: 'Software Engineer | AVP',
        period: '07/2023 – 01/2026',
        bullets: [
          'Designed multi-level approval workflows with parallel and serial levels for privileged access using SOA and Java, including the CIO Approval workflow for privileged entitlements, reducing access creep and strengthening governance for high-risk access.',
          "Owned core IAM modules for Wells Fargo's primary IAM Platform tool supporting 3.56M+ entitlements and 260K+ identities, enforcing enterprise-wide access governance.",
          'Managed software pipelines processing 196K+ reconciliation events and 25K+ access provisioning transactions per day, maintaining a 99% success rate across 271 daily control jobs.',
          'Improved the connector ecosystem (LDAP / Active Directory, Mainframe, SQL DB, Teradata, Web Services) and enforced request validations, ensuring accurate identity state and secure provisioning flows.',
          'Developed a Bulk Access Request tool and REST APIs with Spring Boot to streamline access provisioning, reducing manual request processing effort by 40%.',
          'Mentored engineers and new hires across onsite and offshore teams in an Agile (Jira) delivery model, accelerating onboarding and team productivity.',
          'Serving as Subject Matter Expert (SME) for Certification and Approval Workflow architecture, core to enterprise governance and compliance.',
        ],
      },
      {
        title: 'Associate Software Engineer',
        period: '07/2022 – 06/2023',
        bullets: [
          'Developed Segregation of Duties (SoD) processors and request validations for IAM governance controls.',
          'Enhanced certification workflows and 50+ audit-driven notification systems for compliance and efficient user experience.',
          'Collaborated with cross-functional teams across product, platform operations, business, and compliance to align IAM solutions with organizational protocols and objectives.',
          'Delivered scalable Java and SQL based IAM features with a focus on Oracle Identity Manager.',
        ],
      },
      {
        title: 'Software Engineering Intern',
        period: '01/2022 – 06/2022',
        bullets: [
          "Built foundational expertise in Identity and Access Management and Oracle Identity Manager, contributing to key projects within Wells Fargo's identity governance program.",
          'Developed Java and SQL based schedulers to automate Bulk Access Requests, improving efficiency and reducing manual intervention for a more robust and scalable IAM infrastructure.',
        ],
      },
    ],
  },
  {
    company: 'Walmart Global Tech',
    period: '06/2021 – 08/2021',
    roles: [
      {
        title: 'Software Engineering Intern',
        period: '06/2021 – 08/2021',
        bullets: [
          'Automated manual categorization and reporting of support tickets using Machine Learning and API integrations, saving 10+ hours of manual effort per week.',
          'Developed a Python-based automation application for scalable ticket processing, including clustering analysis of historical ticket data.',
        ],
      },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  context: string;
  description: string;
  metric: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: 'oim-upgrade',
    title: 'OIM 12c → 14c Enterprise Upgrade',
    context: 'Wells Fargo · Technology Modernization',
    description:
      'Leading a cross-functional upgrade of the enterprise Oracle Identity Manager platform, spanning infrastructure, the COTS product, custom code, connectors, and end-to-end testing.',
    metric: 'Enterprise-wide IAM platform',
    tags: ['Oracle Identity Manager', 'IGA', 'Migration', 'Leadership'],
  },
  {
    id: 'java-21',
    title: 'Java 8 → 21 Migration',
    context: 'Wells Fargo',
    description:
      'Drove a runtime and language-level upgrade across the full IAM codebase, covering application repositories, connectors, and workflow components without disrupting production governance flows.',
    metric: '76 repositories migrated',
    tags: ['Java 21', 'Legacy Modernization', 'Connectors'],
  },
  {
    id: 'cicd',
    title: 'Enterprise CI/CD Modernization',
    context: 'Wells Fargo · Team of 5',
    description:
      'Designed and implemented enterprise CI/CD pipelines with GitHub Actions and Harness, replacing scheduled manual releases with secure on-demand deployments.',
    metric: '430+ manual hours eliminated / year',
    tags: ['GitHub Actions', 'Harness', 'CI/CD', 'Team Lead'],
  },
  {
    id: 'emergency-termination',
    title: 'Emergency Termination System',
    context: 'Wells Fargo',
    description:
      'Built a resilient service that revokes access for terminated users within minutes — disabling accounts across multiple platforms via Kafka and REST APIs, with audit tracking, asynchronous status polling, and automated escalation.',
    metric: 'Access revoked in minutes',
    tags: ['Kafka', 'REST APIs', 'Spring Boot', 'Audit'],
  },
  {
    id: 'ai-remediation',
    title: 'AI-Assisted Security Remediation',
    context: 'Wells Fargo',
    description:
      'Remediated high-priority AI-scanned vulnerabilities across IAM repositories and piloted Devin-assisted Playbooks to accelerate code fixes, PR creation, and deployment.',
    metric: '100+ vulnerabilities remediated',
    tags: ['Devin', 'Agentic AI', 'Vulnerability Management'],
  },
  {
    id: 'approval-workflows',
    title: 'Privileged Access Approval Workflows',
    context: 'Wells Fargo',
    description:
      'Designed multi-level approval workflows with parallel and serial levels for privileged access using SOA and Java, including the CIO Approval workflow for privileged entitlements.',
    metric: 'Reduced access creep on high-risk entitlements',
    tags: ['SOA', 'Java', 'PAM', 'Governance'],
  },
  {
    id: 'bulk-access',
    title: 'Bulk Access Request Platform',
    context: 'Wells Fargo',
    description:
      'Developed a Bulk Access Request tool backed by Spring Boot REST APIs to streamline access provisioning at enterprise scale.',
    metric: '40% less manual request effort',
    tags: ['Spring Boot', 'REST', 'Automation'],
  },
  {
    id: 'ticket-ml',
    title: 'ML Support Ticket Categorization',
    context: 'Walmart Global Tech',
    description:
      'Automated categorization and reporting of support tickets using machine learning and API integrations, with clustering analysis over historical ticket data.',
    metric: '10+ hours saved per week',
    tags: ['Python', 'Machine Learning', 'Clustering'],
  },
];

export const education = {
  institution: 'SRM Institute of Science & Technology',
  degree: 'Bachelor of Technology, Computer Science & Engineering',
  period: 'Graduated 06/2022',
  highlights: [
    'Achieved 2nd in department with a CGPA of 9.86',
    'President & Founder of the Data Science Community at SRM, leading Machine Learning projects for the School of Computing',
  ],
};

export const certifications = [
  { name: 'Systems Security Certified Practitioner (SSCP)', issuer: 'ISC2' },
  { name: 'Certified in Cybersecurity (CC)', issuer: 'ISC2' },
  { name: 'Azure Security Engineer Associate', issuer: 'Microsoft Certified' },
  { name: 'Database Management Systems (DBMS)', issuer: 'NPTEL' },
];

export const navLinks = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#experience', label: 'experience' },
  { href: '#work', label: 'work' },
  { href: '#education', label: 'education' },
  { href: '#contact', label: 'contact' },
];
