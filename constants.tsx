
import { Service, Project, ProjectCategory, ProcessStep } from './types';

export const SERVICES: Service[] = [
  {
    id: 'software-dev',
    title: 'Software Development',
    description: 'Custom, high-performance software engineered for enterprise scale and intelligence.',
    icon: '💻',
    longDescription: 'Our software engineering team specializes in building resilient, distributed systems. We leverage modern microservices architectures and cloud-native patterns to ensure your software is future-proof and highly available. Every line of code is optimized for performance and maintainability, ensuring your core business logic scales effortlessly with your growth.',
    features: ['Microservices Architecture', 'Distributed Systems', 'API-First Design', 'Performance Optimization'],
    techStack: ['Node.js', 'Go', 'Python', 'Rust', 'PostgreSQL']
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Immersive web experiences that merge aesthetics with advanced functionality.',
    icon: '🌐',
    longDescription: 'We create dynamic web ecosystems that prioritize user engagement and speed. By utilizing the latest frameworks like Next.js and React, we deliver blazingly fast load times and seamless transitions. Our web solutions are integrated with real-time analytics and SEO best practices, ensuring your digital presence is both beautiful and discoverable.',
    features: ['Full-Stack SSR', 'Responsive Design', 'SEO Optimization', 'Interactive UI Components'],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Vercel']
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps that define mobile-first excellence.',
    icon: '📱',
    longDescription: 'Our mobile division crafts high-performance applications for iOS and Android. We focus on deeply integrated experiences that leverage device hardware, offline-first capabilities, and intuitive gestures. Whether it is a customer-facing app or an internal enterprise tool, we ensure a polished, high-utility experience across all mobile platforms.',
    features: ['Cross-Platform Efficiency', 'Native Performance', 'Offline Capabilities', 'Push Notification Engines'],
    techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase']
  },
  {
    id: 'blockchain-dev',
    title: 'Blockchain Development',
    description: 'Decentralized infrastructure and smart contracts built for the trust economy.',
    icon: '⛓️',
    longDescription: 'We design and deploy secure, scalable blockchain protocols tailored to enterprise needs. Our expertise spans smart contract auditing, decentralized finance (DeFi) architectures, and private ledger implementations. We help businesses harness the power of decentralization to improve transparency, security, and transaction efficiency in their supply chains or financial operations.',
    features: ['Smart Contract Auditing', 'Tokenization Platforms', 'Web3 Integration', 'Decentralized Identity'],
    techStack: ['Solidity', 'Rust', 'Ethereum', 'Solana', 'Hardhat']
  }
];

export const AI_METHODOLOGY = [
  {
    title: "AI-Assisted Craftsmanship",
    desc: "We utilize proprietary machine learning models to analyze code quality and predict potential vulnerabilities before deployment.",
    icon: "🛡️"
  },
  {
    title: "Predictive Lifecycle",
    desc: "Our project management systems use AI to estimate development timelines with 98% accuracy, ensuring on-time delivery.",
    icon: "🧪"
  },
  {
    title: "Synthetic Data Testing",
    desc: "We simulate millions of user interactions using high-fidelity synthetic data to ensure stability under any load condition.",
    icon: "📊"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'Neural Discovery',
    description: 'A deep-dive analysis of your current technical landscape to identify high-impact automation and AI opportunities.',
    icon: '🧬'
  },
  {
    title: 'Cognitive Design',
    description: 'Architecting a solution that integrates intelligence seamlessly into your workflows while maintaining security.',
    icon: '🏗️'
  },
  {
    title: 'Rapid Deployment',
    description: 'Utilizing automated CI/CD pipelines to launch your solution into a scalable, cloud-native production environment.',
    icon: '⚡'
  },
  {
    title: 'Feedback Loop',
    description: 'Continuous monitoring and iterative improvements based on real-world usage patterns and data performance.',
    icon: '📈'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'AetherMind Fintech',
    category: ProjectCategory.AI,
    image: 'https://images.unsplash.com/photo-1611974714024-4637d2305c91?auto=format&fit=crop&q=80&w=1200',
    description: 'A revolutionary wealth management engine that utilizes real-time market sentiment analysis to protect assets.'
  },
  {
    id: 'p2',
    title: 'NexusFlow Health',
    category: ProjectCategory.CLOUD,
    image: 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1200',
    description: 'Scalable, HIPAA-compliant infrastructure designed for global healthcare data exchange and genetic sequencing.'
  },
  {
    id: 'p3',
    title: 'BioScribe Logistics',
    category: ProjectCategory.WEB,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    description: 'Global logistics dashboard with autonomous route optimization and predictive maintenance alerts.'
  }
];
