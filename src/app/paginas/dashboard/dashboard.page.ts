import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductservService } from 'src/app/productos/servicio/productserv.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { ProductoConID } from 'src/app/productos/modelo/producto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  @ViewChild(IonInfiniteScroll)
  public scroll: IonInfiniteScroll;
  public productos: Array<ProductoConID> = [];

  constructor(
    private apiProducto: ProductservService,
    private router: Router
  ) { }

  ngOnInit() {
    this.apiProducto.listarPrimerosElementos()
    this.apiProducto.listaProductos$.subscribe(datosActualizados => {
      this.productos = datosActualizados;
      if (this.scroll) {
        this.scroll.complete();
      }
    })
  }

  ionViewWillEnter() {

  }
  public cargarMasDatos() {
    this.apiProducto.obtenerMasElementos();
  }

}
