import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntoHeaderComponent } from './anto-header.component';

describe('AntoHeaderComponent', () => {
  let component: AntoHeaderComponent;
  let fixture: ComponentFixture<AntoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
