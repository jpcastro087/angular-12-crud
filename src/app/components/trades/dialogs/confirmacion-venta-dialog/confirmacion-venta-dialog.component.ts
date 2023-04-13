import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TradeVentaRequest } from 'src/app/models/trade.venta.request';
import { TradeService } from 'src/app/services/trade.service';

@Component({
  selector: 'app-confirmacion-venta-dialog',
  templateUrl: './confirmacion-venta-dialog.component.html',
  styleUrls: ['./confirmacion-venta-dialog.component.css']
})
export class ConfirmacionVentaDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmacionVentaDialogComponent>,
    private tradeService:TradeService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  retornarColor(value: number) {
    if (value < 0)
      return 'red';
    else
      return 'green';
  }

  vender() {
    console.log(this.data);
    const ventaRequest: TradeVentaRequest = {
      idPiso: this.data.ventaRequest.idPiso,
      porcentaje: this.data.ventaRequest.porcentaje
    }
    this.tradeService.vender(ventaRequest).subscribe(data =>{
      this.dialogRef.close();
    });
  }

}
