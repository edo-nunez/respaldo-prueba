import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoConID } from 'src/app/productos/modelo/producto';
import { CarritoService } from 'src/app/productos/servicio/carrito.service';
import { ProductservService } from 'src/app/productos/servicio/productserv.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  public idActiva = 0;
  public productoActivo!: ProductoConID;

  public detalle: ProductoConID;

  constructor(
    private router: Router,
    private rutaActiva: ActivatedRoute,
    private apiProducto: ProductservService,
    private carroService: CarritoService
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

              } else {
                this.router.navigate(['']);
              }
            }
          )
      }
    )
  }

  public addCart() {
    this.carroService.agregarCarro(this.productoActivo);
    alert("Producto agregado al carrito")
  }

}
