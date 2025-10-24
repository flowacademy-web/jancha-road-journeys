import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, DollarSign, PlaneTakeoff, Hotel, Utensils } from "lucide-react";

const BudgetGuide = () => {
  return (
    <div className="min-h-screen pt-28">
      <Navbar />
      
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Article Header */}
        <header className="mb-12 animate-fade-up">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="px-3 py-1 bg-secondary rounded-full font-medium">예산 정보</span>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>2025년 3월 8일</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>10분 읽기</span>
            </div>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
            해외 자전거여행 예산 가이드 – 코스별 비용 완벽 분석
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            베트남, 태국, 라오스 자전거여행 코스별 실제 비용을 상세히 분석합니다. 항공권부터 숙박, 식비까지 예산 계획에 도움이 되는 정보를 제공합니다.
          </p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="font-serif text-3xl font-bold text-dark mb-6 flex items-center gap-3">
              <DollarSign className="h-8 w-8 text-primary" />
              해외 자전거여행, 얼마나 들까요?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              "해외 자전거여행에 관심은 있는데, 비용이 얼마나 드는지 막연해요."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              많은 분들이 해외 자전거여행의 비용을 궁금해하십니다. 이 글에서는 베트남, 태국, 라오스 주요 코스별로 투어 비용, 항공권, 개인 경비까지 상세하게 알려드립니다.
            </p>
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded my-6">
              <p className="text-dark font-medium">
                잔차로드의 모든 투어는 투명한 가격 정책을 유지합니다. 숨겨진 비용이나 추가 요금이 없습니다.
              </p>
            </div>
          </section>

          <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-serif text-3xl font-bold text-dark mb-6">해외 자전거여행 비용 구성</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              해외 자전거여행의 총 비용은 크게 4가지로 나뉩니다:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-secondary/30 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <PlaneTakeoff className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-dark">1. 항공권</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  출발지와 목적지, 예약 시기에 따라 가장 큰 변동이 있는 항목입니다. 조기 예약 시 저렴하게 구매할 수 있습니다.
                </p>
              </div>

              <div className="bg-secondary/30 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Hotel className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-dark">2. 투어 패키지</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  자전거 대여, 가이드, 숙박, 일부 식사, 차량 지원이 모두 포함된 비용입니다. 잔차로드의 핵심 서비스입니다.
                </p>
              </div>

              <div className="bg-secondary/30 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Utensils className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-dark">3. 개인 식비</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  아침 식사는 대부분 포함되지만, 점심과 저녁은 개인 선택에 따라 다양합니다. 현지 음식은 매우 저렴합니다.
                </p>
              </div>

              <div className="bg-secondary/30 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-dark">4. 개인 경비</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  기념품, 간식, 음료, 추가 관광 등 개인 취향에 따른 비용입니다. 현지 물가가 저렴해 부담이 적습니다.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="font-serif text-3xl font-bold text-dark mb-6">베트남 자전거여행 예산</h2>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4">하장 루프 (4박 5일)</h3>
            <div className="bg-secondary/50 p-6 rounded-lg mb-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">투어 패키지</span>
                  <span className="font-semibold text-dark">120만원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">항공권 (서울-하노이 왕복)</span>
                  <span className="font-semibold text-dark">40~60만원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">개인 식비 (5일)</span>
                  <span className="font-semibold text-dark">15~20만원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">개인 경비 및 기타</span>
                  <span className="font-semibold text-dark">10~15만원</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="font-bold text-dark text-lg">총 예상 비용</span>
                  <span className="font-bold text-primary text-xl">185~215만원</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2"><strong>포함 내역:</strong></p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ 자전거 및 헬멧 대여</li>
                  <li>✓ 전문 가이드 동행</li>
                  <li>✓ 4성급 호텔 숙박</li>
                  <li>✓ 아침 식사 (5회)</li>
                  <li>✓ 차량 지원 (짐 운반, 응급 상황)</li>
                  <li>✓ 입장료 및 관광지 가이드</li>
                </ul>
              </div>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4">해안 루트 (다낭-호이안-후에, 5박 6일)</h3>
            <div className="bg-secondary/50 p-6 rounded-lg mb-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">투어 패키지</span>
                  <span className="font-semibold text-dark">140만원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">항공권 (서울-다낭 왕복)</span>
                  <span className="font-semibold text-dark">35~55만원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">개인 식비 (6일)</span>
                  <span className="font-semibold text-dark">18~25만원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">개인 경비 및 기타</span>
                  <span className="font-semibold text-dark">12~18만원</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="font-bold text-dark text-lg">총 예상 비용</span>
                  <span className="font-bold text-primary text-xl">205~238만원</span>
                </div>
              </div>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4">하이반 고개 단기 코스 (2박 3일)</h3>
            <div className="bg-secondary/50 p-6 rounded-lg mb-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">투어 패키지</span>
                  <span className="font-semibold text-dark">75만원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">항공권 (서울-다낭 왕복)</span>
                  <span className="font-semibold text-dark">35~55만원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">개인 식비 (3일)</span>
                  <span className="font-semibold text-dark">10~12만원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">개인 경비 및 기타</span>
                  <span className="font-semibold text-dark">5~8만원</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="font-bold text-dark text-lg">총 예상 비용</span>
                  <span className="font-bold text-primary text-xl">125~150만원</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-primary/10 rounded">
                <p className="text-sm text-dark">
                  <strong>💡 추천:</strong> 처음 해외 자전거여행을 시도하는 분들에게 가장 적합한 입문 코스입니다.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <h2 className="font-serif text-3xl font-bold text-dark mb-6">태국 자전거여행 예산</h2>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4">중부 투어 (방콕-아유타야, 4박 5일)</h3>
            <div className="bg-secondary/50 p-6 rounded-lg mb-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">투어 패키지</span>
                  <span className="font-semibold text-dark">110만원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">항공권 (서울-방콕 왕복)</span>
                  <span className="font-semibold text-dark">40~70만원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">개인 식비 (5일)</span>
                  <span className="font-semibold text-dark">20~25만원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">개인 경비 및 기타</span>
                  <span className="font-semibold text-dark">10~15만원</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="font-bold text-dark text-lg">총 예상 비용</span>
                  <span className="font-bold text-primary text-xl">180~220만원</span>
                </div>
              </div>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4">남부 해안 투어 (7박 8일)</h3>
            <div className="bg-secondary/50 p-6 rounded-lg mb-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">투어 패키지</span>
                  <span className="font-semibold text-dark">185만원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">항공권 (서울-푸켓 왕복)</span>
                  <span className="font-semibold text-dark">45~75만원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">개인 식비 (8일)</span>
                  <span className="font-semibold text-dark">30~40만원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">개인 경비 및 기타</span>
                  <span className="font-semibold text-dark">15~20만원</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="font-bold text-dark text-lg">총 예상 비용</span>
                  <span className="font-bold text-primary text-xl">275~320만원</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <h2 className="font-serif text-3xl font-bold text-dark mb-6">라오스 자전거여행 예산</h2>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4">북부 투어 (루앙프라방-방비엥, 5박 6일)</h3>
            <div className="bg-secondary/50 p-6 rounded-lg mb-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">투어 패키지</span>
                  <span className="font-semibold text-dark">125만원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">항공권 (서울-루앙프라방, 방콕 경유)</span>
                  <span className="font-semibold text-dark">50~80만원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">개인 식비 (6일)</span>
                  <span className="font-semibold text-dark">15~18만원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">개인 경비 및 기타</span>
                  <span className="font-semibold text-dark">10~12만원</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="font-bold text-dark text-lg">총 예상 비용</span>
                  <span className="font-bold text-primary text-xl">200~235만원</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-primary/10 rounded">
                <p className="text-sm text-dark">
                  <strong>💡 특징:</strong> 라오스는 동남아에서 가장 조용하고 여유로운 여행지입니다. 물가도 매우 저렴합니다.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <h2 className="font-serif text-3xl font-bold text-dark mb-6">비용 절약 팁</h2>

            <div className="space-y-6">
              <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="font-semibold text-dark mb-3">1. 항공권은 조기 예약이 핵심</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  출발 2~3개월 전에 예약하면 왕복 30~40만원대에 구매 가능합니다. 비수기(4~6월, 9~11월)를 노리면 더 저렴합니다.
                </p>
                <p className="text-muted-foreground text-sm">
                  <strong>추천 항공사:</strong> 비엣젯, 에어아시아 등 저가항공 활용
                </p>
              </div>

              <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="font-semibold text-dark mb-3">2. 그룹 할인 혜택</h3>
                <p className="text-muted-foreground text-sm">
                  4명 이상 그룹으로 신청하면 1인당 5~10만원 할인됩니다. 친구나 가족과 함께 떠나면 더 즐겁고 경제적입니다.
                </p>
              </div>

              <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="font-semibold text-dark mb-3">3. 현지 음식 즐기기</h3>
                <p className="text-muted-foreground text-sm">
                  동남아시아 현지 음식은 맛있고 저렴합니다. 한 끼에 3,000~5,000원이면 충분히 배불리 먹을 수 있습니다. 길거리 음식도 안전하고 맛있습니다.
                </p>
              </div>

              <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="font-semibold text-dark mb-3">4. 조기 예약 할인</h3>
                <p className="text-muted-foreground text-sm">
                  투어 출발 60일 전 예약 시 10% 할인, 90일 전 예약 시 15% 할인 혜택이 제공됩니다.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.7s" }}>
            <h2 className="font-serif text-3xl font-bold text-dark mb-6">가격 대비 가치</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              해외 자전거여행은 단순한 관광이 아닙니다. 건강, 모험, 힐링, 새로운 인연을 한 번에 얻을 수 있는 특별한 경험입니다.
            </p>

            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded my-6">
              <p className="text-dark italic mb-2">
                "200만원으로 일주일간 제주도 골프 여행을 다녀왔는데, 베트남 자전거여행이 훨씬 더 기억에 남고 만족스러웠습니다. 건강도 좋아지고 친구들도 생겼어요."
              </p>
              <p className="text-muted-foreground text-sm">- 서울 송파구, 박민수(62세)</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="text-center p-6 bg-secondary/30 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">200만원대</div>
                <p className="text-sm text-muted-foreground">일주일 해외여행 + 건강 증진 + 평생 추억</p>
              </div>
              <div className="text-center p-6 bg-secondary/30 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">0원</div>
                <p className="text-sm text-muted-foreground">숨겨진 비용 없음 모든 것이 투명합니다</p>
              </div>
              <div className="text-center p-6 bg-secondary/30 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">무한대</div>
                <p className="text-sm text-muted-foreground">얻게 되는 경험과 추억의 가치</p>
              </div>
            </div>
          </section>

          <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <div className="bg-secondary/30 p-8 rounded-lg">
              <h2 className="font-serif text-2xl font-bold text-dark mb-4">
                투명한 가격, 확실한 가치
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                잔차로드는 투명한 가격 정책을 원칙으로 합니다. 안내된 비용 외에 추가로 청구되는 금액은 없습니다. 궁금한 점이 있으시면 언제든 문의해주세요.
              </p>
              <div className="flex gap-4">
                <Link to="/vietnam">
                  <Button size="lg" className="group">
                    베트남 투어 보기
                  </Button>
                </Link>
                <Link to="/thailand">
                  <Button size="lg" variant="outline" className="group">
                    태국 투어 보기
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BudgetGuide;