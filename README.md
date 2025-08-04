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
- [🔄 Pass Data from One Page to Other in Angular](#-pass-data-from-one-page-to-other-in-angular)
- [📦 What are Observables and subscribe()](#-what-are-observables-and-subscribe-in-angular)
- [🚦 Dynamic Routing](#-dynamic-routing-in-angular)
- [📝 Angular Forms](#-angular-forms)
- [✅ Form Grouping in Reactive Forms](#-form-grouping-in-reactive-forms)
- [📌What is Template Driven Form?](#what-is-template-driven-form)
- [📘 Pass Data Parent to Child Component](#-pass-data-parent-to-child-component)
- [🔁 Pass Data from Child to Parent using output()](#-pass-data-from-child-to-parent-using-output)
- ✅ [What are Pipes in Angular?](#-what-are-pipes-in-angular)
- 🧬 [Angular Lifecycle Methods](#-angular-lifecycle-methods)
- ⚙️ [Services in Angular](#️-services-in-angular)
- ⚡ [Angular 17+ API Request Guide](#-angular-17-api-request-guide)















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

- RouterOutlet, => Displays the component based on the current route.
- RouterLink,   => Used in HTML to navigate to a route.
- Router,        => A service to navigate between routes in TypeScript code.
- ActivatedRoute =>  Gives access to route data like params and query params.


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

✅ What is a 404 Page?

- A 404 page (or Page Not Found) is shown when a user navigates to a non-existent route.

- It improves user experience by guiding users when they enter the wrong URL.

🧱 Step 1: Create a 404 Component
  - ng generate component page-not-found

🗺️ Step 2: Add Routing for 404
```
const routes: Routes = [
  // your other routes here

  // Wildcard route (MUST BE LAST)
  { path: '**', component: PageNotFoundComponent }
];
```
🌟 Step 3: Add Content to 404 Component
```
<h1>404 - Page Not Found</h1>
<p>Sorry, the page you're looking for doesn't exist.</p>
<a routerLink="/">Go back to Home</a>
```
🔒 Why is the wildcard route added last?

Because Angular matches routes in order, and if you put ** at the top, it will catch all routes (even the correct ones). So keep it at the end.

🎯 Interview Question

Q: What is the use of the wildcard route (**) in Angular?

A: It is used to catch all undefined routes and typically redirects users to a 404 Page Not Found component.

---
### 🔄 Pass Data from One Page to Other in Angular

1. 📌 Pass Data using routerLink

Use [routerLink] and state to send data to another component/page:

  - <a [routerLink]="['/details']" [state]="{ name: 'Rishabh', age: 25 }">Go to Details</a> 

Then in the receiving component:
```
import { Router } from '@angular/router';

constructor(private router: Router) {
  const navigation = this.router.getCurrentNavigation();
  const stateData = navigation?.extras.state;
  console.log(stateData); // { name: 'Rishabh', age: 25 }
}
```
2. 📌 Pass Data using Button Click

In component:
```
navigateToDetails() {
  this.router.navigate(['/details'], { state: { message: 'Hello from Home!' } });
}
```
In template:
```
<button (click)="navigateToDetails()">Go with Data</button>
```
3. 📌 Pass Data using ActivatedRoute (Query Params)

Sender Component:
```
this.router.navigate(['/details'], {
  queryParams: { name: 'Rishabh', age: 25 }
});
```
Receiver Component:
```
import { ActivatedRoute } from '@angular/router';

constructor(private route: ActivatedRoute) {
  this.route.queryParams.subscribe(params => {
    console.log(params); // { name: 'Rishabh', age: '25' }
  });
}
```
💡 Interview Tip:

routerLink + state is best for internal data passing (non-URL).

queryParams are visible in the URL and good for shareable links.

---

## 📦 What are Observables and subscribe() in Angular

📦 What is an Observable?

An Observable is like a box that holds data, and it gives you the data when it's ready — either now or later.

You can think of it like YouTube live:

- The stream (video) = Observable

- You (watching) = subscriber

- You subscribe to the video to watch it live (get updates as it happens)

✅ What is subscribe()?

subscribe() means “start listening” to that data.

You use it to:

- Get data from an API

- React when a user types something

- Track route changes in the app
```
this.http.get('https://api.com/users')
  .subscribe(data => {
    console.log(data); // You got the data from the server!
  });
```

Explanation:

- .get() gives you an Observable

- .subscribe() lets you receive the data from it

---

## 🚦 Dynamic Routing in Angular

✅ What is Dynamic Routing?

Dynamic Routing allows us to pass dynamic parameters (like userId, productId, etc.) in the URL and load the data or content accordingly.

For example:
- /user/10 → Load data for user with ID 10
- /product/23 → Load product details of product ID 23

🧱 1. Make Component

Create a component that will receive dynamic data:

``` ng generate component user-details ```

🛣️ 2. Make Dynamic Route

Define a route with a dynamic parameter using :paramName in your app-routing.module.ts:
```
const routes: Routes = [
  { path: 'user/:id', component: UserDetailsComponent }
];
```
🔗 3. Make Dynamic Links

Use [routerLink] to generate dynamic links from your template:

- ``` <a [routerLink]="['/user', userId]">View User</a> ```

Or loop through users dynamically:
```
<div *ngFor="let user of users">
  <a [routerLink]="['/user', user.id]">{{ user.name }}</a>
</div>
```
📦 4. Read the Route Parameter in Component

Inside your component, use ActivatedRoute to get the id:
```
import { ActivatedRoute } from '@angular/router';

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  console.log('User ID:', id);
}
```
If you want to react to changes dynamically (e.g., route param changes without reload):

```
this.route.paramMap.subscribe(params => {
  const id = params.get('id');
  console.log('User ID:', id);
});
```
❓ Interview Tip

 Q: What is dynamic routing in Angular?

 A: It allows navigation to routes with variable segments (e.g., user/:id), useful for detail pages like product or user profiles.

 --

 ## 📝 Angular Forms

 Angular provides two main approaches for handling forms:

 1. Template-driven Forms (Simple, good for small apps)
    - Uses HTML and Angular directives (ngModel)
    - Logic stays in the template
    - Automatic two-way data binding
    - Validation is handled in the template

📌 Example:

```
<form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
  <input name="username" ngModel required />
</form>
```
2. Reactive Forms (More powerful, better for complex forms)
    - Uses FormGroup, FormControl in TypeScript
    - Logic is in the component class
    - Explicit and more scalable
    - Better for custom validation and dynamic form
 ```
form = new FormGroup({
  username: new FormControl('', Validators.required)
});
```
```
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input formControlName="username" />
</form>
```
## ✅ Form Grouping in Reactive Forms

🔹 1. Why to use FormGroup?
  - Groups multiple form controls into one unit.
  - Helps organize complex forms (likeregistration, address).
  - Makes validation and data access easier

  🔹 2. Make HTML Form with FormGroup

- In the HTML file, use [formGroup] to bind the group and formControlName for each input:

```
<form [formGroup]="userForm">
  <input formControlName="name" />
  <input formControlName="email" />
</form>
```
🔹 3. Make FormGroup in TypeScript

In the component:
```
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';

- ts file  imports: [RouterOutlet,RouterLink,ReactiveFormsModule],


userForm = new FormGroup({
  name: new FormControl(''),
  email: new FormControl('')
});
```
🔹 4. Get Value from Input Fields
``` 
console.log(this.userForm.value);  // { name: '...', email: '...' } 
```
🔹 5. Set Value in Input Field

```
this.userForm.patchValue({
  name: 'Rishabh'
});
```
🔹 6. Set Default Value
```
userForm = new FormGroup({
  name: new FormControl('Rishabh'),
  email: new FormControl('rishabh@example.com')
});
```
🔹 7. Interview Questions (Sample) 
- What is the difference between FormGroup and FormControl?
- How to set and get values from a FormGroup?
- When would you use patchValue() vs setValue()?
- How to validate nested FormGroup?

✅ Form Grouping in Reactive Forms (with Validations)

🔹 2. Create HTML Form with FormGroup
```
<form [formGroup]="userForm" (ngSubmit)="onSubmit()">
  <input formControlName="name" placeholder="Name" />
  <div *ngIf="userForm.get('name')?.invalid && userForm.get('name')?.touched">
    Name is required
  </div>

  <input formControlName="email" placeholder="Email" />
  <div *ngIf="userForm.get('email')?.invalid && userForm.get('email')?.touched">
    Enter a valid email
  </div>

  <button type="submit" [disabled]="userForm.invalid">Submit</button>
</form>
```
🔹 3. Create FormGroup with Validations in TypeScript
```
import { FormGroup, FormControl, Validators } from '@angular/forms';

userForm = new FormGroup({
  name: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email])
});
```
🔹 4. Get Value from Form
- console.log(this.userForm.value);

🔹 5. Set Value
```
this.userForm.patchValue({
  name: 'Rishabh'
});
```
🔹 6. Set Default Value
```
userForm = new FormGroup({
  name: new FormControl('Rishabh', Validators.required),
  email: new FormControl('rishabh@mail.com', Validators.email)
});
```
🔹 7. Common Validators in Angular

| Variable |   Meaning  |
| :---:   | :---: |
|Validators.required |Field cannot be empty|
|Validators.email|Must be a valid email|
|Validators.minLength(n)|Minimum n characters|
|Validators.maxLength(n)|	Maximum n characters|
|Validators.pattern('regex')|Custom pattern|

🔹 8. Check Form Validity in Code
```
if (this.userForm.valid) {
  // submit data
}
```

---
### 📌What is Template Driven Form?
- Forms that are written in the HTML template.
- Logic is handled using Angular directives like ngModel.
- Mostly used for simple forms.
- Needs to import FormsModule in app.module.ts.

📌 2. How to Make Form and Input Fields
```
<form #userForm="ngForm" (ngSubmit)="submitForm(userForm)">
  <input type="text" name="username" ngModel required />
  <input type="email" name="email" ngModel />
  <button type="submit">Submit</button>
</form>
```
📌 3. How to Get Input Field Values
```
submitForm(form: NgForm) {
  console.log(form.value); // Logs all form values as an object
}
```
📌 4. Interview Questions (Examples)
- Difference between Template Driven and Reactive Forms?
- How is validation handled in Template Driven Forms?
- What is ngModel?
- Can we use two-way binding in forms?

---
## 📘 Pass Data Parent to Child Component
✅ 1. Why We Pass Data from Parent to Child
- To keep components independent and reusable.
- Parent owns the main logic or data, child displays or acts on it.
- Helps implement features like:
  - Showing a selected item
  - Toggling views
  - Form inputs, dropdown values

✅ 2. Create and Use a Child Component (Standalone Way)

```
ng generate component child --standalone
```
child.component.ts
```
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `<p>Received: {{ data() }}</p>`
})
export class ChildComponent {
  data = input<string>();
}
```
parent.component.html

```
<app-child [data]="'Hello Nayra 👋'"></app-child>
```
✅ 3. Pass Data from Parent to Child (New Way)
- Use input() instead of @Input()

- input() creates a signal, which auto-updates when the input changes.

``` 
// In child.component.ts
name = input<string>();
```
```
<!-- In parent.component.html -->
<app-child [name]="'Rishabh Kumar'"></app-child>
```
```
<!-- In child.component.html -->
<p>Hi, {{ name() }}</p>
```

✅ 4. Pass Value with Dropdown Example

parent.component.ts
```
fruits = ['Apple', 'Mango', 'Banana'];
selectedFruit = 'Apple';
```
parent.component.html

```
<select [(ngModel)]="selectedFruit">
  <option *ngFor="let fruit of fruits" [value]="fruit">{{ fruit }}</option>
</select>

<app-child [data]="selectedFruit"></app-child>
```
child.component.ts

``` data = input<string>(); ```

child.component.html

``` <p>Selected Fruit: {{ data() }}</p>```

✅ 5. Pass Multiple Values to Child

parent.component.html

```
<app-child 
  [name]="'Nayra'"
  [age]="21"
  [location]="'Delhi'">
</app-child>
```
child.component.ts
```
name = input<string>();
age = input<number>();
location = input<string>();
```
child.component.html
```
<p>Name: {{ name() }}</p>
<p>Age: {{ age() }}</p>
<p>Location: {{ location() }}</p>
```

🎯 6. Interview Questions

Question : Difference between @Input() and input()?

Answer : input() is the new signal-based input method in Angular 17+

Question : What does input() return?

Answer : A writable signal

Question : Can we pass complex types (object/array)?

Answer : Yes

Question : Can child component modify input data?

Answer : ❌ Not directly – inputs are one-way

Question : How does signal input help?

Answer : Better reactivity, change detection, and type safety

---
### 🔁 Pass Data from Child to Parent using output()

✅ Step 1: Create Child Component
```
ng g component child --standalone
```
✅ Step 2: Define output() Signal in Child Component
```
// child.component.ts
import { Component, output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <button (click)="send()">Send to Parent</button>
  `
})
export class ChildComponent {
  message = 'Hey from Child!';

  // ✅ new way: output() signal
  messageSent = output<string>();

  send() {
    this.messageSent.emit(this.message);
  }
}
```
✅ Step 3: Use the Output in Parent Component
```
// parent.component.ts
import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <app-child (messageSent)="receiveMessage($event)"></app-child>
    <p>Child says: {{ received }}</p>
  `
})
export class ParentComponent {
  received = '';

  receiveMessage(data: string) {
    this.received = data;
  }
}
```
✅ Summary of Key Concepts

| Concept |   Explanation|
| :---:   | :---: |
|output()|New signal-based way to define outputs|
|.emit()|Used to send data|
|(messageSent)="..."|Parent listens to the child signal|
|Signal-based Output|Cleaner, faster, and future-focused|


---
### ✅ What are Pipes in Angular?

Pipes in Angular are used to transform data in templates.
They take input data and return transformed output without changing the original data.

📦 Built-in Pipes Examples:

| Pipe |   Usage Example| Description|
| :---:   | :---: | :---: |
|date | |
|lowercase||
|currency||
|slice||

🔧 Syntax:

```
{{ value | pipeName:arg1:arg2 }}
```
You can also chain pipes:
```
{{ name | lowercase | slice:0:5 }}
```
✨ Example:

ts
```
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [UpperCasePipe],                     <== add
  templateUrl: './users.component.html',       
  styleUrl: './users.component.css'
})
```

```
HTML
<!-- Assume name = 'Rishabh' -->
<p>{{ name | uppercase }}</p>  <!-- Output: RISHABH -->
```

🛠️ Custom Pipe in Angular
1. Create Pipe

You can use Angular CLI:
``` ng generate pipe myCustom ```

This creates:
- my-custom.pipe.ts
- my-custom.pipe.spec.ts

### 2. Code Example: Custom Pipe

👉 Task: Create a pipe to reverse a string.

🔹 reverse.pipe.ts
```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
```
### 3. Use Pipe in Template

In your component HTML:
```
<p>{{ 'Angular' | reverse }}</p>
<!-- Output: ralugnA -->
```

---
### 🧬 Angular Lifecycle Methods

📌 What are they?

Lifecycle methods are special hooks (functions) Angular calls automatically at different stages of a component's life – from creation to destruction.

🔁 Full Lifecycle Flow:
```
Constructor ➜ ngOnChanges ➜ ngOnInit ➜ ngDoCheck ➜ ngAfterContentInit ➜ 
ngAfterContentChecked ➜ ngAfterViewInit ➜ ngAfterViewChecked ➜ ngOnDestroy
```
📚 Most Common Lifecycle Hooks
1. ✅ constructor()

    - Called first, when component is created.
    - Good for dependency injection only.
    ```
    constructor(private service: DataService) {}
    ```
2. ✅ ngOnInit()
- Called after constructor and after input values are set.
- Best place for API calls, initialization.
  ```
  ngOnInit(): void {
    this.loadUsers();
  }
  ```
3. ✅ ngOnChanges(changes: SimpleChanges)
    - Called whenever an @Input() property changes.
    ``` 
    ngOnChanges(changes: SimpleChanges): void {
      console.log('Input changed:', changes);
    }
    ```
4. ✅ ngOnDestroy()
    - Called just before the component is destroyed.
    - Use for cleanup, like unsubscribing from Observables.
    ```
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
      ```
🔁 Other Advanced Hooks (less used but useful)
| Hook |  Purpose| 
| :---:   | :---: | 
|ngDoCheck()	|Custom change detection|
|ngAfterContentInit()|	After content (ng-content) is projected|
|ngAfterContentChecked()	|After every check of projected content|
|ngAfterViewInit()	| After component's view (and child views) initialized|
|ngAfterViewChecked() |	After every check of the view|

---
### ⚙️ Services in Angular

📌 What is a Service?

A Service in Angular is a class used to share logic, data, or functions between components.
It helps in code reusability and keeping components clean.

🔧 Why use Services?

- ✅ To fetch data (like from APIs)
- ✅ To share data between components
- ✅ To handle business logic
- ✅ To manage state or cache
- ✅ To keep components focused only on UI

✅ How to Create a Service

#### 1. Generate using CLI

bash
```
ng generate service user
```
This creates:
- 📄 user.service.ts
- 📄 user.service.spec.ts (for testing)

#### 2. Basic Example: user.service.ts
````
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Automatically available app-wide
})
export class UserService {
  getUsers() {
    return ['Rishabh', 'Nayra', 'John'];
  }
}
````
#### 3. Using Service in Component
a) Inject in constructor
````
import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  template: `<p *ngFor="let user of users">{{ user }}</p>`
})
export class UserComponent {
  users: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
````
🧠 @Injectable({ providedIn: 'root' }) – What is it?

This tells Angular to create a single instance of the service and provide it globally (singleton).

#### 🧪 Extra: Service with HTTP (API)

````
@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
````
Then subscribe in the component:
````
this.apiService.getPosts().subscribe(data => {
  console.log(data);
});
````

### ⚡ [Angular 17+ API Request Guide](#-angular-17-api-request-guide)





