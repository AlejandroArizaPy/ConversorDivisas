// currency-conversion.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionService {
  private apiUrl = 'https://api.currencylayer.com/';
  private accessKey = 'tu_access_key'; // Reemplaza con tu clave

  constructor(private http: HttpClient) {}

  // Método para realizar la conversión
  convertCurrency(from: string, to: string, amount: number): Observable<any> {
    const endpoint = `convert?access_key=${this.accessKey}&from=${from}&to=${to}&amount=${amount}`;
    return this.http.get(`${this.apiUrl}${endpoint}`);
  }
}
