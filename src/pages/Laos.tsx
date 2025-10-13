import Navbar from "@/components/Navbar";
import DestinationCard from "@/components/DestinationCard";
import Footer from "@/components/Footer";
import northImage from "@/assets/laos-north.jpg";

const Laos = () => {
  const courses = [
    {
      country: "라오스",
      flag: "🇱🇦",
      title: "북부 루트",
      description: "평화롭고 여유로운 여행",
      route: "방비엥 → 루앙프라방",
      distance: "180km",
      difficulty: 2,
      image: northImage,
      link: "/laos/north",
      highlights: ["8박 10일", "3~4성급", "강변 라이딩"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="relative py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <span className="text-6xl mb-4 inline-block">🇱🇦</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-dark mb-6">
              라오스 자전거 여행
            </h1>
            <p className="text-lg text-muted-foreground">
              메콩강을 따라 흐르는 느린 여행
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

export default Laos;
