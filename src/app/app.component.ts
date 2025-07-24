import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RishabhComponent } from './rishabh/rishabh.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RishabhComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Angular-tutorial';
  name:string = "Rishabh Kumar";
}
