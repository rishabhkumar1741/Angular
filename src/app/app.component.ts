import { Component, effect, signal,inject } from '@angular/core';
import { RouterOutlet,RouterLink,Router} from '@angular/router';
import { FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule,UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = [
    { name: 'John Doe', age: 30,id: 1 },
    { name: 'Jane Smith', age: 25, id: 2 },
    { name: 'Alice Johnson', age: 28, id: 3 },
    { name: 'Bob Brown', age: 35, id: 4 },
    { name: 'Charlie White', age: 22, id: 5 }
  ];

  remove(id :number){
    this.users = this.users.filter(user => user.id !== id);
  }
}
