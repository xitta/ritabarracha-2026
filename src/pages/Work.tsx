import CaseStudy from "@/components/CaseStudy";

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
    title: "DataFlow Analytics Platform",
    category: "Product Design & UX",
    problem:
      "Enterprise teams struggled with fragmented analytics tools, leading to inefficient decision-making and data silos across departments. Users reported spending 40% of their time switching between different platforms and manually consolidating reports.",
    solution:
      "We designed a unified analytics dashboard with intelligent data visualization, automated reporting workflows, and real-time collaboration features. The platform integrated seamlessly with existing tools while providing a single source of truth for all business metrics.",
    summary:
      "Delivered a comprehensive analytics platform that reduced reporting time by 65% and increased data-driven decisions by 80%. The intuitive interface received a 4.8/5 user satisfaction score, and the platform now serves over 10,000 daily active users across 200+ companies.",
    coverImage: case1Cover,
    images: [case1Img1, case1Img2, case1Img3, case1Img4, case1Img5],
  },
  {
    title: "E-Commerce Conversion Optimization",
    category: "Digital Transformation",
    problem:
      "An established online retailer faced declining conversion rates and high cart abandonment (78%). Their outdated website interface confused customers, while complex checkout flows and poor mobile experience drove potential buyers away.",
    solution:
      "We redesigned the entire customer journey with mobile-first principles, simplified navigation, optimized product discovery with AI-powered recommendations, and streamlined the checkout process to just 3 steps. Enhanced product photography and trust signals were integrated throughout.",
    summary:
      "The redesign increased conversion rates by 156%, reduced cart abandonment to 32%, and boosted mobile sales by 240%. Average order value grew by 35%, and customer satisfaction scores improved from 3.2 to 4.7 stars. The project delivered $4.2M in additional revenue within the first quarter.",
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

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container mx-auto px-4 pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Selected Work
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Design Excellence in Action
          </h1>
        </div>
      </section>

      <div className="border-t border-border" />

      <section id="case-studies" className="container mx-auto px-4 py-24 md:py-32">
        {caseStudies.map((study, index) => (
          <CaseStudy key={index} {...study} />
        ))}
      </section>

      <footer className="border-t border-border py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Ready to Transform Your Project?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Let's collaborate to create exceptional experiences that drive real results
          </p>
          <a
            href="mailto:hello@example.com"
            className="link-underline text-sm uppercase tracking-widest font-medium pb-1"
          >
            Start a Conversation
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Work;
