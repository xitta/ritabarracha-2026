import { useScrollReveal } from "@/hooks/useScrollReveal";
import ritaProfile from "@/assets/rita-profile.png";

const About = () => {
  const ref = useScrollReveal();

  return (
    <div className="min-h-screen bg-background" ref={ref}>
      {/* Hero */}
      <section className="container mx-auto px-4 pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
          <div className="max-w-4xl scroll-reveal">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              About
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              I like making sense of things
            </h1>
          </div>
          <div className="scroll-reveal scroll-reveal-delay-1 shrink-0">
            <img
              src={ritaProfile}
              alt="Rita Barracha"
              className="w-56 h-56 md:w-80 md:h-80 object-cover object-center"
            />
          </div>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Bio */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div className="scroll-reveal">
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

          <div className="scroll-reveal scroll-reveal-delay-2">
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

      {/* Experience */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-12 scroll-reveal">
          Experience & Education
        </h2>
        <div className="space-y-0">
          {[
            { role: "Creative Strategist & Experience Designer", company: "Rita Barracha da Silva", desc: "Omnichannel Experiences", location: "Zürich, CH", period: "2020 — Now" },
            { role: "Co-Founder & Experience Strategist", company: "naut GmbH", link: "http://www.naut.ch/", desc: "Creative & Tech Studio", location: "Zürich, CH", period: "2018 — 2020\n2023 — Now" },
            { role: "Experience Director", company: "melt GmbH", link: "http://www.melt.ch/", desc: "Narrative Experience Design", location: "Zürich, CH", period: "2017 — 2018" },
            { role: "Creative Strategist & User Experience Lead", company: "Liip AG", link: "http://www.liip.ch/", desc: "Digital Agency", location: "Zürich, CH", period: "2013 — 2018" },
            { role: "Multimedia Designer", company: "Process Brand Evolution AG", link: "http://process-group.com/", desc: "Branding Consultancy", location: "Zürich, CH", period: "2012 — 2013" },
            { role: "Interaction Designer & Researcher", company: "YDreams", link: "http://www.ydreams.com/", desc: "Interactive Technology", location: "Lisbon, PT", period: "2011 — 2012" },
            { role: "Visual Designer", company: "Museum of the Portuguese Presidency", location: "Lisbon, PT", period: "2008 — 2009" },
            { role: "Films on Art Jury", company: "Temps d'Images Festival", location: "Lisbon, PT", period: "2008 — 2009" },
            { role: "Photographer", company: "Miguel Palma Studio", location: "Lisbon, PT", period: "2008" },
            { role: "Co-Director, Co-Producer & Graphic Designer", company: "MARTE Magazine No. 3", location: "Lisbon, PT", period: "2006 — 2008" },
          ].map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[100px_1fr_1fr] gap-4 py-6 border-b border-border scroll-reveal"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <span className="text-sm text-foreground/40 whitespace-pre-line">{item.period}</span>
              <span className="text-sm font-medium text-foreground">{item.role}</span>
              <div className="text-sm">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-foreground/60 link-underline pb-0.5">{item.company}</a>
                ) : (
                  <span className="text-foreground/60">{item.company}</span>
                )}
                {item.desc && (
                  <span className="text-foreground/40"> · {item.desc}</span>
                )}
                {item.location && (
                  <span className="text-foreground/30"> ({item.location})</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-12 mt-24 scroll-reveal">
          Education
        </h2>
        <div className="space-y-0">
          {[
            { period: "2025", role: "Service Design", company: "Service Design Global Network Conference", link: "https://www.service-design-network.org/events/service-design-global-conference-2025-dallas", location: "Virtual" },
            { period: "2022", role: "Service Design", company: "Service Design Global Network Conference", link: "https://www.service-design-network.org/", location: "Virtual" },
            { period: "2020", role: "Omnichannel Journeys & Customer Experience", company: "Nielsen Norman Group", link: "https://www.nngroup.com/", location: "Virtual" },
            { period: "2013", role: "Usability Course", company: "Nielsen Norman Group", link: "https://www.nngroup.com/", location: "London, UK" },
            { period: "2010 — 2012", role: "Master New Media & Web", company: "NOVA University of Lisbon", link: "http://hdl.handle.net/10362/7089", desc: "Social and Human Sciences", location: "Lisbon, PT" },
            { period: "2009 — 2011", role: "Master Multimedia Art", company: "University of Lisbon", link: "http://hdl.handle.net/10451/5631", desc: "Fine Arts", location: "Lisbon, PT" },
            { period: "2005 — 2009", role: "Licentiate Multimedia Art", company: "University of Lisbon", desc: "Fine Arts", location: "Lisbon, PT" },
            { period: "2008", role: "RED One Camera Course", company: "CineCanarias", location: "PT" },
            { period: "2007", role: "Entertainment / Event Photography Course", company: "Kabuki Center", location: "PT" },
          ].map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[100px_1fr_1fr] gap-4 py-6 border-b border-border scroll-reveal"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <span className="text-sm text-foreground/40 whitespace-pre-line">{item.period}</span>
              <span className="text-sm font-medium text-foreground">{item.role}</span>
              <div className="text-sm">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-foreground/60 link-underline pb-0.5">{item.company}</a>
                ) : (
                  <span className="text-foreground/60">{item.company}</span>
                )}
                {item.desc && (
                  <span className="text-foreground/40"> · {item.desc}</span>
                )}
                {item.location && (
                  <span className="text-foreground/30"> ({item.location})</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Awards */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-12 scroll-reveal">
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
              className="grid grid-cols-[60px_1fr_1fr] md:grid-cols-[80px_1fr_1fr_1fr] py-5 border-b border-border gap-4 scroll-reveal"
              style={{ transitionDelay: `${index * 0.05}s` }}
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

      {/* Contact */}
      <section className="container mx-auto px-4 py-24 md:py-32 text-center">
        <div className="scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Let's work together
          </h2>
          <a
            href="mailto:hello@ritabarracha.com"
            className="link-underline text-sm uppercase tracking-widest font-medium pb-1"
          >
            Get in Touch
          </a>
          <p className="text-xs text-muted-foreground mt-16">
            © 2026 Rita Barracha, Creative Strategist & Experience Designer
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
