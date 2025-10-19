const Hero = () => {
  return (
    <section className="gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Design Excellence in Action
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-12 leading-relaxed">
            Exploring innovative solutions that transformed challenges into breakthrough results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#case-studies" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-all shadow-elevated hover:shadow-card"
            >
              View Case Studies
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground font-semibold transition-all border border-primary-foreground/20"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
