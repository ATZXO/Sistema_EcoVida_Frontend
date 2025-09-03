import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDetalleTiendaComponent } from './load-detalle-tienda.component';

describe('LoadDetalleTiendaComponent', () => {
  let component: LoadDetalleTiendaComponent;
  let fixture: ComponentFixture<LoadDetalleTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadDetalleTiendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadDetalleTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
