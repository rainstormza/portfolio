import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing-carousel',
  templateUrl: './typing-carousel.component.html',
  styleUrls: ['./typing-carousel.component.css']
})
export class TypingCarouselComponent implements OnInit {

  carousel;
  // https://www.npmjs.com/package/ng2-typing-carousel

  constructor() {
    // this.carousel = ['full-stack developer.','ui/ux designer.', 'blogger.'];
  	this.carousel = ['web developer.', 'front-end developer.'];
  }

  ngOnInit() {
  }

}
