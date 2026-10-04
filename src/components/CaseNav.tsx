import { useEffect, useState } from "react";

interface CaseNavProps {
  sectionId: string;
  titles: string[];
}

// Vertical pagination for the case studies: fixed, centered vertically, only
// visible while the case studies section is on screen. The active case grows
// into a filled pill; the rest stay outlined dots. White + difference blending
// makes it read black on the page and white over dark images.
const CaseNav = ({ sectionId, titles }: CaseNavProps) => {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const section = document.getElementById(sectionId);
      if (!section) return;
      const mid = window.innerHeight / 2;
      const r = section.getBoundingClientRect();
      setVisible(r.top < mid && r.bottom > mid);
      const articles = section.querySelectorAll<HTMLElement>(":scope > article");
      let current = 0;
      articles.forEach((a, i) => {
        if (a.getBoundingClientRect().top <= mid) current = i;
      });
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionId]);

  const goTo = (i: number) => {
    const section = document.getElementById(sectionId);
    const target = section?.querySelectorAll<HTMLElement>(":scope > article")[i];
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
    {/* Mobile: small horizontal version, sticky just below the navbar */}
    <nav
      aria-label="Case studies"
      className={`md:hidden fixed top-16 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm flex justify-center items-center gap-1.5 py-2 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {titles.map((title, i) => (
        <button
          key={title}
          type="button"
          onClick={() => goTo(i)}
          aria-label={title}
          aria-current={i === active ? "true" : undefined}
          className={`block h-2 rounded-full border border-foreground transition-all duration-500 ease-out motion-reduce:transition-none ${
            i === active ? "w-5 bg-foreground" : "w-2 bg-transparent"
          }`}
        />
      ))}
    </nav>
    <nav
      aria-label="Case studies"
      className={`hidden md:flex fixed left-6 lg:left-10 top-1/2 -translate-y-1/2 z-40 mix-blend-difference flex-col items-center gap-3 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {titles.map((title, i) => (
        <button
          key={title}
          type="button"
          onClick={() => goTo(i)}
          aria-label={title}
          aria-current={i === active ? "true" : undefined}
          title={title}
          className={`block w-3 rounded-full border border-white transition-all duration-500 ease-out motion-reduce:transition-none ${
            i === active ? "h-8 bg-white" : "h-3 bg-transparent hover:bg-white/40"
          }`}
        />
      ))}
    </nav>
    </>
  );
};

export default CaseNav;
