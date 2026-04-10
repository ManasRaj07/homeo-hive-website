import { Droplets, Heart, Baby, Activity, Wind, Apple } from "lucide-react";

const services = [
  { icon: Droplets, title: "Skin Disorders", desc: "Eczema, psoriasis, acne & more", emoji: "🌿" },
  { icon: Heart, title: "Women's Health", desc: "PCOD, menstrual issues & hormonal care", emoji: "🌸" },
  { icon: Baby, title: "Child Health", desc: "Immunity, growth & childhood infections", emoji: "👶" },
  { icon: Activity, title: "Chronic Diseases", desc: "Diabetes, BP, thyroid management", emoji: "🩺" },
  { icon: Wind, title: "Respiratory Issues", desc: "Asthma, allergies & sinusitis", emoji: "🫁" },
  { icon: Apple, title: "Digestive Problems", desc: "IBS, acidity & constipation relief", emoji: "💊" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Specialities</span>
        </div>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Comprehensive <span className="text-primary">Care</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            We specialize in treating chronic and acute conditions using time-tested homeopathic principles.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="text-3xl mb-4">{service.emoji}</div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
              <a href="#contact" className="text-xs font-bold text-primary uppercase tracking-wider hover:underline">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
