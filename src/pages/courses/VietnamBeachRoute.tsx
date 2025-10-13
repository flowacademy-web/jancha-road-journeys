import Navbar from "@/components/Navbar";
import CourseDetailHero from "@/components/CourseDetailHero";
import CourseInfo from "@/components/CourseInfo";
import RouteMap from "@/components/RouteMap";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/vietnam-beach-route.jpg";
import hoianImage from "@/assets/highlights/hoian-ancient-town.jpg";
import danangImage from "@/assets/highlights/danang-coastal-road.jpg";
import hueImage from "@/assets/highlights/hue-imperial-city.jpg";
import coffeeImage from "@/assets/highlights/vietnam-coffee.jpg";

const VietnamBeachRoute = () => {
  const itinerary = [
    {
      day: "1일차",
      title: "호이안 도착 및 오리엔테이션",
      description: "공항 픽업, 숙소 체크인, 자전거 및 장비 점검, 환영 만찬",
    },
    {
      day: "2일차",
      title: "호이안 고대 도시 투어",
      description: "현지 시장 방문, 전통 요리 체험 (라이딩 30km)",
    },
    {
      day: "3일차",
      title: "호이안 → 다낭 해안 도로 라이딩",
      description: "대리석 산 방문, 다낭 숙소 도착 (라이딩 40km)",
    },
    {
      day: "4일차",
      title: "다낭 자유 일정",
      description: "바나 힐스 옵션 투어, 해변 휴식",
    },
    {
      day: "5일차",
      title: "다낭 → 후에 라이딩",
      description: "하이반 고개 차량 이동, 후에 황궁 방문 (라이딩 30km)",
    },
    {
      day: "6일차",
      title: "후에 투어 및 귀환",
      description: "향강 크루즈, 공항 이동",
    },
  ];

  const highlights = [
    {
      title: "호이안 고대 도시",
      description: "유네스코 세계문화유산으로 지정된 아름다운 고대 도시를 자전거로 탐험합니다.",
      image: hoianImage,
    },
    {
      title: "다낭 해안 도로",
      description: "에메랄드빛 바다를 따라 이어지는 환상적인 해안 도로 라이딩",
      image: danangImage,
    },
    {
      title: "후에 황궁",
      description: "베트남 마지막 왕조의 수도, 역사가 살아 숨쉬는 고대 황궁 방문",
      image: hueImage,
    },
    {
      title: "현지 커피 체험",
      description: "베트남 전통 커피 농장 방문 및 시음 체험",
      image: coffeeImage,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <CourseDetailHero
        flag="🇻🇳"
        country="베트남"
        title="해안과 산을 잇는 감성 루트"
        description="페달을 밟을 때마다 바닷바람이 얼굴을 스칩니다. 여행이라기보다 '삶의 숨결'을 다시 느끼게 되는 코스입니다."
        image={heroImage}
      />

      <CourseInfo
        route="호이안 → 다낭 → 후에"
        distance="80~100km"
        duration="6일"
        difficulty="★★☆☆☆"
        groupSize="8~12명"
        accommodation="부티크 호텔 4성급"
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
            잔차로드와 함께 베트남 해안 감성 루트를 경험해보세요.
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

export default VietnamBeachRoute;
