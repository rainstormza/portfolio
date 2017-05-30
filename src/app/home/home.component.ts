import { Component, OnInit } from '@angular/core';
declare var particlesJS:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    // particlesJS.load('particles-js', '/assets/js/particles.json', function() {
    //   console.log('callback - particles.js config loaded');
    // });
  }

}
