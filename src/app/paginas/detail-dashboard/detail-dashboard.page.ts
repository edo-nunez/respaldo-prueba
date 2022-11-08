import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoConID } from 'src/app/productos/modelo/producto';
import { CarritoService } from 'src/app/productos/servicio/carrito.service';
import { ProductservService } from 'src/app/productos/servicio/productserv.service';

@Component({
  selector: 'app-detail-dashboard',
  templateUrl: './detail-dashboard.page.html',
  styleUrls: ['./detail-dashboard.page.scss'],
})
export class DetailDashboardPage implements OnInit {

  public idActiva = 0;
  public productoActivo!: ProductoConID;

  public detalle: ProductoConID;

  constructor(
    private router: Router,
    private rutaActiva: ActivatedRoute,
    private apiProducto: ProductservService,

  ) { }

  ngOnInit() {


  }

  ionViewWillEnter() {
    this.rutaActiva.params.subscribe(
      parametros => {
        this.idActiva = +parametros.idProducto;
        this.apiProducto.obtenerProductoPorID(this.idActiva)
          .subscribe(
            datos => {
              if (datos) {
                this.productoActivo = datos;
                console.log(this.productoActivo)

              } else {
                this.router.navigate(['']);
              }
            }
          )
      }
    )
  }
}
