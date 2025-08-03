import { Component,input, output } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users = input.required<{ name: string, age: number, id: number }[]>();
  deleteuserid = output<number>();

  deleteuser(userid:number){
    this.deleteuserid.emit(userid);
  }

}
