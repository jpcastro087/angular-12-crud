import { SelectionModel } from '@angular/cdk/collections';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MonedaVolumen } from 'src/app/models/monedavolumen.model';
import { MonedaVolumenService } from 'src/app/services/monedavolumen.service';

@Component({
  selector: 'app-moneda-volumen',
  templateUrl: './moneda-volumen.component.html',
  styleUrls: ['./moneda-volumen.component.css']
})
export class MonedaVolumenComponent implements OnInit {

  displayedColumns: string[] = ['moneda', 'porcHastaMayorVolumen', 'porcHastaMenorVolumen'];

  dataSource = new MatTableDataSource<MonedaVolumen>([]);

  selection = new SelectionModel<MonedaVolumen>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public formGroup: FormGroup;

  private windowActive: boolean = true;


  constructor(private formBuilder: FormBuilder,
    private monedaVolumenService: MonedaVolumenService,
    public dialog: MatDialog) {
    this.formGroup = this.formBuilder.group({
      filter: ['']
    });
  }


  ngOnInit(): void {
    setTimeout(() => {
      this.monedaVolumenService.getAll().subscribe(monedaVolumen => {
        this.dataSource = new MatTableDataSource<MonedaVolumen>(monedaVolumen);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        if (this.windowActive) {
          // this.ngOnInit()s
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





}
