import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

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
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide uppercase">Natural Healing</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Heal Naturally.{" "}
              <span className="text-primary">Live Fully.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-3 font-body">
              Dr. Neha Bharti, BHMS — Trusted Homeopath in Katihar, Bihar
            </p>
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">Safe</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">Gentle</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">Holistic</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">Book Appointment</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>

          {/* Right: Portrait placeholder */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-[300px] h-[380px] sm:w-[350px] sm:h-[440px] lg:w-[400px] lg:h-[500px] rounded-2xl border-4 border-primary/20 bg-secondary/50 shadow-xl flex flex-col items-center justify-center gap-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10" />
              <div className="relative z-10 text-center px-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <Leaf className="w-10 h-10 text-primary/40" />
                </div>
                <p className="text-muted-foreground font-medium text-sm">Add Doctor's Photo Here</p>
                <p className="text-xs text-muted-foreground/60 mt-1">Dr. Neha Bharti's Portrait</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
