import { pdf } from "../pdf";

export const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "React Query", "MUI", "Redux Tool-kits", "Tailwind CSS",]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Spring Boot", ".NET", "PostgreSQL", "MongoDB", "SparQL", "Express.js", "Nest.js"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "AWS", "Git", "CI/CD", "Kubernetes", "Azure", "Cloudflare", "Linux"]
  },
  {
    title: "Other",
    skills: ["REST APIs", "Socket.IO", "Testing", "Agile", "System Design", "GraphQL", "IoT", "MQTT"]
  }
];

export const experiences = [
  {
    title: "Software Developer Trainee, Connectivity & Instrumentation",
    company: "Metso Oy",
    location: "Espoo, Uusimaa, FI",
    period: "Apr 2025 - Aug 2025",
    description: "Contributed to Metso’s Mineral Digital Development segment, building cutting-edge Edge applications with React, TypeScript, and .NET 8. Enhanced IoT connectivity, Docker, and Azure IoT Hub integration to deliver reliable, scalable industrial solutions.",
    achievements: [
      "Implemented 12+ new features with React, TypeScript, and C# .NET 8 for 8+ Metso Edge apps focusing on integration.",
      "Wrote integration tests and debugged code, improving reliability, code review, and deployment efficiency.",
      "Commissioned and tested 10+ Edge Control Panels (ECP) and Industrial PCs (IPC) with sensors for global industrial usage.",
      "Managed IoT connectivity and Docker, enhancing Azure IoT Hub integration, networking, and security with Azure, Cloudflare, and Linux.",
      "Documented user guides and features in Confluence, reducing support needs.",
      "Collaborated with 9 developers and cross-functional teams to improve large-scale industrial solutions in Metso’s Mineral Digital Development segment."
    ],
    technologies: ["React", "TypeScript", ".NET", "Redux", "Industrial Protocols", "CI/CD", "Linux", "Restful APIs", "Jira", "Confluence", "Rancher", "Azure PaaS", "Docker", "Kubernetes", "Cloudflare"],
    certificate: pdf.cert,
  },
  {
    title: "Full-Stack Developer",
    company: "RunUp Solutions",
    location: "Vantaa, Uusimaa, FI",
    period: "Nov 2024 - Apr 2025",
    description: "Designed and developed a full-stack web application with scalable backend microservices, reusable frontend components, and integrated Google & LinkedIn authentication. Improved deployment reliability through optimized CI/CD pipelines and enhanced user experience via UI/UX testing.",
    achievements: [
      "Built database structures and backend microservices for scalable, efficient integration with the front end.",
      "Developed reusable components and integrated Google & LinkedIn authentication, ensuring responsive design.",
      "Optimized and maintained CI/CD pipelines for reliable, automated deployments.",
      "Created and executed test cases to resolve UI/UX issues and improve user experience."
    ],
    technologies: ["React", "TypeScript", "C# .NET", "PostgreSQL", "Netlify", "Azure DevOps", "CI/CD", "Redux", "Material UI", "OAuth", "React Testing Library"],
    certificate: null,
  },
  {
    title: "Software Developer Intern",
    company: "Medical Claims International (MCI Manager)",
    location: "Madrid, Spain",
    period: "Nov 2023 - Feb 2024",
    description: "Developed a training platform with a microservices architecture, building frontend features in Node.js and React and managing MySQL and MongoDB databases. Improved reliability with automation testing, documentation, and database optimizations for multiple applications.",
    achievements: [
      "Developed microservices architecture and connections for a training platform.",
      "Used Node.js and React to build map and course progression features, with MySQL and MongoDB for database management.",
      "Implemented automation testing and documentation to support the frontend team.",
      "Performed database-centric tasks including query tuning, stored procedure creation, and code review for two new applications (MCI Assist & MCI Manager)."
    ],
    technologies: ["React", "JavaScript", "Node.js", "Express.js", "CSS", "REST APIs", "MySQL", "MongoDB"],
    certificate: null,
  },
  {
    title: "Software Developer Intern",
    company: "Wepost AS",
    location: "Trondheim, Norway",
    period: "Jun 2023 - Oct 2023",
    description: "Developed Wepost’s official application, designing system and database diagrams with Appfarm, ensuring responsive UX/UI across devices, contributing to the CI/CD pipeline, and managing server-side and database updates using Node.js and PostgreSQL.",
    achievements: [
      "Developed Wepost's official application and designed system and database diagrams using Appfarm.",
      "Tested UX/UI and ensured flexible responsiveness between desktop and mobile applications.",
      "Contributed to the CI/CD pipeline process in collaboration with the IT team.",
      "Prepared new application versions on the server-side and database using Node.js and PostgreSQL."
    ],
    technologies: ["Share Point", "Appfarm", "Node.js", "Nest.js", "PostgreSQL", "CI/CD"],
    certificate: null,
  }
];

export const projects = [
  {
    title: "Healthcare Assistance Platform",
    description: "A full-stack web application providing healthcare assistance with real-time chat and searching medical facilities on map, appointment booking, and patient-doctor interaction using React.js, Node.js, and Spring Boot.",
    tech: ["MERN Stack", "JWT token", "Java Spring Boot", "Docker", "Google APIs", "Socket.IO", "Authentication", "HTML", "CSS", "Crypto-JS", "NextUI"],
    github: "https://github.com/hoan301298/Healthcare-Assistance/tree/main",
    demo: "https://www.theseus.fi/handle/10024/861496"
  },
  {
    title: "NASA Mission Control",
    description: "This project built with a React.js frontend and a Node.js backend. The project simulates a space mission control system where users can schedule and manage space launches.",
    tech: ["React", "JavaScipt", "Node.js", "Express.js", "MongoDB", "Docker", "Arwes", "Restful APIs"],
    github: "https://github.com/hoan301298/Nasa-mission-control",
    demo: "https://nasa-mission-control-fi.netlify.app/"
  },
  {
    title: "Ekseli Spreadsheet",
    description: "A school project developed in collaboration with Ekseli, where I designed and built a user-friendly interface that uses SPARQL queries to insert and manage data within Ekseli’s database server.",
    tech: ["React", "TypeScript", "SparQL", "Dev Extreme", "Restful APIs"],
    github: "https://dev.azure.com/e2000606/_git/SEP2023%20-%20Ekseli%201%20Spreadsheet",
    demo: "https://www.youtube.com/watch?v=7fK3-RTNm1g"
  },
  {
    title: "User Story",
    description: "Using Python paramiko to access SSH server and check file existed. Set timer to run and check everyday and also clear it. Check the file Error.txt to get more information and the file result.log for the result.",
    tech: ["Python", "Paramiko", "SSH", "Logging"],
    github: "https://github.com/hoan301298/User-Story",
    demo: null
  }
];