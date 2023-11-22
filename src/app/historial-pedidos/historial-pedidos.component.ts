import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial-pedidos',
  templateUrl: './historial-pedidos.component.html',
  styleUrls: ['./historial-pedidos.component.css']
})
export class HistorialPedidosComponent implements OnInit {

  historialPedidos: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Recuperar el historial de pedidos desde el almacenamiento local
    const historialGuardado = localStorage.getItem('historialPedidos');
    this.historialPedidos = historialGuardado ? JSON.parse(historialGuardado) : [];
  }

}
