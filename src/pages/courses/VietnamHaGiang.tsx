import Navbar from "@/components/Navbar";
import CourseDetailHero from "@/components/CourseDetailHero";
import CourseInfo from "@/components/CourseInfo";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/vietnam-ha-giang.jpg";

const VietnamHaGiang = () => {
  const itinerary = [
    { day: "1일차", title: "하장 도착", description: "오리엔테이션 및 숙소 체크인" },
    { day: "2일차", title: "하장 → 동반 라이딩", description: "산악 지대 라이딩 시작" },
    { day: "3일차", title: "동반 → 메오박 라이딩", description: "고원 지대 통과" },
    { day: "4일차", title: "메오박 → 옌민 라이딩", description: "전통 마을 방문" },
    { day: "5일차", title: "옌민 → 하장 라이딩", description: "루프 완주" },
    { day: "6일차", title: "자유 라이딩 및 휴식", description: "주변 탐방" },
    { day: "7일차", title: "현지 체험", description: "문화 탐방 및 전통 음식 체험" },
    { day: "8일차", title: "자유 일정", description: "휴식 및 개인 일정" },
    { day: "9일차", title: "하장 주변 라이딩", description: "마지막 라이딩" },
    { day: "10일차", title: "귀환", description: "공항 이동" },
  ];

  const highlights = [
    {
      title: "하장 전통 마을",
      description: "현지 문화를 경험할 수 있는 소규모 마을 탐방",
    },
    {
      title: "북부 산악 라이딩",
      description: "경사와 풍경이 어우러진 도전적인 라이딩",
    },
    {
      title: "메오박 고원",
      description: "숨막히는 자연 풍경 속 라이딩",
    },
    {
      title: "현지 음식 체험",
      description: "지역 특산물과 전통 음식 즐기기",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <CourseDetailHero
        flag="🇻🇳"
        country="베트남"
        title="하장 루프"
        description="베트남 북부 산악 지대를 누비며 전통 마을과 숨겨진 자연 풍경을 만날 수 있는 모험 코스입니다."
        image={heroImage}
      />

      <CourseInfo
        route="하장–동반–메오박–옌민–하장"
        distance="366km"
        duration="9박 10일"
        difficulty="★★★☆☆"
        groupSize="8~12명"
        accommodation="현지 호텔 3~4성급"
      />

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
            잔차로드와 함께 베트남 하장 루프를 경험해보세요.
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

export default VietnamHaGiang;
