import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    slug: 'shortiq',
    title: 'ShortIQ',
    tagline: 'AI Faceless Content Engine — automate script generation, video rendering, and social media publishing at scale.',
    status: 'live',
    type: 'SaaS · AI Tool',
    year: '2025 – 2026',
    liveUrl: 'https://short-iq.vercel.app',
    repoUrl: 'https://github.com/subhash-jhaa/ShortIQ',

    heroImage: '/shortiq/hero.png',
    logoImage: '/shortiq/logo.svg',
    stack: [
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Prisma', icon: 'prisma' },
      { name: 'OpenAI', icon: 'openai-icon' },
      { name: 'Clerk', icon: 'clerk' },
      { name: 'Vercel', icon: 'vercel' },
    ],
    overview: [
      'ShortIQ is an AI-powered content automation platform that transforms raw ideas into viral-ready video series for TikTok, Reels, and Shorts. By bridging Google Gemini’s creative scripting with Creatomate’s high-performance rendering, it provides a seamless production engine for building faceless content empires. Features include automated AI scripting, direct multi-platform social publishing, and a premium glassmorphism dashboard designed for high-velocity creators. ShortIQ empowers creators to scale their content output, optimize for virality, and focus on growth while the platform handles the entire production pipeline from concept to publish.',

    ],
    implementation: [
      {
        title: 'AI-Driven Content Framework',
        description: 'Engineered a sophisticated scripting engine using Google Gemini for creative ideation and Groq SDK for near-instant text generation.'
      },
      {
        title: 'Dynamic Cloud Rendering',
        description: 'Integrated the Creatomate API into a custom rendering pipeline to produce high-fidelity video assets with automated text overlays and transitions.'
      },
      {
        title: 'Resilient Workflow Management',
        description: 'Leveraged Inngest to build a durable, event-driven background processing system that ensures 100% reliability for long-running video generation tasks.'
      },
      {
        title: 'Real-Time Data Architecture',
        description: 'Utilized Supabase\'s real-time subscriptions to deliver instantaneous generation status updates across both desktop and mobile user interfaces.'
      },
    ],
    features: [
      { title: 'AI Video Scripting', description: 'The AI automatically writes scripts for your TikTok, Reels, and Shorts videos.' },
      { title: 'Fast Cloud Making', description: 'It builds your videos very quickly using powerful computers in the cloud.' },
      { title: 'Single-Click Posting', description: 'You can post your videos to YouTube, TikTok, and Instagram with just one click.' },
      { title: 'Smooth Workflow', description: 'It handles all the technical background work for you so your videos are always ready.' },
      { title: 'Modern Dashboard', description: 'The website looks beautiful and works perfectly on your phone.' },
      { title: 'Safe Account & Simple Billing', description: 'It keeps your account secure and makes subscribing easy.' },
      { title: 'Step-by-Step Guide', description: 'It has a simple guide to help you master every feature on the site.' },
    ],
    screenshots: [
      { src: '/shortiq/overview.png', alt: 'Dashboard', caption: 'TODO: caption' },
      { src: '/shortiq/series.png', alt: 'Dashboard', caption: 'TODO: caption' },
      { src: '/shortiq/videos.png', alt: 'Dashboard', caption: 'TODO: caption' },
      { src: '/shortiq/Guid.png', alt: 'Dashboard', caption: 'TODO: caption' },
      { src: '/shortiq/setting.png', alt: 'Dashboard', caption: 'TODO: caption' },
      { src: '/shortiq/profile.png', alt: 'Dashboard', caption: 'TODO: caption' },
    ],
    challenges: [
      {
        problem: 'Managing high-latency video rendering requests',
        solution: 'Built a resilient background workflow system using Inngest, providing automatic retry logic and state persistence for reliable long-form video generation.'
      },
      {
        problem: 'Optimizing script generation speed for a better UX',
        solution: 'Combined Groq SDK and Google Gemini for near-instant text generation, allowing users to start editing scripts immediately without waiting for complex AI reasoning.'
      },
      {
        problem: 'Maintaining a premium, responsive UI on mobile devices',
        solution: 'Engineered a custom slide-over sidebar and touch-optimized layout using Vanilla CSS, ensuring the dashboard remains premium and functional on any screen size.'
      },
      {
        problem: 'Coordinating secure publishing across multiple social platforms',
        solution: 'Developed a unified integration layer that maps a single video generation to YouTube, TikTok, and Instagram APIs, ensuring consistent quality and metadata across all social channels.'
      },
    ],
  },

  {
    slug: 'investiq',
    title: 'Invest IQ',
    tagline: 'AI-powered personal finance assistant for investment planning and goal-tracking.',
    status: 'live',
    type: 'Web App · AI Tool',
    year: '2025',
    liveUrl: 'https://my-investiq.vercel.app',
    repoUrl: 'https://github.com/subhash-jhaa/Invest-Iq',
    heroImage: '/investiq/hero.png',
    logoImage: '/investiq/investiq.logo.png',
    stack: [
      { name: 'React', icon: 'react' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Gemini AI', icon: 'googlegemini' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Appwrite', icon: 'appwrite' },
    ],
    overview: [
      'Invest-IQ is an AI-powered investment assistant built with React, Tailwind CSS, and Gemini AI. It provides personalized fund recommendations based on user risk profiles, capital, and goals. The platform features interactive calculators for SIP, FD, and Mutual Funds with visual charts. Real-time gold price tracking and an AI chatbot (FunBot) offer instant financial guidance. A unique "I\'m 18" mode simplifies complex concepts to help young beginners start investing.'
    ],
    implementation: [
      {
        title: "Personalized AI Risk Profiling",
        description: "Developed a custom profiling engine using Google Gemini to analyze user capital and goals, generating tailored investment roadmaps and fund suggestions."
      },
      {
        title: "Real-Time Commodities Integration",
        description: "Implemented a live tracking system for Gold and Silver prices, providing users with up-to-the-minute market data for diversified portfolio management."
      },
      {
        title: "Interactive Financial Visualizations",
        description: "Built high-performance SIP, FD, and Mutual Fund calculators with dynamic charting to visualize long-term wealth growth and compound interest."
      },
      {
        title: "Conversational FinTech Interface",
        description: "Architected 'FunBot', a Gemini-powered chatbot designed to simplify complex financial jargon and provide instant support for investment queries."
      }
    ],
    features: [
      { title: 'AI Fund Recommendations', description: 'Get personalized investment suggestions based on your specific financial goals and risk tolerance.' },
      { title: 'Live Gold Tracking', description: 'Monitor real-time gold and silver prices to make informed decisions about your precious metal investments.' },
      { title: 'Smart Financial Calculators', description: 'Plan your future with interactive SIP, FD, and Mutual Fund calculators featuring visual growth charts.' },
      { title: 'AI Financial Assistant', description: 'Chat with FunBot to get instant answers to your banking and investment questions in simple language.' },
      { title: 'Educational "I\'m 18" Mode', description: 'A special mode that breaks down complex financial concepts into easy-to-understand terms for beginners.' },
      { title: 'Multi-Goal Tracking', description: 'Set and monitor multiple financial targets, from retirement planning to buying your first home.' },
      { title: 'Scalable Appwrite Backend', description: 'Secure data management and user authentication powered by Appwrite for a reliable investment experience.' }
    ],
    screenshots: [
      { src: '/investiq/overview.png', alt: 'App', caption: 'TODO' },
      { src: '/investiq/riskprofile.png', alt: 'App', caption: 'TODO' },
      { src: '/investiq/calculator.png', alt: 'App', caption: 'TODO' },
      { src: '/investiq/investment.png', alt: 'App', caption: 'TODO' }
    ],
    challenges: [
      {
        problem: "Simplifying complex financial jargon for young users",
        solution: "Engineered the 'I'm 18' mode using prompt-engineered AI layers to translate technical banking terms into simple, relatable analogies."
      },
      {
        problem: "Ensuring accurate real-time market data delivery",
        solution: "Integrated specialized financial APIs with a robust polling system to ensure gold and silver prices are always current and reliable."
      },
      {
        problem: "Creating engaging visualizations for dry financial data",
        solution: "Designed a clean, custom charting interface that transforms raw numbers into intuitive growth curves and distribution maps."
      },
      {
        problem: "Maintaining user trust in AI-driven financial advice",
        solution: "Implemented a transparent 'Reasoning' layer where the AI explains exactly why a specific fund or strategy was recommended to the user."
      }
    ],
  },

  {
    slug: 'vartaa',
    title: 'Vartaa',
    tagline: 'Real-time multilingual messaging platform with instant AI translation across 22+ languages.',
    status: 'live',
    type: 'Real-time App · AI',
    year: '2025',
    liveUrl: 'https://vartaa.vercel.app',
    repoUrl: 'https://github.com/subhash-jhaa/Vartaa',
    heroImage: '/Vartaa/hero.png',
    logoImage: '/vartaa-logo.svg',
    stack: [
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Convex', icon: 'convex' },
      { name: 'Radix UI', icon: 'radixui' },
      { name: 'Gemini AI', icon: 'googlegemini' },
    ],
    overview: [
      'Vartaa reimines professional collaboration for a diverse workforce, providing high-performance, AI-driven team communication engineered for the multilingual landscape of India. By bridging Sarvam AI’s deep linguistic models with Convex’s real-time reactive backend, Vartaa enables teams to communicate instantly across 22 Indian languages with zero friction.'
    ],
    implementation: [
      {
        title: "Hybrid AI Routing",
        description: "Optimized latency by routing Indic translations to Sarvam AI (Mayura:v1) and complex global reasoning/summarization to Google Gemini Flash."
      },
      {
        title: "Real-Time Sync Engine",
        description: "Leveraged Convex’s WebSocket architecture for ACID-compliant, <100ms synchronization of messages, typing indicators, and live translations."
      },
      {
        title: "Sentiment-Aware Audio",
        description: "Integrated Sarvam Bulbul v3 for TTS, using a custom analysis layer to dynamically adjust voice pacing and tone based on message sentiment."
      },
      {
        title: "Automated Metadata Extraction",
        description: "Deployed Gemini-powered insights to automatically extract actionable tasks, smart replies, and professional tone alerts from unstructured chat."
      }
    ],
    features: [
      {
        title: "Real-time Translation",
        description: "Every message is automatically translated into each member's preferred language, powered by Sarvam AI for native-level accuracy."
      },
      {
        title: "AI Thread Summaries",
        description: "Catch up on long conversations with a single click using Google Gemini-powered summaries delivered in your native language."
      },
      {
        title: "Universal Voice Messaging",
        description: "Record in any tongue; Vartaa transcribes, translates, and plays back audio in each recipient's chosen language automatically."
      },
      {
        title: "AI-Extracted Tasks",
        description: "Never lose an action item. Vartaa’s AI identifies and extracts tasks directly from chat messages for seamless tracking."
      },
      {
        title: "Ultra-Low Latency Smart Replies",
        description: "Context-aware suggestions that understand nuances across multiple languages with under 200ms response time."
      },
      {
        title: "Focused Rooms",
        description: "A \"Zero Noise\" architecture that eliminates notification fatigue by focusing on purposeful rooms over chaotic public channels."
      },
      {
        title: "Interactive Onboarding",
        description: "A streamlined guide ensures users can set their language preferences and start collaborating in seconds."
      },
      {
        title: "Real-time Collaborative Infrastructure",
        description: "Live typing indicators, presence tracking (Online/Away/DND), and read-receipts to demonstrate mastery of real-time data synchronization and complex state management using Convex."
      }
    ],
    screenshots: [
      { src: '/Vartaa/whatuget.png', alt: 'Chat', caption: 'TODO' },
      { src: '/Vartaa/roomcount.png', alt: 'Chat', caption: 'TODO' },
      { src: '/Vartaa/chat.png', alt: 'Chat', caption: 'TODO' },
      { src: '/Vartaa/language.png', alt: 'Chat', caption: 'TODO' }
    ],
    challenges: [
      {
        problem: "Handling many translations without slowing down the app",
        solution: "Built a system that processes multiple languages at the same time in the background, so the chat stays fast and smooth for everyone."
      },
      {
        problem: "Choosing between fast translations and smart summaries",
        solution: "Used two different AIs: one that is super fast for basic translating and another that is very smart for creating summaries and finding tasks."
      },
      {
        problem: "Showing real-time \"typing\" updates without any lag",
        solution: "Used high-speed technology to sync updates across all users in less than a second, so everyone sees instantly when someone is typing."
      },
      {
        problem: "Making the complex design look premium on small mobile screens",
        solution: "Created a custom layout that automatically reshapes itself for phones, keeping the \"Obsidian\" look beautiful on any device."
      },
      {
        problem: "Remembering important work mentioned in a long chat",
        solution: "Used AI to automatically find and save \"Tasks\" and \"To-Do\" items from the messages, so nothing important gets forgotten."
      }
    ],
  },

  {
    slug: 'devevent',
    title: 'DevEvent',
    tagline: 'Community event discovery and booking platform with secure auth and email workflows.',
    status: 'building',
    type: 'Full Stack · Web App',
    year: '2025 – 2026',
    repoUrl: 'https://github.com/subhash-jhaa/Dev-Events',
    heroImage: '/shortiq.img.png',
    stack: [
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Clerk', icon: 'clerk' },
      { name: 'Radix UI', icon: 'radixui' },
    ],
    overview: ['TODO: Add overview'],
    implementation: [{ title: 'TODO', description: 'TODO' }],
    features: [{ title: 'TODO', description: 'TODO' }],
    screenshots: [{ src: '/shortiq.img.png', alt: 'App', caption: 'TODO' }],
    challenges: [{ problem: 'TODO', solution: 'TODO' }],
  },
]

// Helper to get a single project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

// Helper to get all slugs (used for generateStaticParams)
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug)
}
