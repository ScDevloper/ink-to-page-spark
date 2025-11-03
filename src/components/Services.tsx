import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CreditCard, FileText, Tag, UtensilsCrossed, BookOpen, StickyNote,
  Award, Mail, Calendar, FolderOpen, Package, TentTree, Ticket,
  Newspaper, BookmarkCheck
} from "lucide-react";

const services = [
  {
    icon: CreditCard,
    title: "Business Cards",
    description: "Choose from a variety of finishes and styles to suit your brand."
  },
  {
    icon: FileText,
    title: "Flyers & Brochures",
    description: "Spread your message effectively with vibrant flyers and brochures."
  },
  {
    icon: Tag,
    title: "Labels & Stickers",
    description: "Boost your brand identity with custom labels and stickers."
  },
  {
    icon: UtensilsCrossed,
    title: "Menus & Catalogue",
    description: "Attract customers with stunning menus that elevate the dining experience."
  },
  {
    icon: BookOpen,
    title: "Booklets & Catalogs",
    description: "Showcase your products and services with captivating booklets and catalogs!"
  },
  {
    icon: StickyNote,
    title: "Notepads & Stationery",
    description: "Stay organized with custom notepads and stationery designed to match your brand's style."
  },
  {
    icon: Mail,
    title: "Invitations & Wedding Cards",
    description: "Invite in style with personalized event cards"
  },
  {
    icon: BookmarkCheck,
    title: "Book Marks & Tags",
    description: "Custom bookmarks & tags—perfect for gifts, branding, and book lovers!"
  },
  {
    icon: Award,
    title: "Certificates",
    description: "Make every achievement memorable with high-quality certificates"
  },
  {
    icon: Mail,
    title: "Letter Heads/Envelopes",
    description: "Complete your corporate identity with custom letterheads & envelopes"
  },
  {
    icon: Calendar,
    title: "Wall/Desk/Pocket Calendars",
    description: "Keep your schedule at your fingertips with stylish customized calendars"
  },
  {
    icon: FolderOpen,
    title: "Dockets/Folders",
    description: "Keep your documents secure and stylish with branded dockets & folders"
  },
  {
    icon: Package,
    title: "Emporium Corporate Pack",
    description: "Everything your brand needs in one premium corporate pack"
  },
  {
    icon: FileText,
    title: "Annual Report/Project",
    description: "High-impact projects and annual reports for your business success"
  },
  {
    icon: Newspaper,
    title: "Magazine/News Letters",
    description: "Transforming ideas into visually stunning magazines & newsletters"
  },
  {
    icon: Ticket,
    title: "Ticket Books/Vouchers",
    description: "Make every event and offer unforgettable with custom tickets & vouchers"
  },
  {
    icon: Package,
    title: "Packaging Solutions",
    description: "Bringing your packaging ideas to life with cutting-edge digital printing."
  },
  {
    icon: TentTree,
    title: "Tent Card",
    description: "Bringing brands closer to customers—tent cards that make an impact."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Printing Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            From business essentials to creative projects, we deliver vibrant colors, sharp details, and fast turnaround times.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
