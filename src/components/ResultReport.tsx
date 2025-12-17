import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { CalculationResult, EmploymentType } from '../utils/salaryLogic';
import { EXTERNAL_LINKS } from '../constants/links';
import { CheckCircle, ExternalLink, RotateCcw } from 'lucide-react';

interface Props {
    result: CalculationResult;
    type: EmploymentType;
    onReset: () => void;
}

export default function ResultReport({ result, type, onReset }: Props) {
    const [showStamp, setShowStamp] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowStamp(true);
        }, 500); // Slight delay after component mount for effect
        return () => clearTimeout(timer);
    }, []);

    const getCtaLink = () => {
        if (type === 'FREELANCER') {
            return {
                text: "떼인 세금(3.3%) 환급 수사 의뢰하기",
                url: EXTERNAL_LINKS.TAX_REFUND,
                color: "bg-blue-600 hover:bg-blue-700"
            };
        }
        // Default for ALBA or others
        return {
            text: "더 좋은 시급의 일자리 수사하기",
            url: EXTERNAL_LINKS.JOB_SEARCH,
            color: "bg-orange-600 hover:bg-orange-700"
        };
    };

    const cta = getCtaLink();

    return (
        <div className="w-full max-w-md mx-auto relative perspective-1000">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 pt-12 rounded-lg shadow-xl border-2 border-slate-200 relative overflow-hidden"
            >
                {/* Paper texture or top accent */}
                <div className="absolute top-0 left-0 w-full h-4 bg-pattern-stripes opacity-10"></div>
                <div className="absolute top-4 right-4 text-xs text-slate-400 font-mono">CASE #{Math.floor(Math.random() * 9000) + 1000}</div>

                <h2 className="text-2xl font-bold text-center text-slate-800 mb-8 font-serif">수사 결과 보고서</h2>

                <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center text-slate-500 text-sm">
                        <span>기본 급여 (월)</span>
                        <span>{result.basePay.toLocaleString()} 원</span>
                    </div>

                    <div className="flex justify-between items-center text-detective-navy font-bold text-lg p-2 bg-yellow-50 rounded border border-yellow-100">
                        <span className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-detective-yellow" />
                            찾아낸 주휴수당
                        </span>
                        <span className="text-amber-600">+{result.holidayPay.toLocaleString()} 원</span>
                    </div>
                    {!result.isHolidayPayApplicable && (
                        <div className="text-xs text-slate-400 text-right px-2">
                            * 주 15시간 미만으로 대상 아님
                        </div>
                    )}

                    <div className="flex justify-between items-center text-slate-500 text-sm border-b pb-2">
                        <span>공제 세금 ({type === 'FREELANCER' ? '3.3%' : '9.32% 예상'})</span>
                        <span className="text-red-400">-{result.tax.toLocaleString()} 원</span>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                        <span className="text-xl font-bold text-slate-800">최종 실수령액</span>
                        <span className="text-3xl font-bold text-detective-navy border-b-4 border-detective-yellow/50">
                            {result.total.toLocaleString()} 원
                        </span>
                    </div>
                </div>

                {/* Stamp Animation */}
                {showStamp && (
                    <motion.div
                        initial={{ scale: 3, opacity: 0, rotate: -20 }}
                        animate={{ scale: 1, opacity: 1, rotate: -15 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-red-600 text-red-600 rounded-lg p-2 font-bold text-4xl opacity-80 rotate-[-15deg] pointer-events-none mix-blend-multiply z-10"
                        style={{
                            textShadow: "0 0 10px rgba(220, 38, 38, 0.3)",
                            maskImage: "url('/noise.png')" // Optional texture
                        }}
                    >
                        수사 종결
                    </motion.div>
                )}

                {/* Smart CPA Link */}
                <div className="mt-8 space-y-3">
                    <a
                        href={cta.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full py-3 rounded-lg text-white font-bold text-center shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 ${cta.color}`}
                    >
                        {cta.text}
                        <ExternalLink className="w-4 h-4" />
                    </a>

                    <button
                        onClick={onReset}
                        className="w-full py-2 text-slate-400 hover:text-slate-600 text-sm flex items-center justify-center gap-1"
                    >
                        <RotateCcw className="w-3 h-3" /> 다시 수사하기
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
