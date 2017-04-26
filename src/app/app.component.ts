import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'app works!';
  // check_loading = true;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
    onScroll(event) {
      // console.log(event.currentTarget.pageYOffset);
    }

  ngOnInit() {

    // setTimeout(() => {
    //   this.check_loading = false;
    // }, 1500);
  }




}
