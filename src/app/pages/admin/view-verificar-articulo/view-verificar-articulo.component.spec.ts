import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVerificarArticuloComponent } from './view-verificar-articulo.component';

describe('ViewVerificarArticuloComponent', () => {
  let component: ViewVerificarArticuloComponent;
  let fixture: ComponentFixture<ViewVerificarArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewVerificarArticuloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVerificarArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
