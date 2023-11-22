import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  private baseUrl: string = 'http://localhost:8000/api/api'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  obtenerDatosIniciales(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  hacerPedido(): Observable<any> {
    // Puedes agregar más lógica aquí según tu backend
    return this.http.get(`${this.baseUrl}`, {});
  }

  verRecetas(): Observable<any> {
    // Puedes agregar más lógica aquí según tu backend
    return this.http.get("http://localhost:8000/api/data", {});
  }

  verFaltantes(): Observable<any> {
    // Puedes agregar más lógica aquí según tu backend
    return this.http.get("http://localhost:8000/api/faltante", {});
  }
}
