import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PedirPlatoComponent } from './pedir-plato/pedir-plato.component';
import { InicioComponent } from './inicio/inicio.component';
import { BodegaComponent } from './bodega/bodega.component';
import { RecetasComponent } from './recetas/recetas.component';
import { HistorialPedidosComponent } from './historial-pedidos/historial-pedidos.component';
import { IngredienteCompradoComponent } from './ingrediente-comprado/ingrediente-comprado.component'; // Importa HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    PedirPlatoComponent,
    InicioComponent,
    BodegaComponent,
    RecetasComponent,
    HistorialPedidosComponent,
    IngredienteCompradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Añade HttpClientModule a los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
