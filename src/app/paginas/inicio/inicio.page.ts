import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/productos/modelo/carro';
import { CarritoService } from 'src/app/productos/servicio/carrito.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public carro: Array<Carro> = [];

  constructor(
    private carrito: CarritoService
  ) {
    this.carro = this.carrito.carro;
  }

  get carritoCompras() {
    return this.carrito.carro;
  }

  ngOnInit() {

  }

}
