import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-mobile-test',
  templateUrl: './mobile-test.component.html',
  styleUrls: ['./mobile-test.component.css']
})
export class MobileTestComponent implements OnInit {

// navOpen: boolean;
  minHeight: string;
  private initWinHeight: number = 0;

  constructor() { }

  ngOnInit() {
    Observable.fromEvent(window, 'resize')
      .debounceTime(200)
      .subscribe((event) => {
        this.resizeFn(event);
      });

    this.initWinHeight = window.innerHeight;
    this.resizeFn(null);
  }

  private resizeFn(e) {
    let winHeight: number = e ? e.target.innerHeight : this.initWinHeight;
    this.minHeight = `${winHeight}px`;
    console.log('555');
  }


}

// https://chsakell.com/2016/06/27/angular-2-crud-modals-animations-pagination-datetimepicker/
// https://auth0.com/blog/migrating-an-angular-1-app-to-angular-2-part-1/
