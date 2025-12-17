# 주휴탐정 🔍

**사장님이 숨긴 내 돈 찾기** - 주휴수당 계산기

주휴탐정은 근로자들이 자신의 주휴수당을 쉽고 정확하게 계산할 수 있도록 돕는 웹 애플리케이션입니다. 복잡한 근로기준법을 이해하기 쉽게 풀어내어, 누구나 자신의 정당한 권리를 확인할 수 있습니다.

## 🎯 주요 기능

### 📊 주휴수당 계산기
- **간편한 입력**: 근무 시간, 시급, 근무 일수만 입력하면 자동 계산
- **상세한 결과**: 주휴수당, 총 급여, 월 예상 급여까지 한눈에 확인
- **실시간 계산**: 입력값 변경 시 즉시 결과 업데이트

### 📚 수사 가이드
- 주휴수당이란 무엇인가?
- 지급 조건 및 계산 방법
- 실제 사례를 통한 이해

### ❓ FAQ
- 자주 묻는 질문과 답변
- 근로기준법 관련 정보
- 주휴수당 관련 오해와 진실

### 📱 반응형 디자인
- 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 경험
- 직관적인 UI/UX

## 🛠️ 기술 스택

- **Frontend Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **Animation**: Framer Motion
- **SEO**: React Helmet Async
- **Icons**: Lucide React
- **Hosting**: Firebase Hosting
- **Analytics**: Firebase Analytics

## 📦 설치 및 실행

### 필수 요구사항
- Node.js 18 이상
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone https://github.com/baetab/pay-detect.git

# 디렉토리 이동
cd pay-detect

# 의존성 설치
npm install
```

### 환경 변수 설정

`.env` 파일을 생성하고 Firebase 설정을 추가하세요:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173`을 열어 확인하세요.

### 프로덕션 빌드

```bash
npm run build
```

### Firebase 배포

```bash
npm run deploy
```

## 📂 프로젝트 구조

```
pay-detect/
├── src/
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── AdBanner.tsx     # 광고 배너
│   │   ├── AnalyticsTracker.tsx  # 분석 추적
│   │   └── SEO.tsx          # SEO 메타 태그
│   ├── pages/               # 페이지 컴포넌트
│   │   ├── Home.tsx         # 홈 페이지
│   │   ├── CalculatorPage.tsx  # 계산기 페이지
│   │   ├── Guide.tsx        # 가이드 페이지
│   │   ├── FAQ.tsx          # FAQ 페이지
│   │   ├── PrivacyPolicy.tsx   # 개인정보처리방침
│   │   └── TermsOfService.tsx  # 이용약관
│   ├── App.tsx              # 메인 앱 컴포넌트
│   ├── main.tsx             # 진입점
│   ├── index.css            # 전역 스타일
│   └── firebase.ts          # Firebase 설정
├── public/                  # 정적 파일
├── index.html              # HTML 템플릿
├── package.json            # 프로젝트 의존성
├── tailwind.config.js      # Tailwind 설정
├── vite.config.ts          # Vite 설정
└── README.md               # 프로젝트 문서
```

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary (Navy)**: `#1e3a5f` - 신뢰감과 전문성
- **Secondary (Yellow)**: `#fbbf24` - 활기와 주목성
- **Background**: `#f8fafc` - 깔끔한 배경

### 타이포그래피
- 시스템 폰트 스택 사용으로 빠른 로딩
- 명확한 계층 구조

## 🔒 개인정보 보호

주휴탐정은 사용자의 개인정보를 매우 중요하게 생각합니다:
- **클라이언트 사이드 처리**: 모든 계산은 브라우저에서 수행
- **데이터 저장 없음**: 입력한 정보는 서버로 전송되지 않음
- **쿠키 사용**: Google Analytics를 위한 최소한의 쿠키만 사용

자세한 내용은 [개인정보처리방침](./src/pages/PrivacyPolicy.tsx)을 참조하세요.

## 📄 라이선스

이 프로젝트는 **비상업적 사용 라이선스**로 제공됩니다. 자세한 내용은 [LICENSE](./LICENSE) 파일을 참조하세요.

## ⚠️ 면책 조항

본 서비스는 모의 계산 도구이며, 법적 효력이 없습니다. 정확한 노무 관련 상담은 전문 노무사와 진행하시기 바랍니다.

## 🤝 기여하기

버그 리포트, 기능 제안, 풀 리퀘스트는 언제나 환영합니다!

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 등록해주세요.

---

© 2025 주휴탐정. All rights reserved.
