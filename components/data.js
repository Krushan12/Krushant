export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
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

export const projects = [
  {
    title: "Phoge - AI Image SaaS Platform",
    description: "A secure, full-featured SaaS platform for AI image editing with Stripe payments & role-based access (Clerk).",
    stack: ["Next.js", "TypeScript", "MongoDB", "Clerk", "Cloudinary", "Stripe", "Shadcn"],
    image: "/projects/phoge.png",
    demoUrl: "https://phoge.vercel.app/",
    codeUrl: "https://github.com/Krushan12/phoge",
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
  },
  {
    title: "Kanban Board Task Management",
    description: "Responsive task management system with intuitive drag-and-drop functionality, task categorization, and expandable sidebar and modal interfaces.",
    stack: ["React", "Tailwind CSS", "React DnD"],
    image: "/projects/kanbanboard.png",
    demoUrl: "https://kanban-board-teal-pi.vercel.app/",
    codeUrl: "https://github.com/Krushan12/Kanban-board",
  },
];

export const experiences = [
  {
    title: "Software Development Intern",
    company: "GEMA Technology Private Limited",
    period: "May - July 2024",
    description: "Developed and implemented new features for educational technology platforms using modern web technologies. Collaborated with cross-functional teams to design and optimize user interfaces. Contributed to backend API development and database optimization. Participated in agile development cycles and code reviews.",
  },
  {
    title: "B.Tech in Materials Engineering",
    company: "Indian Institute of Technology, Gandhinagar",
    period: "November 2021 - June 2025",
    description: "Currently pursuing a Bachelor's degree in Materials Engineering at IIT Gandhinagar.",
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
  { name: "LinkedIn", url: "https://linkedin.com/in/krushantw", icon: "Linkedin" },
  { name: "Email", url: "mailto:krushantw@gmail.com", icon: "Mail" },
  { name: "Portfolio", url: "https://profile-mu-silk.vercel.app/", icon: "Globe" },
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