import { useInView } from "react-intersection-observer";
import { Award, Download, Users, Building2, Briefcase, GraduationCap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Building2, label: "Projects Completed", value: "15+" },
    { icon: Briefcase, label: "Internships", value: "3" },
    { icon: GraduationCap, label: "Graduated", value: "2024" },
    { icon: Clock, label: "Years Experience", value: "5+" },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Bachelor's Degree in Architecture",
      description: "Graduated with honors from Kyambogo University, specializing in sustainable design.",
    },
    {
      year: "2023",
      title: "Final Year Project",
      description: "Designed a slaughterhouse, focusing on eco-friendly practices.",
    },
    {
      year: "2022",
      title: "Rural settlement project in Arua",
      description: "Participated in a community-driven rural settlement design project.",
    },
  ];

  return (
    <section id="about" className="py-20">
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
              About Komuli
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Visionary architect pushing the boundaries of sustainable design 
              and smart city integration through innovative technology
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="p-6 text-center bg-slate-50 border-slate-200 shadow-card hover:shadow-glow transition-all duration-300"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Biography */}
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gradient">
                Designing Tomorrow's Cities
              </h3>

              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  As a passionate and ambitious architecture graduate from Kyambogo
                   university, I am driven by the desire to design spaces that inspire, function,
                    and endure. My academic journey has equipped me with a strong foundation in 
                    architectural principles, design thinking, and sustainable practices, while 
                    also nurturing my creativity and problem-solving abilities. 
                </p>

                <p>
                  Beyond my technical training, I bring a fresh perspective that blends innovation
                   with a deep respect for cultural and environmental context. I believe architecture
                    is not just about buildings, but about shaping experiences and communities. 
                    Whether it is residential, commercial, or public spaces, my goal is to create
                     designs that respond thoughtfully to people’s needs while embracing modern 
                     design trends and sustainable solutions
                </p>

                <p>
                  I am eager to collaborate with clients who are looking for designs that resonate with their vision, as well as with employers who value creativity, discipline, and dedication.
                </p>
              </div>

              <Button
                size="lg"
                className="mt-8 bg-gradient-primary hover:opacity-90 transition-opacity glow"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Komuli_Denis_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Full Resume
              </Button>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-8 text-gradient">
                Career Timeline
              </h3>

              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className="flex gap-4 group"
                    style={{
                      animationDelay: `${(index + 4) * 0.1}s`,
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateX(0)" : "translateX(-20px)",
                      transition: "all 0.6s ease-out",
                    }}
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold group-hover:glow transition-all duration-300">
                      {item.year}
                    </div>

                    <div className="flex-grow">
                      <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-foreground/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;