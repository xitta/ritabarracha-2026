import { useEffect, useState } from "react";
import { LayoutGrid, List } from "lucide-react";

export type CaseView = "list" | "grid";

interface ViewToggleProps {
  sectionId: string;
  view: CaseView;
  onChange: (view: CaseView) => void;
}

// Sticky List / Grid switch, top centre, shown while the case studies
// section is on screen. On mobile it sits just below the case pagination
// bar (list view) or right below the navbar (grid view, no pagination).
const ViewToggle = ({ sectionId, view, onChange }: ViewToggleProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const section = document.getElementById(sectionId);
      if (!section) return;
      const r = section.getBoundingClientRect();
      setVisible(r.top < window.innerHeight * 0.6 && r.bottom > 160);
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
  }, [sectionId, view]);

  const options: { value: CaseView; label: string; Icon: typeof List }[] = [
    { value: "list", label: "List", Icon: List },
    { value: "grid", label: "Grid", Icon: LayoutGrid },
  ];

  return (
    <div
      role="radiogroup"
      aria-label="View"
      className={`fixed left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 rounded-full border border-foreground bg-background/90 backdrop-blur-sm p-1 shadow-sm transition-all duration-500 motion-reduce:transition-none ${
        view === "list" ? "top-[100px]" : "top-[76px]"
      } md:top-20 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
    >
      {options.map(({ value, label, Icon }) => {
        const active = view === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            tabIndex={visible ? undefined : -1}
            onClick={() => onChange(value)}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 md:px-4 py-1.5 text-xs uppercase tracking-widest transition-colors ${
              active ? "bg-foreground text-background" : "text-foreground hover:bg-foreground/10"
            }`}
          >
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden md:inline">{label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ViewToggle;
