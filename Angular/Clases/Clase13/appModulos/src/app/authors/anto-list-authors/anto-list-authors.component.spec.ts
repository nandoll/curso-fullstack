import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntoListAuthorsComponent } from './anto-list-authors.component';

describe('AntoListAuthorsComponent', () => {
  let component: AntoListAuthorsComponent;
  let fixture: ComponentFixture<AntoListAuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntoListAuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntoListAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
