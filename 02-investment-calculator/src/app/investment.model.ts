export interface Investment {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
};

export interface InvestmentInput {
    initialInvestment: number;
    duration: number;
    annualInvestment: number;
    expectedReturn: number;
};