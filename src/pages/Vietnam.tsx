import Navbar from "@/components/Navbar";
import DestinationCard from "@/components/DestinationCard";
import Footer from "@/components/Footer";
import beachRouteImage from "@/assets/vietnam-beach-route.jpg";
import haGiangImage from "@/assets/vietnam-ha-giang.jpg";
import haiVanImage from "@/assets/vietnam-hai-van.jpg";

const Vietnam = () => {
  const highlights = [
    {
      title: "호이안 고대 도시",
      description: "유네스코 세계문화유산으로 지정된 아름다운 고대 도시를 자전거로 탐험합니다.",
    },
    {
      title: "다낭 해안 도로",
      description: "에메랄드빛 바다를 따라 이어지는 환상적인 해안 도로 라이딩",
    },
    {
      title: "후에 황궁",
      description: "베트남 마지막 왕조의 수도, 역사가 살아 숨쉬는 고대 황궁 방문",
    },
    {
      title: "현지 커피 체험",
      description: "베트남 전통 커피 농장 방문 및 시음 체험",
    },
  ];

  const itinerary = [
    {
      day: "1일차",
      title: "호이안 도착 및 오리엔테이션",
      activities: ["공항 픽업", "숙소 체크인", "자전거 및 장비 점검", "환영 만찬"],
    },
    {
      day: "2일차",
      title: "호이안 고대 도시 투어",
      activities: ["아침 7시 출발", "고대 도시 라이딩 (30km)", "현지 시장 방문", "전통 요리 체험"],
    },
    {
      day: "3일차",
      title: "호이안 → 다낭 해안 도로",
      activities: ["아침 6시 출발", "해안 도로 라이딩 (40km)", "대리석 산 방문", "다낭 숙소 도착"],
    },
    {
      day: "4일차",
      title: "다낭 자유 일정",
      activities: ["휴식 또는 자유 라이딩", "바나 힐스 옵션 투어", "해변 휴식", "석식 자유"],
    },
    {
      day: "5일차",
      title: "다낭 → 후에",
      activities: ["아침 7시 출발", "하이반 고개 (차량 이동)", "후에 시내 라이딩 (30km)", "황궁 방문"],
    },
    {
      day: "6일차",
      title: "후에 투어 및 귀환",
      activities: ["아침 현지 시장 방문", "향강 크루즈", "공항 이동", "귀국"],
    },
  ];

  const testimonials = [
    {
      name: "김영수",
      age: 65,
      location: "서울 강남구",
      rating: 5,
      comment: "베트남의 아름다운 해안 도로를 따라 페달을 밟는 순간, 제 인생의 새로운 페이지가 열렸습니다. 잔차로드와 함께한 7일은 제 평생 잊지 못할 추억입니다.",
      trip: "베트남 코스 2024년 10월",
    },
    {
      name: "최미경",
      age: 56,
      location: "경기 성남시",
      rating: 5,
      comment: "퇴직 후 첫 여행으로 선택했는데 최고의 선택이었어요. 호이안의 야경을 자전거로 달리는 건 정말 로맨틱했습니다.",
      trip: "베트남 코스 2024년 9월",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] mt-16">
        <div className="absolute inset-0">
          <img src={vietnamImage} alt="베트남 자전거 여행" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 to-dark/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="container mx-auto px-4 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-3xl">🇻🇳</span>
              <span className="text-white font-medium">베트남</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
              해안과 산을 잇는 감성 루트
            </h1>
            <p className="text-xl text-white/90 mb-6">
              호이안 → 다낭 → 후에 (총 80~100km)
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>6일</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>80~100km</span>
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
              페달을 밟을 때마다 바닷바람이 얼굴을 스칩니다.
              <br />
              여행이라기보다 '삶의 숨결'을 다시 느끼게 되는 코스입니다.
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
                  <p className="text-sm text-muted-foreground">★★☆☆☆<br />초보자도 가능</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">그룹 규모</h3>
                  <p className="text-sm text-muted-foreground">8~12명<br />소규모 프라이빗</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">숙소</h3>
                  <p className="text-sm text-muted-foreground">부티크 호텔<br />4성급 이상</p>
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

export default Vietnam;
