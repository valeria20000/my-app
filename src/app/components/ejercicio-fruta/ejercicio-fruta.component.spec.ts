import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioFrutaComponent } from './ejercicio-fruta.component';

describe('EjercicioFrutaComponent', () => {
  let component: EjercicioFrutaComponent;
  let fixture: ComponentFixture<EjercicioFrutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjercicioFrutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioFrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
