import { Injectable } from '@angular/core';
import { Producto, ProductoConID } from '../modelo/producto';
import { Carro } from './../modelo/carro';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  public carro: Array<Carro> = [];

  constructor() { }

  getCarrito() {
    return this.carro;
  }

  public agregarCarro(producto: ProductoConID) {
    const item = this.carro.find(productoItem => {
      return (productoItem.producto.id === producto.id)
    })

    if (item !== undefined) {
      item.cantidad++;

    } else {
      const add: Carro = {
        producto,
        cantidad: 1,
        total: producto.precioVenta * 1
      };
      this.carro.push(add);
    }

    console.log(this.carro)
  }

  public vaciarCarro() {
    this.carro = [];
  }


}
