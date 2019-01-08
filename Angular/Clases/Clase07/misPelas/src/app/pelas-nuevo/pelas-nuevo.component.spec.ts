import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelasNuevoComponent } from './pelas-nuevo.component';

describe('PelasNuevoComponent', () => {
  let component: PelasNuevoComponent;
  let fixture: ComponentFixture<PelasNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelasNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelasNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
