import { Component } from '@angular/core';
import { NumberConvert } from '../../lib/Number-convert';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [FormsModule],
})
export class HomeComponent {
  numberEnter = '';
  result = '';
  private converter: NumberConvert = new NumberConvert();

  onSubmit(event: Event) {
    event.preventDefault();

    const cleanedInput = this.numberEnter.replace(/\s+/g, '');
    const num = parseInt(cleanedInput);

    if (!isNaN(num)) {
      if (num >= 0) {
        this.result = this.converter.toWords(num);
      } else {
        this.result = 'Please enter a positive number.';
      }
    } else {
      this.result = 'Invalid input. Please enter a number.';
    }
  }
}
