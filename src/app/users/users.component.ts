import { Component,input, output } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import {NameconvertPipe}  from '../pipes/nameconvert.pipe';

@Component({
  selector: 'app-users',
  imports: [UpperCasePipe,NameconvertPipe],
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
