import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "한강만 달리던 나, 이제는 해외로 – 시니어를 위한 첫 자전거 여행 가이드",
      description: "한국에서 한강 자전거길만 타던 50~60대 시니어가 처음 해외 자전거 여행을 시도할 때의 설렘과 걱정을 풀어주는 스토리형 가이드입니다.",
      date: "2025년 3월 15일",
      readTime: "8분",
      category: "여행 가이드",
      link: "/blog/first-overseas-guide",
      keywords: ["시니어 자전거 여행", "해외 자전거 여행", "은퇴 후 취미"]
    },
    {
      title: "시니어를 위한 해외 자전거 여행 준비물 완벽 가이드 – 이것만 챙기면 됩니다",
      description: "시니어층이 해외 자전거 여행을 준비할 때 막연히 느끼는 불안감을 해소하는 실용적인 준비 리스트를 제공합니다.",
      date: "2025년 3월 10일",
      readTime: "6분",
      category: "준비 가이드",
      link: "/blog/packing-guide",
      keywords: ["자전거 여행 준비물", "해외 자전거 장비", "체크리스트"]
    },
    {
      title: "시니어에게 딱 맞는 해외 자전거 여행 코스 TOP3 – 베트남, 태국, 라오스",
      description: "체력과 취향에 맞는 해외 자전거 여행 코스를 찾는 분들을 위한 맞춤형 추천 가이드입니다.",
      date: "2025년 3월 5일",
      readTime: "10분",
      category: "코스 추천",
      link: "/blog/top3-courses",
      keywords: ["베트남 자전거 여행", "태국 자전거 여행", "시니어 여행지"]
    },
    {
      title: "여행이 인생을 바꾸다 – 잔차로드와 함께한 라이더들의 이야기",
      description: "해외 자전거 여행을 다녀온 시니어 고객들의 진솔한 후기와 변화의 순간들을 담았습니다.",
      date: "2025년 3월 1일",
      readTime: "7분",
      category: "고객 후기",
      link: "/blog/rider-stories",
      keywords: ["시니어 여행 후기", "인생 2막", "감성 여행"]
    }
  ];

  return (
    <div className="min-h-screen pt-28">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-dark mb-6">
              잔차로드 블로그
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              시니어를 위한 자전거 여행 이야기와 유용한 정보를 만나보세요
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="animate-fade-up hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="px-3 py-1 bg-secondary rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="font-serif text-2xl mb-2 leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime} 읽기</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.keywords.map((keyword, idx) => (
                      <span key={idx} className="text-xs bg-secondary/50 px-2 py-1 rounded">
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <Link to={post.link}>
                    <Button className="w-full group">
                      자세히 읽기
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
