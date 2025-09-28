import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: " Komulidennis001@gmail.com",
      href: "mailto:Komulidennis001@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+256 (778) 433-224",
      href: "tel:+256778433224",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bweyogere, Kampala, Uganda",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/alexischen", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/alexischen_arch", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/alexischen_arch", label: "Instagram" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/20">
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
              Let's Create Together
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Ready to discuss your next visionary project? Available for freelance work as well as full-time opportunities. Let's connect and bring your architectural dreams to life!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-bold mb-6">
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 group"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateX(0)" : "translateX(-20px)",
                        transition: "all 0.6s ease-out",
                      }}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground group-hover:glow transition-all duration-300">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm text-foreground/60">{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-foreground">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow My Work</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 rounded-full border border-border/20 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/50 hover:glow transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-gradient-card border-border/20 shadow-card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company / Organization
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-background/50 border-border/50 focus:border-primary"
                      placeholder="Your company or organization"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-primary resize-none"
                      placeholder="Tell me about your project vision, goals, timeline, and budget range..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity glow"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;