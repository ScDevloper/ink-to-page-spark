import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Contact />
      
      <footer className="bg-foreground/5 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} PRIZM by SC Printing. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
