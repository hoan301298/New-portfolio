import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [showAvatar, setShowAvatar] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = document.getElementById("nav").offsetHeight;
      const avatarHeight = document.getElementById("avatar").offsetHeight;
      setShowAvatar( window.scrollY > avatarHeight + navHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth"});
  };

  return (
    <nav id="nav" className="fixed top-0 w-full z-50 glass-card border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold gradient-text">Portfolio</div>
          
          <div className="flex items-center gap-6">
            {showAvatar && (
              <Avatar className="w-12 h-12 mx-auto ring-4 ring-primary/20 animate-scale-in hover:ring-8 hover:ring-primary/40 transition-all duration-300" id="avatar">
                <AvatarImage src="/avatar.jpeg" alt="Hoan Tran" />
              </Avatar>
            )}
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Project
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
