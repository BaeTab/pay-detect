# Role
당신은 'Creative Frontend Developer'이자 'UI/UX Storyteller'입니다.
단순한 계산 도구를 넘어, '탐정(Detective)'이라는 컨셉을 UI와 애니메이션에 녹여내어 사용자에게 즐거운 경험을 제공하는 웹앱을 만듭니다.

# Project Name & Concept
프로젝트명: **"주휴탐정 (Holiday Pay Detective)"**
컨셉: "사장님이 숨긴 내 돈, 탐정이 찾아드립니다!"
목표: 아르바이트생과 프리랜서를 위해 주휴수당과 3.3% 세금 환급액을 계산해 주는 서비스입니다. 계산 과정을 '수사(Investigation)'처럼 연출하고, 결과 화면에서 '찾아낸 돈'을 강조하여 CPA(세금 환급/구직) 전환율을 높입니다.

# Tech Stack
- Framework: React (Vite)
- Language: TypeScript
- Styling: Tailwind CSS (탐정 테마 - Navy/Yellow/White)
- Animation: Framer Motion (돋보기 수사 효과, 도장 찍는 효과)
- Icons: Lucide-react (MagnifyingGlass, Footprints, FileSearch 등)
- Hosting: Firebase Hosting

# Critical Requirements (Must Implement)
다음 3가지는 서비스의 정체성과 수익화를 위해 필수입니다.

1.  **Mobile Viewport Fix (`dvh`):**
    * 모바일 웹앱 환경을 고려하여 최상위 컨테이너에 `min-h-[100dvh]`를 적용하세요.

2.  **Detective Theme UI & Animation:**
    * **Loading:** 계산 버튼을 누르면 "수사 중..." 문구와 함께 돋보기가 움직이는 애니메이션을 1.5초간 보여주세요 (Fake Loading).
    * **Result:** 결과가 나오면 "수사 종결!" 도장이 쾅 찍히는 애니메이션을 적용하세요.
    * **Tone:** 딱딱한 "계산하기" 대신 "숨은 돈 찾기", "수사 의뢰하기" 같은 용어를 사용하세요.

3.  **Smart CPA Linking (The "Solution"):**
    * 결과 카드 하단에 맞춤형 해결책 버튼을 배치하세요.
        * 프리랜서(3.3%) 결과 시 -> "떼인 세금(3.3%) 환급 수사 의뢰하기" (삼쩜삼 등 링크).
        * 알바 결과 시 -> "더 좋은 시급의 일자리 수사하기" (알바몬 등 링크).
    * `constants/links.ts` 파일로 링크를 관리하세요.

# Core Logic (Korea Labor Standards)

## 1. Input Fields (수사 의뢰서)
* **고용 형태:** 시급 알바 / 3.3% 프리랜서 / 월급직.
* **근무 시간:** 주당 근무 시간 (15시간 미만/이상 자동 감지).
* **급여:** 시급(2025년 최저시급 10,030원 자동 입력 버튼), 월급 등.

## 2. Calculation Logic
* **주휴수당:** 주 15시간 이상 시 `(주 근무시간/40 * 8 * 시급)` 공식 적용.
* **세금:** 3.3% 또는 4대 보험(9.32%) 공제 선택.
* **결과 출력:**
    * 기본 급여
    * (+) 탐정이 찾아낸 주휴수당 (**Highlight Yellow**)
    * (-) 공제 세금
    * **(=) 최종 실수령액 (Case Closed)**

# UI/UX Design Concept
* **Color Palette:**
    * Primary: `bg-slate-800` (탐정의 코트 색, 신뢰/무게감).
    * Accent: `text-yellow-400` (경고 테이프, 하이라이트).
    * Background: `bg-slate-50`.
* **Typography:** 가독성 좋은 고딕체(Pretendard 등) + 포인트 문구에 진지한 명조체 섞어쓰기 고려.

# Task Steps
1.  프로젝트 세팅 (`lucide-react`, `framer-motion` 설치).
2.  `utils/salaryLogic.ts`: 급여 및 주휴수당 계산 로직 구현.
3.  `constants/links.ts`: 제휴 링크 상수 파일.
4.  `components/InvestigationForm.tsx`: 탐정 테마가 적용된 입력 폼.
5.  `components/ResultReport.tsx`: 수사 보고서 컨셉의 결과 카드 (애니메이션 필수).
6.  `components/AdBanner.tsx`: 애드센스 컴포넌트.
7.  `App.tsx`: 전체 레이아웃.

위 내용을 바탕으로 **지금 바로 배포 가능한 수준의 완성된 코드**를 작성해줘.
특히 **'수사 중...' 애니메이션**과 **'수사 종결' 도장 효과**가 구현된 코드를 신경 써줘.