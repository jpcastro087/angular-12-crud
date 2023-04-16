import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TradePisoRequest } from 'src/app/models/trade.piso.request';
import { TradeService } from 'src/app/services/trade.service';

@Component({
  selector: 'app-eliminar-piso-dialog',
  templateUrl: './eliminar-piso-dialog.component.html',
  styleUrls: ['./eliminar-piso-dialog.component.css']
})
export class EliminarPisoDialogComponent {


  constructor(
    public dialogRef: MatDialogRef<EliminarPisoDialogComponent>,
    private tradeService: TradeService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminar(){
    const tradePisoRequest :TradePisoRequest ={
      idPiso:this.data.idPiso,
      nro:this.data.piso,
      moneda:this.data.moneda
    }
    this.tradeService.deletePiso(tradePisoRequest).subscribe(data =>{
      this.dialogRef.close();
    })
  }







}
