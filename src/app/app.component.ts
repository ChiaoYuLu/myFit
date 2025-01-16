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

  constructor(){
    this.bmi = 0;
  }

  bmiCalculate(){
    if (this.weight && this.height){
      this.bmi = (this.weight / ((this.height * this.height)/10000)).toFixed(1);
    }
  }
}
