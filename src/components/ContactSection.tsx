import { MapPin, Globe, ExternalLink, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactDetails = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["Ward No. 27, Petrol Pump, Kalyan Chowk,", "near Dr. V.N. Gupta, Gami Tola,", "Katihar, Bihar 854105"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 70044 83089"],
    href: "tel:+917004483089",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["nehaa0224@gmail.com"],
    href: "mailto:homeohive@gmail.com",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    lines: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: Closed"],
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Visit Us</span>
        </div>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Find Our <span className="text-primary">Clinic</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            We are conveniently located in the heart of Katihar. Drop by for a consultation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact cards */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Contact Details</h3>
            {contactDetails.map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-5 shadow-sm border flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground uppercase tracking-wide mb-1">{item.title}</h4>
                  {item.lines.map((line, i) => (
                    item.href ? (
                      <a key={i} href={item.href} className="block text-sm text-primary hover:underline">{line}</a>
                    ) : (
                      <p key={i} className="text-sm text-muted-foreground">{line}</p>
                    )
                  ))}
                </div>
              </div>
            ))}
            <Button variant="hero" size="lg" className="w-full mt-4" asChild>
              <a
                href="https://www.google.com/maps/search/GHRH%2B37+Katihar+Bihar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Get Directions
              </a>
            </Button>
          </div>

          {/* Map */}
          <div className="bg-card rounded-xl border shadow-sm overflow-hidden min-h-[400px] flex items-center justify-center">
            <iframe
              title="Homeo Hive Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.0!2d87.57!3d25.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDMzJzAwLjAiTiA4N8KwMzQnMTIuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
