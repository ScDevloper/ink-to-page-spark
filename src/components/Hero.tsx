import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import heroImage1 from "@/assets/hero-printing.jpg";
import heroImage2 from "@/assets/hero-printing-2.jpg";
import heroImage3 from "@/assets/hero-printing-3.jpg";
import heroImage4 from "@/assets/hero-printing-4.jpg";
import { ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <Carousel
        className="absolute inset-0 z-0"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
            PRIZM
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            Your Trusted Digital Printing Partner
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            PRIZM stands at the forefront of digital printing, delivering exceptional quality and innovation. 
            We specialize in premium printing services that cater to businesses, creatives, and individuals.
          </p>
          <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Button 
              size="lg" 
              variant="hero"
              onClick={scrollToServices}
              className="group"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={scrollToContact}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
