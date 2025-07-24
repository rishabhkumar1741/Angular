import { Component } from '@angular/core';


@Component({
  selector: 'app-rishabh',
  imports: [],
  templateUrl: './rishabh.component.html',
  styleUrl: './rishabh.component.css'
})
export class RishabhComponent {
  colour: string = 'red';

  changeColour(colour: string)
  {
    this.colour = colour;
  }
  submitColour(colour:string,event: Event,form: HTMLFormElement)
  {
    this.colour = colour;
    console.log('Colour submitted:', event);  
    console.log('Form submitted:', form);
    event. preventDefault()// Prevent form submission

  }
 

}
