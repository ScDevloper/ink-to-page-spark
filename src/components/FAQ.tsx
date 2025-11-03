import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of printing services do you offer?",
    answer: "We offer a comprehensive range of digital printing services including business cards, flyers, brochures, posters, banners, stationery, packaging, labels, stickers, invitations, calendars, catalogs, certificates, envelopes, letterheads, presentation folders, and roll-up banners.",
  },
  {
    question: "What is your turnaround time?",
    answer: "Our standard turnaround time varies depending on the product and quantity. Most business cards and flyers can be completed within 2-3 business days. Large format prints and banners typically take 3-5 business days. We also offer rush services for urgent orders.",
  },
  {
    question: "Do you provide design services?",
    answer: "Yes! Our experienced design team can help create custom designs for your printing needs. We can work with your ideas and brand guidelines to create professional, eye-catching designs that effectively communicate your message.",
  },
  {
    question: "What file formats do you accept?",
    answer: "We accept most common file formats including PDF, AI, EPS, PSD, JPEG, and PNG. For best results, we recommend providing print-ready PDF files with high resolution (300 DPI minimum) and with all fonts embedded or outlined.",
  },
  {
    question: "What are your payment terms?",
    answer: "We accept multiple payment methods including cash, bank transfers, M-Pesa, and credit/debit cards. For new customers, we typically require 50% deposit upfront with the balance due upon completion. Regular customers may be eligible for credit terms.",
  },
  {
    question: "Do you offer delivery services?",
    answer: "Yes, we provide delivery services within Nairobi and surrounding areas. Delivery charges vary based on location and order size. We can also arrange nationwide shipping for customers outside Nairobi.",
  },
  {
    question: "Can I see a sample before placing a large order?",
    answer: "Absolutely! We can provide proof prints or samples for your approval before proceeding with large quantity orders. This ensures you're completely satisfied with the quality, colors, and overall appearance.",
  },
  {
    question: "What is your minimum order quantity?",
    answer: "We don't have strict minimum order quantities for most products. Whether you need 10 business cards or 10,000 flyers, we're happy to help. However, unit prices decrease with larger quantities.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground px-4">
              Find answers to common questions about our printing services
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-background shadow-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold text-sm md:text-base pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
