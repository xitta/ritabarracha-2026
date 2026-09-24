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
      "herbling is a naturally sparkling herbal tea: low in sugar, alcohol-free, made from Ricola's Swiss alpine herbs with a unique ripening refinement. Light, premium, made for food and mixing. We built it in short cycles, testing taste, brand, packaging and sales channels with real consumers and experts. At field tests, tasters confirmed purchase intent on the spot, and over 1'000 bottles were crowdfunded in the pre-sale. The trial project ended, but herbling was closer than before.",
    mybit:
      "Turning an idea inside a 130-year-old brand into something people would actually buy, with a small team (Luca, food product developer, and Tatjana, innovation manager), a tight budget and mentors to convince.",
    coverImage: case1Cover,
    images: [case1Img1, case1Img2, case1Img3],
  },
  {
    title: "Migros.ch",
    tagline: "Rebranding & omnichannel integration",
    category: "Digital Transformation",
    gap:
      "Customers of Switzerland's largest retailer met a different world depending on where they clicked: migros.ch, LeShop, separate sub-brands, separate sites. They needed one Migros, whether they were ordering online or walking into a store.",
    fix:
      "First the brand transition from LeShop.ch to Migros Online, then the full merger into migros.ch. The platform had to serve two shopping modes, delivery and physical stores, and go beyond a shop into a brand world with its own storytelling and personality. Over several years and multiple identities, it became the unified digital home of Switzerland's most trusted retailer, serving millions of customers online and offline.",
    mybit:
      "Making the ambition of the whole merger tangible on one page: the homepage, my main design focus. Around it, advising on brand architecture and aligning cross-functional teams that saw the platform differently.",
    coverImage: case2Cover,
    images: [case2Img1, case2Img2, case2Img3],
  },
  {
    title: "FREITAG",
    tagline: "Where Commerce Meets Character",
    category: "Brand Experience",
    gap:
      "Every FREITAG bag is a one-off, cut from used truck tarpaulin. People don't just want to browse a catalogue, they want to find their bag and understand where it comes from. The platform couldn't connect product and story, nor hold two material philosophies at once: indestructible tarp bags and the fully biodegradable f-abric line.",
    fix:
      "We started with user research (data analysis, personas, flow mapping), then built on Drupal Commerce. Custom APIs imported each unique product, matched it with imagery, published it live and unpublished it the moment it sold, while flexible page tools let authors tell stories about materials and sustainability without losing the sale. Maintenance costs dropped by 50% and mobile conversion rose by 25%.",
    mybit:
      "How do you sell something that can only be sold once, and tell a story of indestructibility and biodegradability in the same breath? It started with a pitch to the FREITAG brothers and became one of the most complex projects of my career, as part of the Liip team.",
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
      "We built BRDGE, a catalogue of 50+ tested interactive modules, games, mediaguides, interactive floors, that turns a brief into a working idea in days. Every proposal now leads with custom, then offers BRDGE as the anchor: Signature (full custom build), Tailored (a module with new mechanics or content) and Ready (a module reskinned to a client's branding). Underneath, one shared language ties it together: a state-machine model of trigger, experience, feedback and data, so design and engineering reuse the same building blocks instead of starting over each time. Around the product, we built the growth system: a partner ecosystem of referrers, resellers and tech partners, a go-to-market segmented by agency type, and workflows, including where AI clearly helps, so partners can move from brief to pitch faster.",
    mybit:
      "Co-founding it, I a bit of everything. Lately, I focus on the business model and logic, the product structure behind BRDGE, the go-to-market and partner strategy, plus the actual research, UX and content. Notion holds the thinking, Figma the design, Claude is basically a fourth teammate for workflows, drafts and structuring ideas fast.",
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
