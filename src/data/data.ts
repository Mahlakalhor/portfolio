export const siteData = {
  me: {
    name: "Mahla Kalhor",
    role: "Front-End Developer",
    location: "Tehran, Iran",
    bio: "I build clean, interactive user interfaces with React and Next.js.",
    about:
      "I enjoy turning complex ideas into simple, elegant interfaces. I care about UX, details, and performance.",
  },

  // skills: {
  //   languages: ["HTML", "CSS", "JavaScript", "TypeScript"],
  //   frameworks: ["React.js", "Next.js"],
  //   state: ["Redux", "Zustand"],
  //   styling: ["Tailwind", "Sass"],
  //   libs: ["React Query", "Framer Motion"],
  //   tools: ["Git"],
  //   soft: ["Problem-solving", "Debugging"],
  // },

  projects: [
    {
      id: "1",
      title: "Personal Portfolio",
      description: "Interactive portfolio with chat-like UI and animations.",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      href: "/projects/portfolio",
    },
    {
      id: "2",
      title: "Social Links Page",
      description: "Frontend Mentor inspired profile page.",
      tech: ["React", "CSS"],
      href: "/projects/social-links",
    },
  ],

  links: [
    {
      label: "GitHub",
      href: "https://github.com/your-username",
      type: "external",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/your-username",
      type: "external",
    },
    {
      label: "Resume",
      href: "/resume",
      type: "internal",
    },
  ],

  contact: {
    email: "mahla@example.com",
    availability: "Open to junior frontend roles & freelance",
  },
};
