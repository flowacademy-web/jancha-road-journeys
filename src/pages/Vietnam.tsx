import Navbar from "@/components/Navbar";
import DestinationCard from "@/components/DestinationCard";
import Footer from "@/components/Footer";
import beachRouteImage from "@/assets/vietnam-beach-route.jpg";
import haGiangImage from "@/assets/vietnam-ha-giang.jpg";

const Vietnam = () => {
  const courses = [
    {
      country: "베트남",
      flag: "🇻🇳",
      title: "해안과 산을 잇는 감성 루트",
      description: "페달을 밟을 때마다 바닷바람이 얼굴을 스칩니다. 여행이라기보다 '삶의 숨결'을 다시 느끼게 되는 코스입니다.",
      route: "호이안 → 다낭 → 후에",
      distance: "80~100km",
      difficulty: 2,
      image: beachRouteImage,
      link: "/vietnam/beach-route",
      highlights: [
        "8박 10일 여유로운 일정",
        "부티크 호텔 4성급 이상 숙박",
        "8~12명 소규모 그룹",
      ],
    },
    {
      country: "베트남",
      flag: "🇻🇳",
      title: "하장 루프",
      description: "베트남 북부 산악 지대를 누비며 전통 마을과 숨겨진 자연 풍경을 만날 수 있는 모험 코스입니다.",
      route: "하장 → 동반 → 메오박 → 옌민 → 하장",
      distance: "366km",
      difficulty: 3,
      image: haGiangImage,
      link: "/vietnam/ha-giang",
      highlights: [
        "9박 10일 산악 라이딩",
        "현지 호텔 3~4성급 숙박",
        "전통 마을과 고원 탐방",
      ],
      fullyBooked: true,
      departureDate: "11/20",
    },
  ];

  return (
    <div className="min-h-screen pt-28">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <div className="inline-block mb-4">
              <span className="text-6xl">🇻🇳</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-dark mb-6">
              베트남 자전거 여행
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              해안 도로와 산악 지대, 전통 마을을 누비는 감성 자전거 여행.
              <br />
              당신에게 맞는 베트남 코스를 선택하세요.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <DestinationCard {...course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vietnam;
