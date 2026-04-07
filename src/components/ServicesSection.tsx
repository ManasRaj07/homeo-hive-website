import { Droplets, Heart, Baby, Activity, Wind, Apple } from "lucide-react";

const services = [
  { icon: Droplets, title: "Skin Disorders", desc: "Eczema, psoriasis, acne & more" },
  { icon: Heart, title: "Women's Health", desc: "PCOD, menstrual issues & hormonal care" },
  { icon: Baby, title: "Child Health", desc: "Immunity, growth & childhood infections" },
  { icon: Activity, title: "Chronic Diseases", desc: "Diabetes, BP, thyroid management" },
  { icon: Wind, title: "Respiratory Issues", desc: "Asthma, allergies & sinusitis" },
  { icon: Apple, title: "Digestive Problems", desc: "IBS, acidity & constipation relief" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Conditions We <span className="text-primary">Treat</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Comprehensive homeopathic care for a wide range of health conditions
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
