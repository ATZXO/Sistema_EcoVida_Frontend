import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadFavoritosActividadesComponent } from './load-favoritos-actividades.component';

describe('LoadFavoritosActividadesComponent', () => {
  let component: LoadFavoritosActividadesComponent;
  let fixture: ComponentFixture<LoadFavoritosActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadFavoritosActividadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadFavoritosActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
