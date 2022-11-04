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

  public eliminar(id: number) {
    for (let i = 0; i < this.carro.length; i++) {
      if (this.carro[i].producto.id === id) {
        const pos = this.carro.indexOf(this.carro[i])
        console.log(pos)
        this.carro.splice(pos, 1);
        alert("Eliminado del carrito")
      }
    }
  }

  public sumar(id: number) {
    for (let i = 0; i < this.carro.length; i++) {
      if (this.carro[i].producto.id === id) {
        this.carro[i].cantidad++;

        //console.log(cant)
      }
    }
  }

  public restar(id: number) {
    for (let i = 0; i < this.carro.length; i++) {
      if (this.carro[i].producto.id === id) {
        const pos = this.carro.indexOf(this.carro[i])
        this.carro[i].cantidad--;
        if (this.carro[i].cantidad === 0) {
          alert("Eliminado del carrito")
          this.eliminar(id);
        }
      }
    }

  }

}
