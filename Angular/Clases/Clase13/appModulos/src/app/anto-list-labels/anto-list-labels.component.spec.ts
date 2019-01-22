import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntoListLabelsComponent } from './anto-list-labels.component';

describe('AntoListLabelsComponent', () => {
  let component: AntoListLabelsComponent;
  let fixture: ComponentFixture<AntoListLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntoListLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntoListLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
