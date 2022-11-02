import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductservService } from './../../servicio/productserv.service';
import { ProductoConID } from './../../modelo/producto';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.scss'],
})
export class ListaProductoComponent implements OnInit {
  @ViewChild(IonInfiniteScroll)
  public scroll: IonInfiniteScroll;
  public productos: Array<ProductoConID> = [];

  constructor(
    private apiProducto: ProductservService,
  ) { }

  ngOnInit() {
    this.apiProducto.listarPrimerosElementos();
    this.apiProducto.listaProductos$.subscribe(datos => {
      this.productos = datos;

      if (this.scroll) {
        this.scroll.complete()
      }
    })

  }

  public cargarMasDatos() {
    this.apiProducto.obtenerMasElementos();
  }

}
