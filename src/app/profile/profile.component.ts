import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  private route:Router= inject(Router)

   data:any ;

  constructor() {
    this.data = this.route.getCurrentNavigation()?.extras.state;
      console.log("data is " ,this.data);

  }





}
