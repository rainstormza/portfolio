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
      transition('* <=> *', animate('.3s'))
      // transition('shown => hidden', animate('.3s')),
      // transition('hidden => shown', animate('.3s'))      
    ]),
    trigger('test1', [
      state('in' , style({ opacity: 1 })),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('.3s')
      ]),
      transition('* => void', [
        style({
          opacity: 0
        }),
        animate('.3s')
      ])
    ])
  ]
})
export class TechnologyComponent implements OnInit, OnChanges {

  isVisible = true;
  visibility = 'shown';
  check = true;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    //  this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

  fadeClick() {
    this.isVisible = !this.isVisible;
    this.visibility = this.isVisible ? 'shown' : 'hidden';
    this.check = !this.check;
  }

}
