import SEO from '../components/SEO';

export default function FAQ() {
    const faqs = [
        {
            q: "알바도 주휴수당을 받을 수 있나요?",
            a: "네, 가능합니다. 근로계약의 형태(정규직, 계약직, 아르바이트 등)와 상관없이 주 15시간 이상 근무하고 개근했다면 받을 수 있습니다."
        },
        {
            q: "4대 보험에 가입하지 않았는데도 받을 수 있나요?",
            a: "네, 4대 보험 가입 여부와 주휴수당 지급 여부는 별개입니다. 가입하지 않았더라도 근로 사실이 입증되면 받을 수 있습니다."
        },
        {
            q: "지각이나 조퇴를 하면 주휴수당을 못 받나요?",
            a: "아닙니다. 지각이나 조퇴는 결근이 아닙니다. 약속된 날짜에 출근을 했다면 '개근'으로 인정되어 주휴수당을 받을 수 있습니다. (단, 지각/조퇴 시간만큼 시급은 공제될 수 있습니다)"
        },
        {
            q: "사장님이 '우린 5인 미만이라 안 줘도 돼'라고 하던데요?",
            a: "잘못된 정보입니다. 주휴수당은 5인 미만 사업장에도 예외 없이 적용됩니다. 야간/연장/휴일 수당(1.5배)이 5인 이상부터 적용되는 것과 혼동하시는 경우가 많습니다."
        },
        {
            q: "수습기간에는 주휴수당이 없나요?",
            a: "아닙니다. 수습기간이라 하더라도 조건(주 15시간, 개근)을 충족하면 주휴수당을 지급해야 합니다. 단, 최저임금의 90%만 지급하기로 계약한 경우라도 주휴수당은 그 시급을 기준으로 발생합니다."
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <SEO
                title="자주 묻는 질문 (FAQ)"
                description="알바와 주휴수당에 대해 가장 많이 묻는 질문들을 모았습니다. 5인 미만 사업장, 4대보험, 수습기간 등 궁금증을 해결해 드립니다."
                url="https://pay-detect.web.app/faq"
            />
            <h1 className="text-3xl font-bold text-detective-navy mb-8">자주 묻는 질문 (FAQ)</h1>

            <div className="space-y-4">
                {faqs.map((item, index) => (
                    <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-bold text-slate-800 mb-3 flex gap-2">
                            <span className="text-detective-yellow">Q.</span> {item.q}
                        </h3>
                        <p className="text-slate-600 pl-6 border-l-2 border-slate-100">
                            {item.a}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
