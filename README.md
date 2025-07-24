# AngularTutorial


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

---
## Interview Question

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
### Q: What is interpolation in Angular?
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
### 📌 Click Event in Angular ((click))
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

### 🔹 Template Reference Variable in Angular (#variableName)

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

### 📘 Angular Notes: @if, @else, @switch (New Syntax in Angular 17+)
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

### 📘 Angular Notes: @for Loop (New Syntax – Angular 17+)

✅ What is @for?

Angular v17+ introduced @for, which replaces *ngFor.
It’s more readable and powerful.

```
@for (item of items; track item.id) {
  <p>{{ item.name }}</p>
}
```
---

