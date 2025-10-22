import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

const iconButton = [
  { href: "https://github.com/hoan301298", icon: Github},
  { href: "https://www.linkedin.com/in/hoan-tran-fin/", icon: Linkedin},
  { href: "https://www.instagram.com/ph_qang/", icon: Instagram},
]

const Contact = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="space-y-8 animate-fade-up">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I’m always open to exploring new projects and opportunities — feel free to get in touch!
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect transition-all hover:scale-105"
              asChild
            >
              <a href="mailto:tranhuuphuchoan@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
          </div>
          
          <div className="flex gap-4 justify-center pt-8">
            {iconButton.map(element => 
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground hover:scale-125 hover:rotate-12 transition-all duration-300 animate-bounce-slow"
                asChild
              >
                <a href={element.href} target="_blank" rel="noopener noreferrer">
                  <element.icon className="h-6 w-6" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
