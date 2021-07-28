import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: `./user.component.html`,
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  // properties
  firstName: string;
  lastName: string;
  age: number;
  address: any;

  hasKids:boolean;
  numberArray:number[];
  stringArray:string[];
  mixedArray:any[];
  tuple:[string,number,boolean];
  unusable:void;
  u:undefined;
  n:null;

  // methods
  constructor() {
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.age = 30;
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA',
    };

    this.hasKids =true;
    this.numberArray = [1,2];
    this.stringArray = ['course 1', 'course 2'];
    this.mixedArray = ['course 1', 2];
    this.tuple = ["course 1",1, true]

    console.log(this.addNumber(1,2))
  }

  // accepts number as parameters and return number type
  addNumber(num1:number, num2:number):number{
      return num1 + num2;
  }
}
