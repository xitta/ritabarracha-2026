import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface CaseStudyProps {
  title: string;
  tagline?: string;
  category?: string;
  tags?: string[];
  context?: string;
  period?: string;
  gap: string;
  fix: string;
  favorite: string;
  coverImage?: string;
  images?: string[];
  link?: string;
}

const GAP_DESKTOP = 40;
const GAP_MOBILE = 24;
const MAX_H = 400; // gallery banner height cap

const CaseStudy = ({
  title,
  tagline,
  category,
  tags,
  context,
  period,
  gap,
  fix,
  favorite,
  coverImage,
  images = [],
  link,
}: CaseStudyProps) => {
  const ref = useScrollReveal();
  const slides = [coverImage, ...images].filter(Boolean) as string[];
  // Embla only loops when the strip is clearly wider than the viewport, so
  // short galleries are repeated (2x, or 3x for very few images).
  const reps = slides.length < 2 ? 1 : slides.length < 4 ? 3 : 2;
  const loopSlides = Array.from({ length: reps }, () => slides).flat();
  const tagList = tags ?? (category ? category.split(" · ") : []);

  // Measure the page body so the slider can bleed full-width while the
  // cover starts aligned with the body and takes 80% of its width.
  const bodyRef = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState({ left: 0, width: 0, vw: 0 });
  const [coverRatio, setCoverRatio] = useState(0);

  useEffect(() => {
    const measure = () => {
      const el = bodyRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setBox({
        left: r.left,
        width: r.width,
        vw: document.documentElement.clientWidth,
      });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const isMobile = box.vw > 0 && box.vw < 768;

  // Gap / Fix / Fav start collapsed (mobile and desktop) so the page stays
  // short; readers open the cases they care about.
  const [textOpen, setTextOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const textId = `case-text-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  const collapsed = !textOpen;
  const closeText = () => {
    setTextOpen(false);
    // Keep the reader at this case after closing a long text.
    requestAnimationFrame(() => {
      const b = toggleRef.current;
      if (b && b.getBoundingClientRect().top < 0)
        b.scrollIntoView({ block: "center", behavior: "smooth" });
    });
  };
  const slideGap = isMobile ? GAP_MOBILE : GAP_DESKTOP;

  // Mobile: tap an image to open it larger in a swipeable overlay.
  const [lightbox, setLightbox] = useState<number | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (lightbox === null) return;
    const el = overlayRef.current;
    if (el) el.scrollLeft = lightbox * el.clientWidth;
    setCurrent(lightbox);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  const ready = box.vw > 0;
  const coverW = Math.round(box.width * 0.8);
  const slideH =
    coverRatio && coverW
      ? Math.round(Math.min(MAX_H, coverW * coverRatio))
      : undefined;
  const coverDisplayW =
    slideH && coverRatio ? Math.round(slideH / coverRatio) : coverW;

  // Embla compares options by value, so the snap offset is read from a ref
  // and the carousel is re-initialised whenever the measurements change.
  const leftRef = useRef(0);
  leftRef.current = box.left;
  const [api, setApi] = useState<CarouselApi>();
  const opts = useMemo(
    () => ({ loop: true, align: () => leftRef.current }),
    [],
  );

  useEffect(() => {
    api?.reInit();
  }, [api, box.left, box.width, slideH]);

  // Marquee: a slow continuous drift, like a mood strip. It only pauses while
  // dragging or using the arrows, and resumes shortly after. Respects reduced motion.
  useEffect(() => {
    if (!api || slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const SPEED = 0.6; // px per frame
    let running = false;
    let resumeTimer: number | undefined;
    let defaultBody: ReturnType<CarouselApi["internalEngine"]>["scrollBody"];

    const start = () => {
      const engine = api.internalEngine();
      if (running) return;
      defaultBody = engine.scrollBody;
      const self = {
        direction: () => -1,
        duration: () => -1,
        velocity: () => -SPEED,
        settled: () => false,
        seek: () => {
          engine.previousLocation.set(engine.location);
          engine.location.add(-SPEED);
          engine.target.set(engine.location);
          return self;
        },
        useBaseFriction: () => self,
        useBaseDuration: () => self,
        useFriction: () => self,
        useDuration: () => self,
      };
      engine.scrollBody = self as unknown as typeof defaultBody;
      engine.animation.start();
      running = true;
    };

    const stop = () => {
      window.clearTimeout(resumeTimer);
      if (!running) return;
      const engine = api.internalEngine();
      engine.scrollBody = defaultBody;
      engine.target.set(engine.location);
      running = false;
    };

    const resumeLater = (ms = 2000) => {
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(start, ms);
    };

    const root = api.rootNode().parentElement ?? api.rootNode();
    const onPointerDown = () => stop();
    const onSettle = () => {
      if (!running) resumeLater();
    };
    const onReInit = () => {
      running = false;
      resumeLater(1500);
    };
    const onArrowClick = (e: Event) => {
      if ((e.target as HTMLElement).closest("button")) stop();
    };

    root.addEventListener("click", onArrowClick, true);
    api.on("pointerDown", onPointerDown);
    api.on("settle", onSettle);
    api.on("reInit", onReInit);
    resumeLater(1500);

    return () => {
      stop();
      root.removeEventListener("click", onArrowClick, true);
      api.off("pointerDown", onPointerDown);
      api.off("settle", onSettle);
      api.off("reInit", onReInit);
    };
  }, [api, slides.length]);

  return (
    <article
      className="group relative mb-20 md:mb-28 pt-12 md:pt-20 first:pt-0"
      ref={ref}
    >
      {/* Full-bleed separator between case studies (hidden on the first one) */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-border group-first:hidden"
        style={ready ? { left: -box.left, right: "auto", width: box.vw } : undefined}
      />
      <div ref={bodyRef} className="w-full h-0" aria-hidden="true" />

      {/* Images: full-bleed looping slider, cover aligned with the body */}
      {slides.length > 0 && (
        <div
          className="mb-12 md:mb-16 scroll-reveal relative"
          style={ready ? { width: box.vw, marginLeft: -box.left } : undefined}
        >
          <Carousel opts={opts} setApi={setApi}>
            <CarouselContent className="ml-0">
              {loopSlides.map((image, i) => {
                const index = i % slides.length;
                const isCopy = i >= slides.length;
                return (
                <CarouselItem
                  key={i}
                  className="basis-auto pl-0"
                  aria-hidden={isCopy || undefined}
                  style={{ paddingRight: slideGap }}
                  onClick={() => {
                    if (!isMobile) return; // Embla already swallows the click after a drag
                    setLightbox(index);
                  }}
                >
                  {index === 0 ? (
                    <img
                      src={image}
                      alt={isCopy ? "" : `${title} cover`}
                      style={ready ? { width: coverDisplayW } : undefined}
                      className="h-auto max-w-none block"
                      onLoad={(e) => {
                        const i = e.currentTarget;
                        if (i.naturalWidth)
                          setCoverRatio(i.naturalHeight / i.naturalWidth);
                      }}
                    />
                  ) : (
                    <img
                      src={image}
                      alt={isCopy ? "" : `${title} detail ${index}`}
                      style={slideH ? { height: slideH } : undefined}
                      className="w-auto max-w-none block h-[200px] md:h-[400px]"
                    />
                  )}
                </CarouselItem>
                );
              })}
            </CarouselContent>
            {slides.length > 1 && (
              <>
                <CarouselPrevious className="left-auto right-[68px] md:right-[76px] h-11 w-11 border-0 bg-foreground text-background hover:bg-foreground/80 hover:text-background" />
                <CarouselNext className="right-4 md:right-6 h-11 w-11 border-0 bg-foreground text-background hover:bg-foreground/80 hover:text-background" />
              </>
            )}
          </Carousel>
        </div>
      )}

      {/* Header */}
      <div className="mb-8 md:mb-12 scroll-reveal">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          {[context, period].filter(Boolean).join(" · ")}
        </p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          {title}
        </h2>
        {tagline && (
          <p className="mt-4 text-2xl md:text-3xl leading-snug font-semibold text-foreground max-w-3xl whitespace-pre-line">
            {tagline}
          </p>
        )}
        {tagList.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tags">
            {tagList.map((tag, i) => (
              <li
                key={tag}
                className={`text-xs tracking-wide border border-foreground rounded-full px-3 py-1 ${
                  i === 0 ? "bg-foreground text-background" : "text-foreground"
                }`}
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-6 inline-flex items-center gap-1 text-xs uppercase tracking-widest pb-1"
          >
            {new URL(link).hostname.replace(/^www\./, "")}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        )}
      </div>

      {/* Toggle for The Gap, The Fix, My Fav */}
      <button
        ref={toggleRef}
        type="button"
        onClick={() => (textOpen ? closeText() : setTextOpen(true))}
        aria-expanded={textOpen}
        aria-controls={textId}
        className="w-full flex items-center justify-between border-y border-foreground py-4 text-xs uppercase tracking-widest"
      >
        <span>{textOpen ? "Close" : "Read the case"}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${textOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {/* The Gap, The Fix, My Fav (collapsible) */}
      <div
        id={textId}
        aria-hidden={collapsed || undefined}
        className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${
          textOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
      <div className="overflow-hidden">
      <div className="grid md:grid-cols-3 gap-12 md:gap-16 pt-8 md:pt-10">
        <div className="scroll-reveal">
          <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            The Gap
          </h3>
          <p className="text-base leading-relaxed text-foreground/80">{gap}</p>
        </div>
        <div className="scroll-reveal scroll-reveal-delay-1">
          <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            The Fix
          </h3>
          <p className="text-base leading-relaxed text-foreground/80">{fix}</p>
        </div>
        <div className="scroll-reveal scroll-reveal-delay-2">
          <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            My Fav
          </h3>
          <div className="text-base leading-relaxed text-foreground/80 max-w-3xl space-y-4">
            {favorite.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={closeText}
        tabIndex={collapsed ? -1 : undefined}
        className="mt-10 w-full flex items-center justify-between border-y border-foreground py-4 text-xs uppercase tracking-widest"
      >
        <span>Close</span>
        <ChevronDown className="h-4 w-4 rotate-180" aria-hidden="true" />
      </button>
      </div>
      </div>
      {/* Mobile overlay: tapped image shown larger, swipe for the others */}
      {lightbox !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-[60] bg-black flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} gallery`}
          >
            <div className="flex items-center justify-between px-4 py-3 text-white text-xs tracking-widest">
              <span>
                {current + 1} / {slides.length}
              </span>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                aria-label="Close gallery"
                className="h-11 w-11 -mr-2 flex items-center justify-center"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div
              ref={overlayRef}
              className="flex-1 flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              onScroll={(e) => {
                const el = e.currentTarget;
                setCurrent(Math.round(el.scrollLeft / el.clientWidth));
              }}
              onClick={(e) => {
                if (
                  e.target === e.currentTarget ||
                  (e.target as HTMLElement).dataset.backdrop
                )
                  setLightbox(null);
              }}
            >
              {slides.map((image, index) => (
                <div
                  key={index}
                  data-backdrop="true"
                  className="w-screen shrink-0 h-full snap-center flex items-center justify-center px-4"
                >
                  <img
                    src={image}
                    alt={`${title} ${index === 0 ? "cover" : `detail ${index}`}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>,
          document.body,
        )}
    </article>
  );
};

export default CaseStudy;
