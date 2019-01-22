import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntoListBooksComponent } from './anto-list-books.component';

describe('AntoListBooksComponent', () => {
  let component: AntoListBooksComponent;
  let fixture: ComponentFixture<AntoListBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntoListBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntoListBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
