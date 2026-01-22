import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // variable names from the form
  initial_investment: number = 0;
  annual_investment: number = 0;
  duration: number = 0;
  expected_return: number = 0;

  onSubmit() {
    console.log('Initial Investment:', this.initial_investment);
  }
}
