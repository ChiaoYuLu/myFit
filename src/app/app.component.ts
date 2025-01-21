import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFit';
  age: any;
  weight: any;
  height: any;
  gender: any;
  bmi: any;
  bmr: any;
  tdee: any;
  activityLevel: any;
  resultsVisible: boolean = false;
intakeWater: any;

  constructor(){
    this.bmi = 0;
  }

  AllCaculate(){   
    this.BMICalculate();  
    this.BMRCaculate();
    this.TDEECalculate();
    this.intakeWaterCalculate();
    this.resultsVisible = true;
  }


  BMICalculate(){
    if (this.weight && this.height){
      this.bmi = (this.weight / ((this.height * this.height)/10000)).toFixed(1);
    }
    
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
    if (this.activityLevel && this.bmr){
      if (this.activityLevel === 'sedentary') {
        this.tdee = (this.bmr * 1.2).toFixed(1);
      } else if (this.activityLevel === 'lightlyActive') {
        this.tdee = (this.bmr * 1.375).toFixed(1);
      } else if (this.activityLevel === 'moderatelyActive') {
        this.tdee = (this.bmr * 1.55).toFixed(1);
      } else if (this.activityLevel === 'veryActive') {
        this.tdee = (this.bmr * 1.725).toFixed(1);
      } else if (this.activityLevel === 'superActive') {
        this.tdee = (this.bmr * 1.9).toFixed(1);
      }
    } else {
      this.tdee = 'Please fill in all fields correctly';
  }}

  intakeWaterCalculate(){
    if (this.weight){
      this.intakeWater = (this.weight * 0.033).toFixed(1);
    }
  }
}
