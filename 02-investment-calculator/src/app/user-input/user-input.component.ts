import { Component,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {

  // variable names from the form
  initial_investment= signal(0);
  annual_investment= signal(0);
  duration= signal(0);
  expected_return= signal(0);

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.CalculateInvestmentResults({
      initialInvestment: +this.initial_investment(),
      annualInvestment: +this.annual_investment(),
      duration: +this.duration(),
      expectedReturn: +this.expected_return(),
    });

    this.initial_investment.set(0);
    this.annual_investment.set(0);
    this.duration.set(0);
    this.expected_return.set(0);
  }
}
