import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CaseStudyProps {
  title: string;
  tagline?: string;
  category: string;
  context?: string;
  period?: string;
  gap: string;
  fix: string;
  favorite: string;
  coverImage?: string;
  images?: string[];
}

const CaseStudy = ({
  title,
  tagline,
  category,
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

  return (
    <article className="mb-32 md:mb-44 pt-16 md:pt-24 border-t border-border first:border-t-0 first:pt-0" ref={ref}>
      {/* Images: cover first, others slide in from the right */}
      {slides.length > 0 && (
        <div className="mb-12 md:mb-16 scroll-reveal">
          <Carousel opts={{ align: "start" }} className="relative">
            <CarouselContent>
              {slides.map((image, index) => (
                <CarouselItem key={index} className="basis-auto">
                  <div className="h-[200px] sm:h-[300px] md:h-[460px]">
                    <img
                      src={image}
                      alt={index === 0 ? `${title} cover` : `${title} detail ${index}`}
                      className="h-full w-auto max-w-none"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {slides.length > 1 && (
              <>
                <CarouselPrevious className="left-4 h-11 w-11 border-0 bg-foreground text-background hover:bg-foreground/80 hover:text-background disabled:opacity-0" />
                <CarouselNext className="right-4 h-11 w-11 border-0 bg-foreground text-background hover:bg-foreground/80 hover:text-background disabled:opacity-0" />
              </>
            )}
          </Carousel>
        </div>
      )}

      {/* Header */}
      <div className="mb-12 scroll-reveal">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          {[category, context, period].filter(Boolean).join(" · ")}
        </p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          {title}
        </h2>
        {tagline && (
          <p className="mt-6 text-2xl md:text-3xl leading-snug font-semibold text-foreground max-w-3xl whitespace-pre-line">
            {tagline}
          </p>
        )}
      </div>

      {/* The Gap, The Fix, My Favorite */}
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
            My Favorite
          </h3>
          <div className="text-base leading-relaxed text-foreground/80 max-w-3xl space-y-4">
            {favorite.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default CaseStudy;
