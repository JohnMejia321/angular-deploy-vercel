import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../RestauranteService';

@Component({
  selector: 'app-pedir-plato',
  templateUrl: './pedir-plato.component.html',
  styleUrls: ['./pedir-plato.component.css']
})
export class PedirPlatoComponent implements OnInit {

  mostrarSpinner: boolean = false;
  platoPedido: any;
  mostrarCard: boolean = false;
  historialPedidos: any[] = [];
  mensajePlazaMercado: string | null = null;

  constructor(private restauranteService: RestauranteService) {}

  ngOnInit() {
    const historialGuardado = localStorage.getItem('historialPedidos');
    this.historialPedidos = historialGuardado ? JSON.parse(historialGuardado) : [];
  }

  pedirPlato() {
    this.mostrarSpinner = true;
    this.mostrarCard = false;

    setTimeout(() => {
      this.restauranteService.hacerPedido().subscribe(
        (plato) => {
          this.platoPedido = plato;
          this.platoPedido.ingredientes = this.getIngredientes(this.platoPedido.ingredientes);
          this.historialPedidos.unshift(this.platoPedido);
          this.mostrarSpinner = false;
          this.mostrarCard = true;
          localStorage.setItem('historialPedidos', JSON.stringify(this.historialPedidos));

          // Verificar si el plato proviene de la plaza de mercado
          if (this.platoPedido.mensaje && this.platoPedido.ingredienteFaltante) {
            this.mensajePlazaMercado = `La orden se hara efectiva ,despues de comprar  en la plaza de mercado. Falta el ingrediente ${this.platoPedido.ingredienteFaltante.nombre}.`;
          } else {
            this.mensajePlazaMercado = null;
          }
        },
        (error) => {
          console.error('Error al obtener el plato aleatorio:', error);
          this.mostrarSpinner = false;
          this.mensajePlazaMercado = null;
        }
      );
    }, 9000);
  }

  getIngredientes(ingredientes: any) {
    return Object.keys(ingredientes).map((nombre) => ({
      nombre,
      cantidad: ingredientes[nombre]
    }));
  }
}
