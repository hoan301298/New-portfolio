import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/assets/content/data";

const Projects = () => {
  return (
    <section className="py-24 px-4 bg-muted/30" id="projects">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Card 
              key={project.title}
              className="flex flex-col glass-card border-border hover:border-primary hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group animate-slide-up"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary group-hover:scale-105 transition-all duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline"
                      className="text-xs border-primary/50 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="mt-auto gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button 
                  size="sm"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
