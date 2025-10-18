import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Check } from "lucide-react";
import { Link } from "react-router-dom";

const PackingGuide = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
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
                준비 가이드
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>2025년 3월 10일</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>6분 읽기</span>
              </div>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
              시니어를 위한 해외 자전거 여행 준비물 완벽 가이드 – 이것만 챙기면 됩니다
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              막연한 불안감을 해소하고 가볍지만 확실하게 준비하는 방법을 알려드립니다.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-dark mb-4">준비가 되면 걱정도 사라집니다</h2>
              <p className="text-foreground leading-relaxed mb-4">
                해외 자전거 여행을 앞두고 가장 많이 받는 질문이 있습니다. 
                "뭘 챙겨가야 하나요?" "자전거도 가져가야 하나요?" "옷은 몇 벌이나 필요한가요?"
              </p>
              <p className="text-foreground leading-relaxed">
                걱정하지 마세요. 이 가이드 하나면 충분합니다. 
                실제로 수백 명의 시니어 라이더들이 검증한 필수 준비물만 엄선했습니다.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-dark mb-4">필수 장비 체크리스트</h2>
              
              <div className="bg-secondary/30 p-6 rounded-xl mb-6">
                <h3 className="font-serif text-2xl font-semibold text-dark mb-4">라이딩 장비 (현지 제공)</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  ✓ 잔차로드에서 제공하는 항목 – 별도 준비 불필요
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">자전거 (전동 보조 자전거 옵션 포함)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">헬멧 및 장갑</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">안전 조끼 및 LED 조명</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">자물쇠 및 수리 키트</span>
                  </li>
                </ul>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-dark mb-4">의류 (개인 준비)</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-dark">속건 의류 3~4벌</strong>
                    <p className="text-sm text-muted-foreground">면보다는 기능성 소재 추천. 빨래해도 하루면 마릅니다.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-dark">패드 팬츠 2벌</strong>
                    <p className="text-sm text-muted-foreground">장거리 라이딩 필수. 엉덩이 통증 예방에 효과적입니다.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-dark">긴팔 자외선 차단복</strong>
                    <p className="text-sm text-muted-foreground">동남아 햇빛은 강합니다. 팔토시보다 긴팔이 편합니다.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-dark">편한 운동화</strong>
                    <p className="text-sm text-muted-foreground">클릿 신발보다는 일반 운동화 추천. 관광 시에도 사용 가능.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-dark">가벼운 바람막이</strong>
                    <p className="text-sm text-muted-foreground">아침 저녁으로 선선할 수 있습니다.</p>
                  </div>
                </li>
              </ul>

              <h3 className="font-serif text-2xl font-semibold text-dark mb-4">개인 용품</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">선크림 SPF50+ (필수)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">보조배터리 (핸드폰 충전용)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">개인 물통 (1L 용량 추천)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">선글라스 및 모자</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">간단한 세면도구</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-dark mb-4">시니어 전용 필수 아이템</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-serif text-xl font-semibold text-dark mb-2">무릎 보호대</h3>
                  <p className="text-foreground leading-relaxed">
                    장거리 라이딩 시 무릎 부담을 줄여줍니다. 
                    압박형보다는 착용감이 편한 제품을 추천합니다.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-serif text-xl font-semibold text-dark mb-2">상비약</h3>
                  <p className="text-foreground leading-relaxed mb-2">
                    평소 복용하는 약은 여유 있게 준비하세요. 추가로 챙기면 좋은 약:
                  </p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• 소화제, 지사제 (현지 음식 적응용)</li>
                    <li>• 진통제, 파스 (근육통 대비)</li>
                    <li>• 밴드, 연고 (작은 상처 대비)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-serif text-xl font-semibold text-dark mb-2">전동 보조 자전거 옵션</h3>
                  <p className="text-foreground leading-relaxed">
                    오르막이나 장거리 구간이 부담되신다면 전동 보조 자전거를 이용하세요. 
                    체력을 아끼면서도 완주의 기쁨을 누릴 수 있습니다. (사전 신청 필요)
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-dark mb-4">해외 여행 전 최종 체크리스트</h2>
              
              <div className="bg-secondary p-6 rounded-xl">
                <h3 className="font-serif text-xl font-semibold text-dark mb-4">출발 2주 전</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">여권 유효기간 확인 (6개월 이상 남았는지)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">여행자 보험 가입 (잔차로드 단체 가입 가능)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">건강검진 (필요시 주치의 상담)</span>
                  </li>
                </ul>

                <h3 className="font-serif text-xl font-semibold text-dark mb-4">출발 1주 전</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">현지 화폐 환전 (소액 현금 준비)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">로밍 또는 현지 유심 준비</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">짐 최종 점검 (20kg 이내 권장)</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-dark mb-4">준비는 단단히, 여행은 가볍게</h2>
              <p className="text-foreground leading-relaxed mb-4">
                완벽하게 준비하려다 보면 오히려 짐이 많아지고 여행이 무겁습니다. 
                핵심만 챙기고, 나머지는 현지에서 해결하거나 잔차로드에 맡기세요.
              </p>
              <p className="text-foreground leading-relaxed">
                가장 중요한 건 건강한 몸과 설레는 마음입니다. 
                나머지는 우리가 책임지겠습니다.
              </p>
            </section>

            <section className="bg-primary/5 p-8 rounded-xl text-center">
              <h3 className="font-serif text-2xl font-bold text-dark mb-4">
                잔차로드는 모든 장비와 안전 키트를 현지에서 제공합니다
              </h3>
              <p className="text-muted-foreground mb-6">
                자전거, 헬멧, 안전 장비는 물론 응급 의료 키트까지 완벽하게 준비되어 있습니다. <br />
                여러분은 편안한 마음으로 오시기만 하면 됩니다.
              </p>
              <Link to="/vietnam">
                <Button size="lg">여행 코스 둘러보기</Button>
              </Link>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default PackingGuide;
