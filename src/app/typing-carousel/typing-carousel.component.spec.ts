import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingCarouselComponent } from './typing-carousel.component';

describe('TypingCarouselComponent', () => {
  let component: TypingCarouselComponent;
  let fixture: ComponentFixture<TypingCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypingCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypingCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
