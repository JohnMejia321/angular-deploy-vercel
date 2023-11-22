import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedirPlatoComponent } from './pedir-plato/pedir-plato.component';
import { InicioComponent } from './inicio/inicio.component';
import { BodegaComponent } from './bodega/bodega.component';
import { RecetasComponent } from './recetas/recetas.component';
import { HistorialPedidosComponent } from './historial-pedidos/historial-pedidos.component';
import { IngredienteCompradoComponent } from './ingrediente-comprado/ingrediente-comprado.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'pedir-plato', component: PedirPlatoComponent },
  { path: 'pedir-bodega', component: BodegaComponent },
  { path: 'ver-recetas', component: RecetasComponent },
  { path: 'historial-pedidos', component: HistorialPedidosComponent },
  { path: 'ingredientes-comprados', component: IngredienteCompradoComponent },




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
