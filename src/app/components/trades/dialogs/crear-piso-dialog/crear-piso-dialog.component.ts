import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TradePisoRequest } from 'src/app/models/trade.piso.request';
import { TradeService } from 'src/app/services/trade.service';

@Component({
  selector: 'app-crear-piso-dialog',
  templateUrl: './crear-piso-dialog.component.html',
  styleUrls: ['./crear-piso-dialog.component.css']
})
export class CrearPisoDialogComponent {

  public formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CrearPisoDialogComponent>,
    private tradeService: TradeService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.formGroup = this.formBuilder.group({
      margen: [''],
      porcentajeEntrada: [''],
      takeProfit: [''],
      porcentajeInvertido: [''],
      piso: [''],
      moneda: ['']
    });

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  crear() {
    const tradePisoRequest: TradePisoRequest = {
      porcentajeBajada: this.formGroup.get("porcentajeEntrada")?.value,
      porcentajeInvertido: this.formGroup.get("porcentajeInvertido")?.value,
      takeProfit: this.formGroup.get("takeProfit")?.value,
      margen: this.formGroup.get("margen")?.value,
      nro: this.formGroup.get("piso")?.value,
      moneda: this.formGroup.get("moneda")?.value,
    }
    this.tradeService.crearPiso(tradePisoRequest).subscribe(data => {
      this.dialogRef.close();
    })
  }



}
