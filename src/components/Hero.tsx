const Hero = () => {
  return (
    <section className="bg-background text-foreground">
      <div className="container mx-auto px-4 pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
            Selected Work
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-16 leading-relaxed max-w-2xl mx-auto">
            A collection of projects where strategy, design and technology came together
          </p>
          <div className="flex gap-8 justify-center text-sm uppercase tracking-widest font-medium">
            <a
              href="#case-studies"
              className="link-underline pb-1"
            >
              View Case Studies
            </a>
            <a
              href="#contact"
              className="link-underline pb-1"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border" />
    </section>
  );
};

export default Hero;
