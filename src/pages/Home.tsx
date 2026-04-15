import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import unknownFuture from "@/assets/unknown-future.jpg";

const Home = () => {
  const ref = useScrollReveal();

  return (
    <div className="min-h-screen bg-background" ref={ref}>
      {/* Hero */}
      <section className="container mx-auto px-4 pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-5xl scroll-reveal">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
            I'm your hybrid partner for this unknown future.
          </h1>
          <p className="text-base text-muted-foreground">
            Omnichannel experiences for brands, services and products
          </p>
        </div>
      </section>


      {/* Artwork */}
      <section className="scroll-reveal">
        <div className="md:aspect-auto aspect-square overflow-hidden">
          <img
            src={unknownFuture}
            alt="Abstract black and white artwork representing an unknown future"
            loading="lazy"
            className="w-full h-full object-cover object-[40%_center] md:object-center md:h-auto md:object-contain"
          />
        </div>
      </section>

      {/* Manifesto */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="scroll-reveal text-xl md:text-2xl font-medium leading-relaxed mb-12 text-foreground/90">
            Future isn't doomed, just a bit… wild.
          </p>

          <div className="space-y-8 text-base leading-relaxed text-foreground/70">
            <p className="scroll-reveal">
              With every scroll, swipe, and pixel, technology is reshaping how we live,
              feel, and interact. The line between digital and physical keeps fading,
              and the systems around us are becoming more responsive, immersive, and human-aware.
              Artificial Intelligence, Augmented/Virtual Realities, and multisensory design are
              not just new tools, they are changing how experiences are imagined and built.
            </p>

            <p className="scroll-reveal text-xl md:text-2xl font-medium text-foreground/90">
              Let's keep it grounded.
            </p>
            
          </div>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {[
            {
              title: "Strategy",
              items: ["Business Strategy", "Brand Positioning", "Campaign Development", "Research"],
            },
            {
              title: "Design",
              items: ["Content Strategy", "User Journey Mapping", "Service Design", "UX & UI"],
            },
            {
              title: "Delivery",
              items: ["Product Experience", "Prototyping & Testing", "Project Management", "Agile & Scrum"],
            },
          ].map((col, i) => (
            <div key={col.title} className={`scroll-reveal scroll-reveal-delay-${i + 1}`}>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="text-sm text-foreground/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* CTA */}
      <section className="container mx-auto px-4 py-24 md:py-32 text-center">
        <div className="scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Let's create something meaningful
          </h2>
          <div className="flex gap-8 justify-center">
            <Link
              to="/work"
              onClick={() => window.scrollTo(0, 0)}
              className="link-underline text-sm uppercase tracking-widest font-medium pb-1"
            >
              View Work
            </Link>
            <a
              href="mailto:hello@ritabarracha.com"
              className="link-underline text-sm uppercase tracking-widest font-medium pb-1"
            >
              Get in Touch
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-16">
            © 2026 Rita Barracha, Creative Strategist & Experience Designer
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
