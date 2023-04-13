import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TradePisoRequest } from 'src/app/models/trade.piso.request';
import { TradeService } from 'src/app/services/trade.service';

@Component({
  selector: 'app-editar-piso-dialog',
  templateUrl: './editar-piso-dialog.component.html',
  styleUrls: ['./editar-piso-dialog.component.css']
})
export class EditarPisoDialogComponent {

  public formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditarPisoDialogComponent>,
    private tradeService: TradeService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.formGroup = this.formBuilder.group({
      margen: [''],
      porcentajeEntrada: [''],
      takeProfit: [''],
      porcentajeInvertido: ['']
    });

    this.setTakeProfitRecomendado();
    this.setPorcentajeEntrada();
    this.setPorcentajeInvertido();
    this.setMargen();
    console.log(this.data)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editar(){
    const tradePisoRequest :TradePisoRequest ={
      idPiso:this.data.idPiso,
      porcentajeBajada:this.formGroup.get("porcentajeEntrada")?.value,
      porcentajeInvertido:this.formGroup.get("porcentajeInvertido")?.value,
      takeProfit:this.formGroup.get("takeProfit")?.value,
      margen:this.formGroup.get("margen")?.value,
      nro:this.data.piso,
      moneda:this.data.moneda
    }
    this.tradeService.editarPiso(tradePisoRequest).subscribe(data =>{
      this.dialogRef.close();
    })
  }

  setTakeProfitRecomendado() {
    if (this.data.piso > 1) {
      const pisosAnteriores = this.getPisosAnteriores();
      const sumaPorcentajeEntrada = this.getSumaPorcentajeEntradaPisos(pisosAnteriores);
      this.formGroup.get("takeProfit")?.setValue(sumaPorcentajeEntrada)
    }
  }

  setPorcentajeEntrada(){
    this.formGroup.get("porcentajeEntrada")?.setValue(this.data.porcentajeEntrada)
  }

  setPorcentajeInvertido(){
    this.formGroup.get("porcentajeInvertido")?.setValue(this.data.porcentajeInvertido)
  }

  setMargen(){
    if(this.data.piso === 1){
      this.formGroup.get("margen")?.setValue(this.data.margen)
    }
  }


  getSumaPorcentajeEntradaPisos(trades:any[]){
    let porcentajeEntrada = 0;
    for (let i = 0; i < trades.length; i++) {
      const trade = trades[i];
      
      porcentajeEntrada += -(trade.porcentajeEntrada);

    }
    return porcentajeEntrada;
  }


  getPisosAnteriores() {
    const trades = this.data.trades;
    const pisosAnteriores = [];
    for (let i = 0; i < trades.length; i++) {
      const trade = trades[i];
      if(trade.moneda === this.data.moneda){
        if(trade.piso <= this.data.piso){
          pisosAnteriores.push(trade);
        }
      }
    }
    return pisosAnteriores;
  }




}
