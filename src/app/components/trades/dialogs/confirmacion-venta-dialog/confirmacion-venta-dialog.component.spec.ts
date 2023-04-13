import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionVentaDialogComponent } from './confirmacion-venta-dialog.component';

describe('ConfirmacionVentaDialogComponent', () => {
  let component: ConfirmacionVentaDialogComponent;
  let fixture: ComponentFixture<ConfirmacionVentaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacionVentaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionVentaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
