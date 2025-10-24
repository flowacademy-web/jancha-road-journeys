import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, AlertCircle, Shield, Heart, MapPin } from "lucide-react";

const SafetyGuide = () => {
  return (
    <div className="min-h-screen pt-28">
      <Navbar />
      
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Article Header */}
        <header className="mb-12 animate-fade-up">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="px-3 py-1 bg-secondary rounded-full font-medium">안전 가이드</span>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>2025년 3월 20일</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>9분 읽기</span>
            </div>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
            해외 자전거여행 안전 가이드 – 초보자를 위한 필수 안전 수칙
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            처음 해외 자전거여행을 떠나는 분들을 위한 안전 가이드입니다. 교통 규칙부터 응급 상황 대처까지 안전하게 여행하는 방법을 알려드립니다.
          </p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="font-serif text-3xl font-bold text-dark mb-6 flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              해외 자전거여행, 안전이 최우선입니다
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              "처음 해외에서 자전거를 타는데, 혹시 위험하지 않을까요?"
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              많은 분들이 해외 자전거여행을 계획하면서 가장 먼저 걱정하는 것이 바로 '안전'입니다. 낯선 환경, 다른 교통 문화, 언어 장벽... 걱정되는 것이 당연합니다.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              하지만 올바른 준비와 안전 수칙만 지킨다면, 해외 자전거여행은 충분히 안전하게 즐길 수 있습니다. 이 가이드에서는 처음 해외 자전거여행을 떠나는 분들을 위한 필수 안전 수칙을 소개합니다.
            </p>
          </section>

          <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-serif text-3xl font-bold text-dark mb-6 flex items-center gap-3">
              <MapPin className="h-8 w-8 text-primary" />
              출발 전 준비 - 안전의 시작
            </h2>
            
            <h3 className="font-serif text-2xl font-semibold text-dark mb-4 mt-8">1. 여행자 보험 가입은 필수</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              해외 자전거여행을 떠나기 전 가장 먼저 해야 할 일은 적절한 여행자 보험에 가입하는 것입니다. 일반 여행자 보험에 자전거 활동 특약을 추가하거나, 스포츠 활동이 포함된 보험을 선택하세요.
            </p>
            <div className="bg-secondary/50 p-6 rounded-lg my-6">
              <p className="font-semibold text-dark mb-2">보험 체크리스트:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ 자전거 사고 의료비 보장</li>
                <li>✓ 긴급 후송 서비스 포함</li>
                <li>✓ 자전거 및 장비 손상 보상</li>
                <li>✓ 여행 취소/중단 보장</li>
              </ul>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4 mt-8">2. 건강 체크와 예방접종</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              출발 최소 2주 전에는 건강검진을 받고, 필요한 예방접종을 완료하세요. 특히 동남아시아 여행의 경우 A형 간염, 장티푸스 예방접종이 권장됩니다.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              만성질환이 있다면 영문 진단서와 처방전을 준비하고, 복용 중인 약은 여유 있게 챙기세요.
            </p>
          </section>

          <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="font-serif text-3xl font-bold text-dark mb-6 flex items-center gap-3">
              <AlertCircle className="h-8 w-8 text-primary" />
              라이딩 중 안전 수칙
            </h2>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4">1. 현지 교통 규칙 숙지</h3>
            <div className="bg-secondary/50 p-6 rounded-lg my-6">
              <p className="font-semibold text-dark mb-3">동남아시아 주요 교통 특징:</p>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>베트남:</strong> 오토바이가 매우 많고 교통 흐름이 빠릅니다. 천천히, 예측 가능하게 움직이세요.</li>
                <li><strong>태국:</strong> 좌측통행 국가입니다. 방향 감각에 익숙해지는 시간이 필요합니다.</li>
                <li><strong>라오스:</strong> 도로 사정이 좋지 않은 곳이 많습니다. 노면 상태를 항상 주시하세요.</li>
              </ul>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4 mt-8">2. 그룹 라이딩 안전 원칙</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              잔차로드의 모든 투어는 그룹으로 진행됩니다. 그룹 라이딩의 안전 원칙을 지켜주세요:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li>• 선두 차량과 일정한 간격 유지</li>
              <li>• 앞 사람의 브레이크 신호에 즉시 대응</li>
              <li>• 추월 시 반드시 신호와 함께</li>
              <li>• 가이드의 지시에 따라 움직이기</li>
              <li>• 무리한 속도 경쟁 금지</li>
            </ul>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4 mt-8">3. 안전 장비 착용</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              안전 장비는 선택이 아닌 필수입니다:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>헬멧:</strong> 항상 착용, 턱끈을 제대로 조이기</li>
              <li>• <strong>장갑:</strong> 낙상 시 손 보호</li>
              <li>• <strong>선글라스:</strong> 햇빛과 이물질로부터 눈 보호</li>
              <li>• <strong>반사 조끼:</strong> 시야가 좋지 않을 때 필수</li>
            </ul>
          </section>

          <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <h2 className="font-serif text-3xl font-bold text-dark mb-6 flex items-center gap-3">
              <Heart className="h-8 w-8 text-primary" />
              건강 관리와 응급 상황 대처
            </h2>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4">1. 수분 섭취와 체온 관리</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              동남아시아의 더운 날씨에서는 탈수와 열사병이 가장 큰 위험입니다:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li>• 30분마다 물 마시기 (목마름을 느끼기 전에)</li>
              <li>• 소금을 포함한 간식으로 전해질 보충</li>
              <li>• 햇볕을 피할 수 있는 긴소매 입기</li>
              <li>• 무리한 일정보다는 충분한 휴식</li>
            </ul>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4 mt-8">2. 응급 상황 대처법</h3>
            <div className="bg-secondary/50 p-6 rounded-lg my-6">
              <p className="font-semibold text-dark mb-3">응급 상황별 대처:</p>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>경미한 낙상:</strong> 상처를 깨끗이 씻고 소독, 밴드 또는 거즈로 보호</li>
                <li><strong>근육 경련:</strong> 즉시 멈추고 스트레칭, 수분과 염분 보충</li>
                <li><strong>심한 부상:</strong> 가이드에게 즉시 알리고, 움직이지 말고 구급차 대기</li>
                <li><strong>열사병 증상:</strong> 그늘로 이동, 옷을 느슨하게, 시원한 물로 체온 낮추기</li>
              </ul>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4 mt-8">3. 비상 연락망 준비</h3>
            <p className="text-muted-foreground leading-relaxed">
              현지 긴급전화번호, 가이드 연락처, 보험사 긴급 연락처를 핸드폰에 저장하고, 종이에도 적어서 여권과 함께 보관하세요. 가족에게도 일정과 연락처를 공유해두는 것이 좋습니다.
            </p>
          </section>

          <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <h2 className="font-serif text-3xl font-bold text-dark mb-6">자전거 정비와 관리</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              기계적 문제로 인한 사고를 예방하려면 자전거 상태를 수시로 체크해야 합니다:
            </p>
            
            <div className="bg-secondary/50 p-6 rounded-lg my-6">
              <p className="font-semibold text-dark mb-3">매일 출발 전 체크리스트:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ 타이어 공기압과 외관 상태</li>
                <li>✓ 브레이크 작동 확인</li>
                <li>✓ 체인 상태와 기어 변속</li>
                <li>✓ 안장과 핸들 고정 상태</li>
                <li>✓ 라이트와 벨 작동</li>
              </ul>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              잔차로드 투어에는 전문 정비 가이드가 동행하므로, 이상이 발견되면 언제든 도움을 요청하세요.
            </p>
          </section>

          <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <h2 className="font-serif text-3xl font-bold text-dark mb-6">안전한 여행을 위한 마음가짐</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              해외 자전거여행의 안전은 단순히 규칙을 지키는 것을 넘어, 올바른 마음가짐에서 시작됩니다:
            </p>
            
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li><strong>무리하지 않기:</strong> 자신의 체력을 과신하지 말고, 힘들면 언제든 쉬세요.</li>
              <li><strong>경쟁하지 않기:</strong> 다른 사람과 속도를 비교하지 말고 내 페이스를 지키세요.</li>
              <li><strong>소통하기:</strong> 불편하거나 위험하다고 느끼면 즉시 가이드에게 알리세요.</li>
              <li><strong>현지 문화 존중:</strong> 안전은 현지인과의 좋은 관계에서도 시작됩니다.</li>
            </ul>

            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded my-6">
              <p className="text-dark font-medium mb-2">
                "가장 중요한 것은 무사히 돌아오는 것입니다"
              </p>
              <p className="text-muted-foreground text-sm">
                - 잔차로드 김종윤 대표
              </p>
            </div>
          </section>

          <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.7s" }}>
            <div className="bg-secondary/30 p-8 rounded-lg">
              <h2 className="font-serif text-2xl font-bold text-dark mb-4">
                잔차로드와 함께라면 더 안전합니다
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                잔차로드의 모든 투어에는 20년 경력의 전문 가이드가 동행합니다. 현지 도로 상황을 누구보다 잘 알고 있고, 응급 상황에 대처할 수 있는 교육을 받았습니다. 또한 정비 가이드가 함께하여 기계적 문제를 즉시 해결합니다.
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

export default SafetyGuide;