import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadArticulosComponent } from './load-articulos.component';

describe('LoadArticulosComponent', () => {
  let component: LoadArticulosComponent;
  let fixture: ComponentFixture<LoadArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadArticulosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
