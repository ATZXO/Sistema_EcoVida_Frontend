import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetalleActividadComponent } from './view-detalle-actividad.component';

describe('ViewDetalleActividadComponent', () => {
  let component: ViewDetalleActividadComponent;
  let fixture: ComponentFixture<ViewDetalleActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewDetalleActividadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDetalleActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
