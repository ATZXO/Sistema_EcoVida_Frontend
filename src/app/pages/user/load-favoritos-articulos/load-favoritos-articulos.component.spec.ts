import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadFavoritosArticulosComponent } from './load-favoritos-articulos.component';

describe('LoadFavoritosArticulosComponent', () => {
  let component: LoadFavoritosArticulosComponent;
  let fixture: ComponentFixture<LoadFavoritosArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadFavoritosArticulosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadFavoritosArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
