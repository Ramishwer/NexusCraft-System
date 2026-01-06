import { Service, Project, ProjectCategory, ProcessStep } from './types';

export const SERVICES: Service[] = [
  {
    id: 'software-dev',
    title: 'Software Development',
    description: 'Bespoke enterprise software engineered for extreme reliability and scalability.',
    icon: '💻',
    longDescription: 'We build the backbone of modern business. Our approach combines rigorous engineering principles with agile execution, ensuring your software is not only powerful but also maintainable and ready for the future. From microservices to distributed ledgers, we design for zero-downtime and high-concurrency environments.',
    features: ['High-Availability Architecture', 'Event-Driven Systems', 'Legacy Modernization', 'API Ecosystem Design'],
    techStack: ['Node.js', 'Go', 'Kubernetes', 'PostgreSQL', 'Redis']
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'High-conversion, AI-enhanced web platforms with millisecond-perfect performance.',
    icon: '🌐',
    longDescription: 'Your digital storefront should be as intelligent as your product. We create immersive web experiences that prioritize user speed and search engine dominance. Using the latest in edge-computing and server-side rendering, we ensure your message reaches your audience instantly, regardless of their location.',
    features: ['Server-Side Rendering', 'Edge Computing', 'Headless CMS Integration', 'Real-time Analytics'],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'Sanity.io']
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'Immersive iOS and Android experiences designed for a mobile-centric world.',
    icon: '📱',
    longDescription: 'Connect with your users wherever they are. Our mobile division specializes in high-fidelity applications that leverage the full power of modern hardware. We focus on seamless synchronization, intuitive biometrics, and offline-first capabilities to ensure a premium user experience in the palm of their hand.',
    features: ['Multi-Platform Sync', 'Biometric Security', 'Offline-First Capability', 'Push Intelligence'],
    techStack: ['Flutter', 'Swift', 'Kotlin', 'Firebase', 'SQLite']
  },
  {
    id: 'blockchain-dev',
    title: 'Blockchain Solutions',
    description: 'Immutable digital infrastructure and smart contracts for the decentralized economy.',
    icon: '⛓️',
    longDescription: 'Navigate the transition to Web3 with confidence. We help enterprises integrate blockchain protocols to improve transparency, security, and transactional efficiency. Our audited smart contracts and private ledger implementations provide the immutable foundation required for the trust-based digital economy of tomorrow.',
    features: ['Smart Contract Audits', 'Asset Tokenization', 'DAO Infrastructure', 'Decentralized ID'],
    techStack: ['Solidity', 'Rust', 'Ethereum', 'Solana', 'Hardhat']
  },
  {
    id: 'uiux-design',
    title: 'UI/UX Design',
    description: 'Human-centric design systems that bridge the gap between complexity and clarity.',
    icon: '🎨',
    longDescription: 'Design is not just how it looks; it is how it works. We create comprehensive design systems that ensure your brand identity is consistently and intuitively represented across every digital touchpoint. Our process is driven by behavioral data and usability research, removing friction and delighting users at every interaction.',
    features: ['Strategic UX Research', 'Design Systems', 'Interactive Prototyping', 'Accessibility Compliance'],
    techStack: ['Figma', 'Adobe CC', 'Storybook', 'Framer Motion']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'AI-powered growth strategies that scale your digital footprint with precision.',
    icon: '📈',
    longDescription: 'Growth is a science. We use predictive analytics and machine learning to identify your most valuable customers and reach them with surgical precision. Our marketing engineering team optimizes your technical SEO and acquisition funnels in real-time, ensuring maximum return on your digital investment.',
    features: ['Predictive Analytics', 'Performance SEO', 'Campaign Automation', 'Sentiment Analysis'],
    techStack: ['Google Analytics', 'HubSpot', 'Segment', 'OpenAI API']
  }
];

export const AI_METHODOLOGY = [
  {
    title: "AI-Assisted Craftsmanship",
    desc: "We utilize proprietary machine learning models to analyze code patterns and predict potential vulnerabilities before they reach production.",
    icon: "🛡️"
  },
  {
    title: "Predictive Lifecycle",
    desc: "Our project intelligence layer analyzes team velocity and historical data to provide project estimates with 98.7% accuracy.",
    icon: "🧪"
  },
  {
    title: "Synthetic Data Testing",
    desc: "We simulate extreme edge cases using high-fidelity synthetic data, ensuring your software is stable under the most unpredictable conditions.",
    icon: "📊"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'Neural Discovery',
    description: 'A deep-reasoning phase where we map your existing data architecture and identify high-value automation opportunities.',
    icon: '🧬'
  },
  {
    title: 'Cognitive Design',
    description: 'Architecting a solution that prioritizes flow, security, and scalability, ensuring every component serves a technical purpose.',
    icon: '🏗️'
  },
  {
    title: 'Agile Engineering',
    description: 'Deploying senior-only engineering squads that use rapid, two-week sprints to build and iterate on your core digital features.',
    icon: '⚡'
  },
  {
    title: 'Continuous Growth',
    description: 'Ongoing technical optimization and proactive maintenance to ensure your systems evolve alongside the latest technological shifts.',
    icon: '📈'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'AetherMind Fintech',
    category: ProjectCategory.AI,
    image: 'https://images.unsplash.com/photo-1611974714024-4637d2305c91?auto=format&fit=crop&q=80&w=1200',
    description: 'An AI-powered risk mitigation engine for global hedge funds, processing trillions in sentiment data.'
  },
  {
    id: 'p2',
    title: 'NexusFlow Health',
    category: ProjectCategory.CLOUD,
    image: 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1200',
    description: 'Secure, interoperable EHR infrastructure designed to connect medical systems across 12 different countries.'
  },
  {
    id: 'p3',
    title: 'BioScribe Logistics',
    category: ProjectCategory.WEB,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    description: 'A comprehensive supply chain portal that utilizes autonomous agents to reroute shipments in real-time.'
  }
];