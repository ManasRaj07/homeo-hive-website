import { Star, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: "5+", label: "Years Experience" },
  { icon: Users, value: "1000+", label: "Happy Patients" },
  { icon: Star, value: "4.8★", label: "Google Rating" },
  { icon: Award, value: "BHMS", label: "Certified Doctor" },
];

const StatsSection = () => {
  return (
    <section className="bg-foreground py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-heading text-3xl sm:text-4xl font-bold text-background mb-1">{stat.value}</p>
              <p className="text-sm text-background/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
