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
      // transition('* <=> *', animate('.3s'))
      transition('shown => hidden', animate('.3s')),
      transition('hidden => shown', animate('.3s'))
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

  skills = [
    [
      {
        name: 'Angular',
        img: '/assets/img/technology/angular.png',
        percent: '90'
      },
      {
        name: 'Typescript',
        img: '/assets/img/technology/typescript.png',
        percent: '80'
      },
      {
        name: 'Javascript',
        img: '/assets/img/technology/js.png',
        percent: '85'
      }
    ],
    [
      {
        name: 'HTML',
        img: '/assets/img/technology/html.png',
        percent: '90'
      },
      {
        name: 'CSS',
        img: '/assets/img/technology/css.png',
        percent: '70'
      },
      {
        name: 'NodeJS',
        img: '/assets/img/technology/nodejs.png',
        percent: '70'
      }
    ],
    // [
    //   {
    //     id: 3.1
    //   },
    //   {
    //     id: 3.2
    //   },
    //   {
    //     id: 3.3
    //   }
    // ]
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.skills);
  }

  ngOnChanges() {
    //  this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

  fadeClick() {
    this.isVisible = !this.isVisible;
    this.visibility = this.isVisible ? 'shown' : 'hidden';
    this.check = !this.check;
  }

  onMouse() {
    this.isVisible = !this.isVisible;
    this.visibility = this.isVisible ? 'shown' : 'hidden';
    console.log('onMouse');
    // this.visibility = 'hidden';
  }


}
