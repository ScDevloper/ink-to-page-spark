import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar with contact info */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs md:text-sm">
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              <a href="tel:+254743606325" className="flex items-center gap-1 md:gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline">+254 743 606 325</span>
                <span className="sm:hidden">Call</span>
              </a>
              <a href="mailto:sales@prizm.co.ke" className="flex items-center gap-1 md:gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline">sales@prizm.co.ke</span>
                <span className="sm:hidden">Email</span>
              </a>
            </div>
            <div className="hidden md:flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Nairobi, Kenya</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-3 md:py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              PRIZM
            </div>
            <div className="text-xs text-muted-foreground hidden sm:block">Digital Printing</div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <Button onClick={() => scrollToSection("contact")} size="sm">
                Get Quote
              </Button>
            </div>

            <ThemeToggle />

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col gap-6 mt-8">
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                  >
                    Services
                  </button>
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                  >
                    Portfolio
                  </button>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                  >
                    Testimonials
                  </button>
                  <button
                    onClick={() => scrollToSection("faq")}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                  >
                    FAQ
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                  >
                    Contact
                  </button>
                  <Button onClick={() => scrollToSection("contact")} size="lg" className="mt-4">
                    Get Quote
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};
