Angular Data Binding & Directives
=====

**Data Binding**

Communication in between Template and Component

a) Data Flow from Templete to Component

b) Data Flow from Component to Templete

1) String Interpolation

If component has variable ```myHero = "Will"```

```
{{myHero}}
```

If component has variable ```getScore: number: 10;``` String interpolation expects only string so 10 will be converted to string and then printed

```
{{ getScore }} 
```


2) Property Binding

*Note: Any html attribute / DOM property can be used for property binding*

```
<input type="text" [value]="userName">  

<input type="text" [disabled]="true">  

<input type="text" [hidden]="false">  

<img [src]="imgUrl"/>
```

3) Event Binding

*Note - Any HTML / DOM event like onclick etc can be used for event binding, make sure to remove **no** keyword before using it*
```
<button (click)="cookBacon()"></button>

<button name="clickbutton" value="clkButton" (click)="cookBacon($event)"></button>
```

*Note - event is a default varilable that holds the refernce to the object that is action is taken on so in .ts file it can be used like

```
cookBacon(myEventVar){
  console.log(myEventVar.value);
  console.log(myEventVar.target.value);
  console.log(myEventVar.target.name);
}
```


4) Two way Binding

![Alt text](/twowaydatabinding.png?raw=true "Optional Title")


*Note: For two way data binding, we have to enable the ngModel directive.
It depends upon FormsModule in angular/forms package,
so we have to add FormsModule in imports[] array in the AppModule.
add following app.module.ts and add "FormsModule" in import array*
```
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
```
```
<input type="text" [(ngModel)]="userName">  
```
*Note : ngModel derective has the value from userName and using its value property it can be accessed.*

**HTML DOM Events**

https://www.w3schools.com/jsref/dom_obj_event.asp

**Template Reference Variable**

Here is the example how to capture other element properties based on the click event on the another element. If we pass only $event variable it will provide access to the self object but by passing template varilable we provide access to another element too.
```
<input #userName name="username" value="angular">

<button (click)="onClickAddToCart(userName)>Add to cart</button>
```

To access in .ts file
```
onClickAddToCart(userName){
  console.log(userName.value);
  console.log(userName.name);
}

```

Directives
=====

The directive is markers on a DOM element that tell Angular to attach a specified behavior to that DOM element or even transform the DOM element and its children. Mostly directives in Angular starts with ng- where ng stands for Angular, and it extends the HTML.

![Alt text](/directives.png?raw=true "Optional Title")

```
*ngFor
*ngIf
*ngModel -- used for two way binding
*ngClass -- for class binding

```

**ngFor**

```
<ul *ngFor="let e of employees">
    <li>{{e.firstName}} : {{e.salary}}</li>
</ul>
```
ngFor has few more properties like index, first, last, odd, even.


Here `i` can be used for serial number starting from 1.

```
<tr *ngFor="let e of employees; index as i">
    <td>{{i+1}}</td>
    <td>{{e.firstName}}</td>
    <td>{{e.salary}}</td>
</tr>
```

here `i` wil lreturn ture or false status based on the number is odd or not.

```
<tr *ngFor="let e of employees; odd as i">
    <td>{{i}}</td>
    <td>{{e.firstName}}</td>
    <td>{{e.salary}}</td>
</tr>

```

**ngIf**

```
<label>2 + 5 = </label>
<input type="text" [(ngModel)]=result><br>

<div *ngIf="7==result; else ExecuteOnElse">  
    Answer is Correct.  
</div>
<ng-template #ExecuteOnElse>  
    Answer is incorrect.  
</ng-template>
```


**Class Binding**

let assume we have following code in .css file

```
.text-success{
    color:green;
}

.text-danger{
    color:red;
}

.text-special{
    font-style: italic
}
```

**apply css class as actual class name**
```
<h1 class="text-success"> {{pageName}}</h1>
```

**apply css class as variable name**

Here successClass is a variable name
```
successClass="text-success";

<h1 [class]="successClass"> {{pageName}}</h1>
```

**apply one class based on boolean status or conditionally apply single class**

```
hasError=true;

<h1 [class.text-danger]="hasError"> {{pageName}}</h1>
```
**ngClass - apply conditionally multiple classes**

NgClass Directive: The ngClass Directive is used to add or remove CSS classes to an element.

in component class
```
  isSpecial = true;
  hasError = false;

  messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
```

in html file
```
<h1 [ngClass]="messageClasses">{{pageName}}</h1>

```

ngClass Example - apply ngClass based on expression evaluation
```<h1 [ngClass]="{successClass: errorStatus==='false'}">{{pageName}}</h1>
```

## ngStyle Example
```
<p>
  [ngStyle] = "{backgroundColor: getColor()}"
  [ngClass]="{successClass: errorStatus==='false'}">{{pageName}}>
  This is message from Server
</p> 
 ```
 
## How to toggle text message based on button click

Note - If button is clicked message is shown. if button is clicked again message should not shown. If button is clicked message is shown. like wise. 

Add ```showMessage = false``` in component class

```
<button (click)="showMessage = !showMessage">ClickMe</button>
```
This changes the value of showMessage on every click. 

**How to Add BootStrap to Angular project**

Steps:

1) go to https://getbootstrap.com/docs/4.3/getting-started/introduction/
2) Copy CSS link
3) Paste in Index.html under <head> section

*Note : Video https://www.youtube.com/watch?v=GKU0LtH8bzU&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ&index=35*


![Alt text](/controlstate.png?raw=true "Optional Title")


## Debugging

1) Developer tools --> Sources --> webpack://--> . --> <add checkpoint>
2) Augury addin for chrome. 

## Data Binding - pass data from child component to parent component


When we want employee variable to be available outside the component

```
@Input employee = {name:string, salary:number};
```

When we want employee variable to be available outside the component with different name(alias)

```
@Input('emp') employee = {name:string, salary:number};
```

# Type Script Examples

Declaraing ```emp = {}``` shows emp is java script object type  and declaraing ```employee = [] ``` shows employee is array type.

```employee = {name:string, salary:number}``` --> shows employee is a java script object type which has name and salary property

```
emp = {};
employee = {name:string, salary:number};
employee = [];
```


