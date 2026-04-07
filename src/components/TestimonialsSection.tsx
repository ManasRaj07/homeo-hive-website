import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    text: "Dr. Neha is very patient and listens carefully. My chronic skin problem improved within 2 months of treatment. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Devi",
    text: "My daughter's frequent cold and cough issues have reduced significantly. Dr. Bharti's medicines are gentle and effective. Thank you!",
    rating: 5,
  },
  {
    name: "Anil Sharma",
    text: "I was suffering from acidity for years. After homeopathic treatment at Homeo Hive, I feel so much better. The clinic is clean and well-maintained.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
            What Our <span className="text-primary">Patients Say</span>
          </h2>
          <p className="text-muted-foreground">Rated 4.8/5 on Google Maps</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-xl p-6 shadow-sm border">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic">"{t.text}"</p>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
