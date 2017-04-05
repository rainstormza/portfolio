import { Component, OnInit } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  toggleStatus = false;

  constructor() {
        PageScrollConfig.defaultScrollOffset = 0;
        PageScrollConfig.defaultEasingLogic = {
            ease: (t: number, b: number, c: number, d: number): number => {
                // easeInOutExpo easing
                if (t === 0) return b;
                if (t === d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
        PageScrollConfig.defaultDuration = 700;
    }

  ngOnInit() {
  }

  toggle() {
    this.toggleStatus = !this.toggleStatus;
  }

}
