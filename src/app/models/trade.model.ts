export interface Trade {
  id?: number;
  piso: number;
  porcentajeActual: number;
  porcentajeMinimo: number;
  porcentajeMaximo: number;
  porcentajeEntrada: number;
  precioEntrada: number;
  takeProfit: number;
  invertido: number;
  moneda:string;
}
