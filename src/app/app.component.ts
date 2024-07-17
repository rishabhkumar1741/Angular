import {Component} from '@angular/core';
// import {RouterOutlet} from '@angular/router';
// import {HeaderComponent} from "./header/header.component";
// import {UserComponent} from "./user/user.component";
// import {TasksComponent} from "./tasks/tasks.component";
import {DUMMY_USERS} from "./dummy-users";


@Component({
  selector: 'app-root',
  // standalone: false,
  // imports: [RouterOutlet, HeaderComponent, UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  users = DUMMY_USERS;

  selectedUser:string=''

  get selectedUserName()
  {
    return this.users.find(user =>user.id==this.selectedUser)?.name;
  }



  onSelectUser(id: string) {

    this.selectedUser= id;
  }

}
