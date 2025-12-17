export type EmploymentType = 'ALBA' | 'FREELANCER' | 'PERMANENT';

export interface CalculationResult {
    basePay: number;
    holidayPay: number; // 주휴수당
    tax: number;
    taxRate: number;
    total: number;
    isHolidayPayApplicable: boolean;
}

export function calculateSalary(
    type: EmploymentType,
    hourlyRate: number,
    weeklyHours: number,
    has4Insurance: boolean = false
): CalculationResult {
    // Constants
    const WEEKS_PER_MONTH = 4.345;

    // 1. Holiday Pay Calculation (Weekly)
    // Max 40 hours considered for ratio (legal standard limit for holiday pay logic usually caps at 40h base)
    let holidayPayWeekly = 0;
    let isHolidayPayApplicable = false;

    if (weeklyHours >= 15) {
        const hoursForCalc = Math.min(weeklyHours, 40);
        holidayPayWeekly = (hoursForCalc / 40) * 8 * hourlyRate;
        isHolidayPayApplicable = true;
    }

    // 2. Base Pay Calculation (Monthly)
    const basePayWeekly = hourlyRate * weeklyHours;
    const basePayMonthly = basePayWeekly * WEEKS_PER_MONTH;
    const holidayPayMonthly = holidayPayWeekly * WEEKS_PER_MONTH;

    // 3. Tax Calculation
    // ALBA typically 3.3% OR 4 Insurance. FREELANCER 3.3%. PERMANENT usually 4 Insurance (simplifying).
    // User prompt says: "3.3% 또는 4대 보험(9.32%) 공제 선택."

    let totalGross = basePayMonthly + holidayPayMonthly;

    // If PERMANENT (Monthly input), we might treat 'hourlyRate' as monthly pay?
    // But the prompt implies "Hourly Rate" input mainly. 
    // If user selects "Monthly", we assume the input is monthly pay and maybe holiday pay is included or irrelevant.
    // However, "Holiday Pay Detective" implies finding HIDDEN holiday pay. Usually for Hourly workers.
    // Let's stick to Hourly logic for ALBA/FREELANCER.

    let taxRate = 0;
    if (type === 'FREELANCER') {
        taxRate = 0.033;
    } else if (type === 'ALBA') {
        taxRate = has4Insurance ? 0.0932 : 0.033; // 9.32% is approx employee share
    }

    const tax = totalGross * taxRate;
    const total = totalGross - tax;

    return {
        basePay: Math.round(basePayMonthly),
        holidayPay: Math.round(holidayPayMonthly),
        tax: Math.round(tax),
        taxRate,
        total: Math.round(total),
        isHolidayPayApplicable
    };
}
