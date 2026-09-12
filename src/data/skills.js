export const skillCategories = [
  { id: "all", label: "All Technologies" },
  { id: "languages", label: "Programming Languages" },
  { id: "backend", label: "Backend Development" },
  { id: "frontend", label: "Frontend Development" },
  { id: "databases", label: "Databases" },
  { id: "tools", label: "Tools & DevOps" }
];

export const categorizedSkills = [
  {
    category: "languages",
    title: "Programming Languages",
    iconKey: "java",
    accent: "#06b6d4",
    skills: [
      { name: "Java", level: "Core & Advanced", highlight: "OOP, Collections, Multithreading, Streams", iconKey: "java" },
      { name: "Python", level: "Intermediate", highlight: "Scripting, Automation, Algorithms", iconKey: "python" }
    ]
  },
  {
    category: "frontend",
    title: "Frontend Development",
    iconKey: "react",
    accent: "#22d3ee",
    skills: [
      { name: "HTML5", level: "Semantic Web", highlight: "Accessibility, SEO, Modern Standards", iconKey: "html5" },
      { name: "CSS3", level: "Modern Styling", highlight: "Tailwind CSS, Flexbox, Glassmorphism", iconKey: "css3" },
      { name: "JavaScript", level: "Modern Client", highlight: "DOM Manipulation, Event Architecture", iconKey: "javascript" },
      { name: "React.js", level: "Modern Hooks & SPA", highlight: "State Management, Virtual DOM, Components", iconKey: "react" }
    ]
  },
  {
    category: "backend",
    title: "Backend Development",
    iconKey: "springboot",
    accent: "#6366f1",
    skills: [
      { name: "Java", level: "Enterprise EE", highlight: "Object-Oriented Backend Architecture", iconKey: "java" },
      { name: "Servlets", level: "Java EE Engine", highlight: "HTTP Request/Response, Filter Pipelines", iconKey: "servlets" },
      { name: "JDBC", level: "Native DB Driver", highlight: "Connection Pooling, PreparedStatements", iconKey: "jdbc" },
      { name: "Spring Boot", level: "Framework Core", highlight: "REST APIs, Dependency Injection, MVC", iconKey: "springboot" },
      { name: "Hibernate", level: "ORM Mapping", highlight: "JPA Entities, HQL, Session Management", iconKey: "hibernate" },
      { name: "Flask", level: "Micro-framework", highlight: "Lightweight Python REST Services", iconKey: "flask" },
      { name: "Django", level: "Full-Stack Web", highlight: "MVT Architecture, ORM, Admin Engine", iconKey: "django" }
    ]
  },
  {
    category: "databases",
    title: "Databases",
    iconKey: "mysql",
    accent: "#818cf8",
    skills: [
      { name: "MySQL", level: "Primary RDBMS", highlight: "Schema Normalization, Indexes, Relations", iconKey: "mysql" },
      { name: "PostgreSQL", level: "Advanced Relational", highlight: "ACID Transactions, Complex Constraints", iconKey: "postgresql" },
      { name: "SQLite", level: "Embedded DB", highlight: "Zero-Config Local Storage & Caching", iconKey: "sqlite" },
      { name: "MongoDB", level: "NoSQL Document", highlight: "Collections, Aggregations, JSON BSON", iconKey: "mongodb" }
    ]
  },
  {
    category: "tools",
    title: "Tools & Platforms",
    iconKey: "git",
    accent: "#38bdf8",
    skills: [
      { name: "Git", level: "Version Control", highlight: "Branching, Merging, Rebase Workflows", iconKey: "git" },
      { name: "GitHub", level: "Cloud Repository", highlight: "PR Reviews, Collaboration, CI/CD", iconKey: "github" },
      { name: "Postman", level: "API Testing", highlight: "Endpoint Validation, Headers, Automation", iconKey: "postman" },
      { name: "VS Code", level: "Primary Editor", highlight: "Extensions, Debugging, Productivity", iconKey: "vscode" },
      { name: "Eclipse", level: "Java IDE", highlight: "Maven Tooling, Server Deployments", iconKey: "eclipse" }
    ]
  }
];
