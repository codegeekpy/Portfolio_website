export const personalData = {
  name: "Kashi Kuldeep",
  role: "Software Engineer & Tech Lead",
  tagline: "Architecting scalable full-stack applications, decentralized systems, and AI-driven platforms with high performance and clean code.",
  location: "Hyderabad, Telangana, India (500006)",
  email: "kashikuldeep75@gmail.com",
  phone: "+91 6300991762",
  phoneFormatted: "+91 63009 91762",
  github: "https://github.com/codegeekpy",
  linkedin: "https://www.linkedin.com/in/kashikuldeep",
  avatar: "/Profile2.jpeg",
  resumeUrl: "/Kashi_Kuldeep_Resume.pdf",
  status: "Open to opportunities",
  summary:
    "Organized and motivated software engineer with proven experience in technical leadership, full-stack development, and AI engineering. Proven track record in designing resilient software architecture, leading code quality, and building performant applications across the MERN stack, Python/FastAPI, machine learning, and blockchain ecosystems."
};

export const stats = [
  { label: "Role Experience", value: "Tech Lead", detail: "VISWAM AI" },
  { label: "Flagship Projects", value: "2+", detail: "DApps & GenAI" },
  { label: "Certifications", value: "6+", detail: "IBM, NPTEL, Cisco" },
  { label: "Hackathon Wins", value: "2", detail: "Ideathon & Avensis" },
];

export const experience = [
  {
    role: "Tech Lead",
    company: "VISWAM AI",
    location: "Hyderabad, India",
    period: "Mar 2025 - Dec 2025",
    type: "Leadership & Engineering",
    description:
      "Spearheaded technical direction and architecture for AI-driven products, ensuring high reliability, scalability, and code excellence.",
    highlights: [
      "Designed and implemented modular software architecture, significantly enhancing system scalability and maintainability.",
      "Conducted rigorous code reviews, ensuring standard compliance, security, and high engineering velocity across developers.",
      "Mentored junior engineers and interns, fostering best practices in modern JavaScript, React, and backend API engineering."
    ],
    skills: ["Software Architecture", "Code Review", "Team Mentorship", "System Design", "Scalability", "Full-Stack"]
  }
];

export const education = {
  degree: "B.Tech: Computer Science and Engineering",
  institution: "Anurag University",
  location: "Hyderabad, Telangana, India",
  graduation: "Expected Jun 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Object-Oriented Programming",
    "Database Management & SQL",
    "Machine Learning",
    "Software Engineering"
  ]
};

export const awards = [
  {
    title: "1st Runner-Up — IDEATHON",
    organization: "Anurag University",
    type: "University-Level Competition",
    description: "Awarded for exceptional product ideation, architectural feasibility, and innovative technology problem solving."
  },
  {
    title: "2nd Runner-Up — AVENSIS Hackathon",
    organization: "University Hackathon",
    type: "24-Hour Hackathon",
    description: "Built an innovative working prototype under tight deadlines with live product demo and architectural defense."
  }
];

export const projects = [
  {
    id: "collabos",
    title: "CollabOS",
    subtitle: "Decentralized IoT Project Management & Trustless Escrow Platform",
    status: "Ongoing",
    statusColor: "emerald",
    category: "Web3 & IoT",
    featured: true,
    github: "https://github.com/codegeekpy/CollabOS.git",
    summary:
      "A collaborative decentralized application (DApp) designed for seamless IoT project management and trustless client-developer contracting overseas.",
    description:
      "CollabOS eliminates trust friction between international clients and embedded systems developers. Built on the MERN stack with smart contracts, it provides milestone-based escrow payouts, IoT telemetry verification, and auditable task tracking.",
    highlights: [
      "Trustless milestone verification powered by blockchain smart contracts.",
      "Real-time team collaboration suite tailored for hardware & IoT milestones.",
      "Seamless client and developer dashboard with cryptographic state security."
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Blockchain (DApp)", "Smart Contracts", "Web3", "Tailwind CSS"],
  },
  {
    id: "genai-forge",
    title: "GenAI_Forge",
    subtitle: "AI-Assisted Full-Stack Career & Engineering Accelerator",
    status: "Completed",
    statusColor: "cyan",
    category: "AI & Full Stack",
    featured: true,
    github: "https://github.com/codegeekpy/Genai_forge_2026_Devs.git",
    summary:
      "A 24-hour hackathon-born full-stack platform delivering sub-second AI skill roadmaps, resume analysis, and ATS-friendly design.",
    description:
      "Engineered during an intense 24-hour hackathon, GenAI_Forge harnesses Google Gemini and Groq LPU inference to deliver intelligent career diagnostics with response latencies under 1 second.",
    highlights: [
      "Sub-second (<1s) latency responses powered by Groq and Gemini APIs.",
      "Automated resume analysis, ATS compatibility scoring, and live layout designer.",
      "Personalized skill roadmaps and adaptive job readiness evaluation engine."
    ],
    technologies: ["React", "FastAPI", "Python", "Google Gemini AI", "Groq LPU", "RESTful APIs", "Tailwind CSS"],
  }
];

export const skillCategories = [
  {
    category: "Languages & Core",
    icon: "Code",
    items: [
      { name: "Python", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "C & C++", level: "Proficient" },
      { name: "SQL", level: "Advanced" },
      { name: "Bash Scripting", level: "Proficient" },
      { name: "OOP & DSA", level: "Advanced" },
    ]
  },
  {
    category: "Frontend & UI",
    icon: "Layout",
    items: [
      { name: "React", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "HTML5 & CSS3", level: "Expert" },
      { name: "Responsive UI/UX", level: "Advanced" },
      { name: "Component Architecture", level: "Advanced" },
    ]
  },
  {
    category: "Backend & Systems",
    icon: "Server",
    items: [
      { name: "FastAPI", level: "Proficient" },
      { name: "Node.js & Express", level: "Proficient" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "Software Architecture", level: "Advanced" },
      { name: "SQL Optimization", level: "Proficient" },
    ]
  },
  {
    category: "AI, Web3 & Tools",
    icon: "Cpu",
    items: [
      { name: "Machine Learning", level: "Certified" },
      { name: "Generative AI (Gemini, Groq)", level: "Advanced" },
      { name: "Blockchain (DApp)", level: "Proficient" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Linux / Shell", level: "Proficient" },
    ]
  }
];

export const certifications = [
  {
    title: "IBM AI Engineering Professional Certificate (V2)",
    issuer: "IBM",
    badge: "IBM AI",
    type: "Professional Certification",
    description: "Deep dive into machine learning pipelines, deep learning models, neural networks, and scalable AI engineering."
  },
  {
    title: "IBM AI Applied Professional Certificate",
    issuer: "IBM",
    badge: "IBM AI",
    type: "Professional Certification",
    description: "Applied generative AI applications, natural language processing, and enterprise model integration."
  },
  {
    title: "IBM Artificial Intelligence Practitioner Certificate",
    issuer: "IBM",
    badge: "IBM AI",
    type: "Specialization",
    description: "Foundational AI principles, computer vision, data ethics, and cognitive computing concepts."
  },
  {
    title: "NPTEL Machine Learning Certification",
    issuer: "NPTEL / IIT",
    badge: "NPTEL",
    type: "Academic Certification",
    description: "Rigorous theoretical and mathematical foundation in supervised, unsupervised, and reinforcement learning."
  },
  {
    title: "NPTEL Operating System Certification",
    issuer: "NPTEL / IIT",
    badge: "NPTEL",
    type: "Academic Certification",
    description: "In-depth mastery of process scheduling, virtual memory, concurrency, file systems, and kernel architecture."
  },
  {
    title: "Cisco Web Development & Technologies",
    issuer: "Cisco Networking Academy",
    badge: "Cisco",
    type: "Industry Certification",
    description: "Core Internet protocols, responsive web interfaces, and modern web application development standards."
  }
];
