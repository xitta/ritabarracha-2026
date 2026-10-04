import { useEffect, useMemo, useRef, useState } from "react";
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
}

const GAP = 70;

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
}: CaseStudyProps) => {
  const ref = useScrollReveal();
  const slides = [coverImage, ...images].filter(Boolean) as string[];
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
      setBox({ left: r.left, width: r.width, vw: document.documentElement.clientWidth });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const ready = box.vw > 0;
  const coverW = Math.round(box.width * 0.8);
  const slideH = coverRatio && coverW ? Math.round(coverW * coverRatio) : undefined;

  // Embla compares options by value, so the snap offset is read from a ref
  // and the carousel is re-initialised whenever the measurements change.
  const leftRef = useRef(0);
  leftRef.current = box.left;
  const [api, setApi] = useState<CarouselApi>();
  const opts = useMemo(() => ({ loop: true, align: () => leftRef.current }), []);

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
    <article className="mb-32 md:mb-44 pt-16 md:pt-24 border-t border-border first:border-t-0 first:pt-0" ref={ref}>
      <div ref={bodyRef} className="w-full h-0" aria-hidden="true" />

      {/* Images: full-bleed looping slider, cover aligned with the body */}
      {slides.length > 0 && (
        <div
          className="mb-12 md:mb-16 scroll-reveal relative"
          style={ready ? { width: box.vw, marginLeft: -box.left } : undefined}
        >
          <Carousel opts={opts} setApi={setApi}>
            <CarouselContent className="ml-0">
              {slides.map((image, index) => (
                <CarouselItem key={index} className="basis-auto pl-0" style={{ paddingRight: GAP }}>
                  {index === 0 ? (
                    <img
                      src={image}
                      alt={`${title} cover`}
                      style={ready ? { width: coverW } : undefined}
                      className="h-auto max-w-none block"
                      onLoad={(e) => {
                        const i = e.currentTarget;
                        if (i.naturalWidth) setCoverRatio(i.naturalHeight / i.naturalWidth);
                      }}
                    />
                  ) : (
                    <img
                      src={image}
                      alt={`${title} detail ${index}`}
                      style={slideH ? { height: slideH } : undefined}
                      className="w-auto max-w-none block h-[200px] md:h-[460px]"
                    />
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            {slides.length > 1 && (
              <>
                <CarouselPrevious className="left-4 md:left-6 h-11 w-11 border-0 bg-foreground text-background hover:bg-foreground/80 hover:text-background" />
                <CarouselNext className="right-4 md:right-6 h-11 w-11 border-0 bg-foreground text-background hover:bg-foreground/80 hover:text-background" />
              </>
            )}
          </Carousel>
        </div>
      )}

      {/* Header */}
      <div className="mb-12 scroll-reveal">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          {[context, period].filter(Boolean).join(" · ")}
        </p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          {title}
        </h2>
        {tagline && (
          <p className="mt-6 text-2xl md:text-3xl leading-snug font-semibold text-foreground max-w-3xl whitespace-pre-line">
            {tagline}
          </p>
        )}
        {tagList.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tags">
            {tagList.map((tag) => (
              <li
                key={tag}
                className="text-xs tracking-wide text-muted-foreground border border-border rounded-full px-3 py-1"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* The Gap, The Fix, My Fav */}
      <div className="grid md:grid-cols-3 gap-16">
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
    </article>
  );
};

export default CaseStudy;
