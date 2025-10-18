import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, MapPin, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Top3Courses = () => {
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
                코스 추천
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>2025년 3월 5일</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>10분 읽기</span>
              </div>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
              시니어에게 딱 맞는 해외 자전거 여행 코스 TOP3 – 베트남, 태국, 라오스
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              체력과 취향에 맞는 맞춤형 코스로 안전하고 감동적인 여행을 경험하세요.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-dark mb-4">체력·취향별 맞춤 코스의 중요성</h2>
              <p className="text-foreground leading-relaxed mb-4">
                모든 사람의 체력과 경험이 다르듯, 자전거 여행 코스도 각자에게 맞는 것이 다릅니다. 
                너무 쉬우면 아쉽고, 너무 어려우면 완주가 부담스럽습니다.
              </p>
              <p className="text-foreground leading-relaxed">
                잔차로드는 시니어 라이더들을 위해 난이도, 거리, 풍경, 문화 체험을 모두 고려한 
                세 가지 대표 코스를 운영하고 있습니다. 당신에게 맞는 코스를 찾아보세요.
              </p>
            </section>

            <section className="mb-12">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-2xl mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">🇻🇳</span>
                  <h2 className="font-serif text-3xl font-bold text-dark">베트남 하장 루프</h2>
                </div>
                <div className="flex flex-wrap gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-foreground">하장 → 동반 → 메오박 → 옌민 → 하장</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-foreground">난이도: ★★★☆☆</span>
                  </div>
                  <div className="text-foreground">총 366km / 9박 10일</div>
                </div>

                <h3 className="font-serif text-2xl font-semibold text-dark mb-3">코스 특징</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  베트남 최북단의 산악 지대를 순환하는 코스로, 
                  구불구불한 산길을 따라 펼쳐지는 계단식 논밭과 소수민족 마을이 인상적입니다.
                </p>
                <p className="text-foreground leading-relaxed mb-6">
                  고도차가 있어 난이도는 중상급이지만, 전동 보조 자전거 옵션이 있어 
                  체력이 부담되는 분들도 충분히 완주 가능합니다.
                </p>

                <h3 className="font-serif text-2xl font-semibold text-dark mb-3">하이라이트</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground">
                      <strong>동반 시장:</strong> 형형색색의 소수민족 전통 의상과 수공예품
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground">
                      <strong>마피렌 고개:</strong> 베트남에서 가장 아름다운 산길 중 하나
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground">
                      <strong>홈스테이 체험:</strong> 현지 가정에서의 하룻밤, 진짜 베트남을 느낄 수 있는 시간
                    </span>
                  </li>
                </ul>

                <div className="bg-white/50 p-4 rounded-xl">
                  <p className="text-sm text-foreground italic">
                    "구름 위를 달리는 기분이었어요. 힘들었지만 그만큼 보람도 컸습니다. 
                    전동 보조 덕분에 70세인 제가 완주할 수 있었어요." <br />
                    <span className="text-xs text-muted-foreground not-italic">— 박철수님, 70세</span>
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-500/10 to-amber-500/5 p-8 rounded-2xl mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">🇹🇭</span>
                  <h2 className="font-serif text-3xl font-bold text-dark">태국 반그릇 → 수랏타니</h2>
                </div>
                <div className="flex flex-wrap gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-foreground">반그릇 → 춤폰 → 수랏타니</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-foreground">난이도: ★★★★☆</span>
                  </div>
                  <div className="text-foreground">총 370km / 8박 10일</div>
                </div>

                <h3 className="font-serif text-2xl font-semibold text-dark mb-3">코스 특징</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  태국 남부 해안을 따라 달리는 장거리 코스로, 
                  열대 야자수 숲과 에메랄드빛 바다가 끝없이 이어집니다.
                </p>
                <p className="text-foreground leading-relaxed mb-6">
                  평탄한 해안도로가 대부분이라 고도차 부담은 적지만, 
                  거리가 길어 체력 안배가 중요합니다. 도전과 성취감을 원하는 분께 추천합니다.
                </p>

                <h3 className="font-serif text-2xl font-semibold text-dark mb-3">하이라이트</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground">
                      <strong>해안 일출 라이딩:</strong> 새벽 바다를 달리며 맞는 일출의 감동
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground">
                      <strong>사원 탐방:</strong> 태국 전통 불교 사원에서의 명상과 휴식
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground">
                      <strong>해산물 코스 요리:</strong> 매일 저녁 현지에서 잡은 신선한 해산물 만찬
                    </span>
                  </li>
                </ul>

                <div className="bg-white/50 p-4 rounded-xl">
                  <p className="text-sm text-foreground italic">
                    "370km를 완주했을 때의 성취감은 말로 표현할 수 없어요. 
                    평생 기억에 남을 도전이었습니다." <br />
                    <span className="text-xs text-muted-foreground not-italic">— 김미경님, 62세</span>
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">🇱🇦</span>
                  <h2 className="font-serif text-3xl font-bold text-dark">라오스 방비엥 → 루앙프라방</h2>
                </div>
                <div className="flex flex-wrap gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-foreground">방비엥 → 강변 마을 → 루앙프라방</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-foreground">난이도: ★★☆☆☆</span>
                  </div>
                  <div className="text-foreground">총 180km / 8박 10일</div>
                </div>

                <h3 className="font-serif text-2xl font-semibold text-dark mb-3">코스 특징</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  메콩강을 따라 천천히 흐르는 시간 속에서 진정한 여유를 찾는 코스입니다. 
                  거리도 짧고 난이도도 낮아 자전거 여행 입문자에게 이상적입니다.
                </p>
                <p className="text-foreground leading-relaxed mb-6">
                  속도보다는 풍경과 문화를 즐기는 데 초점을 맞춘 '느린 여행'의 정수를 경험할 수 있습니다.
                </p>

                <h3 className="font-serif text-2xl font-semibold text-dark mb-3">하이라이트</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground">
                      <strong>메콩강 일몰:</strong> 강변 카페에서 맞는 느긋한 일몰 시간
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground">
                      <strong>루앙프라방 사원:</strong> UNESCO 세계문화유산 도시 탐방
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground">
                      <strong>꽝시 폭포:</strong> 에메랄드빛 물에서 즐기는 천연 수영장
                    </span>
                  </li>
                </ul>

                <div className="bg-white/50 p-4 rounded-xl">
                  <p className="text-sm text-foreground italic">
                    "라이딩보다 여유로운 시간이 더 많아서 좋았어요. 
                    시계를 보지 않고 자연의 리듬에 맞춰 움직이는 경험이 새로웠습니다." <br />
                    <span className="text-xs text-muted-foreground not-italic">— 이순희님, 58세</span>
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-dark mb-4">나에게 맞는 코스는?</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-dark mb-1">자전거 여행이 처음이시라면</h3>
                  <p className="text-muted-foreground">→ 라오스 방비엥~루앙프라방 (난이도 ★★☆☆☆)</p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-dark mb-1">도전과 성취감을 원하신다면</h3>
                  <p className="text-muted-foreground">→ 태국 반그릇~수랏타니 (난이도 ★★★★☆)</p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-dark mb-1">자연 경관과 문화 체험을 중시한다면</h3>
                  <p className="text-muted-foreground">→ 베트남 하장 루프 (난이도 ★★★☆☆)</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-dark mb-4">시니어에게 맞춘 '적당한 도전'의 여행</h2>
              <p className="text-foreground leading-relaxed mb-4">
                잔차로드의 모든 코스는 시니어의 체력을 고려하여 설계되었습니다. 
                하루 평균 30~50km 정도의 라이딩으로, 무리하지 않으면서도 충분한 성취감을 느낄 수 있습니다.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                또한 모든 코스에 서포트 차량이 동행하며, 체력이 힘들 때는 언제든 차량 이동이 가능합니다. 
                "완주"가 목표가 아니라 "즐기는 것"이 목표입니다.
              </p>
              <p className="text-foreground leading-relaxed">
                어떤 코스를 선택하든, 당신만의 속도로 달리며 인생의 새로운 장을 열어보세요.
              </p>
            </section>

            <section className="bg-primary/5 p-8 rounded-xl text-center">
              <h3 className="font-serif text-2xl font-bold text-dark mb-4">
                잔차로드에서는 체력별 맞춤 코스와 안전 가이드가 함께합니다
              </h3>
              <p className="text-muted-foreground mb-6">
                전문 가이드의 세심한 케어와 서포트 차량의 안전망 속에서 <br />
                당신에게 딱 맞는 해외 자전거 여행을 경험하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/vietnam">
                  <Button size="lg">베트남 코스 자세히 보기</Button>
                </Link>
                <Link to="/thailand">
                  <Button size="lg" variant="outline">태국 코스 자세히 보기</Button>
                </Link>
                <Link to="/laos">
                  <Button size="lg" variant="outline">라오스 코스 자세히 보기</Button>
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

export default Top3Courses;
