import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-building.jpg";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const ownerImage = imageRef.current;
    const cta = ctaRef.current;

    if (!container || !title || !subtitle || !ownerImage || !cta) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Simple fade-in for reduced motion
      gsap.set([title, subtitle, ownerImage, cta], { opacity: 1 });
      return;
    }

    // Set initial states
    gsap.set([title, subtitle, ownerImage, cta], { opacity: 0 });
    gsap.set(title, { y: 50, scale: 0.9 });
    gsap.set(subtitle, { y: 30 });
    gsap.set(ownerImage, { scale: 0.8, rotationY: -10 });
    gsap.set(cta, { y: 20 });

    // Create animation timeline
    const tl = gsap.timeline({ delay: 0.3 });

    tl.to(ownerImage, {
      opacity: 1,
      scale: 1,
      rotationY: 0,
      duration: 1.2,
      ease: "back.out(1.7)"
    })
    .to(title, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.8")
    .to(subtitle, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    .to(cta, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.2");

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-[100vh] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          ref={imageRef}
          src={heroImage}
          alt="Futuristic architecture building"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Owner Image */}
          <div ref={imageRef} className="flex justify-center lg:justify-end">
            <img
              src="/images/komuli.png"
              alt="Denis Komuli - Architect"
              className="h-auto max-w-[2500px]  object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1
              ref={titleRef}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-gradient"
            >
              Hey, I am
              <br />
              <span className="text-primary">Denis</span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed"
            >
              A passionate architect crafting innovative, sustainable designs that shape
              the future of urban living. Let's build something extraordinary together.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity glow font-semibold px-8 py-4 text-lg text-black"
              >
                <Play className="mr-2 h-5 w-5" />
                View My Work
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8 py-4 text-lg"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-1/3 right-1/4 w-6 h-6 border-2 border-accent rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent rounded-full animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;