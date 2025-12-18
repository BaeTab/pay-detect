
export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string; // Markdown or HTML string
    date: string;
    author: string;
    category: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "2025-minimum-wage-holiday-pay",
        title: "2025년 최저임금 인상과 주휴수당 계산법 완벽 가이드",
        excerpt: "2025년 최저임금 인상에 따른 주휴수당 변화와 정확한 계산 방법을 알아봅니다. 내 월급은 얼마나 오를까요?",
        date: "2025-01-15",
        author: "주휴탐정",
        category: "임금 정보",
        content: `
      <h2 class="text-2xl font-bold mb-4">2025년 최저임금, 얼마나 올랐나?</h2>
      <p class="mb-4">2024년에 이어 2025년 최저임금이 결정되었습니다. 많은 근로자와 사업주 분들이 관심을 가지고 계실 텐데요, 최저임금의 상승은 곧 주휴수당의 상승을 의미합니다. 정확히 얼마나 올랐고, 내 주휴수당에는 어떤 영향을 미치는지 자세히 알아보겠습니다.</p>

      <h3 class="text-xl font-semibold mb-3">최저임금 인상률과 금액</h3>
      <p class="mb-4">2025년 최저시급은 전년 대비 일정 비율 인상되어 책정되었습니다. (가정: 2025년 최저임금이 10,030원이라고 가정하고 작성) 예를 들어, 2025년 최저시급이 <strong>10,030원</strong>으로 확정되었다면, 이를 기준으로 주휴수당을 다시 계산해봐야 합니다.</p>

      <h3 class="text-xl font-semibold mb-3">주휴수당 계산의 기초</h3>
      <p class="mb-4">주휴수당은 <strong>1주일에 15시간 이상</strong> 근무하고, <strong>개근</strong>했을 때 발생하는 유급 휴일에 대한 수당입니다. 계산 식은 다음과 같습니다.</p>
      <blockquote class="border-l-4 border-detective-yellow pl-4 italic mb-4 bg-gray-50 p-2 rounded">
        주휴수당 = (1주 소정근로시간 / 40시간) x 8시간 x 시급
      </blockquote>
      <p class="mb-4">보통 주 40시간(하루 8시간, 주 5일) 근무자의 경우, 주휴수당은 시급 x 8시간분이 됩니다.</p>

      <h3 class="text-xl font-semibold mb-3">2025년 기준 주휴수당 예시</h3>
      <p class="mb-2">만약 주 40시간 근무하는 근로자라면:</p>
      <ul class="list-disc list-inside mb-4 pl-2 space-y-1">
        <li>기본급: 10,030원 x 209시간 = 2,096,270원</li>
        <li>주휴수당 포함 시급: 10,030원 x 1.2 = 12,036원 (약식 계산)</li>
      </ul>
      <p class="mb-2">주 15시간 근무하는 아르바이트생의 경우:</p>
      <ul class="list-disc list-inside mb-4 pl-2 space-y-1">
        <li>주휴수당 = (15 / 40) x 8 x 10,030원 = 30,090원 (매주 추가 지급)</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3">주의사항</h3>
      <p class="mb-4">최저임금 인상은 기쁜 소식이지만, 사업주 입장에서는 부담이 될 수 있어 근로 시간을 조정하는 경우가 생길 수 있습니다. 특히 주 15시간 미만으로 근무 시간을 조정하는 '쪼개기 계약'이 늘어날 수 있으니, 근로계약 체결 시 꼼꼼히 확인해야 합니다.</p>
      
      <p class="font-medium text-detective-navy">결론: 2025년 최저임금 인상분을 정확히 반영하여 자신의 권리를 찾으세요. 주휴탐정 계산기를 이용하면 복잡한 계산 없이 바로 확인할 수 있습니다.</p>
    `
    },
    {
        id: "conditions-for-holiday-pay",
        title: "알바생 필독! 주휴수당 지급 조건 3가지 핵심 정리",
        excerpt: "주휴수당, 나도 받을 수 있을까? 헷갈리는 주휴수당 지급 조건 3가지를 명확하게 정리해 드립니다.",
        date: "2025-02-01",
        author: "주휴탐정",
        category: "알바 꿀팁",
        content: `
      <h2 class="text-2xl font-bold mb-4">내가 주휴수당 대상자인가요?</h2>
      <p class="mb-4">아르바이트를 하다 보면 가장 많이 듣는 질문 중 하나가 "저도 주휴수당 받을 수 있나요?"입니다. 주휴수당은 법적으로 보장된 권리이지만, 모든 알바생이 받을 수 있는 것은 아닙니다. 딱 3가지 조건만 기억하시면 됩니다.</p>

      <h3 class="text-xl font-semibold mb-3">조건 1: 주 15시간 이상 근무</h3>
      <p class="mb-2">가장 중요한 조건은 <strong>일주일에 15시간 이상</strong> 일하기로 약속되어 있어야 한다는 점입니다. 근로계약서상 소정근로시간이 기준입니다.</p>
      <ul class="list-disc list-inside mb-4 pl-2 space-y-1">
        <li>이번 주에 대타를 해서 15시간을 넘겼다면? -> 원칙적으로 소정근로시간이 아니므로 아닐 수 있습니다.</li>
        <li>매주 고정적으로 15시간 이상 일한다면? -> <strong>대상입니다.</strong></li>
      </ul>

      <h3 class="text-xl font-semibold mb-3">조건 2: 개근 (결근이 없어야 함)</h3>
      <p class="mb-2">일주일 동안 <strong>결근 없이</strong> 출근해야 합니다. 지각이나 조퇴는 결근이 아니므로 주휴수당 발생에는 영향을 주지 않습니다 (단, 지각/조퇴 시간만큼 급여가 차감될 수는 있음).</p>
      <ul class="list-disc list-inside mb-4 pl-2 space-y-1">
        <li>하루 아파서 결근했다면? -> 그 주의 주휴수당은 발생하지 않습니다.</li>
        <li>지각을 3번 했다면? -> 개근으로 인정되어 주휴수당은 발생합니다.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3">조건 3: 다음 주에도 근로 예정 (행정해석 변경 주의)</h3>
      <p class="mb-4">과거에는 '다음 주에도 근무가 예정되어 있어야 한다'는 조건이 있었으나, 최근 고용노동부 행정해석 변경으로 인해 <strong>마지막 근무하는 주에도 요건을 충족하면 지급</strong>하는 것으로 변경되는 추세입니다. 하지만 분쟁의 소지가 있으니 퇴사 시점을 명확히 하는 것이 좋습니다.</p>

      <h3 class="text-xl font-semibold mb-3">자주 묻는 질문 (FAQ)</h3>
      <div class="mb-4 space-y-3">
        <div>
          <p class="font-bold">Q. 4인 미만 사업장도 주어야 하나요?</p>
          <p>A. 네! 주휴수당은 사업장 규모(5인 미만 여부)와 상관없이 모든 사업장에 적용됩니다.</p>
        </div>
        <div>
          <p class="font-bold">Q. 수습기간에도 주나요?</p>
          <p>A. 네, 수습기간이라도 15시간 이상 개근했다면 지급해야 합니다.</p>
        </div>
      </div>

      <p class="font-medium text-detective-navy">자신의 근무 시간을 체크해보고, 받을 수 있는 수당을 놓치지 마세요!</p>
    `
    },
    {
        id: "unpaid-holiday-pay-action",
        title: "주휴수당을 안 줘요! 미지급 대처 방법 A to Z",
        excerpt: "사장님이 주휴수당을 안 준다고 할 때 어떻게 해야 할까요? 증거 수집부터 노동청 신고까지 단계별로 알려드립니다.",
        date: "2025-02-10",
        author: "주휴탐정",
        category: "법률 가이드",
        content: `
      <h2 class="text-2xl font-bold mb-4">주휴수당 미지급, 당황하지 마세요</h2>
      <p class="mb-4">열심히 일했는데 정당한 대가를 받지 못한다면 정말 억울하겠죠. 주휴수당 미지급 상황에 닥쳤을 때, 감정적으로 대응하기보다는 차근차근 법적 절차를 준비하는 것이 중요합니다.</p>

      <h3 class="text-xl font-semibold mb-3">1단계: 증거 수집하기</h3>
      <p class="mb-2">말로만 주장해서는 인정받기 어렵습니다. 확실한 물증이 필요합니다.</p>
      <ul class="list-disc list-inside mb-4 pl-2 space-y-1">
        <li><strong>근로계약서:</strong> 가장 기본입니다. 없다면? 근로 조건이 적힌 문자, 카톡 내용이라도 확보하세요.</li>
        <li><strong>출퇴근 기록:</strong> 교통카드 내역, 근무표 사진, 출퇴근 기록 앱 내역 등 내가 실제로 일했다는 증거.</li>
        <li><strong>급여 명세서/통장 입금 내역:</strong> 주휴수당이 포함되지 않은 금액이 입금된 내역.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3">2단계: 사장님께 요청하기 (내용증명 등)</h3>
      <p class="mb-4">바로 신고하기보다는 먼저 정당하게 요청해보세요. "제가 알아봤는데 주휴수당 지급 대상에 해당합니다. 확인 부탁드립니다"라고 정중하게 문자나 카톡을 남기세요. 거절당하거나 무시당하면 그 대화 내용도 증거가 됩니다.</p>

      <h3 class="text-xl font-semibold mb-3">3단계: 고용노동부 진정 제기</h3>
      <p class="mb-2">대화로 해결되지 않는다면 관할 고용노동지청에 진정을 넣을 수 있습니다.</p>
      <ul class="list-disc list-inside mb-4 pl-2 space-y-1">
        <li><strong>방법:</strong> 고용노동부 민원마당 홈페이지(minwon.moel.go.kr) 접속 -> 임금체불 진정서 작성.</li>
        <li><strong>출석:</strong> 진정 후 담당 근로감독관이 배정되면 조사를 위해 출석 요구를 받게 됩니다. 이때 수집한 증거를 제출하세요.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3">4단계: 체불임금 확인원 발급</h3>
      <p class="mb-4">노동청 조사 결과 체불 사실이 인정되면, 사업주에게 지급 지시가 내려집니다. 그래도 지급하지 않으면 '체불임금 등 사업주 확인서'를 발급받아 민사 소송이나 대지급금(구 소액체당금) 제도를 이용할 수 있습니다.</p>

      <h3 class="text-xl font-semibold mb-3">팁: 3년의 시효</h3>
      <p class="mb-4">임금채권의 소멸시효는 <strong>3년</strong>입니다. 퇴사 후 3년 이내라면 언제든지 청구할 수 있습니다. 너무 늦기 전에 권리를 찾으세요.</p>
    `
    },
    {
        id: "part-time-labor-law",
        title: "알바생이 꼭 알아야 할 근로기준법 핵심 5",
        excerpt: "주휴수당 말고도 챙겨야 할 게 많습니다. 근로계약서, 휴게시간, 야간수당 등 알바생 필수 노동법 상식.",
        date: "2025-02-20",
        author: "주휴탐정",
        category: "법률 가이드",
        content: `
      <h2 class="text-2xl font-bold mb-4">알바도 엄연한 근로자입니다</h2>
      <p class="mb-4">많은 알바생들이 자신이 '임시직'이라 생각하여 권리를 제대로 주장하지 못하는 경우가 많습니다. 하지만 근로기준법은 단시간 근로자에게도 대부분 적용됩니다. 꼭 알아야 할 5가지를 꼽아봤습니다.</p>

      <h3 class="text-xl font-semibold mb-3">1. 근로계약서 작성 및 교부</h3>
      <p class="mb-4">일하기 전 반드시 써야 합니다. 안 쓰면 사업주에게 벌금이 부과됩니다. 근로시간, 임금, 휴일 등이 적혀 있어야 합니다. 1부를 받아 보관하는 것도 필수!</p>

      <h3 class="text-xl font-semibold mb-3">2. 최저임금 준수</h3>
      <p class="mb-4">2024년, 2025년 최저임금 이상을 받아야 합니다. 수습기간이라도 1년 이상 계약한 경우에만 90% 지급이 가능하며, 단순 노무직(편의점, 주유소 등)은 감액이 불가능합니다.</p>

      <h3 class="text-xl font-semibold mb-3">3. 휴게시간</h3>
      <ul class="list-disc list-inside mb-2 pl-2 space-y-1">
        <li>4시간 일하면 30분 이상</li>
        <li>8시간 일하면 1시간 이상</li>
      </ul>
      <p class="mb-4">휴게시간은 <strong>무급</strong>이지만, 사용자의 지휘 감독에서 완전히 벗어나 자유롭게 쉴 수 있어야 합니다. 손님 올까 봐 카운터 지키며 밥 먹는 시간은 근무시간으로 인정받아야 합니다.</p>

      <h3 class="text-xl font-semibold mb-3">4. 가산수당 (야간, 연장, 휴일)</h3>
      <p class="mb-2"><strong>5인 이상 사업장</strong>이라면 가산수당이 적용됩니다.</p>
      <ul class="list-disc list-inside mb-4 pl-2 space-y-1">
        <li>야간근로(22:00~06:00): 시급의 1.5배</li>
        <li>연장근로(하루 8시간 초과): 시급의 1.5배</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3">5. 해고 예고 수당</h3>
      <p class="mb-4">3개월 이상 계속 근무한 근로자를 해고하려면 <strong>30일 전</strong>에 예고해야 합니다. 당장 내일부터 나오지 말라고 한다면, 30일분 통상임금(해고예고수당)을 청구할 수 있습니다.</p>

      <p class="font-medium text-detective-navy">내 권리는 내가 알아야 지킬 수 있습니다. 오늘 근로계약서를 다시 한번 확인해보세요.</p>
    `
    },
    {
        id: "holiday-pay-calculator-guide",
        title: "주휴탐정 계산기 100% 활용하는 꿀팁",
        excerpt: "복잡한 계산식 몰라도 됩니다. 주휴탐정 계산기로 내 예상 주휴수당을 10초 만에 확인하는 방법을 소개합니다.",
        date: "2025-03-01",
        author: "주휴탐정",
        category: "서비스 이용",
        content: `
      <h2 class="text-2xl font-bold mb-4">계산기 두드리다 지친 당신에게</h2>
      <p class="mb-4">"이번 달 월급이 왜 이거밖에 안 되지?" "주휴수당이 포함된 건가?" 직접 계산하려니 머리가 아프신가요? 주휴탐정 계산기를 활용하면 아주 간단합니다.</p>

      <h3 class="text-xl font-semibold mb-3">기능 1: 시급 -> 월급 환산</h3>
      <p class="mb-2">내 시급과 하루 근무 시간, 근무 일수만 입력하세요. 주휴수당이 포함된 월급과 포함되지 않은 월급을 비교해서 보여드립니다.</p>
      <ul class="list-disc list-inside mb-4 pl-2 space-y-1">
        <li><strong>활용:</strong> 알바 면접 볼 때, "시급 만 원 줄게"라고 하면 실제 월 수령액이 얼마인지 바로 체크해보세요.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3">기능 2: 내게 맞는 주휴수당 계산</h3>
      <ul class="list-disc list-inside mb-4 pl-2 space-y-1">
        <li>주 15시간 미만인 경우: "주휴수당 대상이 아닙니다"라고 명확히 알려드립니다.</li>
        <li>주 40시간 이상인 경우: 최대 한도인 8시간분까지만 계산하여 정확도를 높였습니다.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3">기능 3: 달력으로 보는 근무 기록 (업데이트 예정)</h3>
      <p class="mb-4">매일 근무 시간을 기록해두면 월말에 자동으로 예상 급여를 뽑아주는 기능을 준비 중입니다.</p>

      <h3 class="text-xl font-semibold mb-3">사용 팁</h3>
      <ol class="list-decimal list-inside mb-4 pl-2 space-y-1">
        <li><strong>세금 공제 전/후 확인:</strong> 계산기는 기본적으로 세전 금액입니다. 3.3% 프리랜서 세금이나 4대 보험료를 떼면 실수령액은 줄어들 수 있습니다.</li>
        <li><strong>휴게시간 제외:</strong> 근무 시간 입력 시 식사 시간 등 무급 휴게시간은 빼고 입력해야 정확합니다.</li>
      </ol>

      <p class="font-medium text-detective-navy">주휴탐정과 함께 현명한 알바 생활 하세요!</p>
    `
    },
    {
        id: "weekly-15-hours-rule",
        title: "딱 주 15시간 근무? 주휴수당 받을 수 있을까?",
        excerpt: "주 15시간 근무가 주휴수당의 커트라인입니다. 휴게시간 포함 여부 등 애매한 기준을 정리해 드립니다.",
        date: "2025-03-05",
        author: "주휴탐정",
        category: "알바 꿀팁",
        content: `
      <h2 class="text-2xl font-bold mb-4">마의 15시간, 그 기준은?</h2>
      <p class="mb-4">주휴수당 지급 기준인 '주 15시간 이상 근무'. 딱 15시간이면 받을 수 있을까요, 아니면 16시간부터일까요? 정답은 <strong>15시간을 포함하여 그 이상</strong>이면 받을 수 있습니다.</p>

      <h3 class="text-xl font-semibold mb-3">핵심은 '소정근로시간'</h3>
      <p class="mb-2">근로계약서에 정해진 시간이 중요합니다.</p>
      <ul class="list-disc list-inside mb-4 pl-2 space-y-1">
        <li><strong>사례 A:</strong> 계약서엔 주 14시간인데, 바빠서 1시간 더 일해서 15시간을 채움. -> 원칙적으로는 <strong>비대상</strong>입니다. (연장 근로는 소정근로시간에 포함되지 않음)</li>
        <li><strong>사례 B:</strong> 계약서엔 주 16시간인데, 조퇴해서 14시간 일함. -> 결근이 아니라면 <strong>대상</strong>입니다. (단, 조퇴 시간만큼 급여 차감 가능)</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3">휴게시간의 함정</h3>
      <p class="mb-2">"9시 출근, 12시 퇴근, 주 5일 근무니까 하루 3시간 x 5일 = 15시간! 주휴수당 받겠다!" 라고 생각하시나요? 만약 근무 중 <strong>30분의 휴게시간</strong>이 있다면?</p>
      <ul class="list-disc list-inside mb-4 pl-2 space-y-1">
        <li>실 근로시간: 2.5시간 x 5일 = 12.5시간</li>
        <li>이 경우 15시간 미만이 되어 <strong>주휴수당을 받을 수 없습니다.</strong></li>
      </ul>
      <p class="mb-4">사업주들이 주휴수당 지급을 피하기 위해 14.5시간 등으로 계약하거나 휴게시간을 넣어 15시간 미만으로 맞추는 경우가 많으니 계약 시 면밀히 살펴봐야 합니다.</p>

      <h3 class="text-xl font-semibold mb-3">결론</h3>
      <p class="font-medium text-detective-navy">'일한 시간'이 아니라 '계약된 근로 시간'이 중요합니다. 휴게시간을 제외하고 순수하게 일하는 시간이 주 15시간이 넘는지 체크해보세요!</p>
    `
    }
];
