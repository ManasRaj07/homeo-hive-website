import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What treatments do you provide?",
    a: "We provide complete homeopathic treatment for skin, hair, allergy, respiratory, digestive, women's health, and many chronic diseases.",
  },
  {
    q: "How can I book an appointment?",
    a: "You can book an appointment through our website or directly call our clinic number for confirmation.",
  },
  {
    q: "Do you offer online consultation?",
    a: "Yes, online consultation is available for patients who cannot visit the clinic physically.",
  },
  {
    q: "Is homeopathic treatment safe for children?",
    a: "Absolutely! Homeopathic medicines are gentle, natural, and completely safe for children of all ages with no side effects.",
  },
  {
    q: "Where is your clinic located?",
    a: "Our clinic is located at Ward No. 27, Kalyan Chowk, Katihar, Bihar 854105. You can find us on Google Maps.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border rounded-xl px-5 shadow-sm"
              >
                <AccordionTrigger className="text-sm font-semibold text-foreground hover:text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
