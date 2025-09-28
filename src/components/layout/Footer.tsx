import { useState, useEffect } from "react";
import { Heart, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="border-t border-border/20 bg-slate-900">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-[500px]">
          {/* Brand */}
          <div>
            <div className="text-2xl font-display font-bold text-gradient mb-4">
              KOMULI DENIS
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Pioneering sustainable architecture for the future of urban living.
            </p>
            {/* <div className="text-slate-400 text-sm">
              <p>Kyambogo University Graduate</p>
              <p>Architecture & Sustainable Design</p>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white text-center">Quick Links</h4>
            <div className="flex flex-wrap gap-4">
              {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-slate-300 hover:text-primary transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Komuli Denis Architecture. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-sm">
            Built with <Heart className="h-4 w-4 text-red-400" /> by ACK
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-gradient-primary hover:opacity-90 transition-all duration-300 glow rounded-full w-12 h-12 p-0 shadow-lg animate-in fade-in slide-in-from-bottom-4"
          size="icon"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </footer>
  );
};

export default Footer;