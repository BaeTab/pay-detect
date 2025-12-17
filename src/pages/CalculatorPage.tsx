import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InvestigationForm from '../components/InvestigationForm';
import ResultReport from '../components/ResultReport';
import AdBanner from '../components/AdBanner';
import AdConfirmationModal from '../components/AdConfirmationModal';
import type { CalculationResult, EmploymentType } from '../utils/salaryLogic';
import SEO from '../components/SEO';

type Step = 'FORM' | 'LOADING' | 'RESULT';

export default function CalculatorPage() {
    const [step, setStep] = useState<Step>('FORM');
    const [result, setResult] = useState<CalculationResult | null>(null);
    const [empType, setEmpType] = useState<EmploymentType>('ALBA');
    const [showAdModal, setShowAdModal] = useState(false);

    const handleLoading = () => {
        setStep('LOADING');
    };

    const handleCalculate = (res: CalculationResult, type: EmploymentType) => {
        setResult(res);
        setEmpType(type);
        // Show ad modal instead of going directly to RESULT
        setShowAdModal(true);
    };

    const handleAdConfirm = () => {
        setShowAdModal(false);
        setStep('RESULT');
    };

    const handleReset = () => {
        setStep('FORM');
        setResult(null);
    };

    return (
        <div className="max-w-lg mx-auto py-10 px-4">
            <SEO
                title="수사 의뢰 (주휴수당 계산기)"
                description="주휴수당, 3.3% 세금 계산을 한번에. 탐정이 당신의 급여를 정밀 분석합니다."
                url="https://pay-detect.web.app/calculator"
            />
            <AnimatePresence mode='wait'>
                {step === 'FORM' && (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-slate-800">수사 의뢰하기</h2>
                            <p className="text-slate-500 mt-2 text-sm">급여 정보를 입력하면 탐정이 즉시 분석합니다.</p>
                        </div>
                        <InvestigationForm onLoading={handleLoading} onCalculate={handleCalculate} />
                    </motion.div>
                )}

                {step === 'LOADING' && (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center py-20"
                    >
                        <motion.div
                            animate={{
                                x: [0, 30, 0, -30, 0],
                                y: [0, -20, 0, 20, 0],
                                scale: [1, 1.1, 1, 1.1, 1]
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="relative"
                        >
                            <div className="text-9xl relative z-10">🕵️</div>
                            <motion.div
                                className="absolute -top-4 -right-4 text-4xl"
                                animate={{ rotate: [0, 15, -15, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                🔍
                            </motion.div>
                        </motion.div>
                        <h3 className="mt-8 text-2xl font-bold text-detective-navy">수사 중...</h3>
                        <p className="text-slate-500">급여 대장을 정밀 분석하고 있습니다.</p>
                    </motion.div>
                )}

                {step === 'RESULT' && result && (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ResultReport result={result} type={empType} onReset={handleReset} />
                    </motion.div>
                )}
            </AnimatePresence>

            <AdConfirmationModal
                isOpen={showAdModal}
                onConfirm={handleAdConfirm}
                onClose={() => setShowAdModal(false)}
            />

            <AdBanner />
        </div>
    );
}
