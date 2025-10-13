import Navbar from "@/components/Navbar";
import CourseDetailHero from "@/components/CourseDetailHero";
import CourseInfo from "@/components/CourseInfo";
import RouteMap from "@/components/RouteMap";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/laos-north.jpg";
import vangviengImage from "@/assets/highlights/vangvieng-nature.jpg";
import luangprabangImage from "@/assets/highlights/luangprabang-temples.jpg";
import villageImage from "@/assets/highlights/lao-village.jpg";
import mekongImage from "@/assets/highlights/mekong-river.jpg";

const LaosNorth = () => {
  const itinerary = [
    { day: "1일차", title: "방비엥 도착", description: "오리엔테이션 및 숙소 체크인" },
    { day: "2일차", title: "방비엥 주변 라이딩", description: "자연 경관 탐방" },
    { day: "3일차", title: "현지 마을 및 문화 체험", description: "전통 마을 방문" },
    { day: "4일차", title: "루앙프라방으로 이동", description: "중간 라이딩 및 경관 감상" },
    { day: "5일차", title: "루앙프라방 시내 라이딩", description: "고대 도시 탐방" },
    { day: "6일차", title: "사원 및 문화 투어", description: "역사 유적지 방문" },
    { day: "7일차", title: "자연 탐방", description: "강변 라이딩 및 폭포 방문" },
    { day: "8일차", title: "귀환 및 출국", description: "공항 이동" },
  ];

  const highlights = [
    {
      title: "방비엥 주변 자연",
      description: "강, 산, 논밭 라이딩",
      image: vangviengImage,
    },
    {
      title: "루앙프라방 역사 탐방",
      description: "사원 및 고대 도시",
      image: luangprabangImage,
    },
    {
      title: "현지 마을 체험",
      description: "문화, 음식, 소규모 마을 방문",
      image: villageImage,
    },
    {
      title: "강변 라이딩",
      description: "여유로운 풍경 속 라이딩 체험",
      image: mekongImage,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <CourseDetailHero
        flag="🇱🇦"
        country="라오스"
        title="북부 루트"
        description="라오스 북부의 자연과 전통 마을을 연결하는 라이딩 코스로, 평화롭고 여유로운 여행을 즐길 수 있는 코스입니다."
        image={heroImage}
      />

      <CourseInfo
        route="방비엥 → 루앙프라방"
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
            잔차로드와 함께 태국-말레이시아 국경 루트를 경험해보세요.
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

export default LaosNorth;
