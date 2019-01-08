import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelasListadoComponent } from './pelas-listado.component';

describe('PelasListadoComponent', () => {
  let component: PelasListadoComponent;
  let fixture: ComponentFixture<PelasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
