import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDetalleFavoritoActividadComponent } from './load-detalle-favorito-actividad.component';

describe('LoadDetalleFavoritoActividadComponent', () => {
  let component: LoadDetalleFavoritoActividadComponent;
  let fixture: ComponentFixture<LoadDetalleFavoritoActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadDetalleFavoritoActividadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadDetalleFavoritoActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
