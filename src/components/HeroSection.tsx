import { Button } from "@/components/ui/button";
import { Leaf, Phone, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="bg-hero min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Subtle leaf pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5C20 5 10 15 10 30C10 15 20 5 30 5ZM30 55C40 55 50 45 50 30C50 45 40 55 30 55Z' fill='%234CAF7D' fill-opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      }} />

      <div className="container mx-auto px-4 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-6 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide uppercase">Holistic Healing for Everyone</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-2">
              Natural Healing{" "}
              <span className="text-primary italic">Reimagined.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-3 font-body">
              Restore your body's balance with gentle, effective, and personalized
              homeopathic treatments. Safe for all ages.
            </p>
            <p className="text-base font-medium text-foreground mb-6 font-body">
              Dr. Neha Bharti, BHMS — Trusted Homeopath in Katihar, Bihar
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">Start Healing →</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+917004483089">
                  <Phone className="w-4 h-4 mr-1" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 border-t border-border pt-6">
              <div className="flex -space-x-3">
                {["bg-primary/30", "bg-accent/40", "bg-primary/20", "bg-accent/30"].map((bg, i) => (
                  <div key={i} className={`w-10 h-10 rounded-full ${bg} border-2 border-background flex items-center justify-center text-xs font-bold text-foreground/60`}>
                    {["R", "P", "A", "S"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">100+</span> Patients Healed
                </p>
              </div>
            </div>
          </div>

          {/* Right: Doctor profile card */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-[320px] sm:w-[360px] lg:w-[400px] rounded-2xl bg-card border shadow-xl overflow-hidden">
              {/* Photo placeholder */}
              <div className="w-full h-[280px] sm:h-[320px] bg-gradient-to-b from-primary/5 to-primary/15 flex flex-col items-center justify-center gap-3 relative">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-12 h-12 text-primary/40" />
                </div>
                <p className="text-muted-foreground font-medium text-sm">Add Doctor's Photo Here</p>
              </div>
              {/* Info card */}
              <div className="p-5 text-center">
                <h3 className="font-heading text-xl font-bold text-foreground">Dr. Neha Bharti</h3>
                <p className="text-primary font-semibold text-sm mt-1">BHMS (Homeopathy)</p>
                <p className="text-xs text-muted-foreground mt-1">Katihar, Bihar</p>
                <div className="flex items-center justify-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-1">4.8/5 on Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
