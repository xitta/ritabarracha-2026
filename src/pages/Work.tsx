import CaseStudy from "@/components/CaseStudy";
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


import case1Cover from "@/assets/case1-cover.jpg";
import case1Img1 from "@/assets/case1-img1.jpg";
import case1Img2 from "@/assets/case1-img2.jpg";
import case1Img3 from "@/assets/case1-img3.jpg";


import case2Cover from "@/assets/case2-cover.jpg";
import case2Img1 from "@/assets/case2-img1.jpg";
import case2Img2 from "@/assets/case2-img2.jpg";
import case2Img3 from "@/assets/case2-img3.jpg";


import case3Cover from "@/assets/case3-cover.jpg";
import case3Img1 from "@/assets/case3-img1.jpg";
import case3Img2 from "@/assets/case3-img2.jpg";
import case3Img3 from "@/assets/case3-img3.jpg";


import case4Cover from "@/assets/case4-cover.jpg";
import case4Img1 from "@/assets/case4-img1.jpg";
import case4Img2 from "@/assets/case4-img2.jpg";
import case4Img3 from "@/assets/case4-img3.jpg";


const caseStudies = [
  {
    title: "MIND:HACK",
    tagline: "Making Radicalization Visible, Safely",
    tags: ["Interaction Design", "Public Prevention", "Game Design", "UX Strategy", "Project Lead"],
    context: "-naut",
    period: "2026",
    gap:
      "Radicalization rarely starts with violence. It starts with group pressure, camps forming and opinions tipping. The Kantonspolizei Thurgau and its violence prevention commission wanted young people (12–18) to recognise these dynamics from the inside, in the classroom, without reproducing them in a harmful way.",
    fix:
      "Together with concept partner SPACECURATION.CH, we designed a timer-driven, role-based group chat game. Each student scans a QR code for a secret role (Polarizer, Pusher, Neutral) and receives tasks that drive behaviour rather than arguments: write in caps, demand a yes or no, exploit a muted player. The game follows a scientific escalation model and stops before it turns dangerous. A Red Button lets the group mute a player for No-Go messages, a teacher dashboard allows intervention at any time, and anonymous polls track how opinions shift, feeding a guided class debrief. After moderated classroom tests, we iterated on role-specific questionnaires, flexible survey placement and a visual report of how the discussion evolved. Built on BRDGE, the topic is a variable: the system stays the same. I led the project on the naut side, from UX strategy to interaction design, working hand in hand with the developers. Launch is planned for the end of 2026.",
    favorite:
      "Designing rules that make a group self-regulate. The most important mechanic isn't the escalation, it's the Red Button: young people deciding together where the line is.",
  },
  {
    title: "BRDGE Journey",
    tagline: "The Value Is in How They Connect",
    tags: ["Experience Strategy", "UX / UI Design", "Visual Identity", "Phygital"],
    context: "-naut",
    period: "2023–26",
    gap:
      "Getting people to attend an event is just the start. Activations at fairs, museums and brand events were often isolated moments: a photo station here, a game there, nothing connecting them, and nothing left once the doors closed. Clients struggled to show what the experience was actually worth.",
    fix:
      "We turned single activations into a 360° journey across pre-event, during and post-event. Physical activities, digital interactions, storytelling and rewards all feed one personal journey, mapped to business goals from awareness to advocacy. Visitors collect their own memories (photos, badges, achievements) to share and come back to, while an open API connects ticketing, hospitality and branding partners. At the WOW Museums in Zurich and Munich, the system handles around 2.5 million visitor photos a year. I helped shape the concept strategically and designed the whole UX/UI and visual language, from the journey illustrations to the website.",
    favorite:
      "Drawing the journey as a circle, not a line. When the post-event moment feeds the next invitation, visitors become regulars and clients become partners.",
  },
  {
    title: "-naut & BRDGE",
    tagline: "Making Custom Work Scalable",
    tags: ["Operations", "Growth Systems", "Platform Strategy", "Partner Ecosystem", "AI Workflows"],
    context: "-naut",
    period: "2023–26",
    gap:
      "-naut is a Zürich studio building interactive installations for museums, brands, fairs and events, clients include Migros, SBB, Swisscom, UBS and Ricola. Success had created its own problem: every custom project started from zero. Custom work was high-impact but slow and hard to scale for a small team, and agencies without in-house creative tech hesitated to promise it in a pitch.",
    fix:
      "We built BRDGE, a catalogue of 50+ tested interactive modules (games, mediaguides, photo and video stations) that turns an idea into a working prototype in days: fully custom, a module with new mechanics, or one simply reskinned for the brand. Nothing starts from zero. Around it, we built the partner platform and the operations to grow it: an ecosystem of agencies, resellers, venues, hardware and software partners; design onboarding with Figma templates and brainstorm boards; tech onboarding with documentation and service tools; go-to-market segments, workflows and templates, including where AI clearly helps, so promises come with confidence.",
    favorite:
      "The catalog was never the point. What I'm proud of is the system underneath: efficient enough to carry us, partners, and their clients, all the way to outcomes that are profitable and still unique.",
    coverImage: case4Cover,
    images: [case4Img1, case4Img2, case4Img3],
  },
  {
    title: "Migros.ch",
    tagline: "Rebranding & omnichannel integration",
    tags: ["Digital Transformation", "Omnichannel", "Rebranding", "Journey Mapping", "User Research"],
    context: "Einzelfirma",
    period: "2020–25",
    gap:
      "Customers of Switzerland's largest retailer met a different world depending on where they clicked: migros.ch, LeShop, separate sub-brands, separate sites. They needed one Migros, whether they were ordering online or walking into a physical store.",
    fix:
      "First the brand transition from LeShop.ch to Migros Online, then the full merger into migros.ch. We mapped the journey how people moved between both shopping modes, and designed the service so migros.ch felt like one coherent brand. Over several years and multiple iterations, it became the unified digital home of Switzerland's most trusted retailer, serving millions of customers online and offline.",
    favorite:
      "Sitting between Migros Online's squads and Corporate's research team, and making ONE out of three. The best part was collaborating on a journey blueprint that clicked for all.",
    coverImage: case2Cover,
    images: [case2Img1, case2Img2, case2Img3],
  },
  {
    title: "herbling by Ricola",
    tagline: "From Alpine Herbs to Premium Drink",
    tags: ["Product Design", "Creative Strategy", "Branding", "Crowdfunding"],
    context: "Einzelfirma",
    period: "2021",
    gap:
      "People want to drink something special without the alcohol. The options let them down: alcohol-free wines lose their flavour, juices feel cheap, water kills the moment. Health-conscious consumers, pregnant women, drivers and the sober-curious had nothing worth pouring at a dinner table.",
    fix:
      "herbling is a naturally sparkling herbal tea: low in sugar, alcohol-free, made from Ricola's Swiss alpine herbs with a unique ripening refinement. We tested everything in weekly iterations: bottle, branding, recipes, and content, to see what people actually liked. My end was creative strategy, marketing campaign, design, content and the pitch decks that got us internal seeding.Over 1'000 bottles were crowdfunded through our own pre-sale page. The trial experiment ended, but herbling was closer to reach you than before.",
    favorite:
      "Turning an idea inside a 130-year-old brand into something people would actually buy, with a 5 people team, a tight budget and mentors to convince. Watching a stranger taste our idea and wanting to buy on the spot: that's the moment you know if a product can become real.",
    coverImage: case1Cover,
    images: [case1Img1, case1Img2, case1Img3],
  },
  {
    title: "Ricola B2B & We Care",
    tagline: "Selling the Moment, Not Just the Drops",
    tags: ["Service Design", "B2B Digitalisation", "Service Blueprint", "Workshops", "Generative Design"],
    context: "-naut & Einzelfirma",
    period: "2019–21",
    gap:
      "Ricola's corporate gifting (personalised boxes for companies, hotels and trade fairs) ran almost entirely on email. From first enquiry to final order, a customer went through around 13 back-and-forth steps, including designs rejected by the printer. Demand was rising, but the process didn't scale, and the business wanted to grow beyond Switzerland.",
    fix:
      "I led the UX conception through a series of workshops with Ricola's business, brand, IT and sales teams: stakeholder map, pre-mortem, personas, and service blueprints of the current and future process, from customer journey to backstage. We prioritised an MVP (Must, Should, Nice to have), restructured content and information architecture, and designed a B2B landing page for lead generation, gift box designs and wish messages, alongside research on gifting markets in Canada, France, China and Singapore. We also built a pattern generator that turns any image into kaleidoscope-like designs: fed with 100 brand logos, it created branded covers for the mini packs, used for sponsoring and corporate gifts. When the pandemic hit in 2020, we turned the same thinking into We Care, a care package for families, friends, employees and customers, with its own ordering site, to share care while staying home.",
    favorite:
      "Writing the wishes for the boxes: «We wish you a strong voice for successful negotiations.» We weren't selling herbal drops, we were selling a moment of care.",
  },
  {
    title: "TEX by Tamedia",
    tagline: "Finding the Signal in Five Million Documents",
    tags: ["Product Design", "AI Newsroom Tools", "User Flows", "UI Design"],
    context: "Mandate for Tamedia",
    period: "2019",
    gap:
      "Tamedia's journalists relied on Tadam, an externally managed 'black box' that sourced news from around 3,100 websites, RSS feeds, Twitter accounts and mail sources. Its successor, TEX, would add AI-powered topic suggestions, trends, weak signals and credibility rankings, and source an average of 5 million documents a month. The real question: how can a journalist on deadline actually work with that much data?",
    fix:
      "On a mandate as UX designer, embedded in Tamedia's product and UX team, I worked through the business requirements, wishlists from editorial desks like sports, and the old system to understand how journalists really search. We identified two modes: Live, for breaking news under time pressure, and Explore, for investigative work without the clock. For the proof of concept we focused on three screens: a dashboard overview, a live news feed, and an explore view with smart search operators, taxonomy filters (topics, people, organisations, locations), related trends and suggestions. I designed the user flows and the UI across several iterations. For Tamedia, I also worked on Ricardo, tutti.ch and 20 Minuten.",
    favorite:
      "Designing for two very different clocks: the sports journalist who needs to know now, and the investigative one who needs to know everything. Same data, two completely different journeys.",
  },
  {
    title: "Victorinox GLM",
    tagline: "Auditing an Experience from the Inside",
    tags: ["UX Research", "Experience Audit", "Evaluation", "Events"],
    context: "-naut",
    period: "2019",
    gap:
      "Victorinox brought its global teams together in Zurich for a day of product stations, shows and workshops. Our interactive installations were cancelled last minute, which left an open question: how could experiences like these work better for the people inside them?",
    fix:
      "I offered a free one-day Experience Audit instead. I observed 9 stations, ran quick feedback interviews during breaks, and mapped what engaged people and what made them drift off: sound bleeding between groups, screens too large to stand near, light that made everyone look tired. The report turned findings into recommendations: hands-on, expert-led storytelling over sales pitches, experience blueprints for staff and visitors, success metrics defined upfront, and ways to bring the brand's heritage into shops and future events.",
    favorite:
      "A cancelled project turned into the most honest research I've done. And the clearest finding: a passionate expert showing a fondue fork beats any slide deck.",
  },
  {
    title: "Zentrum für Reisemedizin",
    tagline: "More Than Vaccinations",
    tags: ["Service Design", "Public Health", "Service Blueprint", "Workshops", "Spatial Experience"],
    context: "melt.",
    period: "2017–18",
    gap:
      "Opened in 1988, the University of Zurich's travel medicine centre no longer matched what travellers or staff needed: walk-in queues and long waits, paper-heavy processes, and a clinic look that hid how much expertise was inside. With its 30th anniversary ahead, the centre asked for a fresh approach across pre-travel, travel and post-travel care.",
    fix:
      "Working in an interdisciplinary team with architects and IT partners, we started with research: an earlier customer survey and on-site interviews with staff. We built a service blueprint with the customer and staff journeys side by side, mapping steps, touchpoints, emotions and processes. In workshops with doctors, nurses and management, we collected requirements and prioritised them against the vision into Must, Should and Minor. Three focus areas came out of it: shorter waiting times through booking and e-registration, better working conditions through planning and staff development, and a clearer visitor flow, space and story for the centre.",
    favorite:
      "Seeing the customer and staff journeys hanging side by side on one wall. Suddenly everyone in the room could point at the same moment, the same pain point, and start talking about the same future.",
  },
  {
    title: "opendata.swiss",
    tagline: "Open Data, Open to Everyone",
    tags: ["Public Sector", "Open Data", "Branding", "UX / UI Design", "Multilingual"],
    context: "Liip AG",
    period: "2015–18",
    gap:
      "Switzerland's public data was scattered across federal offices, cantons and communes, often in formats only specialists could find or use. The Confederation wanted one central, multilingual place where anyone, from developers and journalists to researchers and curious citizens, could discover and reuse official data for free.",
    fix:
      "opendata.swiss replaced the 2013 pilot portal and launched as the national open government data portal in 2016. I created its minimal brand identity, the experience concept, UX and UI. The challenge was to make a data catalogue built on strict metadata standards feel approachable: clear search and filtering across datasets from many different publishers, a visual identity neutral enough for a federal platform but with a character of its own, and an interface in German, French, Italian and English. Behind it, CKAN ran the data catalogue and WordPress the content. At Best of Swiss Web 2016, the portal won Innovation Silver and Public Affairs Bronze.",
    favorite:
      "Designing for the federal administration without making it feel like one. Open data only works if people actually open it.",
  },
  {
    title: "WeCollect",
    tagline: "Democracy, Designed in a Day",
    tags: ["Civic Tech", "UX / UI Design", "Strategic Workshop", "Rapid Prototyping"],
    context: "Liip AG",
    period: "2015",
    gap:
      "In Switzerland, a popular initiative needs 100,000 handwritten signatures (a referendum 50,000), collected within strict deadlines, mostly on the street. Civic groups without big campaign budgets struggled to reach enough people. Daniel Graf wanted to bring signature collection online, while respecting the legal requirement of a physical signature.",
    fix:
      "We started with a strategic workshop with Daniel Graf: fast, focused and full of energy, ending with wireframes already on the table. UX and UI design followed straight away, and the whole first version was designed in a single day. The flow was simple: choose a cause, enter your details, receive a pre-filled, postage-paid form, print it, sign it and drop it in the mailbox. The first version, then called E-Collector, gathered over 30,000 signatures for two popular initiatives and a referendum, and won Best of Swiss Web Silver in Public Affairs. It later grew into WeCollect.",
    favorite:
      "My fastest project ever: one day from workshop to design. When the purpose is clear and the room is full of energy, good design doesn't need months.",
  },
  {
    title: "FREITAG",
    tagline: "Where Commerce Meets Character",
    tags: ["Brand Experience", "E-Commerce", "User Research", "Information Architecture", "Award-winning"],
    context: "Liip AG",
    period: "2014–19",
    gap:
      "Every FREITAG bag is a one-off, cut from used truck tarpaulin. People don't just want to browse a catalogue, they want to find their bag and understand where it comes from. The platform lacked holding two material philosophies at once: indestructible tarp bags and the fully biodegradable f-abric line.",
    fix:
      "We started with user research, personas, and information architecture, then built the shop on Drupal Commerce. Custom APIs imported each unique product, matched it with imagery, published it live and pulled it the moment it sold. Flexible page tools gave freedom to authors who tell stories without ever losing the sale opportunity. Maintenance costs dropped by 50%, and mobile conversion rose by 25%. Neo won six Best of Swiss Web awards in 2017 (including Creation Gold and the Master Award), the Swiss E-Commerce Award and the German Design Award 2018.",
    favorite:
      "How to sell something that can only be sold once, and tell a story of indestructibility and biodegradability in the same breath? It started with a pitch to the FREITAG brothers and became one of the most complex storyselling projects of my career, while part of Liip AG.",
    coverImage: case3Cover,
    images: [case3Img1, case3Img2, case3Img3],
  },
];

const Work = () => {
  const ref = useScrollReveal();

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

      <section id="case-studies" className="container mx-auto px-4 py-24 md:py-32">
        {caseStudies.map((study, index) => (
          <CaseStudy key={index} {...study} />
        ))}
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
