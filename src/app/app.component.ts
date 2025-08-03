import { Component, effect, signal,inject } from '@angular/core';
import { RouterOutlet,RouterLink,Router} from '@angular/router';
import { FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import { RishabhComponent } from './rishabh/rishabh.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,ReactiveFormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  router:Router = inject(Router);
  title:string = 'Angular-tutorial';

  profilenumber = signal<Number>(0);
  randomNumber = signal<number>(Math.random());

  profileForm = new FormGroup({
    name : new FormControl<string|undefined>(undefined,[Validators.required,Validators.minLength(5)]),
    marks : new FormControl<string|undefined>(undefined)
  })

  get name()
  {
    return this.profileForm.get('name');
  }



  constructor()
  {
    effect(() => {
      console.log('Profile Number is:', this.profilenumber());
    });


  }
  moveToContactPage()
  {
    this.router.navigate(['/contact'],{queryParams:{phonenumber:9910561642}});
  }
  aboutclick()
  {
    this.router.navigate(['/about',this.randomNumber()])
  }
  onSubmit(){
    console.log(this.profileForm.value);
    console.log(this.profileForm.get('name')?.value)
  }
   

}
