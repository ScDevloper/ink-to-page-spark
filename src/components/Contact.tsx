import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Let's Print Your Vision
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Ready to bring your ideas to life? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-8 md:mb-12">
          <Card className="text-center hover:shadow-elegant transition-all">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Call Us</CardTitle>
            </CardHeader>
            <CardContent>
              <a href="tel:0706455160" className="text-muted-foreground hover:text-primary transition-colors">
                070 6455 160
              </a>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-elegant transition-all">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Email Us</CardTitle>
            </CardHeader>
            <CardContent>
              <a href="mailto:hello@prizm.lk" className="text-muted-foreground hover:text-primary transition-colors">
                hello@prizm.lk
              </a>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-elegant transition-all">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Visit Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                No.654/19, Industrial Estate<br />
                Galle Road, Golumadama Junction<br />
                Ratmalana
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Follow Us</h3>
          <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.facebook.com/prizmdigitals/" target="_blank" rel="noopener noreferrer">
                <Facebook className="mr-2 h-5 w-5" />
                Facebook
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.instagram.com/prizmbyscprinting?igsh=MXQwN2kxbnBwNDRwdQ==" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.linkedin.com/company/prizmbyscprinting/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
