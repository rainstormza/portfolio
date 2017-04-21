import { Component, OnInit, OnChanges } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('shown' , style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class TechnologyComponent implements OnInit, OnChanges {

  isVisible = true;
  visibility = 'shown';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
     this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

  fadeClick() {
    this.isVisible = !this.isVisible;
    this.visibility = this.isVisible ? 'shown' : 'hidden';
    
  }

}
