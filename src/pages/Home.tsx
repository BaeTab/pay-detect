import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import AdBanner from '../components/AdBanner';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="bg-white">
            <SEO
                title="주휴탐정 - 사장님이 숨긴 내 돈 찾기"
                description="알바, 프리랜서 주휴수당 계산기. 주 15시간 이상 근무 시 발생하는 주휴수당과 떼인 세금을 3초 만에 무료로 수사해드립니다."
                url="https://pay-detect.web.app"
            />
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-detective-navy text-white py-20">
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        사장님이 숨긴 내 돈, <br />
                        <span className="text-detective-yellow">주휴탐정</span>이 찾아드립니다!
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 mb-10">
                        복잡한 주휴수당 계산부터 떼인 세금 환급까지.<br />
                        클릭 한 번으로 당신의 정당한 권리를 찾으세요.
                    </p>
                    <button
                        onClick={() => navigate('/calculator')}
                        className="bg-detective-yellow text-detective-navy font-bold text-xl px-8 py-4 rounded-full hover:bg-yellow-300 transition-transform hover:scale-105 shadow-lg"
                    >
                        지금 바로 수사 시작하기 (무료)
                    </button>
                </div>

                {/* Background Pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute right-[-100px] top-[-100px] w-96 h-96 bg-detective-yellow rounded-full blur-3xl"></div>
                    <div className="absolute left-[-100px] bottom-[-100px] w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
                </div>
            </section>

            {/* Feature Section */}
            <section className="py-16 container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
                    왜 <span className="text-detective-navy">주휴탐정</span>인가요?
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm text-center">
                        <div className="text-4xl mb-4">🕵️</div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">정확한 수사</h3>
                        <p className="text-slate-600">
                            최신 근로기준법을 반영하여<br /> 1원 단위까지 정확하게 계산합니다.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm text-center">
                        <div className="text-4xl mb-4">⚡</div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">즉시 해결</h3>
                        <p className="text-slate-600">
                            복잡한 입력 없이<br /> 3초 만에 결과를 확인할 수 있습니다.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm text-center">
                        <div className="text-4xl mb-4">💰</div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">환급 연계</h3>
                        <p className="text-slate-600">
                            계산 후 즉시 세금 환급이나<br /> 더 좋은 일자리 정보를 제공합니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* Ad Banner */}
            <div className="container mx-auto px-4 max-w-4xl">
                <AdBanner />
            </div>

            {/* Content for SEO/AdSense */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6">주휴수당, 꼭 받아야 할까요?</h2>
                    <div className="prose prose-slate max-w-none text-slate-600">
                        <p className="mb-4">
                            주휴수당은 근로기준법 제55조에 따라, 1주일 동안 소정의 근로일수를 개근한 근로자에게 지급되는 유급 휴일에 대한 수당입니다.
                            많은 아르바이트생과 근로자들이 자신의 권리를 모르고 지나치는 경우가 많습니다.
                        </p>
                        <p className="mb-4">
                            주 15시간 이상 근무했다면, 알바생도, 프리랜서(조건부)도 주휴수당을 받을 권리가 있습니다.
                            주휴탐정은 여러분이 놓치고 있는 '숨은 돈'을 찾아드리는 것을 목표로 합니다.
                        </p>
                        <p>
                            지금 바로 계산기를 통해 내가 받아야 할 정당한 급여를 확인해보세요.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
