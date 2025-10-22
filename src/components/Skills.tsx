import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "React Query", "MUI", "Redux Tool-kits", "Tailwind CSS",]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Spring Boot", ".NET" ,"PostgreSQL", "MongoDB", "SparQL", "Express.js", "Nest.js"]
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

const Skills = () => {
  return (
    <section className="py-24 px-4 bg-muted/30" id="skills">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title}
              className="glass-card p-6 rounded-lg space-y-4 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <h3 className="text-xl font-semibold text-primary animate-fade-right" style={{ animationDelay: `${idx * 0.15 + 0.2}s` }}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <Badge 
                    key={skill}
                    variant="outline"
                    className="px-4 py-2 text-sm bg-muted/50 hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:-rotate-2 transition-all duration-200 cursor-default animate-scale-in"
                    style={{ animationDelay: `${idx * 0.15 + skillIdx * 0.05}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
