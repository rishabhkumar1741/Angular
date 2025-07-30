import { Component, effect, signal,inject } from '@angular/core';
import { RouterOutlet,RouterLink,Router} from '@angular/router';
import { RishabhComponent } from './rishabh/rishabh.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  router:Router = inject(Router);
  title:string = 'Angular-tutorial';
  name:string = "Rishabh Kumar";
  profilenumber = signal<Number>(0);

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
   

}
