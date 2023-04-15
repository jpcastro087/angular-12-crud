import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonedaVolumenComponent } from './moneda-volumen.component';

describe('MonedaVolumenComponent', () => {
  let component: MonedaVolumenComponent;
  let fixture: ComponentFixture<MonedaVolumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonedaVolumenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonedaVolumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
