import { FileText, GanttChartSquare, Mic, PenTool, PieChart, Search, Sparkles, Users } from "lucide-react";

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export const services = [
  {
    icon: Sparkles,
    title: 'Profile Makeover',
    description: 'Optimize your social media profiles to attract the right audience and opportunities.',
    features: [
      'Bio optimization',
      'Profile picture & banner review',
      'Keyword strategy',
      'Link-in-bio setup',
    ],
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    description: 'Develop a content plan that showcases your expertise and engages your target audience.',
    features: [
      'Content pillar identification',
      'Monthly content calendar',
      'Post templates & ideas',
      'Engagement strategies',
    ],
  },
  {
    icon: PieChart,
    title: 'Personal Branding 101',
    description: 'A complete package to build your personal brand from the ground up.',
    features: [
      'Discovery session',
      'Brand voice & messaging guide',
      'Visual identity consultation',
      'Online presence audit',
    ],
  },
  {
    icon: Search,
    title: 'Audience Growth',
    description: "Strategies to grow your following with genuine, engaged people in your niche.",
    features: [
        "Target audience analysis",
        "Hashtag research & strategy",
        "Collaboration outreach templates",
        "Community engagement plan",
    ]
  },
  {
    icon: GanttChartSquare,
    title: 'Personal Website Review',
    description: "Get expert feedback on your personal website or portfolio to improve its impact.",
    features: [
        "UX/UI feedback session",
        "SEO basics check",
        "Content and copy review",
        "Call-to-action optimization",
    ]
  },
  {
    icon: PenTool,
    title: 'Creator Toolkit',
    description: "Learn about the best digital tools to create content efficiently and professionally.",
    features: [
        "Recommended software list",
        "Workflow automation tips",
        "AI tools for content creation",
        "Productivity hacks",
    ]
  }
];

export const howItWorksSteps = [
    {
        title: "Book a Free Call",
        description: "Start with a no-obligation consultation to discuss your goals and vision."
    },
    {
        title: "Strategy Session",
        description: "We dive deep into your brand, audience, and objectives to create a tailored plan."
    },
    {
        title: "Receive Action Plan",
        description: "Get a clear, step-by-step roadmap with actionable tasks for you to implement."
    },
    {
        title: "Execute & Grow",
        description: "Put the plan into action with our guidance and watch your online presence flourish."
    }
]

export const testimonials = [
  {
    name: 'Sourabh',
    title: 'Freelancer',
    quote: "Working with Humanly Persona was a game-changer. My online presence feels authentic and I've seen a 200% increase in client inquiries!",
    image: 'https://placehold.co/100x100.png',
  },
  {
    name: 'Aalok',
    title: 'Techie',
    quote: "I struggled with how to present myself online. They provided a clear strategy that helped me land a speaking gig at a major conference.",
    image: 'https://placehold.co/100x100.png',
  },
  {
    name: 'Shaikh',
    title: 'Content Creator',
    quote: "The content strategy sessions were invaluable. My engagement rates have soared, and I feel so much more confident in what I'm posting.",
    image: 'https://placehold.co/100x100.png',
  },
   {
    name: 'Anurag',
    title: 'Student & Aspiring Founder',
    quote: "As a student, getting this guidance was crucial. I've built a professional network on LinkedIn that I never thought possible.",
    image: 'https://placehold.co/100x100.png',
  },
  {
    name: 'Anurag',
    title: 'Marketing Manager',
    quote: "The profile makeover immediately made my LinkedIn stand out. Recruiters started reaching out to me instead of the other way around.",
    image: 'https://placehold.co/100x100.png',
  },
  {
    name: 'priya',
    title: 'Real Estate Agent',
    quote: "They helped me translate my in-person sales skills into a compelling online brand. My lead generation has never been better.",
    image: 'https://placehold.co/100x100.png',
  }
];

export const blogPosts = [
    {
        slug: 'virtual-identity-101',
        title: "Crafting Your Virtual Identity: A Beginner's Guide",
        description: "Your online presence is your new resume, business card, and first impression all in one. Here's how to get it right.",
        author: "Jane Doe",
        date: "2024-05-15",
        image: "https://placehold.co/600x400.png",
    },
    {
        slug: 'linkedin-mastery',
        title: "5 Simple Tricks to Master LinkedIn",
        description: "Unlock the full potential of the world's largest professional network with these easy-to-implement tips.",
        author: "John Smith",
        date: "2024-05-10",
        image: "https://placehold.co/600x400.png",
    },
    {
        slug: 'content-that-connects',
        title: "Beyond Likes: Creating Content That Truly Connects",
        description: "Move past vanity metrics and learn to create content that builds a loyal community and drives real results.",
        author: "Emily White",
        date: "2024-05-01",
        image: "https://placehold.co/600x400.png",
    }
]
