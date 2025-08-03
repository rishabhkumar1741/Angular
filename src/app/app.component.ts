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
  title = "Rishabh's Angular App";
}
