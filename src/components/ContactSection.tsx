import { MapPin, Globe, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Visit <span className="text-primary">Homeo Hive</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-sm border">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Clinic Address</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ward No. 27, Petrol Pump, Kalyan Chowk, near Dr. V.N. Gupta, Gami Tola, Katihar, Bihar 854105
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm border">
              <div className="flex gap-3">
                <Globe className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Google Plus Code</h3>
                  <p className="text-sm text-muted-foreground">GHRH+37 Katihar, Bihar</p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="w-full" asChild>
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

          {/* Map placeholder */}
          <div className="bg-card rounded-xl border shadow-sm overflow-hidden min-h-[300px] flex items-center justify-center">
            <iframe
              title="Homeo Hive Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.0!2d87.57!3d25.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDMzJzAwLjAiTiA4N8KwMzQnMTIuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 300 }}
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
