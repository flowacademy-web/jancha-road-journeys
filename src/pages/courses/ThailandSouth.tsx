import Navbar from "@/components/Navbar";
import CourseDetailHero from "@/components/CourseDetailHero";
import CourseInfo from "@/components/CourseInfo";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/thailand-south.jpg";
import coastImage from "@/assets/highlights/south-thailand-coast.jpg";
import villageImage from "@/assets/highlights/bangkrot-village.jpg";
import templeImage from "@/assets/highlights/thai-temple.jpg";

const ThailandSouth = () => {
  const itinerary = [
    { day: "1일차", title: "반그릇 도착", description: "오리엔테이션 및 숙소 체크인" },
    { day: "2일차", title: "해안 도로 라이딩", description: "남부 해안선 탐방" },
    { day: "3일차", title: "지역 마을 및 자연 탐방", description: "현지 문화 체험" },
    { day: "4일차", title: "수랏타니로 이동", description: "중간 라이딩 및 경관 감상" },
    { day: "5일차", title: "자유 일정", description: "현지 문화 체험 및 휴식" },
    { day: "6일차", title: "자연 경관 및 사원 탐방", description: "역사 유적지 방문" },
    { day: "7일차", title: "수랏타니 주변 라이딩", description: "마지막 라이딩" },
    { day: "8일차", title: "귀환 및 출국", description: "공항 이동" },
  ];

  const highlights = [
    {
      title: "남부 해안 도로",
      description: "아름다운 해안과 자연 경관 라이딩",
      image: coastImage,
    },
    {
      title: "수랏타니 마을",
      description: "전통 마을과 현지 문화 체험",
      image: villageImage,
    },
    {
      title: "사원 탐방",
      description: "태국 남부의 역사적 사원 방문",
      image: templeImage,
    },
    {
      title: "자연 경관 탐방",
      description: "강, 폭포, 숲길 라이딩",
      image: coastImage,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <CourseDetailHero
        flag="🇹🇭"
        country="태국"
        title="남부 루트"
        description="태국 남부 해안과 자연을 경험하며, 장거리 라이딩을 통해 도전과 성취감을 느낄 수 있는 모험 코스입니다."
        image={heroImage}
      />

      <CourseInfo
        route="반그릇 → 수랏타니"
        distance="370km"
        duration="8박 10일"
        difficulty="★★★☆☆"
        groupSize="8~12명"
        accommodation="3~4성급 호텔"
      />

      {/* Highlights Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-12 text-center">
            주요 포인트
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-border/50 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-dark mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-12 text-center">
            일정
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {itinerary.map((day, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-primary">{day.day}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <h3 className="font-serif text-lg font-bold text-dark">{day.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{day.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            잔차로드와 함께 태국 남부 루트를 경험해보세요.
          </p>
          <Button asChild size="lg" className="font-sans">
            <a href="https://naver.me/xZjo4yJ3" target="_blank" rel="noopener noreferrer">
              문의하기
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThailandSouth;
