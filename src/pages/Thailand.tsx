import Navbar from "@/components/Navbar";
import DestinationCard from "@/components/DestinationCard";
import Footer from "@/components/Footer";
import centralImage from "@/assets/thailand-central.jpg";
import southImage from "@/assets/thailand-south.jpg";
import malaysiaImage from "@/assets/thailand-malaysia.jpg";

const Thailand = () => {
  const courses = [
    {
      country: "태국",
      flag: "🇹🇭",
      title: "중부 루트",
      description: "해안과 마을을 연결하는 아름다운 라이딩",
      route: "차암 → 반그릇",
      distance: "180km",
      difficulty: 2,
      image: centralImage,
      link: "/thailand/central",
      highlights: ["8박 10일", "3~4성급", "해안&문화"],
    },
    {
      country: "태국",
      flag: "🇹🇭",
      title: "남부 루트",
      description: "장거리 라이딩으로 도전과 성취감",
      route: "반그릇 → 수랏타니",
      distance: "370km",
      difficulty: 3,
      image: southImage,
      link: "/thailand/south",
      highlights: ["8박 10일", "남부 해안", "사원 탐방"],
    },
    {
      country: "태국–말레이",
      flag: "🇹🇭🇲🇾",
      title: "국경 루트",
      description: "섬과 해안을 체험하는 감성 라이딩",
      route: "핫야이 → 랑카위",
      distance: "120km",
      difficulty: 2,
      image: malaysiaImage,
      link: "/thailand/malaysia",
      highlights: ["8박 10일", "랑카위 섬", "두 나라"],
    },
  ];

  return (
    <div className="min-h-screen pt-28">
      <Navbar />
      
      <section className="relative py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <span className="text-6xl mb-4 inline-block">🇹🇭</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-dark mb-6">
              태국 자전거 여행
            </h1>
            <p className="text-lg text-muted-foreground">
              사원과 해안을 누비는 다채로운 여행
            </p>
          </div>
        </div>
      </section>

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

export default Thailand;
