import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Trade } from 'src/app/models/trade.model';
import { TradeService } from 'src/app/services/trade.service';




@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements OnInit {

  displayedColumns: string[] = ['piso', 'porcentajeActual', 'porcentajeMinimo', 'porcentajeMaximo', 'porcentajeEntrada', 'precioEntrada', 'takeProfit', 'invertido','moneda'];

  dataSource = new MatTableDataSource<Trade>([]);

  selection = new SelectionModel<Trade>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private tradeService :TradeService) { }

  ngOnInit(): void {

    
    this.tradeService.getAll().subscribe(trades =>{
      this.dataSource = new MatTableDataSource<Trade>(trades);
    });

    
  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log(this.paginator)
  }


  applyFilter(filterValue: string) {
  }

  fireDelete() {
  }

}
