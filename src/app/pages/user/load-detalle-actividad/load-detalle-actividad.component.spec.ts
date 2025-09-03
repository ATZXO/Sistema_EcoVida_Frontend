import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDetalleActividadComponent } from './load-detalle-actividad.component';

describe('LoadDetalleActividadComponent', () => {
  let component: LoadDetalleActividadComponent;
  let fixture: ComponentFixture<LoadDetalleActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadDetalleActividadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadDetalleActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
