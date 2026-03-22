import CaseStudy from "@/components/CaseStudy";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
import case1Img4 from "@/assets/case1-img4.jpg";
import case1Img5 from "@/assets/case1-img5.jpg";

import case2Cover from "@/assets/case2-cover.jpg";
import case2Img1 from "@/assets/case2-img1.jpg";
import case2Img2 from "@/assets/case2-img2.jpg";
import case2Img3 from "@/assets/case2-img3.jpg";
import case2Img4 from "@/assets/case2-img4.jpg";
import case2Img5 from "@/assets/case2-img5.jpg";

import case3Cover from "@/assets/case3-cover.jpg";
import case3Img1 from "@/assets/case3-img1.jpg";
import case3Img2 from "@/assets/case3-img2.jpg";
import case3Img3 from "@/assets/case3-img3.jpg";
import case3Img4 from "@/assets/case3-img4.jpg";
import case3Img5 from "@/assets/case3-img5.jpg";

const caseStudies = [
  {
    title: "herbling by Ricola",
    tagline:
      "Naturally healthy Ricola herbling – a holistic vitalizing drink, delighting all your senses.\nMade with rich and pure Swiss Alpine herbs,\nfermented naturally to create a carefully crafted brew, enjoyed everyday.",
    category: "Product Design & UX",
    problem:
      "People want to drink something special, but not alcohol anymore. Yet the alternatives disappoint: alcohol-free wines lose their flavour through artificial extraction, juices feel cheap, and water kills the moment. Health-conscious consumers, pregnant women, drivers, and the sober-curious deserve better. The market is ready. The right drink just didn't exist yet.",
    solution:
      "herbling by Ricola is a naturally sparkling herbal tea. Low in sugar, alcohol-free, and crafted from Ricola's Swiss alpine herb selection with a unique ripening refinement. Light, refreshing, and premium; something worth serving at a dinner table, worth pairing with food, worth mixing with. Built on what Ricola already does best: natural ingredients, regional roots, and a trusted brand. Designed for real occasions. Made to be loved.",
    summary:
      "herbling was an early-stage innovation trial project born inside Ricola, developing a premium sparkling herbal drink for health and sustainability-conscious consumers (LOHAS), in Switzerland and beyond. The team behind it: Rita (experience designer), Luca (food product developer), and Tatjana (innovation manager), supported by mentors in business, herb competence, innovation, and brand building, and funded across project budget and crowdfunding campaign.\n\nThe team built iteratively — taste, brand, storytelling, packaging, and sales channels all tested in short cycles with real consumers and experts. Early results were encouraging: at field tests, tasters confirmed purchase intent on the spot, and over 1'000 bottles were crowdfunded via our promotional pre-sale page. Social media buzz appeared organically. A sommelier, a food innovation CTO, and a Michelin-level dining scene were already paying attention.\n\nThe addressable market across ice tea, carbonates, and non-alcoholic wine and beer in Switzerland alone was estimated at 176M CHF — with a target of 30M CHF revenue by 2024 through craft segment penetration and a direct-to-consumer model. herbling was not there yet. The trial project ended, but herbling was closer than before.",
    coverImage: case1Cover,
    images: [case1Img1, case1Img2, case1Img3, case1Img4, case1Img5],
  },
  {
    title: "Migros.ch rebranding and omnichannel integration",
    category: "Digital Transformation",
    problem:
      "Migros was operating a fragmented digital landscape: multiple sub-brands, separate web presences, and no unified experience. Customers navigating migros.ch and those shopping on LeShop faced entirely different environments, yet they were interacting with Switzerland's largest retailer. The ambition was clear — one platform, one brand — but getting there required fundamental decisions about brand architecture, UX, and the sequencing of change at scale.",
    solution:
      "My involvement spanned two phases: first supporting the brand transition from LeShop.ch to Migros Online, then envisioning the full merger into migros.ch. The harder challenge was designing a platform that could coherently serve two distinct shopping modes — online delivery and physical stores — under a single experience. Advisory work centred on brand architecture, information structure, and aligning cross-functional teams around a shared digital vision.",
    summary:
      "This engagement represents one of the most significant digital consolidations in Swiss retail, unfolding over several years and multiple brand identities. Starting with the LeShop to Migros Online rebrand, the work progressively built toward a fuller vision: a single digital platform capable of serving both online grocery and the broader physical store experience under one coherent brand.
Strategic design at this level is less about individual screens and more about creating the conditions for good decisions to be made consistently — across teams, over time, and at scale. The result is migros.ch as it stands today: the unified digital home of Switzerland's largest retailer, serving millions of customers across online and offline touchpoints.",
    coverImage: case2Cover,
    images: [case2Img1, case2Img2, case2Img3, case2Img4, case2Img5],
  },
  {
    title: "EduTech Learning Platform",
    category: "Educational Technology",
    problem:
      "Educational institutions struggled with outdated learning management systems that failed to engage students. Teachers reported low student participation, while students found the interface confusing and demotivating. Accessibility was limited for students with disabilities.",
    solution:
      "We created an interactive learning platform with gamification elements, adaptive learning paths, video content integration, and comprehensive accessibility features. Teachers gained powerful analytics dashboards while students enjoyed personalized learning experiences with progress tracking and achievement systems.",
    summary:
      "Student engagement increased by 215%, with course completion rates rising from 34% to 78%. Teacher workload for content management decreased by 50%, and the platform achieved WCAG 2.1 AAA accessibility standards. Now used by 500+ schools serving 150,000 students globally.",
    coverImage: case3Cover,
    images: [case3Img1, case3Img2, case3Img3, case3Img4, case3Img5],
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
            Spreading empathy at the intersection of trust and impact.
          </h1>
        </div>
      </section>

      {/* Client Logos */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <p className="scroll-reveal text-xs uppercase tracking-widest text-muted-foreground mb-12">Selected Clients</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 items-center scroll-reveal">
          {[
            { src: logoMigros, alt: "Migros" },
            { src: logoEnergie360, alt: "Energie 360°" },
            { src: logoKantonal, alt: "Basellandschaftliche Kantonalbank" },
            { src: logoLocal, alt: "Local" },
            { src: logoRicola, alt: "Ricola" },
            { src: logoRicardo, alt: "Ricardo" },
            { src: logoOpendata, alt: "Opendata.swiss" },
            { src: logoTedx, alt: "TEDx" },
            { src: logoFreitag, alt: "Freitag" },
            { src: logoTutti, alt: "Tutti" },
            { src: logoWecollect, alt: "WeCollect" },
            { src: logoLiip, alt: "Liip" },
            { src: logoTx, alt: "TX Group" },
            { src: logo20min, alt: "20 Minuten" },
            { src: logoRappold, alt: "Rappold Köhli" },
            { src: logoHwz, alt: "HWZ" },
          ].map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center p-4 md:p-6 hover:opacity-80 transition-opacity duration-300"
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
