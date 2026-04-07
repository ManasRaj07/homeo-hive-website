import { Award, UserCheck, ShieldCheck, Star } from "lucide-react";

const reasons = [
  { icon: Award, title: "BHMS Qualified Doctor" },
  { icon: UserCheck, title: "Personalized Treatment" },
  { icon: ShieldCheck, title: "No Side Effects" },
  { icon: Star, title: "4.8 ⭐ Google Rated" },
];

const WhyChooseSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-primary-foreground text-center mb-10">
          Why Choose Homeo Hive?
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {reasons.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/15 flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <p className="text-sm font-semibold text-primary-foreground">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
