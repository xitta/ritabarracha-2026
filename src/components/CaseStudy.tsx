import { Card } from "@/components/ui/card";

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
    <article className="mb-32">
      <div className="mb-12">
        <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
          {category}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
      </div>

      {/* Cover Image */}
      <div className="mb-16 rounded-2xl overflow-hidden shadow-elevated">
        <img
          src={coverImage}
          alt={`${title} cover`}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Problem & Solution */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <Card className="p-8 shadow-card">
          <h3 className="text-2xl font-bold mb-4 text-destructive">The Problem</h3>
          <p className="text-lg leading-relaxed text-foreground/80">{problem}</p>
        </Card>
        <Card className="p-8 shadow-card">
          <h3 className="text-2xl font-bold mb-4 text-accent">The Solution</h3>
          <p className="text-lg leading-relaxed text-foreground/80">{solution}</p>
        </Card>
      </div>

      {/* Image Gallery */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
          >
            <img
              src={image}
              alt={`${title} detail ${index + 1}`}
              className="w-full h-full object-cover aspect-square"
            />
          </div>
        ))}
      </div>

      {/* Summary */}
      <Card className="p-8 bg-secondary shadow-card">
        <h3 className="text-2xl font-bold mb-4">Project Summary</h3>
        <p className="text-lg leading-relaxed text-foreground/80">{summary}</p>
      </Card>
    </article>
  );
};

export default CaseStudy;
