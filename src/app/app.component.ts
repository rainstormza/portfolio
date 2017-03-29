import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'app works!';
  check_loading = true;

  ngOnInit() {
    // setTimeout(() => {
    //   this.check_loading = false;
    // }, 1500);
  }


}
