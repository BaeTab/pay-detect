import React, { useState } from 'react';
import type { CalculationResult, EmploymentType } from '../utils/salaryLogic';
import { calculateSalary } from '../utils/salaryLogic';
import { Search, DollarSign, Clock } from 'lucide-react';
import { cn } from '../lib/utils';

interface Props {
    onCalculate: (result: CalculationResult, type: EmploymentType) => void;
    onLoading: () => void;
}

export default function InvestigationForm({ onCalculate, onLoading }: Props) {
    const [type, setType] = useState<EmploymentType>('ALBA');
    const [hours, setHours] = useState<string>('');
    const [rate, setRate] = useState<string>('10030'); // 2025 default
    const [hasInsurance, setHasInsurance] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!hours || !rate) return;

        onLoading();

        // Simulate investigation time done in parent or here? 
        // Agent says: "Loading... 1.5s". 
        // We'll call onLoading, parent handles timer.

        // Calculate immediately but parent shows result after delay
        const result = calculateSalary(
            type,
            parseFloat(rate),
            parseFloat(hours),
            hasInsurance
        );

        setTimeout(() => {
            onCalculate(result, type);
        }, 1500);
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl relative overflow-hidden border-2 border-slate-200">
            <div className="absolute top-0 left-0 w-full h-2 bg-detective-navy"></div>

            <h2 className="text-2xl font-bold mb-6 text-detective-navy flex items-center gap-2">
                <Search className="w-6 h-6 text-detective-yellow" />
                <span>수사 의뢰서</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Employment Type */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">고용 형태</label>
                    <div className="grid grid-cols-3 gap-2">
                        {[
                            { id: 'ALBA', label: '알바' },
                            { id: 'FREELANCER', label: '프리랜서' },
                            // { id: 'PERMANENT', label: '직원' } // Keeping it simple for now as per logic
                        ].map((t) => (
                            <button
                                key={t.id}
                                type="button"
                                onClick={() => setType(t.id as EmploymentType)}
                                className={cn(
                                    "p-2 text-sm rounded-md border font-bold transition-colors",
                                    type === t.id
                                        ? "bg-detective-navy text-white border-detective-navy"
                                        : "bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100"
                                )}
                            >
                                {t.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Weekly Hours */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 flex items-center gap-1">
                        <Clock className="w-4 h-4" /> 주당 근무 시간
                    </label>
                    <input
                        type="number"
                        value={hours}
                        onChange={(e) => setHours(e.target.value)}
                        placeholder="예: 20"
                        className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-detective-yellow focus:outline-none"
                        required
                    />
                    <p className="text-xs text-slate-400">* 15시간 이상 시 주휴수당 발생 가능성 높음</p>
                </div>

                {/* Hourly Rate */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 flex items-center gap-1">
                        <DollarSign className="w-4 h-4" /> 시급 (원)
                    </label>
                    <div className="flex gap-2">
                        <input
                            type="number"
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            className="flex-1 p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-detective-yellow focus:outline-none"
                            placeholder="10030"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setRate('10030')}
                            className="px-3 py-2 bg-slate-100 text-xs text-slate-600 rounded-md hover:bg-slate-200"
                        >
                            2025 최저
                        </button>
                    </div>
                </div>

                {/* Insurance Option (Only for Alba really, but...) */}
                {type === 'ALBA' && (
                    <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-md">
                        <input
                            type="checkbox"
                            id="insurance"
                            checked={hasInsurance}
                            onChange={(e) => setHasInsurance(e.target.checked)}
                            className="w-4 h-4 text-detective-navy focus:ring-detective-yellow"
                        />
                        <label htmlFor="insurance" className="text-sm text-slate-700">
                            4대보험 가입 (9.32%)
                        </label>
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full py-4 bg-detective-navy text-white text-lg font-bold rounded-lg hover:bg-slate-700 transition-transform active:scale-95 shadow-lg flex items-center justify-center gap-2"
                >
                    <Search className="w-5 h-5 text-detective-yellow" />
                    수사 시작 (계산하기)
                </button>
            </form>
        </div>
    );
}
