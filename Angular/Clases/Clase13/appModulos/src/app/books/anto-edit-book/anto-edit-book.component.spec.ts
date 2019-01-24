import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntoEditBookComponent } from './anto-edit-book.component';

describe('AntoEditBookComponent', () => {
  let component: AntoEditBookComponent;
  let fixture: ComponentFixture<AntoEditBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntoEditBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntoEditBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
