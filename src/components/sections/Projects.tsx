import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import projectTower from "@/assets/project-tower.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectCultural from "@/assets/project-cultural.jpg";
import projectOffice from "@/assets/project-office.jpg";

interface Project {
  id: string;
  title: string;
  category: string;
  year: number;
  location: string;
  description: string;
  image: string;
  tags: string[];
  featured: boolean;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Neo Tower Complex",
    category: "Commercial",
    year: 2024,
    location: "Tokyo, Japan",
    description: "A revolutionary 80-story mixed-use tower featuring adaptive glass facades, vertical gardens, and AI-powered climate control systems.",
    image: projectTower,
    tags: ["Skyscraper", "AI Integration", "Sustainable", "Mixed-Use"],
    featured: true,
  },
  {
    id: "2", 
    title: "Vertis Residential",
    category: "Residential",
    year: 2023,
    location: "Copenhagen, Denmark",
    description: "Sustainable residential complex with integrated vertical farming, renewable energy systems, and community spaces designed for urban living.",
    image: projectResidential,
    tags: ["Eco-Friendly", "Vertical Farming", "Community", "Renewable Energy"],
    featured: true,
  },
  {
    id: "3",
    title: "Flux Cultural Center", 
    category: "Cultural",
    year: 2023,
    location: "Barcelona, Spain",
    description: "An immersive cultural center with morphing architectural elements, interactive installations, and adaptive performance spaces.",
    image: projectCultural,
    tags: ["Interactive", "Cultural", "Adaptive Design", "Innovation"],
    featured: false,
  },
  {
    id: "4",
    title: "Quantum Office Park",
    category: "Commercial",
    year: 2022,
    location: "San Francisco, USA", 
    description: "Future-forward office complex with biophilic design principles, smart building technologies, and flexible co-working spaces.",
    image: projectOffice,
    tags: ["Smart Building", "Biophilic", "Co-working", "Technology"],
    featured: false,
  },
];

const categories = ["All", "Commercial", "Residential", "Cultural"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-muted/20">
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
              Featured Projects
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Explore a curated selection of innovative architectural projects 
              that push the boundaries of design and sustainability
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-gradient-primary glow" 
                  : "border-primary/30 hover:border-primary/60"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`group overflow-hidden bg-gradient-card border-border/20 shadow-card hover:shadow-elevated transition-all duration-500 hover:scale-[1.02] ${
                  project.featured ? "md:col-span-2" : ""
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <div className={`flex flex-col ${project.featured ? "md:flex-row" : ""}`}>
                  {/* Image */}
                  <div className={`relative overflow-hidden ${project.featured ? "md:w-1/2" : "aspect-[4/3]"}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`p-6 flex flex-col justify-between ${project.featured ? "md:w-1/2" : ""}`}>
                    <div>
                      <div className="flex items-center gap-4 text-sm text-foreground/60 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {project.year}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {project.location}
                        </div>
                      </div>

                      <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-foreground/80 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="self-start border-primary/50 text-primary hover:bg-primary/10"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Case Study
                    </Button>
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

export default Projects;