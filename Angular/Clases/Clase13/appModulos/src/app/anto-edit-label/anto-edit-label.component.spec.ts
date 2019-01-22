import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntoEditLabelComponent } from './anto-edit-label.component';

describe('AntoEditLabelComponent', () => {
  let component: AntoEditLabelComponent;
  let fixture: ComponentFixture<AntoEditLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntoEditLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntoEditLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
