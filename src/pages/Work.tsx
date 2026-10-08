import { useEffect, useState } from "react";
import CaseStudy from "@/components/CaseStudy";
import CaseNav from "@/components/CaseNav";
import CaseGrid from "@/components/CaseGrid";
import ViewToggle, { type CaseView } from "@/components/ViewToggle";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import logoNaut from "@/assets/logos/naut.svg";
import logo20min from "@/assets/logos/20min.svg";
import logoEnergie360 from "@/assets/logos/energie360.svg";
import logoFreitag from "@/assets/logos/freitag.svg";
import logoHwz from "@/assets/logos/hwz.svg";
import logoKantonal from "@/assets/logos/kantonal.svg";
import logoLiip from "@/assets/logos/liip.svg";
import logoLocal from "@/assets/logos/local.svg";
import logoMigros from "@/assets/logos/migros.svg";
import logoOpendata from "@/assets/logos/opendata.svg";
import logoRappold from "@/assets/logos/rappold.svg";
import logoRicardo from "@/assets/logos/ricardo.svg";
import logoRicola from "@/assets/logos/ricola.svg";
import logoTedx from "@/assets/logos/tedx.svg";
import logoTutti from "@/assets/logos/tutti.svg";
import logoTx from "@/assets/logos/tx.svg";
import logoWecollect from "@/assets/logos/wecollect.svg";


import case1Cover from "@/assets/case1-cover.webp";
import case1Img1 from "@/assets/case1-img1.webp";
import case1Img2 from "@/assets/case1-img2.webp";
import case1Img3 from "@/assets/case1-img3.webp";
import case1Img4 from "@/assets/case1-img4.webp";


import case2Cover from "@/assets/case2-cover.webp";
import case2Img1 from "@/assets/case2-img1.webp";
import case2Img2 from "@/assets/case2-img2.webp";
import case2Img3 from "@/assets/case2-img3.webp";


import case3Cover from "@/assets/case3-cover.webp";
import case3Img1 from "@/assets/case3-img1.webp";
import case3Img2 from "@/assets/case3-img2.webp";
import case3Img3 from "@/assets/case3-img3.webp";


import case4Cover from "@/assets/case4-cover.webp";
import case4Img1 from "@/assets/case4-img1.webp";
import case4Img2 from "@/assets/case4-img2.webp";
import case4Img3 from "@/assets/case4-img3.webp";

import case5Cover from "@/assets/case5-cover.webp";
import case5Img1 from "@/assets/case5-img1.webp";
import case5Img2 from "@/assets/case5-img2.webp";
import case5Img3 from "@/assets/case5-img3.webp";
import case5Img4 from "@/assets/case5-img4.webp";
import case5Img5 from "@/assets/case5-img5.webp";

import case6Img1 from "@/assets/case6-img1.png";
import case6Img2 from "@/assets/case6-img2.png";
import case6Img3 from "@/assets/case6-img3.png";
import case6Img4 from "@/assets/case6-img4.png";
import case6Img5 from "@/assets/case6-img5.png";
import case6Img6 from "@/assets/case6-img6.png";
import case6Img7 from "@/assets/case6-img7.png";
import case6Img8 from "@/assets/case6-img8.png";
import case7Img1 from "@/assets/case7-img1.webp";
import case7Img2 from "@/assets/case7-img2.webp";
import case7Img3 from "@/assets/case7-img3.webp";
import case7Img4 from "@/assets/case7-img4.webp";
import case7Img5 from "@/assets/case7-img5.webp";
import case7Img6 from "@/assets/case7-img6.webp";
import case8Img1 from "@/assets/case8-img1.webp";
import case8Img2 from "@/assets/case8-img2.webp";
import case8Img3 from "@/assets/case8-img3.webp";
import case8Img4 from "@/assets/case8-img4.webp";
import case8Img5 from "@/assets/case8-img5.webp";
import case8Img6 from "@/assets/case8-img6.webp";
import case9Img1 from "@/assets/case9-img1.webp";
import case9Img2 from "@/assets/case9-img2.webp";
import case9Img3 from "@/assets/case9-img3.webp";
import case9Img4 from "@/assets/case9-img4.webp";
import case9Img5 from "@/assets/case9-img5.webp";
import case9Img6 from "@/assets/case9-img6.webp";
import case9Img7 from "@/assets/case9-img7.webp";
import case10Cover from "@/assets/case10-cover.webp";
import case10Img1 from "@/assets/case10-img1.webp";
import case10Img2 from "@/assets/case10-img2.webp";
import case10Img3 from "@/assets/case10-img3.webp";
import case10Img4 from "@/assets/case10-img4.webp";
import case10Img5 from "@/assets/case10-img5.webp";
import case10Img6 from "@/assets/case10-img6.webp";
import case10Img7 from "@/assets/case10-img7.webp";
import case10Img8 from "@/assets/case10-img8.webp";
import case10Img9 from "@/assets/case10-img9.webp";
import case10Img10 from "@/assets/case10-img10.webp";
import case10Img11 from "@/assets/case10-img11.webp";
import case11Img1 from "@/assets/case11-img1.webp";
import case11Img2 from "@/assets/case11-img2.webp";
import case11Img3 from "@/assets/case11-img3.webp";
import case11Img4 from "@/assets/case11-img4.webp";
import case11Img5 from "@/assets/case11-img5.webp";
import case11Img6 from "@/assets/case11-img6.webp";
import case11Img9 from "@/assets/case11-img9.webp";
import case11Img10 from "@/assets/case11-img10.webp";
import case11Img11 from "@/assets/case11-img11.webp";


const caseStudies = [
  {
    title: "-naut & BRDGE",
    tagline: "Making Custom Work Scalable",
    tags: ["Business Development", "Operations", "Partner Ecosystem", "Growth Systems", "Marketing & Sales Strategy", "AI Workflows", "UX / UI Design"],
    context: "-naut",
    period: "2023–26",
    link: "https://www.naut.ch/",
    gap:
      "-naut is a Zürich studio building interactive installations for museums, brands, fairs and events; clients include Migros, SBB, Swisscom, UBS and Ricola. Success had created its own problem: every custom project started from zero. Custom work was high-impact but slow and hard to scale for a small team, and agencies without in-house creative tech hesitated to promise it in a pitch.",
    fix:
      "We built BRDGE (aka bridge), a catalogue of 50+ tested interactive modules (games, mediaguides, booths, touch surfaces and magic à la Matrix) that turns an idea into a working prototype in days: fully custom, a module with new mechanics, or one simply reskinned for the brand. Nothing starts from zero. Around it, we built the partner platform and the operations to grow it: an ecosystem of agencies, resellers, venues, hardware and software partners; design onboarding with Figma templates and brainstorm boards; tech onboarding with documentation and service tools; go-to-market segments, workflows and templates, including where AI clearly helps, so promises come with confidence.",
    favorite:
      "The catalog was never the point. What I'm proud of is the system underneath: efficient enough to carry us, partners, and their clients, all the way to outcomes that are profitable and still unique.",
    coverImage: case4Cover,
    images: [case4Img1, case4Img2, case4Img3],
  },
  {
    title: "BRDGE Journey",
    tagline: "The Value Is in How They Connect",
    tags: ["Service Design", "Experience Strategy", "Journey Mapping", "UX / UI Design", "Visual Identity", "Phygital"],
    context: "-naut",
    period: "2023–26",
    link: "https://brdge.ch/",
    gap:
      "Getting people to attend an event is just the start. Activations at fairs, museums, and brand events were often isolated moments: a photo station here, a game there, nothing connecting them, and nothing left once the doors closed. Clients struggled to show what the experience was actually worth.",
    fix:
      "We turned single activations into a 360° journey across pre-event, during, and post-event. Physical activities, digital interactions, storytelling and rewards all feed one personal journey, mapped to business goals from awareness to advocacy. Visitors collect their own memories (photos, badges, achievements) to share and come back to, while an open API connects ticketing, hospitality, branding, and any partners.",
    favorite:
      "Drawing the journey as a circle, not a line. When the post-event moment feeds the next invitation, visitors become regulars and clients become partners. Multiple activities, one seamless and personal experience.",
    coverImage: case5Cover,
    images: [case5Img1, case5Img3, case5Img2, case5Img4, case5Img5],
  },
  {
    title: "MIND:HACK",
    tagline: "Making Radicalization Visible, Safely",
    tags: ["Interaction Design", "Serious Game Design", "UX Strategy", "Project Lead", "User Testing", "Public Prevention"],
    context: "-naut",
    period: "2026",
    link: "https://kapo.tg.ch/",
    gap:
      "Radicalization rarely starts with violence. It starts with group pressure, camps forming and opinions tipping. The Kantonspolizei Thurgau and its violence prevention commission wanted young people (12–18) to recognise these dynamics from the inside, in the classroom, without reproducing them in a harmful way.",
    fix:
      "Together with concept partner SPACECURATION.CH, we designed a timer-driven, role-based group chat game. Each student gets a secret role and receives tasks that drive behaviour rather than arguments: write in caps, demand a yes or no, exploit a muted player. The game follows a scientific escalation model and stops before it turns dangerous. A Red Button lets the group mute a player for No-Go messages, a teacher dashboard allows intervention at any time, and anonymous polls track how opinions shift, feeding a guided class debrief with a visual report of how the discussion evolved. Built on BRDGE, the topic is a variable: the system stays the same.",
    favorite:
      "Designing rules that make a group self-regulate. The most important mechanic isn't the escalation; it's the Red Button: young people deciding together where the line is.",
    images: [case6Img1, case6Img2, case6Img3, case6Img4, case6Img5, case6Img6, case6Img7, case6Img8],
  },
  {
    title: "Migros.ch",
    tagline: "Rebranding & Omnichannel Integration",
    tags: ["Service Design", "Omnichannel Transformation", "Rebranding", "Journey Mapping", "User Research", "UX / UI Design"],
    context: "Einzelfirma",
    period: "2020–25",
    link: "https://www.migros.ch/",
    gap:
      "Customers of Switzerland's largest retailer met a different world depending on where they clicked: migros.ch, LeShop, separate sub-brands, separate sites. They needed one Migros, whether they were ordering online or walking into a physical store.",
    fix:
      "First, the brand transitioned from LeShop.ch to Migros Online, then the full merger into migros.ch. We mapped the journey of how people moved between both shopping modes, and designed the service so migros.ch felt like one coherent brand. Over several years and multiple iterations, it became the unified digital home of Switzerland's most trusted retailer, serving millions of customers online and offline.",
    favorite:
      "Sitting between Migros Online's squads and Corporate's research team, and making ONE out of three. The best part was collaborating on a journey blueprint that worked for all.",
    coverImage: case2Cover,
    images: [case2Img1, case2Img2, case2Img3],
  },
  {
    title: "herbling by Ricola",
    tagline: "From Alpine Herbs to Premium Drink",
    tags: ["Creative Direction", "Product Innovation", "Branding", "Marketing Strategy", "Campaign Design", "Crowdfunding"],
    context: "Einzelfirma",
    period: "2021",
    link: "https://www.ricola.ch/",
    gap:
      "People want to drink something special without the alcohol. The options let them down: alcohol-free wines lose their flavour, juices feel cheap, water kills the moment. Health-conscious consumers, pregnant women, drivers and the sober-curious had nothing worth pouring at a dinner table.",
    fix:
      "herbling is a naturally sparkling herbal tea: low in sugar, alcohol-free, made from Ricola's Swiss alpine herbs with a unique ripening refinement. We tested everything in weekly iterations: bottle, branding, recipes, and content, to see what people actually liked. My end was creative strategy, marketing campaign, design, content, and the pitch decks that got us internal seeding. Over 1'000 bottles were crowdfunded through our own pre-sale page. The trial experiment ended, but herbling was closer to reach you than before.",
    favorite:
      "Turning an idea inside a 130-year-old brand into something people would actually buy, with a 5-person team, a tight budget, and mentors to convince. Watching a stranger taste our idea and wanting to buy on the spot: that's the moment you know if a product can become real.",
    coverImage: case1Cover,
    images: [case1Img1, case1Img2, case1Img3, case1Img4],
  },
  {
    title: "Ricola B2B & We Care",
    tagline: "Selling the Moment, Not Just the Drops",
    tags: ["Service Design", "B2B Digitalisation", "Service Blueprint", "Workshop Facilitation", "Market Research", "Generative Design"],
    context: "-naut & Einzelfirma",
    period: "2019–21",
    link: "https://www.ricola.ch/",
    gap:
      "Ricola's corporate gifting (personalised boxes for companies, hotels and trade fairs) ran almost entirely on email. From first enquiry to final order, a customer went through around 13 back-and-forth steps, including designs rejected by the printer. Demand was rising, but the process didn't scale, and the business wanted to grow beyond Switzerland.",
    fix:
      "I led the UX conception through workshops with Ricola's business, brand, IT and sales teams: stakeholder map, pre-mortem, personas and service blueprints from customer journey to backstage. We prioritised an MVP, restructured the information architecture and designed a B2B landing page, gift boxes and wish messages, backed by research on four export markets. A pattern generator turned 100 brand logos into kaleidoscope-like covers for corporate mini packs. When the pandemic hit in 2020, the same thinking became We Care: a care package with its own ordering site, to share care while staying home.",
    favorite:
      "Writing the wishes for the boxes: «We wish you a strong voice for successful negotiations.» We weren't selling herbal drops; we were selling a moment of care.",
    coverImage: case10Cover,
    images: [case10Img1, case10Img2, case10Img3, case10Img4, case10Img5, case10Img6, case10Img7, case10Img8, case10Img9, case10Img10, case10Img11],
  },
  {
    title: "Victorinox GLM",
    tagline: "Auditing an Experience from the Inside",
    tags: ["UX Research", "Experience Audit", "Field Observation", "User Interviews", "Evaluation", "Corporate Event"],
    context: "-naut",
    period: "2019",
    link: "https://www.victorinox.com/",
    gap:
      "Victorinox brought its global teams together in Zurich for a day of product stations, shows and workshops. Our interactive installations were cancelled last minute, which left an open question: how could experiences like these work better for the people inside them?",
    fix:
      "I offered a free one-day Experience Audit instead. I observed 9 stations, ran quick feedback interviews during breaks, and mapped what engaged people and what made them drift off. The report turned findings into recommendations: hands-on, expert-led storytelling over sales pitches, experience blueprints for staff and visitors, success metrics defined upfront, and ways to bring the brand's heritage into shops and future events.",
    favorite:
      "A cancelled project turned into the most honest research I've done. And the clearest finding: a passionate expert showing a fondue fork beats any slide deck.",
    coverImage: case7Img1,
    images: [case7Img2, case7Img3, case7Img4, case7Img5, case7Img6],
  },
  {
    title: "Zentrum für Reisemedizin",
    tagline: "More Than Vaccinations",
    tags: ["Service Design", "Public Health", "Customer Research", "Service Blueprint", "Workshop Facilitation", "Spatial Experience"],
    context: "melt.",
    period: "2017–18",
    link: "https://www.uzh.ch/de/explore/hospitals/reise.html",
    gap:
      "Opened in 1988, the University of Zurich's travel medicine centre no longer matched what travellers or staff needed: walk-in queues and long waits, paper-heavy processes, and a clinic look that hid how much expertise was inside. With its 30th anniversary ahead, the centre asked for a fresh approach across pre-travel, travel and post-travel care.",
    fix:
      "Working in an interdisciplinary team with architects and IT partners, we started with research: an earlier customer survey and on-site interviews with staff. We built a service blueprint with the customer and staff journeys side by side, mapping steps, touchpoints, emotions and processes. In workshops with doctors, nurses and management, we collected requirements and prioritised them against the vision into an MVP. Three focus areas came out of it: shorter waiting times through booking and e-registration, better working conditions through planning and staff development, and a clearer visitor flow, space and story for the centre.",
    favorite:
      "Seeing the customer and staff journeys hanging side by side on one wall. Suddenly everyone in the room could point at the same moment, the same pain point, and start talking about the same future.",
    coverImage: case8Img3,
    images: [case8Img1, case8Img2, case8Img4, case8Img5, case8Img6],
  },
  {
    title: "FREITAG",
    tagline: "Where Commerce Meets Character",
    tags: ["Experience Direction", "Brand Storytelling", "E-Commerce", "User Research", "Creative Workshop Facilitation", "UX / UI Design", "Award-winning"],
    context: "Liip AG",
    period: "2014–19",
    link: "https://www.freitag.ch/",
    gap:
      "Every FREITAG bag is a one-off, cut from used truck tarpaulin. People don't just want to browse a catalogue; they want to find their twin and understand where it comes from. The platform lacked holding two material philosophies at once: indestructible tarp bags and the fully biodegradable f-abric line.",
    fix:
      "We started with user research, personas, and information architecture, then built the shop on Drupal Commerce. Custom APIs imported each unique product, matched it with imagery, published it live, and pulled it the moment it sold. Flexible page tools gave freedom to authors who tell stories without ever losing the sale opportunity. Maintenance costs dropped by 50%, and mobile conversion rose by 25%. Neo won 8 Awards.",
    favorite:
      "How to sell something that can only be sold once, and tell a story of indestructibility and biodegradability in the same breath? It started with a creative poster pitch with literally my height to the FREITAG brothers and became one of the most complex storyselling projects of my career.",
    coverImage: case3Cover,
    images: [case3Img1, case3Img2, case3Img3],
  },
  {
    title: "opendata.swiss",
    tagline: "Data, Open to Everyone",
    tags: ["UX / UI Design", "Branding", "Ecosystem Mapping", "Open Government Data", "Public Sector", "Award-winning"],
    context: "Liip AG",
    period: "2015–18",
    link: "https://opendata.swiss/",
    gap:
      "Switzerland's public data was scattered across federal offices, cantons and communes, often in formats only specialists could find or use. The Confederation wanted one central, multilingual place where anyone, from developers and journalists to researchers and curious citizens, could discover and reuse official data for free.",
    fix:
      "opendata.swiss replaced the 2013 pilot and launched in 2016 as the national open government data portal. We started by mapping the ecosystem: data owners at federal, cantonal and communal level, the portal team and the people using the data. I then created the minimal brand identity, styleguide, experience concept, UX and UI: clear search and filtering across many publishers, in four languages, on CKAN and WordPress. It won Best of Swiss Web 2016 (Innovation Silver, Public Affairs Bronze). For version 3.0, I worked on the conception: prioritised personas, a loop where more data use convinces publishers to open more data, and better search, SEO, analytics and data previews.",
    favorite:
      "Designing for the federal administration without making it feel like one. Open data only works if people actually open it.\n\nAnd it makes me happy that the identity I designed stayed live for ten years, knowing the portal will soon be redesigned.",
    coverImage: case11Img3,
    images: [case11Img1, case11Img2, case11Img4, case11Img5, case11Img6, case11Img9, case11Img10, case11Img11],
  },
  {
    title: "TEX by Tamedia",
    tagline: "Finding the Signal in Five Million Documents",
    tags: ["UX / UI Design", "AI Product", "Newsroom Tools", "Requirements Analysis", "Search UX", "User Flows"],
    context: "Mandate for Tamedia",
    period: "2019",
    link: "https://tx.group/",
    gap:
      "Tamedia's journalists relied on Tadam, an externally managed 'black box' that sourced news from around 3,100 websites, RSS feeds, Twitter accounts, and mail sources. Its successor, TEX, would add AI-powered topic suggestions, trends, weak signals, and credibility rankings, and source an average of 5 million documents a month. The real question: how can a journalist on deadline actually work with that much data?",
    fix:
      "As a UX designer on mandate, embedded in Tamedia's product and UX team, I analysed the business requirements, editorial wishlists and the old system to understand how journalists really search. We defined two modes: Live, for breaking news under time pressure, and Explore, for investigative work. The proof of concept focused on three screens: a dashboard, a live feed, and an explore view with smart search, taxonomy filters and related trends. I designed the user flows and UI across several iterations. For Tamedia, I also worked on Ricardo, tutti.ch and 20 Minuten.",
    favorite:
      "Designing for two very different clocks: the sports journalist who needs to know now, and the investigative one who needs to know everything. Same data, two completely different journeys.",
    coverImage: case9Img1,
    images: [case9Img2, case9Img3, case9Img4, case9Img5, case9Img6, case9Img7],
  },
];

const Work = () => {
  const ref = useScrollReveal();
  const [view, setView] = useState<CaseView>("list");
  const [pendingCase, setPendingCase] = useState<number | null>(null);

  // Keep the reader at the top of the case studies when switching views.
  const changeView = (next: CaseView) => {
    if (next === view) return;
    setView(next);
    requestAnimationFrame(() => {
      const section = document.getElementById("case-studies");
      if (section) window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY - 40 });
    });
  };

  // From the grid, open a case: back to the list, scrolled to that case.
  useEffect(() => {
    if (view !== "list" || pendingCase === null) return;
    // Galleries measure themselves after mounting, so keep the case pinned
    // while the layout settles, but stop as soon as the reader scrolls, so
    // their own scrolling is never pulled back.
    let active = true;
    const align = () => {
      if (!active) return;
      document
        .querySelectorAll<HTMLElement>("#case-studies > article")
        [pendingCase]?.scrollIntoView({ block: "start" });
    };
    const section = document.getElementById("case-studies");
    const ro = new ResizeObserver(align);
    if (section) ro.observe(section);
    const inputs = ["wheel", "touchstart", "keydown", "pointerdown"] as const;
    const stop = () => {
      active = false;
      ro.disconnect();
      inputs.forEach((e) => window.removeEventListener(e, stop));
    };
    inputs.forEach((e) => window.addEventListener(e, stop, { passive: true }));
    align();
    const done = window.setTimeout(() => {
      stop();
      setPendingCase(null);
    }, 2500);
    return () => {
      stop();
      window.clearTimeout(done);
    };
  }, [view, pendingCase]);

  return (
    <div className="min-h-screen bg-background" ref={ref}>
      {/* Page Header */}
      <section className="container mx-auto px-4 pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-4xl scroll-reveal">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Work</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Spreading empathy, trust and impact.
          </h1>
        </div>
      </section>

      {/* Client Logos */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <p className="scroll-reveal text-xs uppercase tracking-widest text-muted-foreground mb-12">Selected Clients</p>
        <div className="flex flex-wrap justify-center items-center scroll-reveal">
          {[
            { src: logoNaut, alt: "naut" },
            { src: logoMigros, alt: "Migros" },
            { src: logoRicola, alt: "Ricola" },
            { src: logoTx, alt: "TX Group" },
            { src: logoRicardo, alt: "Ricardo" },
            { src: logoTutti, alt: "Tutti" },
            { src: logoFreitag, alt: "Freitag" },
            { src: logoOpendata, alt: "Opendata.swiss" },
            { src: logoLiip, alt: "Liip" },
            { src: logoEnergie360, alt: "Energie 360°" },
            { src: logoKantonal, alt: "Basellandschaftliche Kantonalbank" },
            { src: logoLocal, alt: "Local" },
            { src: logoTedx, alt: "TEDx" },
            { src: logoWecollect, alt: "WeCollect" },
            { src: logo20min, alt: "20 Minuten" },
            { src: logoHwz, alt: "HWZ" },
          ].map((logo) => (
            <div
              key={logo.alt}
              className="w-1/3 sm:w-1/4 flex items-center justify-center p-2 md:p-6 hover:opacity-80 transition-opacity duration-300"
            >
              <img src={logo.src} alt={logo.alt} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {view === "list" && (
        <CaseNav sectionId="case-studies" titles={caseStudies.map((s) => s.title)} />
      )}
      <ViewToggle sectionId="case-studies" view={view} onChange={changeView} />

      <section id="case-studies" className="container mx-auto px-4 py-24 md:py-32">
        {view === "list" ? (
          caseStudies.map((study, index) => (
            <CaseStudy key={index} {...study} defaultOpen={index === pendingCase} />
          ))
        ) : (
          <CaseGrid
            items={caseStudies}
            onOpen={(i) => {
              setPendingCase(i);
              setView("list");
            }}
          />
        )}
      </section>

      <div className="border-t border-border" />

      <section className="container mx-auto px-4 py-24 md:py-32 text-center">
        <div className="scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Got a project in mind?</h2>
          <a
            href="mailto:hello@ritabarracha.com"
            className="link-underline text-sm uppercase tracking-widest font-medium pb-1"
          >
            Let's Talk
          </a>
          <p className="text-xs text-muted-foreground mt-16">
            © 2026 Rita Barracha, Creative Strategist & Experience Designer
          </p>
        </div>
      </section>
    </div>
  );
};

export default Work;
