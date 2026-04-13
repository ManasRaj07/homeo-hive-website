import { Award, Star, Users, Clock } from "lucide-react";
import drPhoto from "@/assets/dr-neha-bharti.jpeg";

const credentials = [
  { icon: Clock, title: "3y+ Experience", sub: "Clinical Practice" },
  { icon: Award, title: "BHMS", sub: "Homeopathy" },
  { icon: Users, title: "100+ Patients", sub: "Successfully Treated" },
  { icon: Star, title: "4.8+ Rating", sub: "Trusted by Patients" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Meet Your Doctor</span>
        </div>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            Dr. Neha Bharti
          </h2>
          <p className="text-primary font-semibold mt-1">BHMS (Homeopathy)</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Text content */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-8 font-body text-base">
              Dr. Neha Bharti is a compassionate homeopathic practitioner practicing at Homeo Hive, Katihar.
              She provides personalized and safe treatments focused on long-term wellness and natural healing.
              Her approach is rooted in treating the whole person — not just the symptoms
              — through safe, gentle, and side-effect-free medicine.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((cred) => (
                <div key={cred.title} className="flex items-start gap-3 bg-card rounded-lg p-3 border">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <cred.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{cred.title}</p>
                    <p className="text-xs text-muted-foreground">{cred.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Circular portrait placeholder */}
          <div className="flex justify-center">
            <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] rounded-2xl border-4 border-primary/20 shadow-xl overflow-hidden">
              <img src={drPhoto} alt="Dr. Neha Bharti - Homeopathic Doctor" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
