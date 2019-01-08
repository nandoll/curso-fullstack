import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelasLoginComponent } from './pelas-login.component';

describe('PelasLoginComponent', () => {
  let component: PelasLoginComponent;
  let fixture: ComponentFixture<PelasLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelasLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelasLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
