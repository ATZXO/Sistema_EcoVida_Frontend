import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPropuestaArticulosComponent } from './view-propuesta-articulos.component';

describe('ViewPropuestaArticulosComponent', () => {
  let component: ViewPropuestaArticulosComponent;
  let fixture: ComponentFixture<ViewPropuestaArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewPropuestaArticulosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPropuestaArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
