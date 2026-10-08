import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export interface CaseGridItem {
  title: string;
  tagline?: string;
  tags?: string[];
  context?: string;
  period?: string;
  coverImage?: string;
  images?: string[];
}

interface CaseGridProps {
  items: CaseGridItem[];
  onOpen: (index: number) => void;
}

// Tags limited to two lines: as many as fit, then a "…" pill when some are
// left out. Re-measured on resize.
const TagLines = ({ tags }: { tags: string[] }) => {
  const ref = useRef<HTMLUListElement>(null);
  const [count, setCount] = useState(tags.length);

  useEffect(() => {
    const reset = () => setCount(tags.length);
    window.addEventListener("resize", reset);
    return () => window.removeEventListener("resize", reset);
  }, [tags.length]);

  useLayoutEffect(() => {
    const ul = ref.current;
    if (!ul || count === 0) return;
    const items = Array.from(ul.children) as HTMLElement[];
    const tops = Array.from(new Set(items.map((li) => li.offsetTop)));
    if (tops.length > 2) setCount((c) => c - 1);
  });

  const hidden = tags.length - count;

  return (
    <ul ref={ref} className="mt-4 flex flex-wrap gap-1.5" aria-label="Tags">
      {tags.slice(0, count).map((tag, i) => (
        <li
          key={tag}
          className={`text-[11px] tracking-wide border border-foreground rounded-full px-2.5 py-0.5 ${
            i === 0 ? "bg-foreground text-background" : "text-foreground"
          }`}
        >
          {tag}
        </li>
      ))}
      {hidden > 0 && (
        <li
          className="text-[11px] tracking-wide border border-foreground rounded-full px-2.5 py-0.5 text-foreground"
          title={tags.slice(count).join(", ")}
          aria-label={`${hidden} more`}
        >
          …
        </li>
      )}
    </ul>
  );
};

// Condensed overview: one card per case. The image is a small slideshow:
// it cycles through the case images on hover (desktop) or while the card is
// in the middle of the screen (touch), and rests on the cover otherwise.
const CaseCard = ({ item, index, onOpen }: { item: CaseGridItem; index: number; onOpen: (i: number) => void }) => {
  const slides = [item.coverImage, ...(item.images ?? [])].filter(Boolean) as string[];
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const cardRef = useRef<HTMLButtonElement>(null);

  // Advance while playing.
  useEffect(() => {
    if (!playing || slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setCurrent((c) => (c + 1) % slides.length), 1200);
    return () => window.clearInterval(id);
  }, [playing, slides.length]);

  // Touch devices have no hover: play while the card sits mid-screen.
  useEffect(() => {
    if (window.matchMedia("(hover: hover)").matches) return;
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        setPlaying(e.isIntersecting);
        if (!e.isIntersecting) setCurrent(0);
      },
      { rootMargin: "-35% 0px -35% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const tags = item.tags ?? [];

  return (
    <button
      ref={cardRef}
      type="button"
      onClick={() => onOpen(index)}
      onMouseEnter={() => setPlaying(true)}
      onMouseLeave={() => {
        setPlaying(false);
        setCurrent(0);
      }}
      className="group text-left animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {slides.map((src, i) => (
          <img
            key={src + i}
            src={src}
            alt={i === 0 ? `${item.title} cover` : ""}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {slides.length > 1 && (
          <div className="absolute bottom-3 left-3 right-3 flex gap-1" aria-hidden="true">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`h-0.5 flex-1 rounded-full transition-colors duration-300 ${
                  i === current ? "bg-white" : "bg-white/40"
                } ${playing ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
              />
            ))}
          </div>
        )}
      </div>

      <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">
        {[item.context, item.period].filter(Boolean).join(" · ")}
      </p>
      <h3 className="mt-2 text-xl md:text-2xl font-bold leading-tight tracking-tight">{item.title}</h3>
      {item.tagline && <p className="mt-1 text-base text-foreground/80">{item.tagline}</p>}
      {tags.length > 0 && <TagLines tags={tags} />}
      <span className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest link-underline pb-0.5">
        Read the case
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </button>
  );
};

const CaseGrid = ({ items, onOpen }: CaseGridProps) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-14 md:gap-y-20">
    {items.map((item, i) => (
      <CaseCard key={item.title} item={item} index={i} onOpen={onOpen} />
    ))}
  </div>
);

export default CaseGrid;
