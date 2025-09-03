import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadTiendasComponent } from './load-tiendas.component';

describe('LoadTiendasComponent', () => {
  let component: LoadTiendasComponent;
  let fixture: ComponentFixture<LoadTiendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadTiendasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadTiendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
