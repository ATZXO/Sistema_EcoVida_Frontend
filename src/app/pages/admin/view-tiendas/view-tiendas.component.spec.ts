import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTiendasComponent } from './view-tiendas.component';

describe('ViewTiendasComponent', () => {
  let component: ViewTiendasComponent;
  let fixture: ComponentFixture<ViewTiendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTiendasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTiendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
