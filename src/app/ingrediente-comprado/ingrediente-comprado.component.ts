import { Component, OnInit } from '@angular/core';

import { RestauranteService } from '../RestauranteService';


@Component({
  selector: 'app-ingrediente-comprado',
  templateUrl: './ingrediente-comprado.component.html',
  styleUrls: ['./ingrediente-comprado.component.css']
})
export class IngredienteCompradoComponent implements OnInit  {

  faltantes: any[]= [];


  constructor(private restauranteService:RestauranteService) {}


  ngOnInit(){
     this.verFaltantes()
  }

  verFaltantes() {
    this.restauranteService.verFaltantes().subscribe((faltantes) => {
      console.log(faltantes);
      this.faltantes=faltantes
    });
  }


}
