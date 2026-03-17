const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="container mx-auto px-4 pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            About
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Bridging the high-tech with the human touch
          </h1>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Bio */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Background
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-foreground/70">
              <p>
                I'm a Creative Strategist and Experience Designer with a passion
                for building digital products and services that connect people
                with technology in meaningful ways.
              </p>
              <p>
                With a background spanning brand strategy, UX research, service
                design, and product development, I bring a holistic perspective
                to every project — always starting with the human need and
                working outward to the technical solution.
              </p>
              <p>
                I thrive on finding the sweet spot where innovation and empathy
                intersect. For me, this means keeping a finger on the pulse of
                the latest media and technology, leveraging new tools not just
                to solve problems but to envision new possibilities.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Philosophy
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-foreground/70">
              <p>
                Today's technology gives us unprecedented answers to human
                needs, yet it also creates an endless loop of new challenges.
                It's a virtuous cycle where breakthroughs lead to better
                solutions, which spark more questions.
              </p>
              <p>
                Will there ever be a limit to this cycle? Maybe not. But that's
                the thrill of it — there's always another "what if?" and another
                chance to create something meaningful, immersive, and, hopefully,
                a little bit magical.
              </p>
              <p>
                By continually exploring emerging tech and the evolving human
                experience, I design with the future in mind. Whether it's
                mapping user journeys or engineering product experiences, my
                approach bridges creativity and strategy into alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Awards */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-12">
          Awards & Recognition
        </h2>
        <div className="space-y-0">
          {[
            { year: "2018", award: "German Design Award", detail: "Excellence Communications Design Web — Winner", project: "Liip AG / Freitag - Neo" },
            { year: "2017", award: "Best of Swiss Web Award (x6)", detail: "Creation Gold · Business Silver · Mobile Web Bronze · Marketing Bronze · Master Award · Usability Shortlist", project: "Liip AG / Freitag - Neo" },
            { year: "2017", award: "Swiss E-Commerce Award", detail: "eCommerce Spezialpreis", project: "Liip AG / Freitag - Neo" },
            { year: "2016", award: "Best of Swiss Web Award (x3)", detail: "Innovation Silver · Public Affairs Bronze & Silver", project: "Liip AG / Open Government Data & WeCollector" },
            { year: "2015", award: "Google / NZZ Sonderpreis", detail: "VR-Hackday", project: "Living Stories" },
            { year: "2014", award: "Best of Swiss Web Award", detail: "Public Affairs Silver", project: "Opendata Admin Portal" },
            { year: "2013", award: "Red Dot Award", detail: "Communication Design Award", project: "Process AG / Rappold Köhli" },
            { year: "2012", award: "Leonardo da Vinci Scholarship", detail: "Funded internship as Multimedia Designer", project: "Process AG, Zurich" },
            { year: "2007", award: "Alfama Digital Photography Marathon", detail: "Best PhotoSet — 2nd Prize", project: "Org APPA" },
          ].map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[60px_1fr_1fr] md:grid-cols-[80px_1fr_1fr_1fr] py-5 border-b border-border gap-4"
            >
              <span className="text-sm text-foreground/40">{item.year}</span>
              <span className="text-sm font-medium text-foreground">{item.award}</span>
              <span className="text-sm text-foreground/60 hidden md:block">{item.detail}</span>
              <span className="text-sm text-foreground/40 text-right">{item.project}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Experience */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-12">
          Experience & Education
        </h2>
        <div className="space-y-0">
          {[
            { role: "Senior Experience Designer", company: "Digital Agency", period: "2021 — Present" },
            { role: "UX Strategist", company: "Tech Startup", period: "2019 — 2021" },
            { role: "Product Designer", company: "Innovation Lab", period: "2017 — 2019" },
            { role: "MA Interaction Design", company: "Royal College of Art", period: "2015 — 2017" },
            { role: "BA Communication Design", company: "University of Lisbon", period: "2011 — 2015" },
          ].map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 py-5 border-b border-border"
            >
              <span className="text-sm font-medium text-foreground">{item.role}</span>
              <span className="text-sm text-foreground/60">{item.company}</span>
              <span className="text-sm text-foreground/40 text-right">{item.period}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Contact */}
      <section className="container mx-auto px-4 py-24 md:py-32 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
          Let's work together
        </h2>
        <a
          href="mailto:hello@example.com"
          className="link-underline text-sm uppercase tracking-widest font-medium pb-1"
        >
          Start a Conversation
        </a>
      </section>
    </div>
  );
};

export default About;
