import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelasModeloComponent } from './pelas-modelo.component';

describe('PelasModeloComponent', () => {
  let component: PelasModeloComponent;
  let fixture: ComponentFixture<PelasModeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelasModeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelasModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
