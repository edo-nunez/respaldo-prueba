import { Component, Input, OnInit } from '@angular/core';
import { Carro } from 'src/app/productos/modelo/carro';
import { CarritoService } from 'src/app/productos/servicio/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {

  @Input() public carro: Array<Carro> = [];

  constructor(private carrito: CarritoService) {
  }

  ngOnInit() {

  }

}
