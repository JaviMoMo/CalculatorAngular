import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  public btn!: (string | number)[];
  public btnUp!: String[];
  public valueInput: string = ''

  constructor() {}

  ngOnInit(): void {
    this.btn = ['7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '.', '0', '/', '='];
    this.btnUp = ['A/C', 'C', '√', '%', 'M+', 'M-', 'RM'];
  }

  onClick(param: any) {
    if(param == '=') {
      if(this.valueInput.includes('√')) {
        let num = parseFloat(this.valueInput.slice(1));
        let result = Math.sqrt(num).toString();
        this.valueInput = result;
      } else if (this.valueInput.includes('%')) {
        this.valueInput = (parseFloat(this.valueInput) / 100).toString();
      }
     this.valueInput = parseFloat(eval(this.valueInput)).toString();
     console.log(this.valueInput)
    } else if(param == 'A/C'){
      this.valueInput = '';
    } else if(param == 'C'){
      this.valueInput = this.valueInput.slice(0, -1);
    } else if(param == '√') {
      this.valueInput = '√'
    } else if (param == '.' || param == '+' || param == '-' || param == '/' || param == '1'|| param == '2'|| param == '3'||param ==  '4'|| param == '5'|| param == '6'|| param == '7'|| param == '8'|| param == '9'|| param == '0') {
      this.valueInput += param;
    } else if (param == 'M+'){
      localStorage.setItem('M', this.valueInput);
      this.valueInput = '';
    } else if (param == 'RM') {
      this.valueInput = localStorage.getItem('M')!;
    } else if (param == 'M-') {
      localStorage.removeItem('M');
    } else if (param == 'x') {
      this.valueInput += '*'
    }
  }
}
