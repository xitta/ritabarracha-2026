import { useScrollReveal } from "@/hooks/useScrollReveal";

interface CaseStudyProps {
  title: string;
  tagline?: string;
  category: string;
  gap: string;
  fix: string;
  mybit: string;
  coverImage: string;
  images: string[];
}

const CaseStudy = ({
  title,
  tagline,
  category,
  gap,
  fix,
  mybit,
  coverImage,
  images,
}: CaseStudyProps) => {
  const ref = useScrollReveal();

  return (
    <article className="mb-32 md:mb-44 pt-16 md:pt-24 border-t border-border first:border-t-0 first:pt-0" ref={ref}>
      {/* Header */}
      <div className="mb-10 scroll-reveal">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          {category}
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

      {/* Cover Image */}
      <div className="mb-16 overflow-hidden scroll-reveal">
        <img
          src={coverImage}
          alt={`${title} cover`}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* The Gap & The Fix */}
      <div className="grid md:grid-cols-2 gap-16 mb-16">
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
      </div>

      {/* My Bit */}
      <div className="mb-16 scroll-reveal scroll-reveal-delay-2">
        <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          My Bit
        </h3>
        <div className="text-base leading-relaxed text-foreground/80 max-w-3xl space-y-4">
          {mybit.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 items-center">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden scroll-reveal flex items-center"
            style={{ transitionDelay: `${index * 0.08}s` }}
          >
            <img
              src={image}
              alt={`${title} detail ${index + 1}`}
              className="w-full h-auto object-contain md:grayscale md:hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ))}
      </div>

    </article>
  );
};

export default CaseStudy;
