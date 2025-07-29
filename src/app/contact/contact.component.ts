import { Component , HostListener, inject} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private router: Router = inject(Router);
  private route:ActivatedRoute = inject(ActivatedRoute);
  // user:'Rishabh Kumar'
  username:any|undefined=undefined;
  // phonenumber:9910561642
  phonenumber : undefined|number|string;

  constructor()
  {
    this.username = this.router.getCurrentNavigation()?.extras.state;
      this.route.queryParams.subscribe((params)=>{
        this.phonenumber = params['phonenumber'];
    })

  }
}
