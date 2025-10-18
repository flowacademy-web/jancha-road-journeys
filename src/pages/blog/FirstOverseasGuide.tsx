import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const FirstOverseasGuide = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Article Header */}
      <article className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              블로그로 돌아가기
            </Button>
          </Link>

          <header className="mb-12 animate-fade-up">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="px-3 py-1 bg-secondary rounded-full text-xs font-medium">
                여행 가이드
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>2025년 3월 15일</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>8분 읽기</span>
              </div>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
              한강만 달리던 나, 이제는 해외로 – 시니어를 위한 첫 자전거 여행 가이드
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              한국에서 한강 자전거길만 타던 50~60대 시니어가 처음 해외 자전거 여행을 시도할 때의 설렘과 걱정을 풀어주는 가이드입니다.
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-dark mb-4">익숙한 한강 라이딩에서 벗어나고 싶은 마음</h2>
              <p className="text-foreground leading-relaxed mb-4">
                매주 토요일 아침, 한강변을 달리며 느끼는 상쾌함. 이제는 익숙해진 그 길이, 어느 날 문득 좁게 느껴집니다. 
                "나도 저 멀리 다른 풍경을 달려보고 싶다"는 생각이 들기 시작하죠.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                하지만 막상 해외 자전거 여행을 계획하려니 막막합니다. 언어는 통할까? 길은 안전할까? 
                혼자 준비하기엔 너무 많은 것들이 필요해 보입니다.
              </p>
              <p className="text-foreground leading-relaxed">
                그렇게 꿈만 꾸다가 또 한강으로 돌아갑니다. 하지만 오늘, 그 꿈을 현실로 만들 수 있는 방법을 알려드리겠습니다.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-dark mb-4">해외 자전거 여행의 매력</h2>
              <h3 className="font-serif text-2xl font-semibold text-dark mb-3">풍경이 주는 감동</h3>
              <p className="text-foreground leading-relaxed mb-4">
                베트남 하장의 구불구불한 산길을 따라 올라가며 만나는 계단식 논밭. 
                태국 해안도로에서 느끼는 열대의 바람. 라오스 시골 마을에서 마주치는 순박한 미소.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                이 모든 풍경은 한강에서는 절대 만날 수 없는, 오직 그곳에서만 느낄 수 있는 감동입니다.
              </p>

              <h3 className="font-serif text-2xl font-semibold text-dark mb-3">자유로운 여행의 즐거움</h3>
              <p className="text-foreground leading-relaxed mb-4">
                관광버스에 갇혀 정해진 시간에 정해진 곳만 보는 여행이 아닙니다. 
                자전거를 타고 내가 원하는 속도로, 멈추고 싶을 때 멈춰서, 보고 싶은 것을 마음껏 보는 진짜 자유를 느낄 수 있습니다.
              </p>

              <h3 className="font-serif text-2xl font-semibold text-dark mb-3">완주의 성취감</h3>
              <p className="text-foreground leading-relaxed mb-4">
                60km, 80km, 때로는 100km를 넘는 거리를 자신의 힘으로 완주했을 때의 그 뿌듯함. 
                "나도 할 수 있구나"라는 자신감은 여행이 끝난 후에도 오랫동안 남습니다.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-dark mb-4">시니어도 충분히 가능한 이유</h2>
              <h3 className="font-serif text-2xl font-semibold text-dark mb-3">전문 가이드가 함께합니다</h3>
              <p className="text-foreground leading-relaxed mb-4">
                잔차로드의 모든 투어에는 현지에 정통한 전문 가이드가 동행합니다. 
                언어 문제, 길 찾기, 돌발 상황 대처까지 모든 것을 책임지기 때문에 오직 라이딩에만 집중할 수 있습니다.
              </p>

              <h3 className="font-serif text-2xl font-semibold text-dark mb-3">시니어 맞춤 장비 제공</h3>
              <p className="text-foreground leading-relaxed mb-4">
                전동 보조 자전거, 무릎 보호대, 안전 헬멧 등 시니어에게 필요한 모든 장비를 현지에서 제공합니다. 
                무거운 짐을 들고 갈 필요가 없습니다.
              </p>

              <h3 className="font-serif text-2xl font-semibold text-dark mb-3">철저한 안전 관리</h3>
              <p className="text-foreground leading-relaxed mb-4">
                서포트 차량이 항상 뒤따르며, 체력이 힘들 때는 언제든 차량으로 이동할 수 있습니다. 
                여행자 보험, 응급 의료 키트, 현지 병원 정보까지 모두 준비되어 있습니다.
              </p>

              <h3 className="font-serif text-2xl font-semibold text-dark mb-3">소규모 그룹 운영</h3>
              <p className="text-foreground leading-relaxed mb-4">
                8~12명의 소규모 그룹으로 운영되어 가이드의 세심한 케어를 받을 수 있고, 
                비슷한 또래의 참가자들과 함께하기 때문에 편안하고 즐겁게 여행할 수 있습니다.
              </p>
            </section>

            <section className="mb-12 bg-secondary p-8 rounded-xl">
              <h2 className="font-serif text-3xl font-bold text-dark mb-6">실제 참가자 후기</h2>
              <blockquote className="border-l-4 border-primary pl-6 mb-6">
                <p className="text-foreground leading-relaxed italic mb-2">
                  "한강만 타다가 처음으로 해외를 나갔는데, 생각보다 훨씬 쉽고 안전했어요. 
                  가이드님이 모든 걸 챙겨주시니까 저는 그냥 페달만 밟으면 되더라고요. 
                  베트남 해안도로를 달릴 때의 그 감동은 평생 잊지 못할 거예요."
                </p>
                <cite className="text-sm text-muted-foreground not-italic">— 김영수님, 65세, 베트남 코스 참가</cite>
              </blockquote>

              <blockquote className="border-l-4 border-primary pl-6">
                <p className="text-foreground leading-relaxed italic mb-2">
                  "처음엔 걱정도 많았지만 같은 또래 분들과 함께하니까 금방 친해지고 서로 응원하면서 완주할 수 있었어요. 
                  이제 다음 여행을 또 계획하고 있습니다."
                </p>
                <cite className="text-sm text-muted-foreground not-italic">— 이순희님, 58세, 태국 코스 참가</cite>
              </blockquote>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-dark mb-4">익숙함을 벗어나야 인생의 다음 길이 열립니다</h2>
              <p className="text-foreground leading-relaxed mb-4">
                한강은 여전히 아름답고 익숙한 곳입니다. 하지만 그 익숙함 너머에는 더 넓은 세상이 펼쳐져 있습니다.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                인생의 후반부는 안전하고 익숙한 것만 선택할 시기가 아닙니다. 
                오히려 더 과감하게, 더 자유롭게, 하고 싶었던 것들을 해볼 때입니다.
              </p>
              <p className="text-foreground leading-relaxed">
                첫 해외 라이딩, 혼자서는 망설여지겠지만 잔차로드와 함께라면 걱정 없습니다. 
                당신의 다음 길, 우리가 함께 달리겠습니다.
              </p>
            </section>

            {/* CTA Section */}
            <section className="bg-primary/5 p-8 rounded-xl text-center">
              <h3 className="font-serif text-2xl font-bold text-dark mb-4">
                첫 해외 라이딩, 잔차로드와 함께라면 걱정 없습니다
              </h3>
              <p className="text-muted-foreground mb-6">
                전문 가이드, 맞춤 장비, 철저한 안전 관리로 시니어 여러분의 꿈을 현실로 만들어드립니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/vietnam">
                  <Button size="lg">베트남 코스 보기</Button>
                </Link>
                <Link to="/thailand">
                  <Button size="lg" variant="outline">태국 코스 보기</Button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default FirstOverseasGuide;
