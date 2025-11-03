import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

// Placeholder portfolio images - replace with actual work photos
const portfolioItems = [
  {
    title: "Annual Reports",
    description: "High-quality corporate documentation",
    category: "Corporate"
  },
  {
    title: "Business Cards",
    description: "Premium finishes and vibrant colors",
    category: "Business"
  },
  {
    title: "Packaging Solutions",
    description: "Custom boxes and labels",
    category: "Packaging"
  },
  {
    title: "Menu Cards",
    description: "Restaurant and cafe menus",
    category: "Hospitality"
  },
  {
    title: "Labels & Stickers",
    description: "Die-cut and custom shapes",
    category: "Labels"
  },
  {
    title: "Booklets & Catalogs",
    description: "Perfect binding and saddle stitch",
    category: "Publications"
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Work Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio showcasing the quality and precision of our digital printing services
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {portfolioItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <div className="text-center p-6">
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                            {item.category}
                          </span>
                          <h3 className="text-xl font-bold mt-2 mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <p className="text-center text-sm text-muted-foreground mt-8">
          * Portfolio images showcase our service categories. Upload your actual work photos to replace these placeholders.
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
