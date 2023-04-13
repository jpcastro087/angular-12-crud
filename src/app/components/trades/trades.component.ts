import { SelectionModel } from '@angular/cdk/collections';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Trade } from 'src/app/models/trade.model';
import { TradeVentaRequest } from 'src/app/models/trade.venta.request';
import { TradeService } from 'src/app/services/trade.service';
import { ConfirmacionVentaDialogComponent } from './dialogs/confirmacion-venta-dialog/confirmacion-venta-dialog.component';
import { CrearPisoDialogComponent } from './dialogs/crear-piso-dialog/crear-piso-dialog.component';
import { EditarPisoDialogComponent } from './dialogs/editar-piso-dialog/editar-piso-dialog.component';




@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements OnInit {

  displayedColumns: string[] = ['piso', 'porcentajeActual', 'porcentajeMinimo', 'porcentajeMaximo', 'porcentajeEntrada', 'precioEntrada', 'takeProfit', 'invertido', 'moneda', 'fecha', 'actionsColumn'];

  dataSource = new MatTableDataSource<Trade>([]);

  selection = new SelectionModel<Trade>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public formGroup: FormGroup;

  private windowActive: boolean = true;


  constructor(private formBuilder: FormBuilder,
    private tradeService: TradeService,
    public dialog: MatDialog) {
    this.formGroup = this.formBuilder.group({
      filter: ['']
    });
  }


  ngOnInit(): void {
    setTimeout(() => {
      this.tradeService.getAll().subscribe(trades => {
        this.dataSource = new MatTableDataSource<Trade>(trades);
        this.dataSource.filter = this.formGroup.get("filter")?.value.trim().toLowerCase();

        if (this.windowActive) {
          this.ngOnInit()
        } else {
          return;
        }

      });
    }, 2000);
  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  applyFilter() {
    console.log(this.formGroup.get("filter")?.value)
    this.dataSource.filter = this.formGroup.get("filter")?.value.trim().toLowerCase();
  }



  @HostListener('document:visibilitychange', ['$event'])
  appVisibility() {
    if (document.hidden) {
      //do whatever you want
      this.windowActive = false;
    }
    else {
      //do whatever you want
      this.windowActive = true;
      this.ngOnInit();
    }
  }

  retornarColor(value: number) {
    if (value < 0)
      return 'red';
    else
      return 'green';
  }

  confirmarVenta(row: any) {
    console.log(row)

    const ventaRequest: TradeVentaRequest = {
      idPiso: row.idPiso,
      porcentaje: row.porcentajeActual
    }

    const dialogRef = this.dialog.open(ConfirmacionVentaDialogComponent, {
      width: '380px',
      data: { ventaRequest, porcentajeActual: row.porcentajeActual }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  editarPiso(row: any) {
    const trades = this.dataSource.data;
    const dialogRef = this.dialog.open(EditarPisoDialogComponent, {
      width: '380px',
      data: {
        moneda: row.moneda,
        piso: row.piso,
        trades: trades,
        porcentajeEntrada: row.porcentajeEntrada,
        porcentajeInvertido: row.invertido,
        idPiso:row.idPiso,
        margen:row.margen
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  crearPiso(){
    const trades = this.dataSource.data;
    const dialogRef = this.dialog.open(CrearPisoDialogComponent, {
      width: '380px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  getTotalInvertido() {
    const trades = this.dataSource.data;
    let suma = 0;
    trades.forEach(trade => {
      suma += trade.invertido
    });
    return suma;
  }



}
