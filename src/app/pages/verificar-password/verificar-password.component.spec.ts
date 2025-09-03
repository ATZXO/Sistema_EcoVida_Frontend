import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarPasswordComponent } from './verificar-password.component';

describe('VerificarPasswordComponent', () => {
  let component: VerificarPasswordComponent;
  let fixture: ComponentFixture<VerificarPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerificarPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
