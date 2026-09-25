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
    title: "herbling by Ricola",
    tagline: "From Alpine Herbs to Premium Drink",
    category: "Product Design",
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
    title: "Migros.ch",
    tagline: "Rebranding & omnichannel integration",
    category: "Digital Transformation",
    gap:
      "Customers of Switzerland's largest retailer met a different world depending on where they clicked: migros.ch, LeShop, separate sub-brands, separate sites. They needed one Migros, whether they were ordering online or walking into a physical store.",
    fix:
      "First the brand transition from LeShop.ch to Migros Online, then the full merger into migros.ch. We mapped the journey how people moved between both shopping modes, and designed the service so migros.ch felt like one coherent brand. Over several years and multiple iterations, it became the unified digital home of Switzerland's most trusted retailer, serving millions of customers online and offline.",
    favorite:
      "Sitting between Migros Online's squads and Corporate's research team, and making ONE out three. The best part was collaborating on a journey blueprint that clicked for all.",
    coverImage: case2Cover,
    images: [case2Img1, case2Img2, case2Img3],
  },
  {
    title: "FREITAG",
    tagline: "Where Commerce Meets Character",
    category: "Brand Experience",
    gap:
      "Every FREITAG bag is a one-off, cut from used truck tarpaulin. People don't just want to browse a catalogue, they want to find their bag and understand where it comes from. The platform lacked holding two material philosophies at once: indestructible tarp bags and the fully biodegradable f-abric line.",
    fix:
      "We started with user research, personas, and information architecture, then built the shop on Drupal Commerce. Custom APIs imported each unique product, matched it with imagery, published it live and pulled it the moment it sold. Flexible page tools let gave freedom to authors who tell stories without ever losing the sale opportunity. Maintenance costs dropped by 50%, and mobile conversion rose by 25%.",
    favorite:
      "How to sell something that can only be sold once, and tell a story of indestructibility and biodegradability in the same breath? It started with a pitch to the FREITAG brothers and became one of the most complex "storyselling" projects of my career, while part of Liip AG.",
    coverImage: case3Cover,
    images: [case3Img1, case3Img2, case3Img3],
  },
  {
    title: "-naut & BRDGE",
    tagline: "Making Custom Work Scalable",
    category: "Operations & Growth Systems",
    gap:
      "-naut is a Zürich studio building interactive installations for museums, brands, fairs and events, clients include Migros, SBB, Swisscom, UBS and Ricola. Success had created its own problem: every custom project started from zero. Custom work was high-impact but slow and hard to scale for a small team, and agencies without in-house creative tech hesitated to promise it in a pitch.",
    fix:
      "We built BRDGE, a catalogue of 50+ tested interactive activations, games, mediaguides, phygital experiences, that turns an idea into a working prototype in days. From a fully custom, to a module with new mechanics, to one just reskinned for the brand. Nothing starts from zero. Around the product, we built the operations growth system too: a partner ecosystem of referrers, resellers and tech partners, go-to-market segments, workflows and templates, including where AI clearly helps, so promises come with confidence.",
    favorite:
      "The catalog was never the point. What I'm proud of is the system underneath: efficient enough to carry us, partners, and their clients, all the way to outcomes that are profitable and still unique.",
    coverImage: case4Cover,
    images: [case4Img1, case4Img2, case4Img3],
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
