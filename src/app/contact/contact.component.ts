import { Component , inject} from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private router: Router = inject(Router);
  // user:'Rishabh Kumar'
  username:any|undefined=undefined;

  constructor()
  {
    this.username = this.router.getCurrentNavigation()?.extras.state;

  }
}
