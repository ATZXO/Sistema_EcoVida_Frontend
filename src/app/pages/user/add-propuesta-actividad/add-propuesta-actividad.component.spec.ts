import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropuestaActividadComponent } from './add-propuesta-actividad.component';

describe('AddPropuestaActividadComponent', () => {
  let component: AddPropuestaActividadComponent;
  let fixture: ComponentFixture<AddPropuestaActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPropuestaActividadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPropuestaActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
