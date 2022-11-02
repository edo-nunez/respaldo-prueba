import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/productos/modelo/carro';
import { CarritoService } from 'src/app/productos/servicio/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  public carro: Array<Carro> = [];

  constructor(
    private carrito: CarritoService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.carro = this.carrito.carro;
    console.log(this.carro);
  }

}
