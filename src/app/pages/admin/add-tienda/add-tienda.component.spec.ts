import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTiendaComponent } from './add-tienda.component';

describe('AddTiendaComponent', () => {
  let component: AddTiendaComponent;
  let fixture: ComponentFixture<AddTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTiendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
