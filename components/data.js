export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn UI" },
      { name: "Framer Motion" },
      { name: "TypeScript" },
      { name: "HTML/CSS" },
      { name: "JavaScript" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "REST API" },
      { name: "Firebase" },
      { name: "Prisma" },
      { name: "SQL" },
    ],
  },
  {
    category: "Tools & Services",
    items: [
      { name: "Git & GitHub" },
      { name: "Vercel" },
      { name: "Clerk Auth" },
      { name: "Stripe" },
      { name: "Cloudinary" },
      { name: "Postman" },
      { name: "VS Code" },
    ],
  },
];

export const mainProjects = [
  {
    title: "AudioOrbit - Synchronized Music Experience",
    description: "A collaborative platform that brings people together through shared music experiences, allowing users to create sessions, invite friends, and enjoy synchronized listening.",
    stack: ["Next.js", "React", "Tailwind CSS", "Web Audio API", "WebSockets"],
    image: "/projects/audioorbit.png",
    demoUrl: "https://audi-orbit.vercel.app/",
    codeUrl: "https://github.com/Krushan12/AudiOrbit",
  },
  {
    title: "Phoge - AI Image SaaS Platform",
    description: "A secure, full-featured SaaS platform for AI image editing with Stripe payments & role-based access (Clerk).",
    stack: ["Next.js", "TypeScript", "MongoDB", "Clerk", "Cloudinary", "Stripe", "Shadcn"],
    image: "/projects/phoge.png",
    demoUrl: "https://phoge.vercel.app/",
    codeUrl: "https://github.com/Krushan12/phoge",
  },
  {
    title: "Task Board - Real-Time Task Management",
    description: "Real-time task management app with drag-and-drop UI, Firebase authentication, and glassmorphism styling.",
    stack: ["Next.js 13", "Firebase", "Tailwind CSS", "DnD Kit", "Geist"],
    image: "/projects/taskboard.png",
    demoUrl: "https://arakoo-ai.vercel.app/",
    codeUrl: "https://github.com/Krushan12/reactjs-sample-0225",
  },
  {
    title: "EV Charger Manager",
    description: "A full-stack app for managing EV charging stations with real-time map visualization, JWT auth, and filtering.",
    stack: ["Vue 3", "Node.js", "Express", "MongoDB", "JWT", "Leaflet"],
    image: "/projects/charger.png",
    demoUrl: "https://charging-station-app.vercel.app",
    codeUrl: "https://github.com/Krushan12/charging-station-app", 
  },
  {
    title: "Mutual Fund Analyzer",
    description: "A dashboard to track and analyze mutual fund performance using XIRR with secure backend and interactive charts.",
    stack: ["React 19", "Node.js", "PostgreSQL", "Tailwind", "Chart.js", "Sequelize"],
    image: "/projects/mutualfund.png",
    demoUrl: "https://mutual-fund-analyzer.vercel.app/",
    codeUrl: "https://github.com/Krushan12/mutual-fund-analyzer",
  },
  {
    title: "Vibely - Social Media Application",
    description: "A complete social media platform with CRUD operations, user authentication, post creation with image support, and interactive UI.",
    stack: ["React", "Express", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/projects/vibely.png",
    demoUrl: "https://vibely-liart.vercel.app/",
    codeUrl: "https://github.com/Krushan12/Vibely",
  },
  {
    title: "Developer Portfolio",
    description: "Modern, responsive portfolio featuring a code-themed UI with syntax highlighting, interactive animations, and a unique developer-focused design.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "React", "Lucide Icons"],
    image: "/projects/webprofile.png",
    demoUrl: "https://krushant.vercel.app/",
    codeUrl: "https://github.com/Krushan12/Krushant",
  }
];

export const funProjects = [
  {
    title: "Kanban Board Task Management",
    description: "Responsive task management system with intuitive drag-and-drop functionality, task categorization, and expandable sidebar and modal interfaces.",
    stack: ["React", "Tailwind CSS", "React DnD"],
    image: "/projects/kanbanboard.png",
    demoUrl: "https://kanban-board-teal-pi.vercel.app/",
    codeUrl: "https://github.com/Krushan12/Kanban-board",
  },
  ,
  {
    title: "Lexicon - Wordle Style Game",
    description: "A fun 5-letter word guessing game with color-coded feedback. Guess the word in 6 tries or less with visual hints like green, yellow, and gray for positions.",
    stack: ["React", "CSS", "JavaScript"],
    image: "/projects/lexicon.png",
    demoUrl: "https://lexicon-nine.vercel.app/", 
    codeUrl: "https://github.com/Krushan12/Wordle", 
  }
];

export const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Rainbow Money (Fintech Startup)',
    period: 'June 2025 – Present',
    points: [
      'Built Mutual Fund Portfolio Analytics Platform with React/Express',
      'Developed CAMS PDF parser converting data to structured JSON',
      'Created interactive data visualizations using Recharts',
      'Implemented PAN-based portfolio fetching system',
      'Collaborated on MVP delivery for investment analytics'
    ]
  },
  {
    title: 'Software Development Intern',
    company: 'GEMA Technology Pvt. Ltd.',
    period: 'May – July 2024',
    points: [
      'Collaborated with cross-functional teams to design and develop e-commerce platform',
      'Implemented 5+ core features boosting UI responsiveness by 30%',
      'Optimized API endpoints reducing latency by 25%',
      'Conducted code reviews and agile development processes'
    ]
  },
  {
    title: "B.Tech in Materials Engineering",
    company: "Indian Institute of Technology, Gandhinagar",
    period: "November 2021 - June 2025",
    points: [
      "Completed Bachelor's degree in Materials Engineering with focus on Full Stack Development."
    ]
  }
];

export const about = {
  intro: "Hey there! I'm Krushant Wagh, a passionate full-stack developer from Maharashtra, India. I'm currently pursuing my B.Tech in Materials Engineering at IIT Gandhinagar while building impactful applications with modern web technologies.",
  background: "I began my journey in tech with a strong interest in creating web applications. My experience as a Software Development Intern at GEMA Technology has strengthened my skills in both frontend and backend development, working with React, Node.js, and MongoDB.",
  philosophy: "I believe in writing clean, maintainable code and staying curious about emerging technologies. I'm dedicated to continuous learning and creating applications that provide exceptional user experiences with modern frameworks like Next.js, React, and Tailwind CSS.",
  interests: "When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and expanding my knowledge in web development. I'm particularly interested in building SaaS platforms, AI-powered applications, and responsive web interfaces that solve real-world problems.",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/Krushan12", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/krushant-wagh-703688228", icon: "Linkedin" },
  
  { name: "Twitter", url: "https://x.com/KrushantW32342", icon: "Twitter" },
];

export const codeSnippets = {
  react: `// A custom React hook for managing theme
export function useTheme() {
  const [theme, setTheme] = useState('dark');
  
  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return { theme, toggleTheme };
}`,
  
  algorithm: `// Binary search implementation
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    }
    
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1; // Target not found
}`,

  animation: `// GSAP animation for element entrance
gsap.from('.card', {
  duration: 0.8,
  y: 50,
  opacity: 0,
  stagger: 0.2,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.card-container',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  }
});`
};