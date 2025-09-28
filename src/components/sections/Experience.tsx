import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Building2, Award, Users, TrendingUp } from "lucide-react";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      icon: Building2,
      title: "Trainee Architect",
      company: "New Theme Consult Ltd",
      period: "2022",
      description: "I learned and experienced various aspects related to architectural proffessionalism, how and when to engage other professionals in the project, project planning and project management.",
      achievements: [
        "Designed 5+ residential and commercial projects",
        "Involved in project planning and management",
        "Involved in client meetings and presentations"
      ]
    },
    {
      icon: Building2,
      title: "Trainee Architect",
      company: "Architech consults ltd, Kampala",
      period: "2023",
      description: "Involved in many projects including the design of residential houses and commercial buildings.",
      achievements: [
        "Designed 10+ residential and commercial projects",
        "Gained hands-on experience with sustainable design practices",
        "Collaborated with senior architects and engineers"
      ]
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gradient">
              Professional Experience
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              A selection of key roles and achievements that highlight my journey in shaping sustainable and innovative architectural solutions.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={exp.title}
                className="p-8 bg-gradient-card border-border/20 shadow-card hover:shadow-glow transition-all duration-300"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(-20px)",
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                      <exp.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-display font-bold text-gradient mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-primary mb-2">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-sm font-medium text-foreground/70 bg-muted px-3 py-1 rounded-full">
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-foreground/80 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="grid md:grid-cols-3 gap-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div
                          key={achIndex}
                          className="flex items-center gap-2 text-sm text-foreground/70"
                          style={{
                            animationDelay: `${(index * 0.2) + (achIndex * 0.1)}s`,
                          }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;