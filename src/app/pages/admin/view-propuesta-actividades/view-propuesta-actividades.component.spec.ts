import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPropuestaActividadesComponent } from './view-propuesta-actividades.component';

describe('ViewPropuestaActividadesComponent', () => {
  let component: ViewPropuestaActividadesComponent;
  let fixture: ComponentFixture<ViewPropuestaActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewPropuestaActividadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPropuestaActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
