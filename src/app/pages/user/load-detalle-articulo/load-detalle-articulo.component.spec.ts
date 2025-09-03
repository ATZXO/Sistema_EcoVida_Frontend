import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDetalleArticuloComponent } from './load-detalle-articulo.component';

describe('LoadDetalleArticuloComponent', () => {
  let component: LoadDetalleArticuloComponent;
  let fixture: ComponentFixture<LoadDetalleArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadDetalleArticuloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadDetalleArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
