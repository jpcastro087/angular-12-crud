import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TradesComponent } from './components/trades/trades.component';
import { ConfirmacionVentaDialogComponent } from './components/trades/dialogs/confirmacion-venta-dialog/confirmacion-venta-dialog.component';
import { EditarPisoDialogComponent } from './components/trades/dialogs/editar-piso-dialog/editar-piso-dialog.component';
import { CrearPisoDialogComponent } from './components/trades/dialogs/crear-piso-dialog/crear-piso-dialog.component';
import { MonedaVolumenComponent } from './components/moneda-volumen/moneda-volumen.component';

@NgModule({
  declarations: [
    AppComponent,
    TradesComponent,
    ConfirmacionVentaDialogComponent,
    EditarPisoDialogComponent,
    CrearPisoDialogComponent,
    MonedaVolumenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
