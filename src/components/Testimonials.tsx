import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, XYZ Corp",
    content: "PRIZM's quality on our annual report was outstanding! The colors were vibrant and the finish was professional.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Restaurant Owner",
    content: "Fast turnaround and excellent quality on our menu cards. The team was very responsive to our needs.",
    rating: 5
  },
  {
    name: "Aisha Patel",
    role: "Marketing Director",
    content: "Their business cards exceeded our expectations. The attention to detail and color accuracy is impressive.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 md:mb-4">What Our Clients Say</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Don't just take our word for it - hear from businesses and individuals who trust PRIZM
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
