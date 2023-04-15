import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MonedaVolumen } from '../models/monedavolumen.model';
import { TradePisoRequest } from '../models/trade.piso.request';
import { TradeVentaRequest } from '../models/trade.venta.request';

const baseUrl = 'http://'+environment.host+'/monedavolumen';
const monedaVolumenAll = '/all';

@Injectable({
  providedIn: 'root'
})
export class MonedaVolumenService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<MonedaVolumen[]> {
    return this.http.get<MonedaVolumen[]>(baseUrl + monedaVolumenAll);
  }


}
