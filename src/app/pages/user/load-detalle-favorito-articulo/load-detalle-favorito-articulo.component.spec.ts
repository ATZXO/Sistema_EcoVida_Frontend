import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDetalleFavoritoArticuloComponent } from './load-detalle-favorito-articulo.component';

describe('LoadDetalleFavoritoArticuloComponent', () => {
  let component: LoadDetalleFavoritoArticuloComponent;
  let fixture: ComponentFixture<LoadDetalleFavoritoArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadDetalleFavoritoArticuloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadDetalleFavoritoArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
