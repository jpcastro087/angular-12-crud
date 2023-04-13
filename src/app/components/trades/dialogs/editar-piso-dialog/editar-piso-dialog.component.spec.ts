import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPisoDialogComponent } from './editar-piso-dialog.component';

describe('EditarPisoDialogComponent', () => {
  let component: EditarPisoDialogComponent;
  let fixture: ComponentFixture<EditarPisoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPisoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPisoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
