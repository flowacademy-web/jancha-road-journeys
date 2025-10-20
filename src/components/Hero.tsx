import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-vietnam-cyclist.jpg";

const Hero = () => {
  const scrollToDestinations = () => {
    document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTestimonials = () => {
    document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="50세 사이클리스트가 베트남 숲길을 라이딩하는 모습"
        className="absolute inset-0 w-full h-full object-cover object-center md:object-center"
        style={{ objectPosition: 'center 35%' }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="relative h-full flex items-end pb-20 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-up">
            {/* Main Headline */}
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              인생의 새로운 모험을,
              <br />
              페달 위에서 시작하세요.
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/90 mb-8 font-light">
              베트남 • 태국 • 라오스 — 감성 자전거 여행 패키지
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToDestinations}
                className="bg-primary hover:bg-primary/90 text-white font-sans group"
              >
                코스 보러가기
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToTestimonials}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm font-sans"
              >
                <Star className="mr-2 h-4 w-4" />
                후기 보기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
