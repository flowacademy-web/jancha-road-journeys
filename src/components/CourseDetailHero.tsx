interface CourseDetailHeroProps {
  flag: string;
  country: string;
  title: string;
  description: string;
  image: string;
}

const CourseDetailHero = ({ flag, country, title, description, image }: CourseDetailHeroProps) => {
  return (
    <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/80" />
      </div>
      
      <div className="relative h-full container mx-auto px-4 flex items-end pb-16">
        <div className="max-w-3xl animate-fade-up">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{flag}</span>
            <span className="text-white/80 font-medium">{country}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-lg text-white/90 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailHero;
