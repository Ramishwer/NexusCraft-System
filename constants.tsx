
import { Service, Project, ProjectCategory, ProcessStep } from './types';

export const SERVICES: Service[] = [
  {
    id: 'software-dev',
    title: 'Software Development',
    description: 'Bespoke enterprise software engineered for extreme reliability and scalability.',
    icon: '💻',
    longDescription: 'We specialize in building distributed systems that power global operations. Our team utilizes a "Clean Architecture" approach, ensuring that your core business logic is isolated from external frameworks, making your codebase resilient to technological shifts. We prioritize asynchronous processing and microservices to ensure that your platform can handle millions of concurrent users without degradation in performance.',
    features: ['High-Availability Architecture', 'Event-Driven Systems', 'Legacy Modernization', 'API Ecosystem Design'],
    techStack: ['Node.js', 'Go', 'Kubernetes', 'PostgreSQL', 'Redis']
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'High-conversion, AI-enhanced web platforms with millisecond-perfect performance.',
    icon: '🌐',
    longDescription: 'In a digital-first economy, your website is your most critical infrastructure. We build advanced web applications using Next.js and React, focusing on Core Web Vitals to ensure top-tier SEO rankings and user retention. By integrating AI at the edge, we deliver hyper-personalized experiences that dynamically adjust to user intent, driving higher engagement and conversion rates across all device types.',
    features: ['Server-Side Rendering', 'Edge Computing', 'Headless CMS Integration', 'Real-time Analytics'],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'Sanity.io']
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'Immersive iOS and Android experiences designed for a mobile-centric world.',
    icon: '📱',
    longDescription: 'Our mobile engineering team delivers native-performance applications that feel seamless on every screen. We focus on a "Universal Codebase" strategy using Flutter, which reduces development time by 40% while maintaining the fidelity of native UI components. From biometrics to background synchronization, we implement complex mobile features that ensure your brand is always within your customers\' reach.',
    features: ['Multi-Platform Sync', 'Biometric Security', 'Offline-First Capability', 'Push Intelligence'],
    techStack: ['Flutter', 'Swift', 'Kotlin', 'Firebase', 'SQLite']
  },
  {
    id: 'blockchain-dev',
    title: 'Blockchain Development',
    description: 'Immutable digital infrastructure and smart contracts for the decentralized economy.',
    icon: '⛓️',
    longDescription: 'We help enterprises navigate the transition to Web3 by building secure, audit-ready blockchain protocols. Whether it is a private ledger for supply chain transparency or a decentralized finance (DeFi) protocol, we ensure that every smart contract is rigorously tested against common attack vectors. We build foundations for digital trust that improve transparency and operational efficiency across organizational boundaries.',
    features: ['Smart Contract Audits', 'Asset Tokenization', 'DAO Infrastructure', 'Decentralized ID'],
    techStack: ['Solidity', 'Rust', 'Ethereum', 'Solana', 'Hardhat']
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
