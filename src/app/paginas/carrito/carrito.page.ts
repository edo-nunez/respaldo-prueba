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
  public valorTotal: number = 0;
  public selectdItems = [];

  constructor(
    private carrito: CarritoService
  ) { }

  ngOnInit() {
    this.carro = this.carrito.carro;
    console.log(this.carro);

    let selected = {};
    for (let obj of this.carro) {
      selected[obj.producto.id] = { ...obj, count: 0 };
    }

    this.selectdItems = Object.keys(selected).map(key => selected[key])
    console.log(this.selectdItems);
    this.valorTotal = this.selectdItems.reduce((a, b) => a + (b.producto.precioVenta), 0);
    console.log(this.valorTotal)
  }

  ionViewWillEnter() {



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
        this.carro[i].total = this.carro[i].total + this.carro[i].producto.precioVenta;
        this.valorTotal += this.carro[i].producto.precioVenta;
      }
    }
  }

  public restar(id: number) {
    for (let i = 0; i < this.carro.length; i++) {
      if (this.carro[i].producto.id === id) {
        const pos = this.carro.indexOf(this.carro[i])
        this.carro[i].cantidad--;
        this.carro[i].total = this.carro[i].total - (this.carro[i].producto.precioVenta)
        this.valorTotal -= this.carro[i].producto.precioVenta;
        if (this.carro[i].cantidad === 0) {
          alert("Eliminado del carrito")
          this.eliminar(id);
        }
      }
    }
  }

  public sumaTotal() {

  }

}
