import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: "Architecture & Design",
      items: [
        { name: "Sustainable Design", level: 95 },
        { name: "BIM Software", level: 90 },
        { name: "Urban Planning", level: 70 },
        { name: "3D Modeling", level: 92 },
      ],
    },
    {
      category: "Technical/BIM",
      items: [
        { name: "Revit", level: 70 },
        { name: "Archicard", level: 90 },
        { name: "SketchUp", level: 80 }
      ],
    },
    {
      category: "Visualization",
      items: [
        { name: "TwinMotion", level: 70 },
        { name: "Adobe Creative suits", level: 70 },
        { name: "Lumion", level: 80 }
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
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
              Core Competencies
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              A comprehensive skill set combining traditional architectural excellence
              with cutting-edge technology and sustainable innovation
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <Card
                key={skillGroup.category}
                className="p-8 bg-slate-50 border-slate-200 shadow-card hover:shadow-glow transition-all duration-300"
                style={{
                  animationDelay: `${groupIndex * 0.2}s`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <h3 className="text-2xl font-display font-bold mb-6 text-gradient">
                  {skillGroup.category}
                </h3>

                <div className="space-y-6">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="group"
                      style={{
                        animationDelay: `${(groupIndex * 0.2) + (skillIndex * 0.1)}s`,
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground/90 group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-primary">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: inView ? `${skill.level}%` : "0%",
                            animationDelay: `${(groupIndex * 0.2) + (skillIndex * 0.1) + 0.5}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;