import Navbar from "@/components/Navbar";
import CourseDetailHero from "@/components/CourseDetailHero";
import CourseInfo from "@/components/CourseInfo";
import RouteMap from "@/components/RouteMap";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/vietnam-hai-van.jpg";
import hoianImage from "@/assets/highlights/hoian-ancient-town.jpg";
import danangImage from "@/assets/highlights/danang-coastal-road.jpg";
import hueImage from "@/assets/highlights/hue-imperial-city.jpg";
import foodImage from "@/assets/highlights/vietnam-food.jpg";

const VietnamHaiVan = () => {
  const itinerary = [
    { day: "1일차", title: "호이안 도착", description: "오리엔테이션 및 숙소 체크인" },
    { day: "2일차", title: "호이안 고대 도시 투어", description: "세계문화유산 탐방" },
    { day: "3일차", title: "다낭 해안 도로 라이딩", description: "해안선을 따라 라이딩" },
    { day: "4일차", title: "다낭 자유 일정", description: "휴식 및 개인 일정" },
    { day: "5일차", title: "다낭 → 후에 라이딩", description: "하이반 패스 통과" },
    { day: "6일차", title: "후에 황궁 투어", description: "역사 유적지 방문" },
    { day: "7일차", title: "후에 → 동하 라이딩", description: "마지막 라이딩" },
    { day: "8일차", title: "귀환", description: "공항 이동" },
  ];

  const highlights = [
    {
      title: "호이안 고대 도시",
      description: "유네스코 세계문화유산, 역사와 문화 탐방",
      image: hoianImage,
    },
    {
      title: "다낭 해안 도로",
      description: "에메랄드빛 해안 도로 라이딩",
      image: danangImage,
    },
    {
      title: "후에 황궁",
      description: "베트남 마지막 왕조의 수도 방문",
      image: hueImage,
    },
    {
      title: "지역 문화 체험",
      description: "전통 시장과 음식, 소규모 마을 탐방",
      image: foodImage,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <CourseDetailHero
        flag="🇻🇳"
        country="베트남"
        title="하이반 패스"
        description="해안과 산을 연결하는 경치 좋은 코스로, 바닷바람과 산길을 함께 느낄 수 있는 감성 라이딩 코스입니다."
        image={heroImage}
      />

      <CourseInfo
        route="호이안 → 다낭 → 후에 → 동하"
        distance="200km"
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
            잔차로드와 함께 베트남 하이반 패스를 경험해보세요.
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

export default VietnamHaiVan;
