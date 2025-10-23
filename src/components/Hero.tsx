import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { handleDownload } from "./helper/download";
import heroBg from "@/assets/images/hero-bg.jpg";
import avatar from "@/assets/images/avatar.jpeg";

const iconButton = [
  { href: "https://github.com/hoan301298", icon: Github },
  { href: "https://www.linkedin.com/in/hoan-tran-fin/", icon: Linkedin },
  { href: "mailto:tranhuuphuchoan@gmail.com", icon: Mail },
]

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[80vh] py-24 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-0" />
      
      {/* Content */}
      <div className="container relative z-10 px-4 ">
        <div className="max-w-3xl mx-auto pt-10 text-center space-y-6 animate-fade-up">
          <Avatar id="avatar" className="w-36 h-36 mx-auto ring-4 ring-primary/20 animate-scale-in hover:ring-8 hover:ring-primary/40 transition-all duration-300" >
            <AvatarImage src={avatar} alt="Hoan Tran" />
          </Avatar>
          
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Hi, I'm <span className="gradient-text">Hoan Tran</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground">
              Full-Stack Software Engineer
            </h2>
          </div>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Building dynamic, scalable, and user-focused web applications with passion and creativity.
            I love turning ideas into clean, high-performance solutions using modern technologies and cloud architecture.
            From crafting intuitive front-end experiences to designing reliable back-end systems, I’m dedicated to delivering products that are fast and secure.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect transition-all hover:scale-105"
              onClick={() => handleDownload('/New-portfolio/src/assets/pdf/HoanTran-Resume.pdf')}
            >
              Download Resume / CV
              <Download className="ml-2 h-4 w-4" />
            </Button>
            
            <div className="flex gap-3">
              {iconButton.map(element => 
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 hover:rotate-6 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: "0.3s" }}
                  asChild
                >
                  <a href={element.href} target="_blank" rel="noopener noreferrer">
                    <element.icon className="h-5 w-5" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-9 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-2.5 bg-primary rounded-full mt-1 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
