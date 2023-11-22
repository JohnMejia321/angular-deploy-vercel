// app.component.ts

import { Component, OnInit } from '@angular/core';
import { RestauranteService } from './RestauranteService'; // Importa el servicio
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ordenesEnPreparacion: string[] = [];
  ingredientes: any[] = [];
  historialCompras: string[] = [];
  historialPedidos: string[] = [];
  recetas: any[] = [];
  pedido: any= {};

  constructor(private restauranteService: RestauranteService) {}

  isObject(value: any): boolean {
    return typeof value === 'object';
  }


  ngOnInit(): void {
    // Cuando se carga el componente, obtén los datos iniciales desde el servicio
    this.obtenerDatosIniciales();
  }

  hacerPedido(): void {
    // Simplemente llama a un método del servicio para hacer un pedido
    this.restauranteService.hacerPedido().subscribe(
      (respuesta:any) => {
        // Maneja la respuesta del pedido si es necesario
        console.log('Pedido realizado:', respuesta);
        this.pedido= respuesta
      },
      (error:any) => {
        // Maneja errores si ocurren
        console.error('Error al realizar el pedido:', error);
      }
    );
  }

  private obtenerDatosIniciales(): void {
    // Obtiene los datos iniciales desde el servicio y actualiza las propiedades
    this.restauranteService.obtenerDatosIniciales().subscribe(
      (datos:any) => {
      },
      (error:any) => {
        // Maneja errores si ocurren al obtener los datos iniciales
        console.error('Error al obtener datos iniciales:', error);
      }
    );
  }
}
