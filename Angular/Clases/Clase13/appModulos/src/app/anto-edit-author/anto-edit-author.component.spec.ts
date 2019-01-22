import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntoEditAuthorComponent } from './anto-edit-author.component';

describe('AntoEditAuthorComponent', () => {
  let component: AntoEditAuthorComponent;
  let fixture: ComponentFixture<AntoEditAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntoEditAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntoEditAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
