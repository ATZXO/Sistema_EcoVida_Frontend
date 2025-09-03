import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadActividadesComponent } from './load-actividades.component';

describe('LoadActividadesComponent', () => {
  let component: LoadActividadesComponent;
  let fixture: ComponentFixture<LoadActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadActividadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
