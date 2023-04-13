import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPisoDialogComponent } from './crear-piso-dialog.component';

describe('CrearPisoDialogComponent', () => {
  let component: CrearPisoDialogComponent;
  let fixture: ComponentFixture<CrearPisoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPisoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPisoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
