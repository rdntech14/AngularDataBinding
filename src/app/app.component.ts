import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular Basic';
  username: string = "myfirstname"
  fullName: string = "learning"

  clickCount: Number = 0;
  OnClickDoSomething(): Number {
    this.clickCount = 2;
    return this.clickCount;
  }

  employees: Employee[] = [
    { firstName: "Alex", salary: 100 },
    { firstName: "Bob", salary: 200 },
    { firstName: "Charle", salary: 300 },
  ]

  pageName = 'Google';

  isSpecial = true;
  hasError = false;

  messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
}

export class Employee {
  firstName: string;
  salary: Number;
}
