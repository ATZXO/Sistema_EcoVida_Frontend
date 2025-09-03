import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDetalleFavoritoTiendaComponent } from './load-detalle-favorito-tienda.component';

describe('LoadDetalleFavoritoTiendaComponent', () => {
  let component: LoadDetalleFavoritoTiendaComponent;
  let fixture: ComponentFixture<LoadDetalleFavoritoTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadDetalleFavoritoTiendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadDetalleFavoritoTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
