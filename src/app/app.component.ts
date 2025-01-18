import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myFit';
  age: any;
  weight: any;
  height: any;
  gender: any;
  bmi: any;
bmr: any;

  constructor(){
    this.bmi = 0;
  }

  BMICalculate(){
    if (this.weight && this.height){
      this.bmi = (this.weight / ((this.height * this.height)/10000)).toFixed(1);
    }
    this.BMRCaculate();
  }

  BMRCaculate(){
    if (this.gender && this.weight && this.height && this.age) {
      if (this.gender === 'man') {
        this.bmr = (
          13.7 * this.weight +
          5.0 * this.height -
          6.8 * this.age +
          66
        ).toFixed(1);
      } else if (this.gender === 'woman') {
        this.bmr = (
          9.6 * this.weight +
          1.8 * this.height -
          4.7 * this.age +
          655
        ).toFixed(1);
      }
    } else {
      this.bmr = 'Please fill in all fields correctly';
    }
  }

  TDEECalculate(){
  }
}
