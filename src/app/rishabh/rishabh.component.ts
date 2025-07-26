import { Component,signal,effect } from '@angular/core';


@Component({
  selector: 'app-rishabh',
  imports: [],
  templateUrl: './rishabh.component.html',
  styleUrl: './rishabh.component.css'
})
export class RishabhComponent {
  colour = signal<string>('red');
  names = signal<string[]>(['Eve','Rishabh', 'Kumar', 'Singh', 'RKS', 'Nayra Prasad']);
  constructor()
  {
    effect(()=>{
      console.log("rishabh");
      
      
    })
  }



  
  changeColour(colour: string)
  {
    this.colour.set(colour);
  }
  submitColour(colour:string,event: Event,form: HTMLFormElement)
  {
    this.colour.set(colour)

    event. preventDefault()// Prevent form submission

  }
 

}
