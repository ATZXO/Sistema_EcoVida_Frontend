import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVerificarActividadComponent } from './view-verificar-actividad.component';

describe('ViewVerificarActividadComponent', () => {
  let component: ViewVerificarActividadComponent;
  let fixture: ComponentFixture<ViewVerificarActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewVerificarActividadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVerificarActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
