import { Injectable, signal } from "@angular/core";
import { InvestmentInput, Investment } from "./investment.model";

@Injectable({providedIn: 'root'})
export class InvestmentService {

    resultsData?: Investment[]; 
    
    CalculateInvestmentResults( data : InvestmentInput) {
        const {initialInvestment, duration, annualInvestment, expectedReturn} = data;
    
        const annualData = [];
        let investmentValue = initialInvestment;
      
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          // This calculates how much money the bank/market gives you this year based on your current balance.
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    
          // new balance is (old Balance) + (new Interest) + (Annual Contribution)
          investmentValue += interestEarnedInYear + annualInvestment;
    
          // show how much of that money is pure "free" profit from interest
          const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
          
    
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }

        this.resultsData = annualData;
    }
}