import Navbar from "@/components/Navbar";
import CourseDetailHero from "@/components/CourseDetailHero";
import CourseInfo from "@/components/CourseInfo";
import RouteMap from "@/components/RouteMap";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/thailand-central.jpg";

const ThailandCentral = () => {
  const itinerary = [
    { day: "1일차", title: "차암 도착", description: "오리엔테이션 및 숙소 체크인" },
    { day: "2일차", title: "차암 해변 라이딩", description: "해안선을 따라 여유로운 라이딩" },
    { day: "3일차", title: "지역 마을 탐방", description: "현지 시장 방문 및 문화 체험" },
    { day: "4일차", title: "반그릇으로 이동", description: "중간 라이딩 및 자연 경관 감상" },
    { day: "5일차", title: "반그릇 주변 라이딩", description: "주변 자연 탐방" },
    { day: "6일차", title: "문화 체험", description: "현지 음식 체험 및 전통 활동" },
    { day: "7일차", title: "자연 경관 투어", description: "강변 라이딩 및 휴식" },
    { day: "8일차", title: "귀환 및 출국", description: "공항 이동" },
  ];

  const highlights = [
    {
      title: "차암 해변",
      description: "해안 라이딩과 바닷바람 체험",
    },
    {
      title: "반그릇 마을",
      description: "현지 문화와 음식 체험",
    },
    {
      title: "자연 경관 탐방",
      description: "강변, 논밭, 숲길 라이딩",
    },
    {
      title: "현지 시장 체험",
      description: "소규모 마을 방문 및 쇼핑",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <CourseDetailHero
        flag="🇹🇭"
        country="태국"
        title="중부 루트"
        description="태국 중부 해안과 마을을 연결하는 소소하지만 아름다운 라이딩 코스로, 해안과 자연, 마을 문화를 동시에 경험할 수 있습니다."
        image={heroImage}
      />

      <CourseInfo
        route="차암 → 반그릇"
        distance="180km"
        duration="8박 10일"
        difficulty="★★☆☆☆"
        groupSize="8~12명"
        accommodation="3~4성급 호텔"
      />

      {/* Route Map Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-12 text-center">
            여정 경로
          </h2>
          <RouteMap days={itinerary} />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-12 text-center">
            주요 포인트
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-border/50">
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
            잔차로드와 함께 태국 중부 루트를 경험해보세요.
          </p>
          <Button size="lg" className="font-sans">
            문의하기
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThailandCentral;
