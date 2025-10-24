import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, Heart, Activity, Brain, Users } from "lucide-react";

const HealthBenefits = () => {
  return (
    <div className="min-h-screen pt-28">
      <Navbar />
      
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Article Header */}
        <header className="mb-12 animate-fade-up">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="px-3 py-1 bg-secondary rounded-full font-medium">건강 정보</span>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>2025년 3월 12일</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>7분 읽기</span>
            </div>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
            50대 이후 자전거여행이 주는 건강 효과와 준비 운동
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            나이가 들수록 더 좋은 자전거여행! 50대 이후 시니어가 자전거여행을 통해 얻을 수 있는 건강상 이점과 여행 전 준비 운동법을 소개합니다.
          </p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="font-serif text-3xl font-bold text-dark mb-6 flex items-center gap-3">
              <Heart className="h-8 w-8 text-primary" />
              왜 시니어에게 자전거여행이 좋을까요?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              "나이가 들면 무리한 운동은 위험하지 않을까?"
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              많은 분들이 이런 걱정을 하시지만, 사실은 정반대입니다. 자전거는 관절에 부담을 주지 않으면서도 전신 운동 효과를 낼 수 있는 최고의 유산소 운동입니다. 특히 50대 이후에는 자전거여행이 건강 유지와 증진에 매우 효과적입니다.
            </p>
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded my-6">
              <p className="text-dark font-medium">
                연구에 따르면, 규칙적으로 자전거를 타는 50~60대는 그렇지 않은 또래보다 생물학적 나이가 10년 이상 젊다고 합니다.
              </p>
            </div>
          </section>

          <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-serif text-3xl font-bold text-dark mb-6 flex items-center gap-3">
              <Activity className="h-8 w-8 text-primary" />
              자전거여행이 주는 8가지 건강 효과
            </h2>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4 mt-8">1. 심혈관 건강 증진</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              자전거를 타면 심장이 강해지고 혈액순환이 좋아집니다. 규칙적인 자전거 운동은 심장질환 위험을 50%까지 낮출 수 있습니다. 특히 해외 자전거여행처럼 며칠간 지속되는 운동은 심폐 기능을 크게 향상시킵니다.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4 mt-8">2. 관절에 무리 없는 운동</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              등산이나 조깅과 달리, 자전거는 체중의 부담이 안장과 페달에 분산되어 무릎과 발목 관절에 무리가 거의 없습니다. 이미 관절염이 있는 분들도 안전하게 즐길 수 있는 운동입니다.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4 mt-8">3. 근력과 지구력 향상</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              자전거는 하체 근육뿐만 아니라 코어 근육, 팔 근육까지 사용하는 전신 운동입니다. 장거리 라이딩을 통해 근지구력이 크게 향상됩니다.
            </p>
            <div className="bg-secondary/50 p-6 rounded-lg my-6">
              <p className="font-semibold text-dark mb-2">자전거로 단련되는 주요 근육:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 대퇴사두근, 햄스트링 (허벅지)</li>
                <li>• 종아리 근육</li>
                <li>• 둔근 (엉덩이)</li>
                <li>• 복근과 허리 근육 (코어)</li>
                <li>• 어깨와 팔 근육</li>
              </ul>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4 mt-8">4. 체중 관리와 당뇨 예방</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              시속 20km로 1시간 자전거를 타면 약 500칼로리를 소모합니다. 5일간의 자전거여행으로 1~2kg의 체중 감량 효과를 기대할 수 있으며, 혈당 조절 능력도 향상됩니다.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4 mt-8">5. 면역력 강화</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              적당한 강도의 규칙적인 운동은 면역 체계를 강화합니다. 실제로 자전거를 규칙적으로 타는 사람은 감기에 덜 걸린다는 연구 결과가 있습니다.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4 mt-8">6. 골밀도 유지</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              자전거 타기는 체중 부하 운동은 아니지만, 페달을 밟는 동작이 다리 뼈에 적절한 자극을 주어 골다공증 예방에 도움이 됩니다.
            </p>
          </section>

          <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="font-serif text-3xl font-bold text-dark mb-6 flex items-center gap-3">
              <Brain className="h-8 w-8 text-primary" />
              정신 건강에도 탁월한 효과
            </h2>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4">7. 스트레스 해소와 우울증 예방</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              자전거를 타면 엔도르핀과 세로토닌 같은 '행복 호르몬'이 분비됩니다. 특히 아름다운 자연 속을 달리는 해외 자전거여행은 최고의 스트레스 해소법입니다.
            </p>
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded my-6">
              <p className="text-dark italic mb-2">
                "5일간의 베트남 자전거여행 후, 10년 묵은 스트레스가 다 날아간 것 같았어요. 약이나 상담보다 효과가 좋았습니다."
              </p>
              <p className="text-muted-foreground text-sm">- 서울 강남구, 김영수(58세)</p>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4 mt-8">8. 인지 기능 향상</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              유산소 운동은 뇌로 가는 혈류량을 증가시켜 기억력과 집중력을 향상시킵니다. 규칙적으로 자전거를 타는 시니어는 치매 발병률이 현저히 낮다는 연구 결과도 있습니다.
            </p>
          </section>

          <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <h2 className="font-serif text-3xl font-bold text-dark mb-6 flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              해외 자전거여행 전 준비 운동
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              해외 자전거여행을 더욱 즐겁고 안전하게 하기 위해서는 출발 4주 전부터 준비 운동을 시작하는 것이 좋습니다.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4">4주 전: 기초 체력 다지기</h3>
            <div className="bg-secondary/50 p-6 rounded-lg my-6">
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>주 3회, 30분씩:</strong> 한강이나 동네 자전거길에서 편안한 속도로 라이딩</li>
                <li><strong>스트레칭:</strong> 라이딩 전후 하체와 허리 스트레칭 10분씩</li>
                <li><strong>걷기:</strong> 자전거를 못 타는 날은 30분 이상 빠르게 걷기</li>
              </ul>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4 mt-8">3주 전: 강도 높이기</h3>
            <div className="bg-secondary/50 p-6 rounded-lg my-6">
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>주 3~4회, 45분씩:</strong> 조금 더 빠른 속도로, 언덕길 포함</li>
                <li><strong>근력 운동:</strong> 스쿼트, 런지 같은 하체 운동 추가 (주 2회)</li>
                <li><strong>코어 운동:</strong> 플랭크, 크런치로 복근과 허리 강화 (주 2회)</li>
              </ul>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4 mt-8">2주 전: 장거리 적응</h3>
            <div className="bg-secondary/50 p-6 rounded-lg my-6">
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>주말 장거리:</strong> 2~3시간 연속 라이딩에 도전</li>
                <li><strong>안장 적응:</strong> 여행 때 사용할 것과 비슷한 안장으로 연습</li>
                <li><strong>보호 장비:</strong> 헬멧, 장갑, 패드 바지 착용에 익숙해지기</li>
              </ul>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-dark mb-4 mt-8">1주 전: 컨디션 조절</h3>
            <div className="bg-secondary/50 p-6 rounded-lg my-6">
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>강도 줄이기:</strong> 가벼운 라이딩으로 몸을 회복시키기</li>
                <li><strong>충분한 수면:</strong> 하루 7~8시간 숙면</li>
                <li><strong>건강한 식단:</strong> 단백질과 탄수화물 균형 있게 섭취</li>
                <li><strong>수분 섭취:</strong> 하루 2리터 이상 물 마시기</li>
              </ul>
            </div>
          </section>

          <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <h2 className="font-serif text-3xl font-bold text-dark mb-6">여행 중 건강 관리 팁</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="font-semibold text-dark mb-3">수분 섭취</h3>
                <p className="text-muted-foreground text-sm">
                  30분마다 한 모금씩, 목마르지 않아도 규칙적으로 물을 마시세요. 동남아시아의 더운 날씨에서는 탈수가 가장 큰 적입니다.
                </p>
              </div>
              
              <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="font-semibold text-dark mb-3">적절한 휴식</h3>
                <p className="text-muted-foreground text-sm">
                  무리하지 말고 1~2시간마다 10분씩 휴식을 취하세요. 잔차로드 투어는 충분한 휴식 시간을 포함합니다.
                </p>
              </div>
              
              <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="font-semibold text-dark mb-3">영양 섭취</h3>
                <p className="text-muted-foreground text-sm">
                  바나나, 견과류 같은 간식을 자주 먹어 에너지를 보충하세요. 현지 음식도 골고루 드시되, 소화가 잘되는 것 위주로 선택하세요.
                </p>
              </div>
              
              <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="font-semibold text-dark mb-3">신체 신호 듣기</h3>
                <p className="text-muted-foreground text-sm">
                  무릎이나 허리에 통증이 느껴지면 즉시 가이드에게 알리고 휴식을 취하세요. 작은 통증을 무시하면 큰 부상으로 이어질 수 있습니다.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <div className="bg-secondary/30 p-8 rounded-lg">
              <h2 className="font-serif text-2xl font-bold text-dark mb-4">
                나이는 숫자에 불과합니다
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                60대에 처음 자전거여행을 시작한 분들도 많습니다. 중요한 것은 나이가 아니라 도전하는 마음입니다. 잔차로드의 투어는 각자의 체력에 맞춰 진행되며, 경험 많은 가이드가 항상 함께합니다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                자전거여행은 단순한 운동이 아닙니다. 새로운 풍경, 새로운 사람들, 새로운 자신을 만나는 인생의 여정입니다. 건강한 몸과 마음으로 제2의 인생을 시작하세요.
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

export default HealthBenefits;