import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntoLoginComponent } from './anto-login.component';

describe('AntoLoginComponent', () => {
  let component: AntoLoginComponent;
  let fixture: ComponentFixture<AntoLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntoLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
