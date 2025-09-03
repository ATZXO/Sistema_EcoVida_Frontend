import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropuestaArticuloComponent } from './add-propuesta-articulo.component';

describe('AddPropuestaArticuloComponent', () => {
  let component: AddPropuestaArticuloComponent;
  let fixture: ComponentFixture<AddPropuestaArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPropuestaArticuloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPropuestaArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
