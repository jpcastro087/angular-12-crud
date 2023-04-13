import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TradePisoRequest } from '../models/trade.piso.request';
import { TradeVentaRequest } from '../models/trade.venta.request';

const baseUrl = 'http://'+environment.host+'/';
const tradeDetailsUrl = 'details/trades';
const tradeVentaUrl = 'trade/venta';
const updatePisoUrl = 'trade/update/piso';
const createPisoUrl = 'trade/create/piso';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl + tradeDetailsUrl);
  }

  vender(tradeVenta: TradeVentaRequest): Observable<any[]> {
    return this.http.post<any[]>(baseUrl + tradeVentaUrl, tradeVenta);
  }

  editarPiso(tradePiso: TradePisoRequest): Observable<any[]> {
    return this.http.put<any[]>(baseUrl + updatePisoUrl, tradePiso);
  }

  crearPiso(tradePiso: TradePisoRequest): Observable<any[]> {
    return this.http.post<any[]>(baseUrl + createPisoUrl, tradePiso);
  }


}
