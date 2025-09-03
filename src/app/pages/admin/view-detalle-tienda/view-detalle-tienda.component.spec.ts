import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetalleTiendaComponent } from './view-detalle-tienda.component';

describe('ViewDetalleTiendaComponent', () => {
  let component: ViewDetalleTiendaComponent;
  let fixture: ComponentFixture<ViewDetalleTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewDetalleTiendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDetalleTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
