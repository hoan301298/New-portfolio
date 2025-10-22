import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/assets/content/experiences";
import { useState } from "react";
import PdfModal from "@/components/ui/pdfModal";

const Experiences = () => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [pdfUrl, setPdfUrl] = useState<string>();

  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work <span className="gradient-text">Experience</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software engineering
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="glass-card hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02] hover:-translate-x-2 transition-all duration-300 animate-fade-left group"
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={exp.certificate ? () => {
                setToggleModal(true);
                setPdfUrl(exp.certificate);
              } : undefined}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">{exp.title}</CardTitle>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className=" text-sm w-fit px-4 py-2 group-hover:scale-110 transition-transform duration-300">
                    {exp.location} | {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">{exp.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="hover:text-foreground hover:translate-x-1 transition-all duration-200">{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-sm hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <PdfModal
        isOpen={toggleModal}
        onClose={() => setToggleModal(false)}
        pdfUrl={pdfUrl}
      />
    </section>
  );
};

export default Experiences;