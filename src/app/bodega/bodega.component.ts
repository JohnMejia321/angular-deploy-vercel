import { Component } from '@angular/core';
import { RestauranteService } from '../RestauranteService';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.css']
})
export class BodegaComponent {

  platoAleatorio: any; // Propiedad para almacenar el plato aleatorio

  constructor(private restauranteService:RestauranteService) {}


  ngOnInit() {
    // Este código se ejecutará cuando el componente se cargue
    this.pedirPlato()
  }


  pedirPlato() {
    // Realiza una solicitud para obtener un plato aleatorio
    this.restauranteService.hacerPedido().subscribe(
      (plato) => {
        this.platoAleatorio = plato;
        this.platoAleatorio.ingredientes = this.getIngredientes(this.platoAleatorio.ingredientes);
      },
      (error) => {
        console.error('Error al obtener el plato aleatorio:', error);
      }
    );
  }

  getIngredientes(ingredientes: any) {
    // Convierte el objeto de ingredientes en un array de objetos con nombre y cantidad
    return Object.keys(ingredientes).map((nombre) => ({
      nombre,
      cantidad: ingredientes[nombre]
    }));
  }

}
