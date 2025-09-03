import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadFavoritosTiendasComponent } from './load-favoritos-tiendas.component';

describe('LoadFavoritosTiendasComponent', () => {
  let component: LoadFavoritosTiendasComponent;
  let fixture: ComponentFixture<LoadFavoritosTiendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadFavoritosTiendasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadFavoritosTiendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
