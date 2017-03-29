import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermanLoadingComponent } from './superman-loading.component';

describe('SupermanLoadingComponent', () => {
  let component: SupermanLoadingComponent;
  let fixture: ComponentFixture<SupermanLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermanLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermanLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
