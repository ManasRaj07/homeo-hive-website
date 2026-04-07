const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo & tagline */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-2">
              Homeo <span className="text-primary">Hive</span>
            </h3>
            <p className="text-sm text-background/60">
              Healing naturally, one patient at a time.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-background/80">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/50 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-background/80">Contact</h4>
            <p className="text-sm text-background/50 leading-relaxed">
              Ward No. 27, Kalyan Chowk,<br />
              Katihar, Bihar 854105
            </p>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-6 text-center">
          <p className="text-xs text-background/40">
            © 2025 Homeo Hive. Dr. Neha Bharti, BHMS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
