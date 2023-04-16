import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TradePisoRequest } from '../models/trade.piso.request';
import { TradeVentaRequest } from '../models/trade.venta.request';

const baseUrl = 'http://'+environment.host+'/trade';
const tradeDetailsUrl = '/details';
const tradeVentaUrl = '/venta';
const updatePisoUrl = '/update/piso';
const createPisoUrl = '/create/piso';
const deletePisoUrl = '/delete/piso';

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

  deletePiso(tradePiso: TradePisoRequest): Observable<any[]> {
    return this.http.post<any[]>(baseUrl + deletePisoUrl, tradePiso);
  }


}
