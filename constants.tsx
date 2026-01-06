
import { Service, Project, ProjectCategory, ProcessStep } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Agentic AI Systems',
    description: 'Developing autonomous AI agents that handle complex decision-making and multi-step business logic.',
    icon: '🧠',
    longDescription: 'In the era of Generative AI, we move beyond simple chatbots. Our engineering team builds multi-agent systems that reason, plan, and execute using external tools. These agents can manage everything from automated customer support to complex financial modeling with human-level nuance.',
    features: ['Custom LLM Orchestration', 'Memory-Augmented RAG', 'Tool-Use & Function Calling', 'Autonomous Workflow Loops'],
    techStack: ['Gemini 3.0 Pro', 'LangGraph', 'Vector DBs', 'Python', 'FastAPI']
  },
  {
    id: '2',
    title: 'Intelligent Cloud Ops',
    description: 'Scalable, self-healing infrastructure optimized for the demands of modern AI workloads.',
    icon: '⚡',
    longDescription: 'Standard DevOps is no longer enough. We implement AI-driven infrastructure that predicts traffic spikes, automatically scales GPU clusters, and self-heals from network anomalies before they impact your users.',
    features: ['GPU-Optimized Clusters', 'Predictive Auto-scaling', 'SOC2 Compliant Security', 'Zero-Downtime Deployments'],
    techStack: ['AWS Bedrock', 'Terraform', 'Kubernetes', 'Prometheus', 'Datadog']
  },
  {
    id: '3',
    title: 'Neural Web Interfaces',
    description: 'Immersive, data-rich frontend experiences that adapt dynamically to user behavior.',
    icon: '✨',
    longDescription: 'We build interfaces that feel like they are thinking. By integrating real-time inference at the edge, our web applications personalize navigation, content, and visuals based on the predicted intent of the user.',
    features: ['Edge-AI Personalization', 'High-Performance Graphics', 'Real-time Streaming UIs', 'Accessibility-First Design'],
    techStack: ['Next.js', 'WebGPU', 'Tailwind CSS', 'Vercel AI SDK', 'TypeScript']
  },
  {
    id: '4',
    title: 'Enterprise LLM Integration',
    description: 'Deploying private, secure, and fine-tuned language models on your proprietary datasets.',
    icon: '🔐',
    longDescription: 'Data privacy is paramount. We help enterprises deploy open-source and proprietary models within their own virtual private clouds (VPC), ensuring that sensitive business intelligence never leaves their secure perimeter.',
    features: ['VPC-Isolated Deployments', 'Custom Model Fine-tuning', 'Prompt Engineering Ops', 'Data Governance Frameworks'],
    techStack: ['Ollama', 'Llama 3.1', 'Azure AI', 'Docker', 'PostgreSQL']
  }
];

export const AI_METHODOLOGY = [
  {
    title: "AI-Assisted Craftsmanship",
    desc: "Every line of code is cross-referenced by our proprietary security model to ensure zero vulnerabilities from day one.",
    icon: "🛡️"
  },
  {
    title: "Predictive Lifecycle",
    desc: "We use machine learning to predict potential bottlenecks in software delivery, allowing for 40% faster shipping cycles.",
    icon: "🧪"
  },
  {
    title: "Synthetic Data Testing",
    desc: "Our QA process utilizes high-fidelity synthetic data to simulate millions of edge cases that traditional testing misses.",
    icon: "📊"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'Neural Discovery',
    description: 'We analyze your data landscape to find the highest-leverage AI opportunities for your specific business model.',
    icon: '🧬'
  },
  {
    title: 'Cognitive Design',
    description: 'Architecting the flow of intelligence, mapping how models interact with your core business logic.',
    icon: '🏗️'
  },
  {
    title: 'Rapid Deployment',
    description: 'Utilizing AI accelerators to spin up secure, scalable production environments in record time.',
    icon: '⚡'
  },
  {
    title: 'Feedback Loop',
    description: 'Continuous monitoring and iterative fine-tuning to ensure your AI systems improve with every interaction.',
    icon: '📈'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'AetherMind Fintech',
    category: ProjectCategory.AI,
    image: 'https://images.unsplash.com/photo-1611974714024-4637d2305c91?auto=format&fit=crop&q=80&w=1200',
    description: 'A revolutionary AI assistant for wealth management that processes global market sentiment in real-time.'
  },
  {
    id: 'p2',
    title: 'NexusFlow Health',
    category: ProjectCategory.CLOUD,
    image: 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1200',
    description: 'HIPAA-compliant cloud architecture for large-scale genetic sequencing and analysis.'
  },
  {
    id: 'p3',
    title: 'BioScribe Logistics',
    category: ProjectCategory.WEB,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    description: 'Global supply chain dashboard with predictive rerouting powered by agentic AI clusters.'
  }
];
