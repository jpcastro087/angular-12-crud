import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonedaVolumenComponent } from './components/moneda-volumen/moneda-volumen.component';
import { TradesComponent } from './components/trades/trades.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'trades', component: TradesComponent },
  { path: 'moneda-volumen', component: MonedaVolumenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
