import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetalleArticuloComponent } from './view-detalle-articulo.component';

describe('ViewDetalleArticuloComponent', () => {
  let component: ViewDetalleArticuloComponent;
  let fixture: ComponentFixture<ViewDetalleArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewDetalleArticuloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDetalleArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
