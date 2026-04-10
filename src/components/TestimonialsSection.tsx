import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Katihar",
    initials: "RK",
    text: "Dr. Neha is very patient and listens carefully. My chronic skin problem improved within 2 months of treatment. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Devi",
    location: "Katihar",
    initials: "PD",
    text: "My daughter's frequent cold and cough issues have reduced significantly. Dr. Bharti's medicines are gentle and effective. Thank you!",
    rating: 5,
  },
  {
    name: "Anil Sharma",
    location: "Purnea",
    initials: "AS",
    text: "I was suffering from acidity for years. After homeopathic treatment at Homeo Hive, I feel so much better. The clinic is clean and well-maintained.",
    rating: 5,
  },
  {
    name: "Sunita Kumari",
    location: "Katihar",
    initials: "SK",
    text: "Hair loss treatment me 3 month me result mila. Doctor patiently samjhate hain. Very good experience!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Patient Reviews</span>
        </div>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            ⭐ Patient <span className="text-primary">Reviews</span>
          </h2>
          <div className="inline-flex flex-col items-center bg-card border rounded-xl px-6 py-4 shadow-sm">
            <p className="text-4xl font-bold text-foreground font-heading">4.8</p>
            <div className="flex gap-0.5 my-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-gold" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">Based on Google Reviews</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-xl p-5 shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-xs font-bold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
