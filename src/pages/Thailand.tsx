import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Users, Shield, ArrowRight } from "lucide-react";
import thailandImage from "@/assets/thailand-bike.jpg";

const Thailand = () => {
  const highlights = [
    {
      title: "도이수텝 사원",
      description: "치앙마이를 내려다보는 황금 사원, 영적인 평화를 느끼는 순간",
    },
    {
      title: "마에림 밸리",
      description: "푸른 계곡과 논밭이 펼쳐진 북부 태국의 숨은 보석",
    },
    {
      title: "현지 야시장",
      description: "치앙마이 나이트 바자에서 즐기는 현지 음식과 문화",
    },
    {
      title: "차량 서포트",
      description: "힘든 구간은 서포트 차량이 함께 동행하여 안전을 책임집니다",
    },
  ];

  const itinerary = [
    {
      day: "1일차",
      title: "치앙마이 도착",
      activities: ["공항 픽업 및 숙소 체크인", "자전거 및 안전 장비 점검", "시내 투어 및 환영 만찬"],
    },
    {
      day: "2일차",
      title: "치앙마이 시내 → 도이수텝 사원",
      activities: ["아침 7시 출발", "시내에서 도이수텝까지 라이딩 (25km, 산악 구간)", "사원 방문 및 명상 시간", "현지 식당 점심"],
    },
    {
      day: "3일차",
      title: "마에림 밸리 투어",
      activities: ["아침 6시 출발", "마에림 밸리 라이딩 (30km)", "코끼리 보호 센터 방문", "현지 마을 체험"],
    },
    {
      day: "4일차",
      title: "자유 일정 / 옵션 투어",
      activities: ["휴식 또는 시내 자유 라이딩", "타이 마사지 체험", "야시장 탐방", "석식 자유"],
    },
    {
      day: "5일차",
      title: "치앙마이 순환 코스",
      activities: ["아침 7시 출발", "치앙마이 외곽 순환 (15km)", "커피 농장 방문", "공항 이동 및 귀국"],
    },
  ];

  const testimonials = [
    {
      name: "이순희",
      age: 58,
      location: "부산 해운대구",
      rating: 5,
      comment: "사원을 방문하고 현지 음식을 맛보며 태국 문화를 깊이 있게 경험할 수 있었습니다. 가이드님의 세심한 배려에 감사합니다.",
      trip: "태국 코스 2024년 11월",
    },
    {
      name: "황지연",
      age: 60,
      location: "광주 서구",
      rating: 5,
      comment: "산악 구간이 있어 걱정했지만 서포트 차량이 함께해서 안심하고 완주할 수 있었어요. 도이수텝 사원에서의 일몰이 아름다웠습니다.",
      trip: "태국 코스 2024년 10월",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] mt-16">
        <div className="absolute inset-0">
          <img src={thailandImage} alt="태국 자전거 여행" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 to-dark/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="container mx-auto px-4 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-3xl">🇹🇭</span>
              <span className="text-white font-medium">태국</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
              문화와 자연이 공존하는 루트
            </h1>
            <p className="text-xl text-white/90 mb-6">
              치앙마이 → 도이수텝 사원 → 마에림 밸리 (총 70km)
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>5일</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>70km</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>8~12명</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-6 text-center">
              여정 소개
            </h2>
            <p className="text-lg text-foreground leading-relaxed text-center mb-12">
              자전거를 멈추면 향긋한 향이 나고,
              <br />
              다시 달리면 미소 짓는 사람들이 손을 흔듭니다.
              <br />
              문화와 따뜻한 사람, 그 모든 것이 여행의 일부가 됩니다.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {highlights.map((highlight, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-dark mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">난이도</h3>
                  <p className="text-sm text-muted-foreground">★★★☆☆<br />중급자 이상 추천</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">그룹 규모</h3>
                  <p className="text-sm text-muted-foreground">8~12명<br />현지 가이드 동행</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">숙소</h3>
                  <p className="text-sm text-muted-foreground">리조트급<br />4성급 이상</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-12 text-center">
              일정표
            </h2>
            <div className="space-y-6">
              {itinerary.map((day, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-serif font-bold text-primary">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-medium text-primary">{day.day}</span>
                          <h3 className="font-serif text-xl font-bold text-dark">{day.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {day.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start gap-2 text-sm text-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-12 text-center">
              여행자 후기
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
            <div className="text-center">
              <Button size="lg" className="font-sans group">
                예약 문의하기
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Thailand;
