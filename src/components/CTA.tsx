import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            익숙함을 벗어나야
            <br />
            인생의 다음 길이 열립니다
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            한강만 달리던 당신의 페달이 이제 세계로 향합니다.
            <br />
            잔차로드와 함께라면 걱정 없습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="font-sans text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
            >
              <a href="https://naver.me/xZjo4yJ3" target="_blank" rel="noopener noreferrer">
                시작하기
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="font-sans text-lg px-8 py-6"
            >
              <a href="#destinations">코스 둘러보기</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
