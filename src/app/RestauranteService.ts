import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  private baseUrl: string = 'https://deploy-laravel-rail-production.up.railway.app/api/api'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  obtenerDatosIniciales(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  hacerPedido(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, {});
  }

  verRecetas(): Observable<any> {
    return this.http.get("https://deploy-laravel-rail-production.up.railway.app/api/data", {});
  }

  verFaltantes(): Observable<any> {
    return this.http.get("https://deploy-laravel-rail-production.up.railway.app/api/faltante", {});
  }
}
