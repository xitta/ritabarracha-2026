interface CaseStudyProps {
  title: string;
  category: string;
  problem: string;
  solution: string;
  summary: string;
  coverImage: string;
  images: string[];
}

const CaseStudy = ({
  title,
  category,
  problem,
  solution,
  summary,
  coverImage,
  images,
}: CaseStudyProps) => {
  return (
    <article className="mb-32 md:mb-44">
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
          {category}
        </p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          {title}
        </h2>
      </div>

      {/* Cover Image */}
      <div className="mb-16 overflow-hidden">
        <img
          src={coverImage}
          alt={`${title} cover`}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Problem & Solution */}
      <div className="grid md:grid-cols-2 gap-16 mb-16">
        <div>
          <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            The Problem
          </h3>
          <p className="text-base leading-relaxed text-foreground/80">{problem}</p>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            The Solution
          </h3>
          <p className="text-base leading-relaxed text-foreground/80">{solution}</p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden"
          >
            <img
              src={image}
              alt={`${title} detail ${index + 1}`}
              className="w-full h-full object-cover aspect-square grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="border-t border-border pt-10">
        <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          Project Summary
        </h3>
        <p className="text-base leading-relaxed text-foreground/80 max-w-3xl">
          {summary}
        </p>
      </div>
    </article>
  );
};

export default CaseStudy;
