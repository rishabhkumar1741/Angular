import { Component, inject, signal,effect } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  activatedRouter: ActivatedRoute = inject(ActivatedRoute);
  id = signal<number|undefined|null>(undefined);

  constructor()
  {
    effect(()=>{
      this.activatedRouter.paramMap.subscribe((params)=>{
        let data = parseInt(params.get('id') ?? '0');
        this.id.set(data)
      })
    })
  }


}
