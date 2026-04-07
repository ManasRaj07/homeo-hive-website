import { Award, Star, Leaf } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center max-w-4xl mx-auto">
          {/* Circular portrait placeholder */}
          <div className="flex justify-center">
            <div className="w-[150px] h-[150px] rounded-full border-4 border-primary/20 bg-secondary/50 shadow-lg flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10" />
              <div className="relative z-10 text-center">
                <Leaf className="w-8 h-8 text-primary/40 mx-auto mb-1" />
                <p className="text-[10px] text-muted-foreground/70 px-2">Add Photo</p>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About <span className="text-primary">Dr. Neha Bharti</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 font-body">
              Dr. Neha Bharti is a qualified homeopathic physician (BHMS) practicing at Homeo Hive, Katihar.
              With a deep belief in the body's natural ability to heal, she offers personalized homeopathic care
              for patients of all ages. Her approach is rooted in treating the whole person — not just the symptoms
              — through safe, gentle, and side-effect-free medicine.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                BHMS Certified
              </span>
              <span className="inline-flex items-center gap-2 bg-gold/10 text-gold-foreground px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 text-gold fill-gold" />
                4.8 on Google
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
