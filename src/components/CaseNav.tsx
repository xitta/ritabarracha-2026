import { useEffect, useState } from "react";

interface CaseNavProps {
  sectionId: string;
  titles: string[];
}

// Vertical pagination for the case studies: fixed, centered vertically, only
// visible while the case studies section is on screen. The active case grows
// into a filled pill; the rest stay outlined dots.
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
    <nav
      aria-label="Case studies"
      className={`hidden md:flex fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 transition-opacity duration-500 ${
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
          className={`block w-3 rounded-full border-2 border-foreground transition-all duration-500 ease-out motion-reduce:transition-none ${
            i === active ? "h-8 bg-foreground" : "h-3 bg-background hover:bg-foreground/30"
          }`}
        />
      ))}
    </nav>
  );
};

export default CaseNav;
