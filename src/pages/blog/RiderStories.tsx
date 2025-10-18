import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const RiderStories = () => {
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
                고객 후기
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>2025년 3월 1일</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>7분 읽기</span>
              </div>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
              여행이 인생을 바꾸다 – 잔차로드와 함께한 라이더들의 이야기
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              해외 자전거 여행을 다녀온 시니어 고객들의 진솔한 후기와 변화의 순간들.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <p className="text-foreground leading-relaxed text-lg italic text-center mb-8">
                "누군가는 늦었다 했지만, 그는 달리기 시작했다"
              </p>
              <p className="text-foreground leading-relaxed">
                은퇴 후, 많은 분들이 "이제 뭘 하며 살지?"라는 막연한 질문 앞에 서게 됩니다. 
                그 답을 찾기 위해 잔차로드와 함께 페달을 밟기 시작한 분들의 이야기를 들어보세요. 
                여행은 단순히 장소를 옮기는 것이 아니라, 삶을 다시 시작하는 계기가 될 수 있습니다.
              </p>
            </section>

            <section className="mb-12">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-2xl mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-dark mb-2">
                      김영수님 (65세) – 베트남 해안 루트
                    </h2>
                    <p className="text-sm text-muted-foreground">대기업 임원 출신, 2024년 11월 참가</p>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-semibold text-dark mb-3">여행을 결심하게 된 계기</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  "퇴직하고 나니 시간은 많은데 뭘 해야 할지 모르겠더라고요. 
                  골프도 치고 등산도 다녔지만 늘 같은 사람들, 같은 이야기만 반복됐어요. 
                  그러다 우연히 친구한테 잔차로드 이야기를 듣고 '한 번 해볼까?' 싶었죠."
                </p>

                <h3 className="font-serif text-xl font-semibold text-dark mb-3">여행 중 느낀 변화</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  "첫날은 솔직히 후회했어요. '내가 왜 이걸 하나' 싶었죠. (웃음) 
                  그런데 이틀째부터 달라지더라고요. 아침 일찍 일어나 해안도로를 달리는데, 
                  파도 소리와 바람 소리만 들리는 그 순간이 너무 평화로웠어요."
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  "함께 간 사람들도 처음엔 낯설었는데, 함께 땀 흘리고 밥 먹고 이야기하다 보니 
                  어느새 가족처럼 가까워졌어요. 나이 들어서 이렇게 새로운 친구를 만들 줄은 몰랐습니다."
                </p>

                <h3 className="font-serif text-xl font-semibold text-dark mb-3">귀국 후의 달라진 삶</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  "집에 돌아와서도 매일 아침 한강을 달리고 있어요. 
                  그리고 다음 여행을 벌써 계획 중입니다. 이번엔 태국으로 가려고요. 
                  인생이 65세에 끝나는 게 아니라 다시 시작될 수 있다는 걸 깨달았습니다."
                </p>

                <div className="bg-white/50 p-4 rounded-xl mt-6">
                  <p className="text-sm font-semibold text-dark mb-2">김영수님의 한마디</p>
                  <p className="text-foreground italic">
                    "잔차로드는 단순한 여행사가 아니라, 인생의 두 번째 출발선을 만들어주는 곳입니다."
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-500/10 to-amber-500/5 p-8 rounded-2xl mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-dark mb-2">
                      정미경님 (56세) – 태국 중부 루트
                    </h2>
                    <p className="text-sm text-muted-foreground">전업주부, 2024년 10월 참가</p>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-semibold text-dark mb-3">여행을 결심하게 된 계기</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  "아이들이 다 독립하고 나니 하루하루가 똑같았어요. 
                  남편은 일하러 나가고 나는 집에서 TV만 보고... 이렇게 살다가 늙는 게 너무 서러웠어요. 
                  뭔가 나를 위한 걸 하고 싶었는데, 용기가 안 났죠. 그러다 딸이 먼저 등을 떠밀어줬어요."
                </p>

                <h3 className="font-serif text-xl font-semibold text-dark mb-3">여행 중 느낀 변화</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  "처음엔 '내가 할 수 있을까?' 걱정만 가득했어요. 
                  자전거도 초등학교 이후로 처음 타는 거였거든요. 
                  근데 가이드님이 너무 잘 챙겨주시고, 같이 간 언니들도 응원해주니까 용기가 생기더라고요."
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  "태국 사원을 달리면서 문득 이런 생각이 들었어요. 
                  '나도 아직 할 수 있는 게 많구나. 나이는 숫자에 불과하구나.' 
                  그 순간 눈물이 주르륵 흘렀어요."
                </p>

                <h3 className="font-serif text-xl font-semibold text-dark mb-3">귀국 후의 달라진 삶</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  "이제 저도 자전거를 샀어요. 주말마다 남편이랑 같이 한강을 달리고 있어요. 
                  남편도 처음엔 의아해했는데, 이제는 '당신이 예전보다 훨씬 밝아졌다'고 해요. 
                  친구들한테도 자랑하고 다닙니다. (웃음)"
                </p>

                <div className="bg-white/50 p-4 rounded-xl mt-6">
                  <p className="text-sm font-semibold text-dark mb-2">정미경님의 한마디</p>
                  <p className="text-foreground italic">
                    "나이 들어서도 도전할 수 있다는 걸 알려준 여행이었어요. 
                    이제 두려움보다 기대가 더 큽니다."
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 p-8 rounded-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-dark mb-2">
                      박철민님 (62세) – 라오스 북부 루트
                    </h2>
                    <p className="text-sm text-muted-foreground">자영업, 2024년 9월 참가</p>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-semibold text-dark mb-3">여행을 결심하게 된 계기</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  "사업을 정리하고 나니 스트레스는 줄었는데 삶의 활력도 같이 사라진 느낌이었어요. 
                  건강검진에서 당뇨 전단계라는 이야기도 듣고... 
                  뭔가 건강도 챙기고 기분 전환도 할 수 있는 걸 찾다가 잔차로드를 알게 됐습니다."
                </p>

                <h3 className="font-serif text-xl font-semibold text-dark mb-3">여행 중 느낀 변화</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  "라오스는 정말 느린 나라더라고요. 사람들도 여유롭고 풍경도 평화로웠어요. 
                  메콩강변을 달리면서 '나도 이렇게 여유롭게 살아야겠다'는 생각을 했어요. 
                  그동안 너무 바쁘게만 살았던 것 같아요."
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  "가이드님이 '속도보다 방향이 중요하다'고 하신 말이 아직도 기억에 남아요. 
                  인생도 마찬가지인 것 같아요. 빨리 가는 것보다 어디로 가는지가 중요하죠."
                </p>

                <h3 className="font-serif text-xl font-semibold text-dark mb-3">귀국 후의 달라진 삶</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  "여행 다녀오고 나서 생활습관이 완전히 바뀌었어요. 
                  매일 아침 운동하고, 식단도 조절하고... 3개월 만에 5kg 빠졌고 당뇨 수치도 정상으로 돌아왔어요. 
                  의사 선생님도 깜짝 놀라셨죠."
                </p>

                <div className="bg-white/50 p-4 rounded-xl mt-6">
                  <p className="text-sm font-semibold text-dark mb-2">박철민님의 한마디</p>
                  <p className="text-foreground italic">
                    "잔차로드 여행은 몸도 마음도 건강하게 만들어주는 힐링 그 자체입니다. 
                    이제 매년 한 번씩 가려고 해요."
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-dark mb-4">잔차로드는 단순한 여행이 아니라 '새로운 시작'</h2>
              <p className="text-foreground leading-relaxed mb-4">
                이 분들의 이야기에는 공통점이 있습니다. 
                처음엔 모두 두려움과 걱정을 안고 시작했지만, 여행이 끝날 때쯤엔 자신감과 활력을 되찾았다는 것입니다.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                여행은 단순히 풍경을 보는 것이 아닙니다. 
                새로운 자신을 발견하고, 새로운 사람들을 만나고, 새로운 삶의 방식을 배우는 것입니다.
              </p>
              <p className="text-foreground leading-relaxed">
                잔차로드는 그저 자전거 여행 패키지를 판매하는 곳이 아닙니다. 
                시니어 여러분의 인생 2막을 함께 열어가는 동반자입니다.
              </p>
            </section>

            <section className="bg-secondary p-8 rounded-xl mb-12">
              <h3 className="font-serif text-2xl font-bold text-dark mb-4 text-center">
                잔차로드와 함께한 라이더들의 공통된 변화
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold text-dark mb-2">신체적 변화</h4>
                  <ul className="text-sm space-y-2 text-foreground">
                    <li>• 체력과 지구력 향상</li>
                    <li>• 체중 감량 및 건강 지표 개선</li>
                    <li>• 규칙적인 운동 습관 형성</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold text-dark mb-2">정신적 변화</h4>
                  <ul className="text-sm space-y-2 text-foreground">
                    <li>• 자신감과 성취감 증가</li>
                    <li>• 새로운 도전에 대한 두려움 감소</li>
                    <li>• 긍정적인 마인드셋 형성</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold text-dark mb-2">사회적 변화</h4>
                  <ul className="text-sm space-y-2 text-foreground">
                    <li>• 새로운 인간관계 형성</li>
                    <li>• 가족과의 대화 소재 증가</li>
                    <li>• 더 활발한 사회 활동</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold text-dark mb-2">삶의 태도 변화</h4>
                  <ul className="text-sm space-y-2 text-foreground">
                    <li>• 느긋하고 여유로운 생활 태도</li>
                    <li>• 새로운 것에 대한 호기심</li>
                    <li>• 인생을 즐기는 방법 습득</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-primary/5 p-8 rounded-xl text-center">
              <h3 className="font-serif text-2xl font-bold text-dark mb-4">
                당신의 다음 이야기, 잔차로드가 함께하겠습니다
              </h3>
              <p className="text-muted-foreground mb-6">
                지금 이 순간, 새로운 시작을 꿈꾸고 계신가요? <br />
                두려워 마세요. 이미 수백 명의 시니어분들이 용기를 내어 인생을 바꾸셨습니다. <br />
                다음은 당신의 차례입니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/vietnam">
                  <Button size="lg">여행 코스 둘러보기</Button>
                </Link>
                <Link to="/blog">
                  <Button size="lg" variant="outline">다른 후기 읽어보기</Button>
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

export default RiderStories;
