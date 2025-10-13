import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Users, Shield, ArrowRight } from "lucide-react";
import laosImage from "@/assets/laos-bike.jpg";

const Laos = () => {
  const highlights = [
    {
      title: "루앙프라방 고도",
      description: "라오스의 옛 수도, 유네스코 세계문화유산 도시 탐험",
    },
    {
      title: "꽝시 폭포",
      description: "청록빛 석회암 폭포와 자연 수영장에서의 힐링 타임",
    },
    {
      title: "메콩강 크루즈",
      description: "메콩강의 일몰을 감상하며 떠나는 크루즈 여행",
    },
    {
      title: "전통 마을 체험",
      description: "현지 주민들의 삶을 가까이에서 경험하는 특별한 시간",
    },
  ];

  const itinerary = [
    {
      day: "1일차",
      title: "루앙프라방 도착",
      activities: ["공항 픽업 및 리버사이드 숙소 체크인", "자전거 및 장비 점검", "야시장 방문 및 환영 만찬"],
    },
    {
      day: "2일차",
      title: "루앙프라방 시내 투어",
      activities: ["새벽 탁발 행렬 관람 (옵션)", "왕궁 박물관 방문", "시내 라이딩 (20km)", "현지 요리 체험"],
    },
    {
      day: "3일차",
      title: "루앙프라방 → 꽝시 폭포",
      activities: ["아침 7시 출발", "꽝시 폭포까지 라이딩 (30km)", "폭포에서 수영 및 휴식", "강변 레스토랑 저녁"],
    },
    {
      day: "4일차",
      title: "메콩강 라이딩 & 크루즈",
      activities: ["메콩강변 라이딩 (10km)", "현지 마을 방문", "메콩강 일몰 크루즈", "전통 공연 관람"],
    },
    {
      day: "5일차",
      title: "자유 일정 및 귀환",
      activities: ["아침 자유 시간", "시내 쇼핑 또는 카페 투어", "공항 이동", "귀국"],
    },
  ];

  const testimonials = [
    {
      name: "박철민",
      age: 62,
      location: "인천 송도",
      rating: 5,
      comment: "메콩강 일몰 라이딩은 잊을 수 없는 경험이었습니다. 시간이 천천히 흐르는 곳, 라오스에서 진정한 여유를 찾았습니다.",
      trip: "라오스 코스 2024년 11월",
    },
    {
      name: "정상훈",
      age: 68,
      location: "대전 유성구",
      rating: 5,
      comment: "자전거 여행이 처음이었는데 평탄한 강변 코스라 무리 없이 완주했어요. 꽝시 폭포에서 수영한 건 최고의 경험이었습니다!",
      trip: "라오스 코스 2024년 10월",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] mt-16">
        <div className="absolute inset-0">
          <img src={laosImage} alt="라오스 자전거 여행" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 to-dark/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="container mx-auto px-4 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-3xl">🇱🇦</span>
              <span className="text-white font-medium">라오스</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
              강과 산, 느린 시간이 흐르는 루트
            </h1>
            <p className="text-xl text-white/90 mb-6">
              루앙프라방 → 꽝시폭포 → 메콩 리버사이드 (총 60km)
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>5일</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>60km</span>
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
              시계를 잊게 되는 곳,
              <br />
              페달이 아니라 '시간'을 천천히 밟는 여행.
              <br />
              메콩강의 느린 물결처럼 당신의 마음도 천천히 흐릅니다.
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
                  <p className="text-sm text-muted-foreground">★★☆☆☆<br />누구나 가능</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">그룹 규모</h3>
                  <p className="text-sm text-muted-foreground">8~12명<br />여유로운 일정</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">숙소</h3>
                  <p className="text-sm text-muted-foreground">강변 리조트<br />로컬 게스트하우스</p>
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

export default Laos;
