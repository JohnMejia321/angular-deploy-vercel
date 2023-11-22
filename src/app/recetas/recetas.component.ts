import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../RestauranteService';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {
[x: string]: any;

   recetas: any[] = [];

  
  ngOnInit() {
    this.traerRecetas()
   
   }

   constructor(private restauranteService:RestauranteService) {}

   traerRecetas(){
    this.restauranteService.verRecetas().subscribe(
      (datosRecetas) => {
       
        this.recetas= datosRecetas
        console.log(this.recetas)
       
      },
      (error) => {
        // Manejar el error en caso de que la solicitud falle
        console.error('Error al obtener recetas:', error);
      }
    );
  }


  getIngredientes(ingredientes: any): string[] {
    return Object.entries(ingredientes || {}).map(([key, value]) => `${key}: ${value}`);
  }
  



  
   }



