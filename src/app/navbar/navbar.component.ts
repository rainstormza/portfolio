import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { PageScrollInstance, PageScrollService, EasingLogic, PageScrollConfig } from 'ng2-page-scroll';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  toggleStatus = false;

  constructor(@Inject(DOCUMENT) private document: any,
                     private pageScrollService: PageScrollService) {
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

  scrollTop() {
    // window.scrollTo(0, 0);
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#home');
    this.pageScrollService.start(pageScrollInstance);
  }

  scrollOther(name: string) {
    console.log(name);
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
          document: this.document,
          scrollTarget: name,
          pageScrollOffset: 64,
          pageScrollInterruptible: false});
    this.pageScrollService.start(pageScrollInstance);


  }


}
