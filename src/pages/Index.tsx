import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GalleryCarousel from "@/components/GalleryCarousel";
import DestinationCard from "@/components/DestinationCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import vietnamImage from "@/assets/vietnam-beach-route.jpg";
import thailandImage from "@/assets/thailand-central.jpg";
import laosImage from "@/assets/laos-north.jpg";
import guideImage from "@/assets/guide-portrait.jpg";
import groupImage from "@/assets/group-riders.jpg";

const Index = () => {
  const destinations = [
    {
      country: "베트남",
      flag: "🇻🇳",
      title: "해안과 산을 잇는 감성 루트",
      description: "호이안의 세계문화유산과 다낭의 해안 도로를 따라 펼쳐지는 여유로운 여정",
      route: "호이안 → 다낭 → 후에",
      distance: "80~100km",
      difficulty: 2,
      image: vietnamImage,
      link: "/vietnam",
      highlights: [
        "해안 도로와 세계문화유산 도시 호이안의 조화",
        "아오자이와 커피향 가득한 휴식 포인트",
        "소규모 부티크 호텔 중심의 편안한 숙소",
      ],
    },
    {
      country: "태국",
      flag: "🇹🇭",
      title: "문화와 자연이 공존하는 루트",
      description: "치앙마이의 전통 사원과 북부 산악 지대의 아름다운 자연을 만나다",
      route: "치앙마이 → 도이수텝 사원 → 마에림 밸리",
      distance: "70km",
      difficulty: 3,
      image: thailandImage,
      link: "/thailand",
      highlights: [
        "현지 사찰 방문, 야시장 체험, 현지식 점심",
        "현지 가이드 동행 및 차량 서포트",
        "전 일정 보험 및 안전 장비 제공",
      ],
    },
    {
      country: "라오스",
      flag: "🇱🇦",
      title: "강과 산, 느린 시간이 흐르는 루트",
      description: "메콩강을 따라 천천히 흐르는 시간 속에서 진정한 여유를 찾다",
      route: "루앙프라방 → 꽝시폭포 → 메콩 리버사이드",
      distance: "60km",
      difficulty: 2,
      image: laosImage,
      link: "/laos",
      highlights: [
        "강변 리조트와 로컬 게스트하우스 숙박",
        "메콩강 크루즈 & 일몰 라이딩 포함",
        "시계를 잊게 되는 느린 여행의 진수",
      ],
    },
  ];

  const testimonials = [
    {
      name: "김영수",
      age: 65,
      location: "서울 강남구",
      rating: 5,
      comment: "잔차로드와 함께한 7일, 평생 기억에 남을 여행이었습니다. 페달을 밟을 때마다 새로운 풍경이 펼쳐지고, 그 속에서 제 인생의 새로운 장을 발견했습니다.",
      trip: "베트남 코스",
    },
    {
      name: "이순희",
      age: 48,
      location: "서울 송파구",
      rating: 5,
      comment: "코스가 안전하고 일정이 여유로워 좋았습니다. 가이드님도 친절하시고 현지 문화를 깊이 있게 소개해주셔서 단순한 관광이 아닌 진짜 여행을 했습니다.",
      trip: "태국 코스",
    },
    {
      name: "박철민",
      age: 62,
      location: "서울 마포구",
      rating: 5,
      comment: "경치가 정말 아름다워요. 메콩강 일몰 라이딩은 잊을 수 없는 경험이었습니다. 다시 가고 싶습니다.",
      trip: "라오스 코스",
    },
    {
      name: "최미경",
      age: 45,
      location: "서울 서초구",
      rating: 5,
      comment: "퇴직 후 첫 여행으로 선택했는데 최고의 선택이었어요. 같은 또래 분들과 함께해서 더 편안하고 즐거웠습니다.",
      trip: "베트남 코스",
    },
    {
      name: "정상훈",
      age: 68,
      location: "서울 용산구",
      rating: 5,
      comment: "자전거 여행이 처음이었는데 난이도가 적당해서 무리 없이 완주할 수 있었습니다. 건강도 챙기고 추억도 쌓는 일석이조!",
      trip: "라오스 코스",
    },
    {
      name: "황지연",
      age: 60,
      location: "서울 종로구",
      rating: 5,
      comment: "현지 음식도 맛있고, 숙소도 깨끗하고 편안했어요. 무엇보다 천천히 여행할 수 있어서 좋았습니다.",
      trip: "태국 코스",
    },
  ];

  const scrollToDestinations = () => {
    document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Gallery Carousel Section */}
      <GalleryCarousel />

      {/* Destinations Section */}
      <section id="destinations" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark mb-4">
              당신의 속도에 맞는 길을 선택하세요
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              잔차로드는 세 나라의 매력을 자전거로 가장 느리게, 가장 깊게 경험할 수 있는 루트를 준비했습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div key={destination.country} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <DestinationCard {...destination} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Guide Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src={guideImage}
                alt="가이드 프로필"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img
                src={groupImage}
                alt="함께한 사람들"
                className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8"
              />
            </div>

            {/* Content */}
            <div className="animate-fade-up">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-6">
                김종윤 | 잔차로드 대표
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-foreground leading-relaxed">
                  "자전거는 단순한 운동이 아닙니다.
                  <br />
                  퇴직 후, 다시 길 위에서 나를 발견하게 해준 인생의 두 번째 바퀴입니다."
                </p>
                <p className="text-foreground leading-relaxed">
                  저는 매일 왕복 60km를 자전거로 출퇴근하며 '생활 라이더'로 살아왔습니다.
                </p>
                <p className="text-foreground leading-relaxed">
                  2015년 부터, 저는 홀로 동남아 7개국을 자전거로 횡단하며 지금의 잔차로드 첫 루트를 직접 개척했습니다. 길 위에서 만난 사람들, 풍경, 그리고 느림의 가치는 제게 새로운 사명감을 주었습니다.
                </p>
                <p className="text-foreground leading-relaxed">
                  이제는 그 경험을 여러분과 나누고 싶습니다.
                </p>
              </div>

              {/* Experience */}
              <div className="space-y-3 mb-8 bg-white p-6 rounded-xl">
                <h3 className="font-serif font-bold text-dark mb-4">경력</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-sm text-foreground">2012~2015: 한강 자전거 마라톤 완주</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-sm text-foreground">2018: 동남아 7개국 자전거 횡단</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-sm text-foreground">2023: 한국 자전거협회 인증 투어 가이드</p>
                  </div>
                </div>
              </div>

              <Button onClick={scrollToDestinations} size="lg" className="font-sans">
                함께한 사람들 보기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark mb-4">
              함께 달린 사람들의 이야기
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              실제 여행을 경험한 분들의 진솔한 후기를 만나보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

      <Footer />
    </div>
  );
};

export default Index;
