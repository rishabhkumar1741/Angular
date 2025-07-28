# AngularTutorial

## Table of Contents
- [Introduction](#introduction)
- [What is interpolation in Angular](#what-is-interpolation-in-angular)
- [Angular CLI](#angular-cli)
- [Components](#components)
- [📌Click Event in Angular ((click))](#click-event-in-angular-click)
- [ Template Reference Variable in Angular (#variableName)](#template-reference-variable-in-angular)
- [📘 Angular : @if, @else, @switch (New Syntax in Angular 17+)](#angular-notes-if-else-switch-new-syntax-in-angular-17)
- [📘 Angular : @for Loop (New Syntax – Angular 17+)](#angular-notes-for-loop-new-syntax)
- [🧠 What is a Signal?](#what-is-a-signal)
- [What is effect() in Angular?](#what-is-effect-in-angular)
- [🔁 For Loop Contextual Variables in Angular](#for-loop-contextual-variables-in-angular)
- [✅ Two-Way Binding in Angular](#two-way-binding-in-angular)
- [ 🎨 Dynamic Style in Angular](#dynamic-style-in-angular)
- [📌 Directives in Angular](#directives-in-angular)
- [✅ Steps to Create a Custom Directive](#steps-to-create-a-custom-directive)
- [📍 Basic Routing in Angular](#basic-routing-in-angular)
- [🔗 routerLinkActive vs ⚙️ routerLinkActiveOptions in Angular](#routerlinkactive-vs-routerlinkactiveoptions-in-angular)
- [🚫 404 Page in Angular](#-404-page-in-angular)




---
### Introduction
Angular is a front-end web framework developed by Google.
It is used to build single-page applications (SPAs) using HTML, CSS, and TypeScript.
Angular is component-based, supports two-way data binding, dependency injection, and modular development.

### Q: What is the difference between a property and a variable in Angular?
```
 In Angular, a variable is declared inside a method and is used only within that scope. A property, on the other hand, is declared in the class and is accessible throughout the class and also in the template via data binding. We typically use properties to pass data between the component and the view.

 ngOnInit() {
  let count = 5; // local variable
}

 export class AppComponent {
  title: string = 'My Angular App'; // property
}
```

### Q:   What’s the difference between dependencies and devDependencies in Angular?
````
dependencies are needed to run the app in production, like @angular/core or rxjs. devDependencies are only needed during development or testing, like @angular/cli or typescript.
````
## What is interpolation in Angular
🔹 What is Interpolation?
Interpolation in Angular is used to display data from the component class to the template (HTML).

It’s done using double curly braces {{ }}.

```
# In app.component.ts

export class AppComponent {
  name: string = 'Rishabh';
}

# In app.component.html
<h1>Hello {{ name }}</h1>

```
### Angular CLI
| cmd |   Description  | Shorthand    |
| :---:   | :---: | :---: |
| npm install -g @angular/cli | This command installs Angular CLI globally   |    |
| ng generate component my-comp |  Creates a new component  | ng g c my-comp   |
| ng generate service my-service | 	Creates a new service   | ng g s my-service   |
| ng generate pipe my-pipe | Creates a new pipe   | 	ng g p my-pipe   |
| ng build | Builds the app for production in /dist   |    |
| ng serve | Runs the app locally at localhost:4200   |    |
| ng version | Shows Angular CLI and project version info   |    |
|  |    |    |

### Components
A Component is the basic building block of an Angular application.
It controls a part of the UI (called a view) and handles the logic for that view.

Each component is a combination of:

- HTML (template)

- CSS (style)

- TypeScript (logic)
 
 ***app.component.ts***
```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
}
```
 ***html.component.html***
 ```
 <h1>{{ title }}</h1>
 ```
---
### Click Event in Angular ((click))
Events are user actions like:
- Click

- Mouseover

- Keypress

- Input

- Submit

Angular allows us to bind to these events using (), called event binding. `` <button (click)="handleClick()">Click Me</button>
``

🔹 $event Object:

Captures the event details.

Useful to get values like key pressed, input value, etc.

- <input (input)="logInput($event)">
 ``` 
logInput(event: any) {
  console.log(event.target.value);
}
 ```
🔹 Passing Arguments:

You can pass both custom and event data:

- ```<button (click)="greetUser('Rishabh', $event)">Greet</button>```

```
greetUser(name: string, event: any) {
  console.log('Hello ' + name);
}
```


✅ What is (click)?

It is an event binding in Angular.
Used to handle the click event of HTML elements like buttons, divs, etc.

-  ``` Syntax: '<button (click)="myFunction()">Click Me </button> ```

***How it works:***
When the button is clicked, the method ***myFunction()*** in the component gets called.

---

### Template Reference Variable in Angular

✅ What is a Reference Variable?
- A reference variable is declared using # in the template.

- It refers to a DOM element or a component from the template (HTML).

- It can be used to access values or properties directly in HTML.
```
<input #myInput type="text">
<button (click)="log(myInput.value)">Log Input</button>
```
🔹 Use Cases:

| Use Case |   Example  |
| :---:   | :---: |
 Get input value | #inputBox, inputBox.value   
 Access DOM propertiese | #btn, btn.disabled 
Access component child | <app-child #childRef>, then use childRef.method() 

---

### Angular Notes: @if, @else, @switch (New Syntax in Angular 17+)
Angular 17+ introduced a new control flow syntax to replace old *ngIf, *ngSwitch.

🔹 @if / @else if / @else Syntax:
```
@if (age < 18) {
  <p>You are a minor.</p>
} @else if (age < 60) {
  <p>You are an adult.</p>
} @else {
  <p>You are a senior.</p>
}
```
🔹 @switch / @case / @default Syntax:
```
@switch (user.role) {
  @case ('admin') {
    <p>Welcome, Admin!</p>
  }
  @case ('user') {
    <p>Welcome, User!</p>
  }
  @default {
    <p>Role not recognized.</p>
  }
}
```
----

### Angular Notes: @for Loop (New Syntax)

✅ What is @for?

Angular v17+ introduced @for, which replaces *ngFor.
It’s more readable and powerful.

```
@for (item of items; track item.id) {
  <p>{{ item.name }}</p>
}
```
---

### What is a Signal

A signal is a special variable that holds a value and automatically notifies Angular when that value changes, so the UI can update reactively.

✅ Syntax:
```
import { signal } from '@angular/core';

let counter = signal(0);  // signal with initial value 0

// Read the signal
console.log(counter()); // prints: 0

// Update the signal
counter.set(5);

// Read again
console.log(counter()); // prints: 5
```
🔄 Why use signals?

- ✅ Automatic UI update on value change

- ✅ Cleaner than RxJS for simple cases

- ✅ Lightweight and easy to use

### There are two main types:

 Writable (State) Signals
- Created using the signal() function.

- Hold a value that can be read, updated, or set manually.

- Typically used for local state that changes over time.

- Example:
 ```
import { signal } from '@angular/core';

const count = signal(0); // Writable signal with initial value 0
count.set(1);            // Update the value
console.log(count());    // Read the value
 ```
  Computed (Derived) Signals
- Created using the computed() function.

- Read-only: you cannot set their value directly.

- Automatically derive their value from other signals, recalculating when dependencies change.
```
import { signal, computed } from '@angular/core';

const x = signal(2);
const y = signal(3);
const sum = computed(() => x() + y());
console.log(sum()); // Outputs 5
```
Computed signals are used for calculated values and cannot be updated directly—they reactively follow the state signals they depend on

---
### What is effect() in Angular

***effect()*** is a reactive function in Angular used with signals to automatically respond to signal changes.

✅ Simple Definition:

effect() runs a block of code automatically whenever the signals inside it change.

🧠 Why is it used?

To track signal changes and perform side effects like:
- Logging values
- Calling a function
- Updating another signal
- Triggering a service

```
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `<button (click)="increment()">Count</button>`
})
export class ExampleComponent {
  count = signal(0);

  constructor() {
    effect(() => {
      console.log('Count is:', this.count()); // runs when count changes
    });
  }

  increment() {
    this.count.set(this.count() + 1);
  }
}
```
### For Loop Contextual Variables in Angular

 🧠 Contextual Variables in @for

These are special variables available inside the @for loop block:
| Variable |   Meaning  |
| :---:   | :---: |
|$index|Current index (starts at 0)|
|$count|	Total items processed|
|$first|	true for the first item|
|$last|	true for the last item|
|$even|	true if index is even|
|$odd|	true if index is odd|

```
@for (item of items; let $index = $index; let $first = $first; let $last = $last; let $even = $even; let $odd = $odd) {
  <div>
    {{ $index }} - {{ item.name }}
    
    @if ($first) {
      <span>[First]</span>
    }

    @if ($last) {
      <span>[Last]</span>
    }

    @if ($even) {
      <span>[Even]</span>
    }

    @if ($odd) {
      <span>[Odd]</span>
    }
  </div>
} @empty {
  <div>No data available</div>
}
```
---
### Two-Way Binding in Angular
📌 What is Two-Way Binding?

Two-way binding lets data flow:

- from component → to UI

- from UI → back to component

It keeps the component property and HTML input in sync.

🔄 Syntax
``` 
<input [(ngModel)]="username">
```
- [( )] → Banana in a box (two-way binding)

- ngModel → Directive that handles syncing

```
📦 Example
# ts file
export class AppComponent {
  username = 'Rishabh';
}

# html file 
<input [(ngModel)]="username">
<p>Hello, {{ username }}</p>
```
- Typing in the input box updates username
- ``` username changes reflect in the <p> tag-```

⚠️ ngModel requires FormsModule

Make sure to import FormsModule:

``` 
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule]
})
export class AppModule {}

```
-----
### Dynamic Style in Angular

✅ What is Dynamic Styling?
- Dynamically changing CSS properties of HTML elements using component logic (like variables, conditions, events).

🎯 Apply Basic Dynamic Styling
- ``` <p [style.color]="'blue'">This is blue text</p> ```

⚡ Dynamic Style with Condition
```
#HTML File
<p [style.color]="isError ? 'red' : 'green'">
  Conditional color
</p>

#ts file
isError = true;
```
💬 Interview Question (Example)

Q: What is the difference between ngStyle and [style.property]?

A:

- [style.property] → For a single style.

- ngStyle → For multiple styles.
```
<p [ngStyle]="{color: 'red', fontSize: '20px'}">Multiple styles</p>
```
---
### Directives in Angular
✅ What is a Directive?
- Directives are instructions in the DOM.
- They change the appearance or behavior of elements/components.

📚 Types of Directives
1. Component Directive

    - A directive with a template.
    - Basically, every Angular component is a directive.

2. Structural Directive

    - Changes the DOM layout by adding/removing elements.

    - Examples:

      - *ngIf, *ngFor, *ngSwitch

3. Attribute Directive

- Changes the appearance or behavior of an element.

- Example:
    - ngClass, ngStyle, custom highlight directive

💬 Interview Question

Q: What’s the difference between structural and attribute directives?

A:

- Structural changes layout/structure (*ngIf, *ngFor)

- Attribute changes style/behavior ([ngStyle], [ngClass])

---
### Steps to Create a Custom Directive
1. Generate Directive

    -   ``` ng generate directive highlight ```
2. Write Logic in Directive

 ``` 
    // highlight.directive.ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'  // this is the attribute name to use in HTML
})
export class HighlightDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }

}
```
📌 Usage in HTML

- ``` <p appHighlight>This text will be highlighted on hover!</p>```

🔍 What’s Happening Here?

- @Directive — Defines a custom directive.
- ElementRef — Gives access to the DOM element.
- @HostListener — Listens to DOM events (mouseenter, mouseleave) and performs ations.
---

## Basic Routing in Angular

✅ 1. What is Routing?

Routing in Angular means navigating from one page/component to another without reloading the full web page.

It's used in Single Page Applications (SPA) to switch views without refreshing the browser.

Example:
When you go from /home to /about, only the component changes—not the whole page.

✅ 2. Make Some Components for Pages

Before using routes, you need to create different components for your pages.
Each route will point to one component.

Example commands:
```
ng generate component home
ng generate component about
ng g c contact
```
These components will be shown based on the route path.

✅ Step 3: Create the routing file (e.g., app.routes.ts)
```
// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];
```
✅ Step 4: Register router in main.ts
```
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
```
✅ Step 5: ``` Add <router-outlet /> in AppComponent ```

```
<!-- app.component.html -->
<nav>
  <a routerLink="/home">Home</a>
  <a routerLink="/about">About</a>
</nav>

<router-outlet></router-outlet>
```
---

## routerLinkActive vs routerLinkActiveOptions in Angular

✅ What is routerLinkActive?
- It adds a CSS class to the link when the route is active.
- Helps to highlight the current page (like a menu tab).

🔹 Basic Usage
``` <a routerLink="/home" routerLinkActive="active-link">Home</a> ``` 

🟣 When the /home route is active, the class active-link will be applied to the link.

💡 Style Example
```
.active-link {
  font-weight: bold;
  color: #ff0066;
  border-bottom: 2px solid #ff0066;
}
```

###  ⚙️ routerLinkActiveOptions
✅ What is routerLinkActiveOptions?

- It tells Angular how strictly to check the match.
- Default: { exact: false } – partial match also works.
- Use { exact: true } to apply the class only if the route exactly mtches.

🔹 Example with exact: true
```
<a
  routerLink="/home"
  routerLinkActive="active-link"
  [routerLinkActiveOptions]="{ exact: true }"
>
  Home
</a>
```
🟡 In this case:

- The class is only applied when the route is exactly /home.
- If you're at /home/details, it won't apply.

🧠 Interview Tip

Q: Why use routerLinkActiveOptions with exact: true?

A: To avoid applying the active class when nested routes are active (e.g., /home/details). It keeps the UI clean and prevents highlighting parent links unnecessarily.

---

### 🚫 404 Page in Angular

wfjihel