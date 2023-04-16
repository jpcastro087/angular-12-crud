import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPisoDialogComponent } from './eliminar-piso-dialog.component';

describe('EliminarPisoDialogComponent', () => {
  let component: EliminarPisoDialogComponent;
  let fixture: ComponentFixture<EliminarPisoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPisoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPisoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
