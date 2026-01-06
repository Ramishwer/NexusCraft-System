
export type View = 'home' | 'company' | 'services' | 'industries' | 'portfolio' | 'casestudies' | 'blog' | 'consultant' | 'contact' | 'about' | 'mission' | 'why-us' | 'faq' | 'software-dev' | 'web-dev' | 'mobile-dev' | 'blockchain-dev' | 'uiux-design' | 'digital-marketing';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  longDescription?: string;
  features?: string[];
  techStack?: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export enum ProjectCategory {
  WEB = 'WEB',
  MOBILE = 'MOBILE',
  AI = 'AI',
  CLOUD = 'CLOUD'
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}
