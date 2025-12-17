import SEO from '../components/SEO';
import AdBanner from '../components/AdBanner';

export default function Guide() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <SEO
                title="주휴수당 수사 가이드"
                description="주휴수당의 정의, 지급 조건, 계산 방법, 미지급 시 대처법까지. 탐정이 알려주는 알기 쉬운 노동법 가이드."
                url="https://pay-detect.web.app/guide"
            />
            <h1 className="text-3xl font-bold text-detective-navy mb-8">주휴수당 수사 가이드</h1>

            <div className="space-y-8">
                <section className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                    <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <span className="text-2xl">📘</span> 주휴수당이란?
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                        주휴수당은 <strong>근로기준법 제55조</strong>에 따라, 일주일 동안 소정의 근로일수를 개근한 근로자에게
                        지급되는 <strong>유급 휴일에 대한 수당</strong>입니다. 쉽게 말해, 일주일을 꼬박 열심히 일했다면
                        하루치 급여를 추가로 받을 수 있는 권리입니다.
                    </p>
                </section>

                <section className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                    <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <span className="text-2xl">✅</span> 지급 조건 (수사 요건)
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-slate-600 ml-2">
                        <li><strong>주 15시간 이상 근무:</strong> 1주일에 평균 15시간 이상 일해야 합니다.</li>
                        <li><strong>개근:</strong> 근로계약서에 명시된 근무일에 모두 출근해야 합니다.</li>
                        <li><strong>계속 근로:</strong> 주휴수당이 발생한 주 이후에도 계속 근무해야 합니다 (퇴사 주에는 미지급될 수 있음 - 판례에 따라 다름).</li>
                    </ul>
                </section>

                <section className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                    <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <span className="text-2xl">🧮</span> 계산 방법
                    </h2>
                    <p className="text-slate-600 mb-4">
                        가장 기본적인 공식은 다음과 같습니다:
                    </p>
                    <div className="bg-detective-bg p-4 rounded text-center font-mono text-detective-navy font-bold mb-4">
                        (1주 총 근무시간 / 40시간) × 8시간 × 시급
                    </div>
                    <p className="text-slate-600 text-sm">
                        * 40시간 이상 근무하더라도 최대 40시간까지만 인정되어 계산됩니다 (통상 8시간분).<br />
                        * 5인 미만 사업장이라도 주휴수당은 <strong>필수 지급</strong> 대상입니다.
                    </p>
                </section>

                <section className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                    <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <span className="text-2xl">🚨</span> 못 받았을 때 대처법
                    </h2>
                    <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-2">
                        <li><strong>증거 확보:</strong> 근로계약서, 출퇴근 기록, 급여 명세서, 입금 내역 등을 확보하세요.</li>
                        <li><strong>사업주 요청:</strong> 정중하게 미지급 사실을 알리고 지급을 요청하세요.</li>
                        <li><strong>노동청 신고:</strong> 해결되지 않을 경우, 고용노동부에 임금체불 진정을 넣을 수 있습니다.</li>
                    </ol>
                </section>
            </div>

            {/* Ad Banner */}
            <AdBanner />
        </div>
    );
}
